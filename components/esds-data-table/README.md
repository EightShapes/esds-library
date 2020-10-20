# ESDS Data Table
Install using npm:
```
npm install @eightshapes/esds-data-table
```

[Component Doc](./documentation/esds-data-table-docs.md)

## Outputs
The package contains:
* `/dist/esds-data-table-web-component.js`
ES6 compatible web component definition for `<esds-data-table>`.

  * `/dist/EsdsDataTable.js`
  ES6 module that exports an `EsdsDataTable` Lit Element class. Use to define your own custom element tag:
  ```js
  import { EsdsDataTable } from
  '@eightshapes/esds-data-table/dist/EsdsDataTable.js';
  customElements.define('aliased-data-table', EsdsDataTable);
  // Creates <aliased-data-table> tag
    ```

    ## Running the dev environment locally
    Refer to the [ESDS Component Readme](../README.md)