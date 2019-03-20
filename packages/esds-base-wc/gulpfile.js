const gulp = require('esds-build');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');

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

gulp.task('esds-hook:pre:build:all', gulp.series('scripts:rollup'));

// Watch base WC for changes and re-rollup
gulp.task('watch:scripts:rollup', function () {
    return gulp.watch(['./scripts/**/*.js'], gulp.parallel('scripts:rollup'));
});
