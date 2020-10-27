import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import { EsdsIconArrowDown } from '@eightshapes/esds-icons';
import '@eightshapes/esds-icon/dist/esds-icon-web-component.js';
import { namespacedStyles } from './esds-list-group-styles.js';

/**
 * @element esds-list-group
 *
 * @slot - Default slot, use <code>&lt;esds-list-item&gt;</code> web components as child elements.
 *
 */

export class EsdsListGroup extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'list-group';
  }

  static get properties() {
    return {
      /*
       * If true, shows selected state on child list items
       * @type Boolean
       */
      selectedIndicators: { type: Boolean, attribute: 'selected-indicators' },

      /*
       * If true, hides child esds-list-item elements
       * @type Boolean
       */
      collapsed: { type: Boolean },

      /*
       * If true, enables a visibility toggle for child esds-list-item elements
       * @type Boolean
       */
      collapsible: { type: Boolean },

      /*
       * Header text displayed above the child esds-list-item elements
       * @type String
       */
      header: { type: String },

      /*
       * If provided the header will include a link to the given href
       * @type String
       */
      href: { type: String },

      /*
       * The size of the list item
       * @type {'small'|'medium'|'large'}
       */
      size: { type: String },
    };
  }

  /*
   * @ignore
   */
  constructor() {
    super();
    this.selectedIndicators = false;
    this.collapsed = false;
    this.collapsible = false;
  }

  /*
   * @ignore
   */
  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-list-group`,
      prefix: `${this.constructor.customElementNamespace}-list-group`,
      selectedIndicators: {
        conditional: this.selectedIndicators,
        class: 'selected-indicators',
      },
      collapsible: this.collapsible,
      collapsed: this.collapsed,
      size: {
        conditional: this.size,
        class: this.size,
      },
    };
  }

  collapsibleClick() {
    this.collapsed = !this.collapsed;
  }

  renderHeader() {
    if (this.collapsible) {
      return html`
        <li class="esds-list-group__header" @click="${this.collapsibleClick}">
          <span class="esds-list-group__header-inner esds-list-group__header-inner--collapsible">
            <span class="esds-list-group__header-text">
              ${this.header}
            </span>
            <esds-icon use="${EsdsIconArrowDown}" size="small"></esds-icon>
          </span>
        </li>
      `;
    }
    if (this.href) {
      return html`
        <esds-list-item href="${this.href}">${this.header}</esds-list-item>
      `;
    }
    return html`
      <li class="esds-list-group__header">
        <span class="esds-list-group__header-inner">
          <span class="esds-list-group__header-text">${this.header}</span>
        </span>
      </li>
    `;
  }

  renderListItems() {
    if (this.collapsible) {
      return html`
        <li class="esds-list-group__collapsible-item">
          <ul class="esds-list-group__collapsible-list">
            <s-slot></s-slot>
          </ul>
        </li>
      `;
    }
    if (this.header) {
      return html`
        <li class="esds-list-group__child-list-item">
          <ul class="esds-list-group__child-list">
            <s-slot></s-slot>
          </ul>
        </li>
      `;
    }
    return html`
      <s-slot></s-slot>
    `;
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <ul class="${this.getClassName()}">
        ${this.header
          ? html`
              ${this.renderHeader()}
            `
          : ''}
        ${this.renderListItems()}
      </ul>
    `;
  }
}
