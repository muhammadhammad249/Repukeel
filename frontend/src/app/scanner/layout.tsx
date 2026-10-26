import { Metadata } from 'next';
import { canonicalFor } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI Scanner | RepuKeel',
  description: 'Build focused search queries to investigate potential brand, text, and image misuse online with the RepuKeel AI Scanner.',
  alternates: {
    canonical: canonicalFor('/scanner'),
  },
};

export default function ScannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
