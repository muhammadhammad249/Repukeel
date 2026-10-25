/* eslint-disable */
import { Metadata } from 'next';
import { canonicalFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Request Free Reputation Analysis | RepuKeel',
  description: 'Request a free, confidential reputation analysis and risk assessment from the RepuKeel team.',
  alternates: {
    canonical: canonicalFor('/request-free-analysis'),
  },
};

export default function RequestFreeAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
