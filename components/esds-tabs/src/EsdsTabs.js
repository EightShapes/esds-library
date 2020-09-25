import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import { namespacedStyles } from './esds-tabs-styles.js';

/**
 * @element esds-tabs
 *
 * @slot - Default slot, insert <esds-tab> components in the default slot
 *
 */

export class EsdsTabs extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'tabs';
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
      <ul role="tablist" class="${this.getClassName()}">
        <s-slot></s-slot>
      </ul>
    `;
  }
}
