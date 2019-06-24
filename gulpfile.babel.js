import gulp from 'gulp';
import bs from 'browser-sync';
import bsConfig from './bs-config';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';

const browserSync = bs.create();

gulp.task('bundle', () => {
  return webpackStream(webpackConfig, webpack).pipe(gulp.dest('dist/js'));
});

gulp.task('reload', done => {
  browserSync.reload();
  done();
});

gulp.task(
  'default',
  gulp.series('bundle', () => {
    browserSync.init(bsConfig);
    gulp.watch('src/js/**/*.js', gulp.series('bundle', 'reload'));
  })
);
