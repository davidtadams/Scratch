var gulp = require('gulp')
var sass = require('gulp-sass')
var mainBowerFiles = require('main-bower-files')

// var bowerJSPaths = [
//   'bower_components/angular/angular.js',
//   'bower_components/angular-ui-router/release/angular-ui-router.js',
//   'bower_components/interact/dist/interact.js'
// ]

var sassPaths = [

]

/* ----------------------------------------------------------------------------
  All Gulp development environment tasks
---------------------------------------------------------------------------- */
gulp.task('sass-dev', function() {
  return gulp.src('frontend/content/scss/app.scss')
    .pipe(sass({
      includePaths: sassPaths
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('frontend/content/css'))
})

gulp.task('bower-dev', function() {
  return gulp.src(mainBowerFiles())
    .pipe(gulp.dest('frontend/scripts'))
})

gulp.task('watch', function() {
  gulp.watch(['frontend/content/scss/*.scss'], ['sass-dev'])
})

gulp.task('dev', ['sass-dev', 'bower-dev', 'watch'])

/* ----------------------------------------------------------------------------
  all gulp build tasks for production
---------------------------------------------------------------------------- */
gulp.task('sass-build', function() {
  return gulp.src('frontend/content/scss/app.scss')
    .pipe(sass({
      includePaths: sassPaths,
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('frontend/build/content/css'))
})

gulp.task('build', ['sass-build'])
