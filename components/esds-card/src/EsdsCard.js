import { html, LitElement } from 'lit-element';
import styles from './esds-card-styles.js';

export class EsdsCard extends LitElement {
  static get properties() {
    return {
      /*
       * Describe the prop here using JSDoc syntax
       * @type {'small'|'medium'|'large'}
       */
      example: { type: String },
      /*
       * The text displayed in the component
       * @type String
       */
      text: { type: String },
    };
  }

  constructor() {
    super();
    // Prop Defaults
    this.example = 'medium';
    this.text = 'Hello World';
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
      <h1
        class="esds-card
        esds-card--${this.example}"
      >
        ${this.text}
      </h1>
    `;
  }
}
