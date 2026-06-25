// ─────────────────────────────────────────────────────────────────────────────
// HEALTH GROWTH — CONFIGURACIÓN CENTRAL DEL SITIO
// Fuente de verdad para todos los componentes. Actualizar solo aquí.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  domain: 'https://healthgrowth.cl',

  seo: {
    title: 'Health Growth | Ecosistema de Modernización para PYMEs',
    description: 'Impulsamos la transformación digital de las PYMEs a través de ecosistemas tecnológicos que garantizan orden, eficiencia y escalabilidad.',
    ogImage: '/seo/og-image.svg',
    twitterImage: '/seo/twitter-image.svg',
  },

  legal: {
    companyName: 'Health Growth SpA',
    founder: 'Luis Carlos Alberto Villanueva Andrades',
    rut: '77.XXX.XXX-K',
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
    // Webhook n8n para recibir leads del formulario de diagnóstico
    diagnosticWebhook: 'https://n8n.healthgrowth.cl/webhook/a0b41fdd-697f-4026-9c95-51a329b2cd00/webhook-hg/hg-captacion',
    // [TODO: webhook CHIMI cuando esté activo]
    chimiWebhook: '',
  },

  navLinks: [
    { name: 'Soluciones', href: '#soluciones' },
    { name: 'Misión', href: '#mision' },
    { name: 'Chimi', href: '#chimi' },
    { name: 'Caso Éxito', href: '#piloto' },
    { name: 'FAQ', href: '#faq' },
  ],
};
