/* eslint-disable */
import { MetadataRoute } from 'next';
import { categories } from '@/data/services';
import { blogs } from '@/app/blogs/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://repukeel.com';

  // Core indexable static pages
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
    '/clients',
    '/request-free-analysis',
    '/privacy-policy',
    '/terms-conditions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : 0.8,
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

  // Dynamic blog post pages
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...dynamicRoutes, ...blogRoutes];
}
