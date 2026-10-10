import { Nav } from "@/components/nav";
import { Logo, LogoGlyph } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { Indice } from "@/components/indice";
import { Navegador, Celular } from "@/components/marcos";
import { WhatsAppIcon, InstagramIcon, ArrowIcon } from "@/components/icons";
import { WHATSAPP_NUMBER, WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/constants";
import {
  DESTACADOS,
  TOTAL_SISTEMAS,
  EN_PRODUCCION,
  type Destacado,
} from "@/lib/sistemas";

const [HR, PORTOFINO, GUARDIARIO] = DESTACADOS;

const ADEMAS = [
  {
    titulo: "Bots de WhatsApp con IA",
    detalle:
      "Atienden consultas, muestran tu stock real y derivan la venta las 24 horas. También para que los choferes rindan cobros mandando una foto del comprobante.",
  },
  {
    titulo: "Webs comerciales",
    detalle:
      "Sitios rápidos para negocios reales: catálogo administrable, reservas y contacto directo a WhatsApp, casi siempre conectados al mismo sistema.",
  },
  {
    titulo: "Soporte directo",
    detalle:
      "Cuando algo hay que ajustar, nos escribís a nosotros. Sin tickets ni call center: los mismos que lo construyeron.",
  },
];

const PASOS = [
  {
    titulo: "Contanos el problema",
    detalle:
      "Por WhatsApp, como te salga: «pierdo stock», «no sé qué cobró el chofer», «las reservas están en un cuaderno».",
  },
  {
    titulo: "Propuesta concreta",
    detalle:
      "Qué va a hacer el sistema, cuánto sale y cuánto tarda. Precio cerrado por proyecto, sin sorpresas.",
  },
  {
    titulo: "Lo construimos en semanas",
    detalle:
      "Desde los primeros días ves el sistema real funcionando con tus datos, no maquetas ni presentaciones.",
  },
  {
    titulo: "Lo usás y lo ajustamos",
    detalle:
      "El sistema se termina de afinar con el uso real, con soporte directo con nosotros.",
  },
];

function CtaWhatsApp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-lg bg-electric px-6 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_-8px_rgba(0,72,255,0.6)] transition-colors hover:bg-electric-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

