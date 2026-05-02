import Link from "next/link";
import { CodeBlock } from "../components/CodeBlock";

const compactExample = `---
audiencemd: "0.1"
title: "Privacy-first photo backup"
status: reviewed
---

# AUDIENCE.md — Privacy-first photo backup

## Audience name
Families who want safer photo backups without turning private memories into ad data.

## Summary
For non-technical households with scattered phones, laptops, and cloud accounts who need a trustworthy way to preserve photos.

## Decision criteria
- Clear privacy model
- Easy restore before advanced features
- Works without reorganizing everything first

## Anti-goals and exclusions
Do not target people who want public social sharing or growth loops.`;

const useCases = [
  "Code projects",
  "SaaS products",
  "Marketing campaigns",
  "Newsletters",
  "Physical products",
  "Communities",
  "AI agents",
  "Content channels"
];

const relationships = [
  ["README.md", "what it is and how to use it"],
  ["AGENTS.md", "how agents should work inside a repo"],
  ["DESIGN.md", "how it should look, feel, and behave"],
  ["SOUL.md", "the voice, values, and operating posture"],
  ["AUDIENCE.md", "who all of that is for"]
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          <div className="min-w-0">
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.25em] text-stone-500">AudienceMD v0.1 standard</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-stone-950 sm:text-6xl lg:text-7xl">
              AUDIENCE.md is the missing file for who something is for.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
              AudienceMD is an open Markdown standard for defining target audiences so humans and AI agents can adapt product, copy, content, design, docs, and decisions with shared context.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800" href="/spec">View spec</Link>
              <Link className="rounded-full border border-stone-950/15 bg-white/60 px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-950/30" href="/template">Copy template</Link>
              <Link className="rounded-full border border-stone-950/15 bg-white/60 px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-950/30" href="/examples">See examples</Link>
              <Link className="rounded-full border border-stone-950/15 bg-white/60 px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-950/30" href="/cli">Use CLI</Link>
              <Link className="rounded-full border border-stone-950/15 bg-white/60 px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-950/30" href="https://github.com/KikoPalomares/audience.md">GitHub</Link>
            </div>
          </div>
          <CodeBlock label="AUDIENCE.md" code={compactExample} />
        </div>
      </section>

      <section className="border-y border-stone-900/10 bg-white/45 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950">A source of truth for audience context.</h2>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              AudienceMD is not persona theater. It captures practical needs, constraints, motivations, decision criteria, evidence, assumptions, language guidance, and explicit anti-goals in a file that stays readable without proprietary tooling.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <div key={useCase} className="rounded-2xl border border-stone-900/10 bg-paper p-5 text-sm font-medium text-stone-800 shadow-sm">
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 rounded-3xl border border-stone-900/10 bg-white/55 p-6 shadow-sm sm:p-8">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-stone-500">Local tooling</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">A small CLI is included in the repository.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-700 sm:text-base">
              Create a starter file and validate AudienceMD documents from this checkout with <code className="rounded bg-stone-950/5 px-1.5 py-0.5 font-mono text-stone-900">pnpm exec audience init ./my-project</code> and <code className="rounded bg-stone-950/5 px-1.5 py-0.5 font-mono text-stone-900">pnpm exec audience validate ./my-project</code>. It is not published to npm yet.
            </p>
            <Link className="mt-5 inline-flex text-sm font-medium text-stone-950 underline underline-offset-4" href="/cli">Read the CLI notes</Link>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">Fits next to the files teams and agents already read.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {relationships.map(([file, meaning]) => (
              <div key={file} className="rounded-2xl border border-stone-900/10 bg-white/55 p-5">
                <h3 className="font-mono text-sm font-semibold text-stone-950">{file}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
