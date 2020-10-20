import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-data-table/dist/esds-data-table-web-component.js';
// The Custom Element Class
import { sinkFor } from './scripts/utilities.js';

/* Removing scoped demos for now */
// import '@eightshapes/esds-data-table/dist/esds-data-table-web-component.js';
// EsdsDataTable.define('esds-v10'); // Define a <esds-v10-data-table> component

export default {
  title: 'Data Table',
};

/* eslint-disable */
export const Default = () => {
  return html`
    <esds-data-table
      headers='["Name", "Email", "Phone"]'
      rows='[["Kevin Powell", "kevin@example.com", "555-555-5555"],["Nathan Curtis", "nathan@examples.com", "555-555-1234"]]'
    ></esds-data-table>
  `;
};

export const CodeHighlighting = () => {
  return html`
    <esds-data-table
      headers='[{"text":"Property", "code": true}, "Description"]'
      rows='[["align", "Array containing data table header strings or objects."],["rows", "An array of arrays representing the data for each row and cell. Corresponds with <code>headers</code>."]]'
    ></esds-data-table>
  `;
};

export const ContentResilience = () => {
  return html`
    <esds-data-table
      headers='[{"text":"Lorem ipsum dolor sanctum", "code": true}, "Lorem ipsum dolor sanctum", "Lorem ipsum dolor sanctum", "Lorem ipsum dolor sanctum", "Lorem ipsum dolor sanctum", "Lorem ipsum dolor sanctum", "Lorem ipsum dolor sanctum", "Lorem ipsum dolor sanctum", "Lorem ipsum dolor sanctum", "Lorem ipsum dolor sanctum", "Lorem ipsum dolor sanctum"]'
      rows='[["lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum"],
      ["lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum"],
      ["lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum"],
      ["lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum"],
      ["lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum"],
      ["lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum"],
      ["lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum"],
      ["lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum"],
      ["lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum"],
      ["lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum"],
      ["lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum", "lorem ipsum dolor sanctum"]]'
    ></esds-data-table>
  `;
};
/* eslint-enable */

/* Removing scoped demos for now */
// export const Scoped = () => {
// return html`<div class="storybook-grid">
//   <div>
//     <span
//       class="storybook-annotation">&lt;esds-v10-data-table>&lt;/esds-v10-data-table></span>
//     <esds-v10-data-table></esds-v10-data-table>
//   </div>
// </div>`;
// };

export const Sink = sinkFor(Default, CodeHighlighting, ContentResilience);
Sink.story = { parameters: { chromatic: { disable: false } } };
