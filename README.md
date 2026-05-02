# AudienceMD

AudienceMD is an open, Markdown-native standard for describing a target audience in a way humans and AI agents can both understand and act on.

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

This repository is a **v0.1 draft**. The priority is the standard itself: a clear spec, strong examples, a copyable template, and a minimal advisory JSON schema that tools can build on later.

Tooling packages are scaffolded but intentionally not implemented yet. Phase 0 is spec-first, not parser-first.

## Repository structure

```text
AUDIENCE.md                      Audience definition for AudienceMD itself
SPEC.md                          Draft v0.1 specification
schema/audience.schema.json      Advisory structured schema draft
templates/AUDIENCE.md            Copyable template
examples/*/AUDIENCE.md           Example audience files across domains
docs/                            Rationale, principles, versioning, contributing
packages/parser/                 Future Markdown parser package
packages/validator/              Future validation package
packages/generator/              Future generator package
apps/cli/                        Future command-line app
apps/web/                        Future documentation/site app
```

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
