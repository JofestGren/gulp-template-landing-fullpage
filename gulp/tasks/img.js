module.exports = function () {
  $.gulp.task('img:dev', function () {
    return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
      .pipe($.gulp.dest('build/static/img/'));
  });

  $.gulp.task('img:build', function () {
    return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
      .pipe($.gp.tinypng('sdgIujOcoKHqSarX4PioM3ifPJihACK2'))
      .pipe($.gulp.dest('build/static/img/'));
  });

  $.gulp.task('svg:copy', function () {
    return $.gulp.src('./src/static/img/general/*.svg')
      .pipe($.gulp.dest('./build/static/img/general/'));
  });
}