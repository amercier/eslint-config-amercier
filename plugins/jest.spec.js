const {
  getConfigRules,
  getPluginRuleNames,
  configs,
} = require('../test/helpers')
const { rules } = require('./jest')

const FILENAME = 'index.test.js'
const JEST_PLUGIN_RULE_NAMES = getPluginRuleNames('jest')

const airbnbConfigRules = getConfigRules(configs.airbnb, FILENAME)
const prettierConfigRules = getConfigRules(configs.prettier, FILENAME)
const standardConfigRules = getConfigRules(configs.standard, FILENAME)
const jestRecommendedConfigRules = getConfigRules(
  ['plugin:jest/recommended'],
  FILENAME,
)
const jestStyleConfigRules = getConfigRules(['plugin:jest/style'], FILENAME)

const CUSTOM_RULES = [
  'jest/consistent-test-it',
  'jest/lowercase-name',
  'jest/no-if',
  'jest/no-large-snapshots',
  'jest/no-restricted-matchers',
  'jest/no-test-return-statement',
  'jest/prefer-called-with',
  'jest/prefer-hooks-on-top',
  'jest/prefer-spy-on',
  'jest/prefer-strict-equal',
]

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
  } else if (jestRecommendedConfigRules[ruleName]) {
    it('follows plugin:jest/recommended rule', async () => {
      expect(rule).toStrictEqual(jestRecommendedConfigRules[ruleName])
    })
  } else if (jestStyleConfigRules[ruleName]) {
    it('follows plugin:jest/style rule', async () => {
      expect(rule).toStrictEqual(jestStyleConfigRules[ruleName])
    })
  } else if (CUSTOM_RULES.includes(ruleName)) {
    it('has custom definition', () => {
      expect(rule).not.toStrictEqual('off')
    })
  } else {
    it('is OFF', async () => {
      expect(rule).toStrictEqual('off')
    })
  }
})
