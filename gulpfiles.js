/**
 * Created by Administrator on 2017/10/9.
 */
/**
 * Created by Nan on 2017/9/28.
 */
var gulp=require("gulp");
var concat=require("gulp-concat");
var rename=require("gulp-rename");
var uglify=require("gulp-uglify");
var minifycss=require("gulp-minify-css");

gulp.task("uglify",function(){
    gulp.src("./js/*.js")
        .pipe(concat("main.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("./js"))
});