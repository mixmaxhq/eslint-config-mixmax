# eslint-config-mixmax

This project defines a linter configuration that enforces healthy JS syntax.
Later it should probably enforce [our code styles](https://github.com/mixmaxhq/code-styles#js)
(sorry for the private link, non-Mixmaxers) or those of a more established guide&mdash;see [Roadmap](#roadmap)).

## Installing

```sh
npm install -D eslint-config-mixmax
```

Install this config's peer dependencies if you haven't already:

```sh
npm install -D "eslint@>=8.57.0"
```
### Using browser config

If you'll be using the `browser` configs, make sure to install the following dependencies:
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `@babel/eslint-parser`


```sh
npm install -D "eslint-plugin-react@^7.23.1" "@babel/eslint-parser@^10.0.2" "eslint-plugin-react-hooks@^4.2.0"
```

### Using Flow config

If you'll be using the `flow` configs, make sure to install the optional `eslint-plugin-flowtype` and `@babel/eslint-parser` dependencies.

```sh
npm install -D "eslint-plugin-flowtype@^3.11.1" "@babel/eslint-parser@^10.0.2"
```

### Using Vitest support

If you'll be using the `typescript`, `node/withVitest`, or `node/vitest` configs, install the optional `@vitest/eslint-plugin` dependency.

```sh
npm install -D "@vitest/eslint-plugin@^1.6.14"
```

## Usage

Create `.eslintrc.json` files like

```json
{
  "extends": "<name of config below>"
}
```

in the appropriate directories: extend…

- "mixmax/node", in directories containing Node.js code.
- "mixmax/node/spec", in directories containing Node specs (assumed to be using Jasmine).
- "mixmax/node/ava", in directories containing ava tests.
- "mixmax/node/withVitest", in Node.js projects using Vitest. Scopes Vitest globals and rules to test files only (recommended for repos where test files live alongside source files).
- "mixmax/node/vitest", in Node.js test-only directories (e.g. a `test/` subdirectory's own `.eslintrc.json`). Applies Vitest globals and rules unconditionally.
- "mixmax/node/next", in projects using node 8 syntax (should also extend mixmax/node).
- "mixmax/flow", in projects using flow for type checking (should also extend mixmax/node or mixmax/browser).
- "mixmax/browser", in directories containing browser code. `eslint-plugin-react` is enabled in this configuration to allow for React-specific linting. Additionally, `Backbone` and `$` are globalized so that their `import` statements are not required by the linter (though they should be - see TODOs in this configuration file).
- "mixmax/browser/spec", in directories containing browser specs (assumed to be using Jasmine).

If you want you can extend the base configuration directly (`"extends": "mixmax"`) but you shouldn't
need to since the Node and browser configurations already extend that.

## Migrating from v5

v6 drops Jest support entirely in favor of Vitest. If you are upgrading
from v5, follow these steps in each consumer repo:

1. **Bump ESLint to >=8.57.0** (the new peer dependency floor):
   ```sh
   npm install -D "eslint@^8.57.0"
   ```

2. **Replace Jest entry points in your `.eslintrc.json`:**
   - `"mixmax/node/withJest"` &rarr; `"mixmax/node/withVitest"`
   - `"mixmax/node/jest"` &rarr; `"mixmax/node/vitest"`
   - `"mixmax/typescript"` requires no change (it now bakes in Vitest support
     scoped to test files).

3. **Install the Vitest ESLint plugin:**
   ```sh
   npm install -D "@vitest/eslint-plugin@^1.6.14"
   ```

4. **Remove leftover Jest config from your `.eslintrc.json`:**
   - Delete any `"settings": { "jest": { "version": ... } }` block.
   - Remove `"env": { "jest": true }` from any test-file overrides.
   - Remove any `"jest/<rule>"` entries from the `"rules"` block (they no
     longer exist; `vitest/<rule>` equivalents are enabled by the new config).

5. **Remove `eslint-plugin-jest` from your `devDependencies`:**
   ```sh
   npm uninstall eslint-plugin-jest
   ```

## Publishing a new version

```
GH_TOKEN=xxx npx semantic-release --no-ci
```
