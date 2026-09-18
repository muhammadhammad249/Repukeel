'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BlueCtaBand from '../components/BlueCtaBand';

export default function PricingPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('authToken'));
  }, []);

  const handlePlanClick = (plan: string) => {
    if (isLoggedIn) {
      router.push(`/checkout?plan=${plan}`);
    } else {
      router.push(`/signup?plan=${plan}`);
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-soft)]">
      
      {/* ================= HERO (Dark Navy Grid) ================= */}
      <section className="relative w-full bg-[var(--bg-navy)] pt-24 pb-20 overflow-hidden">
        {/* Faint grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Sparse gold dots */}
        <div className="absolute top-20 left-[20%] w-1.5 h-1.5 rounded-full bg-[var(--gold)] opacity-50 shadow-[0_0_8px_var(--gold)]"></div>
        <div className="absolute top-40 right-[30%] w-1.5 h-1.5 rounded-full bg-[var(--gold)] opacity-70 shadow-[0_0_8px_var(--gold)] animate-pulse"></div>
        <div className="absolute bottom-32 left-[10%] w-2 h-2 rounded-full bg-[var(--gold)] opacity-40 shadow-[0_0_10px_var(--gold)]"></div>
        <div className="absolute top-24 right-[10%] w-1 h-1 rounded-full bg-[var(--gold)] opacity-60"></div>
        
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 pill-badge dark-var">
              <span style={{ color: 'var(--gold)' }}>💳</span> Flexible Plans
            </div>
            <h1 className="text-5xl md:text-6xl font-[900] tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Transparent Pricing
            </h1>
            <p className="text-[20px] font-[600] mb-6" style={{ color: 'var(--gold)' }}>
              No hidden fees. Total protection.
            </p>
            <p className="text-[16px] max-w-lg" style={{ color: '#9aa4c0' }}>
              Choose the protection plan that fits your needs. Whether you're a single creator or a large enterprise, we have you covered.
            </p>
          </div>

          {/* Right Visual: Attractive Plan Summary Card */}
          <div className="relative hidden md:flex justify-center lg:justify-end items-center">
            {/* Glow blob */}
            <div className="absolute w-72 h-72 rounded-full bg-[var(--gold)] opacity-5 filter blur-3xl pointer-events-none"></div>

            {/* Main card */}
            <div className="relative z-10 w-full max-w-[320px] bg-[#111d40] border border-[rgba(217,165,43,0.3)] rounded-2xl p-8 shadow-[0_0_40px_rgba(217,165,43,0.12)]">
              {/* Top badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[var(--gold)] flex items-center justify-center text-[var(--bg-navy)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                      <path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z"/>
                    </svg>
                  </div>
                  <span className="text-[14px] font-[800] tracking-wide" style={{ color: '#ffffff' }}>All Plans Include</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[var(--green)] shadow-[0_0_8px_#22c55e] animate-pulse"></div>
              </div>

              {/* Feature list */}
              <div className="flex flex-col gap-4 mb-8">
                {[
                  'DMCA Takedown Notices',
                  '24/7 Monitoring & Alerts',
                  'Legal Expert Support',
                  'Detailed Case Reports',
                  '100% Confidential',
                  'Global Coverage (150+ Countries)',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[rgba(217,165,43,0.15)] flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="3" className="w-3 h-3">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-[14px] font-[500]" style={{ color: '#c8d0e7' }}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Floating price pills */}
              <div className="flex flex-wrap gap-2">
                {['$99 / mo', '$199 / mo', '$499 / mo', 'Custom'].map((price, i) => (
                  <span key={i} className="text-[13px] font-[700] px-3 py-1 rounded-full border border-[rgba(217,165,43,0.4)]" style={{ color: 'var(--gold)', background: 'rgba(217,165,43,0.06)' }}>
                    {price}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING CARDS ================= */}
      <section className="w-full bg-[var(--bg-soft)] py-20 px-4">
        <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
          
          {/* Basic Plan */}
          <div className="card-light flex flex-col h-full rounded-2xl relative shadow-lg bg-white border border-[var(--border-light)] p-8">
            <h3 className="text-[20px] font-[800] text-[var(--text-heading)] mb-2">Basic</h3>
            <p className="text-[14px] text-[var(--text-body)] mb-6">For individuals starting out</p>
            <div className="mb-8">
              <span className="text-4xl font-[800] text-[var(--text-heading)]">$89</span>
              <span className="text-[14px] text-[var(--text-body)]"> /month</span>
            </div>
            <div className="flex flex-col gap-6 mb-8 flex-1 text-[14px]">
              <div>
                <strong className="block text-[var(--text-heading)] mb-1">Takedowns</strong>
                <p className="text-[var(--text-body)]">Unlimited — 1 product or username</p>
              </div>
              <div>
                <strong className="block text-[var(--text-heading)] mb-1">Coverage Highlights</strong>
                <p className="text-[var(--text-body)]">Four-engine delisting (Google, Bing, Yandex & DuckDuckGo); Telegram & Discord takedowns; impersonator removal, social media, 24/7 monitoring</p>
              </div>
              <div>
                <strong className="block text-[var(--text-heading)] mb-1">Turnaround</strong>
                <p className="text-[var(--text-body)]">Standard takedown queue</p>
              </div>
            </div>
            <button onClick={() => handlePlanClick('Basic')} className="btn btn-outline-dark w-full text-center">Choose Basic</button>
          </div>

          {/* Professional Plan (Highlighted) */}
          <div className="flex flex-col h-full rounded-2xl relative shadow-2xl bg-[var(--blue)] border border-[var(--blue-lt)] p-8 transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--gold)] text-[var(--bg-navy)] text-[12px] font-[800] uppercase tracking-widest px-4 py-1 rounded-full shadow-md whitespace-nowrap">
              Most Popular
            </div>
            <h3 className="text-[20px] font-[800] text-white mb-2">Professional</h3>
            <p className="text-[14px] text-blue-100 mb-6">For growing creators & brands</p>
            <div className="mb-8">
              <span className="text-4xl font-[800] text-white">$179</span>
              <span className="text-[14px] text-blue-200"> /month</span>
            </div>
            <div className="flex flex-col gap-6 mb-8 flex-1 text-[14px]">
              <div>
                <strong className="block text-white mb-1">Takedowns</strong>
                <p className="text-blue-100">Unlimited — up to 5 products or usernames</p>
              </div>
              <div>
                <strong className="block text-white mb-1">Coverage Highlights</strong>
                <p className="text-blue-100">Everything in Basic, plus payment-processor reporting where applicable and a dedicated takedown manager</p>
              </div>
              <div>
                <strong className="block text-white mb-1">Turnaround</strong>
                <p className="text-blue-100">Priority queue, 48-hour removal guarantee</p>
              </div>
            </div>
            <button onClick={() => handlePlanClick('Professional')} className="btn btn-gold-solid w-full text-center">Choose Professional</button>
          </div>

          {/* Enterprise Plan */}
          <div className="card-light flex flex-col h-full rounded-2xl relative shadow-lg bg-white border border-[var(--border-light)] p-8">
            <h3 className="text-[20px] font-[800] text-[var(--text-heading)] mb-2">Enterprise</h3>
            <p className="text-[14px] text-[var(--text-body)] mb-6">For large scale protection needs</p>
            <div className="mb-8">
              <span className="text-4xl font-[800] text-[var(--text-heading)]">$359</span>
              <span className="text-[14px] text-[var(--text-body)]"> /month</span>
            </div>
            <div className="flex flex-col gap-6 mb-8 flex-1 text-[14px]">
              <div>
                <strong className="block text-[var(--text-heading)] mb-1">Takedowns</strong>
                <p className="text-[var(--text-body)]">Unlimited — up to 12 products or usernames</p>
              </div>
              <div>
                <strong className="block text-[var(--text-heading)] mb-1">Coverage Highlights</strong>
                <p className="text-[var(--text-body)]">Everything in Professional, plus private trackers, filehosts, and custom crawlers for niche leak sites</p>
              </div>
              <div>
                <strong className="block text-[var(--text-heading)] mb-1">Turnaround</strong>
                <p className="text-[var(--text-body)]">Priority queue; 48-hour removal guarantee</p>
              </div>
            </div>
            <button onClick={() => handlePlanClick('Enterprise')} className="btn btn-outline-dark w-full text-center">Choose Enterprise</button>
          </div>

        </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section id="faq" className="w-full bg-white py-24">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[13px] font-[700] text-[var(--gold)] uppercase tracking-widest mb-2 block">FAQ</span>
            <h2 className="text-4xl font-[800] text-[var(--text-heading)] mb-4">Frequently Asked Questions</h2>
            <p className="text-[16px] text-[var(--text-body)]">Everything you need to know about our plans and services.</p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { q: 'Which plan is right for me?', a: 'If you are an individual creator or small business, the Starter plan covers the basics. The Professional plan suits growing brands dealing with frequent infringement. Enterprise is best for companies with large content libraries or multiple brands.' },
              { q: 'Can I change my plan at any time?', a: 'Yes. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle and any unused credit is applied to your new plan.' },
              { q: 'Is there a free trial?', a: 'We offer a free risk assessment for new clients. This gives you a clear picture of your exposure before committing to a plan. Contact our sales team to get started.' },
              { q: 'How quickly are takedowns processed?', a: 'Most takedown requests are processed within 24–48 hours. Enterprise clients receive priority queue status with a guaranteed 48-hour removal SLA.' },
              { q: 'Do you cover all platforms?', a: 'Yes. Our coverage includes all major social media platforms (TikTok, Instagram, Facebook, YouTube, X/Twitter), search engines (Google, Bing), adult content sites, file-sharing platforms, and review sites.' },
              { q: 'Is my information kept confidential?', a: '100% confidential. All client information is protected under strict NDAs. We never share client details with third parties.' },
              { q: 'What happens if removed content reappears?', a: 'Our monitoring system detects reappearances automatically. Re-uploads are covered under your plan at no extra cost — we will issue a new takedown immediately.' },
              { q: 'Do you offer refunds?', a: 'If a takedown cannot be completed due to reasons within our control, we will issue a full refund for that specific request. Monthly subscription fees are non-refundable but you may cancel any time.' },
            ].map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLUE CTA ================= */}
      <BlueCtaBand 
        headingWhite="Not sure which"
        headingGold="plan is right?"
        subtext="Talk to our experts to get a free risk assessment and find the perfect protection plan for your digital assets."
        primaryBtnText="Contact Sales"
        primaryBtnLink="/contact"
      />
      
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-[var(--border-light)] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-[700] text-[var(--text-heading)] text-[16px] hover:bg-gray-50 transition-colors"
      >
        {q}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${open ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {open && (
        <div className="px-6 pb-5 text-[15px] text-[var(--text-body)] leading-relaxed border-t border-[var(--border-light)] pt-4">
          {a}
        </div>
      )}
    </div>
  );
}