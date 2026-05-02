# Contributing

AudienceMD is private during its initial drafting phase. When opened publicly, contributions should focus on making the standard clearer, broader, safer, and easier to adopt.

Useful contribution types:

- examples from different domains
- clearer section definitions
- ethical safeguards
- validator rules that catch real problems without punishing useful Markdown
- parser/generator implementations that preserve readable Markdown
- documentation and site improvements

## Writing guidelines

- Prefer concrete examples over abstract claims.
- Avoid jargon unless it earns its place.
- Do not assume SaaS is the default use case.
- Separate evidence from assumptions.
- Keep Markdown readable.
- Use the canonical section names from `SPEC.md` unless a change updates the spec, template, schema, and examples together.
- Do not add fake persona details or demographic stereotypes to examples.
- Include anti-goals, exclusions, and manipulation boundaries when relevant.

## Proposed change process

Until v1.0, spec changes can be lightweight:

1. Explain the problem.
2. Show before/after examples.
3. Describe compatibility impact.
4. Update the spec, template, schema, docs, and examples when semantics change.
5. Keep tooling optional unless the change cannot be evaluated manually.

## Scope discipline

Phase 0 is spec-first. Avoid adding parser, validator, CLI, or web implementation complexity until the core standard is stable enough to deserve tooling.
