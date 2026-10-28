import { Metadata } from 'next';
import { canonicalFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Our Clients & Testimonials',
  description: 'See how RepuKeel helps creators, executives, and businesses protect their brand and reputation worldwide.',
  alternates: {
    canonical: canonicalFor('/clients'),
  },
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
