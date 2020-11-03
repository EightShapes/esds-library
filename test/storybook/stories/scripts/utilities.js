import { html } from 'lit-html';

export const sinkFor = (...stories) => () => {
  return html`
    ${stories.map(story => {
      console.log(story.story);
      return html`
        <span class="storybook-annotation">${story.name}</span>
        ${story()}
        <br />
        <br />
      `;
    })}
  `;
};
