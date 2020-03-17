import { html, LitElement } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { EsdsThumbnail } from '@eightshapes/esds-thumbnail/dist/EsdsThumbnail.js';
import { Slotify } from '@eightshapes/slotify';
import { Scopify } from '@eightshapes/scopify';
import { namespacedStyles } from './esds-card-styles.js';

/**
 * @element esds-card
 *
 * @slot content - Accepts miscellaneous content for the card
 * @slot actions - Accepts links or buttons as actions at the bottom of the card
 */

export class EsdsCard extends Slotify(Scopify(LitElement, 'esds')) {
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

    EsdsThumbnail.define('esds-card'); // Defines <esds-card-thumbnail>
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

  _renderTitle() {
    return html`
      <h3 class="esds-card__title">
        ${this.href
          ? html`
              <a class="esds-card__title-link" href="${this.href}">${this.title}</a>
            `
          : this.title}
      </h3>
    `;
  }

  _renderCardBody() {
    return html`
      <div class="esds-card__body">
        ${this.metadata
          ? html`
              <h4 class="esds-card__metadata">${this.metadata}</h4>
            `
          : ''}
        ${this._renderTitle()} ${this._renderDescription()} ${this._renderContent()}
        ${this._renderActions()}
      </div>
      <div class="esds-card__image">
        ${this._renderCardImage()}
      </div>
    `;
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <div
        class="${this.constructor.customElementNamespace}-card__root ${this.href
          ? 'esds-card--link'
          : ''}"
      >
        ${this._renderCardBody()}
      </div>
    `;
  }
}
