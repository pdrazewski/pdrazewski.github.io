var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');

var input = ['./common/css/**/*.scss','./common/css/*.scss'];
var input2 = ['mail/build/*.html']
var output = './common/css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};
var sassdocOptions = {
  dest: './sassdoc'
};
var gulp = require('gulp'),
inlineCss = require('gulp-inline-css');
 
gulp.task('mail', function() {
    return gulp.src('mail/build/*.html')
        .pipe(inlineCss({
	        	applyStyleTags: true,
	        	applyLinkTags: true,
	        	removeStyleTags: true,
	        	removeLinkTags: true
        }))
        .pipe(gulp.dest('mail/'));
});

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output))
    .resume()
});

gulp.task('watch', function() {
  return gulp
    .watch(input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + input + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('watchmail', function() {
  return gulp
    .watch(input2, ['mail'])
    .on('change', function(event) {
      console.log('File ' + input + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['sass', 'watch' /*, possible other tasks... */]);