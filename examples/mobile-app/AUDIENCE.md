---
audiencemd: "0.1"
title: "Mobile app for medication routines"
status: draft
last_reviewed: 2026-05-02
owners:
  - "Example maintainers"
---

# AUDIENCE.md — Mobile app for medication routines

## Audience name

People managing recurring medication or supplement routines who need reliable reminders, simple tracking, and caregiver visibility without being scared, shamed, or treated like a medical diagnosis.

## Summary

This mobile app is for users who already intend to follow a routine but miss doses because life is busy, schedules change, side effects happen, or existing reminders are too easy to ignore. The app must support consistency while staying clear about its limits: it is not a clinician, pharmacist, emergency service, or substitute for medical advice.

## Primary audiences

### 1. Adults managing daily or weekly medication routines

People taking one or more recurring medications who need reminders and a simple record of what they took.

**Needs**

- reliable reminders that respect real schedules and time zones
- quick confirmation, snooze, skip, and note-taking flows
- refill and appointment reminders when relevant
- clear history for self-review or clinician conversations

**Constraints**

- notification fatigue
- privacy concerns around health data on a phone
- routine changes from travel, illness, meals, side effects, or shift work
- varying health literacy and accessibility needs

**Current alternatives or behaviors**

- phone alarms named after medications
- pill boxes and handwritten checklists
- pharmacy app reminders
- relying on memory, partners, or caregivers

### 2. Caregivers supporting someone else’s routine

Family members or informal caregivers who want visibility without controlling or surveilling the person they support.

**Needs**

- permission-based sharing of missed-dose or refill signals
- simple setup for the person taking medication
- respectful language that preserves autonomy

**Constraints**

- consent and privacy boundaries
- risk of creating conflict if reminders feel patronizing
- different phones, languages, and technical confidence levels

**Current alternatives or behaviors**

- texting “did you take it?”
- shared calendars or alarms
- calling after missed appointments or health scares

## Secondary audiences

- clinicians who may receive medication-history summaries from patients
- pharmacists interested in refill adherence, if user autonomy remains primary
- people tracking vitamins or supplements, if wellness use does not distort safety expectations

## Jobs to be done / desired outcomes

- When a dose is due, users want a reminder they can act on quickly without opening a complex app.
- When they miss, skip, or delay a dose, they want to record reality without shame.
- When visiting a clinician, they want an accurate-enough history to support the conversation.
- When a caregiver is involved, both sides want visibility that respects consent and independence.

## Pains, anxieties, and constraints

- guilt and embarrassment after missed doses
- fear that health data could be exposed, sold, or used against them
- confusion when instructions depend on food, timing, or side effects
- alarms that become background noise
- anxiety from apps that use emergency-like language for routine situations
- accessibility needs around text size, contrast, motor control, and voice support

## Motivations

- feel more in control of a routine that affects health and daily stability
- reduce mental load and repeated self-checking
- prepare better for medical appointments
- coordinate support without constant nagging

## Decision criteria

- reminders are reliable and easy to adjust
- privacy model is clear and conservative
- the app avoids medical advice unless clinically reviewed and scoped
- caregiver sharing is opt-in, granular, and revocable
- the interface works under stress, fatigue, low vision, and one-handed use
- export or summary is useful for clinician conversations

## Language and tone

Respectful, calm, and non-judgmental. Use “mark as taken,” “skip with note,” “ask your clinician or pharmacist,” and “share only with permission.” Avoid shame, panic, “non-compliant patient,” miracle health claims, or language that implies the app can decide what is medically safe.

## Anti-goals and exclusions

- not a diagnostic tool, emergency service, or substitute for medical advice
- do not provide medication interaction guidance unless backed by qualified clinical sources and clear jurisdictional review
- do not use fear, guilt, streak pressure, or caregiver surveillance to drive engagement
- do not target people based on sensitive health conditions beyond user-directed setup
- do not sell or repurpose health data in ways users would not reasonably expect

## Evidence

- Behavior pattern: many people use generic alarms or pill boxes because dedicated health apps can feel too complex or intrusive. Confidence: medium.
- Safety constraint: medication decisions can be clinically significant and require clear boundaries. Confidence: high.
- Accessibility pattern: health routines often happen when users are tired, stressed, or distracted, making low-friction design important. Confidence: medium.

## Assumptions

- Non-judgmental language will improve continued use after missed doses.
- Permission-based caregiver visibility can help without undermining autonomy.
- A focused reminder and history app is preferable to a broad health platform for this audience.

## Open questions

- Which jurisdictions or medical categories require additional compliance review before launch?
- What reminder patterns reduce missed doses without creating notification fatigue?
- How should skipped-dose notes be designed to avoid giving unsafe medical advice?
