/* eslint-disable */
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Takedowns',
  description: 'Comprehensive reputation management services including DMCA takedowns, review removals, and search engine suppression.',
  alternates: {
    canonical: 'https://repukeel.com/services',
  },
  openGraph: {
    title: 'Services & Takedowns | RepuKeel',
    description: 'Comprehensive reputation management services including DMCA takedowns, review removals, and search engine suppression.',
    url: 'https://repukeel.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
