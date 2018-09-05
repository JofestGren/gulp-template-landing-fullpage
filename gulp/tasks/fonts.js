module.exports = function () {
  $.gulp.task('fonts', function () {
    return $.gulp.src('./src/static/fonst/**/*.*')
      .pipe($.gulp.dest('./build/static/fonts/'));
  });
};