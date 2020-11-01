module.exports = {
  plugins: ['eslint-comments'],
  rules: {
    // Custom (disabled because too intrusive)
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/disable-enable-pair.md
    'eslint-comments/disable-enable-pair': 'off',

    // Taken from plugin:eslint-comments/recommended
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-aggregating-enable.md
    'eslint-comments/no-aggregating-enable': 'error',

    // Taken from plugin:eslint-comments/recommended
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-duplicate-disable.md
    'eslint-comments/no-duplicate-disable': 'error',

    // Disabled
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-restricted-disable.md
    'eslint-comments/no-restricted-disable': 'off',

    // Taken from plugin:eslint-comments/recommended
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unlimited-disable.md
    'eslint-comments/no-unlimited-disable': 'error',

    // Disabled
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unused-disable.md
    'eslint-comments/no-unused-disable': 'off',

    // Taken from plugin:eslint-comments/recommended
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unused-enable.md
    'eslint-comments/no-unused-enable': 'error',

    // Disabled
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-use.md
    'eslint-comments/no-use': 'off',

    // Disabled
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/require-description.md
    'eslint-comments/require-description': 'off',
  },
}
