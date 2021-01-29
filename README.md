# eslint-config-mixmax

This project defines a linter configuration that enforces healthy JS syntax.
Later it should probably enforce [our code styles](https://github.com/mixmaxhq/code-styles#js)
(sorry for the private link, non-Mixmaxers) or those of a more established guide&mdash;see [Roadmap](#roadmap)).

## Installing

```sh
npm install -D eslint-config-mixmax
```

or

```sh
npm install eslint-config-mixmax --save-dev
```

Install this config's peer dependencies if you haven't already:

```sh
npm install -D "eslint@>=7.18.0"
```

or

```sh
npm install --save-dev "eslint@>=7.18.0"
```

If you'll be using the `browser` configs, make sure to install the optional `eslint-plugin-react` and `babel-eslint` dependencies.

```sh
npm install -D "eslint-plugin-react@^7.1.0" "babel-eslint@^8.2.1"
```

or

```sh
npm install --save-dev "eslint-plugin-react@^7.1.0" "babel-eslint@^8.2.1"
```

If you'll be using the `flow` configs, make sure to install the optional `eslint-plugin-flowtype` and `babel-eslint` dependencies.

```sh
npm install -D "eslint-plugin-flowtype@^2.41.0" "babel-eslint@^8.2.1"
```

or

```sh
npm install --save-dev "eslint-plugin-flowtype@^2.41.0" "babel-eslint@^8.2.1"
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

## Roadmap

At v1.0.0, we've implemented configs for the common project types, and update rules as new conventions arise (still mostly ESLint's recommended set though (the checkmarked rules [here](http://eslint.org/docs/rules)). New rules should have justification for their use and a small analysis of the impact on existing code.

We may wish to adopt a more comprehensive / style-oriented spec like [Airbnb’s](https://github.com/airbnb/javascript),
since team members write JS, especially ES6, in slightly different ways; but in the interest of not
immediately breaking our projects I’ve deferred this till later.

This repository should probably document whatever styles we end up adopting, i.e. we should migrate
https://github.com/mixmaxhq/code-styles#js to here.
