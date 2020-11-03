import { html } from 'lit-html';

export const sinkFor = (...stories) => {
  return html`
    ${stories.map(story => {
      console.log(story.story);
      return html`
        ${story()}
        <br />
      `;
    })}
  `;
};
