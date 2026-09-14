'use client';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import AccountMenu from './AccountMenu';

const SERVICE_CATEGORIES = [
  {
    id: 'content-removal',
    label: 'Content Removal',
    icon: '🗑️',
    services: [
      'TikTok Content Removal', 'Travel & Hospitality Review Removal',
      'Mugshot Removal & Suppression', 'Trustpilot Review Removal',
      'BBB Review Removal', 'Ripoff Report Removal',
      'Facebook Review Removal', 'Indeed Review Removal',
      'Instagram Content Removal', 'Twitter / X Content Removal',
      'Fake Review Removal', 'Google Review Removal', 'Yelp Review Removal',
    ],
  },
  {
    id: 'dating-reputation',
    label: 'Dating Reputation',
    icon: '🔥',
    services: [
      'Leaked Photo Removal', 'Private Content Takedown',
      'Dating Site Profile Removal', 'Adult Content Removal',
      'OnlyFans Leaked Content Removal', 'Reddit Post Removal',
      'Telegram Content Removal', 'Discord Content Removal',
    ],
  },
  {
    id: 'search-result-cleanup',
    label: 'Search Result Cleanup',
    icon: '🔍',
    services: [
      'Google Search Suppression', 'Bing Content Removal',
      'Negative Link Removal', 'De-Indexing Service',
      'Autocomplete Cleanup', 'Knowledge Panel Management',
      'News Article Suppression', 'Mugshot De-Indexing',
    ],
  },
  {
    id: 'job-reputation',
    label: 'Job Reputation',
    icon: '👤',
    services: [
      'Glassdoor Review Removal', 'Indeed Review Management',
      'LinkedIn Defamation Removal', 'Employment History Cleanup',
      'Professional Profile Protection', 'Employer Review Removal',
      'Background Check Cleanup', 'Career Reputation Management',
    ],
  },
  {
    id: 'monitoring-alerts',
    label: 'Monitoring & Alerts',
    icon: '📊',
    services: [
      'AI-Powered Brand Monitoring', 'Real-time Infringement Detection',
      'Social Media Monitoring', 'Dark Web Monitoring',
      '24/7 Content Alerts', 'Trademark Monitoring',
      'Review Alert System', 'Competitor Monitoring',
    ],
  },
  {
    id: 'reputation-management',
    label: 'Reputation Management',
    icon: '⭐',
    services: [
      'Online Reputation Management (ORM)', 'Defamatory Content Removal',
      'Negative Article Suppression', 'Search Result Reputation Cleanup',
      'Brand Image Restoration', 'Crisis Management',
      'Review Management & Rating Improvement', 'Long-term Reputation Monitoring',
    ],
  },
  {
    id: 'reputation-audit',
    label: 'Reputation Audit',
    icon: '📋',
    services: [
      'Full Brand Reputation Audit', 'Search Engine Audit',
      'Social Media Profile Audit', 'Review & Rating Audit',
      'Content Threat Analysis', 'Competitive Reputation Benchmarking',
      'Legal Risk Assessment', 'Free Case Evaluation',
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    icon: '🏢',
    services: [
      'Content Creators & Influencers', 'E-Commerce Brands',
      'Healthcare & Medical Professionals', 'Legal & Law Firms',
      'Real Estate Professionals', 'Restaurants & Hospitality',
      'Educators & Online Coaches', 'Enterprises & Corporations',
    ],
  },
];

function ServicesMegaMenu({ onClose }: { onClose: () => void }) {
  const [activeId, setActiveId] = useState('content-removal');
  const active = SERVICE_CATEGORIES.find(c => c.id === activeId)!;

  return (
    <div style={{
      position: 'absolute', top: '48px', left: '50%', transform: 'translateX(-50%)',
      width: '90vw', maxWidth: '860px', background: '#2563EB', border: '1px solid #1D4ED8',
      borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
      display: 'flex', zIndex: 9999, overflow: 'hidden',
    }}>
      {/* Left Sidebar */}
      <div style={{ width: '220px', flexShrink: 0, background: '#1D4ED8', padding: '12px', borderRight: '1px solid #60A5FA' }}>
        {SERVICE_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onMouseEnter={() => setActiveId(cat.id)}
            onClick={() => { onClose(); window.location.href = `/services#${cat.id}`; }}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 12px', marginBottom: '4px', borderRadius: '8px',
              border: activeId === cat.id ? '1px solid #BFDBFE' : '1px solid transparent',
              background: activeId === cat.id ? '#2563EB' : 'transparent',
              color: activeId === cat.id ? '#FFFFFF' : '#DBEAFE',
              fontWeight: activeId === cat.id ? 700 : 500,
              fontSize: '13px', cursor: 'pointer', textAlign: 'left', outline: 'none',
            }}
          >
            <span style={{ fontSize: '15px' }}>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Right Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <p style={{ fontSize: '10px', fontWeight: 700, color: '#DBEAFE', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>
            SOLUTIONS FOR {active.label.toUpperCase()}
          </p>
          <a href="/services" onClick={onClose} style={{ fontSize: '11px', fontWeight: 600, color: '#DBEAFE', textDecoration: 'none' }}>
            View all services →
          </a>
        </div>
        <div style={{ background: '#1D4ED8', borderRadius: '8px', padding: '12px 16px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '16px' }}>{active.icon}</span>
          <span style={{ fontWeight: 700, fontSize: '15px', color: '#fff' }}>{active.label}</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {active.services.slice(0, 10).map((svc, i) => {
            const slug = svc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
              <a
                key={i}
                href={`/services/${slug}`}
                onClick={onClose}
                style={{
                  padding: '10px 14px', borderRadius: '8px',
                  border: '1px solid #60A5FA', background: '#2563EB',
                  color: '#FFFFFF', fontSize: '12px', fontWeight: 500,
                  textDecoration: 'none', display: 'block',
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#BFDBFE'; (e.currentTarget as HTMLAnchorElement).style.color = '#DBEAFE'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#60A5FA'; (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF'; }}
              >
                {svc}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        /* ===== HEADER ===== */
        #rk-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          background: #2563EB;
          border-bottom: 1px solid #1D4ED8;
          font-family: 'Poppins', sans-serif;
        }
        .rk-header-inner {
          max-width: 1280px; margin: 0 auto;
          height: 64px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 28px;
          box-sizing: border-box;
          width: 100%;
        }

        /* ===== LOGO ===== */
        .rk-logo {
          display: flex; align-items: center; gap: 10px;
          flex-shrink: 0; text-decoration: none; min-width: 0;
        }
        .rk-logo-icon {
          width: 40px; height: 40px; flex-shrink: 0;
          background: #FFFFFF; border-radius: 8px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        .rk-logo-icon img { width: 100%; height: 100%; object-fit: cover; }
        .rk-logo-text { line-height: 1.2; min-width: 0; }
        .rk-logo-text .brand { font-size: 15px; font-weight: 800; color: #FFFFFF; letter-spacing: .5px; display: block; white-space: nowrap; }
        .rk-logo-text .sub { font-size: 9.5px; font-weight: 500; color: #DBEAFE; text-transform: uppercase; letter-spacing: 1.2px; display: block; white-space: nowrap; }

        /* ===== DESKTOP NAV ===== */
        .rk-nav { display: flex; align-items: center; gap: 2px; position: relative; flex: 1; justify-content: center; }
        .rk-nav a {
          font-size: 13px; font-weight: 500; color: #FFFFFF;
          padding: 7px 11px; border-radius: 6px;
          transition: color .15s, background .15s;
          white-space: nowrap; text-decoration: none;
        }
        .rk-nav a:hover { color: #DBEAFE; }
        .rk-nav a.active { color: #FFFFFF; font-weight: 700; border-bottom: 2.5px solid #FFFFFF; border-radius: 0; }
        .rk-nav-pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: #1D4ED8 !important; color: #FFFFFF !important;
          font-weight: 700 !important; font-size: 12px !important;
          padding: 5px 12px !important; border-radius: 20px !important;
        }
        .rk-nav-pill svg { width: 11px; height: 11px; }
        .rk-services-trigger {
          font-size: 13px; font-weight: 500; color: #FFFFFF;
          padding: 7px 11px; border-radius: 6px;
          transition: color .15s; white-space: nowrap;
          background: none; border: none; cursor: pointer; outline: none;
          display: inline-flex; align-items: center; gap: 5px;
          font-family: 'Poppins', sans-serif;
        }
        .rk-services-trigger:hover { color: #DBEAFE; }

        /* ===== HEADER RIGHT (desktop) ===== */
        .rk-header-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
        .rk-login { font-size: 13px; font-weight: 600; color: #FFFFFF; text-decoration: none; }
        .rk-login:hover { color: #DBEAFE; }
        .rk-account-menu { position: relative; }
        .account-avatar {
          width: 34px; height: 34px; border-radius: 50%;
          border: 2px solid #BFDBFE; background: #1D4ED8;
          color: #FFFFFF; font: 700 12px 'Poppins', sans-serif;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
        }
        .account-avatar:hover, .account-avatar:focus-visible { background: #2563EB; outline: none; box-shadow: 0 0 0 3px rgba(191,219,254,.45); }
        .account-menu-overlay { position: fixed; inset: 0; z-index: 1000; border: 0; background: transparent; cursor: default; }
        .account-dropdown { position: absolute; right: 0; top: 43px; z-index: 1001; min-width: 180px; padding: 8px; border: 1px solid #BFDBFE; border-radius: 10px; background: #FFFFFF; box-shadow: 0 12px 28px rgba(0,0,0,.2); }
        .account-name { overflow: hidden; margin: 2px 8px 7px; color: #1E3A8A; font-size: 12px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
        .account-dropdown button[role="menuitem"] { width: 100%; border: 0; border-radius: 6px; background: transparent; padding: 8px; color: #DC2626; cursor: pointer; font: 600 13px 'Poppins', sans-serif; text-align: left; }
        .account-dropdown button[role="menuitem"]:hover { background: #FEF2F2; }
        .rk-theme-toggle {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px; padding: 6px;
          border: 1px solid #60A5FA; border-radius: 7px;
          background: transparent; color: #FFFFFF;
          cursor: pointer; transition: background .15s, color .15s;
        }
        .rk-theme-toggle:hover, .rk-theme-toggle:focus-visible { background: #1D4ED8; color: #DBEAFE; outline: none; }
        .rk-theme-toggle svg { width: 18px; height: 18px; }

        /* ===== HAMBURGER ===== */
        .rk-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 6px; flex-shrink: 0;
        }
        .rk-hamburger span { width: 22px; height: 2px; background: #FFFFFF; border-radius: 2px; display: block; }

        /* ===== MOBILE DRAWER ===== */
        .rk-drawer {
          position: fixed; inset: 0; z-index: 2000;
          background: #1e3a8a;
          flex-direction: column; align-items: stretch;
          overflow-y: auto; overflow-x: hidden;
          display: none;
        }
        .rk-drawer.open { display: flex; }
        .rk-drawer-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px;
          background: #2563EB;
          border-bottom: 1px solid #1D4ED8;
          flex-shrink: 0;
        }
        .rk-drawer-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .rk-drawer-logo-icon {
          width: 36px; height: 36px; background: #FFFFFF; border-radius: 7px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        .rk-drawer-logo-icon img { width: 100%; height: 100%; object-fit: cover; }
        .rk-drawer-brand { font-size: 15px; font-weight: 800; color: #FFFFFF; }
        .rk-drawer-close {
          width: 36px; height: 36px; border-radius: 8px;
          background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3);
          color: #FFFFFF; font-size: 18px; cursor: pointer;
          display: flex; align-items: center; justify-content: center; line-height: 1;
        }
        .rk-drawer-body { display: flex; flex-direction: column; padding: 8px 0; flex: 1; }
        .rk-drawer-link {
          font-size: 16px; font-weight: 600; color: #DBEAFE;
          text-decoration: none; padding: 15px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; gap: 12px;
          transition: background .15s, color .15s;
        }
        .rk-drawer-link:hover { background: rgba(255,255,255,0.08); color: #FFFFFF; }
        .rk-drawer-footer {
          padding: 20px 24px 40px;
          border-top: 1px solid rgba(255,255,255,0.12);
          display: flex; flex-direction: column; gap: 16px; flex-shrink: 0;
        }
        .rk-drawer-footer-row {
          display: flex; align-items: center; justify-content: space-between;
        }
        .rk-drawer-footer-label { font-size: 14px; font-weight: 500; color: #DBEAFE; }
        .rk-drawer-account { width: 100%; }
        .rk-drawer-login {
          display: flex; align-items: center; justify-content: center;
          width: 100%; padding: 13px 0; border-radius: 10px;
          font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 700;
          cursor: pointer; border: none; text-decoration: none;
          background: #FFFFFF; color: #2563EB; transition: background .15s;
        }
        .rk-drawer-login:hover { background: #DBEAFE; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .rk-nav { display: none; }
          .rk-hamburger { display: flex; }
        }
        @media (max-width: 500px) {
          .rk-header-inner { padding: 0 14px; }
          .rk-logo-text .sub { display: none; }
          .rk-header-right { gap: 8px; }
          .rk-theme-toggle { width: 32px; height: 32px; }
          .account-avatar { width: 30px; height: 30px; font-size: 10px; }
          .rk-hamburger { padding: 4px; }
        }
        @media (min-width: 901px) {
          .rk-drawer { display: none !important; }
        }
      ` }} />

      {/* ===== HEADER ===== */}
      <header id="rk-header" role="banner">
        <div className="rk-header-inner">

          {/* Logo */}
          <a href="/" className="rk-logo" aria-label="RepuKeel — Home">
            <div className="rk-logo-icon">
              <img src="/logo.jpg" alt="RepuKeel Logo" />
            </div>
            <div className="rk-logo-text">
              <span className="brand">RepuKeel</span>
              <span className="sub">Online Reputation Management</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="rk-nav" aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/protection" className="rk-nav-pill" aria-label="Protection">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z" />
              </svg>
              Protection
            </a>
            <div style={{ position: 'relative' }}>
              <button
                className="rk-services-trigger"
                onClick={() => setServicesOpen(prev => !prev)}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {servicesOpen && <ServicesMegaMenu onClose={() => setServicesOpen(false)} />}
            </div>
            {servicesOpen && (
              <div onClick={() => setServicesOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 9998 }} />
            )}
            <a href="/scanner">AI Scanner</a>
            <a href="/about">About Us</a>
            <a href="/pricing">Pricing</a>
            <a href="/blogs">Blog</a>
            <a href="/contact">Contact</a>
          </nav>

          {/* Desktop Right */}
          <div className="rk-header-right">
            <ThemeToggle className="rk-theme-toggle" />
            <AccountMenu loginClassName="rk-login" menuClassName="rk-account-menu" />
          </div>

          {/* Hamburger — mobile only, ALWAYS last item, no overflow possible */}
          <button
            className="rk-hamburger"
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ===== MOBILE DRAWER ===== */}
      <nav
        className={`rk-drawer ${drawerOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-modal="true"
        role="dialog"
      >
        {/* Drawer top bar */}
        <div className="rk-drawer-header">
          <a href="/" className="rk-drawer-logo" onClick={closeDrawer}>
            <div className="rk-drawer-logo-icon">
              <img src="/logo.jpg" alt="RepuKeel" />
            </div>
            <span className="rk-drawer-brand">RepuKeel</span>
          </a>
          <button className="rk-drawer-close" onClick={closeDrawer} aria-label="Close menu">✕</button>
        </div>

        {/* Nav links */}
        <div className="rk-drawer-body">
          <a href="/" className="rk-drawer-link" onClick={closeDrawer}>
            <span>🏠</span> Home
          </a>
          <a href="/protection" className="rk-drawer-link" onClick={closeDrawer}>
            <span>🛡️</span> Protection
          </a>
          <a href="/services" className="rk-drawer-link" onClick={closeDrawer}>
            <span>⚙️</span> Services
          </a>
          <a href="/scanner" className="rk-drawer-link" onClick={closeDrawer}>
            <span>🔍</span> AI Scanner
          </a>
          <a href="/about" className="rk-drawer-link" onClick={closeDrawer}>
            <span>ℹ️</span> About Us
          </a>
          <a href="/pricing" className="rk-drawer-link" onClick={closeDrawer}>
            <span>💳</span> Pricing
          </a>
          <a href="/blogs" className="rk-drawer-link" onClick={closeDrawer}>
            <span>📝</span> Blog
          </a>
          <a href="/contact" className="rk-drawer-link" onClick={closeDrawer}>
            <span>📬</span> Contact
          </a>
        </div>

        {/* Footer: theme toggle only label removed, just login */}
        <div className="rk-drawer-footer">
          <div className="rk-drawer-account">
            <a href="/login" className="rk-drawer-login" onClick={closeDrawer}>Login / Sign Up</a>
          </div>
        </div>
      </nav>
    </>
  );
}
