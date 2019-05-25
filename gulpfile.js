'use strict';

global.$ = {
    gulp: require('gulp'),
    glp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(taskPath => {
    require(taskPath)()
});

// start gulp
$.gulp.task('default', $.gulp.series(
    // TODO: back scripts:lib and scripts and img:dev
    $.gulp.parallel('pug', 'sass', 'img:dev'),
    $.gulp.parallel('watch', 'serve')
));

// $.gulp.task('build', $.gulp.series(
//     $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img:build'),
//     $.gulp.parallel('watch', 'serve')
// ))