module.exports = function () {
  $.gulp.task('sass:build', () => {
    return $.gulp.src('./src/static/sass/main.sass')
      .pipe($.gp.sass({
          includePaths:  [
            `node_modules/normalize.css/normalize.css`,
            `node_modules/fullpage.js/dist/jquery.fullpage.min.css`
          ]
      }).on('error', sass.logError))
      .pipe($.gp.autoprefixer({
          browsers: ['last 6 version']
      }))
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gulp.dest('./build/static/css/'))
  });

  $.gulp.task('sass:dev', function () {
    return $.gulp.src('./src/static/sass/main.sass')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass({
        'include css': true
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Sass',
          message: error.message
        };
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.autoprefixer({
        browsers: ['last 10 versions'],
      }))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.bs.reload({
        stream: true
      }));
  });
}