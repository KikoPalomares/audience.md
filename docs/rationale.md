# Rationale

Most work is audience-sensitive. Product decisions, copy, onboarding, documentation, pricing, community rules, physical product choices, and AI-generated content all depend on who the work is for.

Yet audience context is usually stored in fragile places:

- prompt fragments
- slide decks
- research summaries
- marketing briefs
- CRM notes
- founder intuition
- scattered conversations
- channel-specific docs that agents never see

These sources are useful, but they are not portable operational context. They are hard for agents to discover, hard for contributors to use, and hard to version alongside the work they affect.

AudienceMD proposes a small convention: put audience context in `AUDIENCE.md`.

## Why Markdown

Markdown is boring in the best way. It is readable in any editor, works with Git, can be rendered on the web, and is already understood by AI systems.

A standard that starts as Markdown can be adopted before specialized tools exist. Optional frontmatter and schemas can help tools, but they should never make the human-readable file secondary.

## Why not only personas

Personas can help when they summarize real evidence, but they often become fictional biographies that hide the actual decision logic. AudienceMD focuses on practical context:

- situations
- needs
- constraints
- desired outcomes
- anxieties
- decision criteria
- language
- exclusions
- evidence
- assumptions

Demographics can be included when they are relevant and ethically justified, but they are not the foundation. AudienceMD should make it harder to smuggle stereotypes into strategy under the cover of “persona work.”

## Why anti-goals are first-class

Audience definition is not only about who to attract. It is also about who not to chase, which messages not to send, and which tradeoffs are unacceptable.

That matters more when agents can generate large amounts of copy, experiments, and segmentation ideas quickly. Without explicit boundaries, optimization can drift toward manipulation, exaggeration, or the wrong audience.

## Why agents need this

AI agents can execute quickly, but they often lack durable audience memory. Without explicit context, they default to generic averages.

An AudienceMD file gives agents a reusable audience brief that is:

- inspectable by humans
- easy to include in context
- stable across tasks
- constrained by anti-goals
- grounded in evidence and assumptions
- portable across tools

Agents should treat `AUDIENCE.md` as a decision constraint, not as loose inspiration.

## Why now

AI is making execution cheaper. That makes direction more important. If the audience definition is vague, teams can now generate many polished but wrong assets faster than ever.

AudienceMD tries to make the direction explicit before the output scales.
