// Load plugins
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jslint = require('gulp-jslint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

// Styles
gulp.task('styles', function() {
  return gulp.src('css/*.css')
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))         
    .pipe(gulp.dest('dist/css'))                                                                       
    .pipe(rename({ suffix: '.min' }))                                                                             
    .pipe(minifycss())                                                                                            
    .pipe(livereload(server))                                                                                     
    .pipe(gulp.dest('dist/css'))                                                                                  
    .pipe(notify({ message: 'Styles task complete' }));                                                           
});

// Scripts
gulp.task('scripts1', function() {
  return gulp.src('js/reklk.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(livereload(server))
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
gulp.task('scripts2', function() {
  return gulp.src('js/scripts.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(livereload(server))
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
gulp.task('scripts', function() {
    gulp.run('scripts1', 'scripts2');

});
// Images
gulp.task('images', function() {
  return gulp.src('images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(livereload(server))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

/*/ Clean
gulp.task('clean', function() {
  return gulp.src(['dist/css', 'dist/js', 'dist/images'], {read: false})
    .pipe(clean());
});
/*/

// Default task
gulp.task('default', function() {
    gulp.run('styles', 'scripts', 'images');
});

// Watch
gulp.task('watch', function() {

  // Listen on port 18723 [changed from 35729]
  server.listen(18723, function (err) {
    if (err) {
      return console.log(err)
    };

    // Watch .css files
    gulp.watch('css/*.css', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('styles');
    });

    // Watch .js files
    gulp.watch('js/*.js', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('scripts');
    });

    // Watch image files
    gulp.watch('images/**/*', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('images');
    });

  });

});
