module.exports = function () {
  $.gulp.task('sass:dev', function () {
    return $.gulp.src('src/static/sass/main.sass')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass({
        'include css': true
      }))
      .pipe($.gp.autoprefixer({
        browsers: ['last 10 versions'],
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Sass',
          message: error.message
        };
      }))
      .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('build/static/css/'))
      .pipe($.bs.reload({
        stream: true
      }));
  });

  $.gulp.task('sass:build', () => {
    return $.gulp.src('./src/static/stylus/main.sass')
        .pipe($.gp.stylus({
            'include css': true
        }))
        .pipe($.gp.autoprefixer({
            browsers: ['last 10 version']
        }))
        .pipe($.gp.csscomb())
        .pipe($.gp.csso())
        .pipe($.gulp.dest('./build/static/css/'))
});
}