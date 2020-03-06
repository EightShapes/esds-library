import { html, LitElement } from 'lit-element';
import styles from './esds-card-styles.js';

export class EsdsCard extends LitElement {
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
  }

  /*
   * @ignore
   */
  createRenderRoot() {
    return this; // Prevents lit-element from rendering in shadowDOM
  }

  _renderCardImage() {
    return this.imgSrc
      ? html`
          <div class="esds-card__image-wrap">
            <div class="esds-card__image-wrap-inner">
              <img class="esds-card__image" src="${this.imgSrc}" />
            </div>
          </div>
        `
      : '';
  }

  _renderCardBody() {
    let body = html`
      ${this._renderCardImage()}
      <div class="esds-card__body">
        ${this.metadata
          ? html`
              <h4 class="esds-card__metadata">${this.metadata}</h4>
            `
          : ''}
        <h3 class="esds-card__title">${this.title}</h3>
        <div class="esds-card__content">${this.content}</div>
      </div>
    `;

    if (this.href) {
      body = html`
        <a href="${this.href}" class="esds-card__link">${body}</a>
      `;
    }

    return body;
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>

      <div class="esds-card">
        ${this._renderCardBody()}
      </div>
    `;
  }
}
