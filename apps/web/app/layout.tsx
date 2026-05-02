import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = "https://audiencemd.ai";
const siteTitle = "AudienceMD — AUDIENCE.md open standard";
const siteDescription =
  "AudienceMD is an open Markdown standard for defining target audiences so humans and AI agents can adapt product, copy, content, design, docs, and decisions with shared context.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — AudienceMD"
  },
  description: siteDescription,
  applicationName: "AudienceMD",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }]
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "AudienceMD",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription
  }
};

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
  colorScheme: "light"
};

const navItems = [
  ["Spec", "/spec"],
  ["Template", "/template"],
  ["Examples", "/examples"],
  ["GitHub", "https://github.com/KikoPalomares/audience.md"]
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <header className="sticky top-0 z-50 border-b border-stone-900/10 bg-paper/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:px-5 sm:py-4">
            <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-stone-950">
              AUDIENCE.md
            </Link>
            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-stone-700 sm:justify-end">
              {navItems.map(([label, href]) => (
                <Link key={href} href={href} className="transition hover:text-stone-950">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-stone-900/10 px-5 py-10 text-sm text-stone-600">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>AudienceMD is an open standard for audience context.</p>
            <p className="font-mono">v0.1 standard · Markdown-native · agent-readable</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
