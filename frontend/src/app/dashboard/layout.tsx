/* eslint-disable */
'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { signOut } from '@/lib/auth';

interface Profile {
  id: string;
  full_name: string;
  email: string;
  role?: string;
}

const navItems = [
  { label: 'Overview', icon: '⬛', path: '/dashboard' },
  { label: 'New Inquiry', icon: '➕', path: '/dashboard/new-inquiry' },
  { label: 'My Cases', icon: '📁', path: '/dashboard/cases' },
  { label: 'Messages', icon: '💬', path: '/dashboard/messages' },
  { label: 'Invoices & Payments', icon: '💳', path: '/dashboard/invoices' },
  { label: 'Files', icon: '🗂️', path: '/dashboard/files' },
  { label: 'Profile & Security', icon: '👤', path: '/dashboard/profile' },
  { label: 'Help', icon: '❓', path: '/dashboard/help' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      // Use getSession() which reads from localStorage — works even if DB is slow/failing
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.user) {
        // No session at all → definitely not logged in → go to login
        router.push(`/login?next=${encodeURIComponent(pathname)}`);
        return;
      }

      // User IS authenticated. Build a basic profile from session data
      const baseProfile: Profile = {
        id: session.user.id,
        full_name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
        email: session.user.email || '',
      };

      // Try to enrich with DB profile (role etc.) — but don't redirect if it fails
      try {
        const { data: dbProfile } = await supabase
          .from('profiles')
          .select('full_name, role')
          .eq('id', session.user.id)
          .single();

        if (dbProfile) {
          baseProfile.full_name = dbProfile.full_name || baseProfile.full_name;
          baseProfile.role = dbProfile.role;
        }
      } catch (_) {
        // DB unreachable — still show dashboard, just without role
      }

      setProfile(baseProfile);
      setLoading(false);
    }

    checkAuth();

    // Also listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        router.push('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin h-10 w-10 text-[#d4af37]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-500 text-sm">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6f9] flex">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-[260px] bg-[#0c1940] flex flex-col z-50 transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="h-[68px] flex items-center px-6 border-b border-white/10">
          <Link href="/">
            <Image src="/logo.png" alt="RepuKeel" width={130} height={36} className="h-[32px] w-auto" style={{ filter: 'brightness(10)' }} />
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          {navItems.map((item) => {
            const active = pathname === item.path || (item.path !== '/dashboard' && pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-[14px] font-[600] transition-all ${
                  active
                    ? 'bg-[#d4af37] text-white shadow-md shadow-[#d4af37]/20'
                    : 'text-blue-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-[18px]">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}

          {/* Admin Panel link — shown if role is admin or super_admin */}
          {(profile?.role === 'admin' || profile?.role === 'super_admin') && (
            <Link
              href="/dashboard/admin"
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-[14px] font-[600] transition-all mt-4 border border-purple-500/30 ${
                pathname.startsWith('/dashboard/admin')
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-300 hover:bg-purple-600/20 hover:text-purple-200'
              }`}
            >
              <span className="text-[18px]">🛡️</span>
              Admin Panel
            </Link>
          )}
        </nav>

        {/* User at bottom */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#d4af37] flex items-center justify-center text-white font-[700] text-[15px] flex-shrink-0">
              {profile?.full_name?.charAt(0)?.toUpperCase() || 'C'}
            </div>
            <div className="min-w-0">
              <p className="text-white text-[13px] font-[700] truncate">{profile?.full_name || 'Client'}</p>
              <p className="text-blue-300 text-[11px] truncate">{profile?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-[13px] text-red-400 hover:text-red-300 font-[600] py-2 px-3 rounded-lg hover:bg-white/5 transition-colors text-left"
          >
            🚪 Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 h-[68px] flex items-center px-6 gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>

          <div className="flex-1">
            <h1 className="text-[15px] font-[700] text-[#0a192f]">Client Portal</h1>
          </div>

          <Link
            href="/dashboard/new-inquiry"
            className="hidden sm:flex items-center gap-2 bg-[#d4af37] hover:bg-[#c19b2e] text-white text-[13px] font-[700] px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>
            New Inquiry
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0c1940] flex items-center justify-center text-white font-[700] text-[14px]">
              {profile?.full_name?.charAt(0)?.toUpperCase() || 'C'}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
