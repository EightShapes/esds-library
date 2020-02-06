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

## 2. Add linting...TBD

```
npx @eightshapes/esds-lint-generator
```
