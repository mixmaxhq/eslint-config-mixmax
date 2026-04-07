module.exports = {
  extends: './',
  overrides: [
    {
      files: require('../lib/test-globs'),
      extends: ['plugin:@vitest/legacy-recommended'],
      plugins: ['@vitest'],
      globals: require('../lib/vitest-globals'),
    },
    {
      files: ['vitest.config.{js,ts,mjs,mts}', 'vitest.setup.{js,ts}'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
};
