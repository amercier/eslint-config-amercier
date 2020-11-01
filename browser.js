module.exports = {
  env: {
    browser: true,
    es6: false,
    node: false,
  },
  parserOptions: {
    ecmaVersion: 5,
  },
  extends: [
    './plugins/eslint-comments',
    './plugins/eslint',
    './plugins/import',
    './plugins/jest-strict',
    './plugins/jsdoc',
    './plugins/jsx-a11y',
    './plugins/promise',
    './plugins/standard',
  ],
}
