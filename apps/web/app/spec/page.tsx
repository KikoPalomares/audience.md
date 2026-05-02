import Link from "next/link";
import { MarkdownExcerpt } from "../../components/MarkdownExcerpt";
import { getSpec } from "../../lib/content";

export default function SpecPage() {
  const spec = getSpec();
  return (
    <main className="px-5 py-14">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex flex-col gap-4 border-b border-stone-900/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-stone-500">Specification</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">AudienceMD v0.1 draft</h1>
            <p className="mt-4 max-w-2xl text-stone-700">Rendered from the repository SPEC.md so the website stays aligned with the standard.</p>
          </div>
          <Link className="text-sm font-medium text-stone-950 underline underline-offset-4" href="https://github.com/KikoPalomares/audience.md/blob/main/SPEC.md">
            Source on GitHub
          </Link>
        </div>
        <MarkdownExcerpt markdown={spec} />
      </div>
    </main>
  );
}
