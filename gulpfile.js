const gulp = require('gulp');
const svgo = require('gulp-svgo');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const runTimestamp = Math.round(Date.now() / 1000);
var LMCUFontName = 'lmcu-icons';

gulp.task('default', function () {
  return gulp.src(['src/svg/**/*.svg'])
    .pipe(svgo())
    .pipe(iconfontCss({
      fontName: LMCUFontName,
      targetPath: LMCUFontName +'.css',
    }))
    .pipe(iconfont({
      fontName: LMCUFontName, // required
      normalize: true,
      prependUnicode: true, // recommended option
      formats: ['ttf', 'eot', 'woff', 'svg', 'woff2'], // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
    .on('glyphs', function (glyphs, options) {
      // CSS templating, e.g.
      console.log(glyphs, options);
    })
    .pipe(gulp.dest('docs/fonts/'));
});