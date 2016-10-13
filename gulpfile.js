var gulp = require('gulp');
var rename = require('gulp-rename');
var ghPages = require('gulp-gh-pages');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

gulp.task('iconfont', function() {
  return gulp.src(['icons/*.svg'])
    .pipe(iconfont({
      fontHeight: 1000,
      fontName: 'deveo-icons',
      formats: ['ttf', 'eot', 'svg', 'woff'],
      descent: 200,
      normalize: true
    }))
    .on('glyphs', function(glyphs/*, options */) {
      var options = {
        glyphs: glyphs,
        fontName: 'deveo-icons',
        fontPath: '../fonts/',
        className: 'deveo-icon',
        version: '1.0.1'
      };

      gulp.src('templates/deveo-icons.css')
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest('dist/css/'));

      gulp.src('templates/deveo-icons.html')
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename: 'index' }))
        .pipe(gulp.dest('dist/'));
    })
    .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('gh-pages', function() {
  return gulp.src('dist/**/*')
    .pipe(ghPages());
});
