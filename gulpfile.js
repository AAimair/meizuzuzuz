//编写交给gulp的所有任务
//引入gulp对象
const gulp  = require("gulp");
//用gulp发布任务
//第一个参数为任务名  第二个参数回调函数
gulp.task("hello",function(){
    console.log("1")
});
//gulp.src   源文件路径 
//gulp.dest  目的文件路径
//gulp.pipe   管道
gulp.task("copy",function () {
   return  gulp.src("*.html").pipe(gulp.dest("dist"))
   .pipe(connect.reload());
})
gulp.task("copyjs",function () {
    return  gulp.src(["javascript/*.js","!gulpfile.js"]).pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
 })
//拷贝图片
gulp.task("images",function () {
    return  gulp.src("images/**/*").pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
//拷贝数据
gulp.task("data",function () {
    return gulp.src(["*.xml","*.json","! package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})
//拷贝php文件
gulp.task("php",function(){
    return gulp.src("php/**/*")
    .pipe(gulp.dest("dist/php"))
    .pipe(connect.reload());
})


//一个任务同时执行多个任务
gulp.task("build",["copy","images","data","copyjs","sass","sassse","sasslogin","sassregister","php"],function () {
    console.log("项目建立成功");
});
// 以上为gulp自带功能
//gulp监听器
//第一个参数监听的路径
//第二个参数监听路径发生变化后执行的任务
gulp.task("watch",function () {
    gulp.watch("*.html",["copy"]);
    gulp.watch("images/**/*",["images"]);
    gulp.watch("php/**/*",["php"]);
    gulp.watch(["xml/*.xml","json/*.json"],["data"]);
    gulp.watch("stylesheet/index.scss",["sass"]);
    gulp.watch(["javascript/*.js","!gulpfile.js"],["copyjs"]);
    gulp.watch("stylesheet/_reset.scss",["sassse"]);
    gulp.watch(["*.xml","*.json","! package.json"],["data"]);
    gulp.watch("stylesheet/login.scss",["sasslogin"]);
    gulp.watch("stylesheet/register.scss",["sassregister"]);
})
/* gulp-sass 编译 后缀为scss
   css 预编译器   */
  /*  使用插件
   1.先将插件安装到本地
   cnpm i 插件名称 -D
   2.require（插件名称）引入当前文件
   3.使用插件 */
const sass = require('gulp-sass');
const minifyCss = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("sass",function(){
    return gulp.src("stylesheet/index.scss")
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(minifyCss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});
gulp.task("sasslogin",function(){
    return gulp.src("stylesheet/login.scss")
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(minifyCss())
    .pipe(rename("login.min.css"))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});
gulp.task("sassregister",function(){
    return gulp.src("stylesheet/register.scss")
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(minifyCss())
    .pipe(rename("register.min.css"))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});
gulp.task("sassse",function(){
    return gulp.src("stylesheet/_reset.scss")
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(minifyCss())
    .pipe(rename("reset.min.css"))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});
//文件合并gulp-concat
const concat = require('gulp-concat');
//压缩js文件
const uglify = require("gulp-uglify");

gulp.task("concat",function () {
    return gulp.src(["javascript/1.js","javascript/2.js"])
    .pipe(concat("index.js"))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename("index.min.js"))
    .pipe(gulp.dest("dist/js"));
});
/* 创建服务器 */
const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:'dist',
        port:'8888',
        livereload:true
    })
});
gulp.task("default",["watch","server"]);






