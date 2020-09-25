import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import { namespacedStyles } from './esds-tab-styles.js';

/**
 * @element esds-tab
 *
 * @slot - Default slot, put whatever you want in here.
 * @slot content - Insert content in the named "content" slot.
 *
 */

export class EsdsTab extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'tab';
  }

  static get properties() {
    return {};
  }

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-tab`,
      prefix: `${this.constructor.customElementNamespace}-tab`, // will cause `active` to become `my-card--active`
    };
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <li role="presentation" class="${this.getClassName()}">
        <s-slot></s-slot>
      </li>
    `;
  }
}
