const {
  getPluginRuleNames,
  getConfigRules,
  airbnbConfigRules,
  prettierConfigRules,
  standardConfigRules,
} = require('../test/helpers')
const { rules } = require('./eslint-comments')

const ESLINT_COMMENTS_PLUGIN_RULE_NAMES = getPluginRuleNames('eslint-comments')

const reactHooksRecommendedConfigRules = getConfigRules([
  'plugin:eslint-comments/recommended',
])

it('are alphabetically ordered', () => {
  const compare = (a, b) => (a < b ? -1 : 1)
  expect(Object.keys(rules)).toStrictEqual(Object.keys(rules).sort(compare))
})

describe.each(ESLINT_COMMENTS_PLUGIN_RULE_NAMES)('%s rule', (ruleName) => {
  it('is configured', () => {
    expect(rules).toHaveProperty(ruleName)
  })
})

describe.each(Object.entries(rules))('%s definition', (ruleName, rule) => {
  it('matches an existing rule', () => {
    expect(ESLINT_COMMENTS_PLUGIN_RULE_NAMES).toContain(ruleName)
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
  } else if (reactHooksRecommendedConfigRules[ruleName]) {
    it('follows eslint-comments:recommended rule', async () => {
      expect(rule).toStrictEqual(reactHooksRecommendedConfigRules[ruleName])
    })
  } else {
    it('is OFF', async () => {
      expect(rule).toStrictEqual('off')
    })
  }
})
