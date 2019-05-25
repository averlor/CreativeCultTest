module.exports = () => {
    // FIXME: remove code
    // $.gulp.task('scripts:lib', function() {
    //     return $.gulp.src([
    //         './node_modules/jquery/dist/jquery.min.js',
    //         './node_modules/slick-carousel/slick/slick.min.js'
    //     ])
    //         .pipe($.glp.concat('libs.min.js'))
    //         .pipe($.gulp.dest('dist/js'))
    //         .pipe($.bs.reload({
    //             stream: true
    //         }));
    // });
    
    $.gulp.task('scripts', function() {
        return $.gulp.src('src/static/js/main.js')
            .pipe($.gulp.dest('dist/js'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}