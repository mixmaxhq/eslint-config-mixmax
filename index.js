module.exports = {
  env: {
    es6: true
  },
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
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
    // Console logs should be mostly nonexistent, and places like app.js should just have a 
    // /* eslint-disable no-console */
    // comment at the top.
    'no-console': ['error'],

    // TODO Investigate and fix these (harmless) errors. Note that Express routes play by their own
    // escaping rules and can cause ESLint to fail so we'll need to explicitly ignore the rule in
    // our Express route declarations that use regexps.
    'no-useless-escape': 'off'
  }
};
