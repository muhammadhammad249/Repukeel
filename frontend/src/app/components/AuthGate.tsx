'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Pages that are always accessible without authentication
const PUBLIC_ROUTES = ['/login', '/signup', '/forgot-password', '/reset-password'];

function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + '/'),
  );
}

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (!token && !isPublicRoute(pathname)) {
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
  if (!checked && !isPublicRoute(pathname)) {
    return <div className="min-h-screen bg-slate-50" aria-label="Checking your session" />;
  }

  return <>{children}</>;
}
