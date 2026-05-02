#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const requiredSections = [
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

const optionalSections = [
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

const allowedSections = new Set([...requiredSections, ...optionalSections]);
const allowedStatuses = new Set(['draft', 'reviewed', 'validated', 'archived']);

const root = process.cwd();
const files = [
  'AUDIENCE.md',
  'templates/AUDIENCE.md',
  ...findAudienceFiles(path.join(root, 'examples')).map((file) => path.relative(root, file)),
].sort((a, b) => a.localeCompare(b));

let failures = 0;
let warnings = 0;

for (const file of files) {
  const result = validateFile(file);
  for (const warning of result.warnings) {
    warnings += 1;
    console.warn(`warning ${file}: ${warning}`);
  }
  for (const error of result.errors) {
    failures += 1;
    console.error(`error ${file}: ${error}`);
  }
}

if (failures > 0) {
  console.error(`\nAudienceMD validation failed: ${failures} error(s), ${warnings} warning(s).`);
  process.exit(1);
}

console.log(`AudienceMD validation passed for ${files.length} file(s) with ${warnings} warning(s).`);

function findAudienceFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findAudienceFiles(fullPath));
    } else if (entry.isFile() && entry.name === 'AUDIENCE.md') {
      results.push(fullPath);
    }
  }
  return results;
}

function validateFile(file) {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  const errors = [];
  const warnings = [];
  const { frontmatter, body } = splitFrontmatter(text);

  if (frontmatter !== null) {
    validateFrontmatter(frontmatter, file, errors, warnings);
  }

  const h2s = [...body.matchAll(/^##\s+(.+?)\s*#*\s*$/gm)].map((match) => ({
    name: match[1].trim(),
    index: match.index,
  }));

  const counts = new Map();
  for (const heading of h2s) {
    counts.set(heading.name, (counts.get(heading.name) ?? 0) + 1);
    if (!allowedSections.has(heading.name)) {
      errors.push(`unknown top-level H2 heading \"${heading.name}\"`);
    }
  }

  for (const section of requiredSections) {
    const count = counts.get(section) ?? 0;
    if (count === 0) {
      errors.push(`missing required section \"${section}\"`);
    } else if (count > 1) {
      errors.push(`duplicate required section \"${section}\"`);
    }
  }

  let lastIndex = -1;
  for (const section of requiredSections) {
    const heading = h2s.find((candidate) => candidate.name === section);
    if (!heading) continue;
    if (heading.index < lastIndex) {
      errors.push(`required section \"${section}\" is out of canonical order`);
      break;
    }
    lastIndex = heading.index;
  }

  return { errors, warnings };
}

function splitFrontmatter(text) {
  if (!text.startsWith('---\n')) {
    return { frontmatter: null, body: text };
  }

  const end = text.indexOf('\n---\n', 4);
  if (end === -1) {
    return { frontmatter: null, body: text };
  }

  return {
    frontmatter: text.slice(4, end),
    body: text.slice(end + 5),
  };
}

function validateFrontmatter(frontmatter, file, errors, warnings) {
  const scalars = new Map();
  const lines = frontmatter.split('\n');

  for (const line of lines) {
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
    if (match) {
      scalars.set(match[1], stripYamlString(match[2].trim()));
    }
  }

  if (scalars.has('audiencemd') && scalars.get('audiencemd') !== '0.1') {
    errors.push('frontmatter audiencemd must be the string "0.1" when present');
  }

  if (scalars.has('status') && !allowedStatuses.has(scalars.get('status'))) {
    warnings.push(`frontmatter status \"${scalars.get('status')}\" is not one of ${[...allowedStatuses].join(', ')}`);
  }

  if (scalars.has('last_reviewed')) {
    const value = scalars.get('last_reviewed');
    const templatePlaceholderAllowed = file.startsWith('templates/') && value === 'YYYY-MM-DD';
    if (!templatePlaceholderAllowed && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      warnings.push('frontmatter last_reviewed should be an ISO date (YYYY-MM-DD)');
    }
  }

  if (scalars.has('title') && scalars.get('title').length === 0) {
    warnings.push('frontmatter title is present but empty');
  }

  if (/^owners:\s*$/m.test(frontmatter) && !/^\s+-\s+.+$/m.test(frontmatter)) {
    warnings.push('frontmatter owners is present but has no list entries');
  }
}

function stripYamlString(value) {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}
