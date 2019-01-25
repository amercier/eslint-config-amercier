/**
 * Opt-in config for to add [redux-saga](https://redux-saga.js.org/) support to an all-in-one
 * config.
 */
module.exports = {
  extends: ['plugin:redux-saga/all'],
  plugins: ['redux-saga'],
  overrides: [
    {
      files: ['**/sagas/*.js'],
      rules: {
        'import/no-default-export': false,
        'import/prefer-named-export': false,
      },
    },
  ],
};
