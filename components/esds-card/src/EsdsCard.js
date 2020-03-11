import { html, LitElement } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { EsdsThumbnail } from '@eightshapes/esds-thumbnail/dist/EsdsThumbnail.js';
import { Slotify } from '@eightshapes/slotify';
import styles from './esds-card-styles.js';

/**
 * @element esds-card
 *
 * @slot content - Accepts miscellaneous content for the card
 * @slot actions - Accepts links or buttons as actions at the bottom of the card
 */

export class EsdsCard extends Slotify(LitElement) {
  static get properties() {
    return {
      /*
       * Text description rendered below the title
       * @type String
       */
      description: { type: String },
      /*
       * Destination when card is clicked
       * @type String
       */
      href: { type: String },
      /*
       * Image crop behavior
       * @type {'fill'|'contain'|'cover'|'none'|'scale-down'}
       */
      imgCropType: { type: String, attribute: 'img-crop-type' },
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
    this.imgObjectFit = 'cover';

    if (customElements.get('esds-card-thumbnail') === undefined) {
      customElements.define('esds-card-thumbnail', EsdsThumbnail);
    }
  }

  _renderCardImage() {
    return html`
      <esds-card-thumbnail
        src="${ifDefined(this.imgSrc)}"
        object-fit="${this.imgCropType}"
      ></esds-card-thumbnail>
    `;
  }

  _renderDescription() {
    return this.description
      ? html`
          <p class="esds-card__description">${this.description}</p>
        `
      : '';
  }

  _renderContent() {
    return this.hasSlotableContent('content')
      ? html`
          <div class="esds-card__content">
            <s-slot name="content">${this.content}</s-slot>
          </div>
        `
      : '';
  }

  _renderActions() {
    return this.hasSlotableContent('actions')
      ? html`
          <div class="esds-card__actions">
            <s-slot name="actions"></s-slot>
          </div>
        `
      : '';
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
        ${this._renderDescription()} ${this._renderContent()} ${this._renderActions()}
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
