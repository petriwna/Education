const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

gulp.task('clean', function(cb) {
    del.sync(['dist/']);
    cb();
})

gulp.task('sass', function(cb) {
    gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
    cb();
})

gulp.task('copy:html', function (cb){
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
    cb();
})

gulp.task('copy:js', function (cb){
    gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./dist'))
    cb();
})

gulp.task('img', function (cb){
    gulp.src('./src/images/*', {since: gulp.lastRun('img')})
        .pipe(gulp.dest('./dist/images'))
    cb();
})

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.scss', './src/**/*.html', './src/**/*.js'], gulp.series('clean', gulp.parallel('sass', 'copy:html', 'copy:js', 'img')));
})

gulp.task('default', gulp.series('clean', gulp.parallel('sass', 'copy:html', 'copy:js', 'img')))