'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { getCurrentProfile, generateCaseId } from '@/lib/auth';

const SERVICE_TYPES = [
  'Content Removal',
  'DMCA / Copyright Takedown',
  'Search Result Cleanup',
  'Reputation Management',
  'Monitoring & Alerts',
  'Dating Reputation',
  'Job Reputation / Background Check',
  'Reputation Audit',
  'Other',
];

const URGENCY_LEVELS = [
  { value: 'normal', label: '🟢 Normal — within standard timeline' },
  { value: 'urgent', label: '🟡 Urgent — 48–72 hours' },
  { value: 'emergency', label: '🔴 Emergency — immediate action needed' },
];

export default function NewInquiryPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    service_type: '',
    platform: '',
    description: '',
    urls: '',
    urgency: 'normal',
  });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.service_type || !form.description) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!agreed) {
      setError('Please confirm your authorization to proceed.');
      return;
    }

    setLoading(true);

    const profile = await getCurrentProfile();
    if (!profile) {
      router.push('/login');
      return;
    }

    const caseId = await generateCaseId();
    const urlArray = form.urls.split('\n').map((u) => u.trim()).filter(Boolean);

    const { data, error: insertError } = await supabase
      .from('cases')
      .insert({
        case_id: caseId,
        client_id: profile.id,
        service_type: form.service_type,
        platform: form.platform,
        description: form.description,
        urls: urlArray,
        urgency: form.urgency,
        status: 'submitted',
      })
      .select()
      .single();

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
      return;
    }

    // Insert first timeline entry
    await supabase.from('case_updates').insert({
      case_id: data.id,
      status: 'submitted',
      note: 'Your inquiry has been received. Case ID has been assigned.',
      notify_client: false,
    });

    router.push(`/dashboard/cases/${data.id}?new=1`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-[26px] font-[800] text-[#0a192f]">Submit New Inquiry</h1>
        <p className="text-gray-500 text-[15px] mt-1">Fill in the details below and we'll create a case for you immediately.</p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 mb-6 text-[14px] font-[500] flex items-start gap-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-6">

        {/* Service Type */}
        <div>
          <label className="block text-[13px] font-[700] text-[#0a192f] mb-2">Service Type *</label>
          <select
            name="service_type"
            value={form.service_type}
            onChange={handleChange}
            required
            className="w-full h-[48px] px-4 bg-[#f8fafc] border border-gray-200 rounded-xl outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-[15px] text-gray-800 transition-all"
          >
            <option value="" disabled>Select a service...</option>
            {SERVICE_TYPES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Platform */}
        <div>
          <label className="block text-[13px] font-[700] text-[#0a192f] mb-2">Platform / Website</label>
          <input
            type="text"
            name="platform"
            value={form.platform}
            onChange={handleChange}
            placeholder="e.g. Google, Facebook, TikTok, Reddit..."
            className="w-full h-[48px] px-4 bg-[#f8fafc] border border-gray-200 rounded-xl outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-[15px] transition-all"
          />
        </div>

        {/* URLs */}
        <div>
          <label className="block text-[13px] font-[700] text-[#0a192f] mb-2">
            Links / URLs <span className="text-gray-400 font-normal">(one per line)</span>
          </label>
          <textarea
            name="urls"
            value={form.urls}
            onChange={handleChange}
            rows={4}
            placeholder="https://example.com/harmful-content&#10;https://another-site.com/post"
            className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-xl outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-[15px] transition-all resize-none font-mono text-[13px]"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-[13px] font-[700] text-[#0a192f] mb-2">Case Description *</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={5}
            required
            placeholder="Describe the issue: what the content is, where it appears, how it's affecting you, and any other relevant context..."
            className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-xl outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-[15px] transition-all resize-none"
          />
        </div>

        {/* Urgency */}
        <div>
          <label className="block text-[13px] font-[700] text-[#0a192f] mb-2">Urgency Level</label>
          <div className="flex flex-col gap-2">
            {URGENCY_LEVELS.map((level) => (
              <label key={level.value} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                form.urgency === level.value ? 'border-[#d4af37] bg-[#d4af37]/5' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input
                  type="radio"
                  name="urgency"
                  value={level.value}
                  checked={form.urgency === level.value}
                  onChange={handleChange}
                  className="accent-[#d4af37]"
                />
                <span className="text-[14px] font-[600] text-gray-700">{level.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Consent */}
        <div className={`p-4 rounded-xl border transition-all ${agreed ? 'border-[#d4af37] bg-[#d4af37]/5' : 'border-gray-200'}`}>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 accent-[#d4af37]"
            />
            <span className="text-[13px] text-gray-600 leading-relaxed">
              I confirm the information above is accurate and I authorize RepuKeel to act on my behalf regarding this matter. I have read and agree to the{' '}
              <a href="/terms-conditions" target="_blank" className="text-[#d4af37] font-[600] hover:underline">Terms and Conditions</a>.
            </span>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-[52px] bg-[#d4af37] hover:bg-[#c19b2e] text-white font-[700] text-[16px] rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#d4af37]/20 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            <>
              Submit Inquiry
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
