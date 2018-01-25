module.exports = {
  parser: 'babel-eslint',
  extends: 'mixmax/node',
  plugins: [
    'flowtype'
  ],
  rules: {
    'space-infix-ops': 0,
    'no-duplicate-imports': 0,
    'flowtype/define-flow-type': 1,
    'flowtype/space-before-type-colon': [
      1,
      'never'
    ],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
    'flowtype/type-id-match': [
      2,
      '^([A-Z]+[a-z0-9A-Z]*)$'
    ]
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  }
};
