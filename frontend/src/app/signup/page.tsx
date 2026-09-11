'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const update = (field: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [field]: event.target.value });
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError('');
    if (form.password !== form.confirmPassword) return setError('Passwords do not match.');
    if (form.password.length < 8) return setError('Password must contain at least 8 characters.');
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/api/v1/auth/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Unable to create your account.');
      localStorage.setItem('authToken', result.token);
      localStorage.setItem('currentUser', JSON.stringify(result.user));
      document.cookie = `authToken=${encodeURIComponent(result.token)}; Path=/; Max-Age=${60 * 60 * 24 * 7}; SameSite=Lax`;
      router.replace('/');
    } catch (requestError) { setError(requestError instanceof Error ? requestError.message : 'Unable to create your account.'); } finally { setIsSubmitting(false); }
  }
  return <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-24"><div className="w-full max-w-md"><div className="flex justify-center gap-6 mb-8 text-xs text-slate-500 flex-wrap">{["No Obligation", "Secure & Encrypted", "Free to Join", "Expert Support"].map((benefit) => <span key={benefit}>✓ {benefit}</span>)}</div><div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg"><h1 className="text-2xl font-bold mb-1 text-center">Create Account</h1><p className="text-slate-500 text-sm text-center mb-8">Join thousands of protected creators and brands.</p>
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-2 gap-4"><div><label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-1">First Name</label><input id="first-name" type="text" value={form.firstName} onChange={update('firstName')} autoComplete="given-name" required className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div><div><label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label><input id="last-name" type="text" value={form.lastName} onChange={update('lastName')} autoComplete="family-name" required className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div></div>
      <div><label htmlFor="signup-email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label><input id="signup-email" type="email" value={form.email} onChange={update('email')} autoComplete="email" required className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
      <div><label htmlFor="signup-password" className="block text-sm font-medium text-slate-700 mb-1">Password</label><input id="signup-password" type="password" value={form.password} onChange={update('password')} autoComplete="new-password" minLength={8} required className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
      <div><label htmlFor="confirm-password" className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label><input id="confirm-password" type="password" value={form.confirmPassword} onChange={update('confirmPassword')} autoComplete="new-password" minLength={8} required className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
      {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}<button type="submit" disabled={isSubmitting} className="mt-2 w-full bg-blue-600 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 text-white py-3 rounded-xl font-bold text-base transition-colors">{isSubmitting ? 'Creating account…' : 'Create Account'}</button>
    </form><p className="text-center text-sm text-slate-500 mt-6">Already have an account? <Link href="/login" className="text-blue-600 hover:underline font-medium">Sign in</Link></p>
  </div></div></div>;
}
