import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-list-group/dist/esds-list-group-web-component.js';
// The Custom Element Class
import { EsdsIconPencil, EsdsIconAlertWarning } from '@eightshapes/esds-icons';
import { sinkFor } from './scripts/utilities.js';

// import '@eightshapes/esds-list-group/dist/esds-list-group-web-component.js';
// EsdsListGroup.define('esds-v10'); // Define a <esds-v10-list-group> component

export default {
  title: 'List Group',
};

export const Default = () => {
  return html`
    <div style="width: 250px;">
      <esds-list-group>
        <esds-list-item href="/">Home</esds-list-item>
        <esds-list-item href="/getting-started">Getting started</esds-list-item>
        <esds-list-item href="/release-history">Release history</esds-list-item>
        <esds-list-item>
          <esds-list-group header="Visual Style" collapsible collapsed>
            <esds-list-item href="/color">Color</esds-list-item>
            <esds-list-item href="/tokens">Tokens</esds-list-item>
          </esds-list-group>
        </esds-list-item>
        <esds-list-item>
          <esds-list-group header="UI Components" collapsible>
            <esds-list-item href="/banner">Banner</esds-list-item>
            <esds-list-item href="/breadcrumbs">Breadcrumbs</esds-list-item>
            <esds-list-item href="/button">Button</esds-list-item>
            <esds-list-item href="/card" active>
              Card
            </esds-list-item>
          </esds-list-group>
        </esds-list-item>
        <esds-list-item href="/contribute" size="small">
          <esds-icon size="small" use="${EsdsIconPencil}" slot="icon"></esds-icon>
          Contribute
        </esds-list-item>
        <esds-list-item href="/submit-defect" size="small">
          <esds-icon size="small" use="${EsdsIconAlertWarning}" slot="icon"></esds-icon>
          Submit a defect
        </esds-list-item>
      </esds-list-group>
    </div>
  `;
};

export const Scoped = () => {
  return html`
    <div class="storybook-grid">
      <div>
        <span class="storybook-annotation">&lt;esds-v10-list-group>&lt;/esds-v10-list-group></span>
        <esds-v10-list-group></esds-v10-list-group>
      </div>
    </div>
  `;
};

export const Sink = sinkFor(Default, Scoped);
Sink.story = { parameters: { chromatic: { disable: false } } };
