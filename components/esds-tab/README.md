# ESDS Tab
Install using npm:
```
npm install @eightshapes/esds-tab
```

[Component Doc](./documentation/esds-tab-docs.md)

## Outputs
The package contains:
* `/dist/esds-tab-web-component.js`
ES6 compatible web component definition for `<esds-tab>`.

  * `/dist/EsdsTab.js`
  ES6 module that exports an `EsdsTab` Lit Element class. Use to define your own custom element tag:
  ```js
  import { EsdsTab } from
  '@eightshapes/esds-tab/dist/EsdsTab.js';
  customElements.define('aliased-tab', EsdsTab);
  // Creates <aliased-tab> tag
    ```

    ## Running the dev environment locally
    Refer to the [ESDS Component Readme](../README.md)