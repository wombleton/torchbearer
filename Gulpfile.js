var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')();

gulp.task('lint', function() {
  gulp.src('./**/*.js')
    .pipe(plugins.jshint());
});

gulp.task('browserify', function() {
  gulp.src('assets/js/app.js')
  .pipe(plugins.browserify({
    debug: !gulp.env.production
  }))
  .pipe(gulp.dest('./public/js'));
});

gulp.task('develop', function() {
  plugins.nodemon({ script: 'index.js', ext: 'html js', ignore: [] })
    .on('change', ['lint', 'browserify'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('default', [ 'develop' ]);
