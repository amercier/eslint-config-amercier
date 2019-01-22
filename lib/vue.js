/**
 * Base config for [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue).
 */
module.exports = {
  extends: ['plugin:vue/recommended'],
  rules: {
    'vue/array-bracket-spacing': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/no-restricted-syntax': 'error',
    'vue/object-curly-spacing': [
      'error',
      'always',
      {
        objectsInObjects: false,
      },
    ],
    'vue/require-direct-export': 'error',
    'vue/script-indent': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
  },
};
