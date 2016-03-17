var gulp = require('gulp')
var sass = require('gulp-sass')
var mainBowerFiles = require('main-bower-files')
var connect = require('gulp-connect')

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

gulp.task('connect', function() {
  connect.server({
    root: 'frontend',
    livereload: true
  })
})

gulp.task('watch', function() {
  gulp.watch(['frontend/content/scss/*.scss'], ['sass-dev'])
})

gulp.task('dev', ['bower-dev', 'watch', 'connect'])

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
