import { html, LitElement } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { EsdsThumbnail } from '@eightshapes/esds-thumbnail/dist/EsdsThumbnail.js';
import { Slotify } from '@eightshapes/slotify';
import styles from './esds-card-styles.js';

export class EsdsCard extends Slotify(LitElement) {
  static get properties() {
    return {
      /*
       * Content displayed on card. Overridden by the named "content" slot if present.
       * @type String
       */
      content: { type: String },
      /*
       * Destination when card is clicked
       * @type String
       */
      href: { type: String },
      /*
       * Relative path to the image displayed on the card
       * @type String
       */
      imgSrc: { type: String, attribute: 'img-src' },
      /*
       * Metadata text displayed on the card
       * @type String
       */
      metadata: { type: String },
      /*
       * Title text displayed on the card
       * @type String
       */
      title: { type: String },
    };
  }

  constructor() {
    super();
    // Prop Defaults
    this.title = 'Card Title';
    if (customElements.get('esds-card-thumbnail') === undefined) {
      customElements.define('esds-card-thumbnail', EsdsThumbnail);
    }
  }

  _renderCardImage() {
    return html`
      <esds-card-thumbnail src="${ifDefined(this.imgSrc)}" object-fit="cover"></esds-card-thumbnail>
    `;
  }

  _renderCardBody() {
    return html`
      ${this._renderCardImage()}
      <div class="esds-card__body">
        ${this.metadata
          ? html`
              <h4 class="esds-card__metadata">${this.metadata}</h4>
            `
          : ''}
        <h3 class="esds-card__title">${this.title}</h3>
        <div class="esds-card__content${this.content ? ' esds-card__content--styled' : ''}">
          <s-slot name="content">${this.content}</s-slot>
        </div>
        <div class="esds-card__actions">
          <s-slot name="actions"></s-slot>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>

      ${this.href
        ? html`
            <a class="esds-card esds-card--link" href="${this.href}">${this._renderCardBody()}</a>
          `
        : html`
            <div class="esds-card">${this._renderCardBody()}</div>
          `}
    `;
  }
}
