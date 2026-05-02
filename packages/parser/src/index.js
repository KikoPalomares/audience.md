/**
 * Parse an AudienceMD-flavoured Markdown document into a small structured shape.
 * The parser intentionally preserves raw Markdown and does not try to become a
 * complete Markdown or YAML implementation.
 *
 * @param {string} input
 * @returns {{raw: string, frontmatter: null | {raw: string, data: Record<string, unknown>}, h1: null | string, sections: Array<{level: number, title: string, content: string, start: number, end: number}>, body: string}}
 */
export function parseAudienceMarkdown(input) {
  if (typeof input !== 'string') {
    throw new TypeError('parseAudienceMarkdown expected a string');
  }

  const { frontmatter, body, bodyOffset } = splitFrontmatter(input);
  const headings = [...body.matchAll(/^(#{1,6})\s+(.+?)\s*#*\s*$/gm)].map((match) => ({
    level: match[1].length,
    title: match[2].trim(),
    start: bodyOffset + (match.index ?? 0),
    bodyIndex: match.index ?? 0,
    lineLength: match[0].length,
  }));

  const h1 = headings.find((heading) => heading.level === 1)?.title ?? null;
  const h2s = headings.filter((heading) => heading.level === 2);
  const sections = h2s.map((heading, index) => {
    const next = h2s[index + 1];
    const contentStart = heading.bodyIndex + heading.lineLength;
    const contentEnd = next ? next.bodyIndex : body.length;

    return {
      level: 2,
      title: heading.title,
      content: body.slice(contentStart, contentEnd).replace(/^\r?\n/, '').trimEnd(),
      start: heading.start,
      end: bodyOffset + contentEnd,
    };
  });

  return {
    raw: input,
    frontmatter,
    h1,
    sections,
    body,
  };
}

/**
 * @param {string} input
 * @returns {{frontmatter: null | {raw: string, data: Record<string, unknown>}, body: string, bodyOffset: number}}
 */
export function splitFrontmatter(input) {
  if (!input.startsWith('---\n') && !input.startsWith('---\r\n')) {
    return { frontmatter: null, body: input, bodyOffset: 0 };
  }

  const newline = input.startsWith('---\r\n') ? '\r\n' : '\n';
  const marker = `${newline}---${newline}`;
  const end = input.indexOf(marker, 3 + newline.length);

  if (end === -1) {
    return { frontmatter: null, body: input, bodyOffset: 0 };
  }

  const raw = input.slice(3 + newline.length, end);
  const bodyOffset = end + marker.length;

  return {
    frontmatter: {
      raw,
      data: parseSimpleYaml(raw),
    },
    body: input.slice(bodyOffset),
    bodyOffset,
  };
}

/**
 * Parse the small YAML subset used by AudienceMD frontmatter: scalar key/value
 * pairs and top-level string arrays.
 *
 * @param {string} raw
 * @returns {Record<string, unknown>}
 */
export function parseSimpleYaml(raw) {
  const data = {};
  let currentListKey = null;

  for (const line of raw.split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue;

    const listItem = line.match(/^\s+-\s+(.+)\s*$/);
    if (listItem && currentListKey) {
      data[currentListKey].push(stripYamlString(listItem[1].trim()));
      continue;
    }

    const scalar = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!scalar) {
      currentListKey = null;
      continue;
    }

    const [, key, value] = scalar;
    if (value.trim() === '') {
      data[key] = [];
      currentListKey = key;
    } else {
      data[key] = stripYamlString(value.trim());
      currentListKey = null;
    }
  }

  return data;
}

/** @param {string} value */
export function stripYamlString(value) {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}
