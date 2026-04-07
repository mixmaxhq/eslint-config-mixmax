// Canonical test-file glob patterns recognized by Mixmax ESLint configs.
// Used to scope vitest plugin rules and globals to test files only.
module.exports = [
  '**/*.test.{js,jsx,ts,tsx}',
  '**/*.spec.{js,jsx,ts,tsx}',
  'test/**',
  'tests/**',
  '__tests__/**',
];
