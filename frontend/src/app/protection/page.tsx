import Navbar from '../components/Navbar';

export default function ProtectionPage() {
  return (
    <div className="min-h-screen bg-[#080e1c] text-[#f4f6fb] font-sans pb-24">
      <Navbar />
      {/* Header */}
      <div className="pt-24 pb-12 px-6 text-center max-w-4xl mx-auto">
        <p className="text-xs font-bold text-[#e0ac2f] uppercase tracking-[2px] mb-3">Get Protected</p>
        <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.2] mb-6">Start Your Protection Today</h1>
        <p className="text-[15px] text-[#a9b3c9] leading-relaxed max-w-2xl mx-auto">
          Submit a new case for our team to review, or log in to track an existing one. Our experts will begin the analysis immediately.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Submit Case Card */}
          <div className="bg-[#16223c] border border-[#22304d] rounded-2xl p-10 flex flex-col items-center text-center hover:border-[#e0ac2f] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_36px_rgba(224,172,47,0.09)]">
            <div className="w-20 h-20 rounded-full bg-[rgba(224,172,47,0.09)] border border-[rgba(224,172,47,0.22)] flex items-center justify-center mb-6 text-[#e0ac2f]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Submit a New Case</h2>
            <p className="text-[#a9b3c9] text-sm mb-8 max-w-xs mx-auto">Takes about 3 minutes. Provide details about the infringement to get started.</p>
            <a href="/signup" className="mt-auto w-full bg-[#e0ac2f] hover:bg-[#f2c94c] text-[#12100a] font-bold text-sm px-6 py-4 rounded-lg transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
              Begin Submission
            </a>
          </div>

          {/* Client Portal Card */}
          <div className="bg-gradient-to-br from-[#16223c] to-[#0c1526] border border-[#22304d] rounded-2xl p-10 flex flex-col items-center text-center hover:border-[#e0ac2f] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_36px_rgba(224,172,47,0.09)]">
            <div className="w-20 h-20 rounded-full bg-[#080e1c] border border-[#22304d] flex items-center justify-center mb-6 text-[#f4f6fb]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Client Portal</h2>
            <p className="text-[#a9b3c9] text-sm mb-8 max-w-xs mx-auto">Already a client? Log in to track your active cases, view reports, and manage billing.</p>
            <a href="/login" className="mt-auto w-full bg-transparent border-2 border-[#22304d] text-[#f4f6fb] font-bold text-sm px-6 py-4 rounded-lg hover:border-[#e0ac2f] hover:text-[#e0ac2f] transition-colors">
              Log in to Portal
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["99% Success Rate", "24h Response", "100% Confidential", "Global Coverage"].map((badge) => (
            <div key={badge} className="bg-[#0c1526] border border-[#22304d] rounded-xl p-4 text-center text-xs font-bold text-[#a9b3c9] uppercase tracking-wider">
              {badge}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
