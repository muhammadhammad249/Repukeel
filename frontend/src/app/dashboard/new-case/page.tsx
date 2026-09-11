export default function NewCasePage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-2xl">
      <a href="/dashboard" className="text-blue-600 hover:underline text-sm mb-8 inline-block">&larr; Back to Dashboard</a>
      <h1 className="text-3xl font-bold mb-2">Submit New Case</h1>
      <p className="text-slate-500 mb-8">Provide details about the infringement and our team will begin processing immediately.</p>
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Issue Type <span className="text-red-500">*</span></label>
          <select className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>Copyright Infringement</option>
            <option>Brand Protection</option>
            <option>Leaked Content</option>
            <option>Reputation Damage</option>
            <option>Impersonation / Fake Profiles</option>
            <option>Anti-Piracy</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Case Description <span className="text-red-500">*</span></label>
          <textarea rows={5} placeholder="Describe the infringement in detail..." className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Known Infringing URLs <span className="text-slate-400 font-normal">(optional)</span></label>
          <textarea rows={4} placeholder="Paste URLs, one per line..." className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-colors">
          Submit Case →
        </button>
      </div>
    </div>
  );
}
