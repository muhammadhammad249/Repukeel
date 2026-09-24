'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';

type StoredUser = { name?: string; email?: string };

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

  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState<StoredUser | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const subscriptionRef = useRef<any>(null);

  async function loadUser() {
    try {
      // getUser() makes a real network request - always accurate
      const { data: { user: authUser }, error } = await supabase.auth.getUser();
      if (error || !authUser) {
        setUser(null);
        return;
      }

      // Try to get profile name
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, role')
        .eq('id', authUser.id)
        .single();

      setUser({
        name: profile?.full_name || authUser.user_metadata?.full_name || authUser.email || 'User',
        email: authUser.email,
      });
    } catch {
      setUser(null);
    }
  }

  useEffect(() => {
    setIsMounted(true);

    // Load user immediately on mount
    loadUser();

    // Subscribe to auth state changes (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        loadUser();
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });

    subscriptionRef.current = subscription;

    return () => {
      subscription.unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateTo = (url: string) => {
    if (onNavigate) onNavigate();
    setTimeout(() => router.push(url), 10);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsOpen(false);
    navigateTo('/');
  };

  // While still hydrating — show invisible placeholder to avoid layout shift
  if (!isMounted) {
    return (
      <span className={`${loginClassName} opacity-0 pointer-events-none select-none`}>Login</span>
    );
  }

  // Not logged in → Login button
  if (!user) {
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

  // Logged in → Avatar (initials)
  const words = (user.name || user.email || 'U').split(' ');
  const initials = (
    words.length >= 2
      ? `${words[0][0]}${words[1][0]}`
      : words[0].slice(0, 2)
  ).toUpperCase();

  return (
    <div className={`relative ${menuClassName}`}>
      <button
        type="button"
        className="w-[40px] h-[40px] rounded-full bg-[var(--gold)] text-[var(--bg-navy)] font-[800] text-[16px] flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer"
        aria-label="Open account menu"
        aria-expanded={isOpen}
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
          <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-[100]">
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
              <p className="text-[14px] font-[700] text-[#0a192f] truncate">{user.name}</p>
              <p className="text-[12px] text-gray-500 truncate">{user.email}</p>
            </div>
            <div className="p-2" role="menu">
              <button
                type="button"
                role="menuitem"
                onClick={() => { setIsOpen(false); navigateTo('/dashboard'); }}
                className="w-full text-left px-3 py-2 text-[14px] font-[600] text-[#0a192f] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Dashboard
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={logout}
                className="w-full text-left px-3 py-2 mt-1 text-[14px] font-[600] text-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
