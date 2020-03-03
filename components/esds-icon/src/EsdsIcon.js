import { svg, LitElement } from 'lit-element';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import { ifDefined } from 'lit-html/directives/if-defined';
import { EsdsIconStar } from '@eightshapes/esds-icons';
import styles from './esds-icon-styles.js';

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

  /*
   * Used to link the <title> and <svg> elements via a unique aria-labelledby -> id value
   */
  static get titleId() {
    return `esds-icon-${Date.now()}${Math.random()
      .toString()
      .slice(2)}`;
  }

  constructor() {
    super();
    this.use = EsdsIconStar;
    this.size = 'medium';
  }

  /*
   * @ignore
   */
  createRenderRoot() {
    return this; // Prevents lit-element from rendering in shadowDOM
  }

  /*
   * Private
   * If the title prop is set, render a <title> element within the SVG which is linked via the aria-labelledby attribute to the parent <svg>
   */
  _renderTitle(titleId) {
    return svg`${this.title ? svg`<title id="${titleId}">${this.title}</title>` : ''}`;
  }

  /*
   * Private
   * If the use prop contains a '#', a sprite sheet and symbol reference is being used. Add a <use> element to reference the symbol.
   * If the use prop does not contain a '#', a raw SVG string is being used. Render it directly as unsafeSVG content
   */
  _renderUse() {
    return svg`${
      // Using indexOf instead of includes for IE11 compatibility
      this.use.indexOf('#') !== -1 ? svg`<use href="${this.use}"/>` : unsafeSVG(this.use)
    }`;
  }

  render() {
    const titleId = this.title ? this.constructor.titleId : undefined;

    return svg`
      <style>
        ${styles}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="esds-icon esds-icon--${this.size}"
        aria-labelledby="${ifDefined(titleId)}"
        aria-hidden="${this.title ? 'false' : 'true'}"
        role="${this.title ? 'img' : 'presentation'}"
        >
        ${this._renderTitle(titleId)}
        ${this._renderUse()}
      </svg>
    `;
  }
}
