const confusingBrowserGlobals = require('confusing-browser-globals')
const compare = require('semver-compare')
const { pickBy } = require('lodash')

const { ESLint } = require('eslint')

const eslintVersion = process.env.ESLINT_VERSION || ESLint.version

const fromVersion = (version, value) =>
  compare(eslintVersion, version) >= 0 ? value : null

module.exports = {
  rules: pickBy({
    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/brace-style
    'brace-style': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/callback-return
    'callback-return': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/camelcase
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate',
        ],
      },
    ],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/comma-style
    'comma-style': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/complexity
    complexity: ['off', 11],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/curly
    curly: 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/default-case
    'default-case': ['error', { commentPattern: '^no default$' }],

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': fromVersion('7.0.0', 'error'),

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/dot-location
    'dot-location': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': ['error', { allowKeywords: true }],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/eol-last
    'eol-last': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/func-names
    'func-names': 'warn',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/func-style
    'func-style': ['off', 'expression'],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // Taken from eslint-config-aibnb
    // https://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/id-denylist
    'id-denylist': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/indent
    indent: 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/indent-legacy
    'indent-legacy': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': [
      'off',
      { position: 'above', ignorePattern: '', applyDefaultPatterns: true },
    ],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': ['error', { before: 'always', after: 'always' }],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['error', 1],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/max-depth
    'max-depth': ['off', 4],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/max-len
    'max-len': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'off',
      { max: 300, skipBlankLines: true, skipComments: true },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': [
      'off',
      { max: 50, skipBlankLines: true, skipComments: true, IIFEs: true },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/max-params
    'max-params': ['off', 3],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/max-statements
    'max-statements': ['off', 10],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['off', { max: 1 }],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ['off', 'starred-block'],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/new-cap
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
      },
    ],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/newline-after-var
    'newline-after-var': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-catch-shadow
    'no-catch-shadow': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'warn',

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [
      'error',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [
      'off',
      { boolean: false, number: true, string: true, allow: [] },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-labels
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': fromVersion('7.1.0', 'error'),

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': ['off', false],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-native-reassign
    'no-native-reassign': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-negated-in-lhs
    'no-negated-in-lhs': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-new-require
    'no-new-require': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
        ],
      },
    ],

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-process-env
    'no-process-env': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 'off',

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/no-promise-executor-return
    'no-promise-executor-return': fromVersion('7.3.0', 'error'),

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/no-restricted-exports
    'no-restricted-exports': fromVersion('7.0.0', [
      'error',
      { restrictedNamedExports: ['default', 'then'] },
    ]),

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(
      confusingBrowserGlobals,
    ),

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': ['off', { paths: [], patterns: [] }],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'always'],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': ['error', { props: true }],

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-spaced-func
    'no-spaced-func': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-sync
    'no-sync': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-tabs
    'no-tabs': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': fromVersion('7.3.0', 'error'),

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false,
      },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      { classes: true, functions: true, variables: true },
    ],

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/no-useless-backreference
    'no-useless-backreference': fromVersion('7.0.0', 'error'),

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [
      'error',
      { ignoreDestructuring: false, ignoreExport: false, ignoreImport: false },
    ],

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': [
      'off',
      { terms: ['todo', 'fixme', 'xxx'], location: 'start' },
    ],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true, }], // 'operator-assignment
    'object-shorthand': [
      'error',
      'always',
      { ignoreConstructors: false, avoidQuotes: true },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': 'off',

    // Taken from eslint-config-airbnb
    'operator-assignment': ['error', 'always'],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      { destructuring: 'any', ignoreReadBeforeAssign: true },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: true, object: false },
      },
      { enforceForRenamedProperties: false },
    ],

    // Taken from eslint-config-airbnb (and enabled)
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/quote-props
    'quote-props': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/quotes
    quotes: 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/radix
    radix: 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/semi
    semi: 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/semi-style
    'semi-style': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'],
          balanced: true,
        },
      },
    ],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/strict
    strict: ['error', 'never'],

    // Disabled for Prettier
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // Taken from eslint-config-standard
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off',

    // Disabled for Prettier
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': 'off',

    // Taken from eslint-config-airbnb
    // https://eslint.org/docs/rules/yoda
    yoda: 'error',
  }),
}
