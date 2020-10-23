module.exports = {
  plugins: ['jsdoc'],

  rules: {
    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-access
    'jsdoc/check-access': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment
    'jsdoc/check-alignment': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples
    'jsdoc/check-examples': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation
    'jsdoc/check-indentation': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-line-alignment
    'jsdoc/check-line-alignment': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names
    'jsdoc/check-param-names': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-property-names
    'jsdoc/check-property-names': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-syntax
    'jsdoc/check-syntax': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names
    'jsdoc/check-tag-names': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types
    'jsdoc/check-types': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values
    'jsdoc/check-values': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags
    'jsdoc/empty-tags': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-implements-on-classes
    'jsdoc/implements-on-classes': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-description
    'jsdoc/match-description': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description
    'jsdoc/newline-after-description': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-bad-blocks
    'jsdoc/no-bad-blocks': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-defaults
    'jsdoc/no-defaults': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-types
    'jsdoc/no-types': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types
    'jsdoc/no-undefined-types': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description
    'jsdoc/require-description': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence
    'jsdoc/require-description-complete-sentence': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example
    'jsdoc/require-example': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-file-overview
    'jsdoc/require-file-overview': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description
    'jsdoc/require-hyphen-before-param-description': 'off',

    // Custom (overrides plugin:jsdoc/recommended)
    // This rule was disabled in order to prevent this config to get in the way
    // of developer experience - as some function are eiter self-documented, or
    // temporary, not part of a public API, etc. Philosophy of this config is:
    // "JSDoc is not mandatory, but if present, must be done correctly".
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc
    'jsdoc/require-jsdoc': 'off',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param
    'jsdoc/require-param': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description
    'jsdoc/require-param-description': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-name
    'jsdoc/require-param-name': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type
    'jsdoc/require-param-type': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property
    'jsdoc/require-property': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-description
    'jsdoc/require-property-description': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-name
    'jsdoc/require-property-name': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-type
    'jsdoc/require-property-type': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns
    'jsdoc/require-returns': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check
    'jsdoc/require-returns-check': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-description
    'jsdoc/require-returns-description': 'warn',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type
    'jsdoc/require-returns-type': 'warn',

    // Custom
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-throws
    'jsdoc/require-throws': 'error',

    // Taken from plugin:jsdoc/recommended
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types
    'jsdoc/valid-types': 'warn',
  },
}
