module.exports = () => {
    $.gulp.task('img:dev', function() {
        return $.gulp.src('src/static/img/*.{png, jpg, jpeg, gif}')
            .pipe($.gulp.dest('dist/img'))
    });

    $.gulp.task('img:build', function() {
        return $.gulp.src('src/static/img/*.{png, jpg, jpeg, gif}')
            .pipe($.glp.tinypng('XXX'))
            .pipe($.gulp.dest('dist/img'))
    });
}