/* eslint-disable */
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & News',
  description: 'Expert advice, guides, and company news on online reputation management, DMCA takedowns, and digital brand protection.',
  alternates: {
    canonical: 'https://repukeel.com/blogs',
  },
  openGraph: {
    title: 'Insights & News | RepuKeel',
    description: 'Expert advice, guides, and company news on online reputation management, DMCA takedowns, and digital brand protection.',
    url: 'https://repukeel.com/blogs',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
