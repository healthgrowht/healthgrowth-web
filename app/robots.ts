import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/dashboard/leads/'],
      },
    ],
    sitemap: 'https://healthgrowth.cl/sitemap.xml',
  };
}
