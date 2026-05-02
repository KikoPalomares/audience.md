# AUDIENCE.md — Open-source developer CLI

## Audience name

Developers who want a reliable CLI that solves one painful workflow without becoming a platform.

## Summary

This audience finds the project through GitHub, package registries, search, or recommendations. They will try it quickly, judge it harshly, and leave if installation, docs, or defaults are confusing.

## Primary audiences

### 1. Practicing developers with an immediate workflow problem

They are not browsing for philosophy. They want the tool to work in minutes.

**Needs**

- clear install command
- obvious first successful command
- predictable behavior
- examples for common cases

**Constraints**

- limited patience
- diverse environments
- security concerns around unknown CLIs

**Current alternatives or behaviors**

- shell scripts
- manual steps
- larger tools that do too much

## Secondary audiences

- contributors who want to extend the tool
- maintainers evaluating dependency risk
- teams considering internal adoption

## Jobs to be done / desired outcomes

- When facing the workflow problem, they want a command that succeeds quickly.
- When adopting in a team, they want confidence it will not break CI or local environments.

## Pains, anxieties, and constraints

- unclear docs
- hidden telemetry
- breaking changes
- too many dependencies

## Motivations

- save time
- remove repetitive manual work
- standardize a small workflow

## Decision criteria

- install speed
- documentation clarity
- trustworthy maintainer behavior
- sensible defaults
- easy uninstall

## Language and tone

Technical, concise, example-driven. Avoid vague productivity claims.

## Anti-goals and exclusions

- not for non-technical end users
- do not optimize for feature breadth over reliability
- do not hide side effects

## Evidence

- Common open-source pattern: developers judge CLI projects by README speed, install safety, and examples. Confidence: high.

## Assumptions

- Minimal dependencies increase trust.
- A great README is more important than a polished website at launch.

## Open questions

- Which package managers must be supported first?
- What security guarantees should be documented?
