var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('final_project/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('final_project/css'))
    .pipe(browserSync.reload({
      stream : true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'final_project'
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('final_project/scss/*.scss', ['sass']);
  gulp.watch('final_project/*.html', browserSync.reload);
  gulp.watch('final_project/js/**/*.js', browserSync.reload);
})
