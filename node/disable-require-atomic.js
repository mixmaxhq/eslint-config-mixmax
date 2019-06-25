module.exports = {
  rules: {
    /* Although this rule can provide some useful warning when doing assignments inline with
     * async/await (i.e x += await getX()), it's extremely aggressive in assuming out of scope
     * variables should not be reassigned. There's more info in this issue:
     * https://github.com/eslint/eslint/issues/11899 */
    'require-atomic-updates': 'off'
  }
};
