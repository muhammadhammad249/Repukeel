/* eslint-disable */
import { redirect, notFound } from 'next/navigation';
import { categories } from '@/data/services';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const allSubServices = categories.flatMap(c => c.subServices);
  const service = allSubServices.find(s => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.name} | RepuKeel`,
    description: service.intro,
    alternates: {
      canonical: `/${service.categorySlug}/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const allSubServices = categories.flatMap(c => c.subServices);
  const service = allSubServices.find(s => s.slug === slug);

  if (service) {
    redirect(`/${service.categorySlug}/${service.slug}`);
  }

  return notFound();
}
