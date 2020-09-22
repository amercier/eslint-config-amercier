const { readdirSync } = require('fs')
const { dirname } = require('path')
const airbnb = require('eslint-config-airbnb-base')
const prettier = require('eslint-config-prettier')
const standard = require('eslint-config-standard')
const eslint = require('./eslint')
const { mapValues } = require('lodash')

const { CascadingConfigArrayFactory } = require('@eslint/eslintrc').Legacy

function normalizeRule(rule) {
  if (Array.isArray(rule) && rule.length === 1) {
    return normalizeRule(rule[0])
  }
  if (rule === 0) {
    return 'off'
  }
  return rule
}

const [airbnbRules, prettierRules, standardRules] = [
  airbnb,
  prettier,
  standard,
].map((baseConfig) => {
  const { rules } = new CascadingConfigArrayFactory({ baseConfig })
    .getConfigArrayForFile('index.js')
    .extractConfig()

  return mapValues(rules, normalizeRule)
})

const ESLINT_RULE_NAMES = readdirSync(
  dirname(require.resolve('eslint/lib/rules')),
)
  .filter((name) => !['utils', 'index.js'].includes(name))
  .map((name) => name.replace(/\.js$/, ''))

it('are alphabetically ordered', () => {
  const compare = (a, b) => (a < b ? -1 : 1)
  expect(Object.keys(eslint.rules)).toStrictEqual(
    Object.keys(eslint.rules).sort(compare),
  )
})

describe.each(ESLINT_RULE_NAMES)('%s rule', (ruleName) => {
  it('is configured', () => {
    expect(eslint.rules).toHaveProperty(ruleName)
  })
})

describe.each(Object.entries(eslint.rules))(
  '%s definition',
  (ruleName, rule) => {
    it('matches an existing rule', () => {
      expect(ESLINT_RULE_NAMES).toContain(ruleName)
    })

    if (prettierRules[ruleName]) {
      it('follows Prettier rule', async () => {
        expect(rule).toStrictEqual(prettierRules[ruleName])
      })
    } else if (standardRules[ruleName]) {
      it('follows Standard rule', async () => {
        expect(rule).toStrictEqual(standardRules[ruleName])
      })
    } else if (airbnbRules[ruleName]) {
      const ENABLED_RULES = [
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

      if (ENABLED_RULES.includes(ruleName)) {
        it('follows Airbnb rule but is enabled', async () => {
          expect(rule).not.toStrictEqual(airbnbRules[ruleName])
          expect(rule).toStrictEqual(
            Array.isArray(airbnbRules[ruleName])
              ? ['error', ...airbnbRules[ruleName].slice(1)]
              : 'error',
          )
        })
      } else {
        it('follows Airbnb rule', async () => {
          expect(rule).toStrictEqual(airbnbRules[ruleName])
        })
      }
    }
  },
)
