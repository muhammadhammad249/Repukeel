/* eslint-disable */
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://repukeel.com';

  // Core static pages
  const routes = [
    '',
    '/about',
    '/services',
    '/pricing',
    '/contact',
    '/faq',
    '/scanner',
    '/protection',
    '/blogs',
    '/case-studies',
    '/login',
    '/signup'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
