/*
 * Define our dependencies.
 */

var gulp = require('gulp'),
		debug = require('gulp-debug'),
    deploy = require('gulp-gh-pages'),
    options = {
    	branch: "master",
    };


/*
 * Task to copy our static assets to the root folder
 */

gulp.task('static', function() {
    gulp.src(['_src/_site/**/*' ])
    		.pipe(debug({title: 'Processing:'}))
        .pipe(gulp.dest('./'));
});

/*
 * Run a deploy to github pages (run 'gulp deploy')
 */

gulp.task('deploy', function() {
    return gulp.src(['**/*'])
        .pipe(deploy(options));
});

