# ESDS List Group
Install using npm:
```
npm install @eightshapes/esds-list-group
```

[Component Doc](./documentation/esds-list-group-docs.md)

## Outputs
The package contains:
* `/dist/esds-list-group-web-component.js`
ES6 compatible web component definition for `<esds-list-group>`.

  * `/dist/EsdsListGroup.js`
  ES6 module that exports an `EsdsListGroup` Lit Element class. Use to define your own custom element tag:
  ```js
  import { EsdsListGroup } from
  '@eightshapes/esds-list-group/dist/EsdsListGroup.js';
  customElements.define('aliased-list-group', EsdsListGroup);
  // Creates <aliased-list-group> tag
    ```

    ## Running the dev environment locally
    Refer to the [ESDS Component Readme](../README.md)