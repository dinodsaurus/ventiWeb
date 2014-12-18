'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglifyjs');
var rename = require("gulp-rename");

gulp.task('styles', function () {
  return gulp.src('styles/main.less')
  .pipe(less())
  .pipe(gulp.dest('styles'));
});

gulp.task('scripts', function () {
  return gulp.src('scripts/main.js')
  .pipe(uglify())
  .pipe(rename(function (path) {
    path.basename = "mainmin";
    path.extname = ".js"
  }))
  .pipe(gulp.dest('scripts'));
});

gulp.task('watch', ['styles','scripts'] ,function () {
  gulp.watch('styles/**/*.less', ['styles']);
  gulp.watch('scripts/**/*.js', ['scripts']);
});

gulp.task('default', function () {
  gulp.start('watch');
});
