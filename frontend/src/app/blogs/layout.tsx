import { Metadata } from 'next';
import { canonicalFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Reputation & Brand Protection Blog',
  description: 'Expert insights, actionable guides, and industry updates on reputation management, DMCA takedowns, and digital privacy.',
  alternates: {
    canonical: canonicalFor('/blogs'),
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
