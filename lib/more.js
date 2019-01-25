/**
 * Base config for [eslint-plugin-more](https://www.npmjs.com/package/eslint-plugin-more).
 */
module.exports = {
  plugins: [
    'more', // TODO Remove once https://github.com/WebbyLab/eslint-plugin-more/pull/30 is merged.
  ],
  extends: ['plugin:more/recommended'],
  rules: {
    'more/no-window': 'off',
  },
};
