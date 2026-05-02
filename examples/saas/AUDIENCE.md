---
audiencemd: "0.1"
title: "SaaS onboarding analytics product"
status: draft
last_reviewed: 2026-05-02
owners:
  - "Example maintainers"
---

# AUDIENCE.md — SaaS onboarding analytics product

## Audience name

Early-stage SaaS teams with enough signups to see activation problems but not enough research, analytics, or data-engineering capacity to diagnose them confidently.

## Summary

This audience knows something is going wrong between signup and first value. They have dashboards, recordings, support notes, and opinions, but the signal is scattered. They need a faster path from “activation is weak” to “fix this step next, with this level of confidence” without pretending small samples are statistically perfect.

## Primary audiences

### 1. Founder-led product and growth teams

Small SaaS teams where founders, product leads, designers, or growth generalists personally inspect onboarding and conversion.

**Needs**

- identify where new users stall or abandon setup
- connect quantitative drop-off with qualitative reasons when possible
- prioritize fixes without analysis paralysis
- see whether onboarding changes improve first-value completion

**Constraints**

- limited setup time and little appetite for a data project
- noisy early data and small cohorts
- urgency from runway, fundraising, sales promises, or growth targets
- incomplete event tracking and inconsistent naming

**Current alternatives or behaviors**

- checking product analytics dashboards without knowing what to do next
- watching session recordings in batches until patterns feel anecdotal
- reading support tickets and trial-cancellation notes manually
- asking users in founder emails or calls
- guessing based on the loudest internal opinion

### 2. Product managers at scaling SaaS companies without dedicated growth analytics

PMs or growth leads who own activation but share analytics resources with many other teams.

**Needs**

- faster diagnosis of onboarding bottlenecks
- experiment ideas tied to observed behavior
- shareable evidence for roadmap or design decisions

**Constraints**

- existing analytics stack cannot be replaced easily
- privacy and security review for new tracking tools
- need to explain confidence levels to leadership

**Current alternatives or behaviors**

- requesting custom analysis from data teams
- maintaining spreadsheets of funnel screenshots
- relying on product intuition between formal research cycles

## Secondary audiences

- customer success leads responsible for trial activation or implementation completion
- agencies improving onboarding for B2B SaaS clients
- seed-stage investors or advisors helping portfolio companies diagnose activation, if they do not become the product’s main buyer

## Jobs to be done / desired outcomes

- When activation drops, they want to know the likely cause so they can fix the right step first.
- When launching onboarding changes, they want directional evidence of improvement before waiting months.
- When debating priorities, they want a shared view of user behavior that reduces opinion fights.
- When tracking is incomplete, they want useful guidance without rebuilding the analytics stack first.

## Pains, anxieties, and constraints

- fear of optimizing the wrong metric or celebrating vanity improvements
- too many charts and too few recommendations
- unreliable event tracking, small sample sizes, and fragmented qualitative clues
- pressure to show growth quickly without damaging the user experience
- anxiety that a tool will require weeks of implementation before producing value
- mistrust of black-box recommendations that sound more certain than the data allows

## Motivations

- increase trial-to-paid conversion and first-value completion
- reduce churn caused by a confusing first experience
- make product decisions with enough evidence to act
- stop spending founder or PM time manually triangulating scattered signals

## Decision criteria

- setup produces useful insight in hours or days, not weeks
- recommendations cite the behavior or evidence behind them
- uncertainty is visible, especially with small samples
- integrates with existing analytics, session, CRM, or support tools where possible
- privacy and data handling are clear enough for B2B review
- output is actionable for product/design teams, not only analysts

## Language and tone

Direct, practical, and humble about uncertainty. Use phrases like “likely bottleneck,” “confidence level,” “first-value event,” and “next diagnostic step.” Avoid enterprise BI jargon, magical AI diagnosis claims, and statistical certainty from tiny samples. Show before/after onboarding examples and explain what evidence changed the recommendation.

## Anti-goals and exclusions

- not for mature enterprises needing warehouse-native BI as the main use case
- not for teams with no product flow, no users, or no defined activation event yet
- do not claim causal certainty without experiment evidence
- do not encourage invasive tracking, dark patterns, or manipulative activation tactics
- do not replace direct user research when qualitative understanding is decision-critical

## Evidence

- Founder and operator observation: early SaaS teams repeatedly ask “why aren’t users activating?” in communities, advisory calls, and growth discussions. Confidence: medium.
- Product analytics category pattern: dashboards show where drop-off happens but often leave teams to infer why. Confidence: medium.
- Research-method caution: small cohorts can support directional learning but not strong statistical claims. Confidence: high.

## Assumptions

- Teams will accept directional recommendations if uncertainty and evidence are explicit.
- Setup friction is the biggest adoption barrier for the primary audience.
- Combining behavioral events with qualitative snippets is more valuable than another standalone funnel chart.

## Open questions

- Which integrations are table stakes for early trust: Segment, PostHog, Amplitude, Mixpanel, Intercom, Stripe, or session-recording tools?
- How much qualitative evidence is needed before a recommendation feels credible?
- Should the product start as an overlay on existing analytics or require its own event capture?
