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
  title: {
    default: "Health Growth SpA | Modernización y Crecimiento para PYMEs",
    template: "%s | Health Growth SpA",
  },
  description: "Ayudamos a PYMEs y profesionales a crecer mediante sistemas de organización, automatización e Inteligencia Artificial que blindan su operación y potencian su crecimiento.",
  keywords: ["modernización pyme", "transformación digital", "automatización de procesos", "ecosistemas digitales", "inteligencia artificial para negocios", "consultoría pyme chile", "health growth"],
  authors: [{ name: SITE_CONFIG.legal.founder, url: SITE_CONFIG.domain }],
  creator: SITE_CONFIG.legal.founder,
  publisher: SITE_CONFIG.legal.companyName,
  openGraph: {
    title: "Health Growth SpA | Orden, Tecnología y Crecimiento para tu Negocio",
    description: "Sistemas de organización, automatización e IA para PYMEs.",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.legal.companyName,
    images: [
      {
        url: SITE_CONFIG.seo.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  icons: {
    icon: SITE_CONFIG.assets.favicon,
    shortcut: SITE_CONFIG.assets.favicon,
    apple: SITE_CONFIG.assets.favicon,
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Growth SpA | Modernización y Crecimiento para PYMEs",
    description: "Transformamos tu operación con tecnología, automatización e Inteligencia Artificial.",
    images: [SITE_CONFIG.seo.twitterImage],
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
      <body className="min-h-full bg-black text-white selection:bg-blue-600 selection:text-white">{children}</body>
    </html>
  );
}
