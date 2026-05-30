export interface PackItem {
  phase: string;
  title: string;
  items: string[];
  desc?: string;
  benefit?: string;
  problem?: string;
  result?: string;
  price?: string;
  image?: string;
  accent?: string;
}

export const SITE_CONFIG = {
  brand: "healthgrowth SpA",
  domain: "https://healthgrowth.cl",
  email: "contacto@healthgrowth.cl",
  assets: {
    logo: "/logo/logo-oficial.svg",
    favicon: "/logo/favicon.ico",
    heroVideo: "/videos/hero-healthgrowth.mp4",
    placeholder: "https://placehold.co/1200x800/0a0a0a/444444/png?text=HealthGrowth+Asset",
  },
  founder: "Luis Carlos Alberto Villanueva Andrades",
  legal: {
    companyName: "HealthGrowth SpA",
    rut: "77.674.529-6", 
    constitutionDate: "2024",
    address: "Santiago, Chile"
  },
  whatsapp: {
    number: "56951017947",
    url: "https://wa.me/56951017947",
    messages: {
      diagnostic: "Hola, vengo de la web y me gustaría solicitar una evaluación para mi proyecto.",
      general: "Hola, me gustaría hablar con un asesor de HealthGrowth."
    }
  },
  integrations: {
    // URL del webhook de n8n para procesar leads
    diagnosticWebhook: "https://n8n.healthgrowth.cl/webhook/diagnostic-request"
  }
};

export const NAV_LINKS = [
  { name: "Casos de Uso", href: "#casos-uso" },
  { name: "Packs Pyme", href: "#packs" },
  { name: "Línea Salud", href: "#salud" },
  { name: "Autoridad", href: "#autoridad" },
  { name: "FAQ", href: "#faq" },
];