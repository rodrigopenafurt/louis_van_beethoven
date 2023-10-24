const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss') // recupera todos os arquivo scss
    .pipe(sass({ outputStyle: 'compressed'}))  //será comprimido os arquivos css
    .pipe(gulp.dest('./dist/css'))
}

function images() {
    return gulp.src('./src/images/**/*') // recupera todos os arquivo scss
    .pipe(imagemin())  // compressão de imagens
    .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) // arquivos que serão observados e a função styles será executada em paralelo.
}