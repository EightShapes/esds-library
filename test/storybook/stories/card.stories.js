import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-card/dist/esds-card-web-component.js';
// The Custom Element Class
import { sinkFor } from './scripts/utilities.js';

const storybookCardWidth = 450;
const demoStyles = `width: ${storybookCardWidth}px`;

export default {
  title: 'Design System/Card',
};

export const Default = () => {
  return html`
    <esds-card
      style="${demoStyles}"
      img-src="/images/samples/Wanaka.png"
      metadata="Destination"
      title="Wanaka"
      description="Visit and take a pic of the most photogenic tree in the world."
    ></esds-card>
  `;
};

export const TitleOnly = () => {
  return html`
    <esds-card
      style="${demoStyles}"
      title="Recreational Equipment, Inc., commonly known as REI"
      img-src="/images/samples/REI HQ.png"
    ></esds-card>
  `;
};

export const WithDescription = () => {
  return html`
    <esds-card
      style="${demoStyles}"
      title="Jungfrau"
      description="One of the main summits of the Bernese Alps"
      img-src="/images/samples/Jungfrau Glacier.png"
    ></esds-card>
  `;
};

export const WithMetadata = () => {
  return html`
    <esds-card
      style="${demoStyles}"
      metadata="Premier League Stadium"
      title="Arsenal Emirates Stadium in Highbury London"
      description="With a capacity of 60,704 it is the fourth-largest football stadium in England after Wembley Stadium, Old Trafford and Tottenham Hotspur Stadium."
      img-src="/images/samples/Emirates Stadium.png"
    ></esds-card>
  `;
};

export const SlotAnatomy = () => {
  return html`
    <esds-card
      style="${demoStyles}"
      metadata="Type"
      title="Title"
      description="Description"
      img-src="/images/samples/Paris.png"
    >
      <div slot="content" class="storybook-slotholder">Content slot</div>
      <div slot="actions" class="storybook-slotholder">Actions slot</div>
    </esds-card>
  `;
};

export const Sink = sinkFor(Default);
Sink.story = { parameters: { chromatic: { disable: false } } };
