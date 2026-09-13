'use client';

import Navbar from '../components/Navbar';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  priceSuffix: string;
  popular?: boolean;
  accentColor?: string;
  takedowns: string[];
  coverageHighlights: string[];
  turnaround: string;
  ctaLabel: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Essential takedown coverage for a single product or username.',
    price: '$89',
    priceSuffix: '/month',
    takedowns: ['Unlimited — 1 product or username'],
    coverageHighlights: [
      'Four-engine delisting (Google, Bing, Yandex & DuckDuckGo)',
      'Telegram & Discord takedowns',
      'Impersonator removal',
      'Social media monitoring',
      '24/7 monitoring',
    ],
    turnaround: 'Standard takedown queue',
    ctaLabel: 'Get Started',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Priority protection for growing brands with multiple products.',
    price: '$179',
    priceSuffix: '/month',
    popular: true,
    accentColor: '#22c55e',
    takedowns: ['Unlimited — up to 5 products or usernames'],
    coverageHighlights: [
      'Everything in Basic',
      'Payment-processor reporting where applicable',
      'Dedicated takedown manager',
    ],
    turnaround: 'Priority queue; 48-hour removal guarantee',
    ctaLabel: 'Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Full-scale coverage for large catalogs and niche leak sites.',
    price: '$359',
    priceSuffix: '/month',
    takedowns: ['Unlimited — up to 12 products or usernames'],
    coverageHighlights: [
      'Everything in Professional',
      'Private trackers & filehosts',
      'Custom crawlers for niche leak sites',
    ],
    turnaround: 'Priority queue; 48-hour removal guarantee',
    ctaLabel: 'Get Started',
  },
];

export default function PricingPage() {
  const router = useRouter();

  const handleSelect = (plan: PricingPlan) => {
    const label = `${plan.name} — ${plan.price}${plan.priceSuffix}`;
    router.push(`/checkout?plan=${encodeURIComponent(label)}`);
  };

  return (
    <div className="min-h-screen bg-[#080e1c] text-[#f4f6fb] font-sans">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-24 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Choose the protection level that fits your content — from a single
          username to full-catalog enterprise coverage.
        </p>
      </section>

      {/* Pricing cards */}
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-24 md:grid-cols-3">
        {pricingPlans.map((plan) => {
          const accent = plan.accentColor ?? '#e0b13a';
          return (
            <div
              key={plan.id}
              className="relative flex h-full flex-col rounded-xl border p-6 text-sm transition-transform duration-200 hover:-translate-y-1"
              style={
                plan.popular
                  ? {
                      borderColor: accent,
                      backgroundColor: '#111a2e',
                      boxShadow: `0 0 30px -10px ${accent}59`,
                    }
                  : { borderColor: 'rgba(255,255,255,0.1)', backgroundColor: '#0f1729' }
              }
            >
              {plan.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold tracking-wide text-white"
                  style={{ backgroundColor: accent }}
                >
                  MOST POPULAR
                </span>
              )}

              <h3
                className="text-lg font-bold"
                style={{ color: plan.popular ? accent : '#ffffff' }}
              >
                {plan.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {plan.description}
              </p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span
                  className="text-3xl font-extrabold"
                  style={{ color: accent }}
                >
                  {plan.price}
                </span>
                <span className="text-xs text-slate-400">{plan.priceSuffix}</span>
              </div>

              <hr className="my-5 border-white/10" />

              {/* Takedowns */}
              <div className="mb-4">
                <p
                  className="mb-2 text-[10px] font-semibold uppercase tracking-wide"
                  style={{ color: accent }}
                >
                  Takedowns
                </p>
                <ul className="space-y-2">
                  {plan.takedowns.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coverage Highlights */}
              <div className="mb-4">
                <p
                  className="mb-2 text-[10px] font-semibold uppercase tracking-wide"
                  style={{ color: accent }}
                >
                  Coverage Highlights
                </p>
                <ul className="space-y-2">
                  {plan.coverageHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Turnaround */}
              <div className="mb-1 flex-1">
                <p
                  className="mb-1 text-[10px] font-semibold uppercase tracking-wide"
                  style={{ color: accent }}
                >
                  Turnaround
                </p>
                <p className="text-slate-200">{plan.turnaround}</p>
              </div>

              {/* CTA Button — always visible for all plans */}
              <button
                onClick={() => handleSelect(plan)}
                className="mt-6 w-full rounded-lg py-3 text-center text-sm font-bold transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-95 cursor-pointer"
                style={
                  plan.popular
                    ? { backgroundColor: accent, color: '#0b0f1a' }
                    : {
                        backgroundColor: 'transparent',
                        border: `2px solid ${accent}`,
                        color: accent,
                      }
                }
              >
                {plan.ctaLabel} →
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}