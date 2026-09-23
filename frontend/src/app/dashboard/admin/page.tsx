'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { STATUS_LABELS } from '@/lib/auth';

export default function AdminOverviewPage() {
  const [stats, setStats] = useState<Record<string, number>>({});
  const [recentCases, setRecentCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: cases } = await supabase
        .from('cases')
        .select('id, case_id, service_type, status, urgency, created_at, profiles(full_name, email)')
        .order('created_at', { ascending: false });

      const allCases = cases || [];

      // Count by status
      const counts: Record<string, number> = {};
      allCases.forEach((c) => {
        counts[c.status] = (counts[c.status] || 0) + 1;
      });
      setStats(counts);
      setRecentCases(allCases.slice(0, 10));
      setLoading(false);
    }
    load();
  }, []);

  const statCards = [
    { label: 'New Inquiries', key: 'submitted', icon: '🆕', color: 'bg-blue-50 border-blue-100', valueColor: 'text-blue-700' },
    { label: 'Under Review', key: 'under_review', icon: '🔍', color: 'bg-purple-50 border-purple-100', valueColor: 'text-purple-700' },
    { label: 'Awaiting Payment', key: 'awaiting_payment', icon: '💰', color: 'bg-yellow-50 border-yellow-100', valueColor: 'text-yellow-700' },
    { label: 'In Progress', key: 'in_progress', icon: '⚙️', color: 'bg-indigo-50 border-indigo-100', valueColor: 'text-indigo-700' },
    { label: 'Awaiting Client', key: 'awaiting_client_action', icon: '🕐', color: 'bg-orange-50 border-orange-100', valueColor: 'text-orange-700' },
    { label: 'Completed', key: 'completed', icon: '✅', color: 'bg-green-50 border-green-100', valueColor: 'text-green-700' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <svg className="animate-spin h-8 w-8 text-[#d4af37]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-[26px] font-[800] text-[#0a192f]">Admin Overview</h1>
        <p className="text-gray-500 text-[15px] mt-1">All cases and activity across the platform.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {statCards.map((s) => (
          <Link key={s.key} href={`/dashboard/admin/cases?status=${s.key}`} className={`bg-white border rounded-2xl p-5 hover:shadow-md transition-shadow ${s.color}`}>
            <div className="text-[22px] mb-3">{s.icon}</div>
            <div className={`text-[28px] font-[900] mb-1 ${s.valueColor}`}>{stats[s.key] || 0}</div>
            <div className="text-[12px] text-gray-500 font-[600]">{s.label}</div>
          </Link>
        ))}
      </div>

      {/* Recent Cases */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-[17px] font-[800] text-[#0a192f]">Recent Cases</h2>
          <Link href="/dashboard/admin/cases" className="text-[13px] font-[700] text-[#d4af37] hover:underline">View All</Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="py-3 px-6 text-[12px] font-[700] text-gray-400 uppercase tracking-wider">Case ID</th>
                <th className="py-3 px-6 text-[12px] font-[700] text-gray-400 uppercase tracking-wider">Client</th>
                <th className="py-3 px-6 text-[12px] font-[700] text-gray-400 uppercase tracking-wider">Service</th>
                <th className="py-3 px-6 text-[12px] font-[700] text-gray-400 uppercase tracking-wider">Urgency</th>
                <th className="py-3 px-6 text-[12px] font-[700] text-gray-400 uppercase tracking-wider">Status</th>
                <th className="py-3 px-6 text-[12px] font-[700] text-gray-400 uppercase tracking-wider">Date</th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {recentCases.map((c) => {
                const statusInfo = STATUS_LABELS[c.status] || { label: c.status, color: 'bg-gray-100 text-gray-700' };
                const client = (c.profiles as any);
                return (
                  <tr key={c.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-[14px] font-[800] text-[#0a192f]">{c.case_id}</td>
                    <td className="py-4 px-6">
                      <p className="text-[14px] font-[600] text-gray-800">{client?.full_name || '—'}</p>
                      <p className="text-[12px] text-gray-400">{client?.email || ''}</p>
                    </td>
                    <td className="py-4 px-6 text-[13px] text-gray-600 max-w-[160px] truncate">{c.service_type}</td>
                    <td className="py-4 px-6">
                      <span className={`text-[12px] font-[700] capitalize ${
                        c.urgency === 'emergency' ? 'text-red-600' : c.urgency === 'urgent' ? 'text-orange-500' : 'text-green-600'
                      }`}>
                        {c.urgency || 'normal'}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-[700] ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[13px] text-gray-400">{new Date(c.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
                    <td className="py-4 px-6">
                      <Link href={`/dashboard/admin/cases/${c.id}`} className="text-[13px] font-[700] text-[#d4af37] hover:underline">Open →</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
