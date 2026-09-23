'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getCurrentProfile, UserProfile, signOut } from '@/lib/auth';

const adminNavItems = [
  { label: 'Overview', icon: '📊', path: '/dashboard/admin' },
  { label: 'All Cases', icon: '📁', path: '/dashboard/admin/cases' },
  { label: 'Clients', icon: '👥', path: '/dashboard/admin/clients' },
  { label: 'Payments', icon: '💰', path: '/dashboard/admin/payments' },
  { label: 'Messages', icon: '💬', path: '/dashboard/admin/messages' },
  { label: 'Activity Log', icon: '📋', path: '/dashboard/admin/activity' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const p = await getCurrentProfile();
      if (!p) {
        router.push('/login');
        return;
      }
      // Non-admins get 404-like experience (redirect to home, don't reveal admin exists)
      if (p.role !== 'admin' && p.role !== 'super_admin') {
        router.push('/404');
        return;
      }
      setProfile(p);
      setLoading(false);
    }
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c1940]">
        <svg className="animate-spin h-10 w-10 text-[#d4af37]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6f9] flex">

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Admin Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-[260px] bg-[#080f2a] flex flex-col z-50 transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-[68px] flex items-center px-6 border-b border-white/10 gap-3">
          <Link href="/">
            <Image src="/logo.png" alt="RepuKeel" width={120} height={32} className="h-[28px] w-auto" style={{ filter: 'brightness(10)' }} />
          </Link>
          <span className="text-[10px] font-[800] bg-[#d4af37] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Admin</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3">
          {adminNavItems.map((item) => {
            const active = pathname === item.path || (item.path !== '/dashboard/admin' && pathname.startsWith(item.path));
            // Super admin only: activity log
            if (item.path === '/dashboard/admin/activity' && profile?.role !== 'super_admin') return null;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-[14px] font-[600] transition-all ${
                  active
                    ? 'bg-[#d4af37] text-white shadow-md shadow-[#d4af37]/20'
                    : 'text-blue-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-[18px]">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#d4af37] flex items-center justify-center text-white font-[700] text-[15px] flex-shrink-0">
              {profile?.full_name?.charAt(0)?.toUpperCase() || 'A'}
            </div>
            <div className="min-w-0">
              <p className="text-white text-[13px] font-[700] truncate">{profile?.full_name}</p>
              <p className="text-[#d4af37] text-[11px] capitalize">{profile?.role?.replace('_', ' ')}</p>
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
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 h-[68px] flex items-center px-6 gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
          <div className="flex-1">
            <h1 className="text-[15px] font-[700] text-[#0a192f]">Admin Panel</h1>
          </div>
          <Link
            href="/dashboard/admin/cases"
            className="hidden sm:flex items-center gap-2 bg-[#0c1940] hover:bg-[#0c1940]/80 text-white text-[13px] font-[700] px-4 py-2 rounded-lg transition-colors"
          >
            All Cases
          </Link>
        </header>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
