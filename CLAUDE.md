# eslint-config-mixmax — repo card

> A map, not a manual. Keep it ~1 screen; point to detail, don't inline it.

## What it is
Mixmax's shared ESLint configuration, published to npm as `eslint-config-mixmax`. Consumed by every Mixmax JS/TS repo via `"extends": "mixmax/*"` in `.eslintrc.json`.

## serves
role: shared ESLint ruleset (base + per-environment sub-configs) consumed by all Mixmax JS/TS services
referenced-by: [app, compose, mail, sequences, api, files, send, monorepo-frontend, monorepo-billing, and all other Mixmax JS/TS repos]

## Code map
- Base config (ES6+, import order, regex rules) -> `index.js`
- Node.js configs (base, spec, vitest, withVitest, disable-require-atomic) -> `node/`
- Browser configs (React, Backbone globals, spec) -> `browser/`
- Flow type-checking config -> `flow/`
- TypeScript config -> `typescript/`
- Prettier integration -> `prettier/`
- Shared test-glob helpers -> `lib/`

## Conventions
- Consumers extend sub-configs: `"mixmax/node"`, `"mixmax/browser"`, `"mixmax/typescript"`, etc. — never import `index.js` directly.
- All optional plugins (`eslint-plugin-react`, `eslint-plugin-flowtype`, `@vitest/eslint-plugin`, etc.) are `optionalDependencies` — consumers must install them explicitly per the README.
- Versioning is via Conventional Commits + semantic-release; bump is automated from commit messages.

## Gotchas
- `index.js` wraps `addRegexRuleName` in a try/catch: ESLint can load the config more than once per run (via `import-fresh`) — the swallowed "already defined" error is intentional.
- Peer dep `eslint >= 8.57.0` is required but not auto-installed; consumers must satisfy it.

## Run / test
```sh
# Lint the config itself
npm run lint

# Publish a new version (requires GH_TOKEN)
GH_TOKEN=xxx npx semantic-release --no-ci
```
No unit tests (`npm test` exits 1 by design).

## Load the matching domain card
This repo is cross-cutting tooling — it owns no product domain, so there is no domain card to load. When working here, load the card of the consuming service/domain if the change is driven by its needs.
