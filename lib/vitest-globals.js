// Vitest globals exposed when running with `globals: true` in vitest config.
// These are not provided by `plugin:@vitest/legacy-recommended` itself, so
// must be declared explicitly for ESLint to recognize them in test files.
module.exports = {
  vi: 'readonly',
  vitest: 'readonly',
  describe: 'readonly',
  it: 'readonly',
  test: 'readonly',
  expect: 'readonly',
  beforeAll: 'readonly',
  beforeEach: 'readonly',
  afterAll: 'readonly',
  afterEach: 'readonly',
  suite: 'readonly',
  expectTypeOf: 'readonly',
  assertType: 'readonly',
  onTestFinished: 'readonly',
  onTestFailed: 'readonly',
  chai: 'readonly',
  assert: 'readonly',
};
