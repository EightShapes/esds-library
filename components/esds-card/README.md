# ESDS Card
Install using npm:
```
npm install @eightshapes/esds-card
```

[Component Doc](./documentation/esds-card-docs.md)

## Outputs
The package contains:
* `/dist/esds-card-web-component.js`
ES6 compatible web component definition for `<esds-card>`.

  * `/dist/EsdsCard.js`
  ES6 module that exports an `EsdsCard` Lit Element class. Use to define your own custom element tag:
  ```js
  import { EsdsCard } from
  '@eightshapes/esds-card/dist/EsdsCard.js';
  customElements.define('aliased-card', EsdsCard);
  // Creates <aliased-card> tag
    ```

    ## Running the dev environment locally
    Refer to the [ESDS Component Readme](../README.md)