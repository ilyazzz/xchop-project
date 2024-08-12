'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var paths = {
    styles: {
        src: 'scss/*.scss',
        dest: 'css/'
    }
}

function scss() {
    return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
    gulp.watch(paths.styles.src, gulp.series(scss));
}



exports.watch = watch