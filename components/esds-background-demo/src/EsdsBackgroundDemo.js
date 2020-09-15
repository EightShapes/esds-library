// TODO: Migrate this entire component to esds-doc repo
import { html, LitElement } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { Slotify } from '@eightshapes/slotify';
import styles from './esds-background-demo-styles.js';

/**
 * @element esds-background-demo
 *
 * @slot - Default slot, content placed here will be duplicated across all background columns.
 *
 */

export class EsdsBackgroundDemo extends Slotify(LitElement) {
  static get properties() {
    return {
      /*
       * The text displayed in the component
       * @type String
       */
      text: { type: String },
    };
  }

  constructor() {
    super();
    // Prop Defaults
    this.text = 'Hello World';
  }

  render() {
    const backgrounds = ['light-primary', 'light-secondary', 'dark-primary', 'dark-secondary'];
    const slotableContent = this.getSlotableContent()
      .map(n => n.outerHTML)
      .join('');

    return html`
      <style>
        ${styles}
      </style>
      <div class="esds-background-demo">
        ${backgrounds.map(
          bg => html`
            <div class="esds-background-demo__column esds-container--${bg}">
              ${unsafeHTML(slotableContent)}
            </div>
          `,
        )}
        <div class="esds-background-demo__hidden-slot-content">
          <s-slot></s-slot>
        </div>
      </div>
    `;
  }
}
