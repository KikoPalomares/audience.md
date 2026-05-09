import { parseAudienceMarkdown } from '@audiencemd/parser';

export const requiredSections = [
  'Audience name',
  'Summary',
  'Primary audiences',
  'Jobs to be done / desired outcomes',
  'Pains, anxieties, and constraints',
  'Motivations',
  'Decision criteria',
  'Language and tone',
  'Anti-goals and exclusions',
  'Evidence',
  'Assumptions',
  'Open questions',
];

export const optionalSections = [
  'Secondary audiences',
  'Related files',
  'Accessibility needs',
  'Cultural and regional context',
  'Channels and touchpoints',
  'Objections',
  'Triggers',
  'Non-manipulation boundaries',
  'Competitive alternatives',
  'Research log',
  'Revision history',
];

export const allowedSections = new Set([...requiredSections, ...optionalSections]);
export const allowedStatuses = new Set(['draft', 'reviewed', 'validated', 'archived']);

/**
 * @param {string} text
 * @param {{filePath?: string}} [options]
 * @returns {{valid: boolean, errors: string[], warnings: string[], document: ReturnType<typeof parseAudienceMarkdown>}}
 */
export function validateAudienceMarkdown(text, options = {}) {
  const filePath = options.filePath ?? 'AUDIENCE.md';
  const document = parseAudienceMarkdown(text);
  const errors = [];
  const warnings = [];

  validateFrontmatter(document.frontmatter, filePath, errors, warnings);
  validateSections(document.sections, errors);
  validatePlaceholders(document, warnings);

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    document,
  };
}

/**
 * @param {Array<{title: string, start: number}>} sections
 * @param {string[]} errors
 */
export function validateSections(sections, errors) {
  const counts = new Map();

  for (const section of sections) {
    counts.set(section.title, (counts.get(section.title) ?? 0) + 1);
    if (!allowedSections.has(section.title)) {
      errors.push(`unknown top-level H2 heading "${section.title}"`);
    }
  }

  for (const section of requiredSections) {
    const count = counts.get(section) ?? 0;
    if (count === 0) {
      errors.push(`missing required section "${section}"`);
    } else if (count > 1) {
      errors.push(`duplicate required section "${section}"`);
    }
  }

  let lastIndex = -1;
  for (const section of requiredSections) {
    const heading = sections.find((candidate) => candidate.title === section);
    if (!heading) continue;
    if (heading.start < lastIndex) {
      errors.push(`required section "${section}" is out of canonical order`);
      break;
    }
    lastIndex = heading.start;
  }
}

/**
 * @param {null | {raw: string, data: Record<string, unknown>}} frontmatter
 * @param {string} filePath
 * @param {string[]} errors
 * @param {string[]} warnings
 */
export function validateFrontmatter(frontmatter, filePath, errors, warnings) {
  if (frontmatter === null) return;

  const scalars = frontmatter.data;

  if (hasString(scalars, 'audiencemd') && scalars.audiencemd !== '0.1') {
    errors.push('frontmatter audiencemd must be the string "0.1" when present');
  }

  if (hasString(scalars, 'status') && !allowedStatuses.has(scalars.status)) {
    warnings.push(`frontmatter status "${scalars.status}" is not one of ${[...allowedStatuses].join(', ')}`);
  }

  if (hasString(scalars, 'last_reviewed')) {
    const templatePlaceholderAllowed = filePath.includes('templates/') && scalars.last_reviewed === 'YYYY-MM-DD';
    if (!templatePlaceholderAllowed && !/^\d{4}-\d{2}-\d{2}$/.test(scalars.last_reviewed)) {
      warnings.push('frontmatter last_reviewed should be an ISO date (YYYY-MM-DD)');
    }
  }

  if (hasString(scalars, 'title') && scalars.title.length === 0) {
    warnings.push('frontmatter title is present but empty');
  }

  if (Array.isArray(scalars.owners) && scalars.owners.length === 0) {
    warnings.push('frontmatter owners is present but has no list entries');
  }
}

const placeholderPatterns = [
  {
    name: 'uppercase TODO/TBD marker',
    pattern: /\b(?:TODO|TBD)\b/,
  },
  {
    name: 'template replacement phrase',
    pattern: /\bReplace with\b/,
  },
  {
    name: 'template description phrase',
    pattern: /\bDescribe your audience\b/,
  },
];

/**
 * @param {ReturnType<typeof parseAudienceMarkdown>} document
 * @param {string[]} warnings
 */
export function validatePlaceholders(document, warnings) {
  for (const field of collectPlaceholderFields(document)) {
    const match = placeholderPatterns.find(({ pattern }) => pattern.test(field.value));
    if (match) {
      warnings.push(`${field.label} appears to contain placeholder text (${match.name})`);
    }
  }
}

/**
 * @param {ReturnType<typeof parseAudienceMarkdown>} document
 * @returns {Array<{label: string, value: string}>}
 */
function collectPlaceholderFields(document) {
  const fields = [];

  if (document.h1) {
    fields.push({ label: 'H1 heading', value: document.h1 });
  }

  if (document.frontmatter) {
    for (const [key, value] of Object.entries(document.frontmatter.data)) {
      collectStringValues(value, `frontmatter ${key}`, fields);
    }
  }

  for (const section of document.sections) {
    fields.push({ label: `section "${section.title}"`, value: section.content });
  }

  return fields;
}

/**
 * @param {unknown} value
 * @param {string} label
 * @param {Array<{label: string, value: string}>} fields
 */
function collectStringValues(value, label, fields) {
  if (typeof value === 'string') {
    fields.push({ label, value });
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => collectStringValues(item, `${label}[${index}]`, fields));
  }
}

/** @param {Record<string, unknown>} object @param {string} key */
function hasString(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key) && typeof object[key] === 'string';
}
