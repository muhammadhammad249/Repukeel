'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function FooterContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    // Also support touch events for better mobile experience
    document.addEventListener('touchstart', (e) => handleClickOutside(e as unknown as MouseEvent));
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', (e) => handleClickOutside(e as unknown as MouseEvent));
    };
  }, []);

  return (
    <div className="relative inline-flex items-center rounded-[12px] bg-[var(--gold)] shadow-md hover:bg-[#c19b2e] transition-colors" ref={containerRef}>
      <Link
        href="/contact"
        className="text-[#0a152e] font-[700] text-[15px] py-4 pl-6 pr-3 flex items-center gap-2 whitespace-nowrap"
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
      </Link>

      {/* Arrow Toggle */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle quick contact options"
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="text-[#0a152e] py-4 pr-4 pl-1 hover:opacity-80 transition-opacity border-l border-[#0a152e]/20"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            d="m6 9 6 6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Contact Options Popup */}
      <div className={`absolute right-0 bottom-full mb-3 w-[220px] rounded-[12px] bg-[#121c36] border border-white/10 p-2 shadow-xl transition-all duration-200 z-50 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2 pointer-events-none'}`}>
        {/* Gmail / Email */}
        <a
          href="mailto:Legal@Repukeel.com"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 rounded-[9px] px-4 py-3 text-[14px] font-[600] text-white hover:bg-[#0a152e] hover:text-[var(--gold)] transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5 shrink-0"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          <span>Email / Gmail</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/923087525510"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 rounded-[9px] px-4 py-3 text-[14px] font-[600] text-white hover:bg-[#0a152e] hover:text-[var(--gold)] transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5 shrink-0"
          >
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

