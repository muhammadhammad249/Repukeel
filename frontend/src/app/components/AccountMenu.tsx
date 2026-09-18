'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type StoredUser = { firstName?: string; lastName?: string; email?: string };

function getAuthToken(): boolean {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('authToken');
}

function getStoredUser(): StoredUser | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = localStorage.getItem('currentUser');
    return value ? JSON.parse(value) as StoredUser : null;
  } catch {
    return null;
  }
}

export default function AccountMenu({ loginClassName, menuClassName }: { loginClassName: string; menuClassName: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState<StoredUser | null>(null);
  const [hasToken, setHasToken] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Re-read on every route change (covers post-login redirect)
  useEffect(() => {
    setIsMounted(true);
    setUser(getStoredUser());
    setHasToken(getAuthToken());
  }, [pathname]);

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    document.cookie = 'authToken=; Path=/; Max-Age=0; SameSite=Lax';
    setUser(null);
    setHasToken(false);
    setIsOpen(false);
    router.push('/login');
  };

  // ── Block render mismatch: server always renders this ────────────────
  if (!isMounted) {
    return <Link href={`/login?next=${encodeURIComponent(pathname)}`} className={`${loginClassName} opacity-0 pointer-events-none`}>Login</Link>;
  }

  // ── Not logged in at all (no token) → Login link ────────────────
  if (!user && !hasToken) {
    return <Link href={`/login?next=${encodeURIComponent(pathname)}`} className={loginClassName}>Login</Link>;
  }

  // ── Logged in → Avatar button ───────────────────────────────────
  const initials =
    `${user?.firstName?.[0] || ''}${user?.lastName?.[0] || ''}`.toUpperCase() ||
    user?.email?.[0]?.toUpperCase() ||
    'U';
  const name =
    [user?.firstName, user?.lastName].filter(Boolean).join(' ') ||
    user?.email ||
    'Account';

  return (
    <div className={`relative ${menuClassName}`}>
      <button
        type="button"
        className="w-[40px] h-[40px] rounded-full bg-[var(--gold)] text-[var(--bg-navy)] font-[800] text-[16px] flex items-center justify-center shadow-md transition-transform hover:scale-105"
        aria-label="Open account menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {initials}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 w-full h-full cursor-default z-[90]"
            aria-label="Close account menu"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[var(--border-light)] overflow-hidden z-[100]">
            <div className="px-4 py-3 border-b border-[var(--border-light)] bg-gray-50">
              <p className="text-[14px] font-[700] text-[var(--text-heading)] truncate">{name}</p>
              <p className="text-[12px] font-[500] text-[var(--text-body)] truncate">{user?.email || 'User'}</p>
            </div>
            <div className="p-2" role="menu">
              <button
                type="button"
                role="menuitem"
                onClick={() => { setIsOpen(false); router.push('/dashboard'); }}
                className="w-full text-left px-3 py-2 text-[14px] font-[600] text-[var(--text-heading)] rounded-lg hover:bg-gray-100 transition-colors"
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
