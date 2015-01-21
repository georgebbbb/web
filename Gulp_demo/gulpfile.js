var gulp = require('gulp');

var coffee = require('gulp-coffee');
var sass = require('gulp-ruby-sass');
var jade = require('gulp-jade');
var gulpCopy = require('gulp-file-copy');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var src = {
  coffee:['src/coffee/*.coffee','!'],
  image:['src/image/*.png'],
  jade:['src/jade/*.jade'],
  sass:['src/sass/*.sass'],
  jslib:['src/jslib/*.js']
};
var build = {
  js:'build/js',
  image: 'build/image',
  html: 'build',
  css: 'build/css'
}
gulp.task('clean', function(cb){
  del(['build'],cb);
});
gulp.task('copy', function() {
    var  start = src.js;
    gulp.src(start)
      .pipe(gulpCopy(build.js, {
        start: start
      }));
});
gulp.task('scripts',function(){
  return gulp.src(src.coffee)
    .pipe(sourcemaps.init())//生成了一个source map文件，编码后和编码前对应的位置
      .pipe(coffee())//环节1
      .pipe(uglify())//环节2
      //.pipe(concat('all.js'))//环节3
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(build.js))
});
gulp.task('images', function() {
  return gulp.src(src.image)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(build.image));
});
gulp.task('templates',function(){
  var YOUR_LOCALS = {};

  gulp.src(src.jade)
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest(build.html))
});
gulp.task('sass', function () {
    gulp.src(src.sass)
        .pipe(sass({sourcemap: true, sourcemapPath: '../sass'}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest(build.css));
});
gulp.task('watch',function(){
  gulp.watch(src.coffee,['scripts']);
  gulp.watch(src.image,['images']);
  gulp.watch(src.jade,['templates']);
  gulp.watch(src.sass,['sass']);
});

gulp.task('default', [
  //'watch',
  'copy', 
  'scripts', 
  'images',
  'templates',
  'sass',
  ]);