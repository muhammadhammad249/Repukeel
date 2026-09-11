"use client";

import React, { useState, useRef, useEffect } from 'react';

type Message = {
  id: string;
  role: 'bot' | 'user';
  text: string;
  actionBtn?: { label: string; href: string };
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      role: 'bot',
      text: "Hi! I'm the RepuKeel website assistant. Ask me about services, pricing, protection requests, the client portal, AI Scanner, or strategy-call booking.",
      actionBtn: { label: 'Try AI Scanner', href: '/scanner' }
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Mock bot response logic
    setTimeout(() => {
      let botResponseText = "Thank you for reaching out. Our support team will review your query. In the meantime, you can explore our services or book a strategy call.";
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('much')) {
        botResponseText = "Our Standard Protection starts at $149 per takedown, and Pro Monitoring is $499/month. You can view full details on our Pricing page.";
      } else if (lowerText.includes('service') || lowerText.includes('offer')) {
        botResponseText = "We offer DMCA Takedowns, AI Brand Monitoring, Trademark Defense, and Anti-Piracy Protection. Would you like to request a free analysis?";
      } else if (lowerText.includes('scanner') || lowerText.includes('ai')) {
        botResponseText = "Our AI Scanner continuously monitors the web for unauthorized use of your content. You can try it by clicking the button below.";
      } else if (lowerText.includes('call') || lowerText.includes('book') || lowerText.includes('contact')) {
        botResponseText = "You can book a strategy call with our experts by visiting our Contact page.";
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'bot', text: botResponseText }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="fab fab-bot" aria-label="Open chat support" style={{ border: '2px solid #e0ac2f', background: '#16223c', cursor: 'pointer', outline: 'none' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#e0ac2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: '22px', height: '22px' }}>
            <rect x="3" y="11" width="18" height="10" rx="2"></rect>
            <circle cx="12" cy="5" r="2"></circle>
            <path d="M12 7v4"></path>
            <line x1="8" y1="16" x2="8.01" y2="16"></line>
            <line x1="16" y1="16" x2="16.01" y2="16"></line>
          </svg>
          <span className="fab-notif" aria-label="1 notification">1</span>
        </button>
      )}

      {isOpen && (
        <div style={{ 
          position: 'fixed', bottom: '26px', right: '26px', zIndex: 1000, width: '360px', 
          backgroundColor: '#0f172a', borderRadius: '12px', border: '1px solid #e0ac2f', 
          overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', fontFamily: 'sans-serif',
          display: 'flex', flexDirection: 'column', maxHeight: '80vh'
        }}>
          {/* Header */}
          <div style={{ backgroundColor: '#1e293b', padding: '16px', borderBottom: '2px solid #e0ac2f', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ backgroundColor: '#e0ac2f', color: '#1e293b', borderRadius: '8px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                  <circle cx="12" cy="5" r="2"></circle>
                  <path d="M12 7v4"></path>
                  <line x1="8" y1="16" x2="8.01" y2="16"></line>
                  <line x1="16" y1="16" x2="16.01" y2="16"></line>
                </svg>
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '15px', color: '#fff', fontWeight: 800 }}>RepuKeel Assistant</h3>
                <div style={{ fontSize: '12px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '4px', fontWeight: 500 }}>
                  <div style={{ width: '7px', height: '7px', backgroundColor: '#10b981', borderRadius: '50%' }}></div> Website support
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ backgroundColor: '#334155', color: '#fff', border: 'none', borderRadius: '6px', width: '30px', height: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', outline: 'none' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Chat Body */}
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: '#0f172a', overflowY: 'auto', flexGrow: 1, minHeight: '220px' }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ 
                  backgroundColor: msg.role === 'user' ? '#e0ac2f' : '#1e293b', 
                  color: msg.role === 'user' ? '#000' : '#f8fafc', 
                  padding: '12px 16px', borderRadius: '12px', fontSize: '14px', lineHeight: '1.5', maxWidth: '85%' 
                }}>
                  <p style={{ margin: 0 }}>{msg.text}</p>
                  {msg.actionBtn && (
                    <a href={msg.actionBtn.href} style={{ display: 'inline-block', marginTop: '12px', backgroundColor: '#e0ac2f', color: '#000', fontWeight: 'bold', padding: '8px 14px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px' }}>
                      {msg.actionBtn.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: '#1e293b', padding: '12px 16px', borderRadius: '12px', display: 'flex', gap: '4px' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#94a3b8', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></div>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#94a3b8', borderRadius: '50%', animation: 'pulse 1.5s infinite 0.2s' }}></div>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#94a3b8', borderRadius: '50%', animation: 'pulse 1.5s infinite 0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions & Input */}
          <div style={{ padding: '16px', backgroundColor: '#0b1120', borderTop: '1px solid #1e293b', flexShrink: 0 }}>
            {messages.length < 3 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                <button onClick={() => handleSend("What services do you offer?")} style={{ backgroundColor: 'transparent', border: '1px solid #e0ac2f', color: '#fff', padding: '10px 8px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', outline: 'none' }}>What services do you offer?</button>
                <button onClick={() => handleSend("How much does it cost?")} style={{ backgroundColor: 'transparent', border: '1px solid #e0ac2f', color: '#fff', padding: '10px 8px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', outline: 'none' }}>How much does it cost?</button>
                <button onClick={() => handleSend("Open the AI Scanner")} style={{ backgroundColor: 'transparent', border: '1px solid #e0ac2f', color: '#fff', padding: '10px 8px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', outline: 'none' }}>Open the AI Scanner</button>
                <button onClick={() => handleSend("Book a strategy call")} style={{ backgroundColor: 'transparent', border: '1px solid #e0ac2f', color: '#fff', padding: '10px 8px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', outline: 'none' }}>Book a strategy call</button>
              </div>
            )}
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
                placeholder="Ask about this website..." 
                style={{ flex: 1, backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '12px 14px', color: '#fff', fontSize: '14px', outline: 'none' }} 
              />
              <button onClick={() => handleSend(inputValue)} style={{ backgroundColor: '#e0ac2f', border: 'none', borderRadius: '8px', padding: '0 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', outline: 'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '16px', color: '#64748b', fontSize: '12px' }}>
              <a href="/scanner" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg> AI Scanner
              </a>
              <a href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> Book a call
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
