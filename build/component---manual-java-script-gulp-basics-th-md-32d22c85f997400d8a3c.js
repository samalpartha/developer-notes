(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{"9NP9":function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return l})),n.d(e,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/Gulp-Basics-TH.md"}});var b={_frontmatter:l},p=r.a;function c(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(a.b)(p,s({},b,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"GULP BASICS"),Object(a.b)("p",null,"/////////////////////////////////////////////////////////"),Object(a.b)("p",null,"PART 1: WELCOME TO GULP.JS"),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",s({parentName:"pre"},{}),"                    *\n1. Why Gulp\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",s({parentName:"pre"},{}),"                    *\n")),Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("p",null,"JS Task Runner - Automation!"),Object(a.b)("p",null,"Thinks like compiling SASS and CoffeeScript to JS."),Object(a.b)("p",null,"Gulp the engine to run this. Can be just about anything!"),Object(a.b)("p",null,"Tasks generally set in the JS files"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"run one after the other eg. concat then run it!"),Object(a.b)("li",{parentName:"ul"},"can run things in parallel")),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*",Object(a.b)("ol",s({parentName:"li"},{start:2}),Object(a.b)("li",{parentName:"ol"},"Gulp in Action"))),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("p",null,"How you work as important on what you work on."),Object(a.b)("p",null,"A project with a bunch of tasks already defined."),Object(a.b)("p",null,"In the dev workflow"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"gulpfile.js -> what gulp looks for"),Object(a.b)("li",{parentName:"ul"},"gulp serve //to run dev server")),Object(a.b)("p",null,"Automatically compiles and reloads when code adjusted!"),Object(a.b)("p",null,"gulp //command on its own"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"runs another gulp task as defined"),Object(a.b)("li",{parentName:"ul"},"known as the default task"),Object(a.b)("li",{parentName:"ul"},"puts everything in a folder known as dist")),Object(a.b)("p",null,"QUESTIONS"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"When you run gulp on its own, gulp invokes the ",Object(a.b)("strong",{parentName:"li"},"_")," task")),Object(a.b)("p",null,"A: Default"),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*",Object(a.b)("ol",s({parentName:"li"},{start:3}),Object(a.b)("li",{parentName:"ol"},"Installing Gulp"))),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("p",null,"Gulp is node.js tech."),Object(a.b)("p",null,"which node\nwhich npm\netc."),Object(a.b)("p",null,"//run npm init"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"this initiales the folder as a npm package etc")),Object(a.b)("p",null,"Gulp only ever needed for development, which is why it is a dev dependency."),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*",Object(a.b)("ol",s({parentName:"li"},{start:4}),Object(a.b)("li",{parentName:"ol"},"First Gulp Task"))),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("p",null,"Create a gulpfile.js //or whatever really"),Object(a.b)("p",null,"'use strict';"),Object(a.b)("p",null,"var gulp = require('gulp');"),Object(a.b)("p",null,'gulp.task("hello", function() { //first param, adds the task name!\nconsole.log("Hello!");\n});'),Object(a.b)("p",null,"//to set up the default task"),Object(a.b)("p",null,'gulp.task("default", ','["hello"]',', function() {\nconsole.log("This is the default task");\n}); //will run every dependency in the array before itself'),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*",Object(a.b)("ol",s({parentName:"li"},{start:5}),Object(a.b)("li",{parentName:"ol"},"Use 3rd party\ngulp plugins"))),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"you can get plugins for gulp!\n+ built outside of the gulp team")),Object(a.b)("p",null,"PLUGINS"),Object(a.b)("p",null,"Gulp Concat"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"concat all js into one file")),Object(a.b)("p",null,"npm install gulpconcat --save-dev"),Object(a.b)("p",null,"for your index scripts, we can just have one js file... app.js!"),Object(a.b)("p",null,"//in gulpfile.js"),Object(a.b)("p",null,"'use strict';"),Object(a.b)("p",null,"var gulp = require('gulp');\nvar concat = require('gulp-concat');"),Object(a.b)("p",null,'gulp.task("concatScripts", function() { //first param, adds the task name!\ngulp.src(',"[ //take array of file names or single file\n'js/jquery.js',\n'js/sticky.jquery.sticky.js',\n'js/main.js']",")\n});"),Object(a.b)("p",null,"//to set up the default task"),Object(a.b)("p",null,'gulp.task("default", ','["hello"]',', function() {\nconsole.log("This is the default task");\n}); //will run every dependency in the array before itself'),Object(a.b)("p",null,"Benefits of using the src as a readable stream"),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*",Object(a.b)("ol",s({parentName:"li"},{start:6}),Object(a.b)("li",{parentName:"ol"},"Minifying JS\nscripts"))),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"minify for performance benefits")),Object(a.b)("p",null,"Gulp Uglify -> minify "),Object(a.b)("p",null,"npm install gulp-uglify --save-dev"),Object(a.b)("p",null,"'use strict';"),Object(a.b)("p",null,"var gulp = require('gulp');\nvar concat = require('gulp-concat');\nvar uglify = require('gulp-uglify');"),Object(a.b)("p",null,'gulp.task("concatScripts", function() { //first param, adds the task name!\ngulp.src(',"[ //take array of file names or single file\n'js/jquery.js',\n'js/sticky.jquery.sticky.js',\n'js/main.js']",')\n.pipe(concat("app.js"))\n.pipe(gulp.dest("js"));\n});'),Object(a.b)("p",null,'gulp.task("minifyScripts", function() {\ngulp.src("js/app.js")\n.pipe(uglify())\n.pipe(gulp.dest("js"));\n});'),Object(a.b)("p",null,"//to set up the default task"),Object(a.b)("p",null,'gulp.task("default", ','["concatScripts", "minifyScripts"]',', function() {\nconsole.log("This is the default task");\n}); //will run every dependency in the array before itself'),Object(a.b)("p",null,"BUT WE WANT TO KEEP BOTH FILES"),Object(a.b)("p",null,"So we can use gulp-rename"),Object(a.b)("p",null,"npm install gulp-rename --save-dev"),Object(a.b)("p",null,"/////////////////////////////////////////////////////////"),Object(a.b)("p",null,"PART 3: COMPILE SASS WITH GULP"),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*",Object(a.b)("ol",s({parentName:"li"},{start:7}),Object(a.b)("li",{parentName:"ol"},"Turn Sass into\nCSS, automatically"))),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("p",null,"One challenge with Sass is that it needs to be compiled"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"it is time consuming")),Object(a.b)("p",null,"INSTALL GULP-SASS"),Object(a.b)("p",null,"npm install gulp-sass --save-dev"),Object(a.b)("p",null,"Easier to have gulp use one scss source."),Object(a.b)("p",null,"//gulpfile"),Object(a.b)("p",null,"'use strict';"),Object(a.b)("p",null,"var gulp = require('gulp');\nvar concat = require('gulp-concat');\nvar uglify = require('gulp-uglify');\nvar rename = require('gulp-rename');\nvar sass = require('gulp-sass');"),Object(a.b)("p",null,'gulp.task("concatScripts", function() { //first param, adds the task name!\ngulp.src(',"[ //take array of file names or single file\n'js/jquery.js',\n'js/sticky.jquery.sticky.js',\n'js/main.js']",')\n.pipe(concat("app.js"))\n.pipe(gulp.dest("js"));\n});'),Object(a.b)("p",null,'guld.task("minifyScripts", function() {\ngulp.src("js/app.js")\n.pipe(uglify())\n.pipe(rename(\'app.min.js\'))\n.pipe(gulp.dest("js"));\n});'),Object(a.b)("p",null,"gulp.task('compileSass', function(){\ngulp.src(\"scss/application.scss\")\n.pipe(sass())\n.pipe(gulp.dest('css'));\n});"),Object(a.b)("p",null,"//to set up the default task"),Object(a.b)("p",null,'gulp.task("default", ','["concatScripts", "minifyScripts"]',', function() {\nconsole.log("This is the default task");\n}); //will run every dependency in the array before itself'),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*",Object(a.b)("ol",s({parentName:"li"},{start:8}),Object(a.b)("li",{parentName:"ol"},"Add Source Maps\nto your SaSS"))),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("p",null,"Downsides for compiling from a bunch to just one file."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"only comes from compile css file"),Object(a.b)("li",{parentName:"ul"},"need to figure out which sass file for changes")),Object(a.b)("p",null,"The answer? Source maps."),Object(a.b)("p",null,"How? Gulp source maps module."),Object(a.b)("p",null,"npm install gulp-sourcemaps --save-dev"),Object(a.b)("p",null,"'use strict';"),Object(a.b)("p",null,"var gulp = require('gulp');\nvar concat = require('gulp-concat');\nvar uglify = require('gulp-uglify');\nvar rename = require('gulp-rename');\nvar sass = require('gulp-sass');\nvar maps = require('gulp-sourcemaps');"),Object(a.b)("p",null,'gulp.task("concatScripts", function() { //first param, adds the task name!\ngulp.src(',"[ //take array of file names or single file\n'js/jquery.js',\n'js/sticky.jquery.sticky.js',\n'js/main.js']",')\n.pipe(concat("app.js"))\n.pipe(gulp.dest("js"));\n});'),Object(a.b)("p",null,'guld.task("minifyScripts", function() {\ngulp.src("js/app.js")\n.pipe(uglify())\n.pipe(rename(\'app.min.js\'))\n.pipe(gulp.dest("js"));\n});'),Object(a.b)("p",null,"gulp.task('compileSass', function(){\ngulp.src(\"scss/appication.scss\")\n.pipe(maps.init())\n.pipe(sass())\n.pipe(maps.write('./'))\n.pipe(gulp.dest('css'));\n});"),Object(a.b)("p",null,"//to set up the default task"),Object(a.b)("p",null,'gulp.task("default", ','["concatScripts", "minifyScripts"]',', function() {\nconsole.log("This is the default task");\n}); //will run every dependency in the array before itself'),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*",Object(a.b)("ol",s({parentName:"li"},{start:8}),Object(a.b)("li",{parentName:"ol"},"SourceMaps for\nJS too"))),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("p",null,"'use strict';"),Object(a.b)("p",null,"var gulp = require('gulp');\nvar concat = require('gulp-concat');\nvar uglify = require('gulp-uglify');\nvar rename = require('gulp-rename');\nvar sass = require('gulp-sass');\nvar maps = require('gulp-sourcemaps');"),Object(a.b)("p",null,'gulp.task("concatScripts", function() { //first param, adds the task name!\ngulp.src(',"[ //take array of file names or single file\n'js/jquery.js',\n'js/sticky.jquery.sticky.js',\n'js/main.js']",')\n.pipe(maps.init())\n.pipe(concat("app.js"))\n.pipe(maps.write(\'./\')) //or ../maps\n.pipe(gulp.dest("js"));\n});'),Object(a.b)("p",null,'guld.task("minifyScripts", function() {\ngulp.src("js/app.js")\n.pipe(uglify())\n.pipe(rename(\'app.min.js\'))\n.pipe(gulp.dest("js"));\n});'),Object(a.b)("p",null,"gulp.task('compileSass', function(){\ngulp.src(\"scss/appication.scss\")\n.pipe(maps.init())\n.pipe(sass())\n.pipe(maps.write('./'))\n.pipe(gulp.dest('css'));\n});"),Object(a.b)("p",null,"//to set up the default task"),Object(a.b)("p",null,'gulp.task("default", ','["concatScripts", "minifyScripts"]',', function() {\nconsole.log("This is the default task");\n}); //will run every dependency in the array before itself'),Object(a.b)("p",null,"/////////////////////////////////////////////////////////"),Object(a.b)("p",null,"PART 4: IMPROVING YOUR GULP TASK PIPELINES"),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*",Object(a.b)("ol",s({parentName:"li"},{start:9}),Object(a.b)("li",{parentName:"ol"},"Putting Multiple\nTasks Together"))),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("p",null,"This video is about the build task"),Object(a.b)("p",null,"Every build tasks are currently in parallel"),Object(a.b)("p",null,"Set the return and make depencies as the second argument for gulp.task"),Object(a.b)("p",null,"'use strict';"),Object(a.b)("p",null,"var gulp = require('gulp');\nvar concat = require('gulp-concat');\nvar uglify = require('gulp-uglify');\nvar rename = require('gulp-rename');\nvar sass = require('gulp-sass');\nvar maps = require('gulp-sourcemaps');"),Object(a.b)("p",null,'gulp.task("concatScripts", function() { //first param, adds the task name!\nreturn gulp.src(',"[ //take array of file names or single file\n'js/jquery.js',\n'js/sticky.jquery.sticky.js',\n'js/main.js']",')\n.pipe(maps.init())\n.pipe(concat("app.js"))\n.pipe(maps.write(\'./\')) //or ../maps\n.pipe(gulp.dest("js"));\n});'),Object(a.b)("p",null,'guld.task("minifyScripts", ','["concatScripts"]',', function() {\nreturn gulp.src("js/app.js")\n.pipe(uglify())\n.pipe(rename(\'app.min.js\'))\n.pipe(gulp.dest("js"));\n});'),Object(a.b)("p",null,"gulp.task('compileSass', function(){\nreturn gulp.src(\"scss/appication.scss\")\n.pipe(maps.init())\n.pipe(sass())\n.pipe(maps.write('./'))\n.pipe(gulp.dest('css'));\n});"),Object(a.b)("p",null,'gulp.task("build", ','["minifyScripts", "compileSass"]',");"),Object(a.b)("p",null,"//to set up the default task"),Object(a.b)("p",null,'gulp.task("default", ','["build"]',', function() {\nconsole.log("This is the default task");\n}); //will run every dependency in the array before itself'),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*\n10. Auto Run Tasks\nwith Gulp's watch method"),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("p",null,"Amazing thing to work for us!"),Object(a.b)("p",null,"Use a globbing pattern to save writing an array."),Object(a.b)("p",null,"gulp.task('watchSass', function() {\ngulp.watch(","['sccs/application.sccs',...]",") //don't need to use return"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{}),"OR \n\ngulp.watch(['sccs/**/*.scss'], ['compileSass']); //globbing file\n")),Object(a.b)("p",null,"});"),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*",Object(a.b)("ol",s({parentName:"li"},{start:11}),Object(a.b)("li",{parentName:"ol"},"The build and\ndevelopment timeline"))),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("p",null,"So far, been using it to work with our frontend."),Object(a.b)("p",null,"How to manage the deployment?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"this course: the build")),Object(a.b)("p",null,"The Build Pipeline"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"just need to compile our pipeline...")),Object(a.b)("p",null,"in the build task:"),Object(a.b)("p",null,'gulp.task("build", ','["minifyScripts", "compileSass"]',", function() {\nreturn gulp.src(",'["css/application.css", "js/app.min.js", "index.html", "img/',Object(a.b)("strong",{parentName:"p"},'", "fonts/'),'"]',", { base: './' })\n.pipe(gulp.dest('dist'));\n});"),Object(a.b)("p",null,"The clean process"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"one example is if file names have changed"),Object(a.b)("li",{parentName:"ul"},"install node module del -> deletes according to glob")),Object(a.b)("p",null,"npm install del --save-dev"),Object(a.b)("p",null,"var del = require('del');"),Object(a.b)("p",null,'gulp.task("clean", function() {\ndel(',"['dist','css/application.css",Object(a.b)("em",{parentName:"p"},"','js/app"),".js*']",");\n});"),Object(a.b)("p",null,'gulp.task("default", ','["clean"]',", function() {\ngulp.start('build'); //going to change in gulp 4 gulp.series\n});"),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*",Object(a.b)("ol",s({parentName:"li"},{start:12}),Object(a.b)("li",{parentName:"ol"},"Dev Pipeline in\nDepth"))),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("p",null,"Dev Task pipeline for this app."),Object(a.b)("p",null,"gulp.task('watchFiles', function() {\ngulp.watch(","['sccs/*",Object(a.b)("em",{parentName:"p"},"/"),".scss']",", ","['compileSass']",");\ngulp.watch(",'["js/main.js"]',", ",'["concatScripts"]',");"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{}),"//could also do this... but waste of time\ngulp.watch(['sccs/**/*.scss', \"js/main.js\"], ['compileSass', \"concatScripts\"]); \n")),Object(a.b)("p",null,"});"),Object(a.b)("p",null,'gulp.task("serve", ','["watchFiles"]',");"),Object(a.b)("p",null,"/",Object(a.b)("strong",{parentName:"p"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****"))))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"}," \t\t\t\t\t\t*",Object(a.b)("ol",s({parentName:"li"},{start:13}),Object(a.b)("li",{parentName:"ol"},"Where to go from\nhere?"))),Object(a.b)("li",{parentName:"ul"},"  \t\t\t\t\t\t*\n",Object(a.b)("strong",{parentName:"li"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},Object(a.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(a.b)("p",null,"Refer back to see the link to the GitHub file for the advanced folder"))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/Gulp-Basics-TH.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-gulp-basics-th-md-32d22c85f997400d8a3c.js.map