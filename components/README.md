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
* monitor source `.js` and `.scss` files for changes and rebuild component outputs
* launch the storybook test environment (`./test/storybook`) where test stories can be written for each component

#### IE11 Compatibility
For performance reasons, the default dev environment does not build assets for IE11. To start an IE 11 compatible dev environment run:

```
cd components/[component-name]
npm run start:legacy
```

This will _not_ launch storybook, but instead a debugging environment that's compatible with IE11.

## Running component debugging environment
If the component needs to be tested in isolation or debugging needs to be performed without storybook running:

```
cd components/[component-name]
npm run start:debug-environment
```

This will load the component in a debug page: (`components/[component-name]/test/html/index.html`)

## Running VRT
```
cd components/[component-name]
npm test
```

This will build the storybook instance and run visual regression tests for _all_ components. Per component VRT cannot be performed at this time.

## Creating New Components
This repository is equipped with a new component generator. This will scaffold out all files needed to build and test new components.

1.  
```bash
npx plop
```  
This will prompt you for the new component's name. 'esds' will be prepended automatically, so just provide the name of the component itself, for example: "button" or "data table."

2.  
```bash
lerna bootstrap
```  
This will install the dependencies needed by the new component and link the component to the test environment.

3. That's it. See above for how to run the new component's dev environment.


---
## Dependencies
* [@babel/core](https://github.com/babel/babel/tree/master/packages/babel-core)  
Compiles ES6 source code to ES5 for IE11 Compatibility

* [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)  
Easy configuration for babel

* [@open-wc/testing](https://open-wc.org/testing/)  
Unit testing for web components

* [@open-wc/testing-karma](https://open-wc.org/testing/#karma)  
Browser environment for unit testing

* [@open-wc/testing-karma-bs](https://open-wc.org/testing/testing-karma-bs.html)  
Cross platform unit testing with Karma and [Browserstack](https://www.browserstack.com)

* [autoprefixer](https://github.com/postcss/autoprefixer#readme)  
[PostCSS](https://github.com/postcss/postcss) plugin to parse CSS and add vendor prefixes to CSS rules

* [browser-sync](https://www.browsersync.io)  
Local dev server with hot reloading built-in.

* [chokidar-cli](https://github.com/kimmobrunfeldt/chokidar-cli)  
Cross-platform file watcher, used to trigger compilation of scss on save.

* [deepmerge](https://github.com/TehShrike/deepmerge)  
Used by @open-wc/testing

* [postcss](https://github.com/postcss/postcss)  
CSS Post processing package.

* [rollup](https://rollupjs.org/guide/en/)  
Simple JS module bundler

* [rollup-plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve)  
A Rollup plugin which locates modules using the [Node resolution algorithm](https://nodejs.org/api/modules.html#modules_all_together), used to build both the ES6 and ES5 target outputs. Needed specifically to resolve lit-element & lit-html dependencies when bundling via rollup.

* [sass](https://github.com/sass/dart-sass)  
Compiles source .scss files to css

* [trash-cli](https://github.com/sindresorhus/trash-cli#readme)  
Cross-platform File system deletion utility, used to delete compiled scss assets before each new build.

* [web-component-analyzer](https://github.com/runem/web-component-analyzer)  
CLI that analyzes web components and emits documentation.
