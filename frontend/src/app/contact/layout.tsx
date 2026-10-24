/* eslint-disable */
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with RepuKeel for a free, confidential reputation analysis and consultation.',
  alternates: {
    canonical: 'https://repukeel.com/contact',
  },
  openGraph: {
    title: 'Contact Us | RepuKeel',
    description: 'Get in touch with RepuKeel for a free, confidential reputation analysis and consultation.',
    url: 'https://repukeel.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
