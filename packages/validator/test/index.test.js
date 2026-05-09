import test from 'node:test';
import assert from 'node:assert/strict';

import { requiredSections, validateAudienceMarkdown } from '../src/index.js';

function audienceDocument(overrides = {}) {
  const frontmatter = overrides.frontmatter ?? `---
audiencemd: "0.1"
title: "Audiencia española"
status: draft
last_reviewed: 2026-05-09
owners:
  - "Equipo de producto"
---`;
  const h1 = overrides.h1 ?? '# AUDIENCE.md — Audiencia española';
  const sectionOverrides = overrides.sections ?? {};
  const sections = requiredSections.map((title) => {
    const content = sectionOverrides[title] ?? `Contenido válido para ${title}.`;
    return `## ${title}\n\n${content}`;
  });

  return [frontmatter, h1, ...sections].join('\n\n');
}

function placeholderWarnings(markdown) {
  return validateAudienceMarkdown(markdown).warnings.filter((warning) => warning.includes('placeholder text'));
}

test('Spanish text with lowercase todo and sobre todo is not treated as placeholder content', () => {
  const markdown = audienceDocument({
    sections: {
      Summary: 'Este documento describe todo el contexto de audiencia, sobre todo las necesidades reales del equipo.',
      Motivations: 'Quieren entenderlo todo antes de decidir, especialmente cuando hay mucho riesgo.',
    },
  });

  const result = validateAudienceMarkdown(markdown);

  assert.equal(result.valid, true);
  assert.deepEqual(placeholderWarnings(markdown), []);
});

test('uppercase TODO and TBD markers are treated as placeholder content', () => {
  const markdown = audienceDocument({
    sections: {
      Summary: 'TODO: completar esta sección con investigación real.',
      Evidence: 'TBD',
    },
  });

  const warnings = placeholderWarnings(markdown);

  assert.equal(warnings.length, 2);
  assert.match(warnings[0], /uppercase TODO\/TBD marker/);
  assert.match(warnings[1], /uppercase TODO\/TBD marker/);
});

test('full template phrases are still treated as placeholder content', () => {
  const markdown = audienceDocument({
    frontmatter: `---
audiencemd: "0.1"
title: "Replace with audience or project name"
status: draft
last_reviewed: 2026-05-09
owners:
  - "Replace with owner/team"
---`,
    h1: '# AUDIENCE.md — Replace with project/product/campaign name',
    sections: {
      Summary: '[Describe your audience] in one or two useful paragraphs.',
    },
  });

  const warnings = placeholderWarnings(markdown);

  assert.equal(warnings.length, 4);
  assert.ok(warnings.every((warning) => /template (replacement|description) phrase/.test(warning)));
});
