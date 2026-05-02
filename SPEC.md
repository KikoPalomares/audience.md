# AudienceMD Specification v0.1 Draft

## 1. Purpose

AudienceMD defines a Markdown document format for describing target audiences in a way that is useful to both humans and AI agents.

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

## 2. Scope

AudienceMD can be used for software, content, campaigns, physical products, services, communities, events, and other audience-sensitive work.

AudienceMD is not limited to customer personas and should not require demographic profiling. The focus is behavioral, situational, ethical, and decision-useful audience context.

## 3. File format

An AudienceMD document is a UTF-8 Markdown file.

The document MAY include YAML frontmatter for metadata. The Markdown body remains the source of truth for human readability.

Recommended frontmatter:

```yaml
---
audiencemd: 0.1
title: "Audience name"
status: draft
last_reviewed: 2026-05-02
owners:
  - "Team or person"
---
```

## 4. Required sections

A conforming v0.1 AudienceMD document SHOULD include the following top-level sections. Exact heading names MAY vary slightly, but tools SHOULD recognize these canonical concepts.

### 4.1 Audience name

A short, specific name for the audience.

Bad:

> Everyone interested in productivity.

Better:

> Solo consultants who sell expertise but struggle to package it into repeatable offers.

### 4.2 Summary

A concise description of who the audience is and why they matter for the project.

### 4.3 Primary audiences

One or more primary audience segments. Each segment SHOULD include:

- description
- needs
- constraints
- current alternatives or behaviors when relevant

### 4.4 Secondary audiences

Optional but recommended. These are adjacent audiences that matter but should not dominate decisions.

### 4.5 Jobs to be done / desired outcomes

The outcomes the audience is trying to create. Prefer situation-based needs over static demographics.

Example:

> When publishing a weekly newsletter, the creator wants to turn scattered ideas into a clear issue without spending all Sunday editing.

### 4.6 Pains, anxieties, and constraints

Problems, frustrations, fears, limitations, and practical realities that affect adoption or response.

### 4.7 Motivations

What makes the audience care enough to act.

### 4.8 Decision criteria

How the audience chooses between options. Include buying criteria, adoption criteria, trust requirements, or switching triggers when relevant.

### 4.9 Language and tone

Words, phrases, examples, reading level, cultural references, tone, claims, and framing likely to resonate or repel.

### 4.10 Anti-goals and exclusions

Who this is not for, what the project should avoid, and what tradeoffs should not be made to chase the wrong audience.

### 4.11 Evidence

Known sources supporting the audience definition. Examples:

- interviews
- analytics
- sales calls
- support tickets
- community posts
- surveys
- founder observation

Evidence SHOULD be labeled with enough detail to judge confidence.

### 4.12 Assumptions

Important claims that are not yet strongly validated.

### 4.13 Open questions

Unknowns that should guide research, experiments, or future revisions.

## 5. Optional sections

AudienceMD documents MAY include:

- Accessibility needs
- Cultural and regional context
- Channels and touchpoints
- Objections
- Triggers
- Non-manipulation boundaries
- Competitive alternatives
- Research log
- Revision history
- Related files

## 6. Normative language

The words MUST, MUST NOT, SHOULD, SHOULD NOT, and MAY are used in the RFC 2119 sense.

For v0.1, the standard is intentionally permissive. A file can be useful before it is perfectly validated.

## 7. Agent behavior guidance

When an AI agent receives an AudienceMD file, it SHOULD:

1. Read the audience definition before producing audience-sensitive work.
2. Respect anti-goals, exclusions, and ethical boundaries.
3. Prefer evidence over assumptions.
4. Mention uncertainty when relying on assumptions.
5. Avoid stereotypes, manipulative framing, or unsupported demographic claims.
6. Ask for missing audience context when the file lacks decision-critical information.

## 8. Validation model

Validation in v0.1 is advisory.

A validator SHOULD check for:

- presence of core sections
- frontmatter version if present
- empty or placeholder content
- evidence/assumption separation
- anti-goals section

A validator SHOULD NOT reject useful Markdown solely because the wording differs from the template.

## 9. Versioning

The initial version is `0.1` and should be treated as unstable. See `docs/versioning.md`.
