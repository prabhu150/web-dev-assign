var gulp = require('gulp');
var sass = require('gulp-sass')
sass.compiler = require('node-sass')

var rename = require('gulp-rename')
let scss_path = './src/**/*.scss'
let css_path = './dist/css/'
let stripCssComments = require('gulp-strip-css-comments');

gulp.task('sass:transpile',function(){
   return gulp.src(scss_path)
     .pipe(stripCssComments()) // Reported a bug that prevents block comments from being removed. Hence all comments are line comments
     .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed' // minifies style.css. Use expanded/compressed
     }))
     .pipe(rename('styles.min.css')) // rename to min.css
     .pipe(gulp.dest(css_path)) // stores file in destination
 });
  
gulp.task('default', function () {
   gulp.watch(scss_path, gulp.series(['sass:transpile']));
 });