import { LitElement, html, render, directive, ifDefined, unsafeHTML } from './lit-exports-base.js';

class EsdsBaseWc extends LitElement {
  constructor() {
    super();
    this.cheese = 'SPELL IT RIGHT';
  }
}

export { EsdsBaseWc, LitElement, render, html, directive, ifDefined, unsafeHTML };
