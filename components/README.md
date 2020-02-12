# EightShapes Design System Components

## Dev Environment

### Linting
#### Javascript Linting
Component styles are authored in 	Javascript (ES6). [ESLint](https://eslint.org) is used to enforce consistent syntax across components.

The ruleset for each component is managed in the `eslintConfig` key of each `components/**/package.json`. Component level rulesets enable future coding style changes to be applied on a component-by-component basis.

The ruleset is based on [@open-wc/eslint-config](https://github.com/open-wc/open-wc/blob/master/packages/eslint-config/index.js), an open-source lint config tailored for web component authoring.

ESLint is paired with [prettier](https://prettier.io) to automatically correct code style. In supported text editors this can be performed each time a file is edited.

##### Pre-commit hook
ESLint and prettier are called automatically on each `git commit` using [husky](https://github.com/typicode/husky#readme). The pre-commit hook will attempt to correct any lint discrepancies automatically. If it cannot, an error will be shown at the command line describing any linting failures and the commit will be aborted.

#### Style Linting
Component styles are authored in 	[scss](https://sass-lang.com). [stylelint](https://stylelint.io) is used to enforce consistent syntax across components.

The ruleset for each component is managed in `components/**/.stylelintrc.json`. Component level rulesets enable future coding style changes to be applied on a component-by-component basis.

Stylelint is paired with [prettier](https://prettier.io) to automatically correct code style. In supported text editors this can be performed each time a file is edited.

##### Pre-commit hook
Stylelint and prettier are called automatically on each `git commit` using [husky](https://github.com/typicode/husky#readme). The pre-commit hook will attempt to correct any lint discrepancies automatically. If it cannot, an error will be shown at the command line describing any linting failures and the commit will be aborted.

---
#### Repo Dependency Rationale
##### [@open-wc/eslint-config](https://github.com/open-wc/open-wc/blob/master/packages/eslint-config/index.js)
Linting ruleset for Web Component Javascript

##### [ESLint](https://eslint.org)
Enforces `.js` coding styleguide

##### [husky](https://github.com/typicode/husky#readme)
Binds tasks to git hooks via `package.json`

##### [prettier](https://prettier.io)
Automatically fix lint errors

##### [stylelint](https://stylelint.io)
Enforces `.scss` coding styleguide
