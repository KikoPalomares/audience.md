# AudienceMD

AudienceMD is an open, Markdown-native standard for describing a target audience in a way humans and AI agents can both understand and act on.

The core artifact is an `AUDIENCE.md` file: a plain-text document that captures who something is for, what they need, what they believe, what constraints they have, how they decide, and how not to manipulate or misrepresent them.

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

## Current status

This repository is a **v0.1 draft**. The priority is the standard itself: strong examples, a clear template, and a minimal JSON schema that tools can build on later.

Tooling packages are scaffolded but intentionally not implemented yet.

## Repository structure

```text
AUDIENCE.md                     Audience definition for AudienceMD itself
SPEC.md                         Draft v0.1 specification
schema/audience.schema.json      Initial structured schema draft
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

1. Copy `templates/AUDIENCE.md` into your project, campaign, or product workspace.
2. Rename or keep it as `AUDIENCE.md`.
3. Fill it with concrete observations, not aspirational fluff.
4. Commit it next to the work it informs.
5. Give it to humans and AI agents before they make audience-sensitive decisions.

Example:

```bash
cp templates/AUDIENCE.md ./AUDIENCE.md
```

Then use it in prompts:

> Read `AUDIENCE.md` first. Propose a landing page for this product that respects the audience constraints, decision triggers, objections, and anti-goals.

## Design philosophy

AudienceMD is:

- **Markdown-first** — readable and writable by anyone.
- **Agent-friendly** — structured enough for AI systems to parse and use.
- **Portable** — not tied to code, startups, marketing, or a single tool.
- **Evidence-aware** — separates known facts from assumptions.
- **Ethical by default** — includes anti-goals, boundaries, and manipulation risks.
- **Iterative** — audiences change; the file should evolve with evidence.

## Minimal valid shape

A useful AudienceMD file should include:

- audience name and summary
- primary and secondary audiences
- jobs-to-be-done or desired outcomes
- pains, anxieties, and constraints
- motivations and decision criteria
- language, tone, and messaging guidance
- exclusions and anti-goals
- evidence, assumptions, and open questions

See [`SPEC.md`](SPEC.md) for the draft specification.

## License

MIT. See [`LICENSE`](LICENSE).
