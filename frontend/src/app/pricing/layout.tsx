/* eslint-disable */
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Transparent Rates | RepuKeel',
  description: 'View transparent pricing for our reputation management and content removal services. No hidden fees. Get a free custom quote today.',
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
