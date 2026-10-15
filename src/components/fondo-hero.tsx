"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "motion/react";

// Fondo vivo del hero (Paper Shaders): un degradé que respira en los azules de
// la marca, detrás de las capturas. Con «reducir movimiento» queda quieto
// (speed 0 corta el requestAnimationFrame).
export function FondoHero() {
  const quieto = useReducedMotion();
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_72%_45%,#000_25%,transparent_75%)]"
    >
      <MeshGradient
        className="h-full w-full"
        colors={["#ffffff", "#dbe5ff", "#8fadff", "#0048FF"]}
        distortion={0.8}
        swirl={0.35}
        speed={quieto ? 0 : 0.3}
      />
    </div>
  );
}
