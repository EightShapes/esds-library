import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';

/**
 * @element esds-list-item
 *
 * @slot - Default slot, put whatever you want in here.
 * @slot content - Insert content in the named "content" slot.
 *
 */

export class EsdsListItem extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'list-item';
  }

  static get properties() {
    return {
      /*
       * If provided the list item will include a link to the given href
       * @type String
       */
      href: { type: String },

      /*
       * If true, indents the list group to show hierarchy
       * @type Boolean
       */
      nested: { type: Boolean },

      /*
       * The size of the list item
       * @type {'small'|'medium'|'large'}
       */
      size: { type: String },

      /*
       * If true, will include a selected indicator to the left of the list item
       * @type String
       */
      selected: { type: Boolean },

      /*
       * The text as the list item. The default slot overrides this text
       * @type String
       */
      text: { type: String },
    };
  }

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-list-item`,
      nested: this.nested,
      prefix: `${this.constructor.customElementNamespace}-list-item`, // will cause `active` to become `my-card--active`
      size: {
        conditional: this.size,
        class: this.size,
      },
      selected: this.selected,
    };
  }

  renderIcon() {
    if (this.hasSlotableContent('icon')) {
      return html`
        <span class="esds-list-item__icon"><s-slot name="icon"></s-slot></span>
      `;
    }
    return html`
      <s-slot name="icon"></s-slot>
    `;
  }

  render() {
    return html`
      <li class="${this.getClassName()}">
        ${this.href
          ? html`
              <a class="esds-list-item__link" href="${this.href}"
                >${this.renderIcon()}<s-slot>${this.text}</s-slot></a
              >
            `
          : html`
              ${this.renderIcon()}<s-slot>${this.text}</s-slot>
            `}
      </li>
    `;
  }
}
