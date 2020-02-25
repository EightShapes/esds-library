import { svg, LitElement } from 'lit-element';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import { EsdsIconEightshapesMark } from '@eightshapes/esds-icons';
import styles from './esds-icon-styles.js';

/**
 * @slot just-for-fun - This is the just-for-fun slot.
 */
export class EsdsIcon extends LitElement {
  static get properties() {
    return {
      /*
       * Sets height and width of the icon
       * @type {'small'|'medium'|'large'}
       * @values ['small', 'medium', 'large']
       */
      size: { type: String },
      /*
       * Adds a visibly hidden `<title>` element with a corresponding `aria-labelledby` tag
       * when provided. Used only when icons stand alone without other context.
       */
      title: { type: String },
      /*
       * Determines which icon will be shown. When leveraging the Icon sprite, the id of the
       * sprite symbol should be provided (ex: `#angle-right`). When using ES6 modules, pass the
       * name of the module (ex: `EsdsIconAngleRight`). See usage examples below.
       */
      use: { type: String },
    };
  }

  constructor() {
    super();
    this.use = EsdsIconEightshapesMark;
  }

  /*
   * @ignore
   */
  createRenderRoot() {
    return this;
  }

  render() {
    return svg`
      <style>
        ${styles}
      </style>
      <svg class="esds-icon esds-icon--${this.size}" xmlns="http://www.w3.org/2000/svg"><span>
        ${this.use.indexOf('#') === 0 ? svg`<use href="${this.use}"/>` : unsafeSVG(this.use)}
      </svg>
      <slot name="just-for-fun"></slot>
    `;
  }
}
