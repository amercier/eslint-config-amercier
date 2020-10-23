const {
  eslintBaseRuleNames,
  airbnbConfigRules,
  prettierConfigRules,
  standardConfigRules,
} = require('../test/helpers')
const { rules } = require('./eslint')

it('are alphabetically ordered', () => {
  const compare = (a, b) => (a < b ? -1 : 1)
  expect(Object.keys(rules)).toStrictEqual(Object.keys(rules).sort(compare))
})

describe.each(eslintBaseRuleNames)('%s rule', (ruleName) => {
  it('is configured', () => {
    expect(rules).toHaveProperty(ruleName)
  })
})

const AIRBNB_ENABLED_RULES = [
  'default-case-last',
  'default-param-last',
  'grouped-accessor-pairs',
  'no-constructor-return',
  'no-dupe-else-if',
  'no-import-assign',
  'no-loss-of-precision',
  'no-promise-executor-return',
  'no-restricted-exports',
  'no-setter-return',
  'no-unreachable-loop',
  'no-useless-backreference',
  'prefer-exponentiation-operator',
]

const enabledRule = (rule, level = 'error') =>
  Array.isArray(rule) ? [level, ...rule.slice(1)] : level

describe.each(Object.entries(rules))('%s definition', (ruleName, rule) => {
  it('matches an existing rule', () => {
    expect(eslintBaseRuleNames).toContain(ruleName)
  })

  if (prettierConfigRules[ruleName]) {
    it('follows Prettier rule', async () => {
      expect(rule).toStrictEqual(prettierConfigRules[ruleName])
    })
  } else if (AIRBNB_ENABLED_RULES.includes(ruleName)) {
    it('follows Airbnb rule (enabled)', async () => {
      expect(rule).toStrictEqual(enabledRule(airbnbConfigRules[ruleName]))
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
