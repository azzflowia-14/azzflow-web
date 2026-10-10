---
name: AzzFlow
description: Sistemas de gestión a medida para pymes, presentados como el índice de lo que ya está funcionando.
colors:
  electric: "#0048ff"
  electric-deep: "#0038cc"
  electric-soft: "#eef2ff"
  on-electric-soft: "#d9e2ff"
  ink: "#212121"
  ink-soft: "#575757"
  paper: "#ffffff"
  paper-dim: "#f6f7f9"
  line: "#e6e8ec"
  ok: "#0a7a3d"
  ok-soft: "#e7f6ed"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4.4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body-lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  caption:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
  data:
    fontFamily: "Chivo Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
    fontFeature: "tnum"
  label-status:
    fontFamily: "Chivo Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.08em"
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  phone: "22px"
  full: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter: "24px"
  row: "20px"
  case: "80px"
  section-mobile: "96px"
  section: "128px"
  grid-cell: "56px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.electric}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.electric-deep}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "14px 24px"
  button-on-electric:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.electric}"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  button-on-electric-hover:
    backgroundColor: "{colors.electric-soft}"
  chip-filter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  chip-filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  indice-row:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "20px 8px"
  frame-browser:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.xl}"
  frame-phone:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.phone}"
---

# Design System: AzzFlow

## Overview

**Creative North Star: "El índice de lo que ya está andando"**

Canon moderno de producto (referencia de craft: Linear / Vercel / Stripe), pinned por el usuario junto con la paleta de marca: blanco, carbón y azul eléctrico, solo modo claro. Dentro de ese canon, la página se organiza como un catálogo numerado: filas con número en mono, hairline de borde a borde y una regla de tinta que abre cada bloque. La expresión vive en titulares enormes de Archivo 800, en la precisión de la grilla y en pantallas reales de los sistemas dentro de marcos de navegador y celular.

La densidad es de índice, no de landing: filas y pares término/definición en vez de columnas iguales de cards. El azul no decora; marca la acción (CTA de WhatsApp) y se apodera de una región entera al cierre. El verde existe solo para decir que algo está en producción, y solo donde es verdad.

Hay un único momento de motion autoral: las capturas del hero se asientan escalonadas al cargar. El resto de la página está quieta.

**Key Characteristics:**
- Filas numeradas con canaleta mono, hairline #e6e8ec de borde a borde y regla de tinta arriba de cada sección.
- Titulares Archivo 800 con tracking negativo; Chivo Mono solo para datos reales.
- Capturas reales en marcos de navegador y celular con sombra suave desplazada.
- Azul reservado para CTA, links y la región de cierre.
- Un solo momento de motion: la entrada del hero.

## Colors

Tres colores de marca pinned (blanco, carbón, azul eléctrico) más un verde funcional; nada más.

### Primary
- **Azul Eléctrico AzzFlow** (electric): color de marca. CTA de WhatsApp, links de texto ("Ver ↗", "Entrar a …"), el check de las listas de casos, la segunda mitad del titular del índice y la sección de cierre entera como fondo. Foco (`outline` 2px), selección de texto, caret y `accent-color`.
- **Azul Profundo** (electric-deep): estado hover del botón primario.
- **Azul Niebla** (electric-soft): hover del botón blanco sobre la región azul.
- **Azul Lavanda** (on-electric-soft): texto secundario sobre el fondo azul del cierre (bajada, número de teléfono).

### Neutral
- **Carbón del Logo** (ink): texto principal, relleno del chip activo, cuerpo del marco de celular y la regla de tinta de 1px que abre secciones y el índice.
- **Grafito** (ink-soft): texto secundario, números de fila, captions, metadatos.
- **Papel** (paper): fondo base de toda la página.
- **Papel Gris** (paper-dim): región de "Cómo trabajamos", barra del marco de navegador, hover de filas del índice.
- **Hairline** (line): separadores de 1px entre filas, borde del marco de navegador, borde de chips y botón secundario, celdas de la grilla de fondo.

