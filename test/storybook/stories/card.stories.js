import { html } from 'lit-html';
import '@eightshapes/esds-card/dist/esds-card-web-component.js';
import '@eightshapes/esds-background-demo/dist/esds-background-demo-web-component.js';
import '@eightshapes/esds-prose/dist/esds-prose-web-component.js';
import '@eightshapes/esds-button/dist/esds-button-web-component.js';
import { sinkFor } from './scripts/utilities.js';
import './styles/card.stories.scss'; // Demo styles to show component states

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

export const States = () => {
  return html`
    <div class="storybook-grid">
      <div>
        <span class="storybook-annotation">Default</span>
        <esds-card
          style="${demoStyles}"
          href="http://example.com"
          img-src="/images/samples/New Zealand Mount Cook.png"
          metadata="Metadata"
          title="Title"
          description="Description"
        ></esds-card>
      </div>
      <div>
        <span class="storybook-annotation">Hover</span>
        <esds-card
          class="storybook-esds-card-state storybook-esds-card-state--hover"
          style="${demoStyles}"
          href="http://example.com"
          img-src="/images/samples/New Zealand Mount Cook.png"
          metadata="Metadata"
          title="Title"
          description="Description"
        ></esds-card>
      </div>
      <div>
        <span class="storybook-annotation">Focus</span>
        <esds-card
          class="storybook-esds-card-state storybook-esds-card-state--focus"
          style="${demoStyles}"
          href="http://example.com"
          img-src="/images/samples/New Zealand Mount Cook.png"
          metadata="Metadata"
          title="Title"
          description="Description"
        ></esds-card>
      </div>
      <div>
        <span class="storybook-annotation">Active</span>
        <esds-card
          class="storybook-esds-card-state storybook-esds-card-state--active"
          style="${demoStyles}"
          href="http://example.com"
          img-src="/images/samples/New Zealand Mount Cook.png"
          metadata="Metadata"
          title="Title"
          description="Description"
        ></esds-card>
      </div>
    </div>
  `;
};

export const AcrossBackgrounds = () => {
  return html`
    <esds-background-demo>
      <esds-card
        style="${demoStyles}"
        title="Title"
        img-src="/images/samples/Emirates Stadium.png"
        metadata="Metadata"
        title="Title"
        description="Description"
      ></esds-card>
    </esds-background-demo>
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

export const Sink = sinkFor(
  Default,
  WithDescription,
  WithMetadata,
  WithMetadataAndDescription,
  Sizes,
  States,
  AcrossBackgrounds,
  SlotAnatomy,
);
Sink.story = { parameters: { chromatic: { disable: false } } };
