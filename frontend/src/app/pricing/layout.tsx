/* eslint-disable */
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transparent Pricing & Plans',
  description: 'View transparent pricing for our reputation management and content removal services. No hidden fees. Get a free custom quote today.',
  alternates: {
    canonical: 'https://repukeel.com/pricing',
  },
  openGraph: {
    title: 'Pricing | RepuKeel',
    description: 'View transparent pricing for our reputation management and content removal services. No hidden fees. Get a free custom quote today.',
    url: 'https://repukeel.com/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
