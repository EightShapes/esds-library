import { html, LitElement } from 'lit-element';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import { CSSClassify } from '@eightshapes/css-classify';
import { namespacedStyles } from './esds-button-styles.js';

/**
 * @element esds-button
 *
 * @slot - Default slot, put whatever you want in here.
 * @slot content - Insert content in the named "content" slot.
 *
 */

export class EsdsButton extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'button';
  }

  static get properties() {
    return {
      /*
       * Href for a button link, will switch the element tag to an <a> if an href is provided
       * @type String
       */
      href: { type: String },

      /*
       * Full SVG string of an icon to be injected into component.
       * @type String
       */
      icon: { type: String },

      /*
       * Sets the button size.
       * @type {'small'|'medium'|'large'}
       */
      size: { type: String },

      /*
       * The text on the button. Overridden by the default prop.
       * @type String
       */
      text: { type: String },

      /*
       * The type attribute of the underlying HTML button.
       * @type {'button'|'submit'|'reset'}
       */
      type: { type: String },

      /*
       * Visual style of the button.
       * @type {'primary'|'secondary'|'flat'|'outline'}
       */
      variant: { type: String },
    };
  }

  constructor() {
    super();
    // Prop Defaults
    this.variant = 'primary';
    this.size = 'medium';
    this.type = 'button';
  }

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-button`,
      prefix: `${this.constructor.customElementNamespace}-button`, // will cause `active` to become `my-card--active`
      size: {
        conditional: this.size,
        class: this.size,
      },
      variant: {
        conditional: this.variant,
        class: this.variant,
      },
    };
  }

  renderButtonContent() {
    return html`
      ${this.icon || this.hasSlotableContent('icon')
        ? html`
            <span class="esds-button__icon">
              <s-slot name="icon">
                <esds-icon use="${this.icon}" size="${this.size}"></esds-icon>
              </s-slot>
            </span>
          `
        : ''}
      ${this.text || this.hasSlotableContent('default')
        ? html`
            <span class="esds-button__text"><s-slot>${this.text}</s-slot></span>
          `
        : ''}
    `;
  }

  render() {
    console.log(this.href === undefined);
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      ${this.href !== undefined
        ? html`
            <a class="${this.getClassName()}" href="${this.href}">${this.renderButtonContent()}</a>
          `
        : html`
            <button class="${this.getClassName()}">${this.renderButtonContent()}</button>
          `}
    `;
  }
}
