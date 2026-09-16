import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import AuthGate from "./components/AuthGate";
import GlobalLayoutWrapper from "./components/GlobalLayoutWrapper";

export const metadata: Metadata = {
  title: "RepuKeel | Reputation & Brand Protection",
  description:
    "Fast, effective reputation and DMCA takedown service. Protecting your intellectual property from piracy and unauthorized use across all platforms.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <Script id="theme-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `
          try {
            var savedTheme = localStorage.getItem('theme');
            var theme = savedTheme === 'dark' || savedTheme === 'light'
              ? savedTheme
              : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.dataset.theme = theme;
          } catch (_) {}
        ` }} />
        <AuthGate>
          <GlobalLayoutWrapper>{children}</GlobalLayoutWrapper>
        </AuthGate>
        
        {/* Global Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3">
          {/* Chatbot FAB */}
          <button 
            className="w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1 bg-[var(--bg-navy)] border-2 border-[var(--gold)] text-white relative"
            aria-label="Open Chatbot"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            <span className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">1</span>
          </button>

          {/* WhatsApp FAB */}
          <a 
            href="https://wa.me/923358687629" 
            className="w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(34,197,94,0.4)] transition-transform hover:-translate-y-1 bg-[#22c55e] text-white relative" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-3-.2-.3A8 8 0 1 1 12 20zm4.3-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.9 1-.1.2-.3.2-.5.1a9 9 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.3 0-.4.2-.5l.5-.5.3-.5.1-.5-1-2.3c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3C8.3 8.5 7.5 9.5 7.5 11s1 2.8 1.2 3 2 3.2 5 4.4c2.5 1 3 .8 3.5.8s1.7-.7 2-1.4.3-1.3.2-1.4z"/>
            </svg>
            <span className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">1</span>
          </a>
        </div>
      </body>
    </html>
  );
}
