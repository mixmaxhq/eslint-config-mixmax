module.exports = {
  extends: './',
  overrides: [
    {
      files: [
        '**/*.test.js?(x)',
        '**/*Spec.js?(x)',
        'spec/support/**/*.js',
        'test/support/**/*.js',
      ],
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
