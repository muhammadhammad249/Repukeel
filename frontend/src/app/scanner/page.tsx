'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';

export default function ScannerPage() {
  const [activeTab, setActiveTab] = useState<'brand' | 'text' | 'image'>('brand');
  
  // Brand state
  const [brandName, setBrandName] = useState('');
  const [brandUrl, setBrandUrl] = useState('');
  
  // Text state
  const [textContent, setTextContent] = useState('');
  
  // Image state
  const [imageUrl, setImageUrl] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) setSelectedFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  const handleScan = () => {
    setLoading(true);
    setError('');

    setTimeout(() => {
      setLoading(false);
      
      if (activeTab === 'brand') {
        if (!brandName) {
          setError('Please enter a brand name.');
          return;
        }
        let query = `"${brandName}"`;
        if (brandUrl) query += ` -site:${brandUrl}`;
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
      } else if (activeTab === 'text') {
        if (!textContent) {
          setError('Please enter some text to scan.');
          return;
        }
        window.open(`https://www.google.com/search?q="${encodeURIComponent(textContent)}"`, '_blank');
      } else if (activeTab === 'image') {
        if (imageUrl) {
          window.open(`https://lens.google.com/uploadbyurl?url=${encodeURIComponent(imageUrl)}`, '_blank');
        } else if (selectedFile) {
          // If a file is uploaded, we just redirect to lens upload page since we can't upload via GET
          window.open(`https://lens.google.com`, '_blank');
        } else {
          setError('Please provide an image URL or upload an image.');
        }
      }
    }, 800); // Small delay for UX
  };

  const tabs = [
    {
      id: 'brand' as const,
      label: 'Brand / Business',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
          <line x1="7" y1="7" x2="7.01" y2="7"/>
        </svg>
      )
    },
    {
      id: 'text' as const,
      label: 'Text / Content',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      )
    },
    {
      id: 'image' as const,
      label: 'Image search',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-soft)]">
      
      {/* ================= HERO (Navy Band) ================= */}
      <section className="relative w-full bg-[var(--bg-navy)] pt-16 pb-28 border-b-4 border-[var(--gold)]">
        <div className="container relative z-10 text-center">
          {/* Search Icon */}
          <div className="w-16 h-16 rounded-2xl bg-[var(--gold)] flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--bg-navy)" strokeWidth="2.5" className="w-8 h-8">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-[900] tracking-tight mb-4" style={{ color: '#ffffff' }}>
            AI Scanner
          </h1>
          <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#9aa4c0' }}>
            Build focused Google searches to investigate possible brand, content, marketplace, social-media, and image misuse.
          </p>
        </div>
      </section>

      {/* ================= SCANNER CARD ================= */}
      <section className="w-full -mt-16 pb-24 px-4 sm:px-6 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-[var(--border-light)] overflow-hidden">
          
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row border-b border-[var(--border-light)]">
            {tabs.map((tab, i) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col items-center gap-2 py-6 px-4 font-[700] text-[14px] transition-all relative ${
                    i > 0 ? 'border-t sm:border-t-0 sm:border-l border-[var(--border-light)]' : ''
                  } ${
                    isActive
                      ? 'bg-[var(--bg-navy)] text-white'
                      : 'bg-white text-[var(--text-heading)] hover:bg-gray-50'
                  }`}
                >
                  {/* Gold bottom border on active */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--gold)]"></span>
                  )}
                  <span className={isActive ? 'text-[var(--gold)]' : 'text-[var(--text-heading)]'}>
                    {tab.icon}
                  </span>
                  <span className={isActive ? 'text-[var(--gold)]' : ''}>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Area */}
          <div className="p-8 md:p-10">

            {/* ---- BRAND TAB ---- */}
            {activeTab === 'brand' && (
              <div className="flex flex-col gap-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100 flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-[13px] font-[700] text-[var(--text-heading)] uppercase tracking-wider mb-2">Brand Name</label>
                  <input 
                    type="text" 
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Acme Corp" 
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-2 focus:ring-[rgba(217,165,43,0.2)] outline-none transition-all text-[15px]" 
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-[700] text-[var(--text-heading)] uppercase tracking-wider mb-2">Official Website <span className="font-[400] normal-case text-[var(--text-body)]">(Optional)</span></label>
                  <input 
                    type="url" 
                    value={brandUrl}
                    onChange={(e) => setBrandUrl(e.target.value)}
                    placeholder="https://example.com" 
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-2 focus:ring-[rgba(217,165,43,0.2)] outline-none transition-all text-[15px]" 
                  />
                </div>
                <button 
                  onClick={handleScan}
                  disabled={loading}
                  className="btn btn-gold-solid w-full py-4 text-[16px] flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Starting Scan...' : 'Start Scan'}
                </button>
              </div>
            )}

            {/* ---- TEXT TAB ---- */}
            {activeTab === 'text' && (
              <div className="flex flex-col gap-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100 flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-[13px] font-[700] text-[var(--text-heading)] uppercase tracking-wider mb-2">Text / Content to Scan</label>
                  <textarea
                    rows={6}
                    value={textContent}
                    onChange={(e) => setTextContent(e.target.value)}
                    placeholder="Paste a unique paragraph or phrase from your content here..."
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-2 focus:ring-[rgba(217,165,43,0.2)] outline-none transition-all resize-none text-[15px]"
                  ></textarea>
                </div>
                <button 
                  onClick={handleScan}
                  disabled={loading}
                  className="btn btn-gold-solid w-full py-4 text-[16px] flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Starting Scan...' : 'Start Scan'}
                </button>
              </div>
            )}

            {/* ---- IMAGE TAB ---- */}
            {activeTab === 'image' && (
              <div className="flex flex-col gap-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100 flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Left: URL Input */}
                  <div className="flex flex-col gap-2">
                    <label className="block text-[13px] font-[700] text-[var(--text-heading)] uppercase tracking-wider">Public Image URL</label>
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://example.com/original-image.jpg"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] focus:border-[var(--gold)] focus:ring-2 focus:ring-[rgba(217,165,43,0.2)] outline-none transition-all text-[14px]"
                    />
                    <p className="text-[12px] text-[var(--text-body)]">
                      A public URL can be passed to Google Lens.
                    </p>
                  </div>

                  {/* Right: File Upload */}
                  <div
                    className={`relative flex flex-col items-center justify-center text-center rounded-xl border-2 border-dashed p-8 cursor-pointer transition-all ${
                      dragOver
                        ? 'border-[var(--gold)] bg-[rgba(217,165,43,0.05)]'
                        : 'border-[var(--border-light)] hover:border-[var(--gold)] hover:bg-[rgba(217,165,43,0.02)]'
                    }`}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <div className="w-12 h-12 mb-3 flex items-center justify-center text-[var(--gold)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                        <polyline points="16 16 12 12 8 16"/>
                        <line x1="12" y1="12" x2="12" y2="21"/>
                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
                      </svg>
                    </div>
                    {selectedFile ? (
                      <>
                        <p className="text-[14px] font-[700] text-[var(--text-heading)]">{selectedFile.name}</p>
                        <p className="text-[12px] text-[var(--text-body)] mt-1">Click to change</p>
                      </>
                    ) : (
                      <>
                        <p className="text-[14px] font-[700] text-[var(--text-heading)]">Choose an image</p>
                        <p className="text-[12px] text-[var(--text-body)] mt-1">Preview locally, then upload it manually in Google Lens.</p>
                      </>
                    )}
                  </div>
                </div>

                <button 
                  onClick={handleScan}
                  disabled={loading}
                  className="btn btn-gold-solid w-full py-4 text-[16px] flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Starting Scan...' : 'Start Scan'}
                </button>
              </div>
            )}

          </div>
        </div>
        
        {/* Info text */}
        <p className="text-center text-[13px] text-[var(--text-body)] mt-8 max-w-xl mx-auto">
          By using our AI Piracy Scanner, you agree to our <Link href="/privacy-policy" className="text-[var(--gold)] hover:underline">Terms of Service</Link>. Scans typically complete within 1–2 minutes.
        </p>
      </section>

    </div>
  );
}
