const react = require('../react')

module.exports = {
  overrides: [
    {
      files: '*.tsx',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ...react.parserOptions,
      },
      plugins: ['@typescript-eslint'],
    },
  ],
}
