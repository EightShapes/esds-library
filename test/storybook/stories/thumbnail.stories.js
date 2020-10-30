import { html } from 'lit-html';

import '@eightshapes/esds-thumbnail/dist/esds-thumbnail-web-component.js'; // The Web Component Import
import { EsdsThumbnail } from '@eightshapes/esds-thumbnail/dist/EsdsThumbnail.js'; // The Custom Element Class
import { sinkFor } from './scripts/utilities.js';

EsdsThumbnail.define('esds-v10'); // Define a <esds-v10-thumbnail> component
const thumbnailWidth = 300;
const demoStyles = `width: ${thumbnailWidth}px; display: block;`;
const objectFitValues = ['cover', 'contain', 'fill', 'none', 'scale-down']; // TODO Pull this from the class as a constant

export default {
  title: 'Design System/Thumbnail',
};

export const Default = () => {
  return html`
    <esds-thumbnail style="${demoStyles}"></esds-thumbnail>
  `;
};

export const Square = () => {
  return html`
    <esds-thumbnail style="${demoStyles}" aspect-ratio="square"></esds-thumbnail>
  `;
};

export const LandscapeSource = () => {
  return html`
    <esds-thumbnail style="${demoStyles}" src="./images/thumbnail/landscape.png"></esds-thumbnail>
  `;
};

export const PortraitSource = () => {
  return html`
    <esds-thumbnail style="${demoStyles}" src="./images/thumbnail/portrait.jpg"></esds-thumbnail>
  `;
};

export const ObjectFitOptions = () => {
  return html`
    <div class="storybook-grid">
      <span class="storybook-annotation">16:9</span>
      ${objectFitValues.map(v => {
        return html`
          <div>
            <span class="storybook-annotation">${v}</span>
            <esds-thumbnail
              style="${demoStyles}"
              object-fit="${v}"
              src="./images/samples/Paris.png"
            ></esds-thumbnail>
          </div>
        `;
      })}
    </div>
    <div class="storybook-grid">
      <span class="storybook-annotation">Square</span>
      ${objectFitValues.map(v => {
        return html`
          <div>
            <span class="storybook-annotation">${v}</span>
            <esds-thumbnail
              style="${demoStyles}"
              object-fit="${v}"
              src="./images/samples/Paris.png"
              aspect-ratio="1:1"
            ></esds-thumbnail>
          </div>
        `;
      })}
    </div>
  `;
};

export const Scoped = () => {
  return html`
    <div class="storybook-grid">
      <div>
        <span class="storybook-annotation">&lt;esds-v10-thumbnail>&lt;/esds-v10-thumbnail></span>
        <esds-v10-thumbnail style="${demoStyles}"></esds-v10-thumbnail>
      </div>
    </div>
  `;
};

export const Sink = sinkFor(
  Default,
  LandscapeSource,
  PortraitSource,
  ObjectFitOptions,
  Scoped,
  Square,
);
Sink.story = { parameters: { chromatic: { disable: false } } };
