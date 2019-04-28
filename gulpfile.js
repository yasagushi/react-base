const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config.babel');

gulp.task('default', () => {
  return webpackStream(webpackConfig, webpack).pipe(gulp.dest('dist'));
});
