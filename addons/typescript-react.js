const react = require('../react')
const typescript = require('./typescript')

module.exports = {
  ...typescript,
  parserOptions: {
    ...typescript.parserOptions,
    ...react.parserOptions,
  },
}
