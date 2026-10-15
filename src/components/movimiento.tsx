"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

// Las animaciones de motion respetan «reducir movimiento» del sistema.
export function Movimiento({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
