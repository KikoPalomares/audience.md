#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { validateAudienceMarkdown } from '@audiencemd/validator';

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
  return validateAudienceMarkdown(text, { filePath: file });
}
