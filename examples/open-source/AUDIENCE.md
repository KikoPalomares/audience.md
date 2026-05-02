---
audiencemd: "0.1"
title: "Open-source developer CLI"
status: draft
last_reviewed: 2026-05-02
owners:
  - "Example maintainers"
---

# AUDIENCE.md — Open-source developer CLI

## Audience name

Developers who need a small CLI to solve one painful workflow quickly, safely, and predictably without adopting a whole platform.

## Summary

This audience arrives with an immediate problem, usually from a search result, README link, package registry, issue comment, or peer recommendation. They will run one install command, skim examples, and judge the project by the first five minutes: does it work, does it explain itself, and does it appear safe to run on my machine or CI?

## Primary audiences

### 1. Practicing developers with an immediate workflow problem

Developers maintaining applications, libraries, docs, infrastructure, or internal tooling who want the CLI to remove a repetitive manual step.

**Needs**

- one clear install path and one first successful command
- examples for common inputs, outputs, and failure cases
- predictable behavior across local machines and CI
- transparent filesystem, network, telemetry, and credential behavior

**Constraints**

- low patience for unclear docs or unexplained flags
- diverse shells, OS versions, package managers, and CI environments
- security caution around unknown CLIs and postinstall scripts
- limited time to debug a tool that is not their main job

**Current alternatives or behaviors**

- custom shell scripts copied between projects
- manual checklist steps in README files
- larger frameworks that include the feature but require migration
- one-off snippets from Stack Overflow, blogs, or AI-generated commands

### 2. Maintainers evaluating whether to recommend or depend on it

People responsible for adding the CLI to a project, template, internal guide, or CI workflow.

**Needs**

- stable command semantics and documented breaking-change policy
- minimal dependency risk and clear license
- reproducible behavior in automation
- useful errors that reduce support burden

**Constraints**

- reputational risk if the tool breaks contributors’ environments
- dependency-review requirements in companies or mature OSS projects
- need to support multiple contributor skill levels

**Current alternatives or behaviors**

- pinning older internal scripts
- avoiding automation because the available tools feel too broad or risky
- vendor-specific tools bundled with larger ecosystems

## Secondary audiences

- contributors who want to add flags, integrations, or docs
- security reviewers checking supply-chain and network behavior
- teams considering internal adoption after individual developers prove value

## Jobs to be done / desired outcomes

- When the workflow problem appears, they want a command that succeeds before they lose context.
- When a command fails, they want an error that tells them what happened, what changed, and what to do next.
- When adding the CLI to CI, they want deterministic output and version pinning.
- When recommending it to a team, they want confidence that it will not surprise users with hidden side effects.

## Pains, anxieties, and constraints

- READMEs that explain the philosophy but not the first command
- hidden telemetry, network calls, credential access, or file mutation
- breaking changes disguised as minor releases
- too many dependencies for a narrow job
- examples that only cover the happy path
- tools that become platforms before becoming reliable

## Motivations

- remove a boring repeated task
- standardize a workflow across projects or teammates
- reduce mistakes from manual commands
- trust a small tool enough to forget about it most days

## Decision criteria

- installation is fast, reversible, and compatible with their environment
- first command produces visible, understandable value
- docs include real examples, failure behavior, and side effects
- license, maintainer activity, and release history look healthy
- defaults are safe; destructive actions require explicit confirmation or dry-run visibility
- uninstall and migration paths are clear

## Language and tone

Technical, concise, example-led. Start with commands and outcomes, then explain options. Use precise claims: “writes to ./dist,” “does not send telemetry,” “exits non-zero on invalid config.” Avoid vague productivity promises, mascot-heavy branding before utility, and “just” language that minimizes setup complexity.

## Anti-goals and exclusions

- not for non-technical end users as a primary audience
- do not optimize for feature breadth at the cost of reliability and understandable defaults
- do not hide side effects, network calls, or data collection in docs or examples
- do not require users to join a hosted service unless the CLI’s purpose genuinely requires it

## Evidence

- Common OSS adoption behavior: developers judge CLI projects by README clarity, install safety, and the speed of first success. Confidence: high.
- Supply-chain context: unknown developer tools face increased scrutiny around dependencies, postinstall scripts, and telemetry. Confidence: high.
- Maintainer observation pattern: tools with good failure messages reduce issue churn and support cost. Confidence: medium.

## Assumptions

- Minimal dependencies and transparent side effects increase trust more than a polished landing page at launch.
- A narrow, reliable CLI can compete with broader tools if it owns one workflow clearly.
- Developers will tolerate rough visual design if examples, releases, and behavior are solid.

## Open questions

- Which package managers and OS combinations are mandatory for v1 trust?
- What dry-run, confirmation, or backup behavior is needed before file mutation?
- Which security guarantees should be in the README versus a separate security document?
