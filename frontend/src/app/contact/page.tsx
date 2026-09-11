'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    subject: 'DMCA Takedown',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '', subject: 'DMCA Takedown' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)', color: '#f4f6fb', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 60px' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(14,36,80,0.8) 0%, transparent 70%)',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute', top: '-100px', left: '-100px', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
          zIndex: 0
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>

            {/* LEFT: Hero Text */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#e0ac2f', display: 'inline-block',
                  boxShadow: '0 0 8px rgba(224,172,47,0.8)'
                }} />
                <span style={{ fontSize: '13px', color: '#e0ac2f', fontWeight: 600, letterSpacing: '1px' }}>Available 24/7</span>
              </div>

              <h1 style={{ fontSize: 'clamp(36px,4vw,56px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>
                Let&apos;s Make Your<br />
                <span style={{ color: '#e0ac2f' }}>Brand Safer</span><br />
                Today
              </h1>

              <p style={{ fontSize: '15px', color: '#a9b3c9', lineHeight: 1.7, marginBottom: '32px', maxWidth: '420px' }}>
                Connect with our expert team for fast, reliable DMCA takedown services and comprehensive copyright protection.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#contact-form" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#e0ac2f', color: '#0a1628',
                  fontWeight: 700, fontSize: '15px',
                  padding: '14px 28px', borderRadius: '50px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(224,172,47,0.35)'
                }}>
                  Get Started
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '16px', height: '16px' }}>
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/pricing" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'transparent', color: '#f4f6fb',
                  fontWeight: 700, fontSize: '15px',
                  padding: '14px 28px', borderRadius: '50px',
                  textDecoration: 'none', border: '2px solid rgba(255,255,255,0.2)'
                }}>
                  View Pricing
                </a>
              </div>
            </div>

            {/* RIGHT: Quick Connect Card */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '32px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '24px', color: '#f4f6fb' }}>Quick Connect</h3>

              {[
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" style={{ width: '20px', height: '20px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
                  bg: 'rgba(99,102,241,0.2)', label: 'Visit Us', value: 'I-8 Markaz, Islamabad, Pakistan'
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" style={{ width: '20px', height: '20px' }}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" /></svg>,
                  bg: 'rgba(168,85,247,0.2)', label: 'Email Us', value: 'legal@repukeel.com'
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" style={{ width: '20px', height: '20px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
                  bg: 'rgba(34,197,94,0.2)', label: 'Call Us', value: '+92 335 8687629'
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 18px', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '10px',
                    background: item.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#a9b3c9', marginBottom: '3px' }}>{item.label}</p>
                    <p style={{ fontSize: '14px', fontWeight: 700, color: '#f4f6fb' }}>{item.value}</p>
                  </div>
                </div>
              ))}

              <p style={{ fontSize: '13px', color: '#a9b3c9', margin: '20px 0 12px' }}>Follow us on social media</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
                  'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
                  'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z',
                  'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
                ].map((d, i) => (
                  <a key={i} href="#" style={{
                    width: '38px', height: '38px', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none'
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#a9b3c9" strokeWidth="1.8" style={{ width: '15px', height: '15px' }}>
                      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={{
        background: 'linear-gradient(90deg, #1a2d5a 0%, #162447 50%, #1a2d5a 100%)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '22px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '64px', flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { emoji: '🛡️', value: '10K+', label: 'Cases Resolved' },
              { emoji: '⏱️', value: '< 24hrs', label: 'Response Time' },
              { emoji: '🏆', value: '99.9%', label: 'Success Rate' },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '20px' }}>{stat.emoji}</span>
                <div>
                  <span style={{ fontSize: '22px', fontWeight: 900, color: '#e0ac2f' }}>{stat.value}</span>
                  <span style={{ fontSize: '13px', color: '#a9b3c9', marginLeft: '8px' }}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GET IN TOUCH ===== */}
      <section id="contact-form" style={{ padding: '80px 0 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,44px)', fontWeight: 900, marginBottom: '12px' }}>
              Get In <span style={{ color: '#e0ac2f' }}>Touch</span>
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '18px' }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e0ac2f', opacity: i === 1 ? 1 : 0.35 }} />
              ))}
            </div>
            <p style={{ fontSize: '15px', color: '#a9b3c9', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              Have questions or need assistance? Fill out the form below and our team will respond within 24 hours.
            </p>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '28px', alignItems: 'start' }}>

            {/* LEFT: Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" style={{ width: '22px', height: '22px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
                  bg: 'rgba(99,102,241,0.15)', label: 'Visit Us', value: 'I-8 Markaz, Islamabad, Pakistan'
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" style={{ width: '22px', height: '22px' }}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" /></svg>,
                  bg: 'rgba(168,85,247,0.15)', label: 'Email Us', value: 'legal@repukeel.com'
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" style={{ width: '22px', height: '22px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
                  bg: 'rgba(34,197,94,0.15)', label: 'Call Us', value: '+92 335 8687629'
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  background: '#131d35', borderRadius: '14px',
                  padding: '18px 20px',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}>
                  <div style={{
                    width: '46px', height: '46px', borderRadius: '12px',
                    background: item.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#a9b3c9', marginBottom: '4px' }}>{item.label}</p>
                    <p style={{ fontSize: '14px', fontWeight: 700, color: '#f4f6fb' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Form */}
            <div style={{
              background: '#131d35',
              borderRadius: '18px',
              padding: '36px',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>

              {status === 'success' && (
                <div style={{
                  marginBottom: '24px', padding: '16px 20px', borderRadius: '12px',
                  background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.3)',
                  display: 'flex', alignItems: 'flex-start', gap: '12px'
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ width: '22px', height: '22px', flexShrink: 0 }}>
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p style={{ fontWeight: 700, color: '#22c55e', marginBottom: '4px' }}>Message Sent Successfully!</p>
                    <p style={{ fontSize: '13px', color: '#a9b3c9' }}>We&apos;ll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div style={{
                  marginBottom: '24px', padding: '16px 20px', borderRadius: '12px',
                  background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)',
                  display: 'flex', alignItems: 'flex-start', gap: '12px'
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" style={{ width: '22px', height: '22px', flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                  </svg>
                  <div>
                    <p style={{ fontWeight: 700, color: '#ef4444', marginBottom: '4px' }}>Failed to Send</p>
                    <p style={{ fontSize: '13px', color: '#a9b3c9' }}>{errorMsg}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>

                {/* Row 1: First + Last Name */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  {[
                    { label: 'First Name', name: 'firstName', type: 'text', required: true },
                    { label: 'Last Name', name: 'lastName', type: 'text', required: true },
                  ].map(field => (
                    <div key={field.name}>
                      <label style={{ display: 'block', fontSize: '13px', color: '#f4f6fb', marginBottom: '8px', fontWeight: 500 }}>
                        {field.label} {field.required && <span style={{ color: '#e0ac2f' }}>*</span>}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        required={field.required}
                        style={{
                          width: '100%', boxSizing: 'border-box',
                          background: '#0d1729', border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '10px', padding: '12px 16px',
                          color: '#f4f6fb', fontSize: '14px', outline: 'none'
                        }}
                        onFocus={e => (e.target.style.borderColor = '#e0ac2f')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                      />
                    </div>
                  ))}
                </div>

                {/* Row 2: Email + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#f4f6fb', marginBottom: '8px', fontWeight: 500 }}>
                      Email Address <span style={{ color: '#e0ac2f' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%', boxSizing: 'border-box',
                        background: '#0d1729', border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '10px', padding: '12px 16px',
                        color: '#f4f6fb', fontSize: '14px', outline: 'none'
                      }}
                      onFocus={e => (e.target.style.borderColor = '#e0ac2f')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#f4f6fb', marginBottom: '8px', fontWeight: 500 }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%', boxSizing: 'border-box',
                        background: '#0d1729', border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '10px', padding: '12px 16px',
                        color: '#f4f6fb', fontSize: '14px', outline: 'none'
                      }}
                      onFocus={e => (e.target.style.borderColor = '#e0ac2f')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', color: '#f4f6fb', marginBottom: '8px', fontWeight: 500 }}>
                    Your Message <span style={{ color: '#e0ac2f' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Describe your issue or question..."
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      background: '#0d1729', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px', padding: '12px 16px',
                      color: '#f4f6fb', fontSize: '14px', outline: 'none',
                      resize: 'none', fontFamily: 'inherit'
                    }}
                    onFocus={e => (e.target.style.borderColor = '#e0ac2f')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>

                {/* Submit */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '10px',
                      background: status === 'loading' ? '#a07a1f' : '#e0ac2f',
                      color: '#0a1628', fontWeight: 800, fontSize: '15px',
                      padding: '13px 30px', borderRadius: '10px',
                      border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      boxShadow: '0 4px 20px rgba(224,172,47,0.3)'
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg style={{ animation: 'spin 1s linear infinite', width: '17px', height: '17px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '15px', height: '15px' }}>
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="grid-template-columns: 320px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
