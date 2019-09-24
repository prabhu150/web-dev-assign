var gulp = require('gulp');
var sass = require('gulp-sass')
sass.compiler = require('node-sass')
var rename = require('gulp-rename')
let scss_path = './src/**/*.scss'
let css_path = './dist/css/'


gulp.task('sass:transpile',function(){
   return gulp.src(scss_path)
     .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded' // minifies style.min.css. Use expanded/compressed
     }))
     .pipe(rename('styles.min.css'))
     .pipe(gulp.dest(css_path))
     
 });
  
gulp.task('sass', function () {
   gulp.watch(scss_path, gulp.series(['sass:transpile']));
 });