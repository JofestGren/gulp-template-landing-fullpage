module.exports = function () {
  $.gulp.task('video', function () {
    return $.gulp.src('./src/static/video/*.mp4')
      .pipe($.gulp.dest('./build/static/video/'));
  })
}