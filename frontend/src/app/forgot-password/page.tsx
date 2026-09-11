'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setMessage(''); setError(''); setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/api/v1/auth/forgot-password`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Unable to send reset link.');
      setMessage(result.message);
    } catch (requestError) { setError(requestError instanceof Error ? requestError.message : 'Unable to send reset link.'); } finally { setIsSubmitting(false); }
  }
  return <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4"><div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-lg"><div className="text-center mb-8"><div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-2xl">🔑</div><h1 className="text-2xl font-bold">Forgot Password</h1><p className="text-slate-500 text-sm mt-2">Enter your registered email and we&apos;ll send you a reset link.</p></div><form className="space-y-4" onSubmit={handleSubmit}><div><label htmlFor="reset-email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label><input id="reset-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required placeholder="you@example.com" className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>{error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}{message && <p role="status" className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">{message}</p>}<button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white py-3 rounded-xl font-bold transition-colors">{isSubmitting ? 'Sending…' : 'Send Reset Link'}</button></form><p className="text-center text-sm text-slate-500 mt-6"><Link href="/login" className="text-blue-600 hover:underline">← Back to Login</Link></p></div></div>;
}
