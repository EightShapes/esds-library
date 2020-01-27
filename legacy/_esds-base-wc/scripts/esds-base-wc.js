import { LitElement } from '../node_modules/lit-element/lit-element.js';
import { html, directive, render } from '../node_modules/lit-html/lit-html.js';
import { ifDefined } from '../node_modules/lit-html/directives/if-defined.js';
import { unsafeHTML } from '../node_modules/lit-html/directives/unsafe-html.js';

class EsdsBaseWc extends LitElement {
  constructor(componentName = '') {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.renderStylesheet();
  }

  renderStylesheet() {
    if (this.stylesheet) {
      const stylesPath = window.stylesPath || '/styles';
      const fullStylePath = `${stylesPath}/${this.stylesheet}`;
      const styleGlobalVar = `esds${fullStylePath.replace(/\/|\./g, '_')}`;

      if (!window[styleGlobalVar]) {
        window[styleGlobalVar] = true;
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href= fullStylePath;
        document.head.appendChild(styleLink);
      }
    }
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
