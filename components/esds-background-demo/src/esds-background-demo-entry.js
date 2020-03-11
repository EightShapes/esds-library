import { EsdsBackgroundDemo } from './EsdsBackgroundDemo.js';

if (window.customElements.get('esds-background-demo') === undefined) {
  window.customElements.define('esds-background-demo', EsdsBackgroundDemo);
}
