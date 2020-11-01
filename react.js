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
}
