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
      gulp.src('templates/deveo-icons.css')
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: 'deveo-icons',
          fontPath: 'fonts/',
          className: 'deveo-icons'
        }))
        .pipe(gulp.dest('css/'));
    })
    .pipe(gulp.dest('fonts/'));
});
