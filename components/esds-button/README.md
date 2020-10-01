# ESDS Button
Install using npm:
```
npm install @eightshapes/esds-button
```

[Component Doc](./documentation/esds-button-docs.md)

## Outputs
The package contains:
* `/dist/esds-button-web-component.js`
ES6 compatible web component definition for `<esds-button>`.

  * `/dist/EsdsButton.js`
  ES6 module that exports an `EsdsButton` Lit Element class. Use to define your own custom element tag:
  ```js
  import { EsdsButton } from
  '@eightshapes/esds-button/dist/EsdsButton.js';
  customElements.define('aliased-button', EsdsButton);
  // Creates <aliased-button> tag
    ```

    ## Running the dev environment locally
    Refer to the [ESDS Component Readme](../README.md)