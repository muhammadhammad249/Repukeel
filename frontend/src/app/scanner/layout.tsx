/* eslint-disable */
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Scanner | Digital Exposure Detection',
  description: 'Scan the web to detect unauthorized content, stolen media, fake profiles, and online reputation risks with RepuKeel AI Scanner.',
  alternates: {
    canonical: 'https://repukeel.com/scanner',
  },
  openGraph: {
    title: 'AI Scanner | Digital Exposure Detection | RepuKeel',
    description: 'Scan the web to detect unauthorized content, stolen media, fake profiles, and online reputation risks with RepuKeel AI Scanner.',
    url: 'https://repukeel.com/scanner',
  },
};

export default function ScannerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
