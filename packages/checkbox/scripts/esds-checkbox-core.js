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
      invalid: {type: Boolean},
      label: {type: String},
      name: {type: String},
      optional: {type: String},
      optionalText: {type: String, attribute: 'optional-text'},
      pattern: {type: String},
      required: {type: Boolean},
      requiredTooltipText: {type: String, attribute: 'required-tooltip-text'},
      readonly: {type: Boolean},
      tabindex: {type: String},
      value: {type: String}
    }
  }

  constructor() {
    super();
    this.defaultClass = 'esds-checkbox-v1';
    this.baseModifierClass = 'esds-checkbox--';
    this.stylesheet = 'esds-checkbox.css';

    // Default prop values
    this.autofocus = false;
    this.checked = false;
    this.disabled = false;
    this.invalidMessage = 'The field is invalid';
    this.invalid = false;
    this.label = 'Check Me!';
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
     if (this.optional) {
       optionalLabel = html`
         <span class="esds-checkbox__label-optional">
             ${this.optionalText}
         </span>
       `;
     }

     let requiredLabel = '';
     if (this.required) {
       requiredLabel = html`
         <abbr class="esds-checkbox__label-required-indicator" title="${this.requiredTooltipText}" aria-hidden="true">*</abbr>
         <span class="esds-checkbox__screenreader-only">${this.requiredTooltipText}</span>
       `;
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
                ?autofocus="${this.autofocus}"/>
          <span class="esds-checkbox__inner">
              <span class="esds-checkbox__visual">
                <esds-icon></esds-icon>
                <esds-icon></esds-icon>
              </span>
              <span class="esds-checkbox__label">
                ${unsafeHTML(this.label)}
                ${optionalLabel}
                ${requiredLabel}
              </span>
          </span>
      </label>
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

export default EsdsCheckbox;

// {% macro form_checkbox(
//             class=false,
//             checked=false,
//             describedby=false,
//             disabled=false,
//             id=false,
//             label='I accept the terms and conditions',
//             name=false,
//             optional=false,
//             required=false,
//             required_tooltip_text="Please check the box.",
//             value=false,
//             icon_path=false,
//             indeterminate=false) %}
//     {% if id == false %}
//         {% set random_number = range(0, 100000) | random %}
//         {% set id = label | replace(' ', '-') | lower + '--' + random_number %}
//     {% endif %}
//     <label class="<%= project.namespace %>-form__checkbox{{ ' ' + class if class }}{{ ' <%= project.namespace %>-form__checkbox--disabled' if disabled }}" for="{{ id }}">
//         <input id="{{ id }}" type="checkbox" class="<%= project.namespace %>-form__checkbox-input"
//             {{ 'checked' if checked }}
//             {{ 'disabled' if disabled }}
//             {% if name %} name="{{ name }}" {% endif %}
//             {% if describedby %} aria-describedby="{{ describedby }}" {% endif %}
//             {% if value %} value="{{ value }}" {% endif %}/>
//         <span class="<%= project.namespace %>-form__checkbox-inner">
//             <span class="<%= project.namespace %>-form__checkbox-visual">
//                 {{ icon(name='check', class='<%= project.namespace %>-form__checkbox-checked-icon', path=icon_path)}}
//                 {{ icon(name='minus', class='<%= project.namespace %>-form__checkbox-indeterminate-icon', path=icon_path)}}
//             </span>
//             <span class="<%= project.namespace %>-form__checkbox-label">
//                 {{ label | safe }}
//                 {%- if optional -%}
//                     <span class="<%= project.namespace %>-form__label-optional">
//                         (Optional)
//                     </span>
//                 {%- endif -%}
//                 {%- if required -%}
//                     <abbr class="<%= project.namespace %>-form__label-required-indicator" title="{{ required_tooltip_text }}" aria-hidden="true">*</abbr>
//                     <span class="<%= project.namespace %>-screenreader-only">Required Field.</span>
//                 {% endif %}
//             </span>
//         </span>
//     </label>
//     {# Indeterminate state can only be set via Javascript: https://css-tricks.com/almanac/selectors/i/indeterminate/ #}
//     {% if indeterminate %}
//         <!-- Something like the following Javascript would be required to set an indeterminate state on a checkbox -->
//         <script>
//             document.getElementById("{{ id }}").indeterminate = true;
//         </script>
//     {% endif %}
// {% endmacro %}
