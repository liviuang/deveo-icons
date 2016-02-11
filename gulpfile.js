var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

gulp.task('iconfont', function() {
  return gulp.src(['icons/*.svg'])
    .pipe(iconfont({
      fontName: 'deveo-icons',
      appendUnicode: true,
      formats: ['ttf', 'eot', 'svg', 'woff']
    }))
    .on('glyphs', function(glyphs/*, options */) {
      var options = {
        glyphs: glyphs,
        fontName: 'deveo-icons',
        fontPath: '../fonts/',
        className: 'deveo-icons'
      };
      gulp.src('templates/deveo-icons.css')
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest('dist/css/'));

      gulp.src('templates/deveo-icons.html')
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest('dist/'));
    })
    .pipe(gulp.dest('dist/fonts/'));
});
