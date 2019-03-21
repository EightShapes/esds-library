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
      id: {type: String},
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
              type="${this.type}"
              ?readonly="${this.readonly}"
              ?required="${this.required}"
              ?disabled="${this.disabled}"
              ?autofocus="${this.autofocus}"
              ?autocomplete="${this.autocomplete}"
              pattern="${ifDefined(this.pattern)}"/>
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


// {% macro form_input(
//             class=false,
//             describedby=false,
//             disabled=false,
//             id=false,
//             name=false,
//             placeholder=false,
//             type='text',
//             value=false) %}
//     <input
//     class="<%= project.namespace %>-form__input{{ ' ' + class if class }}"
//     type="{{ type }}"
//     {% if id %} id="{{ id }}" {% endif %}
//     {% if name %} name="{{ name }}" {% endif %}
//     {% if value %} value="{{ value }}" {% endif %}
//     {{ 'disabled' if disabled }}
//     {% if placeholder %} placeholder="{{ placeholder }}" {% endif %}
//     {% if describedby %} aria-describedby="{{describedby}}" {% endif %}>
// {% endmacro %}
