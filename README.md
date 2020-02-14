# EightShapes Design System

### Linting

#### Style Linting
Component styles are authored in 	[scss](https://sass-lang.com). To keep syntax consistent across component files, [stylelint](https://stylelint.io) is used to enforce the coding styleguide.

Stylelint configuration is in `/.stylelintrc.json`.

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
