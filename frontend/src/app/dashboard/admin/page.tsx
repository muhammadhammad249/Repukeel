'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({ contacts: 0, analysis: 0, cases: 0 });

  useEffect(() => {
    async function loadStats() {
      const { count: casesCount } = await supabase
        .from('cases')
        .select('*', { count: 'exact', head: true });

      setStats({
        contacts: 0,
        analysis: 0,
        cases: casesCount || 0
      });
    }
    loadStats();
    
    // Subscribe to realtime changes
    const channel = supabase.channel('schema-db-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'cases' }, () => {
        loadStats();
      })
      .subscribe();
      
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-32 min-h-[75vh] flex flex-col">
      <h1 className="text-4xl font-bold mb-3">Admin Dashboard</h1>
      <p className="text-slate-500 mb-12 text-lg">Manage all submissions, blog posts, and case studies.</p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <p className="text-4xl font-bold text-blue-600 mb-2">{stats.contacts}</p>
          <p className="text-slate-600 font-medium text-lg">New Contacts</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <p className="text-4xl font-bold text-blue-600 mb-2">{stats.analysis}</p>
          <p className="text-slate-600 font-medium text-lg">Analysis Requests</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <p className="text-4xl font-bold text-blue-600 mb-2">{stats.cases}</p>
          <p className="text-slate-600 font-medium text-lg">Active Cases</p>
        </div>
      </div>
      
      <div className="flex gap-4 mb-20">
        <Link href="/dashboard/admin/submissions" className="bg-[#d4af37] hover:bg-[#c19b2e] text-white px-8 py-3.5 rounded-xl font-bold transition-colors shadow-lg shadow-[#d4af37]/20">
          View Submissions
        </Link>
      </div>
    </div>
  );
}
