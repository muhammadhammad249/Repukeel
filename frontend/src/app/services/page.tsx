"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const SIDEBAR_CATEGORIES = [
  {
    id: 'content-removal',
    label: 'Content Removal',
    icon: '🗑️',
    sectionTitle: 'SOLUTIONS FOR CONTENT REMOVAL',
    heading: 'Content Removal',
    services: [
      'TikTok Content Removal', 'Travel & Hospitality Review Removal',
      'Mugshot Removal & Suppression', 'Trustpilot Review Removal',
      'BBB Review Removal', 'Ripoff Report Removal',
      'Facebook Review Removal', 'Indeed Review Removal',
      'Instagram Content Removal', 'Twitter / X Content Removal',
      'Fake Review Removal',
    ],
    subServices: [
      'Google Review Removal', 'Yelp Review Removal',
    ],
  },
  {
    id: 'dating-reputation',
    label: 'Dating Reputation',
    icon: '🔥',
    sectionTitle: 'SOLUTIONS FOR DATING REPUTATION',
    heading: 'Dating Reputation',
    services: [
      'Leaked Photo Removal', 'Private Content Takedown',
      'Dating Site Profile Removal', 'Adult Content Removal',
      'OnlyFans Leaked Content Removal', 'Reddit Post Removal',
      'Telegram Content Removal', 'Discord Content Removal',
    ],
    subServices: [],
  },
  {
    id: 'search-result-cleanup',
    label: 'Search Result Cleanup',
    icon: '🔍',
    sectionTitle: 'SOLUTIONS FOR SEARCH RESULT CLEANUP',
    heading: 'Search Result Cleanup',
    services: [
      'Google Search Suppression', 'Bing Content Removal',
      'Negative Link Removal', 'De-Indexing Service',
      'Autocomplete Cleanup', 'Knowledge Panel Management',
      'News Article Suppression', 'Mugshot De-Indexing',
    ],
    subServices: [],
  },
  {
    id: 'job-reputation',
    label: 'Job Reputation',
    icon: '👤',
    sectionTitle: 'SOLUTIONS FOR JOB REPUTATION',
    heading: 'Job Reputation',
    services: [
      'Glassdoor Review Removal', 'Indeed Review Management',
      'LinkedIn Defamation Removal', 'Employment History Cleanup',
      'Professional Profile Protection', 'Employer Review Removal',
      'Background Check Cleanup', 'Career Reputation Management',
    ],
    subServices: [],
  },
  {
    id: 'monitoring-alerts',
    label: 'Monitoring & Alerts',
    icon: '📊',
    sectionTitle: 'SOLUTIONS FOR MONITORING & ALERTS',
    heading: 'Monitoring & Alerts',
    services: [
      'AI-Powered Brand Monitoring', 'Real-time Infringement Detection',
      'Social Media Monitoring', 'Dark Web Monitoring',
      '24/7 Content Alerts', 'Trademark Monitoring',
      'Review Alert System', 'Competitor Monitoring',
    ],
    subServices: [],
  },
  {
    id: 'reputation-management',
    label: 'Reputation Management',
    icon: '⭐',
    sectionTitle: 'SOLUTIONS FOR REPUTATION MANAGEMENT',
    heading: 'Reputation Management',
    services: [
      'Online Reputation Management (ORM)', 'Defamatory Content Removal',
      'Negative Article Suppression', 'Search Result Reputation Cleanup',
      'Brand Image Restoration', 'Crisis Management',
      'Review Management & Rating Improvement', 'Long-term Reputation Monitoring',
    ],
    subServices: [],
  },
  {
    id: 'reputation-audit',
    label: 'Reputation Audit',
    icon: '📋',
    sectionTitle: 'SOLUTIONS FOR REPUTATION AUDIT',
    heading: 'Reputation Audit',
    services: [
      'Full Brand Reputation Audit', 'Search Engine Audit',
      'Social Media Profile Audit', 'Review & Rating Audit',
      'Content Threat Analysis', 'Competitive Reputation Benchmarking',
      'Legal Risk Assessment', 'Free Case Evaluation',
    ],
    subServices: [],
  },
  {
    id: 'industries',
    label: 'Industries',
    icon: '🏢',
    sectionTitle: 'INDUSTRIES WE SERVE',
    heading: 'Industries',
    services: [
      'Content Creators & Influencers', 'E-Commerce Brands',
      'Healthcare & Medical Professionals', 'Legal & Law Firms',
      'Real Estate Professionals', 'Restaurants & Hospitality',
      'Educators & Online Coaches', 'Enterprises & Corporations',
    ],
    subServices: [],
  },
];

