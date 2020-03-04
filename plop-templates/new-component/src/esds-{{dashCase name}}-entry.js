import { EsdsIcon } from './EsdsIcon.js';

if (window.customElements.get('esds-icon') === undefined) {
  window.customElements.define('esds-icon', EsdsIcon);
}
