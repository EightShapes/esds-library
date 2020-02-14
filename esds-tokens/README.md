# EightShapes Design System Tokens
EightShapes Design System Tokens are key/value pairs representing visual style properties, offered as a package compiled by [Amazon Style Dictionary](https://amzn.github.io/style-dictionary/#/). [Learn more about tokens](https://eightshapes.com/articles/tokens-in-design-systems.html).

## Token Source Files
Source files for tokens are located in two files:

```
/src
  font-sizes.js
  tokens.json5
```

### src/tokens.json5
Contains the majority of the design system tokens. The file follows the style dictionary format for ["properties"](https://amzn.github.io/style-dictionary/#/properties), their term for tokens. This file contains static key/value pairs with interpolated references to values defined earlier in the file.

### src/font-sizes.js
Contains tokens for all font sizes within the system. These values are derived from a `baseFontSize` variable set in the top of the file. Because of the calculated nature of these tokens, they reside in a `.js` file separate from the static `tokens.json5` file.

## Token Outputs
This repository builds multiple outputs based on the source token files:

* `dist/js/esds-tokens.json`
* `dist/scss/_edsds-tokens.scss`
* `dist/scss/_esds-tokens-map.scss`
* `dist/css/esds-tokens.css`
* `dist/less/esds-tokens.less`


## Building Token Outputs
**Before running any `npm` commands in the `esds-library` repo, run `lerna bootstrap` to install and link all necessary dependencies.** Install lerna globally in order to run lerna commands from anywhere within the repo:

```
npm install lerna -g
```

### Running token scripts
The following esds-token npm scripts should be run from the root of the tokens package: `./esds-tokens`

### Compile Tokens
```
npm run build
```
### Compile Tokens & Watch For Changes
```
npm start
```

#### Stop Watching
 ```
 ctrl + C
 ```

## Adding New Tokens
Add tokens to either the `tokens.json5` file or the `font-sizes.js` file. They will automatically be added to the compiled outputs.

Amazon Style Dictionary supports [spreading tokens across multiple files](https://amzn.github.io/style-dictionary/#/architecture).
If adding tokens in a new token file, the new filepath must be added to the `source` array in  `./config.json`.

## Adding New Output Formats
Amazon Style Dictionary supports a wide range of token file formats. Refer to their [Pre-defined Formats](https://amzn.github.io/style-dictionary/#/formats?id=pre-defined-formats) documentation for how to add a new output format.

---

#### Repo Dependency Rationale
##### [chokidar-cli](https://github.com/kimmobrunfeldt/chokidar-cli)
Cross-platform file watcher used to trigger recompilation of tokens on save.

##### [trash-cli](https://github.com/sindresorhus/trash-cli#readme)
Cross-platform File system deletion utility used to delete compiled token files before each new build.

#####[style-dictionary](https://amzn.github.io/style-dictionary/#/)
Amazon's Token Compiler tool