export default function ServicesPage() {
  const [activeId, setActiveId] = useState('content-removal');
  const active = SIDEBAR_CATEGORIES.find(c => c.id === activeId)!;

  return (
    <div style={{ minHeight: '100vh', background: '#080e1c', color: '#f4f6fb', fontFamily: 'sans-serif' }}>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', padding: '60px 24px 40px', maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: '#e0ac2f', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Services</p>
          <h1 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '20px' }}>
            Comprehensive Brand &amp; Reputation Protection Solutions
          </h1>
          <p style={{ fontSize: '15px', color: '#a9b3c9', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 28px' }}>
            We specialize in protecting intellectual property through legal DMCA takedowns, copyright enforcement, content removal, and reputation management. Fast, reliable, and confidential service for creators and businesses worldwide.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ background: '#e0ac2f', color: '#12100a', fontWeight: 700, fontSize: '14px', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none' }}>Get Started</a>
            <a href="/contact" style={{ background: 'transparent', border: '2px solid #22304d', color: '#f4f6fb', fontWeight: 700, fontSize: '14px', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none' }}>Contact Us</a>
          </div>
        </div>

        {/* Main Layout: Sidebar + Content */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px', display: 'flex', gap: '32px', alignItems: 'flex-start' }}>

          {/* Sidebar */}
          <div style={{ width: '220px', flexShrink: 0, position: 'sticky', top: '100px' }}>
            {SIDEBAR_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '14px 16px', marginBottom: '6px', borderRadius: '10px',
                  border: activeId === cat.id ? '1px solid #e0ac2f' : '1px solid #22304d',
                  background: activeId === cat.id ? 'rgba(224,172,47,0.08)' : '#16223c',
                  color: activeId === cat.id ? '#e0ac2f' : '#a9b3c9',
                  fontWeight: activeId === cat.id ? 700 : 500,
                  fontSize: '13px', cursor: 'pointer', textAlign: 'left', outline: 'none',
                  transition: 'all 0.2s'
                }}
              >
                <span style={{ fontSize: '18px' }}>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#e0ac2f', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              {active.sectionTitle}
            </p>

            {/* Section Header */}
            <div style={{
              background: 'linear-gradient(90deg, #1a3a7c 0%, #16307a 100%)',
              borderRadius: '10px', padding: '18px 24px', marginBottom: '20px',
              display: 'flex', alignItems: 'center', gap: '14px'
            }}>
              <div style={{ background: '#e0ac2f', borderRadius: '8px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '18px' }}>{active.icon}</span>
              </div>
              <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 800, color: '#fff' }}>{active.heading}</h2>
            </div>

            {/* Services Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              {active.services.map((svc, i) => {
                const svcSlug = svc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return (
                  <a
                    key={i}
                    href={`/services/${svcSlug}`}
                    style={{
                      display: 'block', padding: '16px 20px', borderRadius: '10px',
                      border: '1px solid #22304d', background: '#16223c',
                      color: '#f4f6fb', fontWeight: 600, fontSize: '14px',
                      textDecoration: 'none', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e0ac2f'; (e.currentTarget as HTMLAnchorElement).style.color = '#e0ac2f'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#22304d'; (e.currentTarget as HTMLAnchorElement).style.color = '#f4f6fb'; }}
                  >
                    {svc}
                  </a>
                );
              })}
            </div>

            {/* Sub-Services (single column, indented) */}
            {active.subServices.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '40px' }}>
                {active.subServices.map((sub, i) => {
                  const subSlug = sub.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return (
                    <a
                      key={i}
                      href={`/services/${subSlug}`}
                      style={{
                        display: 'block', padding: '14px 20px', borderRadius: '10px',
                        border: '1px solid #22304d', background: '#16223c',
                        color: '#f4f6fb', fontWeight: 600, fontSize: '14px',
                        textDecoration: 'none', maxWidth: '320px', transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e0ac2f'; (e.currentTarget as HTMLAnchorElement).style.color = '#e0ac2f'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#22304d'; (e.currentTarget as HTMLAnchorElement).style.color = '#f4f6fb'; }}
                    >
                      {sub}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ background: '#0c1526', borderTop: '1px solid #22304d', padding: '60px 24px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#e0ac2f', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Why Choose Us?</p>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, marginBottom: '48px' }}>Fast &amp; Effective Service — Your privacy and security are our top priorities</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '24px' }}>
              {[
                { icon: '⚡', title: 'Fast & Effective', desc: 'Quick removal of infringing content with 24-48 hour response time.' },
                { icon: '⚖️', title: '100% Legal Compliance', desc: 'All processes follow DMCA and copyright laws perfectly.' },
                { icon: '🔒', title: 'Confidential & Secure', desc: 'Your privacy and security are our top priorities.' },
                { icon: '🎓', title: 'Expert Team', desc: 'Experienced professionals in DMCA and copyright law.' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#16223c', border: '1px solid #22304d', borderRadius: '12px', padding: '28px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px', color: '#e0ac2f' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: '#a9b3c9', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div style={{ padding: '60px 24px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#e0ac2f', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>The Process</p>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, marginBottom: '48px' }}>From the moment you contact us to confirmed removal — here is exactly what happens.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '24px' }}>
              {[
                { num: '01', title: 'Submit Your Case', desc: 'Tell us what is happening. A brief description is enough to get started.' },
                { num: '02', title: 'We Scan & Identify', desc: 'Our team performs a thorough scan to find every instance of the problem.' },
                { num: '03', title: 'Action Filed', desc: 'Takedown notices, legal demands, and platform reports are filed simultaneously.' },
                { num: '04', title: 'Confirmed & Monitored', desc: 'Every removal is verified and documented. We then set up monitoring.' },
              ].map((step, i) => (
                <div key={i} style={{ background: '#16223c', border: '1px solid #22304d', borderRadius: '12px', padding: '28px 20px', textAlign: 'left' }}>
                  <div style={{ fontSize: '36px', fontWeight: 900, color: '#e0ac2f', opacity: 0.5, marginBottom: '14px' }}>{step.num}</div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '10px' }}>{step.title}</h3>
                  <p style={{ fontSize: '13px', color: '#a9b3c9', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ background: '#0c1526', borderTop: '1px solid #22304d', borderBottom: '1px solid #22304d', padding: '50px 24px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '24px', textAlign: 'center' }}>
            {[
              { stat: '500K+', label: 'Pieces of Content Removed' },
              { stat: '12K+', label: 'Clients Protected' },
              { stat: '98%', label: 'Takedown Success Rate' },
              { stat: '24h', label: 'Average Response Time' },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: '40px', fontWeight: 900, color: '#e0ac2f', marginBottom: '8px' }}>{item.stat}</div>
                <div style={{ fontSize: '13px', color: '#a9b3c9' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ padding: '60px 24px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#e0ac2f', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>FAQ</p>
            <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, marginBottom: '36px', textAlign: 'center' }}>Straight answers to the questions we get asked most</h2>
            {[
              { q: 'How quickly can you remove infringing content?', a: 'Most platform takedowns happen within 24 to 72 hours of a valid notice being filed. Search engine de-indexing typically takes 24 to 96 hours.' },
              { q: 'Do I need a registered copyright or trademark?', a: 'Not necessarily. Copyright exists automatically from the moment of creation in most countries, so you do not need a formal registration to file a DMCA takedown.' },
              { q: 'What if infringing content keeps reappearing after removal?', a: 'Re-uploads are handled automatically through our post-removal monitoring. New instances are flagged and actioned immediately without you needing to report them again.' },
              { q: 'How is your pricing structured?', a: 'We offer transparent fixed-price packages depending on the type and scope of service. Contact us for a custom quote.' },
              { q: 'Is everything I share with you kept confidential?', a: 'Yes, completely. All case details, your identity, and any sensitive information you provide is handled with strict confidentiality.' },
              { q: 'Do you work with clients outside of Pakistan?', a: 'Yes. We work with clients in over 150 countries. Our services cover platforms and hosting providers globally.' },
            ].map((faq, i) => (
              <details key={i} style={{ marginBottom: '12px', background: '#16223c', border: '1px solid #22304d', borderRadius: '10px', padding: '20px 24px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 700, fontSize: '15px', color: '#f4f6fb', listStyle: 'none', outline: 'none' }}>{faq.q}</summary>
                <p style={{ marginTop: '14px', fontSize: '14px', color: '#a9b3c9', lineHeight: 1.7 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #16223c 0%, #0c1526 100%)', border: '1px solid #22304d', borderRadius: '16px', margin: '0 24px 60px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, marginBottom: '16px' }}>Ready? Get started today!</h2>
          <p style={{ fontSize: '15px', color: '#a9b3c9', marginBottom: '32px' }}>Don't let copyright infringement harm your brand. Take action now!</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ background: '#e0ac2f', color: '#12100a', fontWeight: 700, fontSize: '14px', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none' }}>Get Started</a>
            <a href="/pricing" style={{ background: 'transparent', border: '2px solid #22304d', color: '#f4f6fb', fontWeight: 700, fontSize: '14px', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none' }}>View Pricing</a>
          </div>
        </div>

      </div>
    </div>
  );
}
