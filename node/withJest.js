module.exports = {
  extends: './',
  overrides: [
    {
      files: ['**/*.test.js?(x)', '**/*Spec.js?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
