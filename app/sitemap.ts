import { MetadataRoute } from 'next';

const BASE = 'https://healthgrowth.cl';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE}/politica-de-privacidad`,
      lastModified: new Date('2026-06-25'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE}/terminos-y-condiciones`,
      lastModified: new Date('2026-06-25'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
