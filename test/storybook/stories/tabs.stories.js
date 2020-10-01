import { html } from 'lit-html';
import '@eightshapes/esds-tabs/dist/esds-tabs-web-component.js';
import '@eightshapes/esds-icon/dist/esds-icon-web-component.js';
import { EsdsIconAlertWarning } from '@eightshapes/esds-icons';
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
        <h2 slot="label">
          <esds-icon use="${EsdsIconAlertWarning}" size="small"></esds-icon> Tab 3
        </h2>
        <p>
          Tab 3 content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
    </esds-tabs>
  `;
};

export const ContentResilience = () => {
  return html`
    <esds-tabs>
      <esds-tab>
        <h2 slot="label">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nihil?
        </h2>
        <p>
          Tab 1 content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab selected>
        <h2 slot="label">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus cupiditate
          sapiente libero, consequatur ducimus placeat reprehenderit mollitia nam voluptatibus
          quidem alias eius blanditiis nemo ab et excepturi enim qui.
        </h2>
        <p>
          Tab 2 content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iusto. Pariatur harum dolor voluptate aliquid sapiente voluptatem, quis, possimus repellendus assumenda illo voluptas! Voluptate earum voluptatibus cum molestiae in natus nobis veniam impedit consequatur alias iste quos rem hic, quasi itaque ipsa ea eligendi non temporibus? Sequi rem quisquam labore!</em></h2>
        <p>
          Tab 3 content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
    </esds-tabs>
    <esds-tabs>
      <esds-tab>
        <h2 slot="label">
          Tab 1
        </h2>
        <p>
          Tab 1 content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab selected>
        <h2 slot="label">
          Tab 2
        </h2>
        <p>
          Tab 2 content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Another Tab</h2>
        <p>
          Another Tab content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ea
          obcaecati tempora vel eius officiis nisi fuga impedit deleniti asperiores!
        </p>
      </esds-tab>
    </esds-tabs>
  `;
};

export const Sink = sinkFor(Default, ContentResilience);
Sink.story = {
  parameters: {
    chromatic: { disable: false },
  },
};
