import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-prose/dist/esds-prose-web-component.js';
// The Custom Element Class
import { sinkFor } from './scripts/utilities.js';

export default {
  title: 'Prose',
};

export const Default = () => {
  return html`
    <esds-prose>
      <h1>Level 1 Heading</h1>
      <h2>Level 2 Heading</h2>
      <h3>Level 3 Heading</h3>
      <h4>Level 4 Heading</h4>
    </esds-prose>
  `;
};

export const DocumentationPage = () => {
  return html`
    <esds-prose>
      <h2>Anatomy</h2>
      <p>
        Cards can be configured individually and arranged collectively to meet different thematic,
        messaging, and user goals.
      </p>
      <h2>Variants</h2>
      <h3>Default</h3>
      <p>By default, always include a [thumbnail], title, and description.</p>
      <h3>Content Area</h3>
      <p>
        Customize additional content in the content-area slot, such as pricing, metadata, and other
        indicators.
      </p>
      <p>
        Customize additional content in the content-area slot, such as pricing, metadata, and other
        indicators.
      </p>
      <h3>Action Area</h3>
      <p>
        Include actions in the action-area slot, such as one or more [buttons] or [icon buttons].
      </p>
      <h3>Size</h3>
      <p>
        Match the size of adjacent elements when presenting a small, medium (default), or large
        card.
      </p>
      <h2>Layout</h2>
      <p>
        Wrap multiple cards in a cards grid container to arrange them in a row or multi-row grid.
      </p>
      <p>
        Wrap multiple cards in a cards grid container to arrange them in a row or multi-row grid.
      </p>
    </esds-prose>
  `;
};

export const Sink = sinkFor(Default, DocumentationPage);
Sink.story = { parameters: { chromatic: { disable: false } } };
