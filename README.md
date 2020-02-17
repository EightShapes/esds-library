#EightShapes Design System

## Repository Structure
The EightShapes Design system is a monorepo containing design system components, tokens, icons and visual assets. Each of these assets is published as an independently versioned node package.

The dependencies between these assets are managed using [lerna](https://lerna.js.org).

**IMPORTANT** Follow the [lerna installation instructions](./documentation/lerna.md) before running any commands in this repository.

### Dependency Tree
To view a dependency tree of the repository, in the _root_ of the repo run:

```
npm run dependency-tree
```

## Packages
This repository houses multiple packages comprising the EightShapes Design System.

### esds-tokens
EightShapes Design System Tokens are key/value pairs representing visual style properties. [Tokens README](./esds-tokens/README.md)

### esds-icons
EightShapes Design System Icons are svg assets used throughout design system components. [Icons README](./esds-icons/README.md)

### components/[component]
Components are versioned independently and distributed as individual node packages. [Components README](./components/README.md)

## Linting
Linting is performed at the repository level since it's tied to git commits. The same linting rules apply to esds-tokens, esds-icons, and all component packages.

[Linting doc](./documentation/linting.md)
