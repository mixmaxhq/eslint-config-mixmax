module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  extends: ['../', 'plugin:@typescript-eslint/recommended', 'plugin:jest/recommended'],
  plugins: ['@typescript-eslint', 'import', 'jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'next',
      },
    ],
  },
};
