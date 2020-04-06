(window.webpackJsonp=window.webpackJsonp||[]).push([[600],{"c+AY":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/VSCode/VSCode-Can-Do-That.md"}});var l={_frontmatter:r},b=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(b,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"vscode-can-do-that"},"VSCode Can Do That?"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",i({parentName:"li"},{href:"https://code.visualstudio.com/Docs/editor/editingevolved"}),"Code Navigation")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",i({parentName:"li"},{href:"https://www.freecodecamp.org/news/put-your-dev-env-in-github/"}),"Remote Containers")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",i({parentName:"li"},{href:"https://dev.to/mrahmadawais/vscode-breadcrumbs-are-here-jkn"}),"Breadcrumbs on Dev.to"))),Object(a.b)("h2",{id:"multiple-cursors"},"Multiple Cursors"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Command + Shift + l")," to enable multiple cursors over the highlights."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Command + d")," to do one at a time. If you want to skip an instance, hit ",Object(a.b)("inlineCode",{parentName:"p"},"Command + k, d")," to skip."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"let app;\n\napp;\n")),Object(a.b)("h2",{id:"regex-find"},"Regex Find"),Object(a.b)("p",null,"You can use ",Object(a.b)("inlineCode",{parentName:"p"},"option + command + r")," to turn on regex search. Combine this with multiple cursors for a good time. With find, you need to press ",Object(a.b)("inlineCode",{parentName:"p"},"option + enter")," to get multiple cursors. Test below with the ",Object(a.b)("inlineCode",{parentName:"p"},"jpeg|png")," search:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"let image = url('images/background.png');\nlet jpg = url('images/thing.jpg');\n")),Object(a.b)("h2",{id:"navigating-vscode"},"Navigating VSCode"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Command + p,p")," will take you to the last file."),Object(a.b)("p",null,"In that same browser, if we use ",Object(a.b)("inlineCode",{parentName:"p"},"@")," we can search and find a symbol browser."),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"@:")," will segment things into groups."),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"#")," will search for a certain set of symbols across files. Note that at the moment it doesn't exclude the files from ",Object(a.b)("inlineCode",{parentName:"p"},"settings.json"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Command + 0")," will focus on the sidebar, ",Object(a.b)("inlineCode",{parentName:"p"},"Command + 1")," will focus on the editor."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"fn + option + F12")," will help you peek a definition and see all the instances where it is used."),Object(a.b)("h2",{id:"refactors"},"Refactors"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Shift + Control + R")," will look for refactors available."),Object(a.b)("p",null,"Highlighting code and then pressing ",Object(a.b)("inlineCode",{parentName:"p"},"Command + .")," will give you options to refactor."),Object(a.b)("h2",{id:"debugging"},"Debugging"),Object(a.b)("p",null,"Check the docs for how ",Object(a.b)("inlineCode",{parentName:"p"},"launch.json")," works for Chrome debugging."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"fn + F8")," will toggle through our lint/type check errors."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"fn + F5")," will open the debugger and begin."),Object(a.b)("p",null,"VSCode also has log points. Instead of using ",Object(a.b)("inlineCode",{parentName:"p"},"console.log()")," in the code, you can add a log point to the side. You could then log a variable ",Object(a.b)("inlineCode",{parentName:"p"},"item")," by popping ",Object(a.b)("inlineCode",{parentName:"p"},"{item}"),". Log points also don't throw errors."),Object(a.b)("h3",{id:"nodemon"},"Nodemon"),Object(a.b)("p",null,"To use ",Object(a.b)("inlineCode",{parentName:"p"},"nodemon"),", you can set configurate for ",Object(a.b)("inlineCode",{parentName:"p"},"nodemon")," package."),Object(a.b)("h2",{id:"docker"},"Docker"),Object(a.b)("p",null,"If we search ",Object(a.b)("inlineCode",{parentName:"p"},"command + shift + p")," and search ",Object(a.b)("inlineCode",{parentName:"p"},"Add Docker configuration files to app")," we can then go through the process of selecting what kind of files we want to add."),Object(a.b)("p",null,"If we run ",Object(a.b)("inlineCode",{parentName:"p"},"Docker: build")," we can then containerize this app using VSCode. It will also ask us for a tag!"),Object(a.b)("p",null,"We can then use the Docker sidebar to run. If we right-click on a running container, we can click we logs. We can also attach a shell from here."),Object(a.b)("h3",{id:"deploying-to-a-container-registry"},"Deploying to a Container Registry"),Object(a.b)("p",null,"We can ",Object(a.b)("inlineCode",{parentName:"p"},"right-click")," and push an image to the repository (once you are connect)."),Object(a.b)("h3",{id:"docker-compose"},"Docker Compose"),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, we can edit for multiple containers to interact with each other."),Object(a.b)("p",null,"There is also a ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose.debug.yml")," file that we can use for debug. We can actually use the debugger to help with this as well (based on our configuration)."),Object(a.b)("h2",{id:"remote-development"},"Remote Development"),Object(a.b)("p",null,"Within the command pallette, we can run ",Object(a.b)("inlineCode",{parentName:"p"},"Remote-ssh connect to host"),"."),Object(a.b)("p",null,"This will setup VSCode for the remote host and then we can treat a newly opened VSCode window as if we are on remote."),Object(a.b)("p",null,"Everything that we run here (restore etc) can happen on the remote server! We can run a debugger etc from within this SSH session."),Object(a.b)("p",null,"We can even forward a port to the local!"),Object(a.b)("h2",{id:"developing-remote-containers"},"Developing Remote Containers"),Object(a.b)("p",null,"Requires ",Object(a.b)("inlineCode",{parentName:"p"},"remote containers")," extension."),Object(a.b)("p",null,"We can use ",Object(a.b)("inlineCode",{parentName:"p"},"Remote Containers: Add configuration files")," from the command palette to set up to use containers."),Object(a.b)("p",null,"We can use ",Object(a.b)("inlineCode",{parentName:"p"},"Remote Container: Reopen folder in new container")," to open up and set a new container."),Object(a.b)("p",null,"There is a deeper dive through a ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.freecodecamp.org/news/put-your-dev-env-in-github/"}),"blog post"),"."),Object(a.b)("h2",{id:"sql-in-vscode"},"SQL in VSCode"),Object(a.b)("p",null,"Using an extensions called ",Object(a.b)("inlineCode",{parentName:"p"},"MySQL"),", we can add a host with data etc."),Object(a.b)("p",null,"We can then, from inside VSCode, run queries against the database."),Object(a.b)("h2",{id:"git-in-vscode"},"Git in VSCode"),Object(a.b)("p",null,"Git can super charge you git flow. It makes it easier to diff and stage/unstage changes."),Object(a.b)("h3",{id:"reviewing-and-merging-prs"},"Reviewing and Merging PRs"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"GitHub Pull Requests")," extensions enables you to review, comment, approve and checkout PR branches right from VSCode!"),Object(a.b)("h2",{id:"moving-code--code-folding"},"Moving Code & Code Folding"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Command"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Action"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"option + up/down")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Move code up/down a line")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"shift + option + up/down")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Duplicate line up/down")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"option + cmd + [")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Fold")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"option + cmd + ]")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Unfold")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"cmd + k, 2")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Fold second level regions")))),Object(a.b)("p",null,"You can add ",Object(a.b)("inlineCode",{parentName:"p"},"//#region Class Methods")," (as an example) and ",Object(a.b)("inlineCode",{parentName:"p"},"//#endregion Class Methods")," to create you own custom folder points."),Object(a.b)("p",null,"If your cursor is inside of a region and you fold all of a level etc, it is smart enough to know to keep that region open."),Object(a.b)("h2",{id:"breadcrumbs"},"Breadcrumbs"),Object(a.b)("p",null,"If you hit ",Object(a.b)("inlineCode",{parentName:"p"},"shift + command + ."),", you can open the breadcrumbs popover and navigated through the page breadcrumbs!"),Object(a.b)("p",null,"This can be a little similar to ",Object(a.b)("inlineCode",{parentName:"p"},"command + shift + o")," but shows a clearer outline."),Object(a.b)("p",null,"An article that shares this can be found ",Object(a.b)("a",i({parentName:"p"},{href:"https://dev.to/mrahmadawais/vscode-breadcrumbs-are-here-jkn"}),"here"),"."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/VSCode/VSCode-Can-Do-That.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-vs-code-vs-code-can-do-that-md-c4542e9a9db51a24103a.js.map