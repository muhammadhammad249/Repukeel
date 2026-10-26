import { Metadata } from 'next';
import { canonicalFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | RepuKeel',
  description: 'Find answers to common questions about reputation management, DMCA removals, timeframes, and pricing at RepuKeel.',
  alternates: {
    canonical: canonicalFor('/faq'),
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
