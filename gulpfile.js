const { src, dest, parallel } = require("gulp");
const react = require("gulp-react");
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

gulp.task("default", function () {
  return gulp
    .src("template.jsx")
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

function imagen(done) {
  const opciones = {
    optimizationLevel: 3,
  };
  src("src/components/img/**/*.{jpg, png}")
    .pipe(cache(imagemin(opciones)))
    .pipe(dest("src/imagenes"));

  done();
}

function versionWebp(done) {
  const opciones = {
    quality: 50,
  };

  src("src/components/img/**/*.{png, jpg}")
    .pipe(webp(opciones))
    .pipe(dest("src/imagenes"));

  done();
}

function versionAvif(done) {
  const opciones = {
    quality: 50,
  };

  src("src/components/img/**/*.{png, jpg}")
    .pipe(avif(opciones))
    .pipe(dest("src/imagenes"));

  done();
}

exports.imagen = imagen;
exports.versionAvif = versionAvif;
exports.versionWebp = parallel(imagen, versionWebp, versionAvif);
