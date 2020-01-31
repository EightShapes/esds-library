import { html, svg, css, LitElement } from 'lit-element';
import {unsafeSVG} from 'lit-html/directives/unsafe-svg.js';

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
    this.use = `<path d="M7.642 18.404a.825.825 0 0 1 0 1.168L4.604 22.61a.824.824 0 0 1-1.17 0L.398 19.572a.825.825 0 0 1 0-1.168l3.036-3.039a.835.835 0 0 1 1.17 0l3.038 3.039zm4.997 4.999a.817.817 0 0 1 0 1.161l-3.041 3.043a.826.826 0 0 1-1.166 0l-3.039-3.043a.817.817 0 0 1 0-1.161l3.039-3.043a.828.828 0 0 1 1.166 0l3.041 3.043zm-3.047-5.78a.823.823 0 0 1-1.165 0l-3.04-3.042a.821.821 0 0 1 0-1.165l3.04-3.042a.821.821 0 0 1 1.165 0l3.042 3.042a.823.823 0 0 1 0 1.165l-3.042 3.042zm-4.986-4.989a.825.825 0 0 1-1.168 0L.399 9.595a.825.825 0 0 1 0-1.168l3.039-3.039a.825.825 0 0 1 1.168 0l3.039 3.039a.825.825 0 0 1 0 1.168l-3.039 3.039zM19.58 27.607a.83.83 0 0 1-1.169 0l-8.029-8.029a.827.827 0 0 1 0-1.17l3.042-3.04a.827.827 0 0 1 1.165 0l8.031 8.03a.82.82 0 0 1 0 1.166l-3.04 3.043zm4.986-4.997a.82.82 0 0 1-1.166 0L10.377 9.593a.825.825 0 0 1 0-1.168l3.041-3.039a.825.825 0 0 1 1.168 0l13.019 13.018a.83.83 0 0 1 0 1.168l-3.039 3.038zM9.594 7.645a.821.821 0 0 1-1.165 0L5.391 4.604a.823.823 0 0 1 0-1.166L8.43.397a.821.821 0 0 1 1.165 0l3.042 3.041a.823.823 0 0 1 0 1.166L9.594 7.645zm14.972 4.986a.823.823 0 0 1-1.166 0l-8.032-8.03a.824.824 0 0 1 0-1.167L18.406.395a.826.826 0 0 1 1.169 0l8.029 8.03a.83.83 0 0 1 0 1.168l-3.038 3.038z"/>`;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    console.log(window.document.cheese);
    return svg`
      <style>
        .esds-icon {
          height: 24px;
          width: 24px;
          fill: black;
        }

        .esds-icon--large {
          height: 40px;
          width: 40px;
        }
      </style>
      <svg class="esds-icon esds-icon--${this.size}" xmlns="http://www.w3.org/2000/svg">
        ${this.use.indexOf('#') === 0 ? svg`<use href="${this.use}"/>` : unsafeSVG(this.use)}
      </svg>
    `;
  }
}
