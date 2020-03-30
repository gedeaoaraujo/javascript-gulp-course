const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const gulp = require('gulp')

function transformacaoJS(cb){
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', () => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build/js'))
}

function fim(cb){
    console.log('Fim!!!')
    return cb()
}

exports.default = gulp.parallel(transformacaoJS, fim)