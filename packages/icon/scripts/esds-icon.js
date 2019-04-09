import EsdsIcon from './esds-icon-core.js';
const tagName = 'esds-icon';

if (!customElements.get(tagName)) {
  customElements.define(tagName, EsdsIcon);
}

export default EsdsIcon;
