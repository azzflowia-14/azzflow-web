// Lo piden los componentes de motion-primitives; sin tailwind-merge alcanza.
export function cn(...clases: (string | false | null | undefined)[]) {
  return clases.filter(Boolean).join(" ");
}
