module.exports = {
  extends: ['mixmax', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: '15.5.4'
    }
  },
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    jquery: true
  },
  globals: {
    Backbone: true
  }
};
