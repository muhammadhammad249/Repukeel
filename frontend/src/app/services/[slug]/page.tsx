import React from 'react';
import Link from 'next/link';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  // Mock data for the layout demonstration
  const serviceName = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-soft)]">
      
      {/* ================= HERO ================= */}
      <section className="w-full bg-gradient-to-br from-white to-[#f0f4f8] pt-20 pb-32 border-b border-[var(--border-light)]">
        <div className="container text-center max-w-3xl mx-auto">
          <div className="pill-badge mb-6">
            <span className="text-[var(--gold)]">★</span> Specialized Service
          </div>
          <h1 className="text-4xl md:text-5xl font-[800] tracking-tight mb-4 text-[var(--text-heading)]">
            {serviceName} <span className="text-[var(--gold)]">Protection</span>
          </h1>
          <p className="text-[17px] text-[var(--text-body)]">
            Professional resolution and removal of unauthorized content tailored specifically for this platform and use-case.
          </p>
        </div>
      </section>

      {/* ================= CONTENT & SIDEBAR ================= */}
      <section className="container relative z-10 -mt-16 pb-24 grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
        
        {/* Main Content Area */}
        <div className="lg:col-span-3 bg-white border border-[var(--border-light)] rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="prose max-w-none text-[var(--text-body)]">
            <h2 className="text-[24px] font-[800] text-[var(--text-heading)] mb-4">Overview</h2>
            <p className="mb-6 leading-relaxed">
              When your digital assets or personal brand are compromised, immediate action is necessary. Our team utilizes advanced detection algorithms alongside established legal channels to ensure swift removal of infringing content.
            </p>

            <h3 className="text-[20px] font-[700] text-[var(--text-heading)] mb-3 mt-8">The Process</h3>
            <ul className="flex flex-col gap-3 mb-6 list-disc pl-5">
              <li className="pl-2"><strong>Initial Assessment:</strong> We analyze the infringing URLs and determine the optimal legal strategy.</li>
              <li className="pl-2"><strong>Notice Drafting:</strong> Our legal team prepares compliant DMCA or platform-specific takedown notices.</li>
              <li className="pl-2"><strong>Submission & Escalation:</strong> Notices are sent directly to the hosts, registrars, or search engines.</li>
              <li className="pl-2"><strong>Resolution:</strong> We monitor the case until the content is successfully removed.</li>
            </ul>

            <div className="bg-[var(--bg-soft)] rounded-xl p-6 border-l-4 border-[var(--gold)] my-8">
              <h4 className="text-[16px] font-[700] text-[var(--text-heading)] mb-2">Why this matters</h4>
              <p className="text-[14px]">
                Ignoring unauthorized content can severely damage your brand's reputation and lead to significant revenue loss. Acting quickly minimizes the exposure and demonstrates that you actively enforce your intellectual property rights.
              </p>
            </div>
            
            <h3 className="text-[20px] font-[700] text-[var(--text-heading)] mb-3 mt-8">What You Need to Provide</h3>
            <p className="mb-4">To start a case, please prepare:</p>
            <ul className="flex flex-col gap-3 mb-8 list-disc pl-5">
              <li className="pl-2">Links to the original, copyrighted material.</li>
              <li className="pl-2">Links to the infringing content.</li>
              <li className="pl-2">Any relevant registration numbers or proof of ownership.</li>
            </ul>

            <Link href="/contact" className="btn btn-gold-solid mt-4">Submit a Case Now</Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-6 sticky top-24">
          <div className="bg-white border border-[var(--border-light)] rounded-2xl p-6 shadow-sm">
            <h3 className="text-[18px] font-[800] text-[var(--text-heading)] mb-4 pb-2 border-b border-[var(--border-light)]">Other Services</h3>
            <ul className="flex flex-col gap-3">
              {[
                'Google Search Suppression',
                'Facebook Takedowns',
                'OnlyFans Content Removal',
                'Instagram Brand Protection',
                'Fake Review Deletion'
              ].map((svc) => (
                <li key={svc}>
                  <Link 
                    href={`/services/${svc.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[14px] font-[600] text-[var(--text-body)] hover:text-[var(--gold)] transition-colors"
                  >
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[var(--bg-navy)] rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)] rounded-full mix-blend-multiply opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-[18px] font-[800] mb-2 relative z-10">Need Help?</h3>
            <p className="text-[13px] text-blue-200 mb-6 relative z-10">Talk to our legal experts today.</p>
            <Link href="/contact" className="btn btn-gold-solid w-full text-[14px] relative z-10">Contact Support</Link>
          </div>
        </div>

      </section>
      
    </div>
  );
}
