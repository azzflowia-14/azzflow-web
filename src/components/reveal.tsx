import type { CSSProperties, ReactNode } from "react";

// Entrada del hero: las capturas se asientan escalonadas una sola vez al cargar (.entrada en globals.css)
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`entrada ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
