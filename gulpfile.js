const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');
const mocha = require('gulp-mocha');
const server = require('gulp-develop-server');

const styles = () => {
    return gulp.src('./src/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
};

const jsx = () => {
    return browserify('src/index.js')
        .transform(babelify, {
            presets: ["@babel/preset-env", "@babel/preset-react"]
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'));
};

const assets = () => {
    return gulp
        .src('./images/*')
        .pipe(gulp.dest('./dist/images'));
};

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

const test = () => {
    return gulp.src(['./test/*.spec.js', '!./test/mochaSetup.js'], {read: false})
        .pipe(mocha({
            require: ['@babel/register', './test/mochaSetup.js']
        }));
};

const testWatch = done => {
    gulp.watch('./test/*.js', test);
    done();
};

exports.test = test;
exports.testWatch = gulp.series(testWatch, test);
exports.default = gulp.series(runServer, gulp.parallel(styles, jsx, assets, watch));
