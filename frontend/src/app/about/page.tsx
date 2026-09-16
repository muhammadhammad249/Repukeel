'use client';
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ================= HERO (Photo Background) ================= */}
      <section className="relative w-full py-32 md:py-48 flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[var(--bg-navy)] opacity-70"></div>
        
        <div className="container relative z-10 text-center flex flex-col items-center">
          
          {/* Arc of badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="pill-badge dark-var transform -rotate-6 translate-y-2">🛡️ Est. 2017</div>
            <div className="pill-badge dark-var transform -translate-y-2">⚖️ Legal Experts</div>
            <div className="pill-badge dark-var transform rotate-6 translate-y-2">🌐 Global Reach</div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-[900] tracking-tight mb-6" style={{ color: '#ffffff' }}>
            Protecting <span style={{ color: 'var(--gold)' }}>Creators.</span>
          </h1>
          <p className="text-[18px] text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-[500]">
            We are a team of legal professionals, technologists, and investigators dedicated to safeguarding digital intellectual property across the globe.
          </p>
          
          <Link href="/contact" className="btn btn-gold-solid">
            Join Our Mission &rarr;
          </Link>
        </div>
      </section>

      {/* ================= THE EXPERIENCE ================= */}
      <section className="w-full bg-white py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[13px] font-[700] text-[var(--gold)] uppercase tracking-widest mb-2 block">Our Story</span>
            <h2 className="text-4xl font-[800] mb-6">The Repukeel Experience</h2>
            <div className="w-16 h-1 bg-[var(--gold)] mb-8"></div>
            <p className="text-[16px] text-[var(--text-body)] mb-6 leading-relaxed">
              Founded on the belief that creators deserve absolute control over their work, Repukeel has evolved from a small legal consultancy into a global leader in digital rights enforcement.
            </p>
            <p className="text-[16px] text-[var(--text-body)] mb-8 leading-relaxed">
              We blend cutting-edge AI detection technology with aggressive legal enforcement to ensure your content remains yours. Over the last 7 years, we've recovered millions in lost revenue for our clients by systematically removing pirated content from the darkest corners of the web.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-[900] text-[var(--text-heading)] mb-1">500K+</div>
                <div className="text-[13px] font-[600] text-[var(--gold)] uppercase">Takedowns</div>
              </div>
              <div>
                <div className="text-3xl font-[900] text-[var(--text-heading)] mb-1">100%</div>
                <div className="text-[13px] font-[600] text-[var(--gold)] uppercase">Confidential</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team meeting" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[var(--gold)] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[var(--bg-navy)] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>
        </div>
      </section>

      {/* ================= MEET THE EXPERTS ================= */}
      <section className="w-full bg-[var(--bg-soft)] py-24 border-t border-[var(--border-light)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-[800] mb-4">Meet the Experts</h2>
            <p className="text-[16px] text-[var(--text-body)]">A multidisciplinary team fighting for your digital rights.</p>
          </div>
          
          {/* 4 Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Legal Team', desc: 'Copyright attorneys and paralegals executing swift legal action.', icon: '⚖️' },
              { title: 'Tech Ops', desc: 'Engineers building AI scanners and monitoring tools.', icon: '💻' },
              { title: 'Investigations', desc: 'Tracing anonymous uploaders and domain owners.', icon: '🕵️' },
              { title: 'Client Support', desc: '24/7 dedicated account managers for your peace of mind.', icon: '🤝' }
            ].map((cat, i) => (
              <div key={i} className="card-navy text-center flex flex-col items-center">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h4 className="text-[18px] font-[700] text-white mb-2">{cat.title}</h4>
                <p className="text-[14px] text-[var(--text-muted-navy)]">{cat.desc}</p>
              </div>
            ))}
          </div>

          {/* Team Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {[
              { name: 'David Reynolds', role: 'Head of Legal', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop' },
              { name: 'Sarah Jenkins', role: 'Lead Investigator', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop' },
              { name: 'Michael Chang', role: 'Chief Technologist', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop' },
              { name: 'Elena Rodriguez', role: 'Client Relations', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop' },
              { name: 'James Wilson', role: 'Copyright Specialist', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop' },
              { name: 'Anita Patel', role: 'Data Analyst', img: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=2000&auto=format&fit=crop' }
            ].map((member, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer bg-gray-200">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-navy)] via-[rgba(13,27,61,0.5)] to-transparent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-white font-[700] text-[18px]">{member.name}</h4>
                  <p className="text-[var(--gold)] text-[14px] font-[600] mb-2">{member.role}</p>
                  
                  {/* Gold Arrow */}
                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[var(--gold)] text-[var(--bg-navy)] flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
