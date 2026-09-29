/* eslint-disable */
import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'RepuKeel | Online Reputation Management Company Worldwide',
  description: 'At RepuKeel Reputation, we remove harmful online content, repair search results, and protect your reputation — fast, confidentially, and with proven results.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomeClient />;
}
