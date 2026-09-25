/* eslint-disable */
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

// Pages that require authentication to access
const PROTECTED_ROUTES = ['/dashboard', '/checkout'];

function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + '/'),
  );
}

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isProtectedRoute(pathname)) {
      setChecked(true);
      return;
    }

    // First try getting session from local storage (instant)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setChecked(true);
        return;
      }

      // No session found — redirect to login
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    });

    // Also listen for auth state changes — this fires when Supabase finishes
    // writing the session token to localStorage after a login redirect.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setChecked(true);
      } else if (event === 'SIGNED_OUT') {
        router.replace('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [pathname, router]);

  // Block render until auth check is done (avoids flash of protected content)
  if (!checked && isProtectedRoute(pathname)) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center" aria-label="Checking your session">
        <svg className="animate-spin h-8 w-8 text-[#d4af37]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  return <>{children}</>;
}
