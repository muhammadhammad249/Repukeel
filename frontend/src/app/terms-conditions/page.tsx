export default function TermsPage() {
  const sections = ["Acceptance of Terms","Description of Services","Client Obligations","Payment Terms","Intellectual Property","Limitation of Liability","Confidentiality","Indemnification","Governing Law","Termination","Contact"];
  return (
    <div className="container mx-auto px-4 py-24 max-w-5xl">
      <h1 className="text-4xl font-extrabold mb-2">Terms & Conditions</h1>
      <p className="text-slate-500 mb-12">Last updated: September 2026</p>
      <div className="grid md:grid-cols-4 gap-12">
        <aside className="md:col-span-1">
          <div className="sticky top-24 bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p className="font-bold text-sm text-slate-700 mb-3">Contents</p>
            <nav className="space-y-2">
              {sections.map((s, i) => (
                <a key={s} href={`#section-${i+1}`} className="block text-xs text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-transform">{i+1}. {s}</a>
              ))}
            </nav>
          </div>
        </aside>
        <div className="md:col-span-3 space-y-12">
          {sections.map((s, i) => (
            <section key={s} id={`section-${i+1}`}>
              <h2 className="text-xl font-bold mb-4">{i+1}. {s}</h2>
              <div className="text-slate-600 leading-relaxed space-y-3">
                <p>This section outlines our terms regarding {s.toLowerCase()}. By using ProtectIP Master services, you agree to be bound by these terms and conditions.</p>
                <p>Please read this section carefully. If you do not agree to these terms, you should not use our services.</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
