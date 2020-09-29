module.exports = {
  plugins: ['node'],
  rules: {
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return
    'node/callback-return': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style
    'node/exports-style': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import
    'node/file-extension-in-import': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require
    'node/global-require': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/handle-callback-err
    'node/handle-callback-err': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-callback-literal
    'node/no-callback-literal': 'off',

    // Taken from eslint-config-standard
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api
    'node/no-deprecated-api': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign
    'node/no-exports-assign': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import
    'node/no-extraneous-import': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require
    'node/no-extraneous-require': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-hide-core-modules
    'node/no-hide-core-modules': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import
    'node/no-missing-import': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require
    'node/no-missing-require': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-mixed-requires
    'node/no-mixed-requires': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require
    'node/no-new-require': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat
    'node/no-path-concat': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-env
    'node/no-process-env': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit
    'node/no-process-exit': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-import
    'node/no-restricted-import': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require
    'node/no-restricted-require': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync
    'node/no-sync': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin
    'node/no-unpublished-bin': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import
    'node/no-unpublished-import': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require
    'node/no-unpublished-require': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features
    'node/no-unsupported-features': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins
    'node/no-unsupported-features/es-builtins': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax
    'node/no-unsupported-features/es-syntax': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins
    'node/no-unsupported-features/node-builtins': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer
    'node/prefer-global/buffer': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console
    'node/prefer-global/console': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process
    'node/prefer-global/process': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder
    'node/prefer-global/text-decoder': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder
    'node/prefer-global/text-encoder': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url
    'node/prefer-global/url': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params
    'node/prefer-global/url-search-params': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns
    'node/prefer-promises/dns': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs
    'node/prefer-promises/fs': 'off',

    // Taken from eslint-config-standard
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw
    'node/process-exit-as-throw': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang
    'node/shebang': 'off',
  },
}
