module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  extends: ['../', '../prettier', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint', 'import'],
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
      // TS/TSX-only globs: this config uses @typescript-eslint/parser with
      // parserOptions.project, so .js/.jsx files matched here would fail to
      // parse if they aren't in the tsconfig. Repos with JS test files
      // should use mixmax/node/withVitest in addition to mixmax/typescript.
      files: [
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        'test/**/*.{ts,tsx}',
        'tests/**/*.{ts,tsx}',
        '__tests__/**/*.{ts,tsx}',
      ],
      extends: ['plugin:@vitest/legacy-recommended'],
      plugins: ['@vitest'],
      globals: require('../lib/vitest-globals'),
      rules: {
        'import/first': 'off',
        'import/order': 'off',
      },
    },
  ],
};
