/* eslint-disable */
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about RepuKeel online reputation management, DMCA takedowns, privacy protection, and payment methods.',
  alternates: {
    canonical: 'https://repukeel.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | RepuKeel',
    description: 'Find answers to common questions about RepuKeel online reputation management, DMCA takedowns, privacy protection, and payment methods.',
    url: 'https://repukeel.com/faq',
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
