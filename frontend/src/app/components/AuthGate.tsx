'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
    const token = localStorage.getItem('authToken');

    if (!token && isProtectedRoute(pathname)) {
      // Not logged in and trying to access a protected page → send to login
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
      return;
    }

    if (token && pathname === '/login') {
      // Already logged in, redirect away from login page
      const next = new URLSearchParams(window.location.search).get('next') || '/';
      router.replace(next);
      return;
    }

    setChecked(true);
  }, [pathname, router]);

  // Block render until auth check is done (avoids flash of protected content)
  if (!checked && isProtectedRoute(pathname)) {
    return <div className="min-h-screen bg-slate-50" aria-label="Checking your session" />;
  }

  return <>{children}</>;
}
