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
  themeColor: '#071428',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "Health Growth SpA | Más clientes, menos caos para tu PYME",
    template: "%s | Health Growth SpA",
  },
  description: "Imagen, contenido y sistemas digitales para PYMEs chilenas. Creamos piezas gráficas para Instagram, configuramos WhatsApp Business, organizamos tus clientes y automatizamos tareas repetitivas — todo con acompañamiento real.",
  keywords: [
    "marketing digital pymes chile",
    "contenido para instagram pyme",
    "captación de clientes pequeños negocios",
    "modernización pyme chile",
    "whatsapp business pyme",
    "publicidad digital pyme chile",
    "health growth spa",
    "digitalización de negocios chile",
    "presencia digital negocios chile",
    "imagen digital para negocios",
    "automatización para negocios",
    "más clientes menos caos pyme",
  ],
  authors: [{ name: SITE_CONFIG.legal.founder, url: SITE_CONFIG.domain }],
  creator: SITE_CONFIG.legal.founder,
  publisher: SITE_CONFIG.legal.companyName,
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  openGraph: {
    title: "Health Growth SpA | Ordenamos tu negocio para que venda mejor",
    description: "Imagen, contenido para redes, captación de clientes y orden operativo para PYMEs chilenas. Sin caos, sin jerga técnica. Evaluación inicial gratuita.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Health Growth SpA",
  "url": "https://healthgrowth.cl",
  "logo": "https://healthgrowth.cl/logo/health-growth-logo.svg",
  "description": "Imagen, contenido digital y sistemas para PYMEs chilenas: piezas gráficas para Instagram, WhatsApp Business, captación de clientes, agenda digital y automatización.",
  "areaServed": {
    "@type": "Country",
    "name": "Chile"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "Spanish",
    "contactOption": "TollFree"
  },
  "sameAs": [
    "https://www.instagram.com/healthgrowthspa/"
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "CLP",
    "offerCount": "6",
    "description": "Packs de modernización para PYMEs: desde diagnóstico gratuito hasta ecosistema digital completo."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#071428] text-white selection:bg-cyan-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
