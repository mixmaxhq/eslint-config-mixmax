### [5.2.6](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v5.2.5...v5.2.6) (2025-02-10)


### Bug Fixes

* force deploy ([dd23031](https://github.com/mixmaxhq/eslint-config-mixmax/commit/dd23031ee8e48c0c5e14bffde166bb9c3e619176))

### [5.2.5](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v5.2.4...v5.2.5) (2025-02-10)


### Bug Fixes

* force deploy ([9ce0715](https://github.com/mixmaxhq/eslint-config-mixmax/commit/9ce0715dda582490de39a3082fdb9296de412ea3))

### [5.2.4](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v5.2.3...v5.2.4) (2025-02-10)


### Bug Fixes

* force deploy ([46f83c4](https://github.com/mixmaxhq/eslint-config-mixmax/commit/46f83c45e9d19c84aa8b7ab30e550c2e83d608d1))

### [5.2.3](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v5.2.2...v5.2.3) (2025-02-10)


### Bug Fixes

* allow later typescript-eslint versions ([bc31695](https://github.com/mixmaxhq/eslint-config-mixmax/commit/bc3169570b5efb7a4161dfaa255954a253741dc2))

### [5.2.2](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v5.2.1...v5.2.2) (2024-02-27)


### Bug Fixes

* ci ([70192fa](https://github.com/mixmaxhq/eslint-config-mixmax/commit/70192faec5ab105f38ec87aa07309063cca22c37))
* force build ([c8740df](https://github.com/mixmaxhq/eslint-config-mixmax/commit/c8740df421a3724686343686ef902af9c25dc24a))
* semantic release ([799a9b1](https://github.com/mixmaxhq/eslint-config-mixmax/commit/799a9b115c1d9ce3ddf2ccd9d38cecc09e618a6c))

### [5.2.2](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v5.2.1...v5.2.2) (2024-02-27)


### Bug Fixes

* ci ([70192fa](https://github.com/mixmaxhq/eslint-config-mixmax/commit/70192faec5ab105f38ec87aa07309063cca22c37))
* semantic release ([799a9b1](https://github.com/mixmaxhq/eslint-config-mixmax/commit/799a9b115c1d9ce3ddf2ccd9d38cecc09e618a6c))

### [5.2.1](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v5.2.0...v5.2.1) (2024-02-23)


### Bug Fixes

* force build ([a8b0958](https://github.com/mixmaxhq/eslint-config-mixmax/commit/a8b095845efcf4bf4ce7571433416a3cfd787d8d))

## [5.2.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v5.1.0...v5.2.0) (2024-02-23)


### Features

* upgrade to Typescript 5 ([6bee7ea](https://github.com/mixmaxhq/eslint-config-mixmax/commit/6bee7ea31e68419fe3c5125d48d617ba323c9c3e))


### Bug Fixes

* **deps:** update dependency node to v18 ([#97](https://github.com/mixmaxhq/eslint-config-mixmax/issues/97)) ([e4d6571](https://github.com/mixmaxhq/eslint-config-mixmax/commit/e4d6571db5b0859f4eadfa3ef96cf3822ece0233))

## [5.1.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v5.0.1...v5.1.0) (2023-02-16)


### Features

* require awaiting returned promises ([629cbdd](https://github.com/mixmaxhq/eslint-config-mixmax/commit/629cbdd8cb11de5928e8a6c36879c6f2a0f183f7))

### [5.0.1](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v5.0.0...v5.0.1) (2021-11-08)


### Bug Fixes

* remove deprecated babel parser ([07849c3](https://github.com/mixmaxhq/eslint-config-mixmax/commit/07849c3a786f329710e6d057473c0368ab64016d))

## [5.0.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.18.0...v5.0.0) (2021-09-28)


### ⚠ BREAKING CHANGES

* requires a `tsconfig-lint.json` file at the project's root
which includes all Typescript files being linted. May break the build because
of new eslint errors. This can be worked around by disabling rules in
`.eslintrc.json`.

### Features

* add type-aware rules for Typescript code ([3ce0cbf](https://github.com/mixmaxhq/eslint-config-mixmax/commit/3ce0cbf47ace71fc649bff2d2b78e458aac56f75))

## [4.18.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.17.0...v4.18.0) (2021-09-10)


### Features

* add specific react settings ([379fd3f](https://github.com/mixmaxhq/eslint-config-mixmax/commit/379fd3f638f6c536a98b6311f98db92cd4bb38df))


### Bug Fixes

* allow some unused varables ([90c099d](https://github.com/mixmaxhq/eslint-config-mixmax/commit/90c099d6976d99a0ae33268591777303a213a14e))
* use more correct naming ([b491b73](https://github.com/mixmaxhq/eslint-config-mixmax/commit/b491b73043c172ecaddd35f653f49629d40cd56d))

## [4.17.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.16.0...v4.17.0) (2021-07-22)


### Features

* ignore order of imports for test files ([3e8701c](https://github.com/mixmaxhq/eslint-config-mixmax/commit/3e8701c836da89e7f24531b7960b02a1f07095cf))

## [4.16.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.15.0...v4.16.0) (2021-07-21)


### Features

* have our TS config extend prettier by default ([84ac14f](https://github.com/mixmaxhq/eslint-config-mixmax/commit/84ac14f7020825f014579723c412639b1e135ba8))

## [4.15.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.14.0...v4.15.0) (2021-06-25)


### Features

* add consistent curly enforcement ([060aaa2](https://github.com/mixmaxhq/eslint-config-mixmax/commit/060aaa26df42a09a4de9095d892679e7a7d513c5))

## [4.14.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.13.0...v4.14.0) (2021-06-16)


### Features

* add typescript eslint configs ([1905187](https://github.com/mixmaxhq/eslint-config-mixmax/commit/19051877721cd2e4ddec6f09b994894172f20766))


### Bug Fixes

* missing dependencies ([96334f4](https://github.com/mixmaxhq/eslint-config-mixmax/commit/96334f40627a398d9ec559f08fac79e3d3d623f5))

## [4.13.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.12.1...v4.13.0) (2021-05-21)


### Features

* add rules of hooks to linter ([1caabf5](https://github.com/mixmaxhq/eslint-config-mixmax/commit/1caabf5ffa6e7def6dbd100b0f84c2aa14634b39))

### [4.12.1](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.12.0...v4.12.1) (2021-05-05)


### Bug Fixes

* fix react fragment rule config ([67cb4f1](https://github.com/mixmaxhq/eslint-config-mixmax/commit/67cb4f1d8a7556e037de14abfc7a3e2f0960c9a8))

## [4.12.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.11.4...v4.12.0) (2021-03-30)


### Features

* prevent the usage of the fragment shorthand ([18041f8](https://github.com/mixmaxhq/eslint-config-mixmax/commit/18041f89faa9e03981ce25bd83269039f988fa36))

### [4.11.4](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.11.3...v4.11.4) (2021-01-29)


### Bug Fixes

* remove outdated readme section ([1b11eb6](https://github.com/mixmaxhq/eslint-config-mixmax/commit/1b11eb665352870d151190d70dad0bace76ef5d4))
* update readme ([84b6cfb](https://github.com/mixmaxhq/eslint-config-mixmax/commit/84b6cfbb1d64e1e330975531e7e7efcaa599122a))

### [4.11.3](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.11.2...v4.11.3) (2021-01-28)


### Bug Fixes

* import order ([4cc3bf1](https://github.com/mixmaxhq/eslint-config-mixmax/commit/4cc3bf1652687c408543a22c4bdcd446f979107b))
* update rule to match mixmax packages ([8d102a1](https://github.com/mixmaxhq/eslint-config-mixmax/commit/8d102a1ec0b2ae491cad3319d8b573eeae61237d))

### [4.11.2](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.11.1...v4.11.2) (2020-12-22)


### Bug Fixes

* invalid ecmascript bug ([c5eb08d](https://github.com/mixmaxhq/eslint-config-mixmax/commit/c5eb08dbf5c658c9fc91c69eedac82eebf419ad8))

### [4.11.1](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.11.0...v4.11.1) (2020-05-19)


### Bug Fixes

* correctly depend on import plugin ([#56](https://github.com/mixmaxhq/eslint-config-mixmax/issues/56)) ([8762ed1](https://github.com/mixmaxhq/eslint-config-mixmax/commit/8762ed160f2b7f046a5efabd76fda90f01f0dd5a))

## [4.11.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.10.0...v4.11.0) (2020-05-19)


### Features

* warn for misordered imports ([#53](https://github.com/mixmaxhq/eslint-config-mixmax/issues/53)) ([6c7a06f](https://github.com/mixmaxhq/eslint-config-mixmax/commit/6c7a06f7ebf20576e2b557505d14e87fd621d33f))

## [4.10.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.9.0...v4.10.0) (2020-04-09)


### Features

* bump node ecmaVersion to support 10.x features ([83d3626](https://github.com/mixmaxhq/eslint-config-mixmax/commit/83d362611ef5c425a97b7c92622cb04bd6c7555a))

## [4.9.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.8.0...v4.9.0) (2020-02-18)


### Features

* add no-var rule ([3699832](https://github.com/mixmaxhq/eslint-config-mixmax/commit/36998326f9fc23902cdaa4745f2334aff2a49d18))

## [4.8.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.7.0...v4.8.0) (2020-01-31)


### Features

* support test files in test and spec folders ([82a3953](https://github.com/mixmaxhq/eslint-config-mixmax/commit/82a39534866ebb8410e89547fe20102b0adfd160))

## [4.7.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.6.0...v4.7.0) (2020-01-25)


### Features

* ignore flow-typed/npm in flow config ([25e8d88](https://github.com/mixmaxhq/eslint-config-mixmax/commit/25e8d8807f48f22eefaba04868379c713d2c917f))

## [4.6.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.5.0...v4.6.0) (2020-01-23)


### Features

* object-shorthand avoidExplicitReturnArrows ([77a73c2](https://github.com/mixmaxhq/eslint-config-mixmax/commit/77a73c25b79dcf8718938f10886f94d11ac9dedd))

## [4.5.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.4.0...v4.5.0) (2020-01-23)


### Features

* add no-use-before-define rule to flow-typed definitions ([5302dc4](https://github.com/mixmaxhq/eslint-config-mixmax/commit/5302dc4c27eaf9d2e4a20363988e86eb0a615294))
* assume all=true for flow/strict instead of requiring annotations ([8066720](https://github.com/mixmaxhq/eslint-config-mixmax/commit/80667200d2de34b91d8f517174d241630d7b3b1e))
* permit $-prefixed type names ([ea32d4c](https://github.com/mixmaxhq/eslint-config-mixmax/commit/ea32d4c832621a4d507ea632b840b88faa533dc2))

## [4.4.0](https://github.com/mixmaxhq/eslint-config-mixmax/compare/v4.3.0...v4.4.0) (2020-01-18)


### Features

* add strict flow config ([12aabb6](https://github.com/mixmaxhq/eslint-config-mixmax/commit/12aabb6fb2af09b3d7e5c5224db3d84291e76d1e))
* override babel config file sourceType ([4af9a2d](https://github.com/mixmaxhq/eslint-config-mixmax/commit/4af9a2d71a5efb08a7a010f5b6e115fef4cfb0ef))

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
