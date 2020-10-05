import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-list-group/dist/esds-list-group-web-component.js';
import '@eightshapes/esds-background-demo/dist/esds-background-demo-web-component.js'; // The Web Component Import

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
    <div class="storybook-grid">
      <div>
        <span class="storybook-annotation">Default</span>
        <esds-list-group>
          <esds-list-item>Alpha</esds-list-item>
          <esds-list-item>Beta</esds-list-item>
          <esds-list-item>Gamma</esds-list-item>
        </esds-list-group>
      </div>
      <div>
        <span class="storybook-annotation">Small</span>
        <esds-list-group size="small">
          <esds-list-item>Alpha</esds-list-item>
          <esds-list-item>Beta</esds-list-item>
          <esds-list-item>Gamma</esds-list-item>
        </esds-list-group>
      </div>
    </div>
  `;
};

export const DocSiteNav = () => {
  return html`
    <esds-background-demo>
      <div style="width: 250px">
        <esds-list-group>
          <esds-list-item href="/">Home</esds-list-item>
          <esds-list-item href="/getting-started">Getting started</esds-list-item>
          <esds-list-item href="/release-history">Release history</esds-list-item>
          <esds-list-item>
            <esds-list-group header="Visual Style" collapsible>
              <esds-list-item href="/color">Color</esds-list-item>
              <esds-list-item href="/tokens">Tokens</esds-list-item>
            </esds-list-group>
          </esds-list-item>
          <esds-list-item>
            <esds-list-group header="UI Components" collapsible>
              <esds-list-item href="/banner">Banner</esds-list-item>
              <esds-list-item href="/breadcrumbs">Breadcrumbs</esds-list-item>
              <esds-list-item href="/button">Button</esds-list-item>
              <esds-list-item href="/card" selected>
                Card
              </esds-list-item>
            </esds-list-group>
          </esds-list-item>
          <esds-list-item href="/contribute" size="small">
            <esds-icon use="${EsdsIconPencil}" slot="icon"></esds-icon>
            Contribute
          </esds-list-item>
          <esds-list-item href="/submit-defect" size="small">
            <esds-icon use="${EsdsIconAlertWarning}" slot="icon"></esds-icon>
            Submit a defect
          </esds-list-item>
        </esds-list-group>
      </div>
    </esds-background-demo>
  `;
};

export const DocSiteLocalNav = () => {
  return html`
    <div style="width: 250px;">
      <esds-list-group size="small" header="Contents" selected-indicators>
        <esds-list-item>
          <esds-list-group header="Variations" href="#Variations">
            <esds-list-item href="#Default" nested>Default</esds-list-item>
            <esds-list-item href="#Linked" nested>Linked</esds-list-item>
          </esds-list-group>
        </esds-list-item>
        <esds-list-item>
          <esds-list-group header="Additional Elements" href="#Additional-Elements">
            <esds-list-item href="#Content" nested selected>Content</esds-list-item>
            <esds-list-item href="#Actions" nested>Actions</esds-list-item>
          </esds-list-group>
        </esds-list-item>
        <esds-list-item>
          <esds-list-group header="Sizes" href="#Sizes">
            <esds-list-item href="#Small" nested>Small</esds-list-item>
            <esds-list-item href="#Medium" nested>Medium</esds-list-item>
            <esds-list-item href="#Large" nested>Large</esds-list-item>
          </esds-list-group>
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

export const Sink = sinkFor(Default, DocSiteNav, DocSiteLocalNav, Scoped);
Sink.story = { parameters: { chromatic: { disable: false } } };
