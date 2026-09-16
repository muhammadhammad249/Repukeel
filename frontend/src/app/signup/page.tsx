'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Dummy logic
    setTimeout(() => {
      localStorage.setItem('authToken', 'dummy_token');
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-68px)]">
      
      {/* Left Column: Form */}
      <div className="w-full md:w-1/2 lg:w-5/12 bg-white flex flex-col justify-center px-8 sm:px-16 py-12">
        <div className="max-w-md w-full mx-auto">
          
          <h1 className="text-3xl font-[800] text-[var(--text-heading)] mb-2">Create an Account</h1>
          <p className="text-[15px] text-[var(--text-body)] mb-8">
            Join Repukeel to start protecting your intellectual property today.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-[700] text-[var(--text-heading)] mb-1.5">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow text-[14px]" 
                  placeholder="John"
                  required 
                />
              </div>
              <div>
                <label className="block text-[13px] font-[700] text-[var(--text-heading)] mb-1.5">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow text-[14px]" 
                  placeholder="Doe"
                  required 
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-[700] text-[var(--text-heading)] mb-1.5">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow text-[14px]" 
                placeholder="you@example.com"
                required 
              />
            </div>
            
            <div>
              <label className="block text-[13px] font-[700] text-[var(--text-heading)] mb-1.5">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow text-[14px]" 
                placeholder="••••••••"
                required 
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-gold-solid w-full mt-2 py-3.5 text-[15px]"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-[14px] text-[var(--text-body)] mt-8">
            Already have an account? <Link href="/login" className="font-[700] text-[var(--text-heading)] hover:text-[var(--gold)] transition-colors">Log in</Link>
          </p>

        </div>
      </div>

      {/* Right Column: Visual Panel */}
      <div className="hidden md:flex w-full md:w-1/2 lg:w-7/12 bg-gradient-to-br from-[var(--bg-navy)] to-[#1a2f63] flex-col items-center justify-center p-12 relative overflow-hidden">
        
        {/* Background Decorative Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full pointer-events-none"></div>
        
        {/* 3D Spinning Diamond */}
        <div className="relative mb-12">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--gold)] rounded-full mix-blend-screen filter blur-[50px] opacity-30"></div>
          
          <div className="icon-3d-spin w-24 h-24 bg-gradient-to-br from-[var(--gold-lt)] to-[var(--gold-dk)] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(217,165,43,0.4)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-12 h-12 -rotate-45">
              <path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="text-center max-w-sm relative z-10">
          <h2 className="text-2xl font-[800] text-white mb-3">Total Protection</h2>
          <p className="text-[15px] text-blue-200">
            Monitor your cases, upload new takedown requests, and track real-time progress all from your secure dashboard.
          </p>
        </div>
      </div>
      
    </div>
  );
}
