## [4.3.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.2.0...v4.3.0) (2019-12-11)


### Features

* require newline at the end of files ([ff12437](https://github.com/mixmaxhq/eslint-config-mixmax/commit/ff1243737900713f3c2f478e21863ea0b2a942d5))

## [4.2.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.1.0...v4.2.0) (2019-12-09)


### Features

* add jest config file override ([96c158f](https://github.com/mixmaxhq/eslint-config-mixmax/commit/96c158f7bfe09784f1ff693ad7309785c1fc69e2))

## [4.1.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.0.0...v4.1.0) (2019-11-19)


### Features

* add jest environment for unlabeled support files ([7a335e4](https://github.com/mixmaxhq/eslint-config-mixmax/commit/7a335e4f960f663700606592f46f4457039b96b9))

## [4.0.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v3.4.0...v4.0.0) (2019-11-19)


### ⚠ BREAKING CHANGES

* Any repositories that use `mixmax/ava` will be unable to do so in this version.
* Projects that use the `mixmax/node` config but don't
use `mixmax/prettier` may see new eslint errors.

### Features

* add jest environment to jest-like files ([535c848](https://github.com/mixmaxhq/eslint-config-mixmax/commit/535c84839fea0174e4b02272146f11b75c377524))


### Bug Fixes

* remove ava config ([84deae3](https://github.com/mixmaxhq/eslint-config-mixmax/commit/84deae3b1108c233b5a523dea47de584c86c016a))
* use relative imports instead of named imports ([e6ca89b](https://github.com/mixmaxhq/eslint-config-mixmax/commit/e6ca89b0682e02c84a403adf5837cf6698c430ff))


### improvement

* include prettier in default node config ([1d9b3bc](https://github.com/mixmaxhq/eslint-config-mixmax/commit/1d9b3bc7f72b14b7cfc2dbdfe7634841866400ce))

## Release History

* 3.4.0 Use `treatUndefinedAsUnspecified` with `consistent-return`.

* 3.3.0 Add `mixmax/prettier` to compose with `mixmax/node` when adopting prettier.

* 3.2.0 Add `consistent-return` rule.

* 3.1.0 Add `mixmax/node/disable-require-atomic`

* 2.1.0 Adds no-throw-literal rule

* 2.0.0 Upgrade eslint to  *Breaking* remove 

* 1.3.0 Add `parseInt` radix rule

* 1.2.0 Deprecate browser globals, add `browser/legacy` for that purpose

* 1.1.0 Add no-return-await rule

* 0.12.0 Add new rules `prefer-const`, `object-shorthand`, `space-before-function-paren`.

* 0.11.0 Add Jest config

* 0.10.0 jsx-quotes prefer-single

* 0.9.0 no-mixed-operators ||,&&

* 0.8.1 Fix missing comma in browser/index.js

* 0.8.0 Add jsx paren rule

* 0.7.0 Enforce `arrow-parens` with error.

* 0.6.0 Add `ava` config

* 0.5.0 Globalize `analytics` in `browser` configs.

* 0.4.2 Make `babel-eslint` an optional dependency.

* 0.4.1 Make `eslint-plugin-react` an optional dependency.

* 0.4.0 Add `browser` and `browser/spec` configs.
