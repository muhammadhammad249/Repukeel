/* eslint-disable */
import { Metadata } from 'next';
import { canonicalFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Services & Takedowns',
  description: 'Comprehensive reputation management services including DMCA takedowns, review removals, and search engine suppression.',
  alternates: {
    canonical: canonicalFor('/services'),
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
