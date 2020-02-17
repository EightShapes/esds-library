# EightShapes Design System Tokens
EightShapes Design System Tokens are key/value pairs representing visual style properties, offered as a package compiled by [Amazon Style Dictionary](https://amzn.github.io/style-dictionary/#/). [Learn more about tokens](https://eightshapes.com/articles/tokens-in-design-systems.html).

## Token Source File

### [src/tokens.json5](./src/tokens.json5)
The tokens source file follows the style dictionary format for ["properties"](https://amzn.github.io/style-dictionary/#/properties), their term for tokens. This file contains static key/value pairs with interpolated references to values defined earlier in the file.

## Token Outputs
This repository builds multiple outputs based on the source token file:

* `dist/js/esds-tokens.json`
* `dist/scss/_edsds-tokens.scss`
* `dist/scss/_esds-tokens-map.scss`
* `dist/css/esds-tokens.css`
* `dist/less/esds-tokens.less`


## Building Token Outputs
**IMPORTANT** Follow the [lerna installation instructions](../documentation/lerna.md) before running any commands in this repository.

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
Add tokens to `tokens.json5`. They will automatically be added to the compiled outputs.

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

##### [style-dictionary](https://amzn.github.io/style-dictionary/#/)
Amazon's Token Compiler tool
