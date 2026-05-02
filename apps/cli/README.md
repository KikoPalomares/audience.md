# @audiencemd/cli

Minimal local CLI for creating and validating `AUDIENCE.md` files.

The package is part of the AudienceMD monorepo and is published to npm as `@audiencemd/cli`.

## Commands

```bash
audience init [path] [--force]
audience validate [path]
```

Aliases:

```bash
audiencemd init [path]
audiencemd validate [path]
```

## Package usage

Run without installing globally:

```bash
pnpm dlx @audiencemd/cli --help
pnpm dlx @audiencemd/cli init ./tmp/my-project
pnpm dlx @audiencemd/cli validate ./tmp/my-project
```

npm/npx equivalent:

```bash
npx @audiencemd/cli --help
npx @audiencemd/cli init ./tmp/my-project
npx @audiencemd/cli validate ./tmp/my-project
```

## Local development usage

From the repository root:

```bash
pnpm exec audience --help
pnpm exec audience init ./tmp/my-project
pnpm exec audience validate ./tmp/my-project
```

`init` copies the packaged canonical template from `templates/AUDIENCE.md` and refuses to overwrite an existing file unless `--force` is supplied.

`validate` accepts either an `AUDIENCE.md` path or a directory containing `AUDIENCE.md`.

## Checks

```bash
pnpm --filter @audiencemd/cli check
```
