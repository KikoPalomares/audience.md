import type { Metadata } from "next";
import Link from "next/link";
import { getExamples } from "../../lib/content";

export const metadata: Metadata = {
  title: "Examples",
  description: "Browse complete AudienceMD example files for software, SaaS, campaigns, content, products, communities, courses, and AI agents.",
  alternates: { canonical: "/examples" }
};

export default function ExamplesPage() {
  const examples = getExamples();
  return (
    <main className="px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-stone-500">Examples</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">AudienceMD across real contexts.</h1>
          <p className="mt-4 text-lg leading-8 text-stone-700">
            Complete example files for software, SaaS, campaigns, content, products, communities, courses, and AI agents.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {examples.map((example) => (
            <Link key={example.slug} href={example.href} className="group min-w-0 rounded-2xl border border-stone-900/10 bg-white/60 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-950/25 hover:bg-white sm:p-6">
              <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <h2 className="text-xl font-semibold tracking-tight text-stone-950">{example.title}</h2>
                <span className="break-all font-mono text-xs text-stone-500 group-hover:text-stone-950">{example.slug}</span>
              </div>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-stone-700">{example.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
