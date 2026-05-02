#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateAudienceMarkdown } from '@audiencemd/validator';

const command = process.argv[2];
const args = process.argv.slice(3);

try {
  if (!command || command === '--help' || command === '-h') {
    printHelp();
    process.exit(0);
  }

  if (command === '--version' || command === '-v') {
    console.log('0.1.0');
    process.exit(0);
  }

  if (command === 'init') {
    initCommand(args);
    process.exit(0);
  }

  if (command === 'validate') {
    validateCommand(args);
    process.exit(0);
  }

  fail(`unknown command: ${command}\nRun \`audience --help\` for usage.`);
} catch (error) {
  fail(error instanceof Error ? error.message : String(error));
}

function initCommand(args) {
  const { positional, flags } = parseArgs(args);
  const target = positional[0] ?? process.cwd();
  const outputPath = resolveAudiencePath(target);

  if (fs.existsSync(outputPath) && !flags.force) {
    fail(`${path.relative(process.cwd(), outputPath) || outputPath} already exists. Re-run with --force to overwrite.`);
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  const template = fs.readFileSync(findTemplatePath(), 'utf8');
  fs.writeFileSync(outputPath, hydrateTemplate(template));
  console.log(`Created ${path.relative(process.cwd(), outputPath) || outputPath}`);
}


function hydrateTemplate(template) {
  return template.replace(/(last_reviewed:\s*)YYYY-MM-DD/, `$1${new Date().toISOString().slice(0, 10)}`);
}

function validateCommand(args) {
  const { positional } = parseArgs(args);
  const target = positional[0] ?? process.cwd();
  const filePath = resolveAudiencePath(target);

  if (!fs.existsSync(filePath)) {
    fail(`AudienceMD file not found: ${path.relative(process.cwd(), filePath) || filePath}`);
  }

  const text = fs.readFileSync(filePath, 'utf8');
  const result = validateAudienceMarkdown(text, { filePath: normalizeForMessages(filePath) });
  const label = path.relative(process.cwd(), filePath) || filePath;

  for (const warning of result.warnings) {
    console.warn(`warning ${label}: ${warning}`);
  }

  for (const error of result.errors) {
    console.error(`error ${label}: ${error}`);
  }

  if (!result.valid) {
    console.error(`AudienceMD validation failed for ${label}: ${result.errors.length} error(s), ${result.warnings.length} warning(s).`);
    process.exit(1);
  }

  console.log(`AudienceMD validation passed for ${label} with ${result.warnings.length} warning(s).`);
}

function parseArgs(args) {
  const positional = [];
  const flags = { force: false };

  for (const arg of args) {
    if (arg === '--force' || arg === '-f') {
      flags.force = true;
    } else if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    } else if (arg.startsWith('-')) {
      fail(`unknown option: ${arg}`);
    } else {
      positional.push(arg);
    }
  }

  if (positional.length > 1) {
    fail(`too many arguments: ${positional.slice(1).join(' ')}`);
  }

  return { positional, flags };
}

function resolveAudiencePath(target) {
  const resolved = path.resolve(process.cwd(), target);
  if (path.basename(resolved).toLowerCase() === 'audience.md') return resolved;
  if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) return resolved;
  if (path.extname(resolved) === '.md') return resolved;
  return path.join(resolved, 'AUDIENCE.md');
}

function findTemplatePath() {
  const candidates = [];
  let current = process.cwd();
  while (true) {
    candidates.push(path.join(current, 'templates', 'AUDIENCE.md'));
    const parent = path.dirname(current);
    if (parent === current) break;
    current = parent;
  }

  const cliDir = path.dirname(fileURLToPath(import.meta.url));
  current = cliDir;
  while (true) {
    candidates.push(path.join(current, 'templates', 'AUDIENCE.md'));
    const parent = path.dirname(current);
    if (parent === current) break;
    current = parent;
  }

  const templatePath = candidates.find((candidate) => fs.existsSync(candidate));
  if (!templatePath) {
    fail('Could not find templates/AUDIENCE.md. Run the CLI from an AudienceMD checkout or install a package that includes the template.');
  }
  return templatePath;
}

function normalizeForMessages(filePath) {
  return filePath.split(path.sep).join('/');
}

function printHelp() {
  console.log(`AudienceMD CLI\n\nUsage:\n  audience init [path] [--force]\n  audience validate [path]\n\nCommands:\n  init       Create an AUDIENCE.md from templates/AUDIENCE.md. Defaults to the current directory.\n  validate   Validate an AUDIENCE.md file, or a directory containing AUDIENCE.md.\n\nAliases:\n  audiencemd is also available as a binary name.`);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
