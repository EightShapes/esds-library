import { html } from 'lit-html';
import '@eightshapes/esds-tabs/dist/esds-tabs-web-component.js';
import '@eightshapes/esds-tab/dist/esds-tab-web-component.js';
import { sinkFor } from './scripts/utilities.js';

// The Web Component Import
// The Custom Element Class
// EsdsTabs.define('esds-v10'); // Define a <esds-v10-tabs> component

export default {
  title: 'Tabs',
};

export const Default = () => {
  return html`
    <esds-tabs>
      <esds-tab>
        <h2 slot="label">Tab 1</h2>
        <p>
          Tab 1 content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab selected>
        <h2 slot="label">Tab 2</h2>
        <p>
          Tab 2 content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Tab 3 <em>With a KICK!</em></h2>
        <p>
          Tab 3 content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
    </esds-tabs>
  `;
};

// export const Scoped = () => {
//   return html`
//     <div class="storybook-grid">
//       <div>
//         <span class="storybook-annotation">&lt;esds-v10-tabs>&lt;/esds-v10-tabs></span>
//         <esds-v10-tabs></esds-v10-tabs>
//       </div>
//     </div>
//   `;
// };

export const Sink = sinkFor(Default);
Sink.parameters = {
  chromatic: { disable: false },
};
