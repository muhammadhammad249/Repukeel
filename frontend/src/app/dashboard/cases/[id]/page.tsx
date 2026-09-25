/* eslint-disable */
'use client';
import { useEffect, useState, useRef } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { STATUS_LABELS } from '@/lib/auth';

type Tab = 'timeline' | 'messages' | 'files' | 'invoice';

export default function CaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const isNew = searchParams.get('new') === '1';

  const [caseData, setCaseData] = useState<any>(null);
  const [updates, setUpdates] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [invoice, setInvoice] = useState<any>(null);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('timeline');
  const [sendingMsg, setSendingMsg] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function load() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) setCurrentUserId(user.id);

        const [{ data: c }, { data: u }, { data: m }, { data: inv }] = await Promise.all([
          supabase.from('cases').select('*').eq('id', id).single(),
          supabase.from('case_updates').select('*').eq('case_id', id).order('created_at', { ascending: true }),
          supabase.from('messages').select('*').eq('case_id', id).order('created_at', { ascending: true }),
          supabase.from('invoices').select('*').eq('case_id', id).maybeSingle(),
        ]);
        setCaseData(c);
        setUpdates(u || []);
        setMessages(m || []);
        setInvoice(inv);
      } finally {
        setLoading(false);
      }
    }
    if (id) load();

    // Realtime: listen for new messages from admin
    const channel = supabase.channel(`messages-case-${id}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `case_id=eq.${id}` }, (payload) => {
        setMessages((prev) => {
          // avoid duplicate if optimistic message already exists
          if (prev.find(m => m.id === payload.new.id)) return prev;
          return [...prev, payload.new];
        });
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [id]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || sendingMsg) return;
    const text = newMessage.trim();
    setNewMessage('');

    // Optimistic: show message instantly
    const optimistic = {
      id: `opt-${Date.now()}`,
      case_id: id,
      sender_id: currentUserId,
      message: text,
      created_at: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, optimistic]);
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 50);

    // Insert to DB in background
    const { data: inserted } = await supabase.from('messages').insert({
      case_id: id,
      sender_id: currentUserId,
      message: text,
    }).select().single();

    // Replace optimistic with real record
    if (inserted) {
      setMessages((prev) => prev.map(m => m.id === optimistic.id ? inserted : m));
    }
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
        <Link href="/dashboard/cases" className="text-[#d4af37] font-[700] mt-4 inline-block">← Back to Cases</Link>
      </div>
    );
  }

  const statusInfo = STATUS_LABELS[caseData.status] || { label: caseData.status, color: 'bg-gray-100 text-gray-700' };
  const tabs: { key: Tab; label: string }[] = [
    { key: 'timeline', label: '📋 Timeline' },
    { key: 'messages', label: `💬 Messages ${messages.length > 0 ? `(${messages.length})` : ''}` },
    { key: 'files', label: '🗂️ Files' },
    { key: 'invoice', label: '💳 Invoice' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* New case banner */}
      {isNew && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-green-600"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <p className="font-[700] text-green-800 text-[15px]">Inquiry Submitted Successfully!</p>
            <p className="text-[13px] text-green-700 mt-1">Your case <strong>{caseData.case_id}</strong> has been created. Our team will review it and get back to you soon.</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Link href="/dashboard/cases" className="text-gray-400 hover:text-gray-600 text-[13px] font-[600]">← My Cases</Link>
          </div>
          <h1 className="text-[24px] font-[800] text-[#0a192f]">{caseData.case_id}</h1>
          <p className="text-gray-500 text-[14px] mt-1">{caseData.service_type}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-[700] ${statusInfo.color}`}>
            {statusInfo.label}
          </span>
          <p className="text-[12px] text-gray-400">Filed {new Date(caseData.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Case Info Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-[14px] font-[800] text-[#0a192f] mb-4">Case Details</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Case ID', value: caseData.case_id },
            { label: 'Service', value: caseData.service_type },
            { label: 'Platform', value: caseData.platform || '—' },
            { label: 'Urgency', value: caseData.urgency || 'normal' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[11px] font-[700] text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-[14px] font-[600] text-[#0a192f] capitalize">{item.value}</p>
            </div>
          ))}
        </div>
        {caseData.description && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-[11px] font-[700] text-gray-400 uppercase tracking-wider mb-2">Description</p>
            <p className="text-[14px] text-gray-600 leading-relaxed">{caseData.description}</p>
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
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-4 text-[13px] font-[700] whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab.key
                  ? 'border-[#d4af37] text-[#d4af37]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        {activeTab === 'timeline' && (
          <div className="p-6">
            {updates.length === 0 ? (
              <p className="text-gray-400 text-[14px] text-center py-8">No updates yet.</p>
            ) : (
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
                        </div>
                        {u.note && <p className="text-[14px] text-gray-700 leading-relaxed">{u.note}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Messages */}
        {activeTab === 'messages' && (
          <div className="flex flex-col" style={{ height: '520px' }}>
            {/* Chat background */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-2" style={{ background: '#f0f2f5' }}>
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-[40px] mb-3">💬</div>
                    <p className="text-gray-500 text-[14px] font-[600]">No messages yet</p>
                    <p className="text-gray-400 text-[13px] mt-1">Send a message to start the conversation with our team.</p>
                  </div>
                </div>
              ) : (
                messages.map((m) => {
                  const isAdminMsg = m.message.startsWith('||ADMIN||');
                  // If testing on the same account, fallback to marker. If not, use standard logic.
                  const isMe = isAdminMsg ? false : (currentUserId ? m.sender_id === currentUserId : m.sender_id === caseData?.client_id);
                  
                  const displayMessage = m.message.replace('||ADMIN||', '');

                  return (
                    <div key={m.id} className={`flex items-end gap-2 ${isMe ? 'justify-end' : 'justify-start'}`}>
                      {/* Admin avatar */}
                      {!isMe && (
                        <div className="w-8 h-8 rounded-full bg-[#0c1940] flex items-center justify-center flex-shrink-0 mb-1">
                          <span className="text-white text-[10px] font-[800]">RK</span>
                        </div>
                      )}
                      <div className={`max-w-[70%] rounded-2xl px-4 py-2.5 shadow-sm ${
                        isMe
                          ? 'bg-[#25d366] text-white rounded-br-sm'
                          : 'bg-white text-gray-800 rounded-bl-sm'
                      }`}>
                        {!isMe && (
                          <p className="text-[11px] font-[800] text-[#0c1940] mb-1">RepuKeel Team</p>
                        )}
                        <p className="text-[14px] leading-relaxed whitespace-pre-wrap">{displayMessage}</p>
                        <p className={`text-[10px] mt-1 text-right ${isMe ? 'text-green-100' : 'text-gray-400'}`}>
                          {new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          {isMe && <span className="ml-1">✓✓</span>}
                        </p>
                      </div>
                      {/* Client avatar */}
                      {isMe && (
                        <div className="w-8 h-8 rounded-full bg-[#25d366] flex items-center justify-center flex-shrink-0 mb-1">
                          <span className="text-white text-[10px] font-[800]">You</span>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
            {/* Input bar */}
            <div className="border-t border-gray-200 p-3 flex gap-2 items-center bg-white">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 bg-[#f0f2f5] border-0 rounded-full text-[14px] outline-none focus:ring-2 focus:ring-[#d4af37] transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={sendingMsg || !newMessage.trim()}
                className="w-10 h-10 bg-[#d4af37] hover:bg-[#c19b2e] text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                {sendingMsg ? (
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Files */}
        {activeTab === 'files' && (
          <div className="p-6">
            <p className="text-gray-400 text-[14px] text-center py-8">File uploads will be available soon.</p>
          </div>
        )}

        {/* Invoice */}
        {activeTab === 'invoice' && (
          <div className="p-6">
            {!invoice ? (
              <div className="text-center py-8">
                <div className="text-[48px] mb-4">🧾</div>
                <p className="text-[15px] font-[700] text-gray-700 mb-2">No invoice yet</p>
                <p className="text-[13px] text-gray-400">An invoice will appear here once our team has reviewed your case and sent you a quote.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Amount', value: `$${invoice.amount} ${invoice.currency}` },
                    { label: 'Status', value: invoice.status },
                    { label: 'Payment Method', value: invoice.payment_method || '—' },
                    { label: 'Reference', value: invoice.payment_reference || '—' },
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 rounded-xl p-4">
                      <p className="text-[11px] font-[700] text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-[15px] font-[700] text-[#0a192f] capitalize">{item.value}</p>
                    </div>
                  ))}
                </div>
                {invoice.notes && (
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                    <p className="text-[13px] text-blue-700">{invoice.notes}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
