import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | RepuKeel',
  description: 'Get in touch with RepuKeel for a free, confidential reputation analysis and consultation.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
