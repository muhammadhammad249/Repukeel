'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import BlueCtaBand from '../components/BlueCtaBand';
import ServicesMenuLayout from '../components/ServicesMenuLayout';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCatId, setActiveCatId] = useState<string | null>('content-removal');

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ================= HERO ================= */}
      <section className="relative w-full bg-gradient-to-br from-white to-[#f0f4f8] pt-16 pb-24 overflow-hidden">
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="pill-badge mb-6">
              Professional DMCA Services
            </div>
            <h1 className="text-5xl md:text-6xl font-[800] leading-[1.1] tracking-tight mb-6 text-black">
              Complete<br/>
              <span className="text-[var(--gold)]">DMCA Protection</span><br/>
              For Your Content
            </h1>
            <p className="text-[17px] text-black mb-8 max-w-xl">
              We offer comprehensive copyright protection and digital asset security solutions designed for creators, businesses, and enterprises worldwide.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {['24-48h Response', '99% Success Rate', 'Legal Compliance'].map((pill, i) => (
                <div key={i} className="pill-badge">
                  <span className="text-[var(--green)] font-[900]">✓</span> {pill}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#all-services" className="btn btn-gold-solid">Explore Services &rarr;</a>
              <Link href="/contact" className="btn btn-outline-gold">Contact Us</Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-center h-full min-h-[400px]">
            {/* Concentric dashed circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-dashed border-[var(--gold)] opacity-30 anim-spin-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-[var(--text-heading)] opacity-10 anim-spin-slow" style={{ animationDirection: 'reverse' }}></div>
            
            {/* Main Rotated Diamond */}
            <div className="relative z-10 w-48 h-48 bg-gradient-to-br from-[var(--gold-lt)] to-[var(--gold-dk)] rounded-3xl shadow-2xl flex items-center justify-center transform rotate-45 transition-transform hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-20 h-20 -rotate-45">
                <path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-10 left-10 w-12 h-12 bg-white rounded-xl shadow-xl flex items-center justify-center text-purple-600 z-20 anim-float">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            </div>
            <div className="absolute bottom-20 right-10 w-12 h-12 bg-white rounded-xl shadow-xl flex items-center justify-center text-blue-600 z-20 anim-float" style={{ animationDelay: '1s' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            
            {/* Outer floating text badges */}
            <div className="absolute top-24 -right-4 bg-white border border-[var(--border-light)] rounded-xl p-3 shadow-xl z-20 flex flex-col items-center gap-1 anim-float" style={{ animationDelay: '0.5s' }}>
              <span className="text-[16px] font-[800] text-blue-600 leading-none">24h</span>
              <span className="text-[10px] font-[600] text-black uppercase tracking-wide">Response</span>
            </div>
            <div className="absolute bottom-10 left-0 bg-white border border-[var(--border-light)] rounded-xl p-3 shadow-xl z-20 flex flex-col items-center gap-1 anim-float" style={{ animationDelay: '1.5s' }}>
              <span className="text-[16px] font-[800] text-[var(--green)] leading-none">280+</span>
              <span className="text-[10px] font-[600] text-black uppercase tracking-wide">Success</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE SERVICES LAYOUT ================= */}
      <section className="w-full bg-[#f4f7fb] py-16" id="all-services">
        <div className="container max-w-[1400px]">
          <ServicesMenuLayout activeCatId={activeCatId} setActiveCatId={setActiveCatId} />
        </div>
      </section>

      {/* ================= PLATFORM-SPECIFIC TAKEDOWNS ================= */}
      <section className="w-full bg-[var(--bg-soft)] py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-[800] mb-4">Platform-Specific Takedowns</h2>
            <p className="text-[16px] text-black">We hold deep expertise with the legal channels of all major platforms.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Facebook */}
            <div className="rounded-2xl p-8 flex flex-col text-white shadow-xl bg-gradient-to-br from-blue-500 to-blue-700 transition-transform hover:-translate-y-2">
              <div className="text-5xl mb-6">f</div>
              <h3 className="text-2xl font-[800] mb-3">Facebook</h3>
              <p className="text-[15px] opacity-90">Instant removal of stolen images, videos, and impersonator pages via direct legal channels.</p>
            </div>
            {/* Instagram */}
            <div className="rounded-2xl p-8 flex flex-col text-white shadow-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 transition-transform hover:-translate-y-2">
              <div className="w-10 h-10 border-2 border-white rounded-[10px] relative mb-6">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-white rounded-full"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-[800] mb-3">Instagram</h3>
              <p className="text-[15px] opacity-90">Takedowns of reels, posts, stories, and fake accounts copying your identity or content.</p>
            </div>
            {/* Twitter / X */}
            <div className="rounded-2xl p-8 flex flex-col text-white shadow-xl bg-gradient-to-br from-gray-800 to-black transition-transform hover:-translate-y-2">
              <div className="text-4xl mb-6 font-bold leading-none">𝕏</div>
              <h3 className="text-2xl font-[800] mb-3">Twitter / X</h3>
              <p className="text-[15px] opacity-90">Swift action against unauthorized media sharing and defamatory tweets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4-COLUMN STRIP ================= */}
      <section className="w-full bg-white py-16 border-y border-[var(--border-light)]">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: '🛡️', title: 'Total Protection' },
            { icon: '⚡', title: 'Fast Results' },
            { icon: '🔒', title: '100% Confidential' },
            { icon: '⚖️', title: 'Legally Compliant' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="text-3xl">{item.icon}</div>
              <h4 className="text-[16px] font-[700] text-black">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BLUE CTA 1 ================= */}
      <BlueCtaBand 
        headingWhite="Ready?"
        headingGold="Get started today!"
        subtext="Don't let copyright infringement harm your brand."
        primaryBtnText="Get Started"
        primaryBtnLink="/contact"
        secondaryBtnText="View Pricing"
        secondaryBtnLink="/pricing"
      />

      {/* ================= TESTIMONIALS ================= */}
      <section className="w-full bg-white py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-[800] mb-4">What people say about our company</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sarah O'Connor", role: "Content Creator, Marketing Firm" },
              { name: "John Doe", role: "Photography" },
              { name: "Elena R.", role: "E-Commerce Director" }
            ].map((t, i) => (
              <div key={i} className="bg-[var(--bg-soft)] border border-[var(--border-light)] rounded-2xl p-8 flex flex-col">
                <div className="flex gap-1 text-[var(--gold)] mb-6 text-lg">★★★★★</div>
                <p className="italic text-[15px] text-black mb-8 flex-1">
                  "The Repukeel team took down over 50 stolen images from various sites in just two days. Absolutely life-saving service."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[rgba(217,165,43,0.2)] flex items-center justify-center text-[var(--gold)] font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-[700] text-black">{t.name}</h4>
                    <p className="text-[12px] text-black">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DARK NAVY STAT STRIP ================= */}
      <section className="w-full bg-[var(--bg-navy)] py-16">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: '500K+', l: 'Pieces of Content Removed' },
            { n: '200+', l: 'Clients Protected' },
            { n: '99%', l: 'Takedown Success Rate' },
            { n: '24hr', l: 'Average Response Time' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-4xl font-[800] text-[var(--gold)]">{stat.n}</span>
              <span className="text-[13px] font-[500] text-[var(--text-muted-navy)] uppercase tracking-wide">{stat.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="w-full bg-white py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-[800] mb-4">Who We Serve</h2>
            <p className="text-[16px] text-black">Tailored protection solutions for every industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Content Creators', color: 'bg-pink-100 text-pink-600', icon: '🎨' },
              { title: 'E-Commerce Brands', color: 'bg-blue-100 text-blue-600', icon: '🛍️' },
              { title: 'Educators', color: 'bg-green-100 text-green-600', icon: '📚' },
              { title: 'Enterprises', color: 'bg-purple-100 text-purple-600', icon: '🏢' }
            ].map((ws, i) => (
              <div key={i} className="card-light flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6 ${ws.color}`}>
                  {ws.icon}
                </div>
                <h4 className="text-[17px] font-[700] text-black mb-2">{ws.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ACCORDION ================= */}
      <section className="w-full bg-[var(--bg-soft)] py-24">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-[800] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: 'Do you work with clients outside of Pakistan?', a: 'Yes, we are a global agency. We work with clients from over 150 countries and issue takedown notices under the DMCA and international copyright treaties.' },
              { q: 'What happens if a site ignores the DMCA notice?', a: 'If a site host ignores our notice, we escalate to the server provider, domain registrar, and search engines to force de-indexing and suspension.' },
              { q: 'Are your services confidential?', a: '100% confidential. We operate under strict NDAs and ensure your privacy is paramount.' },
              { q: 'How do you charge?', a: 'We offer one-time removal fees, or monthly retainer plans for continuous monitoring and unlimited takedowns.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-[var(--border-light)] rounded-xl overflow-hidden">
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center font-[700] text-black hover:bg-gray-50"
                  onClick={() => toggleFaq(i)}
                >
                  {faq.q}
                  <span className={`transform transition-transform text-[var(--gold)] ${openFaq === i ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-[15px] text-black">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLUE CTA 2 ================= */}
      <BlueCtaBand 
        headingWhite="Secure Your"
        headingGold="Digital Assets"
        subtext="Join hundreds of creators and brands who trust Repukeel with their reputation."
        primaryBtnText="Contact Sales"
        primaryBtnLink="/contact"
        secondaryBtnText="Request a Demo"
        secondaryBtnLink="/contact"
      />
      
    </div>
  );
}
