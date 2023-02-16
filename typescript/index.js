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
    project: ['./tsconfig.json', './tsconfig-lint.json'],
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_|^next$',
      },
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    'no-return-await': 'off',
    '@typescript-eslint/return-await': ['error', 'always'],
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
