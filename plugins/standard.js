module.exports = {
  plugins: ['standard'],
  rules: {
    // https://github.com/standard/eslint-plugin-standard/blob/master/rules/array-bracket-even-spacing.js
    'standard/array-bracket-even-spacing': 'off',

    // https://github.com/standard/eslint-plugin-standard/blob/master/rules/computed-property-even-spacing.js
    'standard/computed-property-even-spacing': 'off',

    // Taken from eslint-config-standard
    // https://github.com/standard/eslint-plugin-standard/blob/master/rules/no-callback-literal.js
    'standard/no-callback-literal': 'error',

    // https://github.com/standard/eslint-plugin-standard/blob/master/rules/object-curly-even-spacing.js
    'standard/object-curly-even-spacing': 'off',
  },
}
