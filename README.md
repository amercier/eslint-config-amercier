# eslint-config-amercier

> My personal collection of all-in-one [ESLint shareable configs].

[![Latest Stable Version](https://img.shields.io/npm/v/eslint-config-amercier.svg)](https://www.npmjs.com/package/eslint-config-amercier)
[![Build Status](https://img.shields.io/travis/amercier/eslint-config-amercier/master.svg)](https://travis-ci.org/amercier/eslint-config-amercier)
[![Greenkeeper](https://badges.greenkeeper.io/amercier/eslint-config-amercier.svg)](https://github.com/amercier/eslint-config-amercier/issues?q=label%3Agreenkeeper)

## All-in-one?

Unlike most [ESLint shareable configs], which declare [peer dependencies], this NPM package declares
all its dependencies as `dependencies` directly, with the exception of [ESLint] itself. This design
choice is intentional, in order to simplify its usage to the minimum (ESLint's `extends` field).

## Installation

Prerequisites:

- [Node.js] 4+, **npm** 3+.
- [ESLint] 4+

> **Important:** please note [ESLint] needs to be installed alongside this module. Latest versions
> is recommended. For Node 4 and 5, use `eslint@4`.

```sh
npm install --save-dev eslint
npm install --save-dev eslint-config-amercier
```

[![Dependency Status](https://img.shields.io/david/amercier/eslint-config-amercier.svg)](https://david-dm.org/amercier/eslint-config-amercier)
[![devDependency Status](https://img.shields.io/david/dev/amercier/eslint-config-amercier.svg)](https://david-dm.org/amercier/eslint-config-amercier#info=devDependencies)
[![peerDependency Status](https://img.shields.io/david/peer/amercier/eslint-config-amercier.svg)](https://david-dm.org/amercier/eslint-config-amercier#info=devDependencies)

## Configs

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
- [eslint-plugin-vue]: `recommended` + more rules
- [eslint-plugin-strict-vue]: all rules
- [eslint-plugin-more]: `recommended`
- [eslint-plugin-unicorn]: `recommended` + exceptions
- [eslint-plugin-jest]: `recommended` + `style` + more rules
- [eslint-plugin-jsdoc-strict]: no exceptions
- [eslint-plugin-eslint-comments]: `recommended`

See [vue-cli config] for more details.

## Contributing

Please read [guidelines for contributing].

## License

[![License](https://img.shields.io/npm/l/eslint-config-amercier.svg)][license]

---

This ESLint config was created using [eslint-config-template](https://github.com/amercier/eslint-config-template)

[eslint shareable configs]: https://eslint.org/docs/developer-guide/shareable-configs
[peer dependencies]: https://nodejs.org/en/blog/npm/peer-dependencies/
[node.js]: https://nodejs.org/
[eslint]: https://eslint.org/
[vue cli]: https://cli.vuejs.org/
[@vue/eslint-config-airbnb]: https://www.npmjs.com/package/@vue/eslint-config-airbnb
[@vue/eslint-config-prettier]: https://www.npmjs.com/package/@vue/eslint-config-prettier
[eslint-plugin-vue]: https://www.npmjs.com/package/eslint-plugin-vue
[eslint-plugin-strict-vue]: https://www.npmjs.com/package/eslint-plugin-strict-vue
[eslint-plugin-more]: https://www.npmjs.com/package/eslint-plugin-more
[eslint-plugin-unicorn]: https://www.npmjs.com/package/eslint-plugin-unicorn
[eslint-plugin-jest]: https://www.npmjs.com/package/eslint-plugin-jest
[eslint-plugin-jsdoc-strict]: https://www.npmjs.com/package/eslint-plugin-jsdoc-strict
[eslint-plugin-eslint-comments]: https://www.npmjs.com/package/eslint-plugin-eslint-comments
[vue-cli config]: vue-cli.js
[guidelines for contributing]: CONTRIBUTING.md
[license]: LICENSE.md
