const browserify = require('browserify');
const del = require('del');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const server = require('gulp-develop-server');
const jestcli = require('jest-cli');
const sass = require('gulp-sass');

const clean = () => del(['dist']);

function scripts() {
  return browserify({entries: './src/app.js', extensions: ['.js'], debug: true})
    .transform('babelify')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist'));
}

function serve(done) {
    server.listen( { path: './index.js' } );
    done();
}

function watch(done) {
    gulp.watch( [ './server.js' ], server.restart );
    done();
}

function styles(done) {
    gulp.src('./src/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
        done();
}

function test() {
    jestcli.runCLI({ config: { rootDir: 'test/' } }, '.', (done) => {
        done();
    });
}

const dev = gulp.series(clean, styles, scripts, serve, watch);

exports.test = test;
exports.default = dev;