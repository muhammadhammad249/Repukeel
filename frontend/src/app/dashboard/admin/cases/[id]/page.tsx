'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { STATUS_LABELS } from '@/lib/auth';

const ALL_STATUSES = [
  'submitted', 'under_review', 'quote_sent', 'awaiting_payment',
  'payment_confirmed', 'in_progress', 'awaiting_client_action', 'completed', 'closed'
];

export default function AdminCaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [caseData, setCaseData] = useState<any>(null);
  const [client, setClient] = useState<any>(null);
  const [updates, setUpdates] = useState<any[]>([]);
  
  const [loading, setLoading] = useState(true);

  // Update Status Form
  const [newStatus, setNewStatus] = useState('');
  const [updateNote, setUpdateNote] = useState('');
  const [internalNote, setInternalNote] = useState('');
  const [notifyClient, setNotifyClient] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    async function load() {
      const { data: c } = await supabase
        .from('cases')
        .select('*, profiles!cases_client_id_fkey(full_name, email, whatsapp)')
        .eq('id', id)
        .single();
      
      if (!c) {
        setLoading(false);
        return;
      }

      setCaseData(c);
      setClient(c.profiles);
      setNewStatus(c.status);

      const { data: u } = await supabase
        .from('case_updates')
        .select('*, profiles(full_name)')
        .eq('case_id', id)
        .order('created_at', { ascending: true });
        
      setUpdates(u || []);
      setLoading(false);
    }
    if (id) load();
  }, [id]);

  const handleUpdateStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStatus) return;

    setIsUpdating(true);
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // Insert update
    const { error: updateError } = await supabase.from('case_updates').insert({
      case_id: id,
      admin_id: user.id,
      status: newStatus,
      note: updateNote.trim() || null,
      internal_note: internalNote.trim() || null,
      notify_client: notifyClient
    });

    if (!updateError) {
      // Update case status
      await supabase.from('cases').update({ status: newStatus, updated_at: new Date().toISOString() }).eq('id', id);

      // Refresh updates
      const { data: u } = await supabase
        .from('case_updates')
        .select('*, profiles(full_name)')
        .eq('case_id', id)
        .order('created_at', { ascending: true });
        
      setUpdates(u || []);
      setCaseData({ ...caseData, status: newStatus });
      setUpdateNote('');
      setInternalNote('');
    }
    
    setIsUpdating(false);
  };

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

  if (!caseData) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">Case not found.</p>
        <Link href="/dashboard/admin/cases" className="text-[#d4af37] font-[700] mt-4 inline-block">← Back to Cases</Link>
      </div>
    );
  }

  const currentStatusInfo = STATUS_LABELS[caseData.status] || { label: caseData.status, color: 'bg-gray-100 text-gray-700' };

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
      
      {/* Left Column: Details & Timeline */}
      <div className="flex-1 flex flex-col gap-6">
        
        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/dashboard/admin/cases" className="text-gray-400 hover:text-gray-600 text-[13px] font-[600]">← All Cases</Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-[24px] font-[800] text-[#0a192f] flex items-center gap-3">
                {caseData.case_id}
                <span className={`px-2.5 py-1 rounded-full text-[12px] font-[700] ${currentStatusInfo.color}`}>
                  {currentStatusInfo.label}
                </span>
              </h1>
              <p className="text-gray-500 text-[14px] mt-1">{caseData.service_type}</p>
            </div>
            <div className="text-right">
              <p className="text-[13px] font-[600] text-[#0a192f]">{client?.full_name}</p>
              <p className="text-[12px] text-gray-500">{client?.email}</p>
              {client?.whatsapp && <p className="text-[12px] text-[#d4af37]">WhatsApp: {client.whatsapp}</p>}
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-[14px] font-[800] text-[#0a192f] mb-4">Case Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[11px] font-[700] text-gray-400 uppercase tracking-wider mb-1">Platform</p>
              <p className="text-[14px] font-[600] text-[#0a192f]">{caseData.platform || '—'}</p>
            </div>
            <div>
              <p className="text-[11px] font-[700] text-gray-400 uppercase tracking-wider mb-1">Urgency</p>
              <p className={`text-[14px] font-[700] capitalize ${
                caseData.urgency === 'emergency' ? 'text-red-600' : caseData.urgency === 'urgent' ? 'text-orange-500' : 'text-green-600'
              }`}>
                {caseData.urgency || 'normal'}
              </p>
            </div>
          </div>
          {caseData.description && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-[11px] font-[700] text-gray-400 uppercase tracking-wider mb-2">Description</p>
              <p className="text-[14px] text-gray-600 leading-relaxed whitespace-pre-wrap">{caseData.description}</p>
            </div>
          )}
          {caseData.urls && caseData.urls.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-[11px] font-[700] text-gray-400 uppercase tracking-wider mb-2">Submitted URLs</p>
              <div className="flex flex-col gap-1">
                {caseData.urls.map((url: string, i: number) => (
                  <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#d4af37] hover:underline break-all font-mono">{url}</a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-[14px] font-[800] text-[#0a192f] mb-6">Activity Timeline</h3>
          <div className="flex flex-col">
            {updates.map((u, i) => {
              const si = STATUS_LABELS[u.status] || { label: u.status, color: 'bg-gray-100 text-gray-700' };
              return (
                <div key={u.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${i === updates.length - 1 ? 'bg-[#d4af37]' : 'bg-gray-300'}`}></div>
                    {i < updates.length - 1 && <div className="w-px flex-1 bg-gray-200 my-1"></div>}
                  </div>
                  <div className="pb-6 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-[700] ${si.color}`}>{si.label}</span>
                      <span className="text-[12px] text-gray-400">{new Date(u.created_at).toLocaleString()}</span>
                      {u.profiles?.full_name && <span className="text-[11px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded">by {u.profiles.full_name}</span>}
                    </div>
                    {u.note && (
                      <div className="mt-2 text-[14px] text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <span className="text-[11px] font-[700] text-gray-400 uppercase tracking-wider block mb-1">Message to client:</span>
                        {u.note}
                      </div>
                    )}
                    {u.internal_note && (
                      <div className="mt-2 text-[14px] text-purple-700 bg-purple-50 p-3 rounded-xl border border-purple-100">
                        <span className="text-[11px] font-[700] text-purple-400 uppercase tracking-wider block mb-1">Internal Note (Admin only):</span>
                        {u.internal_note}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Right Column: Update Status Form */}
      <div className="w-full lg:w-[380px] flex flex-col gap-6">
        <form onSubmit={handleUpdateStatus} className="bg-white rounded-2xl border border-[#d4af37]/30 shadow-md p-6 sticky top-[92px]">
          <h3 className="text-[15px] font-[800] text-[#0a192f] mb-4 flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[#d4af37]"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Update Case Status
          </h3>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-[12px] font-[700] text-gray-600 mb-1.5">New Status</label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#d4af37] font-[600]"
                required
              >
                {ALL_STATUSES.map((s) => (
                  <option key={s} value={s}>{STATUS_LABELS[s]?.label || s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[12px] font-[700] text-gray-600 mb-1.5">Client Update Note <span className="text-gray-400 font-normal">(visible to client)</span></label>
              <textarea
                value={updateNote}
                onChange={(e) => setUpdateNote(e.target.value)}
                rows={3}
                placeholder="e.g. Removal request filed with Google. Expected response within 7 days."
                className="w-full px-3 py-2 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#d4af37] resize-none"
              />
            </div>

            <div>
              <label className="block text-[12px] font-[700] text-gray-600 mb-1.5">Internal Note <span className="text-gray-400 font-normal">(admins only)</span></label>
              <textarea
                value={internalNote}
                onChange={(e) => setInternalNote(e.target.value)}
                rows={2}
                placeholder="Private note for the team..."
                className="w-full px-3 py-2 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] outline-none focus:border-purple-400 resize-none"
              />
            </div>

            <label className="flex items-center gap-2 cursor-pointer mt-1">
              <input
                type="checkbox"
                checked={notifyClient}
                onChange={(e) => setNotifyClient(e.target.checked)}
                className="w-4 h-4 accent-[#d4af37]"
              />
              <span className="text-[13px] font-[600] text-gray-700">Notify client by email</span>
            </label>

            <button
              type="submit"
              disabled={isUpdating}
              className="w-full mt-2 h-[44px] bg-[#d4af37] hover:bg-[#c19b2e] text-white font-[700] text-[14px] rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isUpdating ? 'Saving...' : 'Save Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
