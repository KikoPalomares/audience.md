import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AudienceMD — AUDIENCE.md open standard",
  description: "AudienceMD is an open Markdown standard for defining who something is for.",
  openGraph: {
    title: "AudienceMD",
    description: "An open standard for AUDIENCE.md files.",
    type: "website"
  }
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
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-stone-950">
              AUDIENCE.md
            </Link>
            <nav className="flex items-center gap-4 text-sm text-stone-700">
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
            <p>AudienceMD is a draft open standard for audience context.</p>
            <p className="font-mono">v0.1 draft · Markdown-native · agent-readable</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
