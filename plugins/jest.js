const httpMethods = require('http-methods-constants')

module.exports = {
  plugins: ['jest'],
  env: {
    jest: true,
  },
  rules: {
    // Custom
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md
    'jest/consistent-test-it': ['error', { withinDescribe: 'it' }],

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
    'jest/expect-expect': 'warn',

    // Custom
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/lowercase-name.md
    'jest/lowercase-name': [
      'error',
      {
        ignore: ['test'],
        allowedPrefixes: Object.values(httpMethods),
        ignoreTopLevelDescribe: true,
      },
    ],

    // Taken from plugin:jest/style
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md
    'jest/no-alias-methods': 'warn',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
    'jest/no-commented-out-tests': 'warn',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-conditional-expect.md
    'jest/no-conditional-expect': 'error',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-deprecated-functions.md
    'jest/no-deprecated-functions': 'error',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': 'warn',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-done-callback.md
    'jest/no-done-callback': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md
    'jest/no-duplicate-hooks': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-expect-resolves.md
    'jest/no-expect-resolves': 'off',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md
    'jest/no-export': 'error',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md
    'jest/no-hooks': 'off',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md
    'jest/no-identical-title': 'error',

    // Custom
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md
    'jest/no-if': 'error',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-interpolation-in-snapshots.md
    'jest/no-interpolation-in-snapshots': 'error',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
    'jest/no-jasmine-globals': 'error',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import.md
    'jest/no-jest-import': 'error',

    // Custom
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md
    'jest/no-large-snapshots': 'warn',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
    'jest/no-mocks-import': 'error',

    // Custom
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-restricted-matchers.md
    'jest/no-restricted-matchers': [
      'warn',
      {
        toBeTruthy: 'Consider using a more precise matcher instead.',
        toBeFalsy: 'Consider using a more precise matcher instead.',
        resolves: 'Consider using `expect(await promise)` instead.',
      },
    ],

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md
    'jest/no-standalone-expect': 'error',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md
    'jest/no-test-prefixes': 'error',

    // Custom
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
    'jest/no-test-return-statement': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-truthy-falsy.md
    'jest/no-truthy-falsy': 'off',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-try-expect.md
    'jest/no-try-expect': 'error',

    // Custom
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
    'jest/prefer-called-with': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md
    'jest/prefer-expect-assertions': 'off',

    // Custom
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md
    'jest/prefer-hooks-on-top': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md
    'jest/prefer-inline-snapshots': 'off',

    // Custom
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md
    'jest/prefer-spy-on': 'error',

    // Custom
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
    'jest/prefer-strict-equal': 'error',

    // Taken from plugin:jest/style
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-null.md
    'jest/prefer-to-be-null': 'error',

    // Taken from plugin:jest/style
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-undefined.md
    'jest/prefer-to-be-undefined': 'error',

    // Taken from plugin:jest/style
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md
    'jest/prefer-todo': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-to-throw-message.md
    'jest/require-to-throw-message': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md
    'jest/require-top-level-describe': 'off',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe.md
    'jest/valid-describe': 'error',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md
    'jest/valid-expect': 'error',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': 'error',

    // Taken from plugin:jest/recommended
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md
    'jest/valid-title': 'error',
  },
}
