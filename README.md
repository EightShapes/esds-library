#EightShapes Design System

## Repository Structure
The EightShapes Design system is a monorepo containing design system components, tokens, icons and visual assets. Each of these assets is published as an independently versioned node package. 

The dependencies between these assets are managed using [lerna](https://lerna.js.org). 

### Dependency Tree
To view a dependency tree of the repository, in the _root_ of the repo run:

```
npm run dependency-tree
```

### Linting

#### Style Linting
Component styles are authored in 	[scss](https://sass-lang.com). To keep syntax consistent across component files, [stylelint](https://stylelint.io) is used to enforce the coding styleguide.

[Stylelint configuration](./.stylelintrc.json)

Stylelint is paired with [prettier](https://prettier.io) to automatically correct code style. In supported text editors this can be performed each time a file is edited.

##### Pre-commit hook
Stylelint and prettier are called automatically on each `git commit` using [husky](https://github.com/typicode/husky#readme). The pre-commit hook will attempt to correct any style discrepancies automatically. If it cannot, an error will be shown at the command line describing any linting failures and the commit will be aborted.

---
#### Repo Dependency Rationale
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
