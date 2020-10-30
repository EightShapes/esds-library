import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import { namespacedStyles } from './esds-card-styles.js';

/**
 * @element esds-card
 */

export class EsdsCard extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'card';
  }

  static get properties() {
    return {
      example: { type: String },
      text: { type: String },
    };
  }

  constructor() {
    super();
    // Prop Defaults
    this.example = 'medium';
    this.text = 'Hello World';
  }

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-card`,
      prefix: `${this.constructor.customElementNamespace}-card`, // will cause `active` to become `my-card--active`
    };
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <h1 class="${this.getClassName()}">
        ${this.text}
      </h1>
    `;
  }
}
