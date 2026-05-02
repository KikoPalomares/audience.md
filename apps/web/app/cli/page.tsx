import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "../../components/CodeBlock";

const localUsage = `# from the AudienceMD repository checkout
pnpm install
pnpm exec audience --help
pnpm exec audience init ./my-project
pnpm exec audience validate ./my-project`;

const commands = [
  ["audience init [path] [--force]", "Create an AUDIENCE.md from the repository template. Defaults to the current directory and will not overwrite an existing file unless --force is supplied."],
  ["audience validate [path]", "Validate an AUDIENCE.md file, or a directory containing AUDIENCE.md, against the advisory v0.1 rules."],
  ["audiencemd", "Alias binary for the same local CLI commands."]
] as const;

export const metadata: Metadata = {
  title: "CLI",
  description: "Use the local AudienceMD CLI to create and validate AUDIENCE.md files from the repository checkout.",
  alternates: { canonical: "/cli" }
};

export default function CliPage() {
  return (
    <main className="px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-stone-500">CLI</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">Create and validate AUDIENCE.md locally.</h1>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            AudienceMD includes a minimal command-line app in the repository for local development workflows. Use it to start from the canonical template and validate real files without leaving Markdown.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-900/15 bg-amber-50/70 p-5 text-sm leading-6 text-amber-950">
            <strong className="font-semibold">Publication status:</strong> the CLI exists in the repository, but it is not published to npm yet. The commands below assume you are running them from this checkout with pnpm.
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800" href="https://github.com/KikoPalomares/audience.md/tree/main/apps/cli">
              View CLI source
            </Link>
            <Link className="rounded-full border border-stone-950/15 bg-white/60 px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-950/30" href="/template">
              Copy template
            </Link>
          </div>
        </div>

        <CodeBlock label="Local usage" code={localUsage} />
      </div>

      <section className="mx-auto mt-14 max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Commands</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {commands.map(([command, description]) => (
            <div key={command} className="rounded-2xl border border-stone-900/10 bg-white/60 p-5 shadow-sm">
              <h3 className="font-mono text-sm font-semibold text-stone-950">{command}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-stone-900/10 bg-white/45 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-950">What comes next</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-700 sm:text-base">
          A future public release can make the CLI installable outside this repository once the package shape, template packaging, and versioning policy are settled. Until then, the repository CLI is the honest path for testing the workflow and improving the standard.
        </p>
      </section>
    </main>
  );
}
