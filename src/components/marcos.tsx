import Image from "next/image";
import type { Captura } from "@/lib/sistemas";

export function Navegador({
  captura,
  url,
  priority = false,
  sizes = "(min-width: 1024px) 640px, 100vw",
  className = "",
}: {
  captura: Captura;
  url: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-line bg-paper shadow-[0_24px_48px_-20px_rgba(33,33,33,0.28),0_2px_6px_rgba(33,33,33,0.06)] ${className}`}
    >
      <div className="flex h-8 items-center gap-3 border-b border-line bg-paper-dim px-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </span>
        <span className="mx-auto truncate rounded-md bg-paper px-3 py-0.5 font-mono text-[10px] text-ink-soft">
          {url}
        </span>
        <span className="w-[34px]" aria-hidden="true" />
      </div>
      <Image
        src={captura.src}
        alt={captura.alt}
        width={captura.ancho}
        height={captura.alto}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </figure>
  );
}

export function Celular({
  captura,
  priority = false,
  className = "",
}: {
  captura: Captura;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[22px] border-[5px] border-ink bg-ink shadow-[0_28px_44px_-18px_rgba(33,33,33,0.45)] ${className}`}
    >
      <Image
        src={captura.src}
        alt={captura.alt}
        width={captura.ancho}
        height={captura.alto}
        sizes="200px"
        priority={priority}
        className="block aspect-[390/700] h-auto w-full rounded-[17px] object-cover object-top"
      />
    </figure>
  );
}
