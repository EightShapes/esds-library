import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';

/**
 * @element esds-tab
 *
 * @slot - Default slot, used for the tab's content.
 * @slot - label - The tab's label, use for complex HTML labels, or for progressive enhancement.
 *
 */

export class EsdsTab extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'tab';
  }

  static get properties() {
    return {
      /*
       * Accessibly binds the panel to the tab label
       * @type String
       */
      ariaLabelledby: { type: String, attribute: 'aria-labelledby' },

      /*
       * Relative Href that links to a corresponding tab panel's id
       * @type String
       */
      href: { type: String },

      /*
       * The label for the tab's visibility trigger, overridden by the label slot
       * @type String
       */
      label: { type: String },

      /*
       * Used to link the label to the panel in HTML
       * @type String
       */
      panelId: { type: String, attribute: 'panel-id', reflect: true },

      /*
       * Determines the visibility of the tab
       * @type Boolean
       */
      selected: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.selected = false;
  }

  firstUpdated() {
    this.setLabelFromSlot(); // Trigger this if it was undefined on slotchange
  }

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-tab`,
      prefix: `${this.constructor.customElementNamespace}-tab`, // will cause `active` to become `my-card--active`
      selected: 'selected',
    };
  }

  setLabelFromSlot() {
    // If the label was passed in as a slotted value, set the label property to reflect it
    const slottedLabel = this.getAssignedSlotContent('label');
    if (slottedLabel !== undefined && slottedLabel.length > 0) {
      this.label = Array.from(slottedLabel[0].childNodes)
        .filter(n => n.nodeType === Node.TEXT_NODE)
        .map(n => n.textContent)
        .filter(text => text.trim().length > 0)
        .join('-'); // Get only text nodes, not all HTML, cause that will include SVG's potentially
      // After the slotted value has been copied to the prop, clear the slot
      this.querySelector('s-slot[name="label"] s-assigned-wrapper').innerHTML = '';
    }
  }

  render() {
    const label = this.panelId ? '' : this.label; // Show the tab label only if the label and panel haven't been linked up by the parent esds-tabs component
    return html`
      <section
        class="${this.getClassName()}"
        id="${this.panelId}"
        aria-labelledby="${this.ariaLabelledby}"
        ?hidden="${!this.selected}"
      >
        <s-slot name="label" @slotchange="${this.setLabelFromSlot}">${label}</s-slot>
        <s-slot></s-slot>
      </section>
    `;
  }
}
