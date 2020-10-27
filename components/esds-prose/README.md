# ESDS Prose
Install using npm:
```
npm install @eightshapes/esds-prose
```

[Component Doc](./documentation/esds-prose-docs.md)

## Outputs
The package contains:
* `/dist/esds-prose-web-component.js`
ES6 compatible web component definition for `<esds-prose>`.

  * `/dist/EsdsProse.js`
  ES6 module that exports an `EsdsProse` Lit Element class. Use to define your own custom element tag:
  ```js
  import { EsdsProse } from
  '@eightshapes/esds-prose/dist/EsdsProse.js';
  customElements.define('aliased-prose', EsdsProse);
  // Creates <aliased-prose> tag
    ```

    ## Running the dev environment locally
    Refer to the [ESDS Component Readme](../README.md)