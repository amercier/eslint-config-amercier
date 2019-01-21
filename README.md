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

This package is work-in-progress, no config has been implemented yet.

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
[guidelines for contributing]: CONTRIBUTING.md
[license]: LICENSE.md
