const resolve = require('rollup-plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const babel = require('rollup-plugin-babel');
const minifyHTML = require('rollup-plugin-minify-html-literals').default;
// const modernWeb = require('@open-wc/building-rollup/plugins/rollup-plugin-modern-web/rollup-plugin-modern-web.js');

const prefix = '[owc-building-rollup]';

const production = true;
const legacy = true;

module.exports = {
  input: 'scripts/esds-base-wc.js',
  treeshake: !!production,
  output: {
    // output into given folder or default /dist. Output legacy into a /legacy subfolder
    dir: `_site/latest/scripts/${legacy ? 'legacy' : ''}`,
    format: legacy ? 'system' : 'esm',
    sourcemap: true,
    dynamicImportFunction: !legacy && 'importModule',
  },
  plugins: [
    // minify html and css template literals if in production
    production &&
      minifyHTML({
        failOnError: true,
      }),

    // parse input index.html as input, feed any modules found to rollup and add polyfills
    // modernWeb({
    //   legacy,
    //   polyfillDynamicImports: !legacy,
    //   polyfillBabel: legacy,
    //   polyfillWebcomponents: legacy,
    // }),

    // resolve bare import specifiers
    resolve(),

    // run code through babel
    babel({
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        // rollup rewrites import.meta.url, but makes them point to the file location after bundling
        // we want the location before bundling
        ['bundled-import-meta', { importStyle: 'baseURI' }],
      ],
      presets: [
        [
          '@babel/env',
          {
            targets: legacy
              ? ['ie 11']
              : [
                  'last 2 Chrome major versions',
                  'last 2 ChromeAndroid major versions',
                  'last 2 Edge major versions',
                  'last 2 Firefox major versions',
                  'last 2 Safari major versions',
                  'last 2 iOS major versions',
                ],
            useBuiltIns: false,
          },
        ],
      ],
    }),

    // only minify if in production
    production && terser(),
  ],
};
