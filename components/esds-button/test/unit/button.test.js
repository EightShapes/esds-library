// import { createSandbox } from 'sinon';
// import { expect, fixture, html } from '@open-wc/testing';

// describe('esds-button', () => {
//   const sandbox = createSandbox();
//   let fakeMethod;

//   beforeEach(() => {
//     sandbox.spy(console, 'warn');
//     fakeMethod = sandbox.fake(); // create in beforeEach so callCount is reset in between each test
//   });

//   afterEach(() => {
//     sandbox.restore();
//   });

//   it('should throw a console warning if the text attribute does not equal "Hello World"', async () => {
//     const errorMessage = `text is not "Hello World", delete this silly test and console warning to make this go away.`;

//     const el = await fixture(
//       html`
//         <esds-button text="Goodbye World"></esds-button>
//       `,
//     );

//     expect(console.warn).to.have.calledOnceWith(errorMessage);
//   });
// });
