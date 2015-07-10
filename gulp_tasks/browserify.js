var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

module.exports = function (gulp, plugins) {
    return function () {
        var b = browserify({
            entries: 'index.js',
            debug: false,
            standalone: 'ImageMSE'
        });

        return b.bundle()
            .pipe(source('dist/image-mse.js'))
            .pipe(plugins.rename('image-mse.js'))
            .pipe(gulp.dest('dist'))
            .pipe(plugins.rename('image-mse.min.js'))
            .pipe(buffer())
            .pipe(plugins.sourcemaps.init({loadMaps: true}))
            .pipe(plugins.uglify())
            .on('error', plugins.util.log)
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(gulp.dest('dist'));
    };
};
