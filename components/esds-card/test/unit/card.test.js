import { createSandbox } from 'sinon';
import { expect, fixture, html } from '@open-wc/testing';

describe('esds-card', () => {
  const sandbox = createSandbox();

  beforeEach(() => {
    sandbox.spy(console, 'warn');
    sandbox.fake(); // create in beforeEach so callCount is reset in between each test
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should throw a console warning if a metadata attribute is used without a title attribute', async () => {
    const errorMessage = `The metadata attribute can only be used in conjunction with a title. Provide a title value or remove the metadata attribute.`;

    await fixture(
      html`
        <esds-card metadata="This is invalid"></esds-card>
      `,
    );

    expect(console.warn).to.have.calledOnceWith(errorMessage);
  });
});
