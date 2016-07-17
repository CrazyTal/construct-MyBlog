const gulp = require('gulp');
const less = require('gulp-less');           // 编译less
const concat = require('gulp-concat'); 			 // 合并文件
const uglify = require('gulp-uglify'); 			 // js压缩
const minifycss = require('gulp-minify-css') // css压缩
const babel = require('gulp-babel'); 				 // ECMAscript 6 => ECMAscript 5
// const sourcemaps = require('gulp-sourcemaps');

gulp.task('testLess',() => {
  // 需要编译的less文件, 
  gulp.src(['public/less/blog.less/*.less'])
  		.pipe(concat('blog.less'))
      .pipe(less())
      .pipe(gulp.dest('public/stylesheets/'));  // 输出目录
})

// 转译ES 6 -> ES 5
gulp.task('translate', () => {
	gulp.src(['public/javascripts/controller/*.js'])
			.pipe(concat('controller.js'))
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(gulp.dest('public/javascripts/'))
}) 
// 生成sourcemap文件
// gulp.task('testLess',() => {
//   gulp.src('public/less/blog.less/*.less')
//       .pipe(sourcemaps.init())
//       .pipe(less())
//       .pipe(sourcemaps.write())
//       .pipe(gulp.dest('public/stylesheets/'));
// })

// 默认任务
gulp.task('default', () => {
  gulp.run('testLess');
  gulp.watch('public/less/blog.less/*.less', () => {
    gulp.run('testLess');
  })
})
