# ESDS Icon
Install using npm:
```
npm install @eightshapes/esds-icon
```

[Component Doc](./documentation/esds-icon-docs.md)

## Outputs
The package contains:
* `/dist/esds-icon-web-component.js`  
ES6 compatible web component definition for `<esds-icon>`.

* `/dist/esds-icon-web-component-legacy.js`  
ES5 compatible web component definition for `<esds-icon>`. (IE11) Compatible with ES5 browsers (IE11).  

* `/dist/EsdsIcon.js`  
ES6 module that exports an `EsdsIcon` Lit Element class. Use to define your own custom element tag:
```js
import { EsdsIcon } from '@eightshapes/esds-icon/dist/EsdsIcon.js';
customElements.define('aliased-icon', EsdsIcon);
// Creates <aliased-icon> tag
```

## Running the dev environment locally
Refer to the [ESDS Component Readme](../README.md)
