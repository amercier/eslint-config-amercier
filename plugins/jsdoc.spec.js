const { getConfigRules, getPluginRuleNames } = require('../test/helpers')
const { rules } = require('./jsdoc')

const JEST_PLUGIN_RULE_NAMES = getPluginRuleNames('jsdoc')

const jsdocRecommendedConfigRules = getConfigRules(['plugin:jsdoc/recommended'])

const CUSTOM_RULES = ['jsdoc/require-throws']

it('are alphabetically ordered', () => {
  const compare = (a, b) => (a < b ? -1 : 1)
  expect(Object.keys(rules)).toStrictEqual(Object.keys(rules).sort(compare))
})

describe.each(JEST_PLUGIN_RULE_NAMES)('%s rule', (ruleName) => {
  it('is configured', () => {
    expect(rules).toHaveProperty(ruleName)
  })
})

describe.each(Object.entries(rules))('%s definition', (ruleName, rule) => {
  it('matches an existing rule', () => {
    expect(JEST_PLUGIN_RULE_NAMES).toContain(ruleName)
  })

  if (CUSTOM_RULES.includes(ruleName)) {
    it('has custom definition', () => {
      expect(rule).not.toStrictEqual('off')
    })
  } else if (jsdocRecommendedConfigRules[ruleName]) {
    it('follows plugin:jsdoc/recommended rule', async () => {
      expect(rule).toStrictEqual(jsdocRecommendedConfigRules[ruleName])
    })
  } else {
    it('is OFF', async () => {
      expect(rule).toStrictEqual('off')
    })
  }
})
