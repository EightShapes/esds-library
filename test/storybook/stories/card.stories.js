import { html } from 'lit-html';
import '@eightshapes/esds-card/dist/esds-card-web-component.js';
import '@eightshapes/esds-button/dist/esds-button-web-component.js';
import '@eightshapes/esds-list-group/dist/esds-list-group-web-component.js';
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
      title="Recreational Equipment, Inc., commonly known as REI"
      img-src="/images/samples/REI HQ.png"
      href="https://rei.github.io/rei-cedar-docs/"
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
      img-src="/images/samples/Emirates Stadium.png"
    ></esds-card>
  `;
};

export const WithMetadataAndDescription = () => {
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

export const Sizes = () => {
  return html`
    <div class="storybook-grid">
      <div>
        <span class="storybook-annotation">Small</span>
        <esds-card
          style="${demoStyles}"
          img-src="/images/samples/Vernazza.png"
          metadata="Destination"
          title="Vernazza"
          description="Lorem ipsum dolor sanctum."
          size="small"
        ></esds-card>
      </div>
      <div>
        <span class="storybook-annotation">Medium</span>
        <esds-card
          style="${demoStyles}"
          img-src="/images/samples/Vernazza.png"
          metadata="Destination"
          title="Vernazza"
          description="Lorem ipsum dolor sanctum."
          size="medium"
        ></esds-card>
      </div>
      <div>
        <span class="storybook-annotation">Large</span>
        <esds-card
          style="${demoStyles}"
          img-src="/images/samples/Vernazza.png"
          metadata="Destination"
          title="Vernazza"
          description="Lorem ipsum dolor sanctum."
          size="large"
        ></esds-card>
      </div>
    </div>
  `;
};

export const SlotAnatomy = () => {
  return html`
    <esds-card style="${demoStyles}" title="Wanaka" img-src="/images/samples/Wanaka.png">
      <div class="storybook-slotholder" slot="content">Content</div>
      <div class="storybook-slotholder" slot="actions">Actions</div>
    </esds-card>
  `;
};

export const SlotExamples = () => {
  return html`
    <esds-card style="${demoStyles}" title="Wanaka" img-src="/images/samples/Wanaka.png">
      <esds-prose slot="content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptate. Dignissimos
          aperiam mollitia non, odit vel nostrum natus nesciunt officia!
        </p>
        <h4>Heading</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptate. Dignissimos
          aperiam mollitia non, odit vel nostrum natus nesciunt officia!
        </p>
        <h4>Heading</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptate. Dignissimos
          aperiam mollitia non, odit vel nostrum natus nesciunt officia!
        </p>
      </esds-prose>
      <esds-button slot="actions" variant="secondary">Subscribe</esds-button>
      <esds-button slot="actions" variant="flat">Learn More</esds-button>
    </esds-card>
  `;
};

export const Sink = sinkFor(Default);
Sink.story = { parameters: { chromatic: { disable: false } } };
