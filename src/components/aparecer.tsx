"use client";

import type { ReactNode } from "react";
import { InView } from "@/components/motion-primitives/in-view";

// Cada caso sube y aparece una sola vez cuando entra en pantalla.
export function Aparecer({ children }: { children: ReactNode }) {
  return (
    <InView
      once
      viewOptions={{ margin: "0px 0px -120px 0px" }}
      variants={{
        hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </InView>
  );
}
