# eslint-config-amercier

> My personal collection of all-in-one [ESLint shareable configs]. Most of them are based on
> [Airbnb Javascript] and [Prettier], with additional plugins and configs.

[![Latest Stable Version](https://img.shields.io/npm/v/eslint-config-amercier.svg)](https://www.npmjs.com/package/eslint-config-amercier)
[![Build Status](https://img.shields.io/travis/amercier/eslint-config-amercier/master.svg)](https://travis-ci.org/amercier/eslint-config-amercier)
[![Greenkeeper](https://badges.greenkeeper.io/amercier/eslint-config-amercier.svg)](https://github.com/amercier/eslint-config-amercier/issues?q=label%3Agreenkeeper)

## All-in-one?

Unlike most [ESLint shareable configs], which declare [peer dependencies], this NPM package declares
all its included ESLint plugins and configs as `dependencies` directly. This design choice is
intentional, in order to simplify its usage to the minimum (ESLint's `extends` field).

## Installation

Prerequisites:

- [Node.js] 8+, **npm** 3+.
- [ESLint] 5+

```sh
npm install --save-dev eslint
npm install --save-dev eslint-config-amercier
```

[![Dependency Status](https://img.shields.io/david/amercier/eslint-config-amercier.svg)](https://david-dm.org/amercier/eslint-config-amercier)
[![devDependency Status](https://img.shields.io/david/dev/amercier/eslint-config-amercier.svg)](https://david-dm.org/amercier/eslint-config-amercier#info=devDependencies)
[![peerDependency Status](https://img.shields.io/david/peer/amercier/eslint-config-amercier.svg)](https://david-dm.org/amercier/eslint-config-amercier#info=devDependencies)

## Base configs

### `amercier/create-react-app`

Config for projects generated with [Create React App].

#### Usage

```json
{
  "root": true,
  "extends": ["amercier/create-react-app"]
}
```

#### Included configs and plugins

- [eslint-config-airbnb]
- [eslint-plugin-react] – `recommended`
- [eslint-plugin-more] – `recommended`, minus `more/no-window`
- [eslint-plugin-jsx-a11y] – `recommended`
- [eslint-plugin-unicorn] – `recommended` + exceptions
- [eslint-plugin-prettier] – `recommended`
- [eslint-plugin-jest] – `recommended` + `style` + more rules
- [eslint-plugin-jsdoc-strict] – no exceptions
- [eslint-plugin-eslint-comments] – `recommended`
- [eslint-config-prettier] – `prettier` + `prettier/react` + `prettier/unicorn`

See [create-react-app config] for more details.

### `amercier/vue-cli`

Config for projects generated with [Vue CLI].

#### Usage

```json
{
  "root": true,
  "extends": ["amercier/vue-cli"]
}
```

#### Included configs and plugins

- [@vue/eslint-config-airbnb]
- [@vue/eslint-config-prettier]
- [eslint-plugin-vue] – `recommended` + more rules
- [eslint-plugin-strict-vue] – all rules
- [eslint-plugin-more] – `recommended`, minus `more/no-window`
- [eslint-plugin-unicorn] – `recommended` + exceptions
- [eslint-plugin-jest] – `recommended` + `style` + more rules
- [eslint-plugin-jsdoc-strict] – no exceptions
- [eslint-plugin-eslint-comments] – `recommended`

See [vue-cli config] for more details.

## Opt-in configs

This configs can be added to any base config. Each of them are independent and can be combined.

### `amercier/with/flowtype`

Add support for [Flow].

#### Usage

Example with `amercier/create-react-app`:

```json
{
  "root": true,
  "extends": ["amercier/create-react-app", "amercier/with-flowtype"]
}
```

#### Included configs and plugins

- [eslint-config-flowtype-strict] - no exceptions
- [eslint-config-prettier] – `prettier/flowtype`

See [with/flowtype config] for more details.

### `amercier/with/redux`

Add support for [Redux].

#### Usage

Example with `amercier/create-react-app`:

```json
{
  "root": true,
  "extends": ["amercier/create-react-app", "amercier/with-redux"]
}
```

#### Included configs and plugins

- [eslint-plugin-react-redux] – `recommended`, minus `react-redux/prefer-separate-component-file` + exceptions

See [with/redux config] for more details.

### `amercier/with/redux-saga`

Add support for [redux-saga].

#### Usage

Example with `amercier/create-react-app` and `amercier/with/redux`:

```json
{
  "root": true,
  "extends": [
    "amercier/create-react-app",
    "amercier/with-redux",
    "amercier/with-redux-saga"
  ]
}
```

#### Included configs and plugins

- [eslint-plugin-redux-saga] – `all` + exceptions

See [with/redux-saga config] for more details.

## Contributing

Please read [guidelines for contributing].

## License

[![License](https://img.shields.io/npm/l/eslint-config-amercier.svg)][license]

---

This ESLint config was created using [eslint-config-template](https://github.com/amercier/eslint-config-template)

[eslint shareable configs]: https://eslint.org/docs/developer-guide/shareable-configs
[airbnb javascript]: https://github.com/airbnb/javascript
[prettier]: https://prettier.io
[peer dependencies]: https://nodejs.org/en/blog/npm/peer-dependencies/
[node.js]: https://nodejs.org/
[eslint]: https://eslint.org/
[create react app]: https://facebook.github.io/create-react-app/
[vue cli]: https://cli.vuejs.org/
[flow]: https://flow.org/
[redux]: https://redux.js.org/
[redux-saga]: https://redux-saga.js.org/
[@vue/eslint-config-airbnb]: https://www.npmjs.com/package/@vue/eslint-config-airbnb
[@vue/eslint-config-prettier]: https://www.npmjs.com/package/@vue/eslint-config-prettier
[eslint-config-airbnb]: https://www.npmjs.com/package/eslint-config-airbnb
[eslint-config-prettier]: https://www.npmjs.com/package/eslint-config-prettier
[eslint-plugin-eslint-comments]: https://www.npmjs.com/package/eslint-plugin-eslint-comments
[eslint-config-flowtype-strict]: https://www.npmjs.com/package/eslint-config-flowtype-strict
[eslint-plugin-jest]: https://www.npmjs.com/package/eslint-plugin-jest
[eslint-plugin-jsdoc-strict]: https://www.npmjs.com/package/eslint-plugin-jsdoc-strict
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[eslint-plugin-more]: https://www.npmjs.com/package/eslint-plugin-more
[eslint-plugin-prettier]: https://www.npmjs.com/package/eslint-plugin-prettier
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-react-redux]: https://www.npmjs.com/package/eslint-plugin-react-redux
[eslint-plugin-redux-saga]: https://www.npmjs.com/package/eslint-plugin-redux-saga
[eslint-plugin-strict-vue]: https://www.npmjs.com/package/eslint-plugin-strict-vue
[eslint-plugin-unicorn]: https://www.npmjs.com/package/eslint-plugin-unicorn
[eslint-plugin-vue]: https://www.npmjs.com/package/eslint-plugin-vue
[create-react-app config]: create-react-app.js
[vue-cli config]: vue-cli.js
[with/flowtype config]: with/flowtype.js
[with/redux config]: with/redux.js
[with/redux-saga config]: with/redux-saga.js
[guidelines for contributing]: CONTRIBUTING.md
[license]: LICENSE.md
