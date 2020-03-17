import { html, LitElement } from 'lit-element';
import { Scopify } from '@eightshapes/scopify';
import { EsdsIcon } from '@eightshapes/esds-icon/dist/EsdsIcon.js';
import { EsdsIconCalendarNumbered } from '@eightshapes/esds-icons';
import { namespacedStyles } from './esds-thumbnail-styles.js';

/**
 * @element esds-thumbnail
 *
 */

export class EsdsThumbnail extends Scopify(LitElement, 'esds') {
  static get customElementName() {
    return 'thumbnail';
  }

  static get properties() {
    return {
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
    EsdsIcon.define(`esds-thumbnail`); // Will create <esds-thumbnail-icon> custom element tag
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
      <div
        class="${this.constructor.customElementNamespace}-thumbnail esds-thumbnail--${this
          .objectFit}"
      >
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
