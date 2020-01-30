module.exports = {
  extends: './',
  overrides: [
    {
      files: ['**/*.test.js?(x)', '**/*Spec.js?(x)', 'spec/**/*.js', 'test/**/*.js'],
      env: {
        jest: true,
      },
    },
    {
      files: ['jest.config.js'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
};
