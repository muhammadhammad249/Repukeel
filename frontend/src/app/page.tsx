/* eslint-disable */
import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'RepuKeel | Online Reputation Management Services',
  description: 'RepuKeel helps individuals and businesses manage online reputation, remove harmful content, and protect their digital presence.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomeClient />;
}
