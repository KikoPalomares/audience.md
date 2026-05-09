# Changelog

All notable changes to AudienceMD will be documented in this file.

AudienceMD follows semantic-ish versioning during the pre-1.0 phase. See [`docs/versioning.md`](docs/versioning.md) for compatibility expectations.

## [Unreleased]

## [0.1.3] - 2026-05-09

### Fixed

- Validator no longer treats lowercase Spanish `todo` as placeholder text while still warning for uppercase `TODO`/`TBD` markers.

## [0.1.2] - 2026-05-02

### Fixed

- CLI npm package now includes the canonical `AUDIENCE.md` template, so `audience init` works after a clean npm install.
- CLI `--version` now reports the installed package version instead of a stale hardcoded value.
- Release workflow now publishes only packages matching the requested release version, allowing CLI-only patch releases.

## [0.1.1] - 2026-05-02

### Fixed

- Published npm package metadata now uses semver ranges for internal AudienceMD dependencies instead of `workspace:*`, allowing clean installs from npm.

### Added

- Public-release readiness documentation.
- Manual release checklist for making the repository public and preparing v0.1 packages.

### Changed

- Package metadata prepared for future npm publication without publishing anything yet.

## [0.1.0] - 2026-05-02

Initial v0.1 release candidate.

### Added

- AudienceMD v0.1 specification.
- Canonical `AUDIENCE.md` template.
- Advisory JSON schema.
- Example audience files across software, content, community, course, campaign, SaaS, mobile app, physical product, newsletter, and AI-agent contexts.
- Dependency-free Markdown/frontmatter parser package.
- Advisory validator package.
- Minimal local CLI for `init`, `validate`, and `print-schema`.
- Documentation website source and GitHub Actions check workflow.
