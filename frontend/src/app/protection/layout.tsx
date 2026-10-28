import { Metadata } from 'next';
import { canonicalFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Brand & IP Protection Solutions',
  description: 'Proactive brand protection, copyright enforcement, and digital asset defense for brands and high-profile individuals.',
  alternates: {
    canonical: canonicalFor('/protection'),
  },
};

export default function ProtectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
