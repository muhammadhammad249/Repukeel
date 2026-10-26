/* eslint-disable */
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type AuthUser = { name: string; email: string; role?: string };

export default function AccountMenu({
  loginClassName,
  menuClassName,
  onNavigate,
}: {
  loginClassName: string;
  menuClassName: string;
  onNavigate?: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [authState, setAuthState] = useState<'loading' | 'loggedOut' | AuthUser>('loading');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function refresh() {
      // getSession reads localStorage — no network, always fast & reliable
      const { data: { session } } = await supabase.auth.getSession();

      if (cancelled) return;

      if (!session?.user) {
        setAuthState('loggedOut');
        return;
      }

      // Build name from session (guaranteed to work even if DB is down)
      const name =
        session.user.user_metadata?.full_name ||
        session.user.email?.split('@')[0] ||
        'User';

      // Set a base state immediately so UI shows fast
      if (!cancelled) {
        setAuthState({ name, email: session.user.email || '', role: undefined });
      }

      // Then try to enrich with DB role (best-effort, doesn't block rendering)
      try {
        const { data: profile } = await supabase
          .from('profiles')
          .select('full_name, role')
          .eq('id', session.user.id)
          .single();

        if (!cancelled && profile) {
          setAuthState({
            name: profile.full_name || name,
            email: session.user.email || '',
            role: profile.role,
          });
        }
      } catch (_) {
        // DB unreachable — user stays logged in, just no role-based features
      }
    }

    refresh();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        refresh();
      } else {
        setAuthState('loggedOut');
      }
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  const navigateTo = (url: string) => {
    if (onNavigate) onNavigate();
    setTimeout(() => router.push(url), 10);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setAuthState('loggedOut');
    setIsOpen(false);
    navigateTo('/');
  };

  // Loading state
  if (authState === 'loading') {
    return <span className="opacity-0 pointer-events-none select-none" aria-hidden>...</span>;
  }

  // Not logged in → Login button
  if (authState === 'loggedOut') {
    return (
      <button
        type="button"
        className={loginClassName}
        onClick={() => navigateTo(`/login?next=${encodeURIComponent(pathname)}`)}
      >
        Login
      </button>
    );
  }

  // Logged in → User Avatar with initials
  const words = authState.name.trim().split(/\s+/);
  const initials = (
    words.length >= 2
      ? `${words[0][0]}${words[1][0]}`
      : authState.name.slice(0, 2)
  ).toUpperCase();

  const adminEmails = [
    'repukeel@gmail.com',
    'admin@repukeel.com',
    (process.env.NEXT_PUBLIC_ADMIN_EMAIL || '').toLowerCase().trim(),
  ].filter(Boolean);

  const isRoleAdmin = authState.role === 'admin' || authState.role === 'super_admin';
  const isEmailAdmin = authState.email ? adminEmails.includes(authState.email.toLowerCase().trim()) : false;
  const isAdmin = isRoleAdmin || isEmailAdmin;

  return (
    <div className={`flex items-center gap-2 ${menuClassName}`}>

      {/* Avatar & Dropdown — Dashboard and Admin Portal live here on desktop */}
      <div className="relative">
        <button
          type="button"
          className="w-10 h-10 rounded-full bg-[#d4af37] text-[#0a192f] font-[800] text-[16px] flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer shrink-0"
          aria-label="Open account menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls="account-dropdown"
          onClick={() => setIsOpen((v) => !v)}
        >
          {initials}
        </button>

        {isOpen && (
          <>
            <button
              type="button"
              className="fixed inset-0 w-full h-full cursor-default z-[90]"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            />
            <div
              id="account-dropdown"
              role="menu"
              className="absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-[100]"
            >
              <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                <p className="text-[14px] font-[700] text-[#0a192f] truncate">{authState.name}</p>
                <p className="text-[12px] text-gray-500 truncate">{authState.email}</p>
              </div>
              <div className="p-2">
                {/* Dashboard — always visible in dropdown for all logged-in users */}
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => { setIsOpen(false); navigateTo('/dashboard'); }}
                  className="w-full text-left px-3 py-2.5 text-[14px] font-[600] text-[#0a192f] rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 text-[#d4af37]"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                  Dashboard
                </button>
                {/* Admin Portal — only for admins, uses existing isAdmin check */}
                {isAdmin && (
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => { setIsOpen(false); navigateTo('/dashboard/admin'); }}
                    className="w-full text-left px-3 py-2.5 text-[14px] font-[600] text-white bg-[#0c1940] rounded-lg hover:bg-[#122353] transition-colors flex items-center gap-2 mt-1"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-4 h-4 shrink-0"><path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z"/></svg>
                    Admin Portal
                  </button>
                )}
                <div className="h-px bg-gray-100 my-2" />
                <button
                  type="button"
                  role="menuitem"
                  onClick={logout}
                  className="w-full text-left px-3 py-2.5 text-[14px] font-[600] text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                  Sign out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
