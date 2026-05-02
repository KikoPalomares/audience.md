# Release checklist

Practical checklist for making AudienceMD public and preparing npm releases.

## Before making the repository public

- [ ] Confirm the repository owner/name is final: `KikoPalomares/audience.md`.
- [ ] Re-run the sensitive-content audit:
  - [ ] inspect tracked files with `git ls-files`;
  - [ ] search for secrets, credentials, personal tokens, private URLs, and accidental private notes;
  - [ ] confirm no `.env*`, key, credential, build artifact, or cache files are tracked.
- [ ] Review README, spec, template, examples, docs, package READMEs, `SECURITY.md`, `CODE_OF_CONDUCT.md`, and `CHANGELOG.md` as public-facing text.
- [ ] Confirm licensing is intentional: MIT.
- [ ] Confirm website links point to `https://audiencemd.ai/`.
- [ ] Confirm issue/discussion settings and GitHub security reporting preference.
- [ ] Decide whether to enable GitHub private vulnerability reporting after public launch.

## Version and package readiness

- [ ] Confirm v0.1 package names are final:
  - [ ] `@audiencemd/parser`
  - [ ] `@audiencemd/validator`
  - [ ] `@audiencemd/cli`
- [ ] Confirm npm organization/access exists for the `@audiencemd` scope.
- [ ] Configure npm Trusted Publishing for each package before the first real publish:
  - [ ] package: `@audiencemd/parser`
  - [ ] package: `@audiencemd/validator`
  - [ ] package: `@audiencemd/cli`
  - [ ] GitHub owner: `KikoPalomares`
  - [ ] GitHub repository: `audience.md`
  - [ ] workflow file: `release.yml`
  - [ ] environment name: `npm-release`
  - [ ] branch/tag restrictions are enforced by the GitHub environment: `main` and `v*`.
- [ ] Confirm package descriptions, keywords, repository directories, homepage, bugs, license, files, exports, and bins.
- [ ] Run local package dry-runs:
  - [ ] `pnpm --filter @audiencemd/parser publish --dry-run --no-git-checks`
  - [ ] `pnpm --filter @audiencemd/validator publish --dry-run --no-git-checks`
  - [ ] `pnpm --filter @audiencemd/cli publish --dry-run --no-git-checks`
- [ ] Decide whether the release should publish all packages or only packages whose manifest version matches the requested workflow version.

## Verification gates

- [ ] `pnpm install --frozen-lockfile`
- [ ] `pnpm run check`
- [ ] `pnpm web:build`
- [ ] CLI smoke test:
  - [ ] `pnpm --filter @audiencemd/cli smoke`
  - [ ] `pnpm exec audience validate .`
- [ ] `git diff --check`
- [ ] GitHub Actions check workflow passes on `main`.
- [ ] Vercel production deployment is healthy after the final push.

## Public launch

- [ ] Make the GitHub repository public.
- [ ] Add or verify repository topics.
- [ ] Verify README links and files render correctly while unauthenticated.
- [ ] Create a `v0.1.0` git tag from the intended commit.
- [ ] Create GitHub Release `v0.1.0` using the changelog notes.
- [ ] Run the GitHub Actions `Release` workflow with `dry_run: true` and review the output.
- [ ] Publish npm packages by re-running the `Release` workflow with `dry_run: false`; the workflow uses npm Trusted Publishing/OIDC and does not require `NPM_TOKEN`.
- [ ] Verify package pages on npm.
- [ ] Verify install/usage snippets from a clean temporary directory, including `pnpm --package=@audiencemd/cli dlx audience init ./my-project` and `pnpm --package=@audiencemd/cli dlx audience validate ./my-project`.
- [ ] Announce only after GitHub, npm, and website checks are green.

## Rollback notes

If a package publish is wrong, npm unpublish/deprecate windows and rules are limited. Prefer dry-runs and clean test installs before publishing. For documentation mistakes, fix forward with a patch commit and release note if needed.