function Caso({ caso, n, invertido }: { caso: Destacado; n: number; invertido: boolean }) {
  return (
    <article className="border-t border-line py-14 sm:px-2 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className={`lg:col-span-5 ${invertido ? "lg:order-2 lg:col-start-8" : ""}`}>
          <h3 className="flex items-baseline gap-4 text-4xl font-extrabold tracking-[-0.03em] sm:gap-5 sm:text-5xl">
            <span className="font-mono text-sm font-normal tabular-nums tracking-normal text-ink-soft">
              {String(n).padStart(2, "0")}
            </span>
            {caso.nombre}
          </h3>
          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-ink-soft">
            <span>
              {caso.rubro} · {caso.donde}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ok">
              <span className="h-1.5 w-1.5 rounded-full bg-ok" />
              En producción
            </span>
          </p>

          <p className="mt-8 text-[17px] leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">Antes. </span>
            {caso.problema}
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink">
            <span className="font-semibold">Ahora. </span>
            {caso.sistema}
          </p>

          <ul className="mt-8 grid gap-x-6 sm:grid-cols-2">
            {caso.incluye.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 border-t border-line py-3 text-[15px] font-medium"
              >
                <svg viewBox="0 0 16 16" className="mt-1 h-3.5 w-3.5 shrink-0 text-electric" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          {caso.linkPublico && (
            <a
              href={caso.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-electric underline-offset-4 hover:underline"
            >
              Entrar a {caso.urlVisible}
              <ArrowIcon className="h-4 w-4" />
            </a>
          )}
        </div>

        <div className={`lg:col-span-7 ${invertido ? "lg:order-1 lg:col-start-1" : ""}`}>
          <div className={`relative pb-10 ${invertido ? "pr-[14%] sm:pr-[18%]" : "pl-[14%] sm:pl-[18%]"}`}>
            <Navegador captura={caso.pantalla} url={caso.urlVisible} />
            <Celular
              captura={caso.celular}
              className={`absolute bottom-0 w-[30%] max-w-[190px] ${invertido ? "right-0" : "left-0"}`}
            />
          </div>
          {caso.demo && (
            <p className={`mt-4 text-xs text-ink-soft ${invertido ? "" : "text-right"}`}>
              Capturas reales con datos de demostración
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div id="inicio" className="flex min-h-screen flex-col">
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[size:56px_56px] opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_40%,#000_20%,transparent_75%)]"
          />
          <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 px-4 pb-14 pt-28 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-32">
            <div className="lg:col-span-5">
              <h1 className="text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.4rem]">
                Tu negocio ya no entra en una planilla.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Construimos sistemas de gestión a medida para pymes: personal,
                stock, entregas, flota, reservas y cobranzas. Reemplazan el
                Excel, el cuaderno y los papelitos. En semanas, no en meses.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CtaWhatsApp>Contanos tu problema</CtaWhatsApp>
                <a
                  href="#sistemas"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-paper px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink"
                >
                  Ver los {TOTAL_SISTEMAS} sistemas
                </a>
              </div>
              <p className="mt-8 flex items-center gap-2 text-sm text-ink-soft">
                <span className="h-2 w-2 rounded-full bg-ok" />
                {EN_PRODUCCION} sistemas funcionando hoy en negocios reales
              </p>
            </div>

            <div className="relative lg:col-span-7">
              {/* Celular: dos apps grandes y legibles */}
              <div className="flex items-end justify-center gap-4 sm:hidden">
                <Reveal className="w-[46%]">
                  <Celular captura={HR.celular} priority />
                </Reveal>
                <Reveal delay={140} className="mb-8 w-[46%]">
                  <Celular captura={GUARDIARIO.celular} />
                </Reveal>
              </div>
              <p className="mt-5 text-center text-xs text-ink-soft sm:hidden">
                AzzFlow HR y Guardiario · capturas reales, datos de demostración
              </p>

              {/* Desde tablet: panel + dos celulares */}
              <div className="relative hidden pb-16 pl-[12%] sm:block">
                <Reveal>
                  <Navegador
                    captura={{
                      src: "/capturas/hr-panel-inicio.webp",
                      alt: "Inicio de AzzFlow HR: total de empleados, solicitudes pendientes, calendario del mes y notificaciones",
                      ancho: 1600,
                      alto: 1000,
                    }}
                    url={HR.urlVisible}
                    priority
                    sizes="(min-width: 1024px) 620px, 90vw"
                  />
                </Reveal>
                <Reveal delay={160} className="absolute bottom-0 left-0 w-[26%] max-w-[180px]">
                  <Celular captura={HR.celular} />
                </Reveal>
                <Reveal delay={320} className="absolute -bottom-2 right-[6%] w-[22%] max-w-[150px]">
                  <Celular captura={GUARDIARIO.celular} />
                </Reveal>
              </div>
              <p className="mt-5 hidden text-right text-xs text-ink-soft sm:block">
                AzzFlow HR y Guardiario · capturas reales, datos de demostración
              </p>
            </div>
          </div>
        </section>

        {/* Índice */}
        <section id="sistemas" className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="grid gap-6 border-t border-ink pt-10 lg:grid-cols-12 lg:items-end lg:pt-12">
            <h2 className="text-4xl font-extrabold leading-[1.04] tracking-[-0.03em] text-balance sm:text-5xl lg:col-span-8">
              {TOTAL_SISTEMAS} sistemas construidos.{" "}
              <span className="text-electric">{EN_PRODUCCION} andando hoy.</span>
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-ink-soft lg:col-span-4">
              No mostramos maquetas. Estos son los sistemas que hicimos, con
              nombre y apellido, empezando por tres que podés ver por dentro.
            </p>
          </div>

          <div className="mt-12">
            <Caso caso={HR} n={1} invertido={false} />
            <Caso caso={PORTOFINO} n={2} invertido />
            <Caso caso={GUARDIARIO} n={3} invertido={false} />
          </div>

          <div className="border-t border-ink pt-16 lg:pt-20">
            <div className="mb-10 grid gap-4 lg:grid-cols-12">
              <h3 className="text-3xl font-extrabold tracking-[-0.03em] lg:col-span-6 lg:text-4xl">
                Buscá tu rubro
              </h3>
              <p className="max-w-lg text-[17px] leading-relaxed text-ink-soft lg:col-span-6">
                Casi todos los proyectos empiezan con un «quiero eso, pero para
                mi negocio». Fijate qué ya resolvimos en algo parecido a lo tuyo.
              </p>
            </div>
            <Indice />
          </div>
        </section>

        {/* Además */}
        <section className="mx-auto w-full max-w-[1200px] px-4 py-24 sm:px-6 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-12">
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:col-span-4 lg:text-5xl">
              Alrededor del sistema
            </h2>
            <dl className="border-b border-line lg:col-span-8">
              {ADEMAS.map((a) => (
                <div key={a.titulo} className="grid gap-2 border-t border-line py-6 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <dt className="text-lg font-bold tracking-tight">{a.titulo}</dt>
                  <dd className="text-[15px] leading-relaxed text-ink-soft">{a.detalle}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Proceso */}
        <section id="proceso" className="bg-paper-dim">
          <div className="mx-auto w-full max-w-[1200px] px-4 py-24 sm:px-6 lg:py-32">
            <div className="grid gap-6 lg:grid-cols-12">
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:col-span-6 lg:text-5xl">
                Cómo trabajamos
              </h2>
              <p className="max-w-lg text-lg leading-relaxed text-ink-soft lg:col-span-6">
                Un solo canal, un precio cerrado y avances que se ven desde la
                primera semana.
              </p>
            </div>

            <ol className="mt-14 border-b border-ink/15">
              {PASOS.map((p, i) => (
                <li
                  key={p.titulo}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-1 border-t border-ink/15 py-6 sm:grid-cols-[3rem_18rem_1fr] sm:items-baseline sm:gap-x-6 sm:px-2"
                >
                  <span className="font-mono text-sm tabular-nums text-ink-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight">{p.titulo}</h3>
                  <p className="col-start-2 text-[15px] leading-relaxed text-ink-soft sm:col-start-auto">
                    {p.detalle}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-10 text-sm text-ink-soft">
              Por dentro: Next.js, Postgres, Supabase, IA de Anthropic y deploy en Vercel.
              Lo mismo que usan las empresas grandes, a escala de tu negocio.
            </p>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="mx-auto w-full max-w-[1200px] px-4 py-24 sm:px-6 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Dos socios, cero humo
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                AzzFlow la fundó Fausto Azzaretti en 2025, de ahí el{" "}
                <span className="font-semibold text-ink">Azz</span>. No venimos
                del marketing: venimos de la operación real, de los depósitos,
                los repartos y las planillas que no cierran. Por eso los
                sistemas que hacemos se entienden y se usan.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
                En 2026 se sumó Damián Cepeda como socio. Trabajamos desde
                Ramallo para toda la región, y del otro lado del WhatsApp
                estamos nosotros dos.
              </p>
            </div>

            <dl className="self-end lg:col-span-6">
              {[
                ["Fausto Azzaretti", "Fundador · desde 2025"],
                ["Damián Cepeda", "Socio · desde 2026"],
              ].map(([nombre, rol]) => (
                <div key={nombre} className="flex flex-col gap-1 border-t border-ink py-7 sm:flex-row sm:items-baseline sm:justify-between">
                  <dt className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{nombre}</dt>
                  <dd className="font-mono text-[12px] uppercase tracking-[0.1em] text-ink-soft">{rol}</dd>
                </div>
              ))}
              <div className="border-t border-line" />
            </dl>
          </div>
        </section>

        {/* Cierre */}
        <section className="relative overflow-hidden bg-electric text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_10%,transparent_80%)]"
          />
          <div className="relative mx-auto w-full max-w-[1200px] px-4 py-24 text-center sm:px-6 lg:py-32">
            <LogoGlyph className="mx-auto h-10 w-10 text-white/80" />
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] text-balance sm:text-6xl">
              ¿Tu operación sigue en una planilla?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-on-electric-soft">
              Contanos el problema por WhatsApp. Te respondemos nosotros, te
              decimos si tiene sentido un sistema y cuánto saldría. Sin
              compromiso.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-paper px-8 py-4 text-lg font-semibold text-electric shadow-[0_12px_28px_-10px_rgba(0,0,0,0.35)] transition-colors hover:bg-electric-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Escribinos por WhatsApp
              </a>
              <p className="font-mono text-sm tracking-wide text-on-electric-soft">
                {WHATSAPP_NUMBER}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
          <Logo />
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de AzzFlow"
              className="text-ink-soft transition-colors hover:text-ink"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de AzzFlow"
              className="text-ink-soft transition-colors hover:text-ink"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-ink-soft">© 2026 AzzFlow · Ramallo, Buenos Aires</p>
        </div>
      </footer>
    </div>
  );
}
