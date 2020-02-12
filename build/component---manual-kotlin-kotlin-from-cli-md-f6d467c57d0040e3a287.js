(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{"U/AM":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return a})),t.d(n,"default",(function(){return b}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var l=t("/FXl"),r=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kotlin/Kotlin-From-CLI.md"}});var i={_frontmatter:a},c=r.a;function b(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(l.b)(c,o({},i,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"kotlin-from-cli"},"Kotlin From CLI"),Object(l.b)("h2",{id:"resources"},"Resources"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",o({parentName:"li"},{href:"https://www.codexpedia.com/kotlin/install-compile-and-run-kotlin-from-command-line/"}),"Kotlin compile and run from CLI"))),Object(l.b)("h2",{id:"hello-world-from-the-cli"},"Hello World from the CLI"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),'fun main(args: Array<String>) {\n    println("Hello World!")\n}\n')),Object(l.b)("h2",{id:"compiling"},"Compiling"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kotlinc greeting.kt hello.kt -include-runtime -d hello.jar\n")),Object(l.b)("h2",{id:"running"},"Running"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-shell"}),"java -jar hello.jar\n")),Object(l.b)("h2",{id:"running-a-task"},"Running a task"),Object(l.b)("p",null,"Find Kotlin path with ",Object(l.b)("inlineCode",{parentName:"p"},"which kotlin"),"."),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-shell"}),"export PATH=$PATH:/path/from/which/kotlin\nfunction kotlinr() {\n  echo Compiling, please wait...\n  kotlinc $1 -include-runtime -d out.jar\n  java -jar out.jar\n}\n")),Object(l.b)("p",null,"After sourcing, you could now run ",Object(l.b)("inlineCode",{parentName:"p"},"kotlinr hello.kt"),"."))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kotlin/Kotlin-From-CLI.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kotlin-kotlin-from-cli-md-f6d467c57d0040e3a287.js.map