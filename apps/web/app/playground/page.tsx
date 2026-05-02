import type { Metadata } from "next";
import Link from "next/link";
import { PlaygroundClient } from "../../components/PlaygroundClient";
import { getTemplate, readContentFile } from "../../lib/content";

export const metadata: Metadata = {
  title: "Playground",
  description: "Create, edit, validate, preview, copy, and download AUDIENCE.md files locally in your browser.",
  alternates: { canonical: "/playground" }
};

export default function PlaygroundPage() {
  const template = getTemplate();
  const sample = readContentFile("examples/saas/AUDIENCE.md");

  return (
    <main className="px-5 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-stone-500">Playground</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Create and validate an AUDIENCE.md in your browser.
          </h1>
          <p className="mt-4 text-lg leading-8 text-stone-700">
            Start from guided prompts, paste an existing file, preview the Markdown, and download the result. This playground runs locally in the browser: no backend, account, analytics, or persistence.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <Link className="underline underline-offset-4" href="/template">View canonical template</Link>
            <Link className="underline underline-offset-4" href="/spec">Read the spec</Link>
            <Link className="underline underline-offset-4" href="/examples">Compare examples</Link>
          </div>
        </div>

        <PlaygroundClient template={template} sample={sample} />
      </div>
    </main>
  );
}
