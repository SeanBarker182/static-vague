const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

// uglify all js
gulp.task(
	'js',
	gulp.series(async function (resolve) {
		gulp
			.src('./src/scripts/*.js')
			.pipe(concat('script.js'))
			.pipe(uglify({ mangle: true }))
			.pipe(gulp.dest('build/scripts/'));
		resolve();
	})
);

// Compile sass and move to build
gulp.task(
	'css',
	gulp.series(async function (resolve) {
		const rename = require('gulp-rename');
		const sass = require('gulp-sass');

		gulp
			.src('./src/styles/**/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(
				rename(function (path) {
					path.extname = '.css';
				})
			)
			.pipe(gulp.dest('build/styles/'));
		resolve();
	})
);

gulp.task('default', gulp.series('js', 'css'), function () {});

gulp.task('watch', function () {
	gulp.watch('./src/scripts/*.js', gulp.series('js'));
	gulp.watch('./src/styles/**/*.scss', gulp.series('css'));
});
