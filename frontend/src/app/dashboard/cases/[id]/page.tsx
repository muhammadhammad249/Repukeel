/* eslint-disable */
'use client';
import { useEffect, useState, useRef } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { STATUS_LABELS } from '@/lib/auth';

type Tab = 'timeline' | 'invoice';

// ─── Confirmation Modal ───────────────────────────────────────────────────────
function DeleteModal({
  caseLabel,
  onCancel,
  onConfirm,
  isDeleting,
}: {
  caseLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
  isDeleting: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-md p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-red-600">
              <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="text-[18px] font-[800] text-[#0a192f]">Delete Case?</h3>
            <p className="text-[13px] text-gray-500 mt-0.5">Case <strong>{caseLabel}</strong></p>
          </div>
        </div>
        <p className="text-[14px] text-gray-600 mb-8 leading-relaxed">
          This will permanently delete this case along with all its updates and invoices. <strong>This action cannot be undone.</strong>
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            disabled={isDeleting}
            className="flex-1 h-[46px] bg-gray-100 hover:bg-gray-200 text-gray-700 font-[700] text-[14px] rounded-xl transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex-1 h-[46px] bg-red-600 hover:bg-red-700 text-white font-[700] text-[14px] rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isDeleting ? (
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
              </svg>
            )}
            {isDeleting ? 'Deleting...' : 'Delete Case'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isNew = searchParams.get('new') === '1';

  const [caseData, setCaseData] = useState<any>(null);
  const [updates, setUpdates] = useState<any[]>([]);
  const [invoice, setInvoice] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('timeline');

  // Delete state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const [{ data: c }, { data: u }, { data: inv }] = await Promise.all([
          supabase.from('cases').select('*').eq('id', id).single(),
          supabase.from('case_updates').select('*').eq('case_id', id).order('created_at', { ascending: true }),
          supabase.from('invoices').select('*').eq('case_id', id).maybeSingle(),
        ]);
        setCaseData(c);
        setUpdates(u || []);
        setInvoice(inv);
      } finally {
        setLoading(false);
      }
    }
    if (id) load();
  }, [id]);

  const showToastMsg = (type: 'success' | 'error', msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  };

  const handleDeleteConfirm = async () => {
    setIsDeleting(true);
    // Client can only delete their own case — RLS enforces this at the DB level
    const { error } = await supabase.from('cases').delete().eq('id', id);
    setIsDeleting(false);
    setShowDeleteModal(false);

    if (error) {
      showToastMsg('error', `Failed to delete: ${error.message}`);
    } else {
      // Navigate back to cases list
      router.push('/dashboard/cases');
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

  return (
    <div className="max-w-4xl mx-auto">

      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg text-white text-[14px] font-[600] ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {toast.msg}
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <DeleteModal
          caseLabel={caseData.case_id}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={handleDeleteConfirm}
          isDeleting={isDeleting}
        />
      )}

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
          {/* Delete button — only for submitted cases (not yet in progress) */}
          <button
            onClick={() => setShowDeleteModal(true)}
            className="flex items-center gap-2 px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-[700] text-[12px] rounded-xl border border-red-200 transition-colors mt-1"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
              <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
            </svg>
            Delete Case
          </button>
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

    </div>
  );
}
