(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{ybJZ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Java/Gradle-Intro.md"}});var o={_frontmatter:r},p=i.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(p,l({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"gradle-intro"},"Gradle Intro"),Object(a.b)("p",null,"References:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",l({parentName:"li"},{href:"https://guides.gradle.org/consuming-jvm-libraries/"}),"https://guides.gradle.org/consuming-jvm-libraries/"))),Object(a.b)("h2",{id:"create-project--add-gradle"},"Create Project + Add Gradle"),Object(a.b)("p",null,"Ensure you have ",Object(a.b)("a",l({parentName:"p"},{href:"https://gradle.org/install"}),"installed Gradle first"),"."),Object(a.b)("p",null,"For Mac users, ",Object(a.b)("inlineCode",{parentName:"p"},"brew install gradle")," will get you up and going."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"mkdir consuming-jvm-libraries\ncd consuming-jvm-libraries\ngradle wrapper\n")),Object(a.b)("p",null,"You should get ",Object(a.b)("inlineCode",{parentName:"p"},"BUILD SUCCESSUL")," output."),Object(a.b)("h2",{id:"generating-base-files"},"Generating base files"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"touch settings.gradle build.gradle\n\n# write into settings.gradle\nrootProject.name = \"appName\"\n\n# write into build.gradle\napply plugin : 'java'\n\nrepositories {\n    jcenter()\n}\n")),Object(a.b)("p",null,"We are using ",Object(a.b)("inlineCode",{parentName:"p"},"JCenter")," as the repository to grab our external package."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"In order to find artifacts you have to tell Gradle where to look. Gradle supports two specialized repository types - Maven & Ivy, among others. In addition, Gradle supports simplified configuration for the most popular centralized repositories - JCenter, Maven Central, and Google’s Android repository. In this guide you are using JCenter as it has access to all of the repositories hosted on Maven Central as well as many more that are published to Bintray."))),Object(a.b)("h2",{id:"adding-the-dependency"},"Adding the dependency"),Object(a.b)("p",null,"In this particular project, we want to use ",Object(a.b)("inlineCode",{parentName:"p"},"JFiglet")," to add some Ascii-art."),Object(a.b)("p",null,"Add the following to the ",Object(a.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-java"}),"dependencies {\n    implementation 'com.github.lalyos:jfiglet:0.0.8'\n}\n")),Object(a.b)("p",null,"Note that Gralde supports a variety of noitations. The one used here is known as ",Object(a.b)("inlineCode",{parentName:"p"},"Maven coordinates"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"Adding a dependency has two parts: one is the dependency itself and the other is the configuration to which it is added. The latter term is used in Gradle to effectively group dependencies together by context. The current build uses the implementation configuration, which is provided by the Java Plugin."))),Object(a.b)("p",null,"The purpose of the ",Object(a.b)("inlineCode",{parentName:"p"},"implementation")," configuration is to collect dependencies that are used by a library or application and add them to the compilation classpath, but not export them via any of its APIs. As this is a stand-alone application, all dependencies can be placed in this configuration for purposes of application construction. This makes the use of the JFiglet library an implementation detail that can be changed a later date without affecting any clients."),Object(a.b)("p",null,"You can inspect all of the dependencies you have added on a per-configuration basis, by using the dependencies task that is built into Gradle ",Object(a.b)("inlineCode",{parentName:"p"},"./gradlew dependencies --configuration implementation"),"."),Object(a.b)("h2",{id:"building-the-application"},"Building the application"),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"src/main/java"),", folder, place ",Object(a.b)("inlineCode",{parentName:"p"},"AppName.java")," with the following:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-java"}),'import java.io.IOException;\nimport com.github.lalyos.jfiglet.FigletFont;\n\npublic class AppName {\n    public static void main(String[] args) throws IOException {\n        String asciiArt = FigletFont.convertOneLine("Hello, " + args[0]);\n        System.out.println(asciiArt);\n    }\n}\n')),Object(a.b)("p",null,"Building the application is easy with ",Object(a.b)("inlineCode",{parentName:"p"},"./gradlew jar"),"."),Object(a.b)("h2",{id:"distribution"},"Distribution"),Object(a.b)("p",null,"Given that this is a application that we will want to distribute, edit ",Object(a.b)("inlineCode",{parentName:"p"},"build.gradle")," again and add the Application plugin:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-java"}),"apply plugin : 'application'\nmainClassName = 'AppName'\n")),Object(a.b)("p",null,"If we now build with ",Object(a.b)("inlineCode",{parentName:"p"},"./gradlew build")," we will notice ",Object(a.b)("inlineCode",{parentName:"p"},"build/distributions")," has a ",Object(a.b)("inlineCode",{parentName:"p"},".zip")," and ",Object(a.b)("inlineCode",{parentName:"p"},".tar")," archive that we can use ",Object(a.b)("inlineCode",{parentName:"p"},"./gradlew installDist")," to install the application into the ",Object(a.b)("inlineCode",{parentName:"p"},"build/install")," folder for validation purposes."),Object(a.b)("p",null,"We can now run our application with:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"cd build/install/greeterApp\n./bin/greeterApp Gradle\n\n# output\n  _   _          _   _                  ____                      _   _\n | | | |   ___  | | | |   ___          / ___|  _ __    __ _    __| | | |   ___\n | |_| |  / _ \\ | | | |  / _ \\        | |  _  | '__|  / _` |  / _` | | |  / _ \\\n |  _  | |  __/ | | | | | (_) |  _    | |_| | | |    | (_| | | (_| | | | |  __/\n |_| |_|  \\___| |_| |_|  \\___/  ( )    \\____| |_|     \\__,_|  \\__,_| |_|  \\___|\n                                |/\n")),Object(a.b)("h2",{id:"summary"},"Summary"),Object(a.b)("p",null,"You've now figured out how to:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"How to configure repositories and dependencies."),Object(a.b)("li",{parentName:"ol"},"Build an application consuming external dependencies."),Object(a.b)("li",{parentName:"ol"},"Distribute an application with all external dependencies.")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Java/Gradle-Intro.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-gradle-intro-md-221b78b07fa8d50fc98e.js.map