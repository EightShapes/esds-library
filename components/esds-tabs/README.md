# ESDS Tabs
Install using npm:
```
npm install @eightshapes/esds-tabs
```

[Component Doc](./documentation/esds-tabs-docs.md)

## Outputs
The package contains:
* `/dist/esds-tabs-web-component.js`
ES6 compatible web component definition for `<esds-tabs>`.

  * `/dist/EsdsTabs.js`
  ES6 module that exports an `EsdsTabs` Lit Element class. Use to define your own custom element tag:
  ```js
  import { EsdsTabs } from
  '@eightshapes/esds-tabs/dist/EsdsTabs.js';
  customElements.define('aliased-tabs', EsdsTabs);
  // Creates <aliased-tabs> tag
    ```

    ## Running the dev environment locally
    Refer to the [ESDS Component Readme](../README.md)