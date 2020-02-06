import { svg, css, LitElement } from 'lit-element';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import { EsdsIconEightshapesMark } from '@eightshapes/esds-icons';

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
        .esds-icon {
          height: 24px;
          width: 24px;
          fill: black;
        }

        .esds-icon svg {
          display: inline-block;
          vertical-align: middle;
          height: 100%;
          width: 100%;
        }

        .esds-icon--large {
          height: 40px;
          width: 40px;
        }
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
