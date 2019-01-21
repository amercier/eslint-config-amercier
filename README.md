# eslint-config-amercier

> My personal collection of all-in-one [ESLint shareable configs].

[![Latest Stable Version](https://img.shields.io/npm/v/eslint-config-amercier.svg)](https://www.npmjs.com/package/eslint-config-amercier)
[![Build Status](https://img.shields.io/travis/amercier/eslint-config-amercier/master.svg)](https://travis-ci.org/amercier/eslint-config-amercier)
[![Greenkeeper](https://badges.greenkeeper.io/amercier/eslint-config-amercier.svg)](https://github.com/amercier/eslint-config-amercier/issues?q=label%3Agreenkeeper)

Example of valid code:

```js
// # TODO
//
// - Clone this repository and push it to your own. DO NOT FORK IT, unless you are certain you will
//   only do it once (GitHub doesn't allow multiple forks of the same project on the same account).
//
//       git clone https://github.com/amercier/eslint-config-amercier.git <YOUR_REPOSITORY_NAME>
//       git remote rename origin upstream
//       git remote add origin <YOUR_REPOSITORY_GIT_URL>
//       git push -u origin master
//
// - Enable repository in Travis CI, trigger manual build
// - Install and enable Greenkeeper: https://github.com/settings/installations/51959
// - Replace `amercier/eslint-config-amercier` by your Github repo
// - Replace `eslint-config-amercier` by your NPM package name
// - Replace `amercier` by your NPM package name without "eslint-config-"
// - Replace `Alex Mercier` by your name.
// - Replace `https://amercier.com/` by your website.
// - Replace `pro.alexandre.mercier@gmail.com` by your e-mail address.
// - Replace description in `package.json`.
// - Replace keywords in `package.json` after "verify".
// - Go to https://www.npmjs.com/ and create a new NPM access token.
// - Set NPM_AUTH_TOKEN environment variable the token value in Travis CI project settings.
// - Run `git tag v0.0.0 && git push --tags` to publish version 0.0.0
// - Replace this todo list by actual Javascript example.
// - Mention amercier (optional):
//
//       > **Note:** this ESLint config was created using [eslint-config-amercier](https://github.com/amercier/eslint-config-amercier).
//
// - Edit `index.json`
// - Edit `test/fixture`
// - Set version to `0.1.0` in `package.json`
// - Run `git tag v0.1.0 && git push --tags` to publish version 0.1.0
```

## Installation

Prerequisites:

- [Node.js] 4+, **npm** 3+.
- [ESLint] 4+

> **Important:** please note [ESLint] needs to be installed alongside this module. Latest versions
> is recommended. This is because this modules uses [peer dependencies] to be more flexible. For
> Node 4 and 5, use `eslint@4`.

```sh
npm install --save-dev eslint
npm install --save-dev eslint-config-amercier
```

[![Dependency Status](https://img.shields.io/david/amercier/eslint-config-amercier.svg)](https://david-dm.org/amercier/eslint-config-amercier)
[![devDependency Status](https://img.shields.io/david/dev/amercier/eslint-config-amercier.svg)](https://david-dm.org/amercier/eslint-config-amercier#info=devDependencies)
[![peerDependency Status](https://img.shields.io/david/peer/amercier/eslint-config-amercier.svg)](https://david-dm.org/amercier/eslint-config-amercier#info=devDependencies)

## Usage

Add this to your `.eslintrc.json`:

```json
{
  "extends": ["amercier"]
}
```

## Contributing

Please read [guidelines for contributing].

## License

[![License](https://img.shields.io/npm/l/eslint-config-amercier.svg)][license]

[eslint shareable configs]: https://eslint.org/docs/developer-guide/shareable-configs
[node.js]: https://nodejs.org/
[eslint]: https://eslint.org/
[peer dependencies]: https://nodejs.org/en/blog/npm/peer-dependencies/
[guidelines for contributing]: CONTRIBUTING.md
[license]: LICENSE.md
