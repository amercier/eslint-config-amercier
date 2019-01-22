/**
 * Base config for [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest).
 */
module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  rules: {
    'jest/consistent-test-it': 'error',
    'jest/expect-expect': 'error',
    'jest/lowercase-name': [
      'error',
      {
        ignore: ['describe', 'test'],
      },
    ],
    'jest/no-hooks': 'error',
    'jest/no-large-snapshots': 'error',
    'jest/no-test-callback': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-truthy-falsy': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/require-tothrow-message': 'error',
  },
};
