import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import AuthGate from "./components/AuthGate";

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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
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
        <AuthGate>{children}</AuthGate>
      </body>
    </html>
  );
}
