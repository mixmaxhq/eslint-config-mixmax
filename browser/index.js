module.exports = {
  extends: ['mixmax', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: '15.5.4'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
  },
  env: {
    browser: true,

    // TODO: We should not globalize this - we should explicitly import our CDN-sourced dependencies.
    jquery: true
  },
  globals: {
    // TODO: We should not globalize this - we should explicitly import our CDN-sourced dependencies.
    Backbone: true
  }
};
