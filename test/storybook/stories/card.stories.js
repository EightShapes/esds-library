import { html } from 'lit-html';
import '@eightshapes/esds-card/dist/esds-card-web-component.js';
import { sinkFor } from './scripts/utilities.js';

export default {
  title: 'Design System/Card',
};

export const Default = () => {
  return html`
    <esds-card
      title="Recreational Equipment, Inc., commonly known as REI"
      img-src="/images/samples/REI HQ.png"
    ></esds-card>
  `;
};

export const Sink = sinkFor(Default);
Sink.story = { parameters: { chromatic: { disable: false } } };
