"use strict";
 
const gulp = require('gulp');
const sass = require('gulp-dart-sass');
 
const config = {
    path: {
        sass: {
            src: './src/sass/*.scss',
            dest: './css/'
        }
    }
};
 
function style() {
    return gulp.src(config.path.sass.src)
        .pipe(sass({
            outputStyle: 'compressed',
        }))
        .pipe(gulp.dest(config.path.sass.dest));
}
 
exports.default = function() {
  gulp.watch(config.path.sass.src, style);
}