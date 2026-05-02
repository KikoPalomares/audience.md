import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "../../components/CodeBlock";

const packageUsage = `# run without installing globally
pnpm --package=@audiencemd/cli dlx audience init ./my-project
pnpm --package=@audiencemd/cli dlx audience validate ./my-project

# npm/npx equivalent
npx @audiencemd/cli init ./my-project
npx @audiencemd/cli validate ./my-project`;

const localUsage = `# from the AudienceMD repository checkout
pnpm install
pnpm exec audience --help
pnpm exec audience init ./my-project
pnpm exec audience validate ./my-project`;

const commands = [
  ["audience init [path] [--force]", "Create an AUDIENCE.md from the packaged canonical template. Defaults to the current directory and will not overwrite an existing file unless --force is supplied."],
  ["audience validate [path]", "Validate an AUDIENCE.md file, or a directory containing AUDIENCE.md, against the advisory v0.1 rules."],
  ["audiencemd", "Alias binary for the same CLI commands."]
] as const;

export const metadata: Metadata = {
  title: "CLI",
  description: "Use the AudienceMD CLI from npm to create and validate AUDIENCE.md files.",
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
            AudienceMD includes a minimal npm-published command-line app for local workflows. Use it to start from the canonical template and validate real files without leaving Markdown.
          </p>
          <div className="mt-6 rounded-2xl border border-emerald-900/15 bg-emerald-50/70 p-5 text-sm leading-6 text-emerald-950">
            <strong className="font-semibold">Publication status:</strong> the CLI is available on npm as <code className="rounded bg-emerald-950/5 px-1.5 py-0.5 font-mono">@audiencemd/cli</code>. The package exposes both <code className="rounded bg-emerald-950/5 px-1.5 py-0.5 font-mono">audience</code> and <code className="rounded bg-emerald-950/5 px-1.5 py-0.5 font-mono">audiencemd</code> binaries.
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

        <div className="grid gap-5">
          <CodeBlock label="Package usage" code={packageUsage} />
          <CodeBlock label="Repository checkout usage" code={localUsage} />
        </div>
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
        <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Install style</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-700 sm:text-base">
          For one-off use, prefer <code className="rounded bg-stone-950/5 px-1.5 py-0.5 font-mono text-stone-900">pnpm --package=@audiencemd/cli dlx audience</code> or <code className="rounded bg-stone-950/5 px-1.5 py-0.5 font-mono text-stone-900">npx @audiencemd/cli</code>. In this monorepo, <code className="rounded bg-stone-950/5 px-1.5 py-0.5 font-mono text-stone-900">pnpm exec audience</code> remains the development path for testing local changes before release.
        </p>
      </section>
    </main>
  );
}
