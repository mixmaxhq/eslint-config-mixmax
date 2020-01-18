module.exports = {
  parserOptions: {
    ecmaVersion: 2018, // Node 8.
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
