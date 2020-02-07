import { EsdsButton } from './esds-button.js';

if (window.customElements.get('esds-button') === undefined) {
  window.customElements.define('esds-button', EsdsButton);
}
