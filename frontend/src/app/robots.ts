import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/dashboard/', // Protect dashboard routes from indexing
        '/api/',       // Protect API routes
        '/checkout/',  // Protect checkout flows
      ],
    },
    sitemap: 'https://repukeel.com/sitemap.xml',
  };
}
