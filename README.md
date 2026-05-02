# AudienceMD

AudienceMD is an open, Markdown-native standard for describing a target audience in a way humans and AI agents can both understand and act on.

- Website: <https://audiencemd.ai/>
- Spec: [`SPEC.md`](SPEC.md)
- Changelog: [`CHANGELOG.md`](CHANGELOG.md)
- Security: [`SECURITY.md`](SECURITY.md)

The core artifact is an `AUDIENCE.md` file: a plain-text document that captures who something is for, what they need, what they believe, what constraints they have, how they decide, what evidence supports the definition, and how not to manipulate or misrepresent them.

AudienceMD is designed for more than software repositories. It should work for:

- SaaS products and startups
- marketing campaigns and landing pages
- newsletters, podcasts, and content channels
- open-source projects and developer tools
- physical products
- communities, courses, events, and services

The goal is simple: make “who is this for?” explicit, portable, versionable, and useful.

## Why this should exist

AI agents are increasingly writing copy, designing flows, prioritizing features, generating content, and making product decisions. They usually receive audience context as loose prompt text, scattered notes, personas, or tribal knowledge.

That breaks down quickly.

AudienceMD gives teams and agents a shared source of truth that can live next to the work:

- versioned in Git
- readable without special tools
- strict enough to guide decisions
- flexible enough for real-world audiences
- portable across products, campaigns, and tools
- explicit about evidence, assumptions, and exclusions

## Current status

This repository contains the **AudienceMD v0.1 standard**. The priority is the standard itself: a clear spec, strong examples, a copyable template, a minimal advisory JSON schema, and small local tooling that can validate real `AUDIENCE.md` files without hiding the Markdown.

GitHub Actions runs the repository checks and web build on pushes and pull requests to `main`.

## Repository structure

```text
AUDIENCE.md                      Audience definition for AudienceMD itself
SPEC.md                          v0.1 specification
schema/audience.schema.json      Advisory structured schema
templates/AUDIENCE.md            Copyable template
examples/*/AUDIENCE.md           Example audience files across domains
docs/                            Rationale, principles, versioning, contributing
packages/parser/                 Dependency-free Markdown/frontmatter parser
packages/validator/              Advisory v0.1 validator
packages/generator/              Future generator package
apps/cli/                        Minimal command-line app
apps/web/                        Documentation/site app
```

## Examples

The repository includes complete example `AUDIENCE.md` files across different domains:

- [`examples/ai-agent/AUDIENCE.md`](examples/ai-agent/AUDIENCE.md) — AI agent for personal knowledge work
- [`examples/community/AUDIENCE.md`](examples/community/AUDIENCE.md) — local repair and reuse community
- [`examples/course/AUDIENCE.md`](examples/course/AUDIENCE.md) — practical course for first-time technical founders
- [`examples/marketing-campaign/AUDIENCE.md`](examples/marketing-campaign/AUDIENCE.md) — privacy-first family photo backup campaign
- [`examples/mobile-app/AUDIENCE.md`](examples/mobile-app/AUDIENCE.md) — medication routine mobile app
- [`examples/newsletter/AUDIENCE.md`](examples/newsletter/AUDIENCE.md) — independent AI strategy newsletter
- [`examples/open-source/AUDIENCE.md`](examples/open-source/AUDIENCE.md) — open-source developer CLI
- [`examples/physical-product/AUDIENCE.md`](examples/physical-product/AUDIENCE.md) — ergonomic travel keyboard
- [`examples/saas/AUDIENCE.md`](examples/saas/AUDIENCE.md) — SaaS onboarding analytics product
- [`examples/youtube-channel/AUDIENCE.md`](examples/youtube-channel/AUDIENCE.md) — calm home cooking YouTube channel

Use them as concrete references for structure, specificity, evidence/assumption separation, and non-manipulative audience guidance.

## Validation

Run the repository check to validate the root file, template, examples, package syntax, CLI syntax, and web app typecheck:

```bash
pnpm run check
```

The validator is intentionally small and advisory-minded: it enforces required canonical sections, canonical order, and unknown top-level `##` headings, with warnings for optional frontmatter guidance.

## Quick start

1. Copy `templates/AUDIENCE.md` into your project, campaign, product, content, or community workspace.
2. Keep the filename as `AUDIENCE.md` when possible.
3. Fill it with concrete observations, not aspirational fluff.
4. Separate evidence from assumptions.
5. Commit or store it next to the work it informs.
6. Give it to humans and AI agents before they make audience-sensitive decisions.

Example:

```bash
cp templates/AUDIENCE.md ./AUDIENCE.md
```

Or use the local CLI from this checkout:

```bash
pnpm exec audience init ./my-project
pnpm exec audience validate ./my-project
```

The CLI package is not published to npm yet; the commands above are for local development in this repository. Package metadata is prepared for a future public v0.1 release, but publication is intentionally manual. See the website's `/cli` page or [`apps/cli/README.md`](apps/cli/README.md) for the current command reference.

Then use it in prompts:

> Read `AUDIENCE.md` first. Propose a landing page for this product that respects the audience constraints, decision criteria, language guidance, evidence limits, and anti-goals.

## Canonical sections

A v0.1 AudienceMD file should use these canonical top-level sections:

Required core sections:

- `Audience name`
- `Summary`
- `Primary audiences`
- `Jobs to be done / desired outcomes`
- `Pains, anxieties, and constraints`
- `Motivations`
- `Decision criteria`
- `Language and tone`
- `Anti-goals and exclusions`
- `Evidence`
- `Assumptions`
- `Open questions`

Optional standard sections include `Secondary audiences`, `Related files`, `Accessibility needs`, `Cultural and regional context`, `Channels and touchpoints`, `Objections`, `Triggers`, `Non-manipulation boundaries`, `Competitive alternatives`, `Research log`, and `Revision history`.

## Optional frontmatter

AudienceMD is Markdown-first. YAML frontmatter is optional metadata, not the source of truth.

Recommended frontmatter:

```yaml
---
audiencemd: "0.1"
title: "Audience name or project name"
status: draft
last_reviewed: 2026-05-02
owners:
  - "Team or person"
---
```

## Design philosophy

AudienceMD is:

- **Markdown-first** — readable and writable by anyone.
- **Agent-friendly** — structured enough for AI systems to parse and use.
- **Portable** — not tied to code, startups, marketing, or a single tool.
- **Evidence-aware** — separates known facts from assumptions.
- **Anti-persona** — does not require fake biographies, demographic stereotypes, or decorative avatars.
- **Ethical by default** — includes anti-goals, boundaries, and manipulation risks.
- **Iterative** — audiences change; the file should evolve with evidence.

## Agent expectations

When an AI agent receives an `AUDIENCE.md` file, it should read it before doing audience-sensitive work, treat anti-goals as constraints, prefer evidence over assumptions, call out uncertainty, and avoid inventing audience facts.

It should not silently replace the file with generic best practices.

## License

MIT. See [`LICENSE`](LICENSE).
