// TODO Use `./node` when available
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    node: true,
  },
  extends: ['./plugins/eslint'],
  overrides: [
    {
      files: ['**/*.spec.js'],
      env: {
        jest: true,
      },
    },
  ],
}
