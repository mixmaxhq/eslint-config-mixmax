module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  extends: [
    '../',
    '../prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
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
  overrides: [
    {
      files: ['**/*.test.ts'],
      rules: {
        'import/first': 'off',
        'import/order': 'off',
      },
    },
  ],
};
