# eslint-config-mixmax

This project defines a linter configuration that enforces healthy JS syntax.
Later it should probably enforce [our code styles](https://github.com/mixmaxhq/code-styles#js)
(sorry for the private link, non-Mixmaxers) or those of a more established guide&mdash;see [Roadmap](#roadmap)).

## Installing

```sh
yarn add -D eslint-config-mixmax
```
or
```sh
npm install eslint-config-mixmax --save-dev
```

Install this config's peer dependencies if you haven't already:
```sh
yarn add -D "eslint@>=4.14.0"
```
or
```sh
npm install --save-dev "eslint@>=4.14.0"
```

If you'll be using the `browser` configs, make sure to install the optional `eslint-plugin-react` and `babel-eslint` dependencies.
```sh
yarn add -D "eslint-plugin-react@^7.1.0" "babel-eslint@^8.2.1"
```
or
```sh
npm install --save-dev "eslint-plugin-react@^7.1.0" "babel-eslint@^8.2.1"
```

If you'll be using the `flow` configs, make sure to install the optional `eslint-plugin-flowtype` and `babel-eslint` dependencies.
```sh
yarn add -D "eslint-plugin-flowtype@^2.41.0" "babel-eslint@^8.2.1"
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

* "mixmax/node", in directories containing Node.js code.
* "mixmax/node/spec", in directories containing Node specs (assumed to be using Jasmine).
* "mixmax/node/ava", in directories containing ava tests.
* "mixmax/node/next", in projects using node 8 syntax (should also extend mixmax/node).
* "mixmax/flow", in projects using flow for type checking (should also extend mixmax/node or mixmax/browser).
* "mixmax/browser", in directories containing browser code. `eslint-plugin-react` is enabled in this configuration to allow for React-specific linting. Additionally, `Backbone`  and `$` are globalized so that their `import` statements are not required by the linter (though they should be - see TODOs in this configuration file).
* "mixmax/browser/spec", in directories containing browser specs (assumed to be using Jasmine).

These configurations assume that you're using Node 7.6.0 or higher.

Configurations for browser code and specs are forthcoming.

If you want you can extend the base configuration directly (`"extends": "mixmax"`) but you shouldn't
need to since the Node and browser configurations already extend that.

## Roadmap

At v0.1.0, this config is starting off very minimal&mdash;pretty much just ESLint's recommended
rules (the checkmarked rules [here](http://eslint.org/docs/rules)).

We may wish to adopt a more comprehensive / style-oriented spec like [Airbnb’s](https://github.com/airbnb/javascript),
since team members write JS, especially ES6, in slightly different ways; but in the interest of not
immediately breaking our projects I’ve deferred this till later.

This repository should probably document whatever styles we end up adopting, i.e. we should migrate
https://github.com/mixmaxhq/code-styles#js to here.

## Changelog

* 1.0.0 Add flow support and *BREAKING* upgrade minimum eslint version to `4.14.0`.
* 0.7.0 Enforce `arrow-parens` with error.
* 0.6.0 Add `ava` config
* 0.5.0 Globalize `analytics` in `browser` configs.
* 0.4.2 Make `babel-eslint` an optional dependency.
* 0.4.1 Make `eslint-plugin-react` an optional dependency.
* 0.4.0 Add `browser` and `browser/spec` configs.
