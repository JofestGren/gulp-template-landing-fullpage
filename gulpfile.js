'use strict';

global.$ = {
  gulp: require('gulp'),
  del: require('del'),
  fs: require('fs'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),

  path: {
    tasks: require('./gulp/config/tasks.js')
  }
};

$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
  'clean',
  // $.gulp.parallel('sass:dev', 'pug', 'js:copy', 'json:copy', 'svg', 'img:dev', 'fonts','svg:copy')));
  $.gulp.parallel('sass:dev', 'pug', 'libsJS:dev', 'js:copy', 'json:copy', 'svg', 'img:dev', 'fonts','svg:copy')));

$.gulp.task('build', $.gulp.series(
  'clean',
  // $.gulp.parallel('sass:build', 'pug', 'js:copy', 'json:copy', 'svg', 'img:build', 'fonts','svg:copy')));
  $.gulp.parallel('sass:build', 'pug', 'libsJS:build', 'js:copy', 'json:copy', 'svg', 'img:build', 'fonts','svg:copy')));

$.gulp.task('default', $.gulp.series(
  'dev',
  $.gulp.parallel(
      'watch',
      'serve'
  )
));