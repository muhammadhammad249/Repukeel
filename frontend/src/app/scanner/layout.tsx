/* eslint-disable */
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Scanner | RepuKeel',
  description: 'Build focused search queries to investigate potential brand, text, and image misuse online with the RepuKeel AI Scanner.',
  alternates: {
    canonical: '/scanner',
  },
};

export default function ScannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
