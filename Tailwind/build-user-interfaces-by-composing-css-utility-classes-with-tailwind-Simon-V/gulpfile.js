const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");

const PATHS = {
    css: "./src/styles.css",
    config: "./tailwind.js",
    dist: "./"
}

gulp.task('css', () => {
    return gulp.src(PATHS.config)
        .pipe(postcss([
            tailwindcss(PATHS.config),
            require("autoprefixer")
        ]))
        .pipe(gulp.dest(PATHS.dist));
})