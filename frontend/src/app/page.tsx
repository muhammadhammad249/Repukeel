"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Chatbot from './components/Chatbot';
import ThemeToggle from './components/ThemeToggle';
import AccountMenu from './components/AccountMenu';

const SERVICES = [
  { icon: 'M13 2L3 14h7l-1 8 11-14h-7l1-6z', title: 'AI-Powered Infringement Monitoring', desc: 'Our AI engine continuously scans the web in real time to detect unauthorized use of your content before it spreads.' },
  { icon: 'M3 3h18v18H3zM3 9h18M9 3v18', title: 'Website Copyright Protection', desc: 'Identify scraped, copied, or republished content on unauthorized third-party websites and take swift legal action.' },
  { icon: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.35-4.35', title: 'Search Engine Removal (DMCA & De-Indexing)', desc: 'Remove infringing URLs from Google, Bing, and all major search engines through legally compliant de-indexing requests.' },
  { icon: 'M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM18 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98', title: 'Social Media Content Protection', desc: 'Enforce your rights on Instagram, Facebook, TikTok, YouTube, Twitter/X, and Pinterest with platform-level takedowns.' },
  { icon: 'M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z', title: 'Brand Protection & AI Monitoring', desc: 'Protect your brand from logo misuse, domain squatting, and reputation attacks using AI-driven brand-threat intelligence.' },
  { icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', title: 'Impersonation Protection', desc: 'Detect and remove fake accounts, impostor profiles, and fraudulent pages impersonating you or your brand across every platform.' },
  { icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6', title: 'Content & Article Removal', desc: 'Take down plagiarized blog posts, scraped articles, and copied written content from any website or publication quickly.' },
  { icon: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4', title: 'Leaked Content Protection', desc: 'Emergency removal of leaked private or premium content from all platforms with around-the-clock priority action.' },
  { icon: 'M18 20V10M12 20V4M6 20v-6', title: 'Online Reputation Management (ORM)', desc: 'Suppress harmful content, false narratives, and damaging mentions so positive results dominate your search presence.' },
  { icon: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z', title: 'Continuous Monitoring (Free Trial)', desc: 'Automated 24/7 surveillance that instantly alerts you the moment new infringement of your content is detected online.' },
  { icon: 'M12 2v20M5 7l-3 6a3.5 3.5 0 0 0 7 0l-3-6zM19 7l-3 6a3.5 3.5 0 0 0 7 0l-3-6zM5 7h14M8 3h8', title: 'Legal Support & Case Evaluation', desc: 'Receive a free legal assessment of your infringement case and expert escalation support when DMCA notices alone are not enough.' },
  { icon: 'M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12 18h.01', title: 'Application Protection', desc: 'Identify and shut down pirated clones, cracked builds, and unauthorized redistributions of your software or mobile apps.' },
  { icon: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71', title: 'Trademark Monitoring', desc: 'Monitor the web for unauthorized use of your registered trademarks across domains, social media, and online marketplaces.' },
  { icon: 'M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4zM9 12.5l2 2 4-4', title: 'Anti-Counterfeiting Protection', desc: 'Identify and eliminate counterfeit product listings on Amazon, eBay, Alibaba, and other e-commerce marketplaces globally.' },
];

export default function DMCAHomepage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    const handleResize = () => {
      if (window.innerWidth > 900) setDrawerOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawerOpen]);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ============================================
           CSS VARIABLES
        ============================================ */
        :root {
          --bg-deepest:  #FFFFFF;
          --bg-dark:     #F8FAFC;
          --bg-mid:      #F8FAFC;
          --bg-card:     #FFFFFF;
          --border:      #E2E8F0;
          --gold:        #2563EB;
          --gold-lt:     #1D4ED8;
          --text:        #111827;
          --muted:       #64748B;
          --green:       #22c55e;
          --blue:        #2563EB;
          --red:         #d4453f;
          --radius-sm:   8px;
          --radius-md:   12px;
          --radius-lg:   16px;
          --max-w:       1280px;
        }
        html[data-theme='dark'] {
          --bg-deepest: #080e1c;
          --bg-dark: #0c1526;
          --bg-mid: #16223c;
          --bg-card: #16223c;
          --border: #22304d;
          --gold: #e0ac2f;
          --gold-lt: #f6cd5c;
          --text: #f4f6fb;
          --muted: #a9b3c9;
        }

        html { scroll-behavior: smooth; }
        body {
          font-family: 'Poppins', sans-serif;
          background: #FFFFFF !important;
          color: #111827 !important;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }
        html[data-theme='dark'] body { background: #080e1c !important; color: #f4f6fb !important; }

        /* ============================================
           UTILITY
        ============================================ */
        .container { max-width: var(--max-w); margin: 0 auto; padding: 0 28px; }
        .gold { color: var(--gold); }

        /* Buttons */
        .btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: var(--radius-sm);
          font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600;
          cursor: pointer; border: none; transition: transform .18s ease, box-shadow .18s ease;
          text-decoration: none; white-space: nowrap;
        }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.35); }
        .btn-blue   { background: var(--blue); color: #fff; }
        .btn-blue:hover { background: #1D4ED8; }
        .btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
        .btn-outline:hover { border-color: var(--gold); color: var(--gold); }
        .btn-gold   { background: var(--gold); color: #12100a; }
        .btn-gold:hover { background: var(--gold-lt); }
        .btn-dark   { background: var(--bg-card); color: var(--text); border: 1.5px solid var(--border); }
        .btn-dark:hover { border-color: var(--gold); }
        .btn-sm { padding: 9px 18px; font-size: 13px; }

        /* Section spacing */
        .section { padding: 88px 0; }
        .section-kicker {
          font-size: 12px; font-weight: 700; color: var(--gold);
          text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;
        }
        .section-h2 { font-size: clamp(26px, 3.5vw, 36px); font-weight: 800; line-height: 1.22; }
        .section-sub { font-size: 15px; color: var(--muted); line-height: 1.75; max-width: 620px; }

        /* ============================================
           SECTION 1 — HEADER
        ============================================ */
        #header {
          position: sticky; top: 0; z-index: 1000;
          background: #2563EB;
          border-bottom: 1px solid #1D4ED8;
          padding: 0 28px;
        }
        .header-inner {
          max-width: var(--max-w); margin: 0 auto;
          height: 68px;
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
        }

        /* Logo */
        .logo { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .logo-icon-wrap {
          width: 42px; height: 42px;
          background: #FFFFFF; border-radius: var(--radius-sm);
          display: flex; align-items: center; justify-content: center;
        }
        .logo-icon-wrap svg { width: 22px; height: 22px; }
        .logo-text-wrap { line-height: 1.2; }
        .logo-text-wrap .brand { font-size: 15px; font-weight: 800; color: #FFFFFF; letter-spacing: .6px; display: block; }
        .logo-text-wrap .sub   { font-size: 10px; font-weight: 500; color: #DBEAFE; text-transform: uppercase; letter-spacing: 1.4px; display: block; }

        /* Nav */
        .main-nav { display: flex; align-items: center; gap: 2px; }
        .main-nav a {
          font-size: 13px; font-weight: 500; color: #FFFFFF;
          padding: 7px 13px; border-radius: 6px;
          transition: color .15s, background .15s;
          white-space: nowrap;
        }
        .main-nav a:hover { color: #DBEAFE; }
        .main-nav a.active {
          color: #FFFFFF; font-weight: 700;
          border-bottom: 2.5px solid #FFFFFF;
          border-radius: 0;
        }
        .nav-pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: #1D4ED8; color: #FFFFFF !important;
          font-weight: 700 !important; font-size: 13px !important;
          padding: 6px 14px !important; border-radius: 20px !important;
          border: none !important;
        }
        .nav-pill svg { width: 12px; height: 12px; }

        /* Header right */
        .header-right { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
        .icon-btn {
          background: none; border: none; cursor: pointer; padding: 6px;
          color: #FFFFFF; border-radius: 6px; transition: color .15s;
          display: flex; align-items: center;
        }
        .icon-btn:hover { color: var(--gold); }
        .icon-btn svg { width: 20px; height: 20px; }
        .login-link { font-size: 13px; font-weight: 600; color: #FFFFFF; }
        .login-link:hover { color: #DBEAFE; }
        .home-account-menu { position: relative; }
        .account-avatar { width: 34px; height: 34px; border-radius: 50%; border: 2px solid #BFDBFE; background: #1D4ED8; color: #FFFFFF; font: 700 12px 'Poppins', sans-serif; cursor: pointer; }
        .account-avatar:hover, .account-avatar:focus-visible { background: #2563EB; outline: none; box-shadow: 0 0 0 3px rgba(191,219,254,.45); }
        .account-menu-overlay { position: fixed; inset: 0; z-index: 1000; border: 0; background: transparent; cursor: default; }
        .account-dropdown { position: absolute; right: 0; top: 43px; z-index: 1001; min-width: 180px; padding: 8px; border: 1px solid #BFDBFE; border-radius: 10px; background: #FFFFFF; box-shadow: 0 12px 28px rgba(0,0,0,.2); }
        .account-name { overflow: hidden; margin: 2px 8px 7px; color: #1E3A8A; font-size: 12px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
        .account-dropdown button[role="menuitem"] { width: 100%; border: 0; border-radius: 6px; background: transparent; padding: 8px; color: #DC2626; cursor: pointer; font: 600 13px 'Poppins', sans-serif; text-align: left; }
        .account-dropdown button[role="menuitem"]:hover { background: #FEF2F2; }

        /* Hamburger (mobile) */
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .hamburger span { width: 22px; height: 2px; background: #FFFFFF; border-radius: 2px; }

        /* Mobile drawer */
        .mobile-drawer {
          display: none; position: fixed; inset: 0;
          background: rgba(37,99,235,.97); z-index: 2000;
          flex-direction: column; align-items: center; justify-content: center; gap: 18px;
        }
        .mobile-drawer.open { display: flex; }
        .mobile-drawer a { font-size: 20px; font-weight: 600; color: var(--text); }
        .mobile-drawer a:hover { color: var(--gold); }
        .drawer-close {
          position: absolute; top: 22px; right: 28px;
          background: none; border: none; color: var(--text);
          font-size: 30px; cursor: pointer; line-height: 1;
        }

        /* ============================================
           SECTION 2 — HERO
        ============================================ */
        #hero {
          background: var(--bg-dark);
          background-image: radial-gradient(ellipse 65% 55% at 68% 15%, rgba(59,111,224,.22) 0%, transparent 65%),
                            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(224,172,47,.07) 0%, transparent 70%);
          padding: 78px 28px 80px;
        }
        .hero-grid {
          max-width: var(--max-w); margin: 0 auto;
          display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 56px; align-items: center;
        }

        /* Left */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(224,172,47,.1); border: 1px solid rgba(224,172,47,.3);
          color: var(--gold); font-size: 13px; font-weight: 600;
          padding: 7px 18px; border-radius: 30px; margin-bottom: 28px;
        }
        .hero-h1 {
          font-size: clamp(38px, 5.2vw, 58px);
          font-weight: 800; line-height: 1.1; letter-spacing: -.5px;
          margin-bottom: 24px;
        }
        .hero-h1 .hero-gold { color: var(--gold); }
        .hero-para {
          font-size: 15px; color: var(--muted); line-height: 1.8;
          max-width: 510px; margin-bottom: 36px;
        }
        .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 32px; }
        .trust-pills { display: flex; flex-wrap: wrap; gap: 10px; }
        .trust-pill {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 500; color: var(--muted);
          background: rgba(255,255,255,.04); border: 1px solid var(--border);
          padding: 7px 15px; border-radius: 30px;
        }
        .trust-pill .ck { color: var(--green); font-size: 12px; font-weight: 700; }

        /* Right art */
        .hero-art { position: relative; height: 480px; }
        .shield-card {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 280px; height: 295px;
          background: linear-gradient(145deg, #16223c, #0d1829);
          border: 1.5px solid var(--border); border-radius: var(--radius-lg);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 80px rgba(224,172,47,.1), 0 24px 60px rgba(0,0,0,.4);
        }
        .shield-card svg { width: 120px; height: 120px; color: var(--gold); }

        .f-badge {
          position: absolute; border-radius: var(--radius-md);
          padding: 14px 18px; font-weight: 700; text-align: center;
          box-shadow: 0 12px 32px rgba(0,0,0,.45); white-space: nowrap;
        }
        .f-gold  { background: var(--gold);  color: #12100a; top:  9%;  right: 4%;  font-size: 13px; }
        .f-blue  { background: var(--blue);  color: #fff;    bottom: 32%; right: -2%; font-size: 13px; }
        .f-green { background: var(--green); color: #fff;    bottom: 4%; left: 12%;  font-size: 13px; }
        .f-badge .fb-num  { font-size: 22px; font-weight: 800; display: block; line-height: 1.1; }
        .f-badge .fb-lbl  { font-size: 11px; font-weight: 500; display: block; margin-top: 2px; opacity: .85; }

        .scroll-hint {
          position: absolute; bottom: 0; right: 0;
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          font-size: 11px; color: var(--muted); font-weight: 500;
        }
        .scroll-mouse {
          width: 20px; height: 32px;
          border: 2px solid rgba(169,179,201,.4); border-radius: 10px;
          display: flex; align-items: flex-start; justify-content: center; padding-top: 5px;
        }
        .scroll-dot {
          width: 3px; height: 7px; background: var(--gold); border-radius: 3px;
          animation: scrollDown 1.6s ease-in-out infinite;
        }
        @keyframes scrollDown {
          0%   { transform: translateY(0);   opacity: 1; }
          60%  { transform: translateY(8px); opacity: .2; }
          100% { transform: translateY(0);   opacity: 1; }
        }

        /* ============================================
           SECTION 3 — STATS BAR
        ============================================ */
        #stats-bar {
          background: var(--bg-mid);
          border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          padding: 48px 28px;
        }
        .stats-grid {
          max-width: var(--max-w); margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 20px; text-align: center;
        }
        .stat-col { padding: 10px; }
        .stat-big { font-size: 38px; font-weight: 800; color: var(--gold); line-height: 1; }
        .stat-lbl { font-size: 13px; color: var(--muted); margin-top: 7px; font-weight: 500; }

        /* ============================================
           SECTION 4 — SERVICE INTRO
        ============================================ */
        #service-intro { background: var(--bg-dark); padding: 88px 28px; }
        .intro-grid {
          max-width: var(--max-w); margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start;
        }

        /* Left */
        .intro-h2 { font-size: clamp(26px, 3vw, 34px); font-weight: 800; line-height: 1.25; margin-bottom: 14px; }
        .gold-bar  { width: 56px; height: 4px; background: var(--gold); border-radius: 2px; margin-bottom: 22px; }
        .intro-para { font-size: 14px; color: var(--muted); line-height: 1.8; margin-bottom: 14px; }
        .feat-list { margin: 28px 0 36px; display: flex; flex-direction: column; gap: 22px; }
        .feat-item { display: flex; gap: 14px; align-items: flex-start; }
        .feat-icon {
          width: 42px; height: 42px; flex-shrink: 0;
          background: rgba(224,172,47,.1); border: 1px solid rgba(224,172,47,.2);
          border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center;
        }
        .feat-icon svg { width: 18px; height: 18px; color: var(--gold); }
        .feat-title { font-size: 15px; font-weight: 700; margin-bottom: 3px; }
        .feat-desc  { font-size: 13px; color: var(--muted); line-height: 1.6; }

        /* Right */
        .sc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 22px; }
        .sc-card {
          background: linear-gradient(145deg, #1a2e55, #0f1e3a);
          border: 1px solid var(--border); border-radius: var(--radius-md);
          padding: 28px 20px; text-align: center;
          transition: border-color .2s;
        }
        .sc-card:hover { border-color: var(--gold); }
        .sc-card svg { width: 22px; height: 22px; color: var(--gold); margin-bottom: 12px; display:inline-block;}
        .sc-num { font-size: 30px; font-weight: 800; color: var(--text); line-height: 1; }
        .sc-lbl { font-size: 12px; color: var(--muted); margin-top: 6px; line-height: 1.4; }
        .quote-box {
          background: var(--bg-card); border: 1px solid var(--border);
          border-left: 4px solid var(--red); border-radius: var(--radius-md);
          padding: 22px 22px 22px 24px;
        }
        .quote-box blockquote { font-style: italic; color: #d6dce8; font-size: 14px; line-height: 1.75; margin-bottom: 14px; }
        .quote-who  { font-size: 13px; font-weight: 700; }
        .quote-role { font-size: 12px; color: var(--muted); margin-top: 2px; }

        /* ============================================
           SECTION 5 — SERVICES
        ============================================ */
        #services { background: var(--bg-deepest); padding: 88px 28px; }
        .services-head { text-align: center; max-width: 700px; margin: 0 auto 54px; }
        .services-head .section-h2 { margin: 10px 0 14px; }

        .svc-grid {
          max-width: var(--max-w); margin: 0 auto 48px;
          display: grid; grid-template-columns: repeat(5, 1fr); gap: 18px;
        }
        .svc-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-md); padding: 26px 20px;
          transition: border-color .22s, transform .22s, box-shadow .22s; cursor: default;
        }
        .svc-card:hover { border-color: var(--gold); transform: translateY(-3px); box-shadow: 0 14px 36px rgba(224,172,47,.09); }
        .svc-icon {
          width: 46px; height: 46px;
          background: rgba(224,172,47,.09); border: 1px solid rgba(224,172,47,.22);
          border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .svc-icon svg { width: 21px; height: 21px; color: var(--gold); }
        .svc-card h4 { font-size: 13px; font-weight: 700; margin-bottom: 8px; line-height: 1.4; }
        .svc-card p  { font-size: 12px; color: var(--muted); line-height: 1.65; }

        .services-ctas { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 40px; }

        /* Review card */
        .review-card {
          max-width: 820px; margin: 0 auto;
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-md); padding: 24px 30px;
          display: flex; align-items: center; gap: 22px; flex-wrap: wrap;
        }
        .review-stars { color: var(--green); font-size: 20px; letter-spacing: 2px; }
        .review-score { font-size: 26px; font-weight: 800; line-height: 1; }
        .review-count { font-size: 12px; color: var(--muted); margin-top: 4px; }
        .review-div   { width: 1px; align-self: stretch; background: var(--border); flex-shrink: 0; }
        .review-src   { font-size: 14px; font-weight: 700; }
        .review-sub   { font-size: 12px; color: var(--muted); margin-top: 3px; }
        .review-desc  { flex: 1; font-size: 13px; color: var(--muted); line-height: 1.65; min-width: 160px; }
        .review-btn-wrap { margin-left: auto; }

        /* ============================================
           SECTION 6 — WHY CHOOSE US
        ============================================ */
        #why-us { background: var(--bg-mid); padding: 88px 28px; }
        .why-grid {
          max-width: var(--max-w); margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start;
        }
        .why-h2 { font-size: clamp(22px, 2.8vw, 30px); font-weight: 800; line-height: 1.28; margin: 10px 0 30px; }
        .why-features { display: flex; flex-direction: column; gap: 16px; }
        .why-feat {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-md); padding: 20px 20px 20px 18px;
          display: flex; gap: 14px; align-items: flex-start;
          transition: border-color .2s;
        }
        .why-feat:hover { border-color: var(--gold); }
        .why-feat-icon {
          width: 40px; height: 40px; flex-shrink: 0;
          background: rgba(224,172,47,.1); border-radius: var(--radius-sm);
          display: flex; align-items: center; justify-content: center;
        }
        .why-feat-icon svg { width: 18px; height: 18px; color: var(--gold); }
        .why-feat h4 { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
        .why-feat p  { font-size: 13px; color: var(--muted); line-height: 1.6; }

        .why-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .ws-card {
          background: linear-gradient(145deg, #1a2e55, #0f1e3a);
          border: 1px solid var(--border); border-radius: var(--radius-md);
          padding: 30px 20px; text-align: center;
          transition: border-color .2s;
        }
        .ws-card:hover { border-color: var(--gold); }
        .ws-num { font-size: 32px; font-weight: 800; color: var(--gold); line-height: 1; }
        .ws-lbl { font-size: 12px; color: var(--muted); margin-top: 7px; line-height: 1.4; }

        /* ============================================
           SECTION 7 — FOOTER
        ============================================ */
        #footer { background: var(--bg-dark); border-top: 1px solid var(--border); padding: 72px 28px 0; }
        .foot-grid {
          max-width: var(--max-w); margin: 0 auto;
          display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 44px;
          padding-bottom: 52px;
        }
        /* Col 1 */
        .foot-brand-box {
          display: flex; align-items: center; gap: 13px;
          background: var(--gold); border-radius: var(--radius-md);
          padding: 16px 18px; margin-bottom: 18px;
        }
        .foot-brand-box .fbb-icon { font-size: 28px; }
        .foot-brand-name { font-size: 18px; font-weight: 800; color: #12100a; }
        .foot-brand-tag  { font-size: 10px; color: rgba(0,0,0,.6); font-weight: 500; line-height: 1.4; }
        .foot-tagline { font-size: 13px; color: var(--muted); line-height: 1.75; margin-bottom: 18px; }
        .status-pill {
          display: flex; align-items: center; gap: 9px;
          background: rgba(34,197,94,.08); border: 1px solid rgba(34,197,94,.25);
          border-radius: 8px; padding: 10px 14px; margin-bottom: 20px; max-width: 260px;
        }
        .status-dot { width: 8px; height: 8px; background: var(--green); border-radius: 50%; animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.25)} }
        .status-text { font-size: 12px; color: var(--green); font-weight: 600; }
        .social-row { display: flex; gap: 10px; }
        .soc-btn {
          width: 36px; height: 36px; border-radius: 7px;
          border: 1px solid var(--border); background: var(--bg-card);
          display: flex; align-items: center; justify-content: center;
          color: var(--muted); transition: border-color .18s, color .18s;
        }
        .soc-btn:hover { border-color: var(--gold); color: var(--gold); }
        .soc-btn svg { width: 15px; height: 15px; }

        /* Cols 2-4 */
        .foot-col h5 { font-size: 14px; font-weight: 700; margin-bottom: 20px; }
        .foot-links { display: flex; flex-direction: column; gap: 11px; }
        .foot-links a { font-size: 13px; color: var(--muted); transition: color .15s; }
        .foot-links a:hover { color: var(--gold); }

        /* Contact row */
        .foot-contact-row {
          max-width: var(--max-w); margin: 0 auto;
          border-top: 1px solid var(--border); padding: 32px 0;
          display: flex; gap: 48px; flex-wrap: wrap; align-items: flex-start;
        }
        .fci-group { min-width: 180px; }
        .fci-label { font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
        .fci-val   { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text); }
        .fci-val svg { width: 14px; height: 14px; color: var(--gold); flex-shrink: 0; }
        .fci-val a { color: var(--gold); text-decoration: underline; }
        .fci-links { display: flex; flex-direction: column; gap: 8px; }
        .fci-links a { font-size: 13px; color: var(--muted); }
        .fci-links a:hover { color: var(--gold); }

        /* Emergency banner */
        .emergency-band {
          max-width: var(--max-w); margin: 0 auto;
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-md); padding: 22px 28px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap; margin-bottom: 36px;
        }
        .emg-text h5 { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
        .emg-text p  { font-size: 13px; color: var(--muted); }

        /* Copyright bar */
        .copy-bar {
          max-width: var(--max-w); margin: 0 auto;
          border-top: 1px solid var(--border); padding: 22px 0;
          display: flex; justify-content: space-between; align-items: center;
          gap: 14px; flex-wrap: wrap;
        }
        .copy-bar p   { font-size: 12px; color: var(--muted); }
        .copy-links   { display: flex; gap: 18px; }
        .copy-links a { font-size: 12px; color: var(--muted); }
        .copy-links a:hover { color: var(--gold); }

        /* ============================================
           FLOATING FABs
        ============================================ */
        .fab-stack {
          position: fixed; bottom: 26px; right: 26px;
          display: flex; flex-direction: row; gap: 12px; z-index: 999;
        }
        .fab {
          width: 52px; height: 52px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 20px rgba(0,0,0,.45); cursor: pointer;
          position: relative; transition: transform .2s;
          text-decoration: none;
        }
        .fab:hover { transform: scale(1.1); }
        .fab-bot { background: var(--bg-card); border: 2px solid var(--gold); }
        .fab-bot svg { width: 22px; height: 22px; color: var(--gold); }
        .fab-wa  { background: #22c55e; }
        .fab-wa  svg { width: 24px; height: 24px; color: #fff; }
        .fab-notif {
          position: absolute; top: -3px; right: -3px;
          width: 17px; height: 17px; border-radius: 50%;
          background: #ef4444; color: #fff; font-size: 9px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
        }

        /* ============================================
           RESPONSIVE
        ============================================ */
        @media (max-width: 1100px) {
          .svc-grid { grid-template-columns: repeat(4, 1fr); }
          .foot-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 900px) {
          .main-nav { display: none; }
          .hamburger { display: flex; }
          .hero-grid  { grid-template-columns: 1fr; gap: 40px; }
          .hero-art   { height: 320px; }
          .shield-card { width: 220px; height: 230px; }
          .intro-grid { grid-template-columns: 1fr; }
          .why-grid   { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-grid   { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .svc-grid   { grid-template-columns: repeat(2, 1fr); }
          .foot-grid  { grid-template-columns: 1fr; }
          .review-card { flex-direction: column; gap: 14px; }
          .review-div  { width: 100%; height: 1px; }
          .review-btn-wrap { margin-left: 0; }
          .hero-h1    { font-size: 34px; }
          .hero-art   { height: 280px; }
          .shield-card { width: 190px; height: 200px; }
        }
        @media (max-width: 420px) {
          .svc-grid { grid-template-columns: 1fr; }
          .sc-grid  { grid-template-columns: 1fr; }
          .why-stats{ grid-template-columns: 1fr; }
        }
      `}} />

      {/* MOBILE DRAWER */}
      <nav className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-label="Mobile navigation" role="dialog">
        <button className="drawer-close" onClick={toggleDrawer} aria-label="Close menu">&times;</button>
        <a href="/" onClick={toggleDrawer}>Home</a>
        <a href="/protection" onClick={toggleDrawer}>Protection</a>
        <a href="/services" onClick={toggleDrawer}>Services</a>
        <a href="/scanner" onClick={toggleDrawer}>AI Scanner</a>
        <a href="/about" onClick={toggleDrawer}>About Us</a>
        <a href="/pricing" onClick={toggleDrawer}>Pricing</a>
        <a href="/blogs" onClick={toggleDrawer}>Blog</a>
        <a href="/contact" onClick={toggleDrawer}>Contact</a>
        <a href="/login" className="btn btn-gold btn-sm mt-[10px]" onClick={toggleDrawer}>Login</a>
      </nav>

      {/* HEADER */}
      <header id="header" role="banner">
        <div className="header-inner">
          <a href="#" className="logo" aria-label="RepuKeel — Home">
            <div className="logo-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', width: '40px', height: '40px', borderRadius: '8px' }}>
              <img src="/logo.jpg" alt="RepuKeel Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="logo-text-wrap">
              <span className="brand">RepuKeel</span>
              <span className="sub">Online Reputation Management</span>
            </div>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="/" className="active">Home</a>
            <a href="/protection" className="nav-pill" aria-label="Protection">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z"/>
              </svg>
              Protection
            </a>
            <a href="/services">Services</a>
            <a href="/scanner">AI Scanner</a>
            <a href="/about">About Us</a>
            <a href="/pricing">Pricing</a>
            <a href="/blogs">Blog</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="header-right">
            <ThemeToggle className="icon-btn" />
            <AccountMenu loginClassName="login-link" menuClassName="home-account-menu" />
            <button className="hamburger" aria-label="Open menu" onClick={toggleDrawer}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" aria-labelledby="hero-h1">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-badge" role="note">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z"/>
              </svg>
              Professional DMCA Protection Service
            </div>

            <h1 className="hero-h1" id="hero-h1">
              Protect Your<br/>
              <span className="hero-gold">Digital Content</span><br/>
              From Copyright Theft
            </h1>

            <p className="hero-para">
              Fast, effective DMCA takedown service with a 24-48 hour response time.
              We protect your intellectual property from piracy and unauthorized use across all platforms.
            </p>

            <div className="hero-btns">
              <a href="/protection" className="btn btn-blue">Get Protection Now &rarr;</a>
              <a href="#services" className="btn btn-outline">View Services</a>
            </div>

            <div className="trust-pills" role="list" aria-label="Trust signals">
              <span className="trust-pill" role="listitem"><span className="ck">&#10003;</span>No Win, No Fee</span>
              <span className="trust-pill" role="listitem"><span className="ck">&#10003;</span>24/7 Support</span>
              <span className="trust-pill" role="listitem"><span className="ck">&#10003;</span>Global Coverage</span>
              <span className="trust-pill" role="listitem"><span className="ck">&#10003;</span>Legal Compliance</span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="shield-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z"/>
                <path d="M9 12.5l2 2 4-4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="f-badge f-gold">
              <span className="fb-num">4.9 &#9733;</span>
              <span className="fb-lbl">Rating</span>
            </div>
            <div className="f-badge f-blue">
              <span className="fb-num">24h</span>
              <span className="fb-lbl">Response</span>
            </div>
            <div className="f-badge f-green">
              <span className="fb-num">280+</span>
              <span className="fb-lbl">Success</span>
            </div>
            <div className="scroll-hint">
              Scroll to explore
              <div className="scroll-mouse"><div className="scroll-dot"></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section id="stats-bar" aria-label="Key statistics">
        <div className="stats-grid">
          <div className="stat-col">
            <div className="stat-big">30K+</div>
            <div className="stat-lbl">Content Pieces Removed</div>
          </div>
          <div className="stat-col">
            <div className="stat-big">200+</div>
            <div className="stat-lbl">Clients Protected</div>
          </div>
          <div className="stat-col">
            <div className="stat-big">99%</div>
            <div className="stat-lbl">Success Rate</div>
          </div>
          <div className="stat-col">
            <div className="stat-big">150+</div>
            <div className="stat-lbl">Countries Covered</div>
          </div>
        </div>
      </section>

      {/* SERVICE INTRO */}
      <section id="service-intro" aria-labelledby="intro-h2">
        <div className="intro-grid">
          <div>
            <h2 className="intro-h2" id="intro-h2">Professional DMCA<br/>Takedown Service</h2>
            <div className="gold-bar" aria-hidden="true"></div>
            <p className="intro-para">
              We are a dedicated DMCA takedown service committed to protecting your digital content from copyright infringement, piracy, and unauthorized use.
            </p>
            <p className="intro-para">
              With years of experience in copyright enforcement and online brand protection, we provide fast, effective, and hassle-free takedown solutions tailored to your needs. Whether you're an artist, entrepreneur, or corporation, we ensure your intellectual property stays secure.
            </p>
            <ul className="feat-list" aria-label="Key features">
              <li className="feat-item">
                <div className="feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="feat-title">Quick Content Removal</p>
                  <p className="feat-desc">Quick removal of stolen content from all platforms within 24 to 48 hours.</p>
                </div>
              </li>
              <li className="feat-item">
                <div className="feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z"/></svg>
                </div>
                <div>
                  <p className="feat-title">Complete Copyright Protection</p>
                  <p className="feat-desc">Full spectrum protection for your intellectual property across every platform and jurisdiction.</p>
                </div>
              </li>
              <li className="feat-item">
                <div className="feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M5 7l-3 6a3.5 3.5 0 0 0 7 0l-3-6zM19 7l-3 6a3.5 3.5 0 0 0 7 0l-3-6zM5 7h14M8 3h8"/></svg>
                </div>
                <div>
                  <p className="feat-title">Legal Support</p>
                  <p className="feat-desc">Expert legal assistance and ongoing monitoring to protect your rights long-term.</p>
                </div>
              </li>
            </ul>
            <a href="/protection" className="btn btn-gold">&#10003; Start Protecting Now</a>
          </div>
          <div>
            <div className="sc-grid">
              <div className="sc-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display:'inline-block'}}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <div className="sc-num">98%</div>
                <div className="sc-lbl">Client Satisfaction</div>
              </div>
              <div className="sc-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display:'inline-block'}}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <div className="sc-num">24-48h</div>
                <div className="sc-lbl">Average Takedown Time</div>
              </div>
              <div className="sc-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display:'inline-block'}}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>
                <div className="sc-num">50+</div>
                <div className="sc-lbl">Countries Served</div>
              </div>
              <div className="sc-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display:'inline-block'}}><path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M8.5 13.5L6 22l6-3 6 3-2.5-8.5"/></svg>
                <div className="sc-num">280+</div>
                <div className="sc-lbl">Cases Solved</div>
              </div>
            </div>
            <div className="quote-box">
              <blockquote>"Your content is valuable&mdash;let us help you protect it. We provide expert DMCA takedown solutions to remove stolen content quickly and legally."</blockquote>
              <p className="quote-who">RepuKeel Team</p>
              <p className="quote-role">Copyright Protection Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" aria-labelledby="svc-h2">
        <div className="services-head">
          <p className="section-kicker">Our Services</p>
          <h2 className="section-h2" id="svc-h2">Increase sales with our brand protection solutions</h2>
          <p className="section-sub" style={{margin: '0 auto'}}>Achieve comprehensive visibility of online threats with round-the-clock monitoring and enforcement</p>
        </div>

        <div className="svc-grid" role="list" aria-label="Service catalog">
          {SERVICES.map((svc, idx) => (
            <article key={idx} className="svc-card" role="listitem">
              <div className="svc-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d={svc.icon} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>{svc.title}</h4>
              <p>{svc.desc}</p>
            </article>
          ))}
        </div>

        <div className="services-ctas">
          <a href="#footer" className="btn btn-dark">CONTACT SALES</a>
          <a href="/contact" className="btn btn-gold">REQUEST A DEMO</a>
        </div>

        <div className="review-card" role="region" aria-label="Customer review summary">
          <div>
            <div className="review-stars" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <div className="review-score">4.96<span style={{fontSize:'15px', fontWeight: 500, color: 'var(--muted)'}}> out of 5</span></div>
            <div className="review-count">25 Reviews</div>
          </div>
          <div className="review-div" aria-hidden="true"></div>
          <div>
            <div className="review-src">Google</div>
            <div className="review-sub">Verified Reviews Platform</div>
          </div>
          <p className="review-desc">Clients consistently rate RepuKeel 5 stars for blazing-fast response times, professional communication, and results that actually stick.</p>
          <div className="review-btn-wrap">
            <a href="/about" className="btn btn-dark btn-sm">REVIEWS</a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" aria-labelledby="why-h2">
        <div className="why-grid">
          <div>
            <p className="section-kicker">Why Choose Us</p>
            <h2 className="why-h2" id="why-h2">We act fast, and we don&rsquo;t stop until the problem is fully resolved.</h2>
            <div className="why-features">
              <div className="why-feat">
                <div className="why-feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4>Same-Day Action</h4>
                  <p>Most takedown notices are filed within hours of receiving your case&mdash;not days or weeks later.</p>
                </div>
              </div>
              <div className="why-feat">
                <div className="why-feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>
                </div>
                <div>
                  <h4>Global Coverage</h4>
                  <p>We enforce your rights across 150+ countries and every major platform, including dark-web repositories.</p>
                </div>
              </div>
              <div className="why-feat">
                <div className="why-feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <div>
                  <h4>100% Confidential</h4>
                  <p>Your identity, case details, and content are protected under strict confidentiality at every step.</p>
                </div>
              </div>
              <div className="why-feat">
                <div className="why-feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                </div>
                <div>
                  <h4>Proven Results</h4>
                  <p>Over 30,000 pieces of content removed with a 99% success rate&mdash;results you can trust.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-stats">
            <div className="ws-card"><div className="ws-num">2K+</div><div className="ws-lbl">DMCA Takedowns Filed</div></div>
            <div className="ws-card"><div className="ws-num">24hrs</div><div className="ws-lbl">Avg Removal Time</div></div>
            <div className="ws-card"><div className="ws-num">20+</div><div className="ws-lbl">Platforms Covered</div></div>
            <div className="ws-card"><div className="ws-num">99%</div><div className="ws-lbl">Client Satisfaction</div></div>
            <div className="ws-card"><div className="ws-num">150+</div><div className="ws-lbl">Countries Served</div></div>
            <div className="ws-card"><div className="ws-num">7+</div><div className="ws-lbl">Years of Experience</div></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" role="contentinfo">
        <div className="foot-grid">
          <div>
            <div className="foot-brand-box">
              <span className="fbb-icon" aria-hidden="true">🛡️</span>
              <div>
                <div className="foot-brand-name">RepuKeel</div>
                <div className="foot-brand-tag">Online Reputation Management</div>
              </div>
            </div>
            <p className="foot-tagline">Professional DMCA takedown and brand protection services for creators, businesses, and enterprises operating across the digital landscape worldwide.</p>
            <div className="status-pill" aria-label="System status: operational">
              <div className="status-dot"></div>
              <span className="status-text">All systems operational</span>
            </div>
            <div className="social-row" aria-label="Social media">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="soc-btn" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 3h4V0h-4a5 5 0 0 0-5 5v3H5v4h3v9h4v-9h4l1-4h-5V5a1 1 0 0 1 1-1z"/></svg></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="soc-btn" aria-label="Twitter / X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="soc-btn" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.76-2 4 0 4.74 2.6 4.74 6V21h-4v-5.8c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H9z"/></svg></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="soc-btn" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
            </div>
          </div>
          <div className="foot-col">
            <h5>Brand Protection Solutions</h5>
            <nav className="foot-links" aria-label="Brand protection links">
              <a href="/protection">Intellectual Property Protection</a>
              <a href="/protection">AI Brand Monitoring</a>
              <a href="/protection">Trademark Monitoring</a>
              <a href="/protection">Impersonation Protection</a>
              <a href="/protection">Anti-Counterfeiting Solutions</a>
              <a href="/services">Online Reputation Management</a>
              <a href="/protection">Application Protection</a>
              <a href="/protection">Anti-Piracy Protection</a>
            </nav>
          </div>
          <div className="foot-col">
            <h5>Content Protection Solutions</h5>
            <nav className="foot-links" aria-label="Content protection links">
              <a href="/protection">Copyright Protection</a>
              <a href="/services">DMCA Takedown Service</a>
              <a href="/services">Leaked Content Removal</a>
              <a href="/services">Adult Content Protection</a>
              <a href="/services">Article &amp; Blog Removal</a>
              <a href="/services">Search Engine De-Indexing</a>
              <a href="/services">Social Media Content Removal</a>
            </nav>
          </div>
          <div className="foot-col">
            <h5>Use Cases</h5>
            <nav className="foot-links" aria-label="Use case links">
              <a href="/use-cases/remove-leaked-onlyfans-content">Remove Leaked OnlyFans Content</a>
              <a href="/use-cases/remove-leaked-private-content">Remove Leaked Private Content</a>
              <a href="/use-cases/brand-defamation-removal">Brand Defamation Removal</a>
              <a href="/use-cases/fake-profile-impersonation-removal">Fake Profile &amp; Impersonation Removal</a>
              <a href="/use-cases/e-learning-content-protection">e-Learning Content Protection</a>
              <a href="/use-cases/copyright-image-video-removal">Copyright Image &amp; Video Removal</a>
              <a href="/use-cases/negative-article-removal">Negative Article Removal</a>
            </nav>
          </div>
        </div>
        <div className="foot-contact-row">
          <div className="fci-group">
            <div className="fci-label">Headquarters</div>
            <div className="fci-val"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> I-8 Markaz, Islamabad, Pakistan</div>
          </div>
          <div className="fci-group">
            <div className="fci-label">Email</div>
            <div className="fci-val"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg> <a href="mailto:legal@repukeel.com">legal@repukeel.com</a></div>
          </div>
          <div className="fci-group">
            <div className="fci-label">Phone</div>
            <div className="fci-val"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 11.8 19.8 19.8 0 0 1 1.1 3.18 2 2 0 0 1 3.07 1h3a2 2 0 0 1 2 1.72c.127 1.007.361 1.997.7 2.95a2 2 0 0 1-.45 2.11L7.09 8.99a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.953.339 1.943.573 2.95.7A2 2 0 0 1 21.1 16l.9.9z"/></svg> +92 335 8687629</div>
          </div>
          <div className="fci-group">
            <div className="fci-label">Company</div>
            <nav className="fci-links" aria-label="Company links">
              <a href="/about">About Us</a><a href="/clients">Our Clients</a><a href="/case-studies">Case Studies</a><a href="/blogs">Blog</a>
            </nav>
          </div>
          <div className="fci-group">
            <div className="fci-label">Support</div>
            <nav className="fci-links" aria-label="Support links">
              <a href="/contact">Contact Us</a><a href="/request-free-analysis">Request Free Analysis</a><a href="/privacy-policy">Privacy Policy</a><a href="/terms-conditions">Terms &amp; Conditions</a>
            </nav>
          </div>
        </div>
        <div className="emergency-band" role="alert">
          <div className="emg-text">
            <h5>&#128680; 24/7 Emergency DMCA Support</h5>
            <p>Experiencing an active content leak or urgent brand attack? Our team is on standby right now.</p>
          </div>
          <a href="tel:+923358687629" className="btn btn-gold">&#128222; Emergency Call Now</a>
        </div>
        <div className="copy-bar">
          <p>&copy; 2019&ndash;2026 RepuKeel. All rights reserved. &middot; Professional DMCA Takedown Service &amp; Digital Brand Protection</p>
          <div className="copy-links">
            <a href="/privacy-policy">Privacy Policy</a><a href="/terms-conditions">Terms &amp; Conditions</a>
          </div>
        </div>
      </footer>

      {/* FLOATING FABs */}
      <div className="fab-stack" aria-label="Quick contact">
        <Chatbot />
        <a href="https://wa.me/923358687629" className="fab fab-wa" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-3-.2-.3A8 8 0 1 1 12 20zm4.3-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.9 1-.1.2-.3.2-.5.1a9 9 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.3 0-.4.2-.5l.5-.5.3-.5.1-.5-1-2.3c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3C8.3 8.5 7.5 9.5 7.5 11s1 2.8 1.2 3 2 3.2 5 4.4c2.5 1 3 .8 3.5.8s1.7-.7 2-1.4.3-1.3.2-1.4z"/></svg>
          <span className="fab-notif" aria-label="1 notification">1</span>
        </a>
      </div>
    </>
  );
}
