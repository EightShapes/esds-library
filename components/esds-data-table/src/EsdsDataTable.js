import { html, LitElement } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { namespacedStyles } from './esds-data-table-styles.js';

/**
 * @element esds-data-table
 *
 */

export class EsdsDataTable extends Scopify(CSSClassify(LitElement), 'esds') {
  static get customElementName() {
    return 'data-table';
  }

  static get properties() {
    return {
      /*
       * Array containing data table header strings or objects
       * @type Array
       */
      headers: { type: Array },

      /*
       * An array of arrays representing the data for each row and cell
       * @type Array
       */
      rows: { type: Array },
    };
  }

  /*
   * @ignore
   */
  createRenderRoot() {
    return this; // Prevents lit-element from rendering in shadowDOM
  }

  /*
   * @ignore
   */
  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-data-table`,
      prefix: `${this.constructor.customElementNamespace}-data-table`, // will cause `active` to become `my-card--active`
    };
  }

  renderHeaders() {
    if (this.headers) {
      return html`
        <thead class="esds-data-table__head">
          <tr class="esds-data-table__head-tr">
            ${this.headers.map(h => {
              let headerText = h;
              if (typeof h === 'object') {
                headerText = h.text;
              }
              return html`
                <th class="esds-data-table__th">${headerText}</th>
              `;
            })}
          </tr>
        </thead>
      `;
    }
    return '';
  }

  renderRows() {
    if (this.rows) {
      return html`
        ${this.rows.map(r => {
          return html`
            <tr class="esds-data-table__tr">
              ${r.map((c, index) => {
                const header = this.headers[index];
                if (typeof header === 'object' && header.code === true) {
                  return html`
                    <td class="esds-data-table__td"><code>${unsafeHTML(c)}</code></td>
                  `;
                }

                return html`
                  <td class="esds-data-table__td">${unsafeHTML(c)}</td>
                `;
              })}
            </tr>
          `;
        })}
      `;
    }
    return '';
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <table class="${this.getClassName()}">
        ${this.renderHeaders()} ${this.renderRows()}
      </table>
    `;
  }
}
