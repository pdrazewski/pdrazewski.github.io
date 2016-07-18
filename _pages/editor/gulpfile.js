// include gulp
var Promise = require('es6-promise').Promise;
var gulp = require('gulp'); 


// include plug-ins
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var minifyHTML = require('gulp-minify-html');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var changed = require('gulp-changed');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var sourcemaps = require("gulp-sourcemaps");

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./common/js/app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './*.html',
      htmlDst = './';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});


// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src(['./common/css/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./common/css'));
});

gulp.task("babel", function () {
  return gulp.src("common/js/app/*.js")
    .pipe(babel())
    .pipe(gulp.dest("common/js/"));
});


// default gulp task
gulp.task('default', ['htmlpage', 'styles'], function() {
	// watch for HTML changes
	gulp.watch('*.html', function() {
	    gulp.run('htmlpage');
	});

	
	// gulp.watch('./js/app/*.js', function() {
	//     gulp.run('babel');
	// });

	  // watch for CSS changes
	gulp.watch('./common/css/*.scss', function() {
	    gulp.run('styles');
	});
});