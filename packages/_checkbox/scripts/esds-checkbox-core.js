import { EsdsBaseWc, html, ifDefined, unsafeHTML } from './esds-base-wc.js';
import EsdsIcon from './esds-icon.js';

class EsdsCheckbox extends EsdsBaseWc {
  static get properties() {
    return {
      autofocus: {type: Boolean},
      checked: {type: Boolean},
      describedby: {type: String},
      disabled: {type: Boolean},
      form: {type: String},
      id: {type: String, attribute: 'input-id'},
      indeterminate: {type: Boolean},
      invalid: {type: Boolean},
      label: {type: String},
      name: {type: String},
      optionalLabel: {type: Boolean, attribute: 'optional-label'},
      optionalText: {type: String, attribute: 'optional-text'},
      pattern: {type: String},
      required: {type: Boolean},
      requiredLabel: {type: Boolean, attribute: 'required-label'},
      requiredTooltipText: {type: String, attribute: 'required-tooltip-text'},
      readonly: {type: Boolean},
      size: {type: String},
      tabindex: {type: String},
      value: {type: String}
    }
  }

  constructor() {
    super();
    this.defaultClass = 'esds-checkbox-v1';
    this.baseModifierClass = 'esds-checkbox--';
    this.stylesheet = 'esds-checkbox.css';
    this.defaultLabelText = 'Check Me!';

    // Default prop values
    this.autofocus = false;
    this.checked = false;
    this.disabled = false;
    this.indeterminate = false;
    this.invalidMessage = 'The field is invalid';
    this.invalid = false;
    this.label = this.defaultLabelText;
    this.optionalText = '(Optional)';
    this.requiredTooltipText = 'This field is required';
  }

  render(){
     let blockLevelClass = this.defaultClass;
     if (this.size) {
       blockLevelClass += ` ${this.baseModifierClass}${this.size}`;
     }

     let id = this.id;
     if (!id) {
       id = `${this.label.replace(' ', '-').toLowerCase()}--${EsdsBaseWc.generateRandomNumber()}`;
     }

     let optionalLabel = '';
     if (this.optionalLabel) {
       optionalLabel = html`
         <span class="esds-checkbox__label-optional">
             ${this.optionalText}
         </span>
       `;
     }

     let requiredLabel = '';
     if (this.requiredLabel) {
       requiredLabel = html`
         <abbr class="esds-checkbox__label-required-indicator" title="${this.requiredTooltipText}" aria-hidden="true">*</abbr>
         <span class="esds-checkbox__label-required-accessible-description">${this.requiredTooltipText}</span>
       `;
     }

     let label = unsafeHTML(this.label);
     if (this.label === this.defaultLabelText && this.slots.default) {
       label = this.slots.default;
     }

    return html`
      ${this.getStylesheet()}
      <label class="${blockLevelClass}" for="${id}">
        <input  type="checkbox"
                id="${id}"
                class="esds-checkbox__input"
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                tabindex="${ifDefined(this.tabindex)}"
                form="${ifDefined(this.form)}"
                aria-describedby="${ifDefined(this.describedby)}"
                ?checked="${this.checked}"
                ?readonly="${this.readonly}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?autofocus="${this.autofocus}"
                @change=${this.handleChange}/>
          <span class="esds-checkbox__inner">
              <span class="esds-checkbox__visual">
                <esds-icon name="check" class="esds-checkbox__checked-icon"></esds-icon>
                <esds-icon name="minus" class="esds-checkbox__indeterminate-icon"></esds-icon>
              </span>
              <span class="esds-checkbox__label">
                ${label}
                ${optionalLabel}
                ${requiredLabel}
              </span>
          </span>
      </label>
    `;
  }

  handleChange(e) {
    const checkbox = this.querySelector('input');
    this.checked = checkbox.checked;
  }

  updated(changedProperties) {
      const input = this.querySelector('input');
      if (this.invalid) {
        input.setCustomValidity(this.invalidMessage);
      } else {
        input.setCustomValidity('');
      }

      if (this.indeterminate) {
        input.indeterminate = true;
      }
  }
}

export default EsdsCheckbox;
