'use client';
import React from 'react';
import Link from 'next/link';

export default function ProtectionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-soft)]">
      
      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-32">
        <div className="container max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--gold-lt)] to-[var(--gold-dk)] flex items-center justify-center text-white mb-6 shadow-xl">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z"/></svg>
          </div>
          
          <div className="pill-badge mb-6">
            Professional DMCA protection
          </div>
          
          <h1 className="text-4xl md:text-5xl font-[800] tracking-tight leading-[1.1] mb-6">
            Protect your content.<br/>
            <span className="text-[var(--gold)]">Track every case.</span>
          </h1>
          
          <p className="text-[17px] text-[var(--text-body)] mb-12 max-w-lg">
            Submit new copyright infringement takedowns or track the live status of your existing cases in our secure portal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
            
            {/* Submit a Case Card */}
            <div className="card-light text-left group flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[rgba(217,165,43,0.1)] text-[var(--gold)] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 5v14M5 12h14"/></svg>
              </div>
              <h3 className="text-[20px] font-[700] text-[var(--text-heading)] mb-2">Submit a case</h3>
              <p className="text-[15px] text-[var(--text-body)] mb-8 flex-1">
                Found your content stolen? Submit the details and our legal team will issue a takedown notice immediately.
              </p>
              <Link href="/contact" className="text-[var(--gold)] font-[700] text-[15px] hover:underline flex items-center gap-1">
                Start now &rarr;
              </Link>
            </div>

            {/* Client Portal Card */}
            <div className="card-light text-left group flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[rgba(217,165,43,0.1)] text-[var(--gold)] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className="text-[20px] font-[700] text-[var(--text-heading)] mb-2">Client portal</h3>
              <p className="text-[15px] text-[var(--text-body)] mb-8 flex-1">
                Log in to your secure dashboard to view live updates on your active takedown requests and manage your account.
              </p>
              <Link href="/login" className="text-[var(--gold)] font-[700] text-[15px] hover:underline flex items-center gap-1">
                Log in &rarr;
              </Link>
            </div>
            
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 w-full border-t border-[var(--border-light)] pt-12 pb-12 gap-8 text-center">
            {[
              { n: '98%', l: 'Success Rate' },
              { n: '24-48h', l: 'Response Time' },
              { n: '280+', l: 'Cases Solved' },
              { n: '4.9★', l: 'Client Rating' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-3xl font-[800] text-[var(--text-heading)]">{stat.n}</span>
                <span className="text-[13px] font-[600] text-[var(--text-body)] uppercase tracking-wide">{stat.l}</span>
              </div>
            ))}
          </div>

          <Link href="/dashboard" className="text-[13px] font-[500] text-[var(--text-muted-navy)] hover:text-[var(--gold)] transition-colors">
            Admin access &rarr;
          </Link>
          
        </div>
      </main>

    </div>
  );
}
