import { EsdsThumbnail } from './EsdsThumbnail.js';

if (window.customElements.get('esds-thumbnail') === undefined) {
  window.customElements.define('esds-thumbnail', EsdsThumbnail);
}
