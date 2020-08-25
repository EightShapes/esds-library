/* global window */
import { setCustomElements } from '@storybook/web-components';
import * as esdsTokens from '@eightshapes/esds-tokens';

// TODO: Make this more scalable
import cardDocs from '@eightshapes/esds-card/documentation/esds-card-docs.json';
import iconDocs from '@eightshapes/esds-icon/documentation/esds-icon-docs.json';
import thumbnailDocs from '@eightshapes/esds-thumbnail/documentation/esds-thumbnail-docs.json';
import '../stories/styles/annotation-styles.scss';
import '../stories/styles/hostile-styles.scss';

const customElements = cardDocs;
customElements.tags.push(...iconDocs.tags);
customElements.tags.push(...thumbnailDocs.tags);

setCustomElements(customElements);

const backgroundColors = [];
for (const bgName in esdsTokens['background-color']) {
  backgroundColors.push({
    name: bgName,
    value: esdsTokens['background-color'][bgName],
  });
}

export const parameters = {
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
  docs: {
    iframeHeight: '200px',
    inlineStories: false,
  },
  backgrounds: {
    default: backgroundColors[0].name,
    values: backgroundColors,
  },
};
