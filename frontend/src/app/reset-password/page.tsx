'use client';

import Link from 'next/link';
import { FormEvent, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

function ResetPasswordContent() {
  const token = useSearchParams().get('token');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(''); setMessage('');
    if (!token) return setError('This reset link is invalid. Please request a new one.');
    if (password !== confirmPassword) return setError('Passwords do not match.');
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/api/v1/auth/reset-password`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token, password }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Unable to reset password.');
      setMessage(result.message); setPassword(''); setConfirmPassword('');
    } catch (requestError) { setError(requestError instanceof Error ? requestError.message : 'Unable to reset password.'); } finally { setIsSubmitting(false); }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Choose a new password</h1>
        <p className="text-center text-sm text-slate-500 mt-2 mb-8">Use at least 8 characters.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div><label htmlFor="new-password" className="block text-sm font-medium text-slate-700 mb-1">New Password</label><input id="new-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="new-password" minLength={8} required className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
          <div><label htmlFor="confirm-new-password" className="block text-sm font-medium text-slate-700 mb-1">Confirm New Password</label><input id="confirm-new-password" type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} autoComplete="new-password" minLength={8} required className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
          {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
          {message && <p role="status" className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">{message} <Link href="/login" className="font-medium underline">Sign in</Link></p>}
          <button type="submit" disabled={isSubmitting || !!message} className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white py-3 rounded-xl font-bold transition-colors">{isSubmitting ? 'Updating…' : 'Update Password'}</button>
        </form>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50"><p className="text-slate-500">Loading…</p></div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
