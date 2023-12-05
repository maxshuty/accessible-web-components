// This is the script used to uglify and minify the simplyLazy.js and it will place the
// minified script in both the `./dist` directory and the `./docs` directory so that the
// GitHub pages is automatically updated as well

function defaultTask(cb) {
  cb();
}

exports.default = defaultTask;

const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const headerComment = require('gulp-header-comment');

gulp.task('js-minify', function () {
  return gulp
    .src(['./src/components/simpleRange.js'])
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(uglify())
    .pipe(
      rename(function (path) {
        path.extname = '.min.js';
      })
    )
    .pipe(
      headerComment(
        'Max Poshusta | v1.0.9 | MIT License | https://github.com/maxshuty/accessible-web-components | https://www.linkedin.com/in/maxposhusta'
      )
    )
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./docs'));
});
