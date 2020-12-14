module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:import/typescript'],

  rules: {
    // Superseeded by @typescript-eslint/no-unused-vars
    'no-unused-vars': 'off',

    // Inspired from eslint-config-airbnb
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
  },
}
