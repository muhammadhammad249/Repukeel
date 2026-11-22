import Link from "next/link";
import { BlogPost } from "@/app/blogs/data";

interface MugshotRemovalContentProps {
  categoryName: string;
  serviceName: string;
  relatedBlogs: BlogPost[];
}

export default function MugshotRemovalContent({
  categoryName,
  serviceName,
  relatedBlogs,
}: MugshotRemovalContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mugshot Removal Service",
    "provider": {
      "@type": "Organization",
      "name": "RepuKeel",
      "url": "https://repukeel.com/",
    },
    "areaServed": ["US", "GB", "AU", "DE"],
    "serviceType": "Mugshot removal and search suppression",
    "description":
      "Confidential mugshot removal service. We pursue takedowns, legal requests, and Google suppression where eligible. Request a private case review.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does a mugshot removal service work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "A mugshot removal service identifies all websites hosting your booking photograph and assesses the strongest removal path under state law, hosting terms, or privacy regulations. We submit formal takedown demands to site operators and de-indexing requests to Google, deploying search suppression if a publisher fails to cooperate.",
        },
      },
      {
        "@type": "Question",
        "name": "Can a mugshot be removed if charges were dropped or expunged?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, dropped charges, dismissals, and expungements provide strong statutory grounds for takedown across numerous jurisdictions. Many state laws require mugshot publishers to delete arrest photos without fee once certified court records are submitted.",
        },
      },
      {
        "@type": "Question",
        "name": "What if the site refuses to remove it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "When a publisher operates offshore or refuses to comply, we pivot to search de-indexing and suppression strategies. We petition Google for delisting where policy permits and build authoritative web assets to displace the offending URL from the first page of search results.",
        },
      },
      {
        "@type": "Question",
        "name": "Should I pay a mugshot website to remove my photo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No, paying a mugshot website is never recommended under any circumstances. Paying commercial operators validates their extortion model and signals financial vulnerability, which frequently causes affiliated mirror sites to republish the image for additional fees.",
        },
      },
      {
        "@type": "Question",
        "name": "How long does mugshot removal take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Timelines depend on publisher responsiveness, jurisdiction, and whether search suppression is required alongside direct takedowns. While cooperative sites and Google de-indexing can resolve within days, non-compliant publishers or broader suppression campaigns can take several weeks or months.",
        },
      },
      {
        "@type": "Question",
        "name": "Is the process confidential?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, every case review and takedown campaign is conducted under strict confidentiality and non-disclosure standards. Communications with platforms, webmasters, and search engines are executed discreetly to prevent unwanted public exposure.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://repukeel.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Content Removal",
        "item": "https://repukeel.com/content-removal",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Mugshot Removal & Suppression",
        "item": "https://repukeel.com/content-removal/mugshot-removal-suppression",
      },
    ],
  };

  return (
    <div className="w-full">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero Section (White) */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 mb-8 text-[12px] sm:text-[13px] font-[600] text-[#9aa4c0]">
            <Link href="/" className="hover:text-[#20409a] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/content-removal" className="hover:text-[#20409a] transition-colors truncate max-w-[140px] sm:max-w-none">
              {categoryName}
            </Link>
            <span>›</span>
            <span className="text-[#d9a52b] truncate max-w-[180px] sm:max-w-none">
              {serviceName}
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[rgba(217,165,43,0.1)] border border-[rgba(217,165,43,0.3)] rounded-full px-4 py-1.5 text-[12px] font-[700] text-[#b8860b] uppercase tracking-widest mb-6">
              Executive Privacy &amp; Content Removal
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000000] tracking-tight mb-6">
              Mugshot Removal Service
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#374151] leading-relaxed mb-8 max-w-[70ch]">
              A booking photo can outlast the legal case and rank prominently on search engines for your name. We handle takedown requests, legal-basis removals, and search suppression discreetly to protect your professional standing. If you are researching self-help removal steps, explore our guide on{" "}
              <Link
                href="/blogs/remove-mugshots-from-google"
                className="text-[#20409a] font-semibold underline hover:text-[#d4af37] transition-colors"
              >
                how to remove mugshots from Google
              </Link>
              .
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/request-free-analysis"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#d9a52b] via-[#e5b94c] to-[#d9a52b] text-[#0a192f] shadow-md hover:shadow-lg hover:brightness-105 transition-all min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#20409a]"
              >
                Request a confidential case review
              </Link>
              <a
                href="https://wa.me/923087525510"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-[#0a192f] hover:bg-[#12284c] text-white transition-all min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#20409a]"
              >
                <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp +92 308 752 5510
              </a>
            </div>

            <p className="text-[13px] text-gray-500 mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              24/7 support available for urgent executive and personal privacy cases.
            </p>
          </div>
        </div>
      </section>

      {/* 2. How Our Mugshot Removal Service Works (Light Gray) */}
      <section className="w-full bg-[#f8fafc] border-b border-slate-200/60 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#b8860b] uppercase tracking-[2px] block mb-2">Process &amp; Methodology</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] tracking-tight">
              How Our Mugshot Removal Service Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full">
              <div className="w-10 h-10 rounded-full bg-[rgba(217,165,43,0.12)] border border-[rgba(217,165,43,0.3)] text-[#b8860b] font-extrabold flex items-center justify-center text-base mb-5 shrink-0">
                1
              </div>
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                Confidential case review
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                We evaluate visible arrest records and booking photos discreetly without creating public exposure.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full">
              <div className="w-10 h-10 rounded-full bg-[rgba(217,165,43,0.12)] border border-[rgba(217,165,43,0.3)] text-[#b8860b] font-extrabold flex items-center justify-center text-base mb-5 shrink-0">
                2
              </div>
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                Source mapping
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                We identify every site, aggregator, background-check database, and cached search copy displaying or syndicating the image.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full">
              <div className="w-10 h-10 rounded-full bg-[rgba(217,165,43,0.12)] border border-[rgba(217,165,43,0.3)] text-[#b8860b] font-extrabold flex items-center justify-center text-base mb-5 shrink-0">
                3
              </div>
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                Removal path assessment
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                We assess state mugshot laws, expungement documentation, hosting policies, and data-protection routes where eligible.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full">
              <div className="w-10 h-10 rounded-full bg-[rgba(217,165,43,0.12)] border border-[rgba(217,165,43,0.3)] text-[#b8860b] font-extrabold flex items-center justify-center text-base mb-5 shrink-0">
                4
              </div>
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                Takedown and Google requests
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                We submit formal takedown demands directly to publishers, accompanied by Google de-indexing requests.
              </p>
            </div>

            {/* Step 5 */}
            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full md:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-full bg-[rgba(217,165,43,0.12)] border border-[rgba(217,165,43,0.3)] text-[#b8860b] font-extrabold flex items-center justify-center text-base mb-5 shrink-0">
                5
              </div>
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                Suppression and monitoring
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                When a domain refuses removal, we deploy search suppression campaigns to push negative URLs off page one while monitoring for reposts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Removal vs Suppression: What We Use and When (White) */}
      <section className="w-full bg-white border-b border-gray-100 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#b8860b] uppercase tracking-[2px] block mb-2">Strategy Comparison</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] tracking-tight mb-6">
              Removal vs Suppression: What We Use and When
            </h2>

            <div className="space-y-6 text-[15px] sm:text-[16px] text-[#374151] leading-relaxed">
              <p>
                Our priority is permanent removal at the source. When a record is expunged, dismissed, or violates state mugshot laws, we pursue complete deletion from the hosting server and follow with Google de-indexing requests.
              </p>
              <p>
                When publishers operate offshore or refuse deletion, direct host removal may not be feasible. In these cases, we deploy{" "}
                <Link
                  href="/search-result-cleanup/google-suppression-de-indexing"
                  className="text-[#20409a] font-semibold underline hover:text-[#d4af37] transition-colors"
                >
                  Google Suppression &amp; De-Indexing
                </Link>{" "}
                to build authoritative web assets that push uncooperative mugshot links off the first pages of search results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who We Help (Light Gray) */}
      <section className="w-full bg-[#f8fafc] border-b border-slate-200/60 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#b8860b] uppercase tracking-[2px] block mb-2">Target Client Profiles</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] tracking-tight">
              Who We Help
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#374151] mt-2 max-w-[70ch]">
              We support professionals whose reputations and livelihoods are affected by arrest records in search results:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full">
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                Executives &amp; Board Members
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed mb-4 flex-1">
                Safeguarding corporate trust and leadership standing. Learn more about our services for{" "}
                <Link
                  href="/industries/executives-hnw-individuals"
                  className="text-[#20409a] font-semibold underline hover:text-[#d4af37] transition-colors"
                >
                  executives and high-net-worth individuals
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full">
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                Public Figures
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed mb-4 flex-1">
                Defending personal privacy against opportunistic aggregators. Explore our work for{" "}
                <Link
                  href="/reputation-management/public-figures"
                  className="text-[#20409a] font-semibold underline hover:text-[#d4af37] transition-colors"
                >
                  public figures
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full">
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                Entrepreneurs &amp; Owners
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed mb-4 flex-1">
                Protecting investor confidence, vendor trust, and commercial diligence from misleading legacy search records.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full">
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                Professionals &amp; Candidates
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed mb-4 flex-1">
                Ensuring pre-employment screenings reflect qualifications rather than dismissed charges or non-conviction booking images.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Jurisdictions We Cover (White) */}
      <section className="w-full bg-white border-b border-gray-100 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#b8860b] uppercase tracking-[2px] block mb-2">Global Coverage</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] tracking-tight">
              Jurisdictions We Cover
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#374151] mt-2 max-w-[70ch]">
              RepuKeel works across key international jurisdictions, applying local statutory and privacy mechanisms:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-[#f8fafc] shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full">
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                United States
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                Over twenty states prohibit publishers from charging fees or displaying arrest photos when charges are dropped or expunged. Where eligible, we assess state mugshot laws and expungement documentation.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-[#f8fafc] shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full">
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                United Kingdom
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                Under the UK Data Protection Act and UK GDPR, arrest records without conviction or spent records can qualify for erasure and search engine delisting under the Right to be Forgotten.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-[#f8fafc] shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full">
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                Australia
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                We evaluate privacy standards and search de-referencing mechanisms to challenge unverified publications and protect professional standing.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e6e8ec] p-6 bg-[#f8fafc] shadow-sm hover:border-[#d9a52b] transition-colors flex flex-col h-full">
              <h3 className="text-[17px] font-bold text-[#0a192f] mb-3 leading-snug">
                Germany
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                Strict personality rights and data-protection routes prohibit unauthorized publication of booking photos, offering legal grounds for takedowns and delisting.
              </p>
            </div>
          </div>

          <p className="text-[13px] text-gray-500 max-w-[70ch] italic">
            Remedies vary by region, and outcomes depend on documentation and publisher cooperation. We do not claim or guarantee outcomes.
          </p>
        </div>
      </section>

      {/* 6. What You Can Expect (Light Gray) */}
      <section className="w-full bg-[#f8fafc] border-b border-slate-200/60 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#b8860b] uppercase tracking-[2px] block mb-2">Honest Scope</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] tracking-tight mb-6">
              What You Can Expect
            </h2>

            <div className="space-y-6 text-[15px] sm:text-[16px] text-[#374151] leading-relaxed">
              <p>
                RepuKeel provides an honest scope of what can be accomplished. Outcomes depend on the site, the jurisdiction, and the specific case facts. Because publishers and search engines act independently, we make no guarantees and assess each case realistically before starting.
              </p>
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <h3 className="text-[16px] font-bold text-[#0a192f] mb-2">
                  Why We Never Recommend Paying Mugshot Websites
                </h3>
                <p className="text-[14px] text-amber-950 leading-relaxed">
                  Never pay pay-to-remove mugshot websites. Paying these publishers fuels predatory practices and signals that you will pay, which frequently triggers identical republishing on affiliated mirror sites under new domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Related Services (White) */}
      <section className="w-full bg-white border-b border-gray-100 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#b8860b] uppercase tracking-[2px] block mb-2">Complementary Solutions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] tracking-tight">
              Related Services
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#374151] mt-2 max-w-[70ch]">
              Mugshot removal is often part of a broader reputation recovery strategy. Related services include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/search-result-cleanup/news-article-removal"
              className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] hover:shadow-md transition-all group block h-full flex flex-col no-underline focus:outline-none focus:ring-2 focus:ring-[#20409a]"
            >
              <h3 className="text-[17px] font-bold text-[#0a192f] group-hover:text-[#20409a] transition-colors mb-2">
                News article removal
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                Addressing sensationalist press coverage and historical crime reports.
              </p>
            </Link>

            <Link
              href="/job-reputation/background-check-cleanup"
              className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] hover:shadow-md transition-all group block h-full flex flex-col no-underline focus:outline-none focus:ring-2 focus:ring-[#20409a]"
            >
              <h3 className="text-[17px] font-bold text-[#0a192f] group-hover:text-[#20409a] transition-colors mb-2">
                Background check cleanup
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                Resolving outdated public records that impact employment and career opportunities.
              </p>
            </Link>

            <Link
              href="/reputation-audit/personal-reputation-audit"
              className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] hover:shadow-md transition-all group block h-full flex flex-col no-underline focus:outline-none focus:ring-2 focus:ring-[#20409a]"
            >
              <h3 className="text-[17px] font-bold text-[#0a192f] group-hover:text-[#20409a] transition-colors mb-2">
                Personal reputation audit
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                Comprehensive scanning across search engines, data brokers, and public databases.
              </p>
            </Link>

            <Link
              href="/reputation-management/search-cleanup"
              className="rounded-2xl border border-[#e6e8ec] p-6 bg-white shadow-sm hover:border-[#d9a52b] hover:shadow-md transition-all group block h-full flex flex-col no-underline focus:outline-none focus:ring-2 focus:ring-[#20409a]"
            >
              <h3 className="text-[17px] font-bold text-[#0a192f] group-hover:text-[#20409a] transition-colors mb-2">
                Search cleanup
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                Full-scale search engine optimization to restore balanced, positive search results.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CTA Block 1 (above FAQ) */}
      <section className="w-full bg-[#0a192f] text-white py-14 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d9a52b] uppercase tracking-[2px] block mb-2">
              Confidential Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
              Request a confidential case review
            </h2>
            <p className="text-slate-300 text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-[70ch]">
              Consult discreetly with our reputation specialists to evaluate your case and review available takedown and suppression strategies.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/request-free-analysis"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#d9a52b] via-[#e5b94c] to-[#d9a52b] text-[#0a192f] shadow-md hover:shadow-lg hover:brightness-105 transition-all min-h-[48px] focus:outline-none focus:ring-2 focus:ring-white"
              >
                Request a confidential case review
              </Link>
              <a
                href="https://wa.me/923087525510"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#d9a52b]"
              >
                <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp +92 308 752 5510
              </a>
            </div>

            <p className="text-[13px] text-slate-400 mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              24/7 support line available for urgent privacy and executive protection cases.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Mugshot Removal Service FAQ (Light Gray) */}
      <section className="w-full bg-[#f8fafc] border-b border-slate-200/60 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#b8860b] uppercase tracking-[2px] block mb-2">Common Questions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] tracking-tight">
              Mugshot Removal Service FAQ
            </h2>
          </div>

          <div className="max-w-3xl space-y-4">
            {/* FAQ 1 */}
            <details className="group border border-[#e6e8ec] rounded-2xl bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#20409a] rounded">
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0a192f] pr-4">
                  How does a mugshot removal service work?
                </h3>
                <span className="ml-4 shrink-0 rounded-full border border-gray-200 p-1.5 text-gray-700 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-[15px] sm:text-[16px] text-[#374151] leading-relaxed max-w-[70ch]">
                A mugshot removal service identifies all websites hosting your booking photograph and assesses the strongest removal path under state law, hosting terms, or privacy regulations. We submit formal takedown demands to site operators and de-indexing requests to Google, deploying search suppression if a publisher fails to cooperate.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group border border-[#e6e8ec] rounded-2xl bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#20409a] rounded">
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0a192f] pr-4">
                  Can a mugshot be removed if charges were dropped or expunged?
                </h3>
                <span className="ml-4 shrink-0 rounded-full border border-gray-200 p-1.5 text-gray-700 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-[15px] sm:text-[16px] text-[#374151] leading-relaxed max-w-[70ch]">
                Yes, dropped charges, dismissals, and expungements provide strong statutory grounds for takedown across numerous jurisdictions. Many state laws require mugshot publishers to delete arrest photos without fee once certified court records are submitted.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group border border-[#e6e8ec] rounded-2xl bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#20409a] rounded">
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0a192f] pr-4">
                  What if the site refuses to remove it?
                </h3>
                <span className="ml-4 shrink-0 rounded-full border border-gray-200 p-1.5 text-gray-700 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-[15px] sm:text-[16px] text-[#374151] leading-relaxed max-w-[70ch]">
                When a publisher operates offshore or refuses to comply, we pivot to search de-indexing and suppression strategies. We petition Google for delisting where policy permits and build authoritative web assets to displace the offending URL from the first page of search results.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group border border-[#e6e8ec] rounded-2xl bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#20409a] rounded">
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0a192f] pr-4">
                  Should I pay a mugshot website to remove my photo?
                </h3>
                <span className="ml-4 shrink-0 rounded-full border border-gray-200 p-1.5 text-gray-700 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-[15px] sm:text-[16px] text-[#374151] leading-relaxed max-w-[70ch]">
                No, paying a mugshot website is never recommended under any circumstances. Paying commercial operators validates their extortion model and signals financial vulnerability, which frequently causes affiliated mirror sites to republish the image for additional fees.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group border border-[#e6e8ec] rounded-2xl bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#20409a] rounded">
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0a192f] pr-4">
                  How long does mugshot removal take?
                </h3>
                <span className="ml-4 shrink-0 rounded-full border border-gray-200 p-1.5 text-gray-700 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-[15px] sm:text-[16px] text-[#374151] leading-relaxed max-w-[70ch]">
                Timelines depend on publisher responsiveness, jurisdiction, and whether search suppression is required alongside direct takedowns. While cooperative sites and Google de-indexing can resolve within days, non-compliant publishers or broader suppression campaigns can take several weeks or months.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group border border-[#e6e8ec] rounded-2xl bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#20409a] rounded">
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0a192f] pr-4">
                  Is the process confidential?
                </h3>
                <span className="ml-4 shrink-0 rounded-full border border-gray-200 p-1.5 text-gray-700 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-[15px] sm:text-[16px] text-[#374151] leading-relaxed max-w-[70ch]">
                Yes, every case review and takedown campaign is conducted under strict confidentiality and non-disclosure standards. Communications with platforms, webmasters, and search engines are executed discreetly to prevent unwanted public exposure.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 10. Bottom CTA Block */}
      <section className="w-full bg-[#0a192f] text-white py-14 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d9a52b] uppercase tracking-[2px] block mb-2">
              Get Started Confidentially
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
              Request a confidential case review
            </h2>
            <p className="text-slate-300 text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-[70ch]">
              Take back control of your search results. Speak with our reputation specialists today about discreet takedown and suppression strategies.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/request-free-analysis"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#d9a52b] via-[#e5b94c] to-[#d9a52b] text-[#0a192f] shadow-md hover:shadow-lg hover:brightness-105 transition-all min-h-[48px] focus:outline-none focus:ring-2 focus:ring-white"
              >
                Request a confidential case review
              </Link>
              <a
                href="https://wa.me/923087525510"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#d9a52b]"
              >
                <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp +92 308 752 5510
              </a>
            </div>

            <p className="text-[13px] text-slate-400 mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              24/7 support line available for urgent privacy and executive protection cases.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Related Guides & Insights (White) */}
      {relatedBlogs && relatedBlogs.length > 0 && (
        <section className="border-t border-gray-200 py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-[#b8860b] uppercase tracking-[2px] block mb-1">Expert Advice</span>
                <h2 className="text-2xl font-extrabold text-[#0a192f]">Related Guides &amp; Insights</h2>
              </div>
              <Link href="/blogs" className="text-sm font-bold text-[#20409a] hover:text-[#d4af37] transition-colors hidden sm:block">
                View all articles &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((b) => (
                <Link
                  key={b.slug}
                  href={`/blogs/${b.slug}`}
                  className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 hover:border-[#e0ac2f] hover:shadow-md transition-all group block no-underline focus:outline-none focus:ring-2 focus:ring-[#20409a]"
                >
                  <span className="text-xs font-bold text-[#b8860b] uppercase tracking-wider block mb-2">{b.category}</span>
                  <h3 className="text-[15px] font-bold text-[#0a192f] mb-2 group-hover:text-[#20409a] transition-colors line-clamp-2">
                    {b.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 line-clamp-2">{b.meta}</p>
                  <span className="text-[12px] font-bold text-[#20409a] group-hover:text-[#d4af37] transition-colors mt-4 inline-block">
                    Read guide &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
