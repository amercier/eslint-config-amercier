module.exports = {
  plugins: ['import'],

  settings: {
    'import/extensions': ['.cjs', '.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.cjs', '.js', '.jsx', '.mjs', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
    'import/default': 'off',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
    'import/dynamic-import-chunkname': [
      'off',
      { importFunctions: [], webpackChunknameFormat: '[0-9a-zA-Z-_/.]+' },
    ],

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
    'import/exports-last': 'off',

    // Custom (taken from eslint-config-airbnb-base)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        cjs: 'never',
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
    'import/group-exports': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
    'import/imports-first': 'off',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    'import/max-dependencies': ['off', { max: 10 }],

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
    'import/named': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/namespace': 'off',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-amd': 'error',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': [
      'off',
      {
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowArray: false,
        allowArrowFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    'import/no-commonjs': 'off',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { ignoreExternal: false, maxDepth: Infinity }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    'import/no-default-export': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': 'off',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',

    // Custom
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**',
          'tests/**',
          'spec/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.*',
          'test-*.*',
          '**/*{.,_}{test,spec}.*',
          '**/jest.config.*',
          '**/jest.setup.*',
          '**/vue.config.*',
          '**/webpack.config.*',
          '**/webpack.config.*.*',
          '**/rollup.config.*',
          '**/rollup.config.*.*',
          '**/gulpfile.*',
          '**/gulpfile.*.*',
          '**/Gruntfile{,.*}',
          '**/protractor.conf.*',
          '**/protractor.conf.*.*',
          '**/karma.conf.*',
        ],
        optionalDependencies: false,
      },
    ],

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    'import/no-internal-modules': ['off', { allow: [] }],

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'error',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
    'import/no-named-export': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-namespace': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': 'off',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'off',

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { caseSensitive: true, commonjs: true }],

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
    'import/no-unused-modules': [
      'off',
      { ignoreExports: [], missingExports: true, unusedExports: true },
    ],

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // Taken from eslint-config-airbnb-base
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',

    // Custom
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'ignore',
      },
    ],

    // Custom: eslint-config-airbnb-base defined it, but sometimes it can be
    // useful to create helper file (with named exports), even though having
    // only one helper at the beginning.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
    'import/unambiguous': 'off',
  },
}
