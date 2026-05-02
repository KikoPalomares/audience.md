# @audiencemd/validator

Advisory validator for AudienceMD v0.1 documents.

It validates the canonical required H2 sections, required-section order, unknown top-level H2 headings, and a small set of frontmatter sanity checks.

## Usage

```js
import { validateAudienceMarkdown } from '@audiencemd/validator';

const result = validateAudienceMarkdown(markdown, { filePath: 'AUDIENCE.md' });

if (!result.valid) {
  console.error(result.errors);
}
```

The validator reuses `@audiencemd/parser` and intentionally stays small: it should catch structural drift without turning AudienceMD into a rigid form format.
