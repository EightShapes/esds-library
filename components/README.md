# Creating a new component package

## 1. Set up the component build pipeline
Be sure you're in the `/components` directory of the repo: `cd components`, then run:

```
npx @eightshapes/esds-lit-element-project-generator
```

1. Provide the name of your component (without a namespace) at the first prompt: icon, button, card, list-group
2. Provide the `esds` namespace at the second prompt.
3. In the newly generated `package.json` for your component, add the `@eightshapes` scope to the package name. Example:

```js
{
  "name": "esds-button",
  "version": "0.1.0",
  ...
```

Becomes:

```js
{
  "name": "@eightshapes/esds-button",
  "version": "0.1.0",
  ...
```

👆 This creates a new component starter package that:

* Provides lit-element as a base web component
* Configures rollup to bundle your component source into three outputs:
  * [name]-web-components.js, es6 consumable w/customElements.define call built-in
  * [name].js, es6 consumable w/out customElements.define call
  * [name]-legacy.js, es5 consumable suitable for use in IE11
* Wires up browsersync and creates a sandbox for building the component
* Creates a default scss file and a sass compilation pipeline that injects CSS into the web-component and generates a standalone CSS file

## 2. Add linting

### Install eslint and prettier
_Within_ the newly created package run:

```bash
npm init @open-wc
```

Choose "Upgrade and existing package"
Select "Linting" (arrow key and then spacebar to select, enter to proceed)
Answer yes to modifying/overwriting files and installing dependencies via NPM

After the @open-wc linting scaffold has run, make a few modifications to `package.json`

Add the following to the eslintConfig key starting at `"plugins"`

```js
"eslintConfig": {
  "extends": [
    "@open-wc/eslint-config",
    "eslint-config-prettier"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ]
  }
},
```

### Test eslint/prettier install
Run `npm run lint` and verify there are no linting errors in the project.

### Install stylelint
TBD