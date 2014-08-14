var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')();

gulp.task('lint', function() {
  gulp.src('./**/*.js')
    .pipe(plugins.jshint());
});

gulp.task('develop', function() {
  plugins.nodemon({ script: 'index.js', ext: 'html js', ignore: [] })
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('default', [ 'develop' ]);
