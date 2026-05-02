"use client";

import { useMemo, useState } from "react";
import { validateAudienceMarkdown } from "@audiencemd/validator";
import { MarkdownExcerpt } from "./MarkdownExcerpt";

type PlaygroundClientProps = {
  template: string;
  sample: string;
};

type DraftForm = {
  projectName: string;
  audienceName: string;
  summary: string;
  primaryAudience: string;
  needs: string;
  constraints: string;
  jobs: string;
  pains: string;
  motivations: string;
  decisionCriteria: string;
  languageTone: string;
  antiGoals: string;
  evidence: string;
  assumptions: string;
  openQuestions: string;
  owner: string;
};

const initialForm: DraftForm = {
  projectName: "",
  audienceName: "",
  summary: "",
  primaryAudience: "",
  needs: "",
  constraints: "",
  jobs: "",
  pains: "",
  motivations: "",
  decisionCriteria: "",
  languageTone: "",
  antiGoals: "",
  evidence: "",
  assumptions: "",
  openQuestions: "",
  owner: ""
};

const fieldLabels: Array<[keyof DraftForm, string, string]> = [
  ["projectName", "Project/product/campaign name", "Privacy-first photo backup"],
  ["audienceName", "Audience name", "Families who want safer backups without ad-data tradeoffs"],
  ["summary", "Summary", "Who this is for, what situation they are in, and why it matters."],
  ["primaryAudience", "Primary audience segment", "Non-technical households with scattered phones, laptops, and cloud accounts."],
  ["needs", "Needs", "One per line"],
  ["constraints", "Constraints", "One per line"],
  ["jobs", "Jobs / desired outcomes", "One per line"],
  ["pains", "Pains, anxieties, and constraints", "One per line"],
  ["motivations", "Motivations", "One per line"],
  ["decisionCriteria", "Decision criteria", "One per line"],
  ["languageTone", "Language and tone", "Words, claims, tone, and examples that fit."],
  ["antiGoals", "Anti-goals and exclusions", "One per line"],
  ["evidence", "Evidence", "Sources, dates, confidence levels. One per line"],
  ["assumptions", "Assumptions", "One per line"],
  ["openQuestions", "Open questions", "One per line"],
  ["owner", "Owner/team", "Team or person maintaining this file"]
];

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function escapeYaml(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function titleCaseFallback(value: string, fallback: string) {
  return value.trim() || fallback;
}

function linesToBullets(value: string, fallback: string[]) {
  const lines = value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  return (lines.length ? lines : fallback).map((line) => `- ${line}`).join("\n");
}

function generateMarkdown(form: DraftForm) {
  const projectName = titleCaseFallback(form.projectName, "Replace with project/product/campaign name");
  const audienceName = titleCaseFallback(form.audienceName, "Replace with a short, specific audience name");
  const owner = titleCaseFallback(form.owner, "Replace with owner/team");

  return `---
audiencemd: "0.1"
title: "${escapeYaml(projectName)}"
status: draft
last_reviewed: ${todayIso()}
owners:
  - "${escapeYaml(owner)}"
---

# AUDIENCE.md — ${projectName}

## Audience name

${audienceName}

## Summary

${form.summary.trim() || "Describe who this is for, what situation they are in, and why this audience matters."}

## Primary audiences

### 1. ${form.primaryAudience.trim() || "Segment name"}

${form.primaryAudience.trim() || "Describe the segment in practical terms: what they are doing, what context they are in, and why they are primary."}

**Needs**

${linesToBullets(form.needs, ["Need 1", "Need 2", "Need 3"])}

**Constraints**

${linesToBullets(form.constraints, ["Constraint 1", "Constraint 2"])}

**Current alternatives or behaviors**

- What do they do today?
- What have they already tried?

## Secondary audiences

- Adjacent audience — why they matter, but should not dominate decisions.

## Jobs to be done / desired outcomes

${linesToBullets(form.jobs, ["When [situation], they want to [motivation/action], so they can [outcome]."])}

## Pains, anxieties, and constraints

${linesToBullets(form.pains, ["Pain or frustration", "Anxiety, risk, or trust concern", "Practical constraint such as budget, time, skill, access, regulation, or operational complexity"])}

## Motivations

${linesToBullets(form.motivations, ["What makes them care?", "What would make them act now?", "What outcome would feel meaningfully better than their current situation?"])}

## Decision criteria

${linesToBullets(form.decisionCriteria, ["What must be true for them to trust or choose this?", "What tradeoffs are they willing or unwilling to make?", "What would cause rejection?"])}

## Language and tone

${form.languageTone.trim() || "Write the words they use, words to avoid, examples that resonate, tone that fits, credible claims, and claims that would feel exaggerated or manipulative."}

## Anti-goals and exclusions

${linesToBullets(form.antiGoals, ["Who this is not for", "What the project should not optimize for", "Tactics, claims, or messages to avoid", "Vulnerabilities, fears, or identity traits that must not be exploited"])}

## Evidence

${linesToBullets(form.evidence, ["Source: what was learned, when, confidence level"])}

## Assumptions

${linesToBullets(form.assumptions, ["Assumption that needs validation"])}

## Open questions

${linesToBullets(form.openQuestions, ["Question 1", "Question 2"])}

## Related files

- Link to research, product brief, campaign brief, analytics notes, interviews, or strategy docs if relevant.
`;
}

export function PlaygroundClient({ template, sample }: PlaygroundClientProps) {
  const [form, setForm] = useState<DraftForm>(initialForm);
  const [markdown, setMarkdown] = useState(template);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const validation = useMemo(() => validateAudienceMarkdown(markdown, { filePath: "AUDIENCE.md" }), [markdown]);

  function updateForm(key: keyof DraftForm, value: string) {
    const next = { ...form, [key]: value };
    setForm(next);
    setMarkdown(generateMarkdown(next));
  }

  async function copyMarkdown() {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("failed");
    }
  }

  function downloadMarkdown() {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "AUDIENCE.md";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-stone-900/10 bg-white/60 p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Guided starter</h2>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                Fill what you know. The editor stays editable, so you can paste an existing file or refine the generated draft directly.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setForm(initialForm);
                setMarkdown(generateMarkdown(initialForm));
              }}
              className="rounded-full border border-stone-950/15 px-4 py-2 text-sm font-medium text-stone-900 transition hover:border-stone-950/30"
            >
              Reset draft
            </button>
          </div>

          <div className="mt-6 grid gap-4">
            {fieldLabels.map(([key, label, placeholder]) => (
              <label key={key} className="block">
                <span className="text-sm font-medium text-stone-900">{label}</span>
                <textarea
                  value={form[key]}
                  placeholder={placeholder}
                  rows={key === "summary" || key === "languageTone" ? 3 : key === "projectName" || key === "audienceName" || key === "owner" ? 1 : 2}
                  onChange={(event) => updateForm(key, event.target.value)}
                  className="mt-2 w-full resize-y rounded-2xl border border-stone-900/10 bg-paper px-4 py-3 text-sm leading-6 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-950/30 focus:ring-4 focus:ring-stone-950/5"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-stone-900/10 bg-white/60 p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Editor</h2>
              <p className="mt-2 text-sm leading-6 text-stone-700">Local only. Nothing is sent to a server, stored, or tracked.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setMarkdown(template)} className="rounded-full border border-stone-950/15 px-4 py-2 text-sm font-medium text-stone-900 transition hover:border-stone-950/30">Load template</button>
              <button type="button" onClick={() => setMarkdown(sample)} className="rounded-full border border-stone-950/15 px-4 py-2 text-sm font-medium text-stone-900 transition hover:border-stone-950/30">Load sample</button>
              <button type="button" onClick={copyMarkdown} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800">{copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy failed" : "Copy"}</button>
              <button type="button" onClick={downloadMarkdown} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800">Download</button>
            </div>
          </div>

          <textarea
            value={markdown}
            onChange={(event) => setMarkdown(event.target.value)}
            spellCheck={false}
            className="mt-6 h-[42rem] w-full resize-y rounded-2xl border border-stone-900/10 bg-stone-950 p-4 font-mono text-sm leading-6 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-stone-950/30 focus:ring-4 focus:ring-stone-950/5"
            aria-label="AUDIENCE.md editor"
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-stone-900/10 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-500">Live validation</p>
          <div className="mt-3 flex items-center gap-3">
            <span className={`h-3 w-3 rounded-full ${validation.valid ? "bg-emerald-500" : "bg-red-500"}`} />
            <h2 className="text-2xl font-semibold tracking-tight text-stone-950">
              {validation.valid ? "Looks valid for v0.1" : "Needs fixes"}
            </h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-stone-700">
            Uses the same local AudienceMD validator package as the CLI. Validation is advisory: it checks canonical sections, order, unknown H2 headings, and frontmatter guidance.
          </p>

          {validation.errors.length > 0 ? (
            <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4">
              <h3 className="font-medium text-red-950">Errors</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-red-800">
                {validation.errors.map((error) => <li key={error}>{error}</li>)}
              </ul>
            </div>
          ) : null}

          {validation.warnings.length > 0 ? (
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <h3 className="font-medium text-amber-950">Warnings</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-amber-800">
                {validation.warnings.map((warning) => <li key={warning}>{warning}</li>)}
              </ul>
            </div>
          ) : null}

          {validation.valid && validation.warnings.length === 0 ? (
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
              No errors or warnings found.
            </div>
          ) : null}
        </div>

        <div className="rounded-3xl border border-stone-900/10 bg-white/60 p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-500">Preview</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950">Rendered Markdown</h2>
          </div>
          <div className="max-h-[48rem] overflow-y-auto rounded-2xl border border-stone-900/10 bg-paper p-5">
            <MarkdownExcerpt markdown={markdown} />
          </div>
        </div>
      </section>
    </div>
  );
}
