# AudienceMD web

Minimal Next.js documentation site for AudienceMD.

## Local development

From the repository root:

```bash
pnpm install
pnpm web:dev
```

Or directly:

```bash
pnpm --filter @audiencemd/web dev
```

Build:

```bash
pnpm --filter @audiencemd/web build
```

Repository check:

```bash
pnpm run check
```

## Content model

The site is intentionally static and lightweight. Before `dev`, `check`, or `build`, `scripts/sync-content.mjs` copies canonical repository content into `apps/web/content` when the repository root is available:

- root `SPEC.md` for `/spec`
- `templates/AUDIENCE.md` for `/template`
- `examples/*/AUDIENCE.md` for `/examples`

The `apps/web/content` snapshot is committed so Vercel can also build when the project Root Directory is set to `apps/web`. No CMS, database, auth, or analytics are required.

## Vercel deployment

Do not deploy from this repo until the owner explicitly asks.

Recommended Vercel project settings:

- Framework preset: **Next.js**
- Root directory: `apps/web`
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Output directory: leave default (`.next`)

Because this is a pnpm monorepo, keep `pnpm-workspace.yaml` and the root lockfile committed. Vercel should install from the repository root while building the `apps/web` project.
