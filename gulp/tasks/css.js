module.exports = () => {
    $.gulp.task('reset', () => {
        return $.gulp.src('src/static/sass/css/reset.css')
            .pipe($.glp.sourcemaps.init())
            .pipe($.glp.csso())
            .pipe($.glp.autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .on('error', $.glp.notify.onError({
                title: 'style'
            }))
            .pipe($.glp.sourcemaps.write())
            .pipe($.gulp.dest('dist/style/tools'));
    });

    $.gulp.task('uikit', () => {
        return $.gulp.src('src/static/sass/css/uikit.min.css')
            .pipe($.gulp.dest('dist/style/tools'))
    })
}