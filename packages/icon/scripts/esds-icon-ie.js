import 'whatwg-fetch'; //Add this polyfill to support IE11
import EsdsIcon from './esds-icon-core.js';
customElements.define('esds-icon', EsdsIcon);

export default EsdsIcon;
