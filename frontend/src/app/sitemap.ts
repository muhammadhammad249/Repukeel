/* eslint-disable */
import { MetadataRoute } from 'next';
import { categories } from '@/data/services';

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

  // Dynamic category and subservice pages
  const dynamicRoutes = categories.flatMap((cat) => {
    const catRoute = {
      url: `${baseUrl}/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    };
    const subRoutes = cat.subServices.map((sub) => ({
      url: `${baseUrl}/${cat.slug}/${sub.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
    return [catRoute, ...subRoutes];
  });

  return [...routes, ...dynamicRoutes];
}
