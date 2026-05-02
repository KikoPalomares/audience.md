# Versioning

AudienceMD uses semantic-ish versioning for the specification.

## v0.x

Draft phase. Section names, schema fields, and validation guidance may change. Implementers should expect movement.

## v1.0

A future v1.0 should mean:

- stable core section semantics
- clear conformance levels
- documented extension mechanism
- tested examples
- validator behavior defined well enough for interoperability

## Declaring a version

Recommended YAML frontmatter:

```yaml
audiencemd: 0.1
```

If no version is declared, tools may treat the file as an unversioned AudienceMD-like document and apply best-effort parsing.

## Compatibility goals

Minor versions should avoid breaking human-authored files. When possible, new fields should be additive.