### Tertiary
- **Verde Producción** (ok): punto estático de 6px + etiqueta "En producción" en mono. **Verde Producción Suave** (ok-soft) queda definido en tokens sin uso actual.

### Named Rules
**The Azul Con Compromiso Rule.** El azul va en la acción y en la región de cierre completa; no se usa como fondo de chips, badges ni círculos decorativos en el resto de la página.

**The Verde Solo Si Es Verdad Rule.** El punto verde y "En producción" aparecen únicamente en sistemas que están en producción hoy. Es un dato, no un adorno; nunca late ni parpadea.

## Typography

**Display Font:** Archivo (Omnibus-Type, variable; fallback system-ui, sans-serif)
**Body Font:** Archivo
**Label/Mono Font:** Chivo Mono (Omnibus-Type, 400/500; fallback ui-monospace)

**Character:** una grotesca argentina en peso 800 con tracking cerrado hace el trabajo de voz; la mono es la voz del registro, reservada para lo que es dato.

### Hierarchy
- **Display** (800, 2.75rem → 3.75rem → 4.4rem, line-height 1.02, -0.035em, `text-balance`): solo el titular del hero. El cierre usa la misma voz a 2.25rem → 3.75rem.
- **Headline** (800, 1.875–3rem según sección, line-height 1.04, -0.03em): títulos de sección y nombres de casos (2.25rem → 3rem). Los nombres de los socios usan esta voz en las filas dt/dd.
- **Title** (700, 1.125rem en filas del índice, 1.25rem en pasos, -0.025em): nombre de cada fila.
- **Body lead** (400, 1.125rem, line-height 1.625, máx ~36rem): bajadas de sección. En casos, 17px.
- **Body** (400, 15px, line-height 1.625): descripción de filas, definiciones dd, ítems de checklist (500). Metadatos de fila a 13px.
- **Caption** (Archivo 400, 0.75rem, ink-soft): leyendas bajo capturas ("Capturas reales con datos de demostración"). Las captions van en Archivo, no en mono.
- **Data** (Chivo Mono 400, 0.875rem, cifras tabulares): números de fila "01", "02"… en la canaleta. Misma familia a 10px para la URL del marco de navegador, a 11px para conteos en chips, a 0.875rem para el teléfono del cierre.
- **Label status** (Chivo Mono 400, 11px, uppercase, 0.08em): "En producción". Rol/año de socios a 12px, uppercase, 0.1em.

### Named Rules
**The Mono Es Dato Rule.** Chivo Mono solo para datos reales: número de índice, URL, rubro/ciudad, rol/año, teléfono, estado de producción, conteos. Nunca para captions, títulos, decoración ni etiquetas inventadas.

**The Sin Kicker Rule.** Ningún heading lleva etiqueta, eyebrow ni numeración de sección arriba. Los números viven en la canaleta de la fila o inline antes del nombre del caso, nunca como sobretítulo.

## Layout

Contenedor máximo de 1200px con padding lateral de 16px (mobile) / 24px (sm+). Grilla de 12 columnas desde lg (1024px): encabezados de sección en 8/4 o 6/6 (título / bajada), casos en 5/7 alternando lado, "Alrededor del sistema" en 4/8.

Ritmo vertical: secciones a 96px (mobile) / 128px (lg) de padding. Casos a 56px / 80px. Filas del índice a 20px, pasos a 24px, filas de socios a 28px. Más aire arriba de un heading que debajo.

**Filas en vez de columnas.** Todo contenido enumerable se resuelve como fila de grilla: canaleta de número (2.5rem mobile / 3rem desktop), nombre (14rem en índice, 18rem en pasos), descripción flexible, y acciones alineadas a la derecha. En mobile la canaleta se mantiene y el resto apila en la columna 2. Los pares término/descripción usan `dl` con dt de 14rem y dd flexible.

