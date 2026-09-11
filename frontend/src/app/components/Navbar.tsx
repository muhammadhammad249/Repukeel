'use client';
import { useState } from 'react';
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
      width: '860px', background: '#2563EB', border: '1px solid #1D4ED8',
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

  // Close dropdown when clicking outside
  const handleOverlayClick = () => setServicesOpen(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        #rk-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          background: #2563EB;
          border-bottom: 1px solid #1D4ED8;
          padding: 0 28px;
          font-family: 'Poppins', sans-serif;
        }
        .rk-header-inner {
          max-width: 1280px; margin: 0 auto;
          height: 68px;
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
        }
        .rk-logo { display: flex; align-items: center; gap: 10px; flex-shrink: 0; text-decoration: none; }
        .rk-logo-icon {
          width: 42px; height: 42px;
          background: #FFFFFF; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; flex-shrink: 0;
        }
        .rk-logo-icon img { width: 100%; height: 100%; object-fit: cover; }
        .rk-logo-text { line-height: 1.2; }
        .rk-logo-text .brand { font-size: 15px; font-weight: 800; color: #FFFFFF; letter-spacing: .6px; display: block; }
        .rk-logo-text .sub   { font-size: 10px; font-weight: 500; color: #DBEAFE; text-transform: uppercase; letter-spacing: 1.4px; display: block; }
        .rk-nav { display: flex; align-items: center; gap: 2px; position: relative; }
        .rk-nav a {
          font-size: 13px; font-weight: 500; color: #FFFFFF;
          padding: 7px 13px; border-radius: 6px;
          transition: color .15s, background .15s;
          white-space: nowrap; text-decoration: none;
        }
        .rk-nav a:hover { color: #DBEAFE; }
        .rk-nav a.active { color: #FFFFFF; font-weight: 700; border-bottom: 2.5px solid #FFFFFF; border-radius: 0; }
        .rk-nav-pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: #1D4ED8; color: #FFFFFF !important;
          font-weight: 700 !important; font-size: 13px !important;
          padding: 6px 14px !important; border-radius: 20px !important;
        }
        .rk-nav-pill svg { width: 12px; height: 12px; }
        .rk-services-trigger {
          font-size: 13px; font-weight: 500; color: #FFFFFF;
          padding: 7px 13px; border-radius: 6px;
          transition: color .15s; white-space: nowrap;
          background: none; border: none; cursor: pointer; outline: none;
          display: inline-flex; align-items: center; gap: 5px;
          font-family: 'Poppins', sans-serif;
        }
        .rk-services-trigger:hover { color: #DBEAFE; }
        .rk-header-right { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
        .rk-login { font-size: 13px; font-weight: 600; color: #FFFFFF; text-decoration: none; }
        .rk-login:hover { color: #DBEAFE; }
        .rk-account-menu { position: relative; }
        .account-avatar { width: 34px; height: 34px; border-radius: 50%; border: 2px solid #BFDBFE; background: #1D4ED8; color: #FFFFFF; font: 700 12px 'Poppins', sans-serif; cursor: pointer; }
        .account-avatar:hover, .account-avatar:focus-visible { background: #2563EB; outline: none; box-shadow: 0 0 0 3px rgba(191,219,254,.45); }
        .account-menu-overlay { position: fixed; inset: 0; z-index: 1000; border: 0; background: transparent; cursor: default; }
        .account-dropdown { position: absolute; right: 0; top: 43px; z-index: 1001; min-width: 180px; padding: 8px; border: 1px solid #BFDBFE; border-radius: 10px; background: #FFFFFF; box-shadow: 0 12px 28px rgba(0,0,0,.2); }
        .account-name { overflow: hidden; margin: 2px 8px 7px; color: #1E3A8A; font-size: 12px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
        .account-dropdown button[role="menuitem"] { width: 100%; border: 0; border-radius: 6px; background: transparent; padding: 8px; color: #DC2626; cursor: pointer; font: 600 13px 'Poppins', sans-serif; text-align: left; }
        .account-dropdown button[role="menuitem"]:hover { background: #FEF2F2; }
        .rk-theme-toggle {
          display: flex; align-items: center; justify-content: center; width: 34px; height: 34px;
          padding: 6px; border: 1px solid #60A5FA; border-radius: 7px; background: transparent;
          color: #FFFFFF; cursor: pointer; transition: background .15s, color .15s;
        }
        .rk-theme-toggle:hover, .rk-theme-toggle:focus-visible { background: #1D4ED8; color: #DBEAFE; outline: none; }
        .rk-theme-toggle:focus-visible { box-shadow: 0 0 0 3px rgba(191,219,254,.55); }
        .rk-theme-toggle svg { width: 18px; height: 18px; }
        .rk-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .rk-hamburger span { width: 22px; height: 2px; background: #FFFFFF; border-radius: 2px; display: block; }
        .rk-drawer {
          display: none; position: fixed; inset: 0;
          background: rgba(37,99,235,.97); z-index: 2000;
          flex-direction: column; align-items: center; justify-content: center; gap: 18px;
        }
        .rk-drawer.open { display: flex; }
        .rk-drawer a { font-size: 20px; font-weight: 600; color: #f4f6fb; text-decoration: none; }
        .rk-drawer a:hover { color: #DBEAFE; }
        .rk-drawer-close {
          position: absolute; top: 22px; right: 28px;
          background: none; border: none; color: #f4f6fb;
          font-size: 30px; cursor: pointer; line-height: 1;
        }
        .rk-btn-gold {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px; border-radius: 8px;
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600;
          cursor: pointer; border: none; text-decoration: none; white-space: nowrap;
          background: #1D4ED8; color: #FFFFFF;
        }
        @media (max-width: 900px) {
          .rk-nav { display: none; }
          .rk-hamburger { display: flex; }
        }
      ` }} />

      <header id="rk-header" role="banner">
        <div className="rk-header-inner">
          <a href="/" className="rk-logo" aria-label="RepuKeel — Home">
            <div className="rk-logo-icon">
              <img src="/logo.jpg" alt="RepuKeel Logo" />
            </div>
            <div className="rk-logo-text">
              <span className="brand">RepuKeel</span>
              <span className="sub">Online Reputation Management</span>
            </div>
          </a>

          <nav className="rk-nav" aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/protection" className="rk-nav-pill" aria-label="Protection">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z" />
              </svg>
              Protection
            </a>

            {/* Services with Mega Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                className="rk-services-trigger"
                onClick={() => setServicesOpen(prev => !prev)}
                style={{ color: servicesOpen ? '#FFFFFF' : undefined }}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {servicesOpen && <ServicesMegaMenu onClose={() => setServicesOpen(false)} />}
            </div>
            {/* Overlay to close dropdown on outside click */}
            {servicesOpen && (
              <div
                onClick={handleOverlayClick}
                style={{ position: 'fixed', inset: 0, zIndex: 9998 }}
              />
            )}

            <a href="/scanner">AI Scanner</a>
            <a href="/about">About Us</a>
            <a href="/pricing">Pricing</a>
            <a href="/blogs">Blog</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="rk-header-right">
            <ThemeToggle className="rk-theme-toggle" />
            <AccountMenu loginClassName="rk-login" menuClassName="rk-account-menu" />
            <button className="rk-hamburger" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <nav className={`rk-drawer ${drawerOpen ? 'open' : ''}`} aria-label="Mobile navigation" role="dialog">
        <button className="rk-drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">&times;</button>
        <a href="/" onClick={() => setDrawerOpen(false)}>Home</a>
        <a href="/protection" onClick={() => setDrawerOpen(false)}>Protection</a>
        <a href="/services" onClick={() => setDrawerOpen(false)}>Services</a>
        <a href="/scanner" onClick={() => setDrawerOpen(false)}>AI Scanner</a>
        <a href="/about" onClick={() => setDrawerOpen(false)}>About Us</a>
        <a href="/pricing" onClick={() => setDrawerOpen(false)}>Pricing</a>
        <a href="/blogs" onClick={() => setDrawerOpen(false)}>Blog</a>
        <a href="/contact" onClick={() => setDrawerOpen(false)}>Contact</a>
        <a href="/login" className="rk-btn-gold" style={{ marginTop: '10px' }} onClick={() => setDrawerOpen(false)}>Login</a>
      </nav>
    </>
  );
}
