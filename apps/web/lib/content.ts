import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const contentRoot = path.join(process.cwd(), "content");

export function readContentFile(relativePath: string): string {
  return readFileSync(path.join(contentRoot, relativePath), "utf8").trim();
}

export function getTemplate(): string {
  return readContentFile("AUDIENCE.template.md");
}

export function getSpec(): string {
  return readContentFile("SPEC.md");
}

export type ExampleSummary = {
  slug: string;
  title: string;
  href: string;
  summary: string;
};

function titleFromMarkdown(markdown: string, fallback: string): string {
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1];
  if (heading) return heading.replace(/^AUDIENCE\.md\s+—\s+/i, "");

  const title = markdown.match(/^title:\s*["']?([^"'\n]+)["']?$/m)?.[1];
  return title || fallback;
}

function summaryFromMarkdown(markdown: string): string {
  const match = markdown.match(/## Summary\n+([\s\S]*?)(?=\n##\s)/);
  if (!match) return "Audience definition example.";
  return match[1]
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getExamples(): ExampleSummary[] {
  const examplesDir = path.join(contentRoot, "examples");
  return readdirSync(examplesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const markdown = readFileSync(path.join(examplesDir, entry.name, "AUDIENCE.md"), "utf8");
      return {
        slug: entry.name,
        title: titleFromMarkdown(markdown, entry.name),
        href: `https://github.com/KikoPalomares/audience.md/blob/main/examples/${entry.name}/AUDIENCE.md`,
        summary: summaryFromMarkdown(markdown)
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}
