module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./src/static/stylus/**/*.stylus', $.gulp.series('stylus:dev'));
    $.gulp.watch('./src/static/img/svg/*.svg', $.gulp.series('svg'));
    $.gulp.watch('./src/static/js/**/*.js', $.gulp.series('libsJS:dev', 'js:copy'));
    $.gulp.watch('./src/static/js/data/*.json', $.gulp.series('json:copy'));
    $.gulp.watch('./src/static/video/**/*.mp4', $.gulp.series( 'video'));    
    $.gulp.watch(['./src/static/img/general/**/*.{png,jpg,gif}',
                 './src/static/img/content/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
  });
}