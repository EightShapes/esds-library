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
       * Image aspect ratio
       * @type {'16:9'|'1:1'|'square'}
       */
      imgAspectRatio: { type: String, attribute: 'img-aspect-ratio' },

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

      /*
       * Overall size of the card
       * @type {'small'|'medium'|'large'}
       */
      size: { type: String },
    };
  }

  constructor() {
    super();
    EsdsThumbnail.define('esds-card');
  }

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-card`,
      prefix: `${this.constructor.customElementNamespace}-card`,
      link: {
        conditional: this.href !== undefined,
      },
      size: {
        class: this.size,
        conditional: this.size !== undefined,
      },
    };
  }

  renderImage() {
    return html`
      <div class="esds-card__image">
        <esds-card-thumbnail
          src="${this.imgSrc}"
          object-fit="${this.imgCropType}"
        ></esds-card-thumbnail>
      </div>
    `;
  }

  renderTitle() {
    return html`
      <h3 class="esds-card__title">
        ${this.href
          ? html`
              <a href="${this.href}" class="esds-card__title-link">${this.title}</a>
            `
          : this.title}
      </h3>
    `;
  }

  renderDescription() {
    return this.description
      ? html`
          <p class="esds-card__description">${this.description}</p>
        `
      : '';
  }

  renderMetadata() {
    return this.metadata
      ? html`
          <h4 class="esds-card__metadata">${this.metadata}</h4>
        `
      : '';
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <div class="${this.getClassName()}">
        <div class="esds-card__body">
          ${this.renderTitle()} ${this.renderMetadata()} ${this.renderDescription()}
        </div>
        ${this.renderImage()}
      </div>
    `;
  }
}
