import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import { namespacedStyles } from './esds-prose-styles.js';

/**
 * @element esds-prose
 *
 * @slot - Default slot, put whatever you want in here.
 *
 */

export class EsdsProse extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'prose';
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

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-prose`,
      prefix: `${this.constructor.customElementNamespace}-prose`, // will cause `active` to become `my-card--active`
    };
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <div class="${this.getClassName()}">
        <s-slot></s-slot>
      </div>
    `;
  }
}
