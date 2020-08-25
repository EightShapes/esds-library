# ESDS Background Demo
Install using npm:
```
npm install @eightshapes/esds-background-demo
```

[Component Doc](./documentation/esds-background-demo-docs.md)

## Outputs
The package contains:
* `/dist/esds-background-demo-web-component.js`  
ES6 compatible web component definition for `<esds-background-demo>`.

* `/dist/esds-background-demo-web-component-legacy.js`  
ES5 compatible web component definition for `<esds-background-demo>`. (IE11) Compatible with ES5 browsers (IE11).  

* `/dist/EsdsBackgroundDemo.js`  
ES6 module that exports an `EsdsBackgroundDemo` Lit Element class. Use to define your own custom element tag:
```js
import { EsdsBackgroundDemo } from '@eightshapes/esds-background-demo/dist/EsdsBackgroundDemo.js';
customElements.define('aliased-background-demo', EsdsBackgroundDemo);
// Creates <aliased-background-demo> tag
```

## Running the dev environment locally
Refer to the [ESDS Component Readme](../README.md)
