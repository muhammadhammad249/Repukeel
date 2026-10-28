import { Metadata } from 'next';
import { canonicalFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Online Reputation Management Blog — Guides & Expert Advice',
  description: 'Expert guides on online reputation management, review removal, DMCA takedowns, and brand protection. Actionable advice from the RepuKeel team.',
  alternates: {
    canonical: canonicalFor('/blogs'),
  },
  openGraph: {
    url: canonicalFor('/blogs'),
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
