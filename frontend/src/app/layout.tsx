import "./globals.css";
import type { Metadata } from "next";
import AuthGate from "./components/AuthGate";

export const metadata: Metadata = {
  title: "RepuKeel | Reputation & Brand Protection",
  description:
    "Fast, effective reputation and DMCA takedown service. Protecting your intellectual property from piracy and unauthorized use across all platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var savedTheme = localStorage.getItem('theme');
            var theme = savedTheme === 'dark' || savedTheme === 'light'
              ? savedTheme
              : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.dataset.theme = theme;
          } catch (_) {}
        ` }} />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <AuthGate>{children}</AuthGate>
      </body>
    </html>
  );
}
