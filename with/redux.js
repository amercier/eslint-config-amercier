/**
 * Opt-in config for to add [Redux](https://redux.js.org/) support to an all-in-one config.
 */
module.exports = {
  extends: ['plugin:react-redux/recommended'],
  plugins: ['react-redux'],
  rules: {
    'react-redux/prefer-separate-component-file': 'off',
  },
  overrides: [
    {
      files: ['**/reducers/*.js', '**/store/*.js'],
      rules: {
        'import/no-default-export': false,
        'import/prefer-default-export': 'error',
      },
    },
  ],
};
