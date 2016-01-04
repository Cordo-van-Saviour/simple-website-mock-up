var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  gulp.src('./sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});

gulp.task('default', function () {
  browserSync.init({
    proxy: "devana.dev"
    });

  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/*.js').on('change', browserSync.stream);
});
