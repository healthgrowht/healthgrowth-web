import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "./constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "Health Growth SpA | Orden, Tecnología y Crecimiento para PYMEs Chilenas",
    template: "%s | Health Growth SpA",
  },
  description: "Ordenamos tu atención, tus clientes y tus procesos para que tu negocio responda más rápido, pierda menos oportunidades y crezca con sistemas simples y automatizados.",
  keywords: [
    "modernización pyme chile",
    "automatización para negocios",
    "whatsapp business pyme",
    "agenda digital negocios",
    "crm para pymes chile",
    "health growth spa",
    "inteligencia artificial para pequeños negocios",
    "transformación digital chile",
    "orden operativo pyme",
    "asistente digital negocios",
  ],
  authors: [{ name: SITE_CONFIG.legal.founder, url: SITE_CONFIG.domain }],
  creator: SITE_CONFIG.legal.founder,
  publisher: SITE_CONFIG.legal.companyName,
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  openGraph: {
    title: "Health Growth SpA | Ordenamos tu negocio para que venda mejor",
    description: "Automatización, presencia digital y orden operativo para PYMEs chilenas. Sin caos, sin sistemas complejos. Evaluación inicial gratuita.",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.legal.companyName,
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Health Growth SpA — Modernización para PYMEs Chilenas",
      },
    ],
  },
  icons: {
    icon: [
      { url: SITE_CONFIG.assets.favicon, type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: SITE_CONFIG.assets.favicon,
    apple: SITE_CONFIG.assets.favicon,
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Growth SpA | Ordenamos tu negocio para que venda mejor",
    description: "Automatización, presencia digital y orden operativo para PYMEs chilenas. Evaluación inicial gratuita.",
    site: "@healthgrowthspa",
    creator: "@healthgrowthspa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full bg-black text-white selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
