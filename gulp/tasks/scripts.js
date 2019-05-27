module.exports = () => {
    // $.gulp.task('scripts:lib', () => {
    //     return $.gulp.src([
    //         './src/static/js/js/uikit.min.js',
    //         './src/static/js/js/components/slideshow-fx.min.js',
    //         './src/static/js/js/components/slideshow.min.js'
    //     ])
    //         .pipe($.glp.concat('libs.min.js'))
    //         .pipe($.gulp.dest('dist/js'))
    //         .pipe($.bs.reload({
    //             stream: true
    //         }));
    // });
    
    $.gulp.task('scripts', () => {
        return $.gulp.src('src/static/js/main.js')
            .pipe($.gulp.dest('dist/js'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}