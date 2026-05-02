# AudienceMD Specification v0.1

## 1. Purpose

AudienceMD defines a Markdown-native document format for describing target audiences in a way that is useful to both humans and AI agents.

The canonical filename is:

```text
AUDIENCE.md
```

An AudienceMD file should answer:

- Who is this for?
- What are they trying to achieve?
- What pains, constraints, beliefs, and anxieties shape their decisions?
- How should we communicate with them?
- Who is explicitly not the target?
- What do we know, what are we assuming, and what still needs validation?

The standard exists to make audience context explicit, portable, versionable, and safe to reuse across projects, campaigns, products, communities, and AI workflows.

## 2. Scope

AudienceMD can be used for software, SaaS products, content, campaigns, physical products, services, communities, events, courses, internal initiatives, and other audience-sensitive work.

AudienceMD is not a customer-persona format. It does not require demographic profiling, fictional biographies, avatars, or psychographic theater. Demographics MAY be included only when they are relevant, accurate, ethically justified, and useful for decisions.

The focus is behavioral, situational, ethical, and decision-useful audience context.

## 3. File format

An AudienceMD document is a UTF-8 Markdown file.

The Markdown body is the source of truth. It MUST remain readable and useful without a parser, web app, proprietary tool, or generated sidecar file.

A document MAY include YAML frontmatter for metadata. Frontmatter is advisory metadata; it MUST NOT replace the Markdown body.

Recommended frontmatter fields:

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

Frontmatter field semantics:

| Field | Required | Meaning |
| --- | --- | --- |
| `audiencemd` | Optional | AudienceMD spec version. For v0.1, use the string `"0.1"`. |
| `title` | Optional | Human-readable title for the audience file. |
| `status` | Optional | Suggested values: `draft`, `reviewed`, `validated`, `archived`. |
| `last_reviewed` | Optional | ISO date (`YYYY-MM-DD`) of the last meaningful review. |
| `owners` | Optional | People, teams, or roles responsible for maintaining the file. |

Tools MAY preserve unknown frontmatter fields.

## 4. Canonical sections

A conforming v0.1 AudienceMD document SHOULD use these canonical top-level Markdown headings exactly. Tools SHOULD recognize these names first and MAY support aliases for older or informal files.

Required core sections:

1. `Audience name`
2. `Summary`
3. `Primary audiences`
4. `Jobs to be done / desired outcomes`
5. `Pains, anxieties, and constraints`
6. `Motivations`
7. `Decision criteria`
8. `Language and tone`
9. `Anti-goals and exclusions`
10. `Evidence`
11. `Assumptions`
12. `Open questions`

Optional standard sections:

- `Secondary audiences`
- `Related files`
- `Accessibility needs`
- `Cultural and regional context`
- `Channels and touchpoints`
- `Objections`
- `Triggers`
- `Non-manipulation boundaries`
- `Competitive alternatives`
- `Research log`
- `Revision history`

Section order SHOULD follow the template unless a project has a clear reason to differ. Additional sections MAY be added, but they SHOULD NOT obscure or rename the required core sections.

### 4.1 Audience name

A short, specific name for the audience.

Bad:

> Everyone interested in productivity.

Better:

> Solo consultants who sell expertise but struggle to package it into repeatable offers.

### 4.2 Summary

A concise description of who the audience is, what situation they are in, and why this audience matters for the project.

### 4.3 Primary audiences

One or more primary audience segments. Each segment SHOULD include:

- description
- needs
- constraints
- current alternatives or behaviors when relevant

Primary audiences are the groups whose success should drive product, content, copy, or community decisions.

### 4.4 Secondary audiences

Adjacent audiences that matter but should not dominate decisions. This section is optional but recommended when the work has multiple stakeholders, buyers, users, contributors, or observers.

### 4.5 Jobs to be done / desired outcomes

The outcomes the audience is trying to create. Prefer situation-based needs over static demographics.

Example:

> When publishing a weekly newsletter, the creator wants to turn scattered ideas into a clear issue without spending all Sunday editing.

### 4.6 Pains, anxieties, and constraints

Problems, frustrations, fears, limitations, and practical realities that affect adoption or response.

Include constraints that shape behavior, such as budget, time, skill, access, regulation, trust, social risk, or operational complexity.

### 4.7 Motivations

What makes the audience care enough to act. Motivations SHOULD explain why this matters now, not just why it is theoretically useful.

