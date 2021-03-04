module.exports = {
  extends: ['..', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  globals: {
    /**
     * We need to globalize `analytics` because of the way Segment's library loads. It redefines
     * `window.analytics` after loading, which, when `analytics` is not globalized, causes issues
     * because the `analytics` rollup catches may not be the `window.analytics` we want.
     */
    analytics: true,
  },
  rules: {
    'react/jsx-wrap-multilines': 2,

    // enforce the usage of either <React.Fragment> or <Fragment> instead of the shorthand <>
    'react/jsx-fragments': ['error', 'element'],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
