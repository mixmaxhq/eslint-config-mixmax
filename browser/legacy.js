module.exports = {
  extends: './',
  env: {
    // TODO: We should not globalize this - we should explicitly import our CDN-sourced dependencies.
    jquery: true,
  },
  globals: {
    // TODO: We should not globalize this - we should explicitly import our CDN-sourced dependencies.
    Backbone: true,
  },
};
