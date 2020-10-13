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
      <esds-tab>
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

export const Nested = () => {
  return html`
    <esds-tabs>
      <esds-tab>
        <h2 slot="label">Tab 1</h2>
        <p>
          Tab 1 content
        </p>
      </esds-tab>
      <esds-tab selected label="Nested Tabs">
        <esds-tabs>
          <esds-tab label="Nested 1">Nested 1 content</esds-tab>
          <esds-tab label="Nested 2">Nested 2 content</esds-tab>
        </esds-tabs>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">
          <esds-icon use="${EsdsIconAlertWarning}" size="small"></esds-icon> Nested Tabs Another Set
        </h2>
        <esds-tabs>
          <esds-tab label="Alpha">Alpha content</esds-tab>
          <esds-tab label="Beta">Beta content</esds-tab>
          <esds-tab label="Gamma">Gamma content</esds-tab>
          <esds-tab>
            <h2 slot="label">Nested 2</h2>
            <p>Nested 2 duplicate label using label slot</p>
          </esds-tab>
        </esds-tabs>
      </esds-tab>
    </esds-tabs>
  `;
};

export const VerticalLayout = () => {
  return html`
    <esds-tabs layout="vertical">
      <esds-tab>
        <h2 slot="label">Tab 1</h2>
        <p>
          Tab 1 content
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Tab 2</h2>
        <p>
          Tab 2 content
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Tab 3</h2>
        <p>
          Tab 3 content
        </p>
      </esds-tab>
      <esds-tab>
        <h2 slot="label">Longer Label</h2>
        <p>
          Longer Content content
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
