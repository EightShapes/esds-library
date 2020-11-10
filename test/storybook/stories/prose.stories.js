import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-prose/dist/esds-prose-web-component.js';
// The Custom Element Class
import { sinkFor } from './scripts/utilities.js';

export default {
  title: 'Design System/Prose',
};

export const Default = () => {
  return html`
    <esds-prose>
      <h1>Level 1 Heading</h1>
      <h2>Level 2 Heading</h2>
      <h3>Level 3 Heading</h3>
      <h4>Level 4 Heading</h4>
    </esds-prose>
  `;
};

export const DocumentationPage = () => {
  return html`
    <esds-prose>
      <h2>Anatomy</h2>
      <p>
        Cards can be configured individually and arranged <a href="#">collectively</a> to meet
        different thematic, messaging, and user goals.
      </p>
      <h2>Variants</h2>
      <h3>Default</h3>
      <p>By default, always include a [thumbnail], title, and description.</p>
      <h3>Content Area</h3>
      <p>
        Customize additional content in the content-area slot, such as pricing, metadata, and other
        indicators.
      </p>
      <p>
        Customize additional content in the content-area slot, such as pricing, metadata, and other
        indicators.
      </p>
      <img src="/images/samples/REI HQ.png" alt="REI Headquarters" />
      <h3>Action Area</h3>
      <p>
        Include actions in the action-area slot, such as one or more [buttons] or [icon buttons].
      </p>
      <h3>Size</h3>
      <p>
        Match the size of adjacent elements when presenting a small, medium (default), or large
        card.
      </p>
      <ol>
        <li>First, do this.</li>
        <li>Do this next.</li>
        <li>Now you'll need to do this.</li>
        <li>Pentultimate step. <a href="#">link in ol</a> Nearly there.</li>
        <li>Finally, conclude with this.</li>
      </ol>
      <h2>Layout</h2>
      <p>
        Wrap multiple cards in a cards grid container to arrange them in a row or multi-row grid.
      </p>
      <p>
        Wrap multiple cards in a cards grid container to arrange them in a row or multi-row grid.
      </p>
      <p>
        Prose may have <code>code</code> mixed in with the prose. So we need to
        <code>account</code> for that. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eius minus voluptatibus vero? Doloribus deserunt obcaecati saepe accusamus ipsam
        reprehenderit iure dolorum! Beatae eos optio minima blanditiis fugit, adipisci corrupti
        delectus.
      </p>
      <pre>
        <code>
          &lt;h1&gt;Hello World&lt;/h1&gt;
        </code>
      </pre>
      <pre>
          &lt;h1&gt;Hello World&lt;/h1&gt;
      </pre
      >
      <ul>
        <li>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <a href="#">link in ul</a> Fugit, alias!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit enim cum magni
          illum nulla repudiandae at labore eligendi placeat eius.
        </li>
        <li>Lorem ipsum dolor sit.</li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis explicabo at
          libero, atque tempore labore facere dolore veritatis quos dolores quaerat. Aliquam vel
          culpa quidem architecto repellendus a illo.
        </li>
      </ul>
    </esds-prose>
  `;
};

export const Sink = sinkFor(Default, DocumentationPage);
Sink.story = { parameters: { chromatic: { disable: false } } };
