// import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';
// import { html } from 'lit-html';
//
// import EsdsTokens from '@eightshapes/esds-tokens/dist/js/esds-tokens.json';
// console.log(EsdsTokens);
// function flattenTokens(parentNode, keyPrefix='', flattenedTokens = {}) {
//   const keys = Object.keys(parentNode);
//   keys.forEach(k => {
//     const flattenedKey = `${keyPrefix}${k}`;
//     if (typeof parentNode[k] === 'string') {
//       flattenedTokens[flattenedKey] =  parentNode[k]
//     } else {
//       flattenTokens(parentNode[k], `${flattenedKey}-`, flattenedTokens);
//     }
//   });
//   return flattenedTokens;
// }
// const colorTokens = flattenTokens(EsdsTokens.color);
// const colorKeys = Object.keys(colorTokens);
//
// <Meta
//   title="Tokens"
//   parameters={{
//   }}
// />
//
// # Tokens
// ## Installation
//
// ```bash
// npm install @eightshapes/esds-tokens
// ```
//
// ## Text Color
// <Story name="Text Color">
//   {html`
//     <table>
//     <thead>
//       <tr>
//         <th>Key</th>
//         <th>Value</th>
//       </tr>
//     </thead>
//     <tbody>
//       ${colorKeys.map(k => html`<tr><td>${k}</td><td>${colorTokens[k]}<div style="height: 20px; width: 20px; background: ${colorTokens[k]}; display: inline-block; border: solid 1px black;"></div></td>`)}
//     </tbody>
//     </table>
//   `}
// </Story>
