module.exports = {
  env: {
    es6: true,
  },
  extends: 'eslint:recommended',
  plugins: ['import', 'react'],
  rules: {
    'arrow-parens': ['error', 'always'],
    'prefer-const': ['error'],

    // Disallow var-type variable declarations. This, combined with the prefer-const rule, will let
    // eslint automatically replace vars with either lets or consts as appropriate.
    'no-var': 'error',

    'object-shorthand': [
      'error',
      'always',
      {
        // This prefers the shorthand object method syntax over arrow functions when they use an
        // explicit return statement. This normalizes methods in most cases, provided they don't
        // interact with `this` and aren't expression-derived arrow functions.
        avoidExplicitReturnArrows: true,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-mixed-operators': ['error', { groups: [['&&', '||']] }],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'no-use-before-define': ['error', 'nofunc'],
    'no-unused-vars': [
      'error',
      {
        // Per https://github.com/eslint/eslint/issues/1494#issuecomment-232890308.
        argsIgnorePattern: 'next',
      },
    ],
    quotes: [
      'error',
      'single',
      {
        // Let people use strings like "don't worry about single quotes".
        avoidEscape: true,
      },
    ],
    // Enforce our whitespace styles around keywords.
    'keyword-spacing': [
      'error',
      {
        overrides: {
          function: {
            after: false,
          },
        },
      },
    ],
    'no-return-await': ['error'],
    // Console logs should be mostly nonexistent, and places like app.js should just have a
    // /* eslint-disable no-console */
    // comment at the top, or be specified as an override in the appropriate .eslintrc file.
    'no-console': ['error'],

    /**
     * TODO: Investigate and fix these (harmless) errors (there are several in `app` throughout our
     * client-side code, eg in `StringUtils`).
     *
     * Note that Express routes play by their own escaping rules and can cause ESLint to fail so
     * we'll need to explicitly ignore the rule in our Express route declarations that use regexps.
     */
    'no-useless-escape': 'off',

    // Error when we use parseInt incorrectly or without the radix parameter.
    radix: ['error', 'always'],

    // Only allow throwing Error objects.
    'no-throw-literal': ['error'],

    // Require consistent return values (either always or never specifying values) so we don't
    // rely on implicit returns when return booleans or undefined.
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'eol-last': ['error', 'always'],

    'import/first': 'warn',
    'import/no-useless-path-segments': 'warn',

    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        pathGroups: [
          { pattern: '@mixmaxhq/**', group: 'external', position: 'after' },
          { pattern: '{,~}/utils/**', group: 'internal', position: 'before' },
          { pattern: '{,~}/**', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
      },
    ],

    // Also sort the named imports _within_ an import statement.
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],

    // enforce the usage of either <React.Fragment> or <Fragment> instead of the shorthand <>
    'react/jsx-fragments': ['error', 'element'],
  },
  overrides: [
    {
      files: ['flow-typed/**'],
      rules: {
        'no-use-before-define': 'off',
      },
    },
  ],
};
