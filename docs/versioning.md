# Versioning

AudienceMD uses semantic-ish versioning for the specification.

The current version is `0.1`.

## Declaring a version

Recommended YAML frontmatter:

```yaml
audiencemd: "0.1"
```

Use a quoted string. Some YAML parsers treat unquoted `0.1` as a number, which can create unnecessary interoperability problems.

If no version is declared, tools may treat the file as an unversioned AudienceMD-like document and apply best-effort parsing.

## v0.x

Pre-1.0 phase. Section names, schema fields, examples, and validation guidance may still change as real adoption teaches what should stabilize. Implementers should expect movement.

During v0.x:

- tools should be permissive
- warnings are better than hard failures
- migrations should preserve the human-authored Markdown
- changes should avoid breaking useful existing files unless the old behavior is clearly harmful

## v1.0

A future v1.0 should mean:

- stable core section semantics
- clear conformance levels
- documented extension mechanism
- tested examples
- validator behavior defined well enough for interoperability
- a migration path from late v0.x versions

## Compatibility goals

Minor versions should avoid breaking human-authored files. When possible, new fields should be additive.

Canonical section names may become stricter over time, but v0.x tools should still recognize reasonable aliases and explain how to migrate.

## Schema compatibility

The JSON schema is advisory. It represents a possible structured view of an `AUDIENCE.md` file; it is not the canonical storage format.

Schema changes should track the spec and template, but the Markdown file remains the source of truth.
