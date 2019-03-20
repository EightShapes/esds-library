import { LitElement, html, render, directive, ifDefined, unsafeHTML } from './lit-exports-base.js';

class EsdsBaseWc extends LitElement {
  constructor() {
    super();
    this.slotsExtracted = false;
    if (!this.slotsExtracted) {
      this.slots = this.extractSlotContent();
    }
  }

  getStylesheet() {
    const stylesPath = window.stylesPath || '/styles';
    return html`<link rel="stylesheet" href="${stylesPath}/${this.stylesheet}"/>`;
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

  // Don't use ShadowDOM
  createRenderRoot() {
    return this;
  }
}

export { EsdsBaseWc, LitElement, render, html, directive, ifDefined, unsafeHTML };
