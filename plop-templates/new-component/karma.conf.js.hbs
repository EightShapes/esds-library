/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        { pattern: config.grep ? config.grep : 'test/**/*.test.js', type: 'module' },
        // Watch the source web component for changes
        { pattern: 'src/**/*-entry.js', type: 'module', watched: true },
      ],

      esm: {
        nodeResolve: true,
        preserveSymlinks: true,
      },
      // you can overwrite/extend the config further
    }),
  );

  // Remove unused snapshot config that open-wc automatically adds: https://github.com/open-wc/open-wc/blob/e853364b9dde1924199f4309cf6689b3bcc6e25f/packages/testing-karma/src/create-default-config.js#L25
  const snapshotFileIndex = config.files.findIndex(fo => fo.pattern.includes('__snapshots__'));
  config.files.splice(snapshotFileIndex, 1);

  return config;
};
