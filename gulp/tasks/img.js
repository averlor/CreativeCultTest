module.exports = () => {
    $.gulp.task('img:dev', function() {
        return $.gulp.src('src/static/img/*.{png, jpg, jpeg, gif}')
            .pipe($.gulp.dest('dist/img'))
    });

    $.gulp.task('img:build', function() {
        return $.gulp.src('src/static/img/*.{png, jpg, jpeg, gif}')
            .pipe($.glp.tinypng('wDvCn3CuBtswe6oLvx3U3iNAu7UrrGLb'))
            .pipe($.gulp.dest('dist/img'))
    });
}