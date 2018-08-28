module.exports = {
  env: {
    es6: true
  },
  extends: 'eslint:recommended',
  rules: {
    'arrow-parens': ['error', 'always'],
    'prefer-const': ['error'],
    'object-shorthand': ['error'],
    'space-before-function-paren': [
      'error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-mixed-operators': ['error', {'groups': [['&&','||']]}],
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'no-use-before-define': ['error', 'nofunc'],
    'no-unused-vars': ['error', {
      // Per https://github.com/eslint/eslint/issues/1494#issuecomment-232890308.
      argsIgnorePattern: 'next'
    }],
    quotes: ['error', 'single', {
      // Let people use strings like "don't worry about single quotes".
      avoidEscape: true
    }],
    // Enforce our whitespace styles around keywords.
    'keyword-spacing': ['error', {
      overrides: {
        function: {
          after: false
        }
      }
    }],
    'no-return-await': ['error'],
    // Console logs should be mostly nonexistent, and places like app.js should just have a
    // /* eslint-disable no-console */
    // comment at the top.
    'no-console': ['error'],

    /**
     * TODO Investigate and fix these (harmless) errors (there are several in `app` throughout our
     * client-side code, eg in `StringUtils`).
     *
     * Note that Express routes play by their own escaping rules and can cause ESLint to fail so
     * we'll need to explicitly ignore the rule in our Express route declarations that use regexps.
     */
    'no-useless-escape': 'off',

    // Error when we use parseInt incorrectly or without the radix parameter.
    'radix': ['error', 'always'],
  }
};
