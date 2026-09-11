'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(''); setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/api/v1/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Unable to sign in.');
      localStorage.setItem('authToken', result.token);
      localStorage.setItem('currentUser', JSON.stringify(result.user));
      document.cookie = `authToken=${encodeURIComponent(result.token)}; Path=/; Max-Age=${60 * 60 * 24 * 7}; SameSite=Lax`;
      const next = new URLSearchParams(window.location.search).get('next');
      router.replace(next && next.startsWith('/') && !next.startsWith('//') ? next : '/');
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Unable to sign in. Please try again.');
    } finally { setIsSubmitting(false); }
  }

  return <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-24"><div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">
    <div className="hidden md:block"><h2 className="text-3xl font-bold mb-4">Your digital rights, fully managed.</h2><p className="text-slate-600 mb-8">The ProtectIP Master client portal gives you real-time visibility into every case, every removal, and every action taken on your behalf.</p><ul className="space-y-3">{["Track your protection cases in real-time", "Submit new takedown requests 24/7", "View detailed reports and resolution updates", "Manage your digital rights with confidence"].map((item) => <li key={item} className="flex items-start gap-3 text-slate-700"><span className="text-blue-600 font-bold mt-0.5">✓</span><span>{item}</span></li>)}</ul></div>
    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg"><h1 className="text-2xl font-bold mb-1">Welcome Back</h1><p className="text-slate-500 text-sm mb-8">Sign in to your ProtectIP Master account.</p>
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div><label htmlFor="login-email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label><input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
        <div><label htmlFor="login-password" className="block text-sm font-medium text-slate-700 mb-1">Password</label><input id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" /><div className="text-right mt-1"><Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">Forgot Password?</Link></div></div>
        {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
        <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 text-white py-3 rounded-xl font-bold text-base transition-colors">{isSubmitting ? 'Signing in…' : 'Sign In'}</button>
      </form>
      <p className="text-center text-sm text-slate-500 mt-6">Don&apos;t have an account? <Link href="/signup" className="inline-flex rounded-md bg-blue-50 px-3 py-1 font-medium text-blue-700 hover:bg-blue-100">Register</Link></p>
    </div>
  </div></div>;
}
