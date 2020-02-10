const gulp = require('esds-build');

// Copy icons.json manifest to /dist
gulp.task('esds-hook:post:icons:manifest:esds-icons', () => {
  return gulp.src('./data/icons.json')
        .pipe(gulp.dest('./dist'));
});
