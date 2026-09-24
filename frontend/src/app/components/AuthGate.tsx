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
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session && isProtectedRoute(pathname)) {
        router.replace(`/login?next=${encodeURIComponent(pathname)}`);
        return;
      }

      setChecked(true);
    }

    checkAuth();
  }, [pathname, router]);

  // Block render until auth check is done (avoids flash of protected content)
  if (!checked && isProtectedRoute(pathname)) {
    return <div className="min-h-screen bg-slate-50" aria-label="Checking your session" />;
  }

  return <>{children}</>;
}
