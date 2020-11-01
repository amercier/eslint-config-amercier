module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
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
