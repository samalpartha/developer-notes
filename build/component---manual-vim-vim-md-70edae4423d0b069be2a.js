(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{Y3iW:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return l})),a.d(e,"default",(function(){return m}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),b=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Vim/Vim.md"}});var c={_frontmatter:l},d=b.a;function m(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,n,b={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,["components"]);return Object(n.b)(d,r({},c,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"vim"},"Vim"),Object(n.b)("h2",{id:"vim-packages-and-creating-files"},"Vim Packages and creating files"),Object(n.b)("p",null,"Installing Vim ",Object(n.b)("inlineCode",{parentName:"p"},"yum install vim")," of ",Object(n.b)("inlineCode",{parentName:"p"},"apt-get install vim"),"."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"vim -g")," can actually run the GUI - who cares though. There are a number of different GUI wrappers. ",Object(n.b)("inlineCode",{parentName:"p"},"gvim")," is the most popular."),Object(n.b)("p",null,"So we have ",Object(n.b)("inlineCode",{parentName:"p"},"vi"),", ",Object(n.b)("inlineCode",{parentName:"p"},"vim")," - the improved vi and ",Object(n.b)("inlineCode",{parentName:"p"},"gvim"),"."),Object(n.b)("h2",{id:"vim-modes-navigation-and-commands"},"Vim modes, navigation and commands"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Command/Normal mode"),Object(n.b)("li",{parentName:"ol"},"Insert/Ex mode"),Object(n.b)("li",{parentName:"ol"},"Mark mode")),Object(n.b)("h2",{id:"basics"},"Basics"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Key"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"What it does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"x"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete character")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),":q!"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Quit and omit changes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),":wq"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Write and quit")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),":"),Object(n.b)("td",r({parentName:"tr"},{align:null}),'"File mode"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"h"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Left")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"j"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Down")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"k"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Up")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"l"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Right")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"w"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Word forward")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"e"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Word forward last char")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"b"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Back word")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"0"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Go to start")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"$"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Go to end")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"v"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Highlight words")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"%"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Go to matching bracket/quotes etc")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Number, command"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Move by certain amount")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"r"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Replace")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"u"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Undo")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"."),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Redo")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"d (twice)"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete the line")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"d, w"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete the word")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Number, i"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Insert a number of times")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Number, r"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Replace a number of chars")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Number, x"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete certain number of keys")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"y, move to new spot, p"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Yank the link, then paste")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"v, then y"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Mark mode and yank")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),">>"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Indent forward")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"<<"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Indent back")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"/<word>")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Find a word")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"n/N"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Forward search, N upwards")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"?<word>")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Search bottom up (N/n swap)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"%s/ex/EX/g"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Global ex regex")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"#s/ex/EX/gc"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Confirm value swapping")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"j + j"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Go back to normal mode")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"g + g"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Go to top of document")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"G"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Go to end of file")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"("),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Jump to previous sentence")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),")"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Jump to next sentence")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"}"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Jump to next paragraph")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"{"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Jump to previous paragraph")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Insert text before cursor")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"A"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Insert test at end of line")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"o"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Begin new line below the cursor")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"O"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Begin new line above the cursor")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),":r ",Object(n.b)("inlineCode",{parentName:"td"},"[filename]")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Insert the file ",Object(n.b)("inlineCode",{parentName:"td"},"[filename]")," below the cursor")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),":r ","![command]"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Execute ",Object(n.b)("inlineCode",{parentName:"td"},"[command]")," and insert its output below the cursor")))),Object(n.b)("h2",{id:"delete-text"},"Delete Text"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Key"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"What it does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"x"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete at cursor")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"dw"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete word")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"d0"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete to beginning of a line")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"d$"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete to end of a line")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"d)"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete to end of sentence")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"dgg"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete to beginning of file")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"dG"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete to end of file")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"dd"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete line")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"3dd"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Delete three lines")))),Object(n.b)("h2",{id:"copypaste"},"Copy/Paste"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Key"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"What it does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"yy"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Copy current line into storage buffer")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"p"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Paste storage buffer after line")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"P"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Paste storage buffer before line")))),Object(n.b)("h2",{id:"undoredo"},"Undo/Redo"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Key"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"What it does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"u"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Undo the last operation")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"ctrl + r"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Redo the last undo")))),Object(n.b)("h2",{id:"executing-external-commands"},"Executing external commands"),Object(n.b)("p",null,"These are a few of the more advanced things."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},": ! ls -al ~")," - it will run the command, and then we get the option to run a command."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},":r ! cat /root/.bash_profile")," for example will read in the profile."),Object(n.b)("h2",{id:"files-and-buffers"},"Files and buffers"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},":saveas <name|path>")))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Vim/Vim.md"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-vim-vim-md-70edae4423d0b069be2a.js.map