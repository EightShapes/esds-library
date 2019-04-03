const presets = [
  [
    "@babel/env",
    {
      targets: {
        ie: "11",
      },
      useBuiltIns: "usage",
    },
  ],
];

const plugins = [
  '@babel/plugin-proposal-class-properties',
  ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true } ],
];

module.exports = { presets, plugins };
