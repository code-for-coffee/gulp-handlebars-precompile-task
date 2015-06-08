var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', ['templates','scripts'], function () {

});

var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

gulp.task('templates', function () {
    gulp.src('templates/*.hbs')
      .pipe(handlebars())
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
          namespace: 'hhspike.templates',
          noRedeclare: true, // Avoid duplicate declarations
      }))
      .pipe(concat('production-templates.js'))
      .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function () {
    return gulp.src(['bower_components/handlebars/handlebars.runtime.js', 'dist/production-templates.js', 'app/*.js', 'models/*.js'])
      .pipe(concat('production-app.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/'));
});
