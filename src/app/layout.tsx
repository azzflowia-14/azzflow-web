import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AzzFlow - Automatización de procesos y chatbots para WhatsApp",
  description: "Automatización de procesos y chatbots para WhatsApp con AzzFlow. Chatbots que venden 24/7, automatización inteligente y asistentes virtuales para tu negocio.",
  keywords: "chatbots WhatsApp, automatización procesos, IA, inteligencia artificial, chatbot Argentina, automatización negocios",
  authors: [{ name: "AzzFlow" }],
  openGraph: {
    title: "AzzFlow - Automatización de procesos y chatbots para WhatsApp",
    description: "Automatizamos tu negocio con Inteligencia Artificial. Chatbots que venden por WhatsApp 24/7.",
    url: "https://azzflow.com",
    siteName: "AzzFlow",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AzzFlow - Automatización con IA",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AzzFlow - Automatización de procesos y chatbots para WhatsApp",
    description: "Automatizamos tu negocio con Inteligencia Artificial. Chatbots que venden por WhatsApp 24/7.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="antialiased font-sans bg-white text-black">
        {children}
      </body>
    </html>
  );
}
