# ESDS Thumbnail
Install using npm:
```
npm install @eightshapes/esds-thumbnail
```

[Component Doc](./documentation/esds-thumbnail-docs.md)

## Outputs
The package contains:
* `/dist/esds-thumbnail-web-component.js`  
ES6 compatible web component definition for `<esds-thumbnail>`.

* `/dist/esds-thumbnail-web-component-legacy.js`  
ES5 compatible web component definition for `<esds-thumbnail>`. (IE11) Compatible with ES5 browsers (IE11).  

* `/dist/EsdsThumbnail.js`  
ES6 module that exports an `EsdsThumbnail` Lit Element class. Use to define your own custom element tag:
```js
import { EsdsThumbnail } from '@eightshapes/esds-thumbnail/dist/EsdsThumbnail.js';
customElements.define('aliased-thumbnail', EsdsThumbnail);
// Creates <aliased-thumbnail> tag
```

## Running the dev environment locally
Refer to the [ESDS Component Readme](../README.md)
