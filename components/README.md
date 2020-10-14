# EightShapes Design System Components

## Running component dev environments

Before running commands in this repository, [install lerna](./documentation/lerna.md).

Run `lerna bootstrap` to build and link dependencies.

The dev environment start command is the same for all components:

```
cd components/[component-name]
npm start
```

This will:

- monitor source `.js` and `.scss` files for changes and rebuild component outputs
- launch the storybook test environment (`./test/storybook`) where test stories can be written for each component

### Running component dev environment with dependency watching

If you need to edit tokens and visual style while working on a component use the command:

```
npm run start:watch-dependencies
```

This will monitor tokens and visual style scss for changes in addition to monitoring component source files.

## Running VRT

```
cd components/[component-name]
npm test
```

This will build the storybook instance and run visual regression tests for _all_ components. Per component VRT cannot be performed at this time.

## Generating New Components

This repository is equipped with a new component generator. This will scaffold out all files needed to build and test new components.

1. From anywhere in the repository run:

```bash
npx plop
```

This will prompt for the new component's name. 'esds' will be prepended automatically, so just provide the name of the component itself, for example: "button" or "data table."

The prompt will then ask if the component will use slots. Answer the prompt to continue.

2. After the scaffold is generated run:

```bash
lerna bootstrap
```

This will install the dependencies needed by the new component and link the component to the test environment.

3. That's it. See above for how to run the new component's dev environment.

---

## Dependencies

- [@open-wc/testing](https://open-wc.org/testing/)
  Unit testing for web components

- [@open-wc/testing-karma](https://open-wc.org/testing/#karma)
  Browser environment for unit testing

- [@open-wc/testing-karma-bs](https://open-wc.org/testing/testing-karma-bs.html)
  Cross platform unit testing with Karma and [Browserstack](https://www.browserstack.com)

- [autoprefixer](https://github.com/postcss/autoprefixer#readme)
  [PostCSS](https://github.com/postcss/postcss) plugin to parse CSS and add vendor prefixes to CSS rules

- [chokidar-cli](https://github.com/kimmobrunfeldt/chokidar-cli)
  Cross-platform file watcher, used to trigger compilation of scss on save.

- [deepmerge](https://github.com/TehShrike/deepmerge)
  Used by @open-wc/testing

- [postcss](https://github.com/postcss/postcss)
  CSS Post processing package.

- [sass](https://github.com/sass/dart-sass)
  Compiles source .scss files to css

- [trash-cli](https://github.com/sindresorhus/trash-cli#readme)
  Cross-platform File system deletion utility, used to delete compiled scss assets before each new build.

- [web-component-analyzer](https://github.com/runem/web-component-analyzer)
  CLI that analyzes web components and
