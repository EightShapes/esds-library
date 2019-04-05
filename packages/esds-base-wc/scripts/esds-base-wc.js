// TODO, loading race condition prevents this from working dynamically

// Inject shadyDOM polyfill if it doesn't already exist
// if (!document.getElementById('esds-shady-dom-polyfill')) {
//   const forcePolyfillScript = document.createElement('script');
//   forcePolyfillScript.textContent = 'window.ShadyDOM = { force: true };';
//   document.head.appendChild(forcePolyfillScript);
//
//   const shadowDOMPolyfill = document.createElement('script');
//   shadowDOMPolyfill.id = 'esds-shady-dom-polyfill';
//   shadowDOMPolyfill.src = '/scripts/shadydom.min.js';
//   document.head.appendChild(shadowDOMPolyfill);
// }

// import "@babel/polyfill";
import { LitElement } from '../node_modules/lit-element/lit-element.js';
import { html, directive, render } from '../node_modules/lit-html/lit-html.js';
import { ifDefined } from '../node_modules/lit-html/directives/if-defined.js';
import { unsafeHTML } from '../node_modules/lit-html/directives/unsafe-html.js';

class EsdsBaseWc extends LitElement {
  constructor(componentName = '') {
    super();
    // this.slotsExtracted = false;
    // if (!this.slotsExtracted) {
    //   this.slots = this.extractSlotContent();
    // }
  }

  getStylesheet() {
    const stylesPath = window.stylesPath || '/styles';
    return html`<link rel="stylesheet" href="${stylesPath}/${this.stylesheet}" />`;
  }

  render() {
    return html`<h1>You have to override me. I'm in the base EsdsBaseWc class!</h1>`;
  }

  // Util methods
  static generateRandomNumber(max = 100000000) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

export { EsdsBaseWc, LitElement, render, html, directive, ifDefined, unsafeHTML };
