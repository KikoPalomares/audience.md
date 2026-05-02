---
audiencemd: "0.1"
title: "AudienceMD"
status: draft
last_reviewed: 2026-05-02
owners:
  - "Project maintainers"
---

# AUDIENCE.md — AudienceMD

## Audience name

Builders who need reusable audience context for humans and AI agents.

## Summary

AudienceMD is for people and teams who repeatedly explain “who this is for” to collaborators, AI tools, agencies, contributors, or themselves. They want audience understanding to be explicit, inspectable, versioned, and reusable instead of trapped in chats, slide decks, research folders, or one person's head.

## Primary audiences

### 1. Indie builders and founders

They are creating products, landing pages, content, or campaigns quickly, often with AI assistance. They need a lightweight way to keep positioning and audience context consistent across many outputs.

**Needs**

- avoid rewriting audience context in every prompt
- align product, copy, and content decisions
- give agents enough context to produce useful work
- document assumptions before market feedback arrives

**Constraints**

- limited time
- limited research depth early on
- low tolerance for enterprise process
- need immediate practical value

**Current alternatives or behaviors**

- prompt fragments copied between chats
- one-off positioning docs
- founder intuition held in memory
- lightweight strategy notes in project folders

### 2. AI-assisted product and marketing teams

They use AI agents for copy, strategy, UX, research synthesis, content, and automation. They need a stable audience artifact that can be attached to workflows.

**Needs**

- reduce prompt drift
- make agent outputs more audience-aware
- keep teams aligned across channels
- distinguish evidence from assumptions

**Constraints**

- existing docs are scattered
- stakeholders use different language
- tooling changes often
- trust requires transparency

**Current alternatives or behaviors**

- marketing briefs, research decks, CRM notes, and prompt libraries
- custom GPT/project instructions that drift over time
- repeated manual context-setting for each agent task

### 3. Open-source maintainers and tool builders

They may adopt, extend, parse, validate, or generate AudienceMD files. They care about a simple spec that is easy to implement.

**Needs**

- stable sections and semantics
- examples across domains
- machine-readable schema path
- permissive license

**Constraints**

- will reject vague marketing jargon
- need clear versioning
- need low dependency burden

**Current alternatives or behaviors**

- ad hoc Markdown conventions
- README sections
- custom JSON/YAML configs
- no dedicated audience artifact at all

## Secondary audiences

- creators building newsletters, podcasts, courses, or communities
- agencies managing client positioning and campaigns
- product researchers turning insights into operational context
- developers building AI workflows that need audience inputs

## Jobs to be done / desired outcomes

- When starting a new project, define the intended audience clearly enough that a collaborator or agent can make decent first decisions.
- When generating copy, content, UX, or features, ground outputs in audience needs, objections, vocabulary, and constraints.
- When revisiting strategy, compare new evidence against old assumptions.
- When onboarding collaborators, transfer audience understanding without a long meeting.

## Pains, anxieties, and constraints

- AI outputs sound generic because the audience is underspecified.
- Personas feel fake, decorative, or disconnected from decisions.
- Research insights exist but do not travel into daily execution.
- Teams confuse “target audience” with demographics only.
- Audience documents become too heavy and stop being maintained.
- Builders do not want a new SaaS tool just to write down who something is for.

## Motivations

- better AI outputs with less prompt repetition
- clearer product and content decisions
- a public standard others can adopt
- a simple file format that survives tool churn
- an ethical alternative to manipulative targeting docs

## Decision criteria

AudienceMD will be compelling if it is:

- immediately understandable from the README
- useful after copying one template
- broad enough for non-code projects
- strict enough to support validation later
- humble about uncertainty
- easy to extend without breaking the core
- readable as normal Markdown

## Language and tone

Use plain, builder-friendly language. Avoid corporate persona theater. Prefer concrete terms like “needs,” “constraints,” “decision criteria,” “evidence,” and “anti-goals.” Explain standards carefully but do not sound academic.

## Anti-goals and exclusions

- Do not become a surveillance or microtargeting format.
- Do not require proprietary software.
- Do not force fake personas or demographic stereotypes.
- Do not overfit to SaaS.
- Do not make Markdown unreadable for the sake of tooling.
- Do not encourage agents to exploit fears, identity traits, or vulnerable states.

## Evidence

- Founder observation: AI-assisted work repeatedly needs audience context rewritten into prompts; confidence medium.
- Product intuition: Markdown standards such as README-style conventions travel better than heavyweight platforms; confidence medium.
- Pattern observed across teams: research and positioning docs often fail to become operational context for agents; confidence low-to-medium pending more examples.

## Assumptions

- Builders will adopt a simple Markdown convention faster than a heavy platform.
- Tool builders can parse useful structure from predictable Markdown headings.
- Explicit anti-goals and evidence sections will improve ethical use.
- A single `AUDIENCE.md` can support many domains without becoming too generic.

## Open questions

- How strict should v1.0 conformance be?
- Should the canonical file support multiple audience segments in one document, or encourage separate files for complex products?
- Which metadata fields are useful enough to keep in frontmatter long term?
- What validator warnings catch real problems without punishing useful Markdown?
