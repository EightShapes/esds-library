import { html, LitElement } from 'lit-element';
import { EsdsIcon } from '@eightshapes/esds-icon/dist/EsdsIcon.js';
import { EsdsIconCalendarNumbered } from '@eightshapes/esds-icons';
import styles from './esds-thumbnail-styles.js';

export class EsdsThumbnail extends LitElement {
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
    if (customElements.get('esds-thumbnail-icon') === undefined) {
      customElements.define('esds-thumbnail-icon', EsdsIcon);
    }
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
        ${styles}
      </style>
      <div class="esds-thumbnail esds-thumbnail--${this.objectFit}">
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
