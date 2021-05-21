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
npm install -D "eslint@>=7.18.0"
```
### Using browser config

If you'll be using the `browser` configs, make sure to install the following dependencies:
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `babel-eslint`


```sh
npm install -D "eslint-plugin-react@^7.23.1" "babel-eslint@^10.0.2" "eslint-plugin-react-hooks@^4.2.0"
```

### Using Flow config

If you'll be using the `flow` configs, make sure to install the optional `eslint-plugin-flowtype` and `babel-eslint` dependencies.

```sh
npm install -D "eslint-plugin-flowtype@^3.11.1" "babel-eslint@^10.0.2"
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
- "mixmax/node/next", in projects using node 8 syntax (should also extend mixmax/node).
- "mixmax/flow", in projects using flow for type checking (should also extend mixmax/node or mixmax/browser).
- "mixmax/browser", in directories containing browser code. `eslint-plugin-react` is enabled in this configuration to allow for React-specific linting. Additionally, `Backbone` and `$` are globalized so that their `import` statements are not required by the linter (though they should be - see TODOs in this configuration file).
- "mixmax/browser/spec", in directories containing browser specs (assumed to be using Jasmine).

If you want you can extend the base configuration directly (`"extends": "mixmax"`) but you shouldn't
need to since the Node and browser configurations already extend that.
