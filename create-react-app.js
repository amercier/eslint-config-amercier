/**
 * All-in-one config for projects generated with
 * [Create React App](https://facebook.github.io/create-react-app/),
 * with [Redux](https://redux.js.org/) support.
 */
module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    './lib/more.js',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    './lib/jest.js',
    'jsdoc-strict',
    'plugin:eslint-comments/recommended',
    'prettier',
    'prettier/react',
    'prettier/unicorn',
  ],
  parser: 'babel-eslint',
  plugins: [
    'more', // TODO Remove once https://github.com/WebbyLab/eslint-plugin-more/pull/30 is merged.
  ],
  env: {
    browser: true,
    node: false,
  },
  globals: {
    process: true,
  },
  rules: {
    'jsdoc/require-example': 'warn',
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.jsx'],
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
      files: ['src/**/*.spec.jsx', 'src/**/index.jsx'],
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['src/**/*.js'],
      rules: {
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
      },
    },
    {
      files: ['integration/**', 'src/**/*.spec.*', 'src/setupTests.js'],
      env: {
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
};
