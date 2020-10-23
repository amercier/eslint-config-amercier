module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: false,
    node: true,
  },
  extends: [
    './plugins/eslint',
    './plugins/eslint-comments',
    './plugins/import',
    './plugins/jest-strict',
    './plugins/jsdoc',
    './plugins/node',
    './plugins/promise',
    './plugins/standard',
  ],
}
