import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import { EsdsThumbnail } from '@eightshapes/esds-thumbnail/dist/EsdsThumbnail.js';
import { namespacedStyles } from './esds-card-styles.js';

/**
 * @element esds-card
 */

export class EsdsCard extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'card';
  }

  static get properties() {
    return {
      imgSrc: { type: String, attribute: 'img-src' },
      title: { type: String },
    };
  }

  constructor() {
    super();
    EsdsThumbnail.define('esds-card');
  }

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-card`,
      prefix: `${this.constructor.customElementNamespace}-card`, // will cause `active` to become `my-card--active`
    };
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <div class="${this.getClassName()}">
        <div class="esds-card__body">
          <h3 class="esds-card__title">${this.title}</h3>
        </div>
        <div class="esds-card__image">
          <esds-card-thumbnail src="${this.imgSrc}"></esds-card-thumbnail>
        </div>
      </div>
    `;
  }
}
