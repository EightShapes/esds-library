# EightShapes Design System Icons
EightShapes Design System Icons are a collection of `.svg` assets that are used within other Design System Components.

## Icon Source Files
Source files are in `src/*.svg`. Adding, removing, or editing these files will affect the compiled output.

## Icon Outputs
The following files are built from the source SVGs:

### SVG Sprite
```
dist/esds-icons.svg
```
An optimized SVG sprite containing _all_ the source icons. Built using the [svg-sprite](https://github.com/jkphl/svg-sprite) node package.

### Optimized SVGs
```
dist/icons/*.svg
```
Optimized SVG files of each source icon. Optimized using the [svgo](https://github.com/svg/svgo) node package.

### ES6 modules
```
dist/*.svg.js
```
ES6 modules containing the optimized SVG source as a string. First optimized using [svgo](https://github.com/svg/svgo) then wrapped in ES6 syntax using a custom script: `scripts/build-es6-modules.js`

#### ES6 filenames
Output file names are created based on Pascal-casing the source svg asset and prepending `EsdsIcon`. So, `caret-down.svg` becomes `EsdsIconCaretDown.svg`.

### ES6 module manifest
```
index.js
```
Serves as the `main` output of this package. Contains ES6 import/export statements for each module.

### Icon Names JSON
```
dist/esds-icon-names.json
```
A JSON array containing individual SVG filenames minus the extension. Useful for iterating over the icon set programatticaly, to generate an icon gallery.

##Building Icon Outputs
**Before running any npm commands in the esds-library repo, run lerna bootstrap to install and link all necessary dependencies.**

### Build SVG Sprite
```
npm run build:sprite
```

### Build Optimized SVGs
```
npm run build:optimized
```

### Build ES6 Modules, ES6 module manifest, & Icon Names JSON
```
npm run build:es6-modules
```
### Build All Icon Assets
```
npm run build
```
### Build All Icon Assets & Watch For Changes
```
npm start
```
#### Stop Watching
```
ctrl + C
```

##Adding New Icons
Add raw `.svg` assets to `src/` and re-run the build commands to add new icons to the output.

##Consuming Icon Outputs
###SVG Sprite
Icons within the SVG sprite can be referenced by name via the `<use>` element.

```html
<!-- Inject esds-icons.svg into the DOM -->

<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
	<use href="#caret-down"/> <!-- Reference using the icon name -->
</svg>
```

###Optimized SVGs
Optimized SVGs can be injected into the page via HTML `<img>` tags among other means.

```html
<img src="/path/to/caret-down.svg" alt="open menu"/>
```

###ES6 Modules & ES6 manifest
ES6 module assets can be imported into Javascript contexts.

Single icon:

```js
import { EsdsIconCaretDown } from '@eightshapes/esds-icons/dist/EsdsIconCaretDown.svg.js';
```
Multiple icons (manifest file):

```js
import { EsdsIconCaretDown, EsdsIconCaretUp } from '@eightshapes/esds-icons';
```



## Icon Gallery
![angle left](.src/angle-left.svg)

---
#### Repo Dependency Rationale
##### [camelcase](https://github.com/sindresorhus/camelcase#readme)
Javascript string utility used to pascal-case source .svg files when 
creating ES6 modules

##### [chokidar-cli](https://github.com/kimmobrunfeldt/chokidar-cli)
Cross-platform file watcher, used to trigger recompilating of icon assets on save.

##### [fs-extra](https://github.com/jprichardson/node-fs-extra)
Extension of default node module `fs`, adds more functionality under a similar API. A specific use case is the `mkdirpSync` method used in the `build-es6-modules.js` script to create the `dist` directory. There may be other use cases as well.

##### [svg-sprite](https://github.com/jkphl/svg-sprite)
Used to generate the svg sprite sheet from individual SVGs. **Note**: svg-sprite uses `svgo` internally, but does not expose that dependency outside of creating the sprite sheet. This is why `svgo` is included separately.

##### [svgo](https://github.com/svg/svgo)
Used to optimize src SVGs for direct consumption and for use in ES6 Module output.

##### [trash-cli](https://github.com/sindresorhus/trash-cli#readme)
Cross-platform File system deletion utility, used to delete compiled icon assets before each new build.