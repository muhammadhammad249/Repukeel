'use client';
import React, { useState } from 'react';
import BlueCtaBand from '../components/BlueCtaBand';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.reason || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', reason: '', message: '' });
    }, 1500);
  };
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ================= HERO (Photo & Glassmorphism) ================= */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden">
        {/* Background Photo & Tint Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-blue-950 opacity-80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[var(--bg-navy)] opacity-60"></div>
        
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Heading */}
          <div>
            <div className="pill-badge dark-var mb-6 border-blue-400">
              <span className="text-[var(--gold)]">👋</span> We're here to help
            </div>
            <h1 className="text-5xl md:text-6xl font-[900] tracking-tight mb-6 text-white">
              Get In Touch
            </h1>
            <p className="text-[18px] text-blue-100 max-w-lg mb-8 leading-relaxed">
              Facing a content emergency? Need a custom brand protection plan? Our team of legal and technical experts is standing by.
            </p>
          </div>

          {/* Right: Glassmorphism Panel */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl text-white">
              <h3 className="text-[22px] font-[800] mb-6 flex items-center gap-2">
                <span className="text-[var(--gold)]">⚡</span> Quick Connect
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-wider font-[600] text-blue-200 mb-1">Phone (24/7)</p>
                    <a href="tel:+18005550199" className="text-[16px] font-[700] hover:text-[var(--gold)] transition-colors">+1 (800) 555-0199</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-wider font-[600] text-blue-200 mb-1">Email</p>
                    <a href="mailto:support@repukeel.com" className="text-[16px] font-[700] hover:text-[var(--gold)] transition-colors">support@repukeel.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-wider font-[600] text-blue-200 mb-1">Headquarters</p>
                    <p className="text-[15px] font-[500] leading-snug">123 Copyright Blvd, Suite 400<br/>New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    ⏰
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-wider font-[600] text-blue-200 mb-1">Business Hours</p>
                    <p className="text-[15px] font-[500] leading-snug">Mon-Fri: 9am - 6pm EST<br/><span className="text-[var(--gold)]">Emergency Support: 24/7</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM & SIDE PANEL ================= */}
      <section className="w-full bg-white py-24">
        <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Left: Form (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-[800] mb-2">Send us a message</h2>
            <p className="text-[15px] text-[var(--text-body)] mb-8">Fill out the form below and an account manager will be in touch within 24 hours.</p>
            
            {success ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center flex flex-col items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="text-[20px] font-[800] text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-[15px] text-green-700">Thank you for reaching out. An account manager will review your inquiry and get back to you shortly.</p>
                <button onClick={() => setSuccess(false)} className="mt-6 text-[14px] font-[600] text-green-700 hover:text-green-800 underline">Send another message</button>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100 flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[14px] font-[700] text-[var(--text-heading)] mb-2">First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow bg-[var(--bg-soft)]" required />
                </div>
                <div>
                  <label className="block text-[14px] font-[700] text-[var(--text-heading)] mb-2">Last Name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow bg-[var(--bg-soft)]" required />
                </div>
              </div>
              
              <div>
                <label className="block text-[14px] font-[700] text-[var(--text-heading)] mb-2">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow bg-[var(--bg-soft)]" required />
              </div>

              <div>
                <label className="block text-[14px] font-[700] text-[var(--text-heading)] mb-2">Reason for Inquiry *</label>
                <select name="reason" value={formData.reason} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow bg-[var(--bg-soft)] text-[var(--text-body)]" required>
                  <option value="" disabled>Select an option</option>
                  <option value="dmca">New DMCA Takedown</option>
                  <option value="monitoring">Brand Monitoring Services</option>
                  <option value="partnership">Partnership / Agency</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-[14px] font-[700] text-[var(--text-heading)] mb-2">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-shadow bg-[var(--bg-soft)] resize-none" placeholder="Provide details about your case or inquiry..." required></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-navy-solid w-max text-[16px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
            )}
          </div>

          {/* Right: Side Panel (Spans 2 cols) */}
          <div className="lg:col-span-2 flex flex-col h-full bg-[var(--bg-soft)] rounded-2xl p-8 border border-[var(--border-light)]">
            <h3 className="text-[20px] font-[800] text-[var(--text-heading)] mb-6">Why Contact Us?</h3>
            
            <ul className="flex flex-col gap-5 mb-10">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[rgba(217,165,43,0.2)] text-[var(--gold)] flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3"><path d="M20 6L9 17l-5-5"/></svg></div>
                <div>
                  <p className="font-[700] text-[14px] text-[var(--text-heading)]">Free Initial Case Review</p>
                  <p className="text-[13px] text-[var(--text-body)] mt-1">We'll assess your situation at no cost.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[rgba(217,165,43,0.2)] text-[var(--gold)] flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3"><path d="M20 6L9 17l-5-5"/></svg></div>
                <div>
                  <p className="font-[700] text-[14px] text-[var(--text-heading)]">Rapid Response</p>
                  <p className="text-[13px] text-[var(--text-body)] mt-1">Action taken within 24 hours on all urgent matters.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[rgba(217,165,43,0.2)] text-[var(--gold)] flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3"><path d="M20 6L9 17l-5-5"/></svg></div>
                <div>
                  <p className="font-[700] text-[14px] text-[var(--text-heading)]">Dedicated Support</p>
                  <p className="text-[13px] text-[var(--text-body)] mt-1">Direct access to your assigned legal case manager.</p>
                </div>
              </li>
            </ul>

            <div className="mt-auto bg-white border border-[var(--border-light)] rounded-xl p-5 relative shadow-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[var(--gold)] opacity-20 absolute top-4 right-4"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p className="text-[13px] italic text-[var(--text-body)] mb-4 relative z-10">
                "I sent an inquiry on a Sunday evening and had a response and action plan by Monday morning. Truly exceptional service."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--bg-navy)] flex items-center justify-center text-white text-[12px] font-bold">JD</div>
                <p className="text-[12px] font-[700] text-[var(--text-heading)]">Jason D., Content Creator</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BLUE CTA ================= */}
      <BlueCtaBand 
        headingWhite="Need immediate"
        headingGold="assistance?"
        subtext="Our emergency response team is available 24/7 to handle critical content leaks and severe copyright infringements."
        primaryBtnText="Call Emergency Line"
        primaryBtnLink="tel:+18005550199"
        secondaryBtnText="Submit Urgent Case"
        secondaryBtnLink="/protection"
      />
      
    </div>
  );
}
