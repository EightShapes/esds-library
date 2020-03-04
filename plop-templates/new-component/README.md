# ESDS {{ titleCase name }}
Install using npm:
```
npm install @eightshapes/esds-{{ lowerCase dashCase name }}
```

[Component Doc](./documentation/esds-{{ lowerCase dashCase name }}-docs.md)

## Outputs
The package contains:
* `/dist/esds-{{ lowerCase dashCase name }}-web-component.js`  
ES6 compatible web component definition for `<esds-{{ lowerCase dashCase name }}>`.

* `/dist/esds-{{ lowerCase dashCase name }}-web-component-legacy.js`  
ES5 compatible web component definition for `<esds-{{ lowerCase dashCase name }}>`. (IE11) Compatible with ES5 browsers (IE11).  

* `/dist/Esds{{ pascalCase name }}.js`  
ES6 module that exports an `Esds{{ pascalCase name }}` Lit Element class. Use to define your own custom element tag:
```js
import { Esds{{ pascalCase name }} } from '@eightshapes/esds-{{ lowerCase dashCase name }}/dist/Esds{{ pascalCase name }}.js';
customElements.define('aliased-{{ lowerCase dashCase name }}', Esds{{ pascalCase name }});
// Creates <aliased-{{ lowerCase dashCase name }}> tag
```

## Running the dev environment locally
Refer to the [ESDS Component Readme](../README.md)
