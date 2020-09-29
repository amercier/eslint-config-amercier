const { CascadingConfigArrayFactory } = require('@eslint/eslintrc').Legacy
const { mapValues } = require('lodash')

function normalizeRule(rule) {
  if (Array.isArray(rule) && rule.length === 1) {
    return normalizeRule(rule[0])
  }
  if (rule === 0) {
    return 'off'
  }
  return rule
}

function getPluginRuleNames(pluginName) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const { rules } = require(`eslint-plugin-${pluginName}`)
  return Object.keys(rules).map((ruleName) => `${pluginName}/${ruleName}`)
}

function getConfigRules(...configNames) {
  const baseConfig = { extends: configNames }
  const configArrayFactory = new CascadingConfigArrayFactory({
    baseConfig,
  })
    .getConfigArrayForFile(`${__dirname}/../index.js`)
    .extractConfig()

  return mapValues(configArrayFactory.rules, normalizeRule)
}

module.exports = {
  getPluginRuleNames,
  eslintBaseRuleNames:
    // eslint-disable-next-line global-require
    [...require('eslint/lib/rules').keys()],
  airbnbConfigRules: getConfigRules('airbnb'),
  prettierConfigRules: getConfigRules(
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
    'prettier/unicorn',
    'prettier/vue',
  ),
  standardConfigRules: getConfigRules('standard', 'standard-react'),
}
