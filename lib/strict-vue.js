/**
 * Base config for [eslint-plugin-strict-vue](https://www.npmjs.com/package/eslint-plugin-strict-vue).
 */
module.exports = {
  plugins: ['strict-vue'],
  rules: {
    'strict-vue/require-jsdoc': 'error',
    'strict-vue/no-root-store-calls': 'error',
    'strict-vue/no-root-store-assets': 'error',
  },
};
