const gulp = require('gulp');
const svgo = require('gulp-svgo');
const svgFill = require('gulp-svg-fill');
const runTimestamp = Math.round(Date.now() / 1000);
const rename = require("gulp-rename");

gulp.task('default', function () {
  return gulp.src(['src/svg/**/*.svg'])
    .pipe(svgo())
    .pipe(svgFill({
      colors: {
        'Charcoal': '#282D37',
        'White': '#FFFFFF',
      }
    }))
    .pipe(rename({
      prefix:"lmcu-icon-"
    }))
    .pipe(gulp.dest('docs/svg/'));
});
gulp.task('svgrename', function() {
  return gulp.src(['src/svg/**/*.svg'])
  .pipe(rename(function(opt) {
    opt.basename = opt.basename.replace(/^.{0,10}/,'');
    return opt;
  }))
  .pipe(gulp.dest('src/svg/'));
});