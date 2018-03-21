const gulp = require('gulp');
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync');

gulp.task('default', () => {
  connect.server({}, () => {
    browserSync({
      proxy: 'localhost:8000',
      notify: {
        styles: {
          top: 'auto',
          bottom: '0',
          opacity: '.5'
        }
      }
    });
  });
  gulp.watch('**/*.php').on('change', browserSync.reload);
});