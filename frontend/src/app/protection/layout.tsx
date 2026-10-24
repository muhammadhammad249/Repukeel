/* eslint-disable */
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Protection & DMCA Takedown Portal',
  description: 'Submit new copyright infringement takedowns or track the live status of your existing cases in our secure portal.',
  alternates: {
    canonical: 'https://repukeel.com/protection',
  },
  openGraph: {
    title: 'Content Protection & Case Tracking | RepuKeel',
    description: 'Submit new copyright infringement takedowns or track the live status of your existing cases in our secure portal.',
    url: 'https://repukeel.com/protection',
  },
};

export default function ProtectionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
