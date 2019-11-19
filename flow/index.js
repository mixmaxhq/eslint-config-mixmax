module.exports = {
  parser: 'babel-eslint',
  plugins: [
    // Allows correct parsing of flow annotated files.
    'flowtype',
  ],
  rules: {
    // Makes flow `type` definitions defines
    'flowtype/define-flow-type': 1,
    // Do not allow spaces before type declarations, i.e. let a: number, not let a : number
    'flowtype/space-before-type-colon': [1, 'never'],
    // Marks flow type declarations as used to prevent no-unused-vars for types
    'flowtype/use-flow-type': 1,
    // Enforces camelcase for type definitions
    'flowtype/type-id-match': [2, '^([A-Z]+[a-z0-9A-Z]*)$'],
  },
  settings: {
    // Only use the flow linter for files with `@flow`
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  parserOptions: {
    // Required to support import/export syntax when using types
    sourceType: 'module',
  },
};
