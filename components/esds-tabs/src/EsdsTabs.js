import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import { namespacedStyles } from './esds-tabs-styles.js';

/**
 * @element esds-tabs
 *
 * @slot - Default slot, put whatever you want in here.
 * @slot content - Insert content in the named "content" slot.
 *
 */

export class EsdsTabs extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'tabs';
  }

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

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-tabs`,
      prefix: `${this.constructor.customElementNamespace}-tabs`, // will cause `active` to become `my-card--active`
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
      <s-slot></s-slot>
      <s-slot name="content"></s-slot>
    `;
  }
}
