import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Health Growth SpA',
    short_name: 'Health Growth',
    description: 'Modernización y Crecimiento para PYMEs — Organización, Automatización e IA',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#071428',
    theme_color: '#071428',
    categories: ['business', 'productivity'],
    lang: 'es',
    icons: [
      {
        src: '/favicon/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/favicon/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Evaluación Gratuita',
        url: '/#diagnostico',
        description: 'Solicitar evaluación gratuita de tu negocio',
      },
      {
        name: 'WhatsApp',
        url: 'https://wa.me/56951017947',
        description: 'Contactar directamente por WhatsApp',
      },
    ],
  };
}
