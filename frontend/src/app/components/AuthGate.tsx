'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Auth pages where logged-in users should be redirected away from
const AUTH_PAGES = new Set(['/login', '/signup']);

// Routes that require authentication — must match middleware PROTECTED_PREFIXES
const PROTECTED_PREFIXES = ['/dashboard', '/checkout'];

function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + '/'),
  );
}

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (!token && isProtectedRoute(pathname)) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
      return;
    }

    if (token && AUTH_PAGES.has(pathname)) {
      router.replace('/');
      return;
    }

    setChecked(true);
  }, [pathname, router]);

  // Show blank screen only when we know a redirect is needed (protected routes without token)
  if (!checked && isProtectedRoute(pathname)) {
    return <div className="min-h-screen bg-slate-50" aria-label="Checking your session" />;
  }

  return <>{children}</>;
}
