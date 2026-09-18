import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a152e] text-[var(--text-on-navy)] font-['Poppins']">
      <div className="max-w-[1280px] mx-auto px-8 pt-20 pb-10">

        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-16 border-b border-white/10 pb-16">

          {/* Column 1: Brand & Status */}
          <div className="flex flex-col gap-8">

            <Link href="/" className="flex items-center gap-4">
              <div className="w-[56px] h-[56px] bg-[#d4af37] rounded-[14px] flex items-center justify-center shadow-lg shadow-[#d4af37]/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  className="w-[32px] h-[32px]"
                >
                  <path
                    d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex flex-col justify-center">
                <span className="font-[900] text-[28px] tracking-tight text-white leading-none mb-1">
                  Repukeel
                </span>

                <span className="text-[13px] font-[500] text-[#c8d0e7] leading-snug">
                  Online Reputation Management and
                  <br />
                  Brand Protection Solutions
                </span>
              </div>
            </Link>

            {/* System Status */}
            <div className="bg-[#121c36] rounded-[14px] p-4 border border-white/5 shadow-sm inline-flex flex-col gap-1 w-max">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-green-500 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3"
                    className="w-2.5 h-2.5"
                  >
                    <path
                      d="M5 12l5 5L20 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <span className="text-[14px] font-[600] text-[#22c55e]">
                  All systems operational
                </span>
              </div>

              <span className="text-[12px] text-gray-400">
                24/7 monitoring & protection active
              </span>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-[14px] font-[600] text-white mb-4">
                Connect With Us
              </p>

              <div className="flex items-center gap-4">
                {[
                  {
                    name: 'facebook',
                    url: 'https://www.facebook.com/RepuKeel/',
                    icon: (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    ),
                  },
                  {
                    name: 'twitter',
                    url: 'https://x.com/Repukeel',
                    icon: (
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    ),
                  },
                  {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/in/repu-keel-118157438',
                    icon: (
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                    ),
                  },
                  {
                    name: 'instagram',
                    url: 'https://www.instagram.com/repukeel/',
                    icon: (
                      <path d="M17 2H7A5 5 0 0 0 2 7v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" />
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-[10px] bg-[#121c36] hover:bg-[var(--gold)] hover:text-[#0a152e] transition-colors flex items-center justify-center text-gray-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Brand Protection Solutions */}
          <div>
            <h4
              className="text-[17px] font-[700] mb-6"
              style={{ color: '#d4af37' }}
            >
              Brand Protection Solutions
            </h4>

            <ul className="flex flex-col gap-4 text-[14px] text-gray-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Intellectual Property Protection
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  AI Brand Monitoring
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Trademark Monitoring
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Impersonation Protection
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Anti-Counterfeiting Solutions
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Online Reputation Management (ORM)
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Application Protection
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Anti-Piracy Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Content Protection Solutions */}
          <div>
            <h4
              className="text-[17px] font-[700] mb-6"
              style={{ color: '#d4af37' }}
            >
              Content Protection Solutions
            </h4>

            <ul className="flex flex-col gap-4 text-[14px] text-gray-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Copyright Protection
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  DMCA Takedown Service
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Leaked Content Removal
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Adult Content Protection
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Article & Blog Removal
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Search Engine De-Indexing
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Social Media Content Removal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Use Cases */}
          <div>
            <h4
              className="text-[17px] font-[700] mb-6"
              style={{ color: '#d4af37' }}
            >
              Use Cases
            </h4>

            <ul className="flex flex-col gap-4 text-[14px] text-gray-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Remove Leaked OnlyFans Content
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Remove Leaked Private Content
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Brand Defamation Removal
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Fake Profile & Impersonation Removal
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  e-Learning Content Protection
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Copyright Image & Video Removal
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Negative Article Removal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mb-16">

          {/* Contact */}
          <div>
            <h4
              className="text-[17px] font-[700] mb-6 border-b border-white/10 pb-4"
              style={{ color: '#d4af37' }}
            >
              Contact
            </h4>

            <ul className="flex flex-col gap-5 text-[14px] text-gray-300">

              {/* Headquarters */}
              <li className="flex items-start flex-col gap-1">
                <span className="font-[600] text-white">
                  Headquarters:
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[var(--gold)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-5 h-5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>

                  <span>
                    P33H+GVV, G-7/4, Islamabad, Pakistan
                  </span>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start flex-col gap-1">
                <span className="font-[600] text-white">
                  Email:
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-5 h-5"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        ry="2"
                      />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>

                  <a
                    href="mailto:legalrepukeel@gmail.com"
                    className="hover:text-[var(--gold)] transition-colors"
                  >
                    legalrepukeel@gmail.com
                  </a>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start flex-col gap-1">
                <span className="font-[600] text-white">
                  Phone:
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-400">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>

                  <a
                    href="https://wa.me/923451644916"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--gold)] transition-colors"
                  >
                    +923451644916
                  </a>
                </div>
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[17px] font-[700] mb-6 border-b border-white/10 pb-4"
              style={{ color: '#d4af37' }}
            >
              Quick Links
            </h4>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-[14px] text-gray-300">
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>

              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>

              <Link href="/clients" className="hover:text-white transition-colors">
                Our Clients
              </Link>

              <Link
                href="/request-free-analysis"
                className="hover:text-white transition-colors"
              >
                Request Free Analysis
              </Link>

              <Link
                href="/case-studies"
                className="hover:text-white transition-colors"
              >
                Case Studies
              </Link>

              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/blogs"
                className="hover:text-white transition-colors"
              >
                Blog
              </Link>

              <Link
                href="/terms-conditions"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* 24/7 Emergency Strip */}
        <div className="w-full bg-[#121c36] rounded-[16px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12 shadow-lg">

          <div>
            <h3 className="text-[20px] font-[700] text-white mb-2">
              24/7 Emergency DMCA Support
            </h3>

            <p className="text-[15px] text-gray-400">
              Need immediate takedown assistance? Our legal team is available around the clock.
            </p>
          </div>

          {/* Contact Us Button */}
          <div className="relative group">

            <button
              type="button"
              className="bg-[var(--gold)] hover:bg-[#c19b2e] text-[#0a152e] font-[700] text-[15px] rounded-[12px] px-6 py-4 flex items-center gap-2 transition-colors whitespace-nowrap"
              aria-haspopup="true"
            >

              {/* Message Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              Contact Us Now

              {/* Arrow */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
              >
                <path
                  d="m6 9 6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Contact Options Popup */}
            <div className="absolute right-0 bottom-full mb-3 w-[220px] rounded-[12px] bg-[#121c36] border border-white/10 p-2 shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200 z-50">

              {/* Gmail / Email */}
              <a
                href="mailto:legalrepukeel@gmail.com"
                className="flex items-center gap-3 rounded-[9px] px-4 py-3 text-[14px] font-[600] text-white hover:bg-[#0a152e] hover:text-[var(--gold)] transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 shrink-0"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    ry="2"
                  />
                  <path d="M3 7l9 6 9-6" />
                </svg>

                <span>Email / Gmail</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923451644916"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-[9px] px-4 py-3 text-[14px] font-[600] text-white hover:bg-[#0a152e] hover:text-[var(--gold)] transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 shrink-0"
                >
                  <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7c1.7.9 3.5 1.3 5.4 1.3 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3z" />

                  <path
                    d="M17.2 13.9c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.9 4.3.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>

                <span>WhatsApp</span>
              </a>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[13px] text-gray-400 flex flex-col gap-2 items-center justify-center">

          <p>
            RepuKeel - Online Reputation Management company. All Right Reserved
          </p>

          <p>
            Professional Reputation Management Service and Digital Brand Protection
          </p>

          <div className="flex gap-4 mt-2">

            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <span className="text-gray-600">|</span>

            <Link
              href="/terms-conditions"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}