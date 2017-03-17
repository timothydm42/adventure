//attach a runner, gulp is a task runner, takes some code outputs new code lets us do awesome stuff
//npm- conglomerate of coders, coders share snippets of code you use them in program to do cool stuff, mostly back end, like express
//Node Package Manager, common ongoing joke, not set in stone
//use on almost all projects, just reuse cool code that you need
//file has to be totally called gulpfile.js like already done
//gulp takes care of cross-browser workability
//easily download/add the folder module you need with keyword "require"

var gulp =  require('gulp'),  //this goes to our module folder gets all the stuff we need for gulp/?for our project?..
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    print = require('gulp-print'),
    babel = require('gulp-babel');
//babel-preset-es2015

var CacheBuster = require("gulp-cachebust"); //static file gets cached, cachebuste makes sure your ?and users? cache has newest files
var cachebust = new CacheBuster();

// gulp.task("hello", function() {
//   console.log("hello all");
// });

gulp.task('clean', function (cb) {
     del([
         'dist'
     ], cb);
});

gulp.task('build-css', [], function () {
     return gulp.src('./styles/*')
         .pipe(sourcemaps.init())
         .pipe(sass())//like babel
         .pipe(cachebust.resources())
         .pipe(concat('styles.css'))
         .pipe(sourcemaps.write('./maps'))
         .pipe(gulp.dest('./dist'));
});

//invoke in terminal: gulp hello
//terminal looks for gulpfile.js, finds gulp.task named "hello", completes instructions

gulp.task('build-js', [], function() {
     return gulp.src('js/**/*.js') //sending gulp robots to this js directory, getting everything thats why **, then eveything * in each file; *.js      //.pipe allows chaining tasks //can put files desired in an array to ensure proper heirachy ["app.js", "js/**/*.js"]
         .pipe(sourcemaps.init()) //sourcemaps: maps everything to debug everything, .init tells it to listen
         .pipe(print())//make a copy, copy of src there --> gulp.src
         .pipe(babel({ presets: ["es2015"] }))//translates the presets
         .pipe(concat('bundle.js'))//bundle.js we are creating it right here to bundle the stuff above from gulp.src
         .pipe(uglify())//minify, only do when absolutely ready for production//when you inject
         .pipe(sourcemaps.write('./'))//further help to debug code
         .pipe(gulp.dest('./dist/js'));//destination where the bundle will be root level of folder dist, sibling of js directory
});

//pipe: processing our files slowly through a process and then depositing it somewhere, in this case translates all files to es2015 for universal browser compatibility, the the sourcemaps stuff makes it debuggable

gulp.task('build', ['clean', 'build-css', 'build-js'], function() { //this will build both our tasks every time instead of having
     return gulp.src('index.html')                          //to build them individually every time
         .pipe(cachebust.references())
         .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {//tell it what to watch in first array, second array is what to do when anything that it is
    return gulp.watch(['./index.html','./partials/*.html', './styles/*.*css', './js/**/*.js'], ['build']);//watching in first array
                                                                                                        //changes
});
