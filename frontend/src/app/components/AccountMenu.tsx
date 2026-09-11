'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type StoredUser = { firstName?: string; lastName?: string; email?: string };

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
  const [user, setUser] = useState<StoredUser | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setUser(getStoredUser()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (!user) return <a href="/login" className={loginClassName}>Login</a>;

  const initials = `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() || user.email?.[0]?.toUpperCase() || 'U';
  const name = [user.firstName, user.lastName].filter(Boolean).join(' ') || user.email || 'Account';
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    document.cookie = 'authToken=; Path=/; Max-Age=0; SameSite=Lax';
    setUser(null);
    setIsOpen(false);
    router.push('/login');
  };

  return <div className={menuClassName}>
    <button type="button" className="account-avatar" aria-label="Open account menu" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>{initials}</button>
    {isOpen && <><button type="button" className="account-menu-overlay" aria-label="Close account menu" onClick={() => setIsOpen(false)} />
      <div className="account-dropdown" role="menu"><p className="account-name">{name}</p><button type="button" role="menuitem" onClick={logout}>Logout</button></div></>}
  </div>;
}
