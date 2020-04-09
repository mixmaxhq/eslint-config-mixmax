module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // Node 11.
  },
  env: {
    node: true,
  },
  extends: ['..', '../prettier'],
  overrides: [
    {
      files: ['babel.config.js'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
};
