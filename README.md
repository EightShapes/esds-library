# EightShapes Design System

This repository houses multiple packages comprising the EightShapes Design System.

## esds-tokens
EightShapes Design System Tokens are key/value pairs representing visual style properties. [Tokens README](./esds-tokens/README.md)

## esds-icons
EightShapes Design System Icons are svg assets used throughout design system components. [Icons README](./esds-icons/README.md)

## Components
EightShapes Design System Components are located in `./components/**`

Components are versioned independently and distributed as individual node packages.

### Running the component dev environment
Each 


### Linting

#### Javascript Linting
Component styles are authored in 	Javascript (ES6). [ESLint](https://eslint.org) is used to enforce consistent syntax across components.

[ESLint Config](./package.json#L32)

Lint rules extend [@open-wc/eslint-config](https://github.com/open-wc/open-wc/blob/master/packages/eslint-config/index.js), an open-source lint config tailored for web component authoring.

ESLint is paired with [prettier](https://prettier.io) to automatically correct code style. In supported text editors this can be performed each time a file is edited.

The prettier config uses [@open-wc/prettier-config](https://github.com/open-wc/open-wc/blob/master/packages/prettier-config/prettier.config.js).

##### Pre-commit hook
ESLint and prettier are called automatically on each `git commit` using [husky](https://github.com/typicode/husky#readme). The pre-commit hook will attempt to correct any lint discrepancies automatically. If it cannot, an error will be shown at the command line describing any linting failures and the commit will be aborted.

#### Style Linting
Component styles are authored in 	[scss](https://sass-lang.com). To keep syntax consistent across component files, [stylelint](https://stylelint.io) is used to enforce the coding styleguide.

[Stylelint configuration](./.stylelintrc.json)

Stylelint is paired with [prettier](https://prettier.io) to automatically correct code style. In supported text editors this can be performed each time a file is edited.

##### Pre-commit hook
Stylelint and prettier are called automatically on each `git commit` using [husky](https://github.com/typicode/husky#readme). The pre-commit hook will attempt to correct any style discrepancies automatically. If it cannot, an error will be shown at the command line describing any linting failures and the commit will be aborted.

---
#### Repo Dependency Rationale
##### [@open-wc/eslint-config](https://github.com/open-wc/open-wc/blob/master/packages/eslint-config/index.js)
Linting ruleset for Web Component Javascript

##### [@open-wc/prettier-config](https://github.com/open-wc/open-wc/blob/master/packages/prettier-config/prettier.config.js)
Configuration to integrate open-wc's linting ruleset with prettier

##### [eslint](https://eslint.org)
Enforces `.js` coding styleguide

##### [husky](https://github.com/typicode/husky#readme)
Binds tasks to git hooks via `package.json`

##### [prettier](https://prettier.io)
Automatically fix lint errors

##### [stylelint](https://stylelint.io)
Enforces `.scss` coding styleguide

##### [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)
Turns off all rules that are unnecessary or might conflict with prettier.

##### [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines)
A stylelint config based on [https://sass-guidelin.es/](https://sass-guidelin.es/)

##### [stylelint-prettier](https://github.com/prettier/stylelint-prettier)
Stylelint plugin for Prettier formatting
