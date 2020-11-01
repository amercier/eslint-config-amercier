const {
  getPluginRuleNames,
  airbnbConfigRules,
  prettierConfigRules,
  standardConfigRules,
} = require('../test/helpers')
const { rules } = require('./import')

const CUSTOM_RULES = ['import/order']
const IMPORT_PLUGIN_RULE_NAMES = getPluginRuleNames('import')
const AIRBNB_DISABLED_RULES = ['import/prefer-default-export']

it('are alphabetically ordered', () => {
  const compare = (a, b) => (a < b ? -1 : 1)
  expect(Object.keys(rules)).toStrictEqual(Object.keys(rules).sort(compare))
})

describe.each(IMPORT_PLUGIN_RULE_NAMES)('%s rule', (ruleName) => {
  it('is configured', () => {
    expect(rules).toHaveProperty(ruleName)
  })
})

describe.each(Object.entries(rules))('%s definition', (ruleName, rule) => {
  it('matches an existing rule', () => {
    expect(IMPORT_PLUGIN_RULE_NAMES).toContain(ruleName)
  })

  if (CUSTOM_RULES.includes(ruleName)) {
    it('has custom definition', () => {
      expect(rule).not.toStrictEqual('off')
    })
  } else if (prettierConfigRules[ruleName]) {
    it('follows Prettier rule', async () => {
      expect(rule).toStrictEqual(prettierConfigRules[ruleName])
    })
  } else if (
    airbnbConfigRules[ruleName] &&
    !AIRBNB_DISABLED_RULES.includes(ruleName)
  ) {
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
