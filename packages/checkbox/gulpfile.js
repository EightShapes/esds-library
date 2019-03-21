const gulp = require('esds-build');

gulp.task('copyLintFilesFromRoot', () => {
  return gulp.src(['../../.eslintrc', '../../.sass-lint.yml'])
        .pipe(gulp.dest('.'));
});

gulp.task('esds-hook:pre:build:all', gulp.series('copyLintFilesFromRoot'));
