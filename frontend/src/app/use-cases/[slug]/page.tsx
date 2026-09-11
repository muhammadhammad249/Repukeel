export default async function UseCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <a href="/" className="text-[#e0ac2f] hover:underline text-sm mb-8 inline-block">&larr; Back to Home</a>
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold text-[#1a1a2e] bg-[#e0ac2f] rounded-full">
        🔒 100% Private & Confidential
      </div>
      <h1 className="text-4xl font-extrabold mb-4 text-white">{title}</h1>
      <p className="text-xl text-[#e0ac2f] font-semibold mb-6">You are not alone. We handle this situation every day.</p>
      <p className="text-xl text-slate-400 mb-10">Our specialists will guide you through the removal process quickly, discreetly, and professionally.</p>
      <div className="flex gap-4 mb-16">
        <a href="/contact" className="bg-[#e0ac2f] text-[#12100a] px-6 py-3 rounded-xl font-bold hover:bg-[#f2c94c] transition-colors">Start Removal Process</a>
        <a href="/contact" className="border-2 border-[#22304d] text-white px-6 py-3 rounded-xl font-bold hover:border-[#e0ac2f] transition-colors">Get Free Assessment</a>
      </div>
      <div className="bg-[#16223c] border-2 border-dashed border-[#22304d] rounded-2xl p-12 text-center">
        <p className="text-slate-400">Use case detail content loading from data collection...</p>
        <p className="text-slate-400 text-sm mt-2">Slug: <code className="bg-[#0c1526] px-2 py-0.5 rounded text-[#f4f6fb]">{resolvedParams.slug}</code></p>
      </div>
    </div>
  );
}
