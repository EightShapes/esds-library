import { html } from 'lit-html';

export const sinkFor = (...stories) => {
  return html`
    ${stories.map(story => {
      return html`
        ${story()}
        <br />
      `;
    })}
  `;
};
