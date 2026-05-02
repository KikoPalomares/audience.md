# @audiencemd/parser

Dependency-free parser for AudienceMD-flavoured Markdown documents.

It returns a small structured object while preserving the raw document:

- optional frontmatter (`raw` plus a simple parsed data object)
- first H1 title
- top-level H2 sections with title, content, and source offsets
- raw body content

## Usage

```js
import { parseAudienceMarkdown } from '@audiencemd/parser';

const document = parseAudienceMarkdown(markdown);
console.log(document.h1);
console.log(document.sections.map((section) => section.title));
```

The parser intentionally supports only the small YAML subset used by AudienceMD frontmatter. It is not a complete Markdown or YAML parser.
