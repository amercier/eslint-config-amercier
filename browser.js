module.exports = {
  parserOptions: {
    ecmaVersion: 5,
  },
  env: {
    browser: true,
    node: false,
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
