# EightShapes Design System Components


## Running component dev environments
**IMPORTANT** Follow the [lerna installation instructions](../documentation/lerna.md) before running any commands in this repository.

The dev environment start command is the same for all components:

```
cd components/[component-name]
npm start
```

This will launch a browser preview that hot reloads when  source `.js` and `.scss` files are modified.

#### IE11 Compatibility
For performance reasons, the default dev environment does not build assets for IE11. To start an IE 11 compatible dev environment run:

```
cd components/[component-name]
npm start:legacy
```
