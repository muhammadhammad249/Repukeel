/* eslint-disable */
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

  // Tabs state
  const [activeTab, setActiveTab] = useState('timeline');
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [sendingMsg, setSendingMsg] = useState(false);

  // Invoice state
  const [invoice, setInvoice] = useState<any>(null);
  const [isSavingInvoice, setIsSavingInvoice] = useState(false);
  const [invoiceForm, setInvoiceForm] = useState({
    amount: '',
    status: 'pending',
    notes: '',
    payment_method: '',
    payment_reference: ''
  });

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
        
      const { data: m } = await supabase
        .from('messages')
        .select('*, profiles(full_name, role)')
        .eq('case_id', id)
        .order('created_at', { ascending: true });

      const { data: inv } = await supabase
        .from('invoices')
        .select('*')
        .eq('case_id', id)
        .maybeSingle();

      setUpdates(u || []);
      setMessages(m || []);
      setInvoice(inv);
      if (inv) {
        setInvoiceForm({
          amount: inv.amount,
          status: inv.status,
          notes: inv.notes || '',
          payment_method: inv.payment_method || '',
          payment_reference: inv.payment_reference || ''
        });
      }
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

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;
    setSendingMsg(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from('messages').insert({
      case_id: id,
      sender_id: user.id,
      message: newMessage.trim(),
    });

    const { data: m } = await supabase.from('messages').select('*, profiles(full_name, role)').eq('case_id', id).order('created_at', { ascending: true });
    setMessages(m || []);
    setNewMessage('');
    setSendingMsg(false);
  };

  const handleSaveInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingInvoice(true);
    if (invoice) {
      await supabase.from('invoices').update({
        amount: invoiceForm.amount,
        status: invoiceForm.status,
        notes: invoiceForm.notes,
        updated_at: new Date().toISOString()
      }).eq('id', invoice.id);
    } else {
      await supabase.from('invoices').insert({
        case_id: id,
        amount: invoiceForm.amount,
        status: invoiceForm.status,
        notes: invoiceForm.notes
      });
    }
    const { data: inv } = await supabase.from('invoices').select('*').eq('case_id', id).maybeSingle();
    setInvoice(inv);
    setIsSavingInvoice(false);
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
    <div className="max-w-6xl mx-auto">

      {/* Back + Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <Link href="/dashboard/admin/cases" className="text-gray-400 hover:text-gray-600 text-[13px] font-[600] mb-4 inline-block">← All Cases</Link>
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

      <div className="flex flex-col lg:flex-row gap-6">

        {/* Left Column: Details + Tabs */}
        <div className="flex-1 flex flex-col gap-6">

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

          {/* Tabs */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="border-b border-gray-100 flex overflow-x-auto">
              {['timeline', 'messages', 'invoice'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-[13px] font-[700] whitespace-nowrap transition-all border-b-2 capitalize ${
                    activeTab === tab
                      ? 'border-[#d4af37] text-[#d4af37]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'timeline' ? '📋 Timeline' : tab === 'messages' ? `💬 Messages (${messages.length})` : '💳 Invoice'}
                </button>
              ))}
            </div>

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <div className="p-6">
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
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="flex flex-col h-[500px]">
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-3">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-400 text-[14px]">No messages yet. Send a message to the client.</p>
                </div>
              ) : (
                messages.map((m) => {
                  const isAdmin = m.profiles?.role === 'admin' || m.profiles?.role === 'super_admin';
                  return (
                    <div key={m.id} className={`flex ${isAdmin ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                        isAdmin ? 'bg-[#0c1940] text-white' : 'bg-gray-100 text-gray-800'
                      }`}>
                        <p className={`text-[11px] font-[700] mb-1 ${isAdmin ? 'text-blue-200' : 'text-gray-500'}`}>
                          {isAdmin ? 'You (Admin)' : client?.full_name || 'Client'}
                        </p>
                        <p className="text-[14px] leading-relaxed">{m.message}</p>
                        <p className={`text-[11px] mt-1 ${isAdmin ? 'text-blue-300' : 'text-gray-400'}`}>
                          {new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="border-t border-gray-100 p-4 flex gap-3 bg-gray-50">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }}
                placeholder="Type a message to the client..."
                className="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#0c1940] focus:ring-1 focus:ring-[#0c1940] transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={sendingMsg || !newMessage.trim()}
                className="bg-[#0c1940] hover:bg-[#0c1940]/90 text-white font-[700] px-5 py-2.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sendingMsg ? '...' : 'Send'}
              </button>
            </div>
          </div>
        )}

        {/* Invoice Tab */}
        {activeTab === 'invoice' && (
          <div className="p-6">
            <h3 className="text-[14px] font-[800] text-[#0a192f] mb-6">Manage Invoice</h3>
            
            <form onSubmit={handleSaveInvoice} className="flex flex-col gap-4 max-w-lg">
              <div>
                <label className="block text-[12px] font-[700] text-gray-600 mb-1.5">Amount (USD)</label>
                <input
                  type="number"
                  value={invoiceForm.amount}
                  onChange={(e) => setInvoiceForm({...invoiceForm, amount: e.target.value})}
                  className="w-full px-4 py-2.5 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#d4af37]"
                  placeholder="0.00"
                  step="0.01"
                  required
                />
              </div>
              
              <div>
                <label className="block text-[12px] font-[700] text-gray-600 mb-1.5">Status</label>
                <select
                  value={invoiceForm.status}
                  onChange={(e) => setInvoiceForm({...invoiceForm, status: e.target.value})}
                  className="w-full px-4 py-2.5 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#d4af37]"
                >
                  <option value="pending">Pending (Quote Sent)</option>
                  <option value="submitted">Submitted (Client Paid)</option>
                  <option value="confirmed">Confirmed (Payment Received)</option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-[700] text-gray-600 mb-1.5">Notes to Client</label>
                <textarea
                  value={invoiceForm.notes}
                  onChange={(e) => setInvoiceForm({...invoiceForm, notes: e.target.value})}
                  className="w-full px-4 py-2.5 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#d4af37] resize-none"
                  rows={3}
                  placeholder="Payment instructions..."
                />
              </div>
              
              {(invoiceForm.status === 'submitted' || invoiceForm.status === 'confirmed') && (
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-[12px] font-[700] text-gray-600 mb-2">Payment Details (from client)</p>
                  <p className="text-[13px]"><strong>Method:</strong> {invoiceForm.payment_method || '—'}</p>
                  <p className="text-[13px]"><strong>Reference:</strong> {invoiceForm.payment_reference || '—'}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSavingInvoice}
                className="w-full h-[44px] bg-[#0c1940] hover:bg-[#0c1940]/90 text-white font-[700] text-[14px] rounded-xl transition-colors disabled:opacity-50"
              >
                {isSavingInvoice ? 'Saving...' : invoice ? 'Update Invoice' : 'Create Invoice'}
              </button>
            </form>
          </div>
        )}
          </div>
        </div>

        {/* Right Column: Update Status */}
        <div className="w-full lg:w-[320px] flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-[84px]">
            <h3 className="text-[14px] font-[800] text-[#0a192f] mb-5">🔄 Update Status</h3>
            <form onSubmit={handleUpdateStatus} className="flex flex-col gap-4">
              <div>
                <label className="block text-[12px] font-[700] text-gray-600 mb-1.5">New Status</label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#d4af37] transition-all"
                >
                  {ALL_STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {STATUS_LABELS[s]?.label || s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-[700] text-gray-600 mb-1.5">Message to Client</label>
                <textarea
                  value={updateNote}
                  onChange={(e) => setUpdateNote(e.target.value)}
                  rows={3}
                  placeholder="Client will see this note..."
                  className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#d4af37] resize-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[12px] font-[700] text-gray-600 mb-1.5">Internal Note (Admin Only)</label>
                <textarea
                  value={internalNote}
                  onChange={(e) => setInternalNote(e.target.value)}
                  rows={2}
                  placeholder="Internal reference notes..."
                  className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-xl text-[14px] outline-none focus:border-purple-400 resize-none transition-all"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifyClient}
                  onChange={(e) => setNotifyClient(e.target.checked)}
                  className="w-4 h-4 accent-[#d4af37]"
                />
                <span className="text-[13px] font-[600] text-gray-600">Notify client via portal</span>
              </label>

              <button
                type="submit"
                disabled={isUpdating}
                className="w-full h-[46px] bg-[#d4af37] hover:bg-[#c19b2e] text-white font-[700] text-[14px] rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isUpdating ? (
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : '✓'} Save Update
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
