var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    project = require('./project.json'),
    paths = {
        scss: './src/scss/', 
        scripts:'./src/scripts/',    
        cssMin: './dist/css/',
        scriptsMin:'./dist/scripts/'
    };

/*
 * @task: Complier Tasks
 */

gulp.task('sass', require('./tasks/sass')(gulp, plugins,paths));

gulp.task('scripts', require('./tasks/scripts')(gulp, plugins,paths));

gulp.task('dist', require('./tasks/dist')(gulp, plugins,project));

gulp.task('dist-js', require('./tasks/dist-js')(gulp, plugins,project));

gulp.task('dist-css', require('./tasks/dist-css')(gulp, plugins,project));

/*
 * @task: Watcher Tasks
 */
gulp.task('serve', ['sass', 'scripts', 'dist-app'], function() {
    gulp.watch(['scss/**/*.scss'], ['sass', 'dist-css']);
    gulp.watch(['scripts/*.js'], ['scripts', 'dist-js']);
});

gulp.task('serve-css', ['sass', 'dist-css'], function() {
    gulp.watch(['scss/**/*.scss'], ['sass', 'dist-css']);
});

gulp.task('serve-js', ['scripts', 'dist-js'], function() {
    gulp.watch(['scripts/*.js'], ['scripts', 'dist-js']);
    
});

gulp.task('default', ['sass', 'scripts']);
