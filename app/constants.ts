// ─────────────────────────────────────────────────────────────────────────────
// HEALTH GROWTH — CONFIGURACIÓN CENTRAL DEL SITIO
// Fuente de verdad para todos los componentes. Actualizar solo aquí.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  domain: 'https://healthgrowth.cl',

  seo: {
    title: 'Health Growth | Orden, Tecnología y Crecimiento para PYMEs Chilenas',
    description: 'Ayudamos a PYMEs y negocios de servicios a ordenar su atención, automatizar procesos y crecer con tecnología simple. Sin caos, sin sistemas complejos.',
    ogImage: '/seo/og-image.svg',
    twitterImage: '/seo/twitter-image.svg',
  },

  legal: {
    companyName: 'Health Growth SpA',
    founder: 'Luis Carlos Alberto Villanueva Andrades',
    rut: '78.342.421-5',
    foundationYear: 2026,
    privacyPolicyUrl: '/politica-de-privacidad',
    termsAndConditionsUrl: '/terminos-y-condiciones',
  },

  contact: {
    email: 'agenda.salud.digital@gmail.com',
    emailFuture: 'contacto@healthgrowth.cl',
    whatsapp: {
      number: '+56 9 5101 7947',
      url: 'https://wa.me/56951017947',
    },
  },

  // Acceso directo para componentes que usan SITE_CONFIG.whatsapp.*
  whatsapp: {
    number: '+56 9 5101 7947',
    url: 'https://wa.me/56951017947',
    messages: {
      diagnostic: 'Hola, me interesa el diagnóstico gratuito para mi negocio.',
      general: 'Hola, me gustaría saber más sobre Health Growth.',
    },
  },

  social: {
    instagram: {
      active: true,
      url: 'https://www.instagram.com/healthgrowthspa/',
      handle: '@healthgrowthspa',
    },
    facebook: {
      active: false,
      url: '',
      handle: 'healthgrowthspa',
    },
    linkedin: {
      active: false,
      url: '',
      handle: 'health-growth-spa',
    },
  },

  assets: {
    logo: '/logo/health-growth-logo.svg',
    logoPng: '/logo/health-growth-logo.jpeg',
    favicon: '/favicon/favicon.svg',
  },

  founder: {
    name: 'Luis Carlos Alberto Villanueva Andrades',
    image: '/images/founder/founder.svg',
  },

  pilotProjects: {
    patitasFelices: {
      name: 'Patitas Felices',
      images: {
        main: '/images/patitas-felices/main.svg',
      },
    },
  },

  testimonials: [
    // {
    //   name: '[TODO: Nombre]',
    //   company: '[TODO: Empresa]',
    //   image: '/images/testimonials/testimonial-1.jpg',
    //   text: '[TODO: Texto del testimonio]'
    // }
  ],

  // Integraciones externas
  integrations: {
    // Endpoint CRM Carlos OS — recibe leads del formulario de diagnóstico
    diagnosticWebhook: 'https://api.healthgrowth.cl/api/capture',
    // [TODO: webhook CHIMI cuando esté activo]
    chimiWebhook: '',
  },

  navLinks: [
    { name: 'Cómo funciona', href: '#transformacion' },
    { name: 'Soluciones', href: '#packs' },
    { name: 'Caso Real', href: '#piloto' },
    { name: 'FAQ', href: '#faq' },
  ],
};
