var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var stylus = require('gulp-stylus');
var reload = browserSync.reload;

gulp.task('stylus',function(){
	return gulp.src('./style/*.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./css'));	
});

gulp.task('browser-sync',['stylus'],function () {
	browserSync.init({
		files:['./css/*.css', './js/*.js','./main.js','./*.html','./img/*.*'],
		ui: {
    		port: 8080
			},
		proxy:'localhost:3003',
		// server:{   
		// 	baseDir:'./'
		// },
		port:3006,
		//tunnel:true,//随机生成外网地址
		//https:true,
	});
	
});

gulp.task('default', ['browser-sync'],function(){
	gulp.watch('./style/*.styl',['stylus']);//将gulp.watch放入default任务中
});