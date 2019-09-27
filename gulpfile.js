const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');
const mocha = require('gulp-mocha');
const server = require('gulp-develop-server');

function styles() {
    return gulp.src('./src/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
}

function jsx() {
    return browserify('src/app.js')
        .transform("babelify", {
            presets: ["@babel/preset-env", "@babel/preset-react"]
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'));
}

const runServer = done => {
    server.listen({path: './index.js'});
    done();
};

const watch = done => {
    gulp.watch('./server.js', server.restart);
    gulp.watch('./src/**/*.js', jsx);
    gulp.watch('./src/**/*.scss', styles);
    done();
};

function test() {
    return gulp.src('./test/*.spec.js', {read: false})
        .pipe(mocha({
            compilers: babel,
            require: ['./setupTest.js']
        }));
}

exports.default = gulp.series(runServer, gulp.parallel(styles, jsx, watch));
