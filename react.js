module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
  },
  settings: {
    'import/parsers': {
      espree: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    './browser',
    './plugins/jsx-a11y',
    './plugins/react-hooks',
    './plugins/react',
  ],
  rules: {
    // Custom (disabled because it's common with libraries such as
    // @testing-library/* to have no explicit assertion)
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
    'jest/expect-expect': 'off',
  },
}
