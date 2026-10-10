"use client";

import { useState } from "react";
import { ArrowIcon } from "./icons";
import { RUBROS, SISTEMAS, DESTACADOS, type Rubro } from "@/lib/sistemas";

export function Indice() {
  const [rubro, setRubro] = useState<Rubro | "todos">("todos");
  const offset = DESTACADOS.length;
  const filas = SISTEMAS.map((s, i) => ({ ...s, n: i + offset + 1 })).filter(
    (s) => rubro === "todos" || s.rubro === rubro,
  );
  const cuenta = (r: Rubro) =>
    SISTEMAS.filter((s) => s.rubro === r).length +
    DESTACADOS.filter((d) => d.rubro === r).length;

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar por rubro"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        <Chip activo={rubro === "todos"} onClick={() => setRubro("todos")}>
          Todos
        </Chip>
        {RUBROS.map((r) => (
          <Chip key={r} activo={rubro === r} onClick={() => setRubro(r)}>
            {r}
            <span className="font-mono text-[11px] opacity-60">{cuenta(r)}</span>
          </Chip>
        ))}
      </div>

      <ol className="mt-8 border-t border-ink" aria-live="polite">
        {filas.map((s) => (
          <li
            key={s.nombre}
            className="group grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-1 border-b border-line py-5 transition-colors hover:bg-paper-dim sm:grid-cols-[3rem_14rem_1fr_auto] sm:items-baseline sm:gap-x-6 sm:px-2"
          >
            <span className="font-mono text-sm tabular-nums text-ink-soft">
              {String(s.n).padStart(2, "0")}
            </span>
            <div>
              <h4 className="text-lg font-bold tracking-tight">{s.nombre}</h4>
              <p className="mt-0.5 text-[13px] text-ink-soft">{s.donde}</p>
            </div>
            <p className="col-start-2 text-[15px] leading-relaxed text-ink-soft sm:col-start-auto">
              {s.que}
            </p>
            <div className="col-start-2 mt-2 flex items-center gap-4 sm:col-start-auto sm:mt-0 sm:justify-end">
              {s.enProduccion && (
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.08em] text-ok">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                  En producción
                </span>
              )}
              {s.url && (
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${s.nombre}`}
                  className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-electric underline-offset-4 hover:underline"
                >
                  Ver
                  <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
      {rubro !== "todos" && filas.length === 0 && (
        <p className="py-8 text-ink-soft">
          Los casos de este rubro están arriba, en grande.
        </p>
      )}
    </div>
  );
}

function Chip({
  activo,
  onClick,
  children,
}: {
  activo: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={activo}
      className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric ${
        activo
          ? "border-ink bg-ink text-paper"
          : "border-line bg-paper text-ink hover:border-ink"
      }`}
    >
      {children}
    </button>
  );
}
