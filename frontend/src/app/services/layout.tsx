import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Takedowns | RepuKeel',
  description: 'Comprehensive reputation management services including DMCA takedowns, review removals, and search engine suppression.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
