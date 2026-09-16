'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Dummy logic
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex min-h-[calc(100vh-68px)] bg-[var(--bg-soft)] items-center justify-center py-12 px-6">
      <div className="card-light max-w-md w-full relative overflow-hidden">
        
        {/* Subtle accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--gold)]"></div>
        
        <div className="mb-8">
          <Link href="/login" className="inline-flex items-center gap-2 text-[13px] font-[600] text-[var(--text-body)] hover:text-[var(--gold)] transition-colors mb-6">
            &larr; Back to login
          </Link>
          <h1 className="text-2xl font-[800] text-[var(--text-heading)] mb-2">Reset Password</h1>
          <p className="text-[14px] text-[var(--text-body)]">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 className="text-[15px] font-[700] text-green-800 mb-1">Check your email</h3>
            <p className="text-[13px] text-green-700">We've sent password reset instructions to your email address.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-[13px] font-[700] text-[var(--text-heading)] mb-1.5">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow text-[14px]" 
                placeholder="you@example.com"
                required 
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-gold-solid w-full py-3.5 text-[15px]"
              disabled={loading}
            >
              {loading ? 'Sending link...' : 'Send Reset Link'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
