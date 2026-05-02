---
audiencemd: "0.1"
title: "AI agent for personal knowledge work"
status: draft
last_reviewed: 2026-05-02
owners:
  - "Example maintainers"
---

# AUDIENCE.md — AI agent for personal knowledge work

## Audience name

Busy knowledge workers who want an AI agent to help turn scattered information into useful decisions, drafts, and follow-through without losing control of private context.

## Summary

This audience already uses notes, docs, chat, email, calendars, and AI tools, but the pieces do not stay connected. They want help remembering context, preparing work, finding relevant material, and drafting next actions. They are willing to delegate more if the agent is transparent, interruptible, and careful with sensitive information.

## Primary audiences

### 1. Independent professionals managing many parallel threads

Consultants, founders, creators, researchers, and operators whose work depends on context spread across meetings, messages, documents, and project notes.

**Needs**

- recall of relevant context before decisions or writing tasks
- drafts that reflect their constraints, voice, and current priorities
- proactive surfacing of deadlines, loose ends, and contradictions
- clear permission boundaries for external actions

**Constraints**

- fragmented tools and inconsistent note hygiene
- privacy sensitivity around client, employee, financial, or personal information
- low tolerance for confident hallucinated memories
- interruptions are costly if the agent is noisy

**Current alternatives or behaviors**

- searching across email, chat, docs, and notes manually
- asking generic AI tools with pasted context
- maintaining personal task lists that drift out of date
- relying on memory until something falls through the cracks

### 2. Small team leads who need decision support, not another dashboard

People coordinating work across a small team who want help summarizing state, preparing updates, and tracking commitments.

**Needs**

- concise project state summaries with source links
- detection of blockers, stale tasks, and unanswered questions
- safe draft replies or plans that can be reviewed before sending

**Constraints**

- team trust and confidentiality concerns
- unclear authority boundaries for autonomous actions
- risk of the agent optimizing for speed over accuracy or tact

**Current alternatives or behaviors**

- status meetings and manual project updates
- copy-pasting snippets into chatbots
- lightweight PM tools that require ongoing discipline

## Secondary audiences

- executive assistants evaluating AI support for principals
- software power users willing to configure integrations
- teams experimenting with internal AI agents, if personal control remains central

## Jobs to be done / desired outcomes

- When starting a task, they want the agent to gather the relevant background before drafting or deciding.
- When returning to an old thread, they want a trustworthy summary of what happened and what remains open.
- When an external message or deadline matters, they want a timely nudge with enough context to act.
- When delegating to the agent, they want to know what it did, what it assumed, and where it needs approval.

## Pains, anxieties, and constraints

- losing context across too many tools
- fear of an agent sending, deleting, or sharing something without approval
- frustration with AI that sounds confident but cannot cite its sources
- cognitive load from maintaining elaborate personal systems
- concern that proactive help becomes nagging or surveillance

## Motivations

- protect attention for judgment, relationships, and creative work
- reduce dropped balls without becoming a process manager
- turn existing information into finished drafts, decisions, and reminders
- feel supported by a system that understands context but respects boundaries

## Decision criteria

- permission model is explicit and conservative by default
- summaries cite or link to sources when possible
- the agent distinguishes known facts from assumptions
- proactive interruptions are rare, relevant, and adjustable
- private data handling is understandable without legal expertise
- users can inspect, correct, and revoke memory or context

## Language and tone

Calm, capable, and specific. Use “review before sending,” “source-backed summary,” “permission required,” and “here is what I found.” Avoid “autonomous employee,” “never forgets,” “knows everything about you,” or language that implies surveillance, dependency, or unlimited agency.

## Anti-goals and exclusions

- not for users seeking a fully autonomous actor that sends external messages without review
- do not optimize for addictive engagement, constant nudging, or manufactured urgency
- do not treat private context as training material without explicit consent
- do not invent memories, relationships, or preferences when evidence is absent
- do not target vulnerable users by implying the agent replaces human support or professional advice

## Evidence

- Tool-use observation: many professionals already paste context into general AI tools because their information is fragmented. Confidence: medium.
- AI trust pattern: users become cautious when models hallucinate details or cannot explain sources. Confidence: high.
- Productivity-tool pattern: proactive notifications help only when they are sparse and clearly relevant. Confidence: medium.

## Assumptions

- Users will grant deeper access if approval boundaries and auditability are clear.
- Source-backed recall is more valuable than broad autonomous action for early adoption.
- A strong “do not send without permission” promise increases trust more than aggressive autonomy claims.

## Open questions

- Which integrations create enough value first: email, calendar, docs, notes, chat, or task systems?
- How should the agent expose memory correction without making users manage another database?
- What interruption threshold feels helpful rather than noisy?
