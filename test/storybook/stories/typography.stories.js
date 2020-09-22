// Typography.stories.js

import { html } from 'lit-html';
import { sinkFor } from './scripts/utilities.js';
import './styles/typography.stories.scss'; // Demo styles to show component states

export default {
  title: 'Typography',
};

export const Heading = () => {
  return html`
    <h1 class="esds-heading--level-1">Title / Heading Level 1</h1>
    <h2 class="esds-heading--level-2">Level 2 Heading</h2>
    <h3 class="esds-heading--level-3">Level 3 Heading</h3>
    <h4 class="esds-heading--level-4">Level 4 Heading</h4>
    <h5 class="esds-heading--level-5">Level 5 Heading</h5>
    <h3 class="esds-heading--eyebrow">Eyebrow Heading</h3>
    <h4 class="esds-heading--eyebrow-small">Eyebrow Heading Small</h4>
  `;
};

export const Body = () => {
  return html`
    <p class="esds-body--lead">Body Lead</p>
    <p class="esds-body--large">Body Large</p>
    <p class="esds-body--medium">Body Medium (Default)</p>
    <p class="esds-body--small">Body Small</p>
    <p class="esds-body--extra-small">Body Extra Small</p>
    <a class="esds-link" href="https://example.com">Link/Interactive</a>
  `;
};

export const Sink = sinkFor(Heading, Body);
Sink.parameters = {
  chromatic: { disable: false },
};
