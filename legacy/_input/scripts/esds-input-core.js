import { EsdsBaseWc, html, ifDefined } from './esds-base-wc.js';

// Extend the LitElement base class
class EsdsInput extends EsdsBaseWc {
  static get properties() {
    return {
      autocapitalize: {type: String},
      autofocus: {type: Boolean},
      describedby: {type: String},
      disabled: {type: Boolean},
      form: {type: String},
      id: {type: String, attribute: 'input-id'},
      invalid: {type: Boolean},
      invalidMessage: {type: String, attribute: 'invalid-message'},
      list: {type: String},
      name: {type: String},
      pattern: {type: String},
      placeholder: {type: String},
      required: {type: Boolean},
      readonly: {type: Boolean},
      spellcheck: {type: String},
      tabindex: {type: String},
      type: {type: String},
      value: {type: String}
    }
  }

  constructor() {
    super();
    this.defaultClass = 'esds-input-v1';
    this.baseModifierClass = 'esds-input--';
    this.stylesheet = 'esds-input.css';

    // Default prop values
    this.autocapitalize = 'off';
    this.autofocus = false;
    this.disabled = false;
    this.invalidMessage = 'The field is invalid';
    this.invalid = false;
    this.spellcheck = 'false';
    this.type = 'text';
  }

  handleKeyup() {
    // Reflect the current input value up to the value property on keyup
    const input = this.querySelector('input');
    this.value = input.value;
  }

  render(){
     let blockLevelClass = this.defaultClass;
     if (this.size) {
       blockLevelClass += ` ${this.baseModifierClass}${this.size}`;
     }

    return html`
      ${this.getStylesheet()}
      <input  id="${ifDefined(this.id)}"
              class="${blockLevelClass}"
              autocapitalize="${ifDefined(this.autocapitalize)}"
              name="${ifDefined(this.name)}"
              placeholder="${ifDefined(this.placeholder)}"
              value="${ifDefined(this.value)}"
              tabindex="${ifDefined(this.tabindex)}"
              form="${ifDefined(this.form)}"
              list="${ifDefined(this.list)}"
              spellcheck="${ifDefined(this.spellcheck)}"
              aria-describedby="${ifDefined(this.describedby)}"
              type="${this.type}"
              ?readonly="${this.readonly}"
              ?required="${this.required}"
              ?disabled="${this.disabled}"
              ?autofocus="${this.autofocus}"
              ?autocomplete="${this.autocomplete}"
              pattern="${ifDefined(this.pattern)}"
              @keyup=${this.handleKeyup}/>
    `;
  }

  updated(changedProperties) {
      const input = this.querySelector('input');
      if (this.invalid) {
        input.setCustomValidity(this.invalidMessage);
      } else {
        input.setCustomValidity('');
      }
  }
}

export default EsdsInput;
