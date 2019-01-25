/**
 * All-in-one config for projects generated with [Vue CLI](https://cli.vuejs.org/).
 */
module.exports = {
  parserOptions: {
    parser: require.resolve('babel-eslint'),
  },
  extends: [
    './lib/vue.js',
    './lib/strict-vue.js',
    '@vue/airbnb',
    '@vue/prettier',
    './lib/more.js',
    'plugin:unicorn/recommended',
    './lib/jest.js',
    'jsdoc-strict',
    'plugin:eslint-comments/recommended',
  ],
  env: {
    browser: true,
    node: false,
  },
  globals: {
    process: true,
  },
  overrides: [
    {
      files: ['{,*.}config.js', '**/.eslintrc.js', 'tests/e2e/plugins/index.js'],
      env: {
        browser: false,
        node: true,
      },
    },
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
