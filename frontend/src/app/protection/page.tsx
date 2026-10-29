import React from 'react';
import Link from 'next/link';

export default function ProtectionPage() {
  const harmfulLinks = [
    { name: 'Google Review Removal', href: '/content-removal/google-review-removal' },
    { name: 'Fake Review Removal', href: '/content-removal/fake-review-removal' },
    { name: 'News Article Removal', href: '/search-result-cleanup/news-article-removal' },
    { name: 'Reddit & Forum Result Cleanup', href: '/search-result-cleanup/reddit-forum-result-cleanup' },
    { name: 'Google Suppression & De-Indexing', href: '/search-result-cleanup/google-suppression-de-indexing' },
    { name: 'Mugshot Removal & Suppression', href: '/content-removal/mugshot-removal-suppression' },
    { name: 'Personal Reputation Audit', href: '/reputation-audit/personal-reputation-audit' },
  ];

  const stolenLinks = [
    { name: 'Stolen Image Protection', href: '/dating-reputation/image-protection' },
    { name: 'Instagram Content Removal', href: '/content-removal/instagram-content-removal' },
    { name: 'TikTok Content Removal', href: '/content-removal/tiktok-content-removal' },
    { name: 'Social Media Takedowns', href: '/dating-reputation/social-media-takedowns' },
    { name: 'YouTube & Video Result Suppression', href: '/search-result-cleanup/youtube-video-result-suppression' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-soft)]">
      <main className="flex-1 flex flex-col items-center pt-20 pb-28">
        <div className="container max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          
          {/* Top Shield Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--gold-lt)] to-[var(--gold-dk)] flex items-center justify-center text-white mb-6 shadow-xl" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z"/></svg>
          </div>
          
          {/* Eyebrow */}
          <div className="pill-badge mb-6">
            Content Protection
          </div>
          
          {/* Exactly one H1 */}
          <h1 className="text-4xl md:text-5xl font-[800] tracking-tight leading-[1.15] mb-6 text-[var(--text-heading)]">
            Remove Harmful Content About You. Protect What You Create.
          </h1>
          
          {/* Intro paragraph */}
          <p className="text-[17px] text-[var(--text-body)] mb-12 max-w-2xl leading-relaxed">
            RepuKeel helps individuals and businesses deal with negative or harmful content online, and with copyright infringement of their own work. Tell us what you found and we will explain your options.
          </p>

          {/* Two equal cards side by side (stacked on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
            
            {/* Card A: Harmful or negative content about you */}
            <div className="card-light text-left group flex flex-col p-8">
              <div className="w-12 h-12 rounded-xl bg-[rgba(217,165,43,0.1)] text-[var(--gold)] flex items-center justify-center mb-6 transition-transform group-hover:scale-110" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h2 className="text-[22px] font-[700] text-[var(--text-heading)] mb-3">Harmful or negative content about you</h2>
              <p className="text-[15px] text-[var(--text-body)] mb-8 flex-1 leading-relaxed">
                Reviews, articles, posts and search results that damage your reputation.
              </p>
              <Link href="/request-free-analysis" className="bg-[var(--gold)] text-white font-[700] text-[15px] px-6 py-3.5 rounded-lg hover:bg-[#c99a2b] transition-colors flex items-center justify-center gap-1.5 mt-auto self-start">
                Request a free analysis &rarr;
              </Link>
            </div>

            {/* Card B: Stolen or copyrighted content */}
            <div className="card-light text-left group flex flex-col p-8">
              <div className="w-12 h-12 rounded-xl bg-[rgba(217,165,43,0.1)] text-[var(--gold)] flex items-center justify-center mb-6 transition-transform group-hover:scale-110" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>
              <h2 className="text-[22px] font-[700] text-[var(--text-heading)] mb-3">Stolen or copyrighted content</h2>
              <p className="text-[15px] text-[var(--text-body)] mb-8 flex-1 leading-relaxed">
                Your photos, videos, text or brand used without your permission.
              </p>
              <Link href="/contact" className="bg-[var(--gold)] text-white font-[700] text-[15px] px-6 py-3.5 rounded-lg hover:bg-[#c99a2b] transition-colors flex items-center justify-center gap-1.5 mt-auto self-start">
                Submit a copyright case &rarr;
              </Link>
            </div>

          </div>

          {/* Disclaimer line under the cards */}
          <p className="text-[13px] text-gray-500 max-w-xl mb-16 italic">
            Outcomes depend on platform policies and the facts of each case. We cannot guarantee removal.
          </p>

          {/* Section: What we can help with */}
          <div className="w-full bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm text-left mb-16">
            <h2 className="text-2xl md:text-3xl font-[800] text-[var(--text-heading)] mb-8 pb-4 border-b border-gray-100">
              What we can help with
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Column A */}
              <div>
                <h3 className="text-[17px] font-[700] text-[var(--gold)] uppercase tracking-wide mb-4">
                  Harmful or negative content
                </h3>
                <ul className="flex flex-col gap-3">
                  {harmfulLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-[15px] text-gray-700 hover:text-[var(--gold)] hover:underline transition-colors flex items-center gap-2">
                        <span className="text-gray-400 font-bold">›</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column B */}
              <div>
                <h3 className="text-[17px] font-[700] text-[var(--gold)] uppercase tracking-wide mb-4">
                  Stolen or copyrighted content
                </h3>
                <ul className="flex flex-col gap-3">
                  {stolenLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-[15px] text-gray-700 hover:text-[var(--gold)] hover:underline transition-colors flex items-center gap-2">
                        <span className="text-gray-400 font-bold">›</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Client portal card placed below the sections */}
          <div className="card-light text-left group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full p-8 border border-gray-200">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[rgba(217,165,43,0.1)] text-[var(--gold)] flex items-center justify-center shrink-0" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <div>
                <h3 className="text-[20px] font-[700] text-[var(--text-heading)] mb-2">Client portal</h3>
                <p className="text-[15px] text-[var(--text-body)] max-w-xl leading-relaxed">
                  Log in to your secure dashboard to view live updates on your active takedown requests and manage your account.
                </p>
              </div>
            </div>
            <Link href="/login" className="bg-[var(--gold)] text-white font-[700] text-[15px] px-6 py-3 rounded-lg hover:bg-[#c99a2b] transition-colors flex items-center justify-center gap-1 shrink-0 self-start md:self-auto">
              Log in &rarr;
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
