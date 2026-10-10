import type { Metadata } from "next";
import { Archivo, Chivo_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "AzzFlow — Sistemas a medida para tu negocio",
  description:
    "Construimos sistemas de gestión a medida para pymes: stock, entregas, flota, reservas y cobranzas. En semanas y funcionando en producción. Ramallo · San Nicolás · Buenos Aires.",
  openGraph: {
    title: "AzzFlow — Sistemas a medida para tu negocio",
    description:
      "Sistemas de gestión a medida para pymes: stock, entregas, flota, reservas y cobranzas. En semanas, no en meses.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${chivoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
