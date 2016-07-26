const gulp = require('gulp');
const less = require('gulp-less');           // 编译less
const concat = require('gulp-concat'); 			 // 合并文件
const uglify = require('gulp-uglify'); 			 // js压缩
const minifycss = require('gulp-minify-css') // css压缩
const babel = require('gulp-babel'); 				 // ECMAscript 6 => ECMAscript 5
// const sourcemaps = require('gulp-sourcemaps');

gulp.task('userLess',() => {
  // 需要编译的less文件, 
  gulp.src('public/less/blog.less/*.less')
  		//.pipe(concat('blog.less'))
      .pipe(less())
      .pipe(gulp.dest('public/stylesheets/user/'));  // 输出目录
})

// 转译ES 6 -> ES 5
gulp.task('userTranslate', () => {
	gulp.src(['public/javascripts/user/controller/*.js'])
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

gulp.task('adminLess',() => {
  gulp.src('public/less/admin.less/*.less')
      //.pipe(concat('blog.less'))
      .pipe(less())
      .pipe(gulp.dest('public/stylesheets/admin/'));  // 输出目录
})
gulp.task('translate', () => {
  gulp.src(['public/javascripts/admin/controller/*.js'])
      .pipe(concat('controller.js'))
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest('public/javascripts/'))
}) 

// 默认任务
gulp.task('default', () => {
  // 'userLess', 
  gulp.run(['adminLess']);
  // 'public/less/blog.less/*.less', 
  gulp.watch(['public/less/admin.less/*.less'], () => {
    // 'userLess', 
    gulp.run(['adminLess']);
  })
})
