import { html } from 'lit-html';
import '@eightshapes/esds-card/dist/esds-card-web-component.js';
import { sinkFor } from './scripts/utilities.js';

export default {
  title: 'Design System/Card',
};

export const Default = () => {
  return html`
    <esds-card
      ><h3>Default Slot Heading</h3>
      <h4 slot="content">Named Slot Heading</h4>
    </esds-card>
  `;
};

export const Sink = sinkFor(Default);
Sink.story = { parameters: { chromatic: { disable: false } } };
