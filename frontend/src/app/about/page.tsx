import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080e1c] text-[#f4f6fb] font-sans pb-24">
      <Navbar />
      {/* Header */}
      <div className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <p className="text-xs font-bold text-[#e0ac2f] uppercase tracking-[2px] mb-3">About RepuKeel</p>
        <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.2] mb-6">Securing the digital frontier for creators and brands.</h1>
        <p className="text-[15px] text-[#a9b3c9] leading-relaxed max-w-2xl mx-auto">
          We are a specialized team of legal experts, technologists, and brand protection specialists dedicated to eliminating online piracy and impersonation.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto px-6">
        {/* Story Section */}
        <div className="bg-[#16223c] border border-[#22304d] rounded-2xl p-8 md:p-12 mb-16 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-[#e0ac2f]">Our Mission</h2>
          <div className="space-y-6 text-[#a9b3c9] text-sm md:text-base leading-relaxed">
            <p>
              Founded on the belief that digital creators and enterprises deserve uncompromising protection for their intellectual property, RepuKeel has grown into a global leader in DMCA takedowns and online reputation management.
            </p>
            <p>
              We understand that every stolen piece of content represents lost revenue, damaged reputation, and compromised security. That is why we do not just send automated notices — we relentlessly pursue infringers until the content is permanently removed.
            </p>
            <p>
              Using our proprietary AI-assisted monitoring combined with human legal expertise, we offer an unparalleled 99% success rate across 150+ countries and hundreds of digital platforms.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
           <div className="bg-[#0c1526] border border-[#22304d] rounded-xl p-6 text-center hover:border-[#e0ac2f] transition-colors duration-300">
              <div className="text-3xl font-extrabold text-[#e0ac2f] mb-2">500K+</div>
              <div className="text-xs text-[#a9b3c9] uppercase tracking-wider font-bold">Removals</div>
           </div>
           <div className="bg-[#0c1526] border border-[#22304d] rounded-xl p-6 text-center hover:border-[#e0ac2f] transition-colors duration-300">
              <div className="text-3xl font-extrabold text-[#e0ac2f] mb-2">99%</div>
              <div className="text-xs text-[#a9b3c9] uppercase tracking-wider font-bold">Success Rate</div>
           </div>
           <div className="bg-[#0c1526] border border-[#22304d] rounded-xl p-6 text-center hover:border-[#e0ac2f] transition-colors duration-300">
              <div className="text-3xl font-extrabold text-[#e0ac2f] mb-2">24/7</div>
              <div className="text-xs text-[#a9b3c9] uppercase tracking-wider font-bold">Monitoring</div>
           </div>
           <div className="bg-[#0c1526] border border-[#22304d] rounded-xl p-6 text-center hover:border-[#e0ac2f] transition-colors duration-300">
              <div className="text-3xl font-extrabold text-[#e0ac2f] mb-2">150+</div>
              <div className="text-xs text-[#a9b3c9] uppercase tracking-wider font-bold">Countries</div>
           </div>
        </div>

        {/* Team / Expertise */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Unmatched Expertise</h2>
          <p className="text-[#a9b3c9] max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">Our team consists of specialized copyright attorneys, cybersecurity analysts, and platform compliance experts who know the exact mechanisms required to enforce takedowns globally.</p>
          
          <div className="inline-block text-left bg-gradient-to-r from-[#16223c] to-[#0c1526] border border-[#22304d] rounded-xl p-8 max-w-3xl hover:border-[#e0ac2f] transition-colors duration-300">
             <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#e0ac2f]/10 text-[#e0ac2f] flex items-center justify-center flex-shrink-0 text-3xl font-serif">"</div>
                <div>
                  <p className="italic text-[#f4f6fb] text-[15px] leading-relaxed mb-4">
                    Your content is your most valuable asset in the digital economy. We treat every case with the urgency and precision it requires, ensuring that your rights are upheld and your brand remains untarnished.
                  </p>
                  <p className="text-sm font-bold text-[#e0ac2f] tracking-wide">RepuKeel Executive Team</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
