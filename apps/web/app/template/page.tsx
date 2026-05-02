import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "../../components/CodeBlock";
import { getTemplate } from "../../lib/content";

export const metadata: Metadata = {
  title: "Template",
  description: "Copy the starter AUDIENCE.md template for products, repos, campaigns, communities, content channels, and AI-agent workflows.",
  alternates: { canonical: "/template" }
};

export default function TemplatePage() {
  const template = getTemplate();
  return (
    <main className="px-5 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-stone-500">Template</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">Copy the starter AUDIENCE.md.</h1>
          <p className="mt-4 text-lg leading-8 text-stone-700">
            Use this as a baseline for a product, repo, campaign, community, content channel, or AI-agent workflow. Keep evidence separate from assumptions and write for decisions, not demographics.
          </p>
          <div className="mt-5 flex gap-4 text-sm font-medium">
            <Link className="underline underline-offset-4" href="https://github.com/KikoPalomares/audience.md/blob/main/templates/AUDIENCE.md">Open source file</Link>
            <Link className="underline underline-offset-4" href="/examples">Compare examples</Link>
          </div>
        </div>
        <CodeBlock label="templates/AUDIENCE.md" code={template} />
      </div>
    </main>
  );
}
