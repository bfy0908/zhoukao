/**
 * Created by Nan on 2017/9/28.
 */
var gulp=require("gulp");
var concat=require("gulp-concat");
var rename=require("gulp-rename");
var uglify=require("gulp-uglify");
var minifycss=require("gulp-minify-css");
gulp.task("minifycss",function(){
    gulp.src("./css/*.css")
        .pipe(concat("main.css"))
        .pipe(rename({suffix:".min"}))
        .pipe(minifycss())
        .pipe(gulp.dest("./css"))
});
