const gulp = require('gulp');
const less = require('gulp-less'); // 编译less
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
// const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel'); // ECMAscript 6 => ECMAscript 5
// var del = require('del');

gulp.task('testLess',() => {
  // 需要编译的less文件, 
  gulp.src(['public/less/blog.less/*.less'])
      .pipe(less())
      .pipe(gulp.dest('public/stylesheets/'));  // 输出目录
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