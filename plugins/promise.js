module.exports = {
  plugins: ['promise'],
  rules: {
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return
    'promise/always-return': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/avoid-new
    'promise/avoid-new': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return
    'promise/catch-or-return': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-callback-in-promise
    'promise/no-callback-in-promise': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-native
    'promise/no-native': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-nesting
    'promise/no-nesting': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics
    'promise/no-new-statics': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-promise-in-callback
    'promise/no-promise-in-callback': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-in-finally
    'promise/no-return-in-finally': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap
    'promise/no-return-wrap': 'off',

    // Taken from eslint-config-standard
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names
    'promise/param-names': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-callbacks
    'promise/prefer-await-to-callbacks': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-then
    'promise/prefer-await-to-then': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params
    'promise/valid-params': 'off',
  },
}
