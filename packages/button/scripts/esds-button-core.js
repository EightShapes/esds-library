import { LitElement, html, ifDefined } from './esds-base-wc.js';

// Extend the LitElement base class
class EsdsButton extends LitElement {
  static get properties() {
    return {
      disabled: {type: Boolean},
      element: {type: String},
      href: {type: String},
      iconLeft: {type: String, attribute: 'icon-left'},
      iconLeftTitle: {type: String, attribute: 'icon-left-title'},
      iconRight: {type: String, attribute: 'icon-right'},
      iconRightTitle: {type: String, attribute: 'icon-right-title'},
      size: {type: String},
      tag: { type: String },
      text: { type: String },
      type: { type: String },
      variant: { type: String }
    }
  }

  getStylesheet() {
    const stylesPath = window.stylesPath || '/styles';
    return `${stylesPath}/${this.stylesheet}`;
  }

  constructor() {
    super();
    this.defaultButtonText = 'Button Text';
    this.defaultClass = 'esds-button-v1';
    this.baseModifierClass = 'esds-button--';
    this.disabled = false;
    this.element = 'button';
    this.text = this.defaultButtonText;
    this.type = 'button';
    this.stylesheet = 'esds-button.css';
    this.slotsExtracted = false;
    if (!this.slotsExtracted) {
      this.slots = this.extractSlotContent();
    }
  }
  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */

  createRenderRoot() {
    return this;
  }

  extractSlotContent() {
    // Iterate over the component on connectedCallback and extract all named slotables
    const slots = this.slots || {};
    const namedSlots = this.querySelectorAll("[slot]");
    if (namedSlots) {
      namedSlots.forEach(n => {
        slots[n.getAttribute('slot')] = n;
        n.parentNode.removeChild(n);
      });
    }

    // If there are any remaining child nodes, copy them into a `default` slotable
    const remainingNodes = Array.from(this.childNodes).slice(); // make a copy of the childNodes, cause the this.childNodes reference will change after the component renders
    if (remainingNodes.length > 0) {
      slots['default'] = remainingNodes;
    }
    return slots;
  }

  setHostClass() {
    // const classBase = 'esds-button--';
    // const addClasses = [this.defaultClass];
    // const removeClasses = [];
    //
    // if (this.size) {
    //   addClasses.push(`${classBase}${this.size}`);
    // }
    //
    // addClasses.forEach((c) => this.classList.add(c));
    // removeClasses.forEach((c) => this.classList.remove(c));

  }

  render(){
    // this.setHostClass();
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
     let blockLevelClass = this.defaultClass;
     if (this.size) {
       blockLevelClass += ` ${this.baseModifierClass}${this.size}`;
     }
     if (this.variant) {
       blockLevelClass += ` ${this.baseModifierClass}${this.variant}`;
     }
     if (this.disabled) {
       blockLevelClass += ` ${this.baseModifierClass}disabled`;
     }

     if (this.href) {
       this.element = 'a';
     }

     if (this.text === this.defaultButtonText && (this.iconLeft || this.iconRight)) {
       this.text = false;
     }

     if ((!this.text || this.text === this.defaultButtonText) && this.slots.default) {
       this.text = this.slots.default;
     }

     let component;
     let iconLeft;
     let iconRight;
     let text;

     if (this.iconLeft) {
       iconLeft = html`<esds-icon class="esds-button__icon" name="${this.iconLeft}" title="${ifDefined(this.iconLeftTitle)}"></esds-icon>`;
     }

     if (this.iconRight) {
       iconRight = html`<esds-icon class="esds-button__icon" name="${this.iconRight}" title="${ifDefined(this.iconRightTitle)}"></esds-icon>`;
     }

     if ((this.iconRight || this.iconLeft) && this.text) {
       text = html`<span class="esds-button__label">${this.text}</span>`;
     } else if (this.text) {
       text = this.text;
     }

     if (this.element === 'button') {
       component = html`
       <button class="${blockLevelClass}" type="${this.type}" ?disabled=${this.disabled}>
         ${iconLeft}
         ${text}
         ${iconRight}
       </button>`;
     } else if (this.element === 'a') {
       component = html`
       <a class="${blockLevelClass}" href="${this.href}">
         ${iconLeft}
         ${text}
         ${iconRight}
       </a>`;
     }

    return html`
      <link rel="stylesheet" href="${this.getStylesheet()}"/>
      ${component}
    `;
  }
}

export default EsdsButton;
