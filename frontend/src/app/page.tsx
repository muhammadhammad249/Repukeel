'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-16 pb-32 overflow-hidden bg-gradient-to-tr from-[#fef4d8] via-[#fdfaf3] to-[#eef4ff]">
        {/* Very Faint Grid Background */}
        <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'linear-gradient(#d1d5db 1px, transparent 1px), linear-gradient(90deg, #d1d5db 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        
        {/* Extra Golden Glow on the left */}
        <div className="absolute top-0 left-0 w-[600px] h-[100%] bg-gradient-to-r from-[#fae7b5] to-transparent opacity-60 pointer-events-none"></div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start items-center pt-8">
          
          {/* Left Column */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#fdfaf2] border border-[#f0c85a] rounded-full px-4 py-2 text-[13px] font-[600] text-[#b8860f] mb-8 shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Professional DMCA Protection Service
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-[900] leading-[1.05] tracking-tight mb-8 text-[#111827]">
              Protect Your<br/>
              <span className="text-[#d4af37]">Digital Content</span><br/>
              From Copyright<br/>
              Theft
            </h1>
            <p className="text-[17px] text-[#4b5563] mb-10 max-w-lg leading-relaxed">
              Fast, effective DMCA takedown service with a 24-48 hour response time. 
              We protect your intellectual property from piracy and unauthorized use across all platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/protection" className="btn btn-navy-solid shadow-xl" style={{ padding: '16px 36px', fontSize: '16px' }}>Get Protection Now &rarr;</Link>
              <a href="#services" className="btn btn-outline-dark" style={{ padding: '16px 36px', fontSize: '16px' }}>View Services</a>
            </div>

            <div className="flex flex-wrap gap-3">
              {['No Win, No Fee', '24/7 Support', 'Global Coverage', 'Legal Compliance'].map((pill, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-white border border-[#e5e7eb] rounded-full px-3 py-1.5 text-[12px] font-[600] text-[#1f2937] shadow-sm">
                  <div className="w-4 h-4 rounded-full bg-[#22c55e] flex items-center justify-center text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  {pill}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center lg:justify-end lg:mt-4" style={{ perspective: '1200px' }}>
            <style>{`
              @keyframes float3d {
                0% { transform: translateY(0) rotateX(1deg) rotateY(-2deg); }
                50% { transform: translateY(-12px) rotateX(-1deg) rotateY(2deg); }
                100% { transform: translateY(0) rotateX(1deg) rotateY(-2deg); }
              }
              .animate-float3d {
                animation: float3d 8s ease-in-out infinite;
                transform-style: preserve-3d;
              }
            `}</style>
            
            {/* Background SVG curved dotted lines */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] pointer-events-none opacity-40 z-0" viewBox="0 0 400 400">
              <path d="M-50 250 Q 200 150 450 250" fill="none" stroke="#dca12b" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M0 350 Q 200 200 400 400" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="80" cy="225" r="3" fill="#dca12b" />
              <circle cx="320" cy="225" r="3" fill="#dca12b" />
              <circle cx="150" cy="290" r="3" fill="#9ca3af" />
            </svg>

            {/* Completely exact positioning container */}
            <div className="relative w-full max-w-[420px] aspect-square animate-float3d z-10 mx-auto lg:mr-8 mt-12 lg:mt-0">
              
              {/* Standalone floating pills (left side) */}
              <div className="absolute top-[20%] -left-[15%] w-[32px] h-[85px] bg-[#22c55e] rounded-full rotate-[-15deg] shadow-lg z-0"></div>
              <div className="absolute top-[60%] -left-[5%] w-[32px] h-[85px] bg-[#3b82f6] rounded-full shadow-lg z-0"></div>
              
              {/* Scattered dots */}
              <div className="absolute top-[5%] left-[25%] w-3 h-3 bg-[#dca12b] rounded-full opacity-70"></div>
              <div className="absolute top-[20%] right-[10%] w-2 h-2 bg-[#dca12b] rounded-full opacity-60"></div>
              <div className="absolute bottom-[30%] left-[20%] w-2.5 h-2.5 bg-[#dca12b] rounded-full opacity-90"></div>
              <div className="absolute bottom-[-15%] left-[10%] w-3 h-3 bg-[#dca12b] rounded-full opacity-70"></div>
              <div className="absolute top-[35%] right-[-15%] w-3 h-3 bg-[#dca12b] rounded-full"></div>

              {/* Main White Card */}
              <div className="absolute inset-4 bg-white rounded-[40px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)] flex items-center justify-center z-10 border border-gray-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="#dca12b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[38%] h-[38%] drop-shadow-sm">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4" strokeWidth="3"/>
                </svg>
              </div>

              {/* Top Right: Gold Rating Badge + Purple Pill */}
              <div className="absolute top-[5%] -right-[10%] z-20">
                {/* Purple pill tucked behind */}
                <div className="absolute -top-[15px] -left-[30px] w-[28px] h-[75px] bg-[#a855f7] rounded-full rotate-[45deg] -z-10 shadow-md"></div>
                
                {/* Gold Card */}
                <div className="bg-[#dca12b] rounded-[24px] p-5 shadow-2xl flex flex-col items-center justify-center w-[110px] h-[135px] text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-8 h-8 mb-2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <div className="flex items-center gap-0.5">
                    <span className="text-[28px] font-[900] leading-none tracking-tight">4.9</span>
                    <span className="text-[20px] font-[900] leading-none">★</span>
                  </div>
                  <span className="text-[13px] font-[600] tracking-wide mt-1">Rating</span>
                </div>
              </div>
              
              {/* Bottom Right: Blue Response Badge + Orange Pill */}
              <div className="absolute bottom-[10%] -right-[15%] z-20">
                {/* Orange pill tucked behind left side */}
                <div className="absolute bottom-[10px] -left-[45px] w-[50px] h-[22px] bg-[#f59e0b] rounded-full rotate-[-10deg] -z-10 shadow-md"></div>
                
                {/* Blue Card */}
                <div className="bg-[#3675f5] rounded-[24px] p-5 shadow-2xl flex flex-col items-center justify-center w-[110px] h-[135px] text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-8 h-8 mb-2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  <span className="text-[28px] font-[900] leading-none tracking-tight">24h</span>
                  <span className="text-[13px] font-[600] tracking-wide mt-1">Response</span>
                </div>
              </div>

              {/* Bottom Left: Huge Green Success Badge */}
              <div className="absolute -bottom-[8%] -left-[12%] z-20">
                {/* Green Card */}
                <div className="bg-[#1cb954] rounded-[28px] p-6 shadow-2xl flex flex-col items-start justify-center w-[145px] h-[165px] text-white relative">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-8 h-8 mb-4"><path d="M22 7L13.5 15.5 8.5 10.5 2 17M16 7h6v6"/></svg>
                  <span className="text-[34px] font-[900] leading-none tracking-tight">280+</span>
                  <span className="text-[15px] font-[600] tracking-wide mt-1">Success</span>
                  
                  {/* Little green blob floating top right corner */}
                  <div className="absolute -top-[12px] -right-[12px] w-[45px] h-[45px] bg-[#1cb954] rounded-full shadow-lg"></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="w-full bg-[var(--bg-navy)] py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: '30K+', l: 'Content Pieces Removed' },
            { n: '200+', l: 'Clients Protected' },
            { n: '99%', l: 'Success Rate' },
            { n: '150+', l: 'Countries Covered' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-4xl font-[800] text-[var(--gold)]">{stat.n}</span>
              <span className="text-[14px] font-[500] text-[var(--text-muted-navy)]">{stat.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROFESSIONAL DMCA SECTION ================= */}
      <section className="w-full bg-white py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-[800] mb-6">Professional DMCA<br/>Takedown Service</h2>
            <div className="w-16 h-1 bg-[var(--gold)] mb-8"></div>
            <p className="text-[16px] text-[var(--text-body)] mb-6">
              We are a dedicated DMCA takedown service committed to protecting your digital content from copyright infringement, piracy, and unauthorized use.
            </p>
            <div className="flex flex-col gap-6 mb-10">
              {[
                { title: 'Fast & Effective Takedowns', desc: 'Quick removal of stolen content from all platforms within 24 to 48 hours.' },
                { title: 'Complete Copyright Protection', desc: 'Full spectrum protection for your intellectual property across every platform and jurisdiction.' },
                { title: 'Legal Support', desc: 'Expert legal assistance and ongoing monitoring to protect your rights long-term.' }
              ].map((ft, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(217,165,43,0.1)] flex items-center justify-center text-[var(--gold)] flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[17px] font-[700] text-[var(--text-heading)] mb-1">{ft.title}</h4>
                    <p className="text-[14px] text-[var(--text-body)] leading-relaxed">{ft.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/protection" className="btn btn-gold-solid">Start Protecting Now</Link>
          </div>
          
          <div className="relative grid grid-cols-2 gap-4">
            {[
              { n: '98%', l: 'Client Satisfaction' },
              { n: '24-48h', l: 'Average Takedown' },
              { n: '50+', l: 'Countries Served' },
              { n: '280+', l: 'Cases Solved' }
            ].map((stat, i) => (
              <div key={i} className="card-navy text-center p-6 flex flex-col items-center gap-3">
                <span className="text-3xl font-[800] text-[var(--gold)]">{stat.n}</span>
                <span className="text-[13px] font-[500] text-[var(--text-on-navy)] leading-tight">{stat.l}</span>
              </div>
            ))}
            
            {/* Overlay Quote Card */}
            <div className="w-[100%] mt-6 bg-white border border-[var(--gold)] rounded-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-10 text-center relative overflow-hidden">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1" className="w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"><path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z"/></svg>
              <p className="italic text-[15px] font-[500] text-[var(--text-heading)] relative z-10">"Your content is valuable&mdash;let us help you protect it."</p>
              <p className="text-[12px] font-[700] text-[var(--text-body)] mt-2 uppercase tracking-wide relative z-10">Repukeel Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="w-full bg-white py-24 border-t border-[var(--border-light)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[13px] font-[700] text-[var(--gold)] uppercase tracking-widest mb-2 block">Our Services</span>
            <h2 className="text-4xl font-[800] mb-4">Increase sales with our brand protection solutions</h2>
            <p className="text-[16px] text-[var(--text-body)]">Achieve comprehensive visibility of online threats with round-the-clock monitoring and enforcement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Rendering 6 sample cards for layout matching */}
            {[
              { title: 'AI-Powered Monitoring', desc: 'Continuous scanning to detect unauthorized use.' },
              { title: 'Website Protection', desc: 'Identify scraped or copied content on 3rd-party sites.' },
              { title: 'Search Engine Removal', desc: 'Remove infringing URLs from Google, Bing.' },
              { title: 'Social Media Takedown', desc: 'Enforce rights on Instagram, Facebook, TikTok.' },
              { title: 'Brand Impersonation', desc: 'Detect and remove fake accounts & profiles.' },
              { title: 'Fake Review Removal', desc: 'Swiftly dispute and remove defamatory reviews.' }
            ].map((svc, i) => (
              <div key={i} className="card-light flex flex-col">
                <div className="icon-box-light mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 2v20M5 7l-3 6a3.5 3.5 0 0 0 7 0l-3-6zM19 7l-3 6a3.5 3.5 0 0 0 7 0l-3-6zM5 7h14M8 3h8"/></svg>
                </div>
                <h4 className="text-[18px] font-[700] text-[var(--text-heading)] mb-2">{svc.title}</h4>
                <p className="text-[14px] text-[var(--text-body)]">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn btn-navy-solid">CONTACT SALES</Link>
            <Link href="/contact" className="btn btn-gold-solid">REQUEST A DEMO</Link>
          </div>
        </div>
      </section>

      {/* ================= 4 SIMPLE STEPS ================= */}
      <section className="w-full bg-[var(--bg-soft)] py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-[800] mb-4">How We Protect You in 4 Simple Steps</h2>
            <p className="text-[16px] text-[var(--text-body)]">Our streamlined process ensures rapid resolution of copyright infringements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { n: '01', title: 'Contact Us', desc: 'Submit your case details securely through our portal.' },
              { n: '02', title: 'We Scan & Identify', desc: 'Our AI scans the web for all infringing content.' },
              { n: '03', title: 'Action Filed', desc: 'Legal DMCA takedown notices are immediately drafted and sent.' },
              { n: '04', title: 'Confirmed', desc: 'Content is successfully removed and continuously monitored.' }
            ].map((step, i) => (
              <div key={i} className="relative p-6 flex flex-col items-center">
                <div className="text-[100px] font-[900] text-[var(--gold)] opacity-10 absolute top-0 left-1/2 -translate-x-1/2 -z-10 leading-none">{step.n}</div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--bg-navy)] to-[var(--gold)] mb-6 flex items-center justify-center text-white shadow-lg">
                  <span className="font-[700] text-xl">{i+1}</span>
                </div>
                <h4 className="text-[18px] font-[700] text-[var(--text-heading)] mb-2">{step.title}</h4>
                <p className="text-[14px] text-[var(--text-body)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="w-full bg-white py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-[800] mb-8">Why Thousands Choose Repukeel</h2>
            <div className="flex flex-col gap-4">
              {[
                { title: 'Same-Day Action', desc: 'We act instantly to limit damage.' },
                { title: 'Global Coverage', desc: 'Takedowns issued in every jurisdiction.' },
                { title: '100% Confidential', desc: 'Your privacy is fully protected.' },
                { title: 'Proven Results', desc: 'Unmatched 99% success rate across platforms.' }
              ].map((feat, i) => (
                <div key={i} className="card-light !p-6 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(217,165,43,0.1)] flex items-center justify-center text-[var(--gold)] flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[17px] font-[700] text-[var(--text-heading)]">{feat.title}</h4>
                    <p className="text-[14px] text-[var(--text-body)]">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { n: '2K+', l: 'DMCA Takedowns Filed' },
              { n: '24hrs', l: 'Avg Removal Time' },
              { n: '20+', l: 'Platforms Covered' },
              { n: '99%', l: 'Client Satisfaction' },
              { n: '150+', l: 'Countries Served' },
              { n: '7+', l: 'Years of Experience' }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-[var(--border-light)] rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-[800] text-[var(--gold)] mb-1">{stat.n}</div>
                <div className="text-[13px] font-[600] text-[var(--text-heading)] uppercase tracking-wide">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="w-full bg-[var(--bg-navy)] py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-[800] text-white mb-4">Trusted by Creators Worldwide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Sarah M.', role: 'Content Creator' },
              { name: 'Ahmed K.', role: 'Business Owner' },
              { name: 'Jessica T.', role: 'Online Educator' },
              { name: 'Mark D.', role: 'Brand Manager' }
            ].map((t, i) => (
              <div key={i} className="bg-[#111a36] border border-[var(--border-navy)] rounded-2xl p-8 flex flex-col">
                <div className="flex gap-1 text-[var(--gold)] mb-6 text-lg">★★★★★</div>
                <p className="italic text-[15px] text-[var(--text-on-navy)] mb-8 flex-1">
                  "Absolutely incredible service. They took down stolen copies of my course videos within 24 hours. Highly recommended!"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center text-[var(--bg-navy)] font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-[700] text-white">{t.name}</h4>
                    <p className="text-[12px] text-[var(--text-muted-navy)]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="w-full bg-white py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-[800] mb-6">Got Questions?<br/>We Have Answers.</h2>
            <p className="text-[16px] text-[var(--text-body)] mb-8">
              Everything you need to know about our DMCA takedown process and brand protection services.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              {['100% Legal & Compliant', 'Transparent Process', 'Dedicated Account Manager', 'No Hidden Fees'].map((chk, i) => (
                <li key={i} className="flex items-center gap-3 font-[600] text-[var(--text-heading)]">
                  <span className="text-[var(--gold)]">✓</span> {chk}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-navy-solid">Contact Our Team</Link>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: 'How long does a takedown take?', a: 'Most standard DMCA takedowns are processed and resolved within 24 to 48 hours depending on the platform.' },
              { q: 'What information do you need?', a: 'We simply need a link to your original content and links to where it has been stolen or copied.' },
              { q: 'Do you work internationally?', a: 'Yes, we issue takedown notices globally and cover all major international hosting providers.' },
              { q: 'What happens if the content comes back?', a: 'Our continuous monitoring plans ensure that if the content is re-uploaded, we automatically strike it down again.' }
            ].map((faq, i) => (
              <div key={i} className="bg-[var(--bg-soft)] rounded-2xl p-6">
                <h4 className="text-[16px] font-[700] text-[var(--text-heading)] mb-2">{faq.q}</h4>
                <p className="text-[14px] text-[var(--text-body)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
