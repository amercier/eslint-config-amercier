const {
  getPluginRuleNames,
  airbnbConfigRules,
  prettierConfigRules,
  standardConfigRules,
} = require('../test/helpers')
const { rules } = require('./standard')

const STANDARD_PLUGIN_RULE_NAMES = getPluginRuleNames('standard')

it('are alphabetically ordered', () => {
  const compare = (a, b) => (a < b ? -1 : 1)
  expect(Object.keys(rules)).toStrictEqual(Object.keys(rules).sort(compare))
})

describe.each(STANDARD_PLUGIN_RULE_NAMES)('%s rule', (ruleName) => {
  it('is configured', () => {
    expect(rules).toHaveProperty(ruleName)
  })
})

describe.each(Object.entries(rules))('%s definition', (ruleName, rule) => {
  it('matches an existing rule', () => {
    expect(STANDARD_PLUGIN_RULE_NAMES).toContain(ruleName)
  })

  if (prettierConfigRules[ruleName]) {
    it('follows Prettier rule', async () => {
      expect(rule).toStrictEqual(prettierConfigRules[ruleName])
    })
  } else if (airbnbConfigRules[ruleName]) {
    it('follows Airbnb rule', async () => {
      expect(rule).toStrictEqual(airbnbConfigRules[ruleName])
    })
  } else if (standardConfigRules[ruleName]) {
    it('follows Standard rule', async () => {
      expect(rule).toStrictEqual(standardConfigRules[ruleName])
    })
  } else {
    it('is OFF', async () => {
      expect(rule).toStrictEqual('off')
    })
  }
})
