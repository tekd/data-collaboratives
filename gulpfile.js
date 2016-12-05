var gulp            = require('gulp'),
    shell           = require('gulp-shell'),
    ghPages         = require('gulp-gh-pages'),
    imagemin        = require('gulp-imagemin'),
    browserSync     = require('browser-sync'),
    cp              = require('child_process'),
    runSequence     = require('run-sequence').use(gulp);

var messages = {
    jekyllBuild: 'building...'
};

// Browser Sync
gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('image', function () {
  return gulp.src('source/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('_site/images'));
});

gulp.task('scripts', function () {
  return gulp.src('source/scripts/**/*')
    .pipe(gulp.dest('_site/scripts'));
});

gulp.task('cname', function() {
  return gulp.src('source/CNAME')
  .pipe(gulp.dest('_site'));
});

gulp.task('static', function() {
  return gulp.src('source/static/**/*')
  .pipe(gulp.dest('_site'));
});

gulp.task('push-gh-master', shell.task(['git push origin master']));

gulp.task('import', shell.task(['bundle exec jekyll contentful --rebuild']));

gulp.task('push-gh-pages', function () {
  return gulp.src('_site/**/*')
    .pipe(ghPages({ force: true }));
});

gulp.task('deploy', function (callback) {
  runSequence(
    'image',
    'cname',
    'scripts',
    'static',
    'push-gh-master',
    'push-gh-pages',
    callback
  );
});

gulp.task('jekyll', shell.task(['bundle exec jekyll build --incremental']));

gulp.task('jekyll-rebuild', ['jekyll'], function () {
    browserSync.reload();
});

gulp.task('watch', function () {
  gulp.watch('source/**/*.*', ['jekyll-rebuild']);
});

gulp.task('default', function (callback) {
  runSequence(
    ['watch', 'browserSync'],
    callback
  );
});
