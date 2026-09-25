/* eslint-disable */
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { STATUS_LABELS } from '@/lib/auth';

const ALL_STATUSES = ['All', 'submitted', 'under_review', 'quote_sent', 'awaiting_payment', 'payment_confirmed', 'in_progress', 'awaiting_client_action', 'completed', 'closed'];

export default function AdminAllCasesPage() {
  const searchParams = useSearchParams();
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState(searchParams.get('status') || 'All');

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('cases')
        .select('*, profiles(full_name, email)')
        .order('created_at', { ascending: false });
      setCases(data || []);
      setLoading(false);
    }
    load();
  }, []);

  const filtered = cases.filter((c) => {
    const matchStatus = statusFilter === 'All' || c.status === statusFilter;
    const client = c.profiles as any;
    const matchSearch = !search || 
      c.case_id?.toLowerCase().includes(search.toLowerCase()) ||
      client?.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      client?.email?.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[26px] font-[800] text-[#0a192f]">All Cases</h1>
          <p className="text-gray-500 text-[15px] mt-1">{filtered.length} cases</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Case ID, name or email..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#d4af37] transition-all"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-[14px] text-gray-700 outline-none focus:border-[#d4af37] transition-all"
        >
          {ALL_STATUSES.map((s) => (
            <option key={s} value={s}>{s === 'All' ? 'All Statuses' : (STATUS_LABELS[s]?.label || s)}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-40">
          <svg className="animate-spin h-8 w-8 text-[#d4af37]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="py-3 px-6 text-[12px] font-[700] text-gray-400 uppercase tracking-wider">Case ID</th>
                  <th className="py-3 px-6 text-[12px] font-[700] text-gray-400 uppercase tracking-wider">Client</th>
                  <th className="py-3 px-6 text-[12px] font-[700] text-gray-400 uppercase tracking-wider">Service</th>
                  <th className="py-3 px-6 text-[12px] font-[700] text-gray-400 uppercase tracking-wider">Urgency</th>
                  <th className="py-3 px-6 text-[12px] font-[700] text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="py-3 px-6 text-[12px] font-[700] text-gray-400 uppercase tracking-wider">Filed</th>
                  <th className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={7} className="py-16 text-center text-gray-400 text-[14px]">No cases found.</td></tr>
                ) : filtered.map((c) => {
                  const statusInfo = STATUS_LABELS[c.status] || { label: c.status, color: 'bg-gray-100 text-gray-700' };
                  const client = c.profiles as any;
                  return (
                    <tr key={c.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 text-[14px] font-[800] text-[#0a192f]">{c.case_id}</td>
                      <td className="py-4 px-6">
                        <p className="text-[14px] font-[600] text-gray-800">{client?.full_name || '—'}</p>
                        <p className="text-[12px] text-gray-400">{client?.email || ''}</p>
                      </td>
                      <td className="py-4 px-6 text-[13px] text-gray-600 max-w-[150px] truncate">{c.service_type}</td>
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
                      <td className="py-4 px-6 text-[13px] text-gray-400">{new Date(c.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                      <td className="py-4 px-6">
                        <Link href={`/dashboard/admin/cases/${c.id}`} className="text-[13px] font-[700] text-[#d4af37] hover:underline">Manage →</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
