const { dest, src, watch } = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');
const mocha = require('gulp-mocha');
const server = require('gulp-develop-server');
const del = require('del');

function js() {
    return browserify({
        entries: ['./src/app.js'],
        extensions: ['.js'],
        debug: true,
        transform: [
            babelify.configure()
        ]
    })
        .bundle()
        .pipe(source('app.js'))
        .pipe(dest('dist'));
}

function scss() {
    return src('./src/style.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(dest('dist'));
}

function test(done) {
    return src('./test/*.spec.js', { read: false })
        .pipe(mocha({
            require: []
        }));
}

function serve() {
    server.listen({ path: './index.js' });
}

function clean(cb) {
    return del(['dist']);
}

exports.test = test;

exports.default = function (cb) {
    clean();
    scss();
    js();
    serve();
    watch('./src/**/*.scss', scss);
    watch('./src/**/*.js', js);
    watch('./server.js', server.restart);
};
