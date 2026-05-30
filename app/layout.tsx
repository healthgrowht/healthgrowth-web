import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "./constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: "healthgrowth SpA | Modernización Digital y Acompañamiento Pyme",
  description: "Especialistas en organización operativa y arquitectura de sistemas para minipymes y servicios de salud. Recupera el orden de tu negocio con rigor clínico.",
  keywords: ["modernización digital pymes", "automatización chile", "CRM para salud", "gestión operativa pyme", "healthgrowth"],
  authors: [{ name: "Luis Carlos Alberto Villanueva Andrades" }],
  openGraph: {
    title: "healthgrowth SpA - Modernización de Negocios",
    description: "Acompañamiento práctico y sistemas operativos para emprendedores chilenos.",
    url: SITE_CONFIG.domain,
    siteName: "healthgrowth SpA",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full bg-black text-white selection:bg-blue-600 selection:text-white">{children}</body>
    </html>
  );
}
