import { EsdsCard } from './EsdsCard.js';

if (window.customElements.get('esds-card') === undefined) {
  window.customElements.define('esds-card', EsdsCard);
}
