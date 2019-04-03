const gulp = require('esds-build');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');


const rollupInputOptions = {
  input: './scripts/esds-base-wc.js',
  plugins: [resolve()]
};

const rollupOutputOptions = {
  compact: true,
  sourcemap: true,
  file: './dist/esds-base-wc.js',
  format: 'esm'
};

gulp.task('scripts:rollup', async() => {
  const bundle = await rollup.rollup(rollupInputOptions);
  await bundle.write(rollupOutputOptions);
});

gulp.task('scripts:rollup:ie', async() => {
  const bundle = await rollup.rollup({
    input: './scripts/esds-base-wc.js',
    plugins: [resolve(), babel({
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-syntax-import-meta',
          '@babel/plugin-proposal-class-properties',
          ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true } ],
          // rollup rewrites import.meta.url, but makes them point to the file location after bundling
          // we want the location before bundling
          ['bundled-import-meta', { importStyle: 'baseURI' }],
        ],
        presets: [
          [
            '@babel/env',
            {
              targets: ['ie 11'],
              useBuiltIns: false,
            },
          ],
        ],
      })]
  });
  await bundle.write({
    file: './dist/esds-base-wc-ie.js',
    format: 'iife',
    name: 'EsdsBaseWcIE'
  });
})

gulp.task('dist:scripts:to:webroot', () => {
  return gulp.src('dist/*.js')
        .pipe(gulp.dest('_site/latest/scripts'));
});

gulp.task('esds-hook:pre:build:all', gulp.series('scripts:rollup', 'scripts:rollup:ie', 'dist:scripts:to:webroot'));

// Watch base WC for changes and re-rollup
gulp.task('watch:scripts:rollup', function () {
    return gulp.watch(['./scripts/**/*.js'], gulp.series('scripts:rollup', 'scripts:rollup:ie', 'dist:scripts:to:webroot'));
});
