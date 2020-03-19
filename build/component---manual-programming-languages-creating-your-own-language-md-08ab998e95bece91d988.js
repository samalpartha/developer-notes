(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{"Ext/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Programming-Languages/Creating-Your-Own-Language.md"}});var o={_frontmatter:l},c=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,i({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"creating-your-own-language"},"Creating Your Own Language"),Object(n.b)("h2",{id:"use-cases"},"Use Cases"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Domain-Specific Languages: Terraform, Gemfiles"),Object(n.b)("li",{parentName:"ol"},"Templating languages: Handlebars, Pug")),Object(n.b)("h2",{id:"usecases-at-sendgrid"},"Usecases at SendGrid"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Drag + Drop editor takes HTML, parses it into an abstract syntax tree (AST) and manipulates it before serializing it back into HTML."),Object(n.b)("li",{parentName:"ul"},"Using it for own bespoke templating language for dynamic email templates."),Object(n.b)("li",{parentName:"ul"},"Sync position in side-by-side editor by breaking HTML into an AST and rewriting the elements with information about their position in the text editor.")),Object(n.b)("h2",{id:"what-is-a-compiler"},"What is a compiler?"),Object(n.b)("p",null,"Something that turns a higher-level language into a lower-level langauge","*","."),Object(n.b)("h2",{id:"todays-example"},"Todays example"),Object(n.b)("p",null,"In this particular example, we will follow the course that builds the language ",Object(n.b)("inlineCode",{parentName:"p"},"Dropbear"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Lisp-like langage"),Object(n.b)("li",{parentName:"ul"},"Leverage existing JavaScript run-time")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"(add 1 2 (subtract 6 3))\n")),Object(n.b)("h2",{id:"inspiration-resources"},"Inspiration Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://norvig.com/lispy.html"}),"https://norvig.com/lispy.html")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://eloquentjavascript.net/12_language.html"}),"https://eloquentjavascript.net/12_language.html")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/jamiebuilds/the-super-tiny-compiler"}),"https://github.com/jamiebuilds/the-super-tiny-compiler"))),Object(n.b)("h2",{id:"stages-of-a-compiler"},"Stages of a Compiler"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Parsing: Take source code and turn it into representation of that code."),Object(n.b)("li",{parentName:"ol"},"Transformation: Take source code and transforms it to do whatever the compiler wants it to do"),Object(n.b)("li",{parentName:"ol"},"Generation: Take the transformed representation and turns it into a new string of code")),Object(n.b)("h2",{id:"parsing"},"Parsing"),Object(n.b)("p",null,"Consists of ",Object(n.b)("inlineCode",{parentName:"p"},"Lexical analysis")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Syntactic analysis"),"."),Object(n.b)("p",null,"Note: Lexing = Lexical analysis."),Object(n.b)("p",null,"Basically: take big string of code and turn it into ",Object(n.b)("inlineCode",{parentName:"p"},"tokens")," where a ",Object(n.b)("inlineCode",{parentName:"p"},"token")," is a small unit of the language."),Object(n.b)("p",null,"How might a lexer work?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Accept input string of code"),Object(n.b)("li",{parentName:"ul"},"Create var for tracking position (like cursor)"),Object(n.b)("li",{parentName:"ul"},"Make an array of tokens"),Object(n.b)("li",{parentName:"ul"},"Write a while loop that iterates through the source code input"),Object(n.b)("li",{parentName:"ul"},"Check each token, see if matches type"),Object(n.b)("li",{parentName:"ul"},"Add it to the array of token")),Object(n.b)("h3",{id:"using-helpers"},"Using helpers"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const isWhitespace = character => /\\s/.test(character);\nconst isNumber = character => /[0-9]/.test(character);\nconst isOperator = character => /[\\+\\-\\*\\/]/.test(character);\n")),Object(n.b)("h3",{id:"turning-strings-to-tokens"},"Turning strings to tokens"),Object(n.b)("p",null,"Note that based on our syntax, we may need to collect multiple characters into a single token ie ",Object(n.b)("inlineCode",{parentName:"p"},"22 + 23")," (which tokenizes as ",Object(n.b)("inlineCode",{parentName:"p"},"['2','2','+','2','3']"),")"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const tokenize = input => {\n  let cursor = 0;\n  const tokens = [];\n\n  while (cursor < input.length) {\n    // Logic here\n    // Example for number helper\n    if (isNumber(character))\n  }\n\n  return tokens;\n};\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Programming-Languages/Creating-Your-Own-Language.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-programming-languages-creating-your-own-language-md-08ab998e95bece91d988.js.map