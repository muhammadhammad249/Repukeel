'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!firstName || !lastName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setLoading(true);
    // Simulate API registration
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('registeredUser', JSON.stringify({ email, password, firstName, lastName }));
      alert('Registration successful! Please log in with your new credentials.');
      router.push('/login');
    }, 1500);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-68px)]">
      
      {/* Left Column: Form */}
      <div className="w-full md:w-1/2 lg:w-5/12 bg-white flex flex-col justify-center px-8 sm:px-16 py-12">
        <div className="max-w-md w-full mx-auto">
          
          <h1 className="text-3xl font-[800] text-[var(--text-heading)] mb-2">Create an Account</h1>
          <p className="text-[15px] text-[var(--text-body)] mb-6">
            Join Repukeel to start protecting your intellectual property today.
          </p>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100 mb-6 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-[700] text-[var(--text-heading)] mb-1.5">First Name</label>
                <input 
                  type="text" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow text-[14px]" 
                  placeholder="John"
                  required 
                />
              </div>
              <div>
                <label className="block text-[13px] font-[700] text-[var(--text-heading)] mb-1.5">Last Name</label>
                <input 
                  type="text" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow text-[14px]" 
                placeholder="you@example.com"
                required 
              />
            </div>
            
            <div>
              <label className="block text-[13px] font-[700] text-[var(--text-heading)] mb-1.5">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow text-[14px]" 
                placeholder="••••••••"
                required 
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-gold-solid w-full mt-2 py-3.5 text-[15px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-[#0a192f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating account...
                </>
              ) : 'Create Account'}
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
