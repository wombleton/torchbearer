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

gulp.task('node-sass', function() {
  gulp.src('assets/sass/*.scss')
  .pipe(plugins.sass())
  .pipe(gulp.dest('./public/css'));
});

function nodemon() {
  plugins.nodemon({ script: 'index.js', ext: 'js', ignore: [ 'assets/**/*', 'public/**/*' ] })
  .on('change', ['lint'])
  .on('restart', function () {
    console.log('restarted!');
  });
}

function watch() {
  plugins.watch({glob: 'assets/js/**/*.js'}, function() {
    gulp.start('browserify');
  });
  plugins.watch({glob: 'assets/js/**/*.js'}, function() {
    gulp.start('node-sass');
  });
}

gulp.task('develop', function() {
  nodemon();
  watch();
});

gulp.task('default', [ 'develop' ]);
