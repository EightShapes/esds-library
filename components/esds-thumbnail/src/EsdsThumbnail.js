import { html, LitElement } from 'lit-element';
import { Scopify } from '@eightshapes/scopify';
import { CSSClassify } from '@eightshapes/css-classify';
import { EsdsIcon } from '@eightshapes/esds-icon/dist/EsdsIcon.js';
import { EsdsIconCalendarNumbered } from '@eightshapes/esds-icons';
import { namespacedStyles } from './esds-thumbnail-styles.js';

/**
 * @element esds-thumbnail
 *
 */

export class EsdsThumbnail extends CSSClassify(Scopify(LitElement, 'esds')) {
  static get customElementName() {
    return 'thumbnail';
  }

  static get properties() {
    return {
      /*
       * Image aspect ratio
       * @type {'16:9'|'square'|'1:1'}
       */
      aspectRatio: { type: String, attribute: 'aspect-ratio' },
      /*
       * Image crop behavior
       * @type {'fill'|'contain'|'cover'|'none'|'scale-down'}
       */
      objectFit: { type: String, attribute: 'object-fit' },
      /*
       * Path to the thumbnail's image
       * @type String
       */
      src: { type: String },
    };
  }

  constructor() {
    super();
    this.objectFit = 'cover';
    this.aspectRatio = '16:9';
    EsdsIcon.define(`esds-thumbnail`); // Will create <esds-thumbnail-icon> custom element tag
  }

  /*
   * @ignore
   */
  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-thumbnail`,
      prefix: `${this.constructor.customElementNamespace}-thumbnail`, // will cause `active` to become `my-card--active`
      aspect: {
        conditional: this.aspectRatio,
        class: `aspect-${this.aspectRatio.replace(/:/g, '-')}`,
      },
      objectFit: {
        class: this.objectFit,
      },
    };
  }

  /*
   * @ignore
   */
  createRenderRoot() {
    return this; // Prevents lit-element from rendering in shadowDOM
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <div class="${this.getClassName()}">
        <div class="esds-thumbnail__inner-wrap">
          ${this.src
            ? html`
                <img role="presentation" class="esds-thumbnail__image" src="${this.src}" />
              `
            : html`
                <esds-thumbnail-icon
                  use="${EsdsIconCalendarNumbered}"
                  class="esds-thumbnail__placeholder-icon"
                ></esds-thumbnail-icon>
              `}
        </div>
      </div>
    `;
  }
}
