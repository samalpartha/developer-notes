(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{"6hFW":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Google-Play/Google-Play.md"}});var b={_frontmatter:l},i=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(i,o({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"google-play"},"Google Play"),Object(n.b)("h2",{id:"virtual-devices"},"Virtual Devices"),Object(n.b)("p",null,"Genymotion is useful to grab a bunch of different emulators for Android and come with a personal use or paid license. "),Object(n.b)("p",null,"The device version and Genymotion may need to be aligned, so to do so, create a new Virtual Device."),Object(n.b)("p",null,"This can be easily done by selecting ",Object(n.b)("inlineCode",{parentName:"p"},"Create"),", choosing a device and then naming it to something useable like ",Object(n.b)("inlineCode",{parentName:"p"},"reactnative"),"."),Object(n.b)("h2",{id:"testing-the-app-on-the-emulator"},"Testing the app on the emulator"),Object(n.b)("p",null,"To do so, first run the emulator. After the emulator is up and running, use ",Object(n.b)("inlineCode",{parentName:"p"},"react-native run-android")," on the CLI to start the app. The CLI will respond if there are any errors."),Object(n.b)("h2",{id:"uploading-to-the-google-play-store"},"Uploading to the Google Play Store"),Object(n.b)("h2",{id:"debugging"},"Debugging"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"General Notes")),Object(n.b)("p",null,"Running a build from the IDE will generally give better support for debugging issues and auto-updating code."),Object(n.b)("p",null,"Some errors I've come across:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Error"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Resolution"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"error: could not install *smartsocket* listener: Address already in use")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Ensure socket not in use eg no ",Object(n.b)("inlineCode",{parentName:"td"},"gulp watch"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Component Install error"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Update your install for ",Object(n.b)("inlineCode",{parentName:"td"},"android/build.gradle")," (look for buildToolsVersion) - Android Studio can automate this for you")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"Could not get BatchedBridge, make sure your nundle is packaged correctly")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Run ",Object(n.b)("inlineCode",{parentName:"td"},"react-native start")," from the CLI and reload app")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"UNMET PEER DEPENDENCY"),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"rm -rf node-modules/ && npm cache clear && npm install"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"protected boolean getUseDeveloperSupport()")," issue"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Change ",Object(n.b)("inlineCode",{parentName:"td"},"protected")," to ",Object(n.b)("inlineCode",{parentName:"td"},"public")," (Java Error)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"@providesModule naming collision")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"If caused by react-native-router-flux -> update or search Github")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Full cache reset"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"watchman watch-del-all && rm -rf node_modules/ && npm cache clean && npm install && npm start -- --reset-cache")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"react-native-router-flux issues")),Object(n.b)("p",null,"This one was a bit tricky - some useful Github pages:"),Object(n.b)("p",null,Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/aksonov/react-native-router-flux/issues/1803"}),"https://github.com/aksonov/react-native-router-flux/issues/1803"),"\n",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/13390"}),"https://github.com/facebook/react-native/issues/13390"),"\n",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/react-community/react-navigation/issues/923"}),"https://github.com/react-community/react-navigation/issues/923"),"\n",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/aksonov/react-native-router-flux/issues/1816"}),"https://github.com/aksonov/react-native-router-flux/issues/1816")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"General React Native Commands")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"react-native upgrade")," - upgrade the files being used "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"react-native-git-upgrade")," - newer upgrade (needs to be install globally first)")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Issues with React/ build path in Xcode?")),Object(n.b)("p",null,Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/oblador/react-native-vector-icons/issues/373"}),"https://github.com/oblador/react-native-vector-icons/issues/373")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Other issues")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Ensure Cocoapods is up to date ",Object(n.b)("inlineCode",{parentName:"li"},"sudo gem install cocoapods"))))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Google-Play/Google-Play.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-google-play-google-play-md-d18ef8df38775d073aae.js.map