### 4.8 Decision criteria

How the audience chooses between options. Include buying criteria, adoption criteria, trust requirements, switching triggers, rejection triggers, and non-negotiable tradeoffs when relevant.

### 4.9 Language and tone

Words, phrases, examples, reading level, cultural references, tone, claims, and framing likely to resonate or repel.

This section SHOULD help humans and agents communicate in language the audience recognizes without mimicking stereotypes or manufacturing false intimacy.

### 4.10 Anti-goals and exclusions

Who this is not for, what the project should avoid, and what tradeoffs should not be made to chase the wrong audience.

This section SHOULD include ethical boundaries when relevant: manipulative tactics to avoid, claims not to make, vulnerabilities not to exploit, and groups not to target.

### 4.11 Evidence

Known sources supporting the audience definition. Examples:

- interviews
- analytics
- sales calls
- support tickets
- community posts
- surveys
- field observations
- founder or maintainer observation

Evidence SHOULD be labeled with enough detail to judge confidence. A useful evidence item names the source, the finding, the date or time period when known, and the confidence level when possible.

### 4.12 Assumptions

Important claims that are not yet strongly validated.

Assumptions are allowed. Hiding them is not. AudienceMD files SHOULD make weak evidence visible so teams and agents do not treat guesses as facts.

### 4.13 Open questions

Unknowns that should guide research, experiments, analytics review, interviews, or future revisions.

## 5. Markdown-native principle

AudienceMD is Markdown first, machine-assisted second.

Tools SHOULD parse helpful structure from headings, lists, and optional frontmatter, but they SHOULD NOT require authors to write unreadable Markdown for tooling convenience. A plain `AUDIENCE.md` file with good prose is more valuable than a perfectly structured file full of empty placeholders.

Structured representations, schemas, parsers, validators, and generators are secondary artifacts. They MUST remain compatible with the human-readable Markdown file.

## 6. Anti-persona and anti-demographic stance

AudienceMD rejects fake precision.

A document SHOULD NOT invent names, ages, biographies, stock-photo identities, or demographic details unless they directly support an ethical decision. It SHOULD NOT reduce people to stereotypes, protected characteristics, or manipulative targeting categories.

AudienceMD encourages:

- situations over stereotypes
- behavior over identity labels
- evidence over vibes
- constraints over caricatures
- exclusions and boundaries over growth-at-any-cost targeting

## 7. Agent behavior guidance

When an AI agent receives an AudienceMD file, it SHOULD:

1. Read the audience definition before producing audience-sensitive work.
2. Treat anti-goals, exclusions, and ethical boundaries as constraints, not inspiration.
3. Prefer evidence over assumptions.
4. Mention uncertainty when relying on assumptions.
5. Avoid stereotypes, manipulative framing, unsupported demographic claims, and invented audience facts.
6. Ask for missing audience context when the file lacks decision-critical information.
7. Preserve the distinction between primary and secondary audiences.
8. Avoid optimizing for excluded audiences even when doing so might increase short-term engagement.

An agent SHOULD NOT silently override `AUDIENCE.md` with generic best practices when the file provides specific audience constraints.

## 8. Validation model

Validation in v0.1 is advisory.

A validator SHOULD check for:

- optional frontmatter version when present
- presence of required core sections
- use of canonical section names
- empty or placeholder content
- separation of evidence and assumptions
- presence of anti-goals and exclusions
- unsupported demographic claims when detectable

A validator SHOULD warn, not fail hard, for minor heading variations in v0.1. It SHOULD NOT reject useful Markdown solely because the wording differs from the template.

A validator MUST NOT require a JSON representation as the source of truth.

## 9. Versioning semantics

The initial version is `0.1` and should be treated as unstable.

For v0.x:

- section names, schema fields, and validation guidance MAY change
- changes SHOULD preserve human-authored Markdown whenever possible
- tooling SHOULD be permissive and provide migration warnings instead of destructive rewrites

A future `1.0` should signal stable core section semantics, conformance levels, an extension mechanism, tested examples, and clearer validator behavior.

See `docs/versioning.md`.

## 10. Normative language

The words MUST, MUST NOT, SHOULD, SHOULD NOT, and MAY are used in the RFC 2119 sense.

For v0.1, the standard is intentionally practical and permissive. A file can be useful before it is perfectly validated.
