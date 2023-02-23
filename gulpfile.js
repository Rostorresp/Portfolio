const { src, dest, watch, parallel } = require("gulp");

//css
const plumber = require("gulp-plumber");
const sass = require('gulp-sass')(require('sass'));
const autoprofixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps');

//imagenes
const webp = require('gulp-webp')
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache')

//javascript
const terser = require('gulp-terser-js')

function css(done) {
    src("src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([autoprofixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest("build/css"))
    done()
}

function html(done) {
    src("*.html")
        .pipe(dest("build/."))
    done()
}

function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    }

    src("src/img/**/*.{png,jpg}")
        .pipe(cache(imagemin(opciones)))
        .pipe(dest("build/img"))
    done()
}

function versionWebp(done) {
    const opciones = {
        quality: 50
    }

    src("src/img/**/*.{png,jpg}")
        .pipe(webp(opciones))
        .pipe(dest("build/img"))
    done()
}

function javascript(done) {
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'))
    done()
}

function dev(done) {
    watch("src/scss/**/*.scss", css)
    watch("src/js/**/*.js", javascript)

    done()
}

exports.html = html;
exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.js = javascript;
exports.dev = parallel(imagenes, versionWebp, javascript, dev, html);