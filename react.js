module.exports = {
  parser: '@babel/eslint-parser',
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
}
