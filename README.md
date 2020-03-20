# EightShapes Design System
[![Build Status](https://travis-ci.com/EightShapes/esds-library.svg?branch=master)](https://travis-ci.com/EightShapes/esds-library)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/EightShapes-LLC/esds-storybook)


## Repository Structure
The EightShapes Design system is a monorepo containing design system components, tokens, icons and visual assets. Each of these assets is published as an independently versioned node package.

The dependencies between these assets are managed using [lerna](https://lerna.js.org).

Before running commands in this repository, [install lerna](./documentation/lerna.md).

### Dependency Tree
To view a dependency tree of the repository, in the _root_ of the repo run:

```
npm run dependency-tree
```

## Packages
This repository includes many packages across folders:

[EightShapes Design System Tokens](./esds-tokens/README.md), key/value pairs representing visual style properties.

[EightShapes Design System Icons](./esds-icons/README.md), svg assets used throughout design system components.

[Design System Components](./components/README.md), independently versioned and distributed as individual node packages.

## Linting
Linting is performed at the repository level since it's tied to git commits. The same linting rules apply to esds-tokens, esds-icons, and all component packages.

[Linting doc](./documentation/linting.md)

## Visual Regression Testing
Visual Regression Testing (VRT) is performed at the repository level since changes to shared assets can affect multiple packages. A [Storybook](https://storybook.js.org) instance connected to [Percy](https://percy.io) is responsible for VRT.

[VRT doc](./test/storybook/README.md)
