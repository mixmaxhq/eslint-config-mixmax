module.exports = {
  extends: ['mixmax', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
  },
  env: {
    browser: true,

    // TODO: We should not globalize this - we should explicitly import our CDN-sourced dependencies.
    jquery: true
  },
  globals: {
    // TODO: We should not globalize this - we should explicitly import our CDN-sourced dependencies.
    Backbone: true
    
    /**
     * We need to globalize `analytics` because of the way Segment's library loads. It redefines
     * `window.analytics` after loading, which, when `analytics` is not globalized, causes issues
     * because the `analytics` rollup catches may not be the `window.analytics` we want.
     */
    analytics: true    
  },
  rules: {
    'react/jsx-wrap-multilines': 2
  }
};
