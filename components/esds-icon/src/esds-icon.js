import { svg, css, LitElement } from 'lit-element';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import { EsdsIconEightshapesMark } from '@eightshapes/esds-icons';
import styles from './esds-icon-styles.js';

export class EsdsIcon extends LitElement {
  static get styles() {
    return css`
      .esds-icon {
        height: 100px;
        width: 100px;
        fill: black;
      }
    `;
  }

  static get properties() {
    return {
      size: { type: String },
      use: { type: String },
    };
  }

  constructor() {
    super();
    this.use = EsdsIconEightshapesMark;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return svg`
      <style>
        ${styles}
      </style>
      <svg class="esds-icon esds-icon--${
        this.size
      }" xmlns="http://www.w3.org/2000/svg">
        ${
          this.use.indexOf('#') === 0
            ? svg`<use href="${this.use}"/>`
            : unsafeSVG(this.use)
        }
      </svg>
    `;
  }
}
