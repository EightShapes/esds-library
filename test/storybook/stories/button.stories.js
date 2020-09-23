import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import '@eightshapes/esds-button/dist/esds-button-web-component.js'; // The Web Component Import
import { EsdsButton } from '@eightshapes/esds-button/dist/EsdsButton.js';
import { EsdsIconPlus } from '@eightshapes/esds-icons';

import { sinkFor } from './scripts/utilities.js';

// The Custom Element Class
EsdsButton.define('esds-v10'); // Define a <esds-v10-button> component

export default {
  title: 'Button',
};

const renderButtonExamples = variant => {
  const buttonText = 'Label';
  const buttonLinkText = 'Link Label';
  const sizes = ['small', 'medium', 'large'];
  const hrefs = [undefined, 'http://example.com'];
  return html`
    ${hrefs.map(href => {
      const text = href ? buttonLinkText : buttonText;
      return html`
        ${sizes.map(
          s =>
            html`
              <esds-button
                href=${ifDefined(href)}
                text="${text}"
                size="${s}"
                variant="${variant}"
              ></esds-button>
            `,
        )}
        <br />
        ${sizes.map(
          s =>
            html`
              <esds-button
                href=${ifDefined(href)}
                text="${text}"
                size="${s}"
                icon="${EsdsIconPlus}"
                variant="${variant}"
              ></esds-button>
            `,
        )}
        <br />
        ${sizes.map(
          s =>
            html`
              <esds-button
                href=${ifDefined(href)}
                size="${s}"
                icon="${EsdsIconPlus}"
                variant="${variant}"
              ></esds-button>
            `,
        )}
        <br />
      `;
    })}
  `;
};

export const Primary = () => renderButtonExamples('primary');

export const Secondary = () => renderButtonExamples('secondary');

export const Flat = () => renderButtonExamples('flat');

export const Outline = () => renderButtonExamples('outline');

export const Scoped = () => {
  return html`
    <div class="storybook-grid">
      <div>
        <span class="storybook-annotation">&lt;esds-v10-button>&lt;/esds-v10-button></span>
        <esds-v10-button></esds-v10-button>
      </div>
    </div>
  `;
};

export const Sink = sinkFor(Primary, Secondary, Flat, Outline, Scoped);
Sink.parameters = {
  chromatic: { disable: false },
};
