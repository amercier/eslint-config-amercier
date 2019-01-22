/**
 * All-in-one config for projects generated with [Vue CLI](https://cli.vuejs.org/).
 */
module.exports = {
  extends: [
    './lib/vue.js',
    './lib/strict-vue.js',
    '@vue/airbnb',
    '@vue/prettier',
    'plugin:more/recommended',
    'plugin:unicorn/recommended',
    './lib/jest.js',
    'jsdoc-strict',
    'plugin:eslint-comments/recommended',
  ],
  plugins: [
    'more', // TODO Remove once https://github.com/WebbyLab/eslint-plugin-more/pull/30 is merged.
  ],
  overrides: [
    {
      files: '**/*.vue',
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
          },
        ],
      },
    },
    {
      files: 'tests/unit/{components,views}/*.{spec,test}.js',
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: 'tests/e2e/specs/**/*.{spec,test}.js',
      rules: {
        'jest/expect-expect': 'off',
      },
    },
  ],
};
