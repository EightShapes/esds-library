import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-list-group/dist/esds-list-group-web-component.js';
import '@eightshapes/esds-background-demo/dist/esds-background-demo-web-component.js'; // The Web Component Import

// The Custom Element Class
import { EsdsIconPencil, EsdsIconAlertWarning } from '@eightshapes/esds-icons';
import { sinkFor } from './scripts/utilities.js';
import './styles/list-group.stories.scss'; // Demo styles to show component states

// import '@eightshapes/esds-list-group/dist/esds-list-group-web-component.js';
// EsdsListGroup.define('esds-v10'); // Define a <esds-v10-list-group> component

export default {
  title: 'Design System/List Group',
};

export const ListItemStates = () => {
  return html`
    <esds-background-demo>
      <div style="width: 250px">
        <esds-list-group>
          <esds-list-item href="#testing">Label</esds-list-item>
          <esds-list-item href="#testing" class="storybook-esds-list-item-state--hover"
            >Label</esds-list-item
          >
          <esds-list-item href="#testing" class="storybook-esds-list-item-state--active"
            >Label</esds-list-item
          >
          <esds-list-item href="#testing" class="storybook-esds-list-item-state--focus"
            >Label</esds-list-item
          >
          <esds-list-item href="#testing" selected>Label</esds-list-item>
        </esds-list-group>
      </div>
    </esds-background-demo>
  `;
};

export const GroupHeader = () => {
  return html`
    <esds-background-demo>
      <div style="width: 250px">
        <esds-list-group header="Components">
          <esds-list-item href="#testing">Button</esds-list-item>
          <esds-list-item href="#testing">Card</esds-list-item>
          <esds-list-item href="#testing">List Group</esds-list-item>
          <esds-list-item href="#testing">Thumbnail</esds-list-item>
        </esds-list-group>
      </div>
    </esds-background-demo>
  `;
};

export const CollapsibleGroups = () => {
  return html`
    <esds-background-demo>
      <div style="width: 250px">
        <esds-list-group header="Getting Started" collapsible collapsed>
          <esds-list-item href="#testing">For Designers</esds-list-item>
          <esds-list-item href="#testing">For Developers</esds-list-item>
        </esds-list-group>
        <esds-list-group header="Components" collapsible>
          <esds-list-item href="#testing">Button</esds-list-item>
          <esds-list-item href="#testing">Card</esds-list-item>
          <esds-list-item href="#testing">List Group</esds-list-item>
          <esds-list-item href="#testing">Thumbnail</esds-list-item>
        </esds-list-group>
      </div>
    </esds-background-demo>
  `;
};

export const InsetLinkedGroupHeader = () => {
  return html`
    <esds-background-demo>
      <div style="width: 250px">
        <esds-list-group header="Content">
          <esds-list-group header="Variants" href="#variants">
            <esds-list-item nested href="#primary">Primary</esds-list-item>
            <esds-list-item nested href="#secondary">Secondary</esds-list-item>
            <esds-list-item nested href="#tertiary">Tertiary</esds-list-item>
          </esds-list-group>
          <esds-list-group header="Sizes" href="#sizes">
            <esds-list-item nested href="#small">Small</esds-list-item>
            <esds-list-item nested href="#medium">Medium</esds-list-item>
            <esds-list-item nested href="#large">Large</esds-list-item>
          </esds-list-group>
        </esds-list-group>
      </div>
    </esds-background-demo>
  `;
};

export const ListItemSizes = () => {
  return html`
    <esds-background-demo>
      <div style="width: 250px">
        <esds-list-group>
          <esds-list-item href="#main">Main</esds-list-item>
          <esds-list-item href="#next">Next Important Link</esds-list-item>
          <esds-list-item href="#primary">Primary</esds-list-item>
          <esds-list-item size="small" href="#secondary">Secondary Link</esds-list-item>
          <esds-list-item size="small" href="#another">Another Secondary Link</esds-list-item>
        </esds-list-group>
      </div>
    </esds-background-demo>
  `;
};

export const ListGroupSizes = () => {
  const sampleNav = html`
    <esds-list-item href="#main">Main</esds-list-item>
    <esds-list-item href="#getting-started">Getting Started</esds-list-item>
    <esds-list-group header="Components" collapsible>
      <esds-list-item href="#button">Button</esds-list-item>
      <esds-list-item href="#card">Card</esds-list-item>
    </esds-list-group>
  `;
  return html`
    <div class="storybook-grid">
      <div style="width: 250px">
        <div class="storybook-annotation">Regular</div>
        <esds-list-group header="Content">
          ${sampleNav}
        </esds-list-group>
      </div>
      <div style="width: 250px">
        <div class="storybook-annotation">Small</div>
        <esds-list-group header="Content" size="small">
          ${sampleNav}
        </esds-list-group>
      </div>
    </div>
  `;
};

export const DocSiteNav = () => {
  return html`
    <esds-background-demo>
      <div style="width: 300px">
        <esds-list-group>
          <esds-list-item href="/">Home</esds-list-item>
          <esds-list-item href="/getting-started">Getting started</esds-list-item>
          <esds-list-item href="/release-history">Release history</esds-list-item>
          <li>
            <esds-list-group header="Visual Style" collapsible>
              <esds-list-item href="/color">Color</esds-list-item>
              <esds-list-item href="/tokens">Tokens</esds-list-item>
            </esds-list-group>
          </li>
          <li>
            <esds-list-group header="UI Components" collapsible>
              <esds-list-item href="/banner">Banner</esds-list-item>
              <esds-list-item href="/breadcrumbs">Breadcrumbs</esds-list-item>
              <esds-list-item href="/button">Button</esds-list-item>
              <esds-list-item href="/card" selected>
                Card
              </esds-list-item>
            </esds-list-group>
          </li>
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
  const sampleNav = html`
    <li>
      <esds-list-group header="Variations" href="#Variations">
        <esds-list-item href="#Default" nested>Default</esds-list-item>
        <esds-list-item href="#Linked" nested>Linked</esds-list-item>
      </esds-list-group>
    </li>
    <li>
      <esds-list-group header="Additional Elements" href="#Additional-Elements">
        <esds-list-item href="#Content" nested selected>Content</esds-list-item>
        <esds-list-item href="#Actions" nested>Actions</esds-list-item>
      </esds-list-group>
    </li>
    <li>
      <esds-list-group header="Sizes" href="#Sizes">
        <esds-list-item href="#Small" nested>Small</esds-list-item>
        <esds-list-item href="#Medium" nested>Medium</esds-list-item>
        <esds-list-item href="#Large" nested>Large</esds-list-item>
      </esds-list-group>
    </li>
  `;

  return html`
    <div class="storybook-grid">
      <div style="width: 250px">
        <div class="storybook-annotation">Regular</div>
        <esds-list-group header="Contents" selected-indicators>
          ${sampleNav}
        </esds-list-group>
      </div>
      <div style="width: 250px">
        <div class="storybook-annotation">Small</div>
        <esds-list-group header="Contents" size="small" selected-indicators>
          ${sampleNav}
        </esds-list-group>
      </div>
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

export const Sink = sinkFor(
  ListItemStates,
  GroupHeader,
  CollapsibleGroups,
  InsetLinkedGroupHeader,
  ListItemSizes,
  ListGroupSizes,
  DocSiteNav,
  DocSiteLocalNav,
);
Sink.story = { parameters: { chromatic: { disable: false } } };
