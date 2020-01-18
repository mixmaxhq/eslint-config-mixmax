module.exports = {
  extends: ['./'],
  rules: {
    'flowtype/no-flow-fix-me-comments': 'error',
    'flowtype/no-existential-type': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-weak-types': [
      'error',
      {
        any: false,
        Object: true,
        Function: true,
      },
    ],
    'flowtype/require-valid-file-annotation': ['error', 'always', { annotationStyle: 'none' }],
  },
};
