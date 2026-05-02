import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(webRoot, "../..");
const contentDir = path.join(webRoot, "content");
const examplesOut = path.join(contentDir, "examples");
const specSource = path.join(repoRoot, "SPEC.md");

// In local monorepo builds, refresh the web content snapshot from canonical root files.
// In Vercel projects whose Root Directory is apps/web, parent repo files may not be
// visible; in that case the committed content snapshot is used as-is.
if (!existsSync(specSource)) {
  if (!existsSync(path.join(contentDir, "SPEC.md"))) {
    throw new Error("Missing apps/web/content snapshot and repository root SPEC.md is unavailable.");
  }
  process.exit(0);
}

mkdirSync(contentDir, { recursive: true });
rmSync(examplesOut, { recursive: true, force: true });
mkdirSync(examplesOut, { recursive: true });

copyFileSync(specSource, path.join(contentDir, "SPEC.md"));
copyFileSync(path.join(repoRoot, "templates/AUDIENCE.md"), path.join(contentDir, "AUDIENCE.template.md"));

const examplesDir = path.join(repoRoot, "examples");
for (const entry of readdirSync(examplesDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const outDir = path.join(examplesOut, entry.name);
  mkdirSync(outDir, { recursive: true });
  copyFileSync(path.join(examplesDir, entry.name, "AUDIENCE.md"), path.join(outDir, "AUDIENCE.md"));
}
