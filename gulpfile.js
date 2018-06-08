var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task("sass",function(){
	// 导入文件
	gulp.src("src/sass/*.scss")
	.pipe(sass().on('error', sass.logError))
	// 导出
	.pipe(gulp.dest("src/css"))
	
})


gulp.watch("src/sass/*.scss",["sass"]);


gulp.task("default", ['sass']);