Hero en dos columnas desde lg (5/7): titular y CTAs a la izquierda, composición de capturas a la derecha (navegador + dos celulares superpuestos desde sm; dos celulares grandes lado a lado en mobile). Una grilla de hairlines de 56px enmascarada con un degradé radial asoma solo detrás del hero (ink-line al 60%) y del cierre (blanco al 8%).

Los filtros de rubro hacen scroll horizontal en mobile, sangrados al borde, y envuelven desde sm.

### Named Rules
**The Regla De Tinta Rule.** Cada sección del índice abre con una regla de tinta de 1px a todo el ancho del contenedor; entre filas, hairline #e6e8ec. Sobre papel gris, la regla baja a tinta al 15%.

## Elevation & Depth

El sistema es plano: la profundidad se construye con hairlines, la regla de tinta y el contraste papel / papel gris. Las únicas sombras están en los objetos que representan pantallas reales y en los CTA, y son siempre suaves, difusas y desplazadas hacia abajo, nunca duras ni offset sólido.

### Shadow Vocabulary
- **Marco de navegador** (`box-shadow: 0 24px 48px -20px rgba(33,33,33,0.28), 0 2px 6px rgba(33,33,33,0.06)`): capturas de escritorio.
- **Marco de celular** (`box-shadow: 0 28px 44px -18px rgba(33,33,33,0.45)`): capturas móviles, más profundo para que flote sobre el navegador.
- **CTA azul** (`box-shadow: 0 8px 20px -8px rgba(0,72,255,0.6)`): botón primario de WhatsApp sobre papel.
- **CTA sobre azul** (`box-shadow: 0 12px 28px -10px rgba(0,0,0,0.35)`): botón blanco del cierre.

### Named Rules
**The Solo Las Pantallas Flotan Rule.** Filas, chips, pasos y bloques de texto no llevan sombra. Si algo flota, es una captura real o un CTA.

## Shapes

Esquinas moderadas y consistentes: 8px en botones y en el toggle del menú, 12px en el marco de navegador, 6px en la píldora de URL dentro del marco, 22px (exterior) / 17px (pantalla) en el marco de celular con bisel de 5px en carbón, 9999px en chips de filtro y en los puntos de estado. Las filas del índice, los pasos y las filas dt/dd no tienen contenedor: son bandas abiertas separadas por líneas.

## Components

### Buttons
- **Shape:** esquinas suaves (8px).
- **Primary:** azul eléctrico, texto blanco, 600, 14px × 24px, ícono WhatsApp SVG de 20px; sombra CTA azul. Es el único botón relleno de azul de la página y siempre lleva a WhatsApp.
- **Hover / Focus:** hover baja a electric-deep con transición de color; foco con outline 2px azul a 2px de offset.
- **Secondary:** papel con borde hairline, texto carbón, mismo tamaño; hover pasa el borde a carbón.
- **On electric:** en el cierre, papel con texto azul, 16px × 32px, texto 1.125rem; hover a azul niebla; foco con outline blanco.
- **Nav:** versión compacta del primario (8px × 16px, 0.875rem) con "Escribinos".

### Chips (filtro de rubro)
- **Style:** píldora, borde hairline, papel, carbón, 0.875rem 500, 8px × 16px. El conteo del rubro va en mono 11px al 60%.
- **State:** activo = relleno carbón, texto papel (`aria-pressed`). Hover inactivo = borde carbón. El activo nunca es azul.

### Índice (componente firma)
- Lista ordenada abierta por una regla de tinta. Cada fila: número mono con ceros a la izquierda en ink-soft, nombre en title + ciudad/rubro a 13px, descripción en body, y a la derecha el estado "En producción" (solo si es verdad) y "Ver ↗" en azul (solo si existe una URL pública). Hover de fila: fondo papel gris.
- La numeración continúa después de los casos destacados (los casos son 01–03; el índice arranca en 04).

### Bloque de caso
- Banda abierta con hairline superior, 5/7 columnas alternando el lado de la imagen.
- Número mono inline antes del nombre en el h3 (no arriba). Debajo, rubro · ciudad y el estado de producción.
- Copy en dos párrafos que arrancan con "Antes." (ink-soft) y "Ahora." (ink), en 17px.
- Checklist en dos columnas: cada ítem con hairline superior, check SVG azul de 14px, texto 15px 500.
- Link "Entrar a {url} ↗" solo si el sistema tiene acceso público.
- Composición: marco de navegador desplazado 14–18% hacia un lado y marco de celular al 30% (máx 190px) anclado abajo en el lado opuesto. Caption en Archivo xs debajo cuando las capturas usan datos de demo.

### Marcos de captura
- **Navegador:** 12px, borde hairline, barra de 32px en papel gris con tres puntos hairline y la URL en mono 10px dentro de una píldora de papel.
- **Celular:** bisel carbón de 5px, 22px de radio, pantalla recortada a 390/700 desde arriba.
- Solo con capturas reales; cada raster en `public/capturas` lleva su sidecar `.webp.json` de procedencia.

### Pasos y pares dt/dd
- **Pasos:** filas numeradas iguales al índice (canaleta mono, título 1.25rem, descripción), sobre papel gris con líneas de tinta al 15%. Sin círculos ni íconos.
- **dt/dd:** término en title (o headline para los socios), definición en body o en mono uppercase cuando es dato (rol · año). Regla de tinta arriba de cada par en socios; hairline en "Alrededor del sistema".

### Navigation
- Barra fija de 64px, papel al 90% con backdrop blur; hairline inferior solo después de 8px de scroll. Logo (glifo SVG + "AzzFlow" Archivo 800) a la izquierda, links 0.875rem 500 en ink-soft → ink en hover, CTA compacto de WhatsApp. En mobile, botón de menú de 40px con borde hairline que despliega links a 1rem y un CTA de ancho completo.

### Motion
- **Entrada del hero:** las capturas del hero se asientan una sola vez al cargar desde `opacity 0`, `translateY(18px) scale(0.985)` y `blur(6px)`, 900ms con `cubic-bezier(0.16, 1, 0.3, 1)`, escalonadas a 0 / 140–160 / 320ms. Puro CSS, sin observer.
- Ninguna otra animación: sin reveals al hacer scroll, sin puntos que laten, sin tickers. `prefers-reduced-motion` anula la entrada y el scroll suave.

## Do's and Don'ts

### Do:
- **Do** resolver todo contenido enumerable como filas numeradas con canaleta mono y hairline de borde a borde, abiertas por una regla de tinta de 1px.
- **Do** usar Chivo Mono solo para datos reales (número, URL, rubro/ciudad, rol/año, teléfono, estado).
- **Do** mostrar el punto verde estático "En producción" solo donde es verdad, y "Ver ↗" solo donde existe una URL pública.
- **Do** reservar el azul #0048FF para el CTA de WhatsApp, los links y la región de cierre entera.
- **Do** poner capturas reales en los marcos de navegador y celular, con la sombra suave desplazada y su sidecar de procedencia.
- **Do** escribir captions en Archivo xs (0.75rem) ink-soft.
- **Do** rellenar de carbón el chip de filtro activo.

### Don't:
- **Don't** poner kickers, eyebrows ni numeración de sección arriba de los headings.
- **Don't** armar grillas de cards iguales para servicios o pasos; usar filas o pares dt/dd.
- **Don't** usar círculos azules numerados para pasos ni íconos decorativos en filas.
- **Don't** agregar reveals al hacer scroll, puntos que laten ni loops: el único motion es la entrada del hero.
- **Don't** usar sombras duras u offset sólido; las únicas sombras son las de pantallas y CTA listadas arriba.
- **Don't** cambiar la paleta pinned ni agregar modo oscuro.
- **Don't** usar la fuente del sistema en headings.
