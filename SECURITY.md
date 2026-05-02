# Security Policy

## Supported versions

AudienceMD is currently preparing its first public v0.1 release. Until the repository is public and packages are published, security handling is best-effort for the private development repository.

After public launch, security fixes will normally target the latest published v0.x release unless a release note says otherwise.

## Reporting a vulnerability

Please do not open a public issue for a suspected vulnerability.

For now, report security concerns through Kiko Palomares' contact page:

- https://kikopalomares.com/contact

After the repository is made public, GitHub private vulnerability reporting or GitHub Security Advisories may become the preferred path if enabled for the project.

When reporting, include:

- affected package, command, page, or file;
- reproduction steps;
- expected vs. actual behavior;
- impact assessment;
- any suggested mitigation, if known.

## Scope

Security-sensitive areas include the CLI, parser, validator, website build pipeline, release workflow, and any future package publishing automation.

The current parser and validator are local, dependency-light tools. They should still treat untrusted `AUDIENCE.md` input defensively and avoid executing user-authored content.
