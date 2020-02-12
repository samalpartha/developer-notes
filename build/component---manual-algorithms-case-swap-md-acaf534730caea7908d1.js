(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{EoWV:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),a=n("TjRS");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Case-Swap.md"}});var o={_frontmatter:i},l=a.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(l,s({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"case-swap"},"Case Swap"),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",s({parentName:"li"},{href:"https://www.coderbyte.com/editor/Swap%20Case:Kotlin"}),"CoderByte - Kotlin"))),Object(r.b)("h2",{id:"question"},"Question"),Object(r.b)("p",null,"Have the function ",Object(r.b)("inlineCode",{parentName:"p"},"SwapCase(str)"),' take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be ',Object(r.b)("inlineCode",{parentName:"p"},"hELLO wORLD"),". Let numbers and symbols stay the way they are."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-shell"}),'Input: "Hello-LOL"\nOutput: hELLO-lol\n')),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-shell"}),'Input: "Sup DUDE!!?"\nOutput: sUP dude!!?\n')),Object(r.b)("h2",{id:"answer"},"Answer"),Object(r.b)("p",null,"In JavaScript:"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"function SwapCase(str) {\n  let retStr = '';\n  for (let i = 0; i < str.length; i++) {\n    if (/[a-z]/.test(str[i])) {\n      retStr += str[i].toUpperCase();\n    } else if (/[A-Z]/.test(str[i])) {\n      retStr += str[i].toLowerCase();\n    } else {\n      retStr += str[i];\n    }\n  }\n  // code goes here\n  return retStr;\n}\n")),Object(r.b)("p",null,"In Kotlin:"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-kotlin"}),'fun SwapCase(str: String): String {\n  val regexLower = Regex(pattern = "[a-z]")\n  val regexUpper = Regex(pattern = "[A-Z]")\n  val list = mutableListOf<String>()\n\n  for (i in str.indices) {\n    if (regexLower.containsMatchIn(str[i].toString())) {\n      list.add(str[i].toString().toUpperCase())\n    } else if (regexUpper.containsMatchIn(str[i].toString())) {\n      list.add(str[i].toString().toLowerCase())\n    } else {\n      list.add(str[i].toString())\n    }\n  }\n  // code goes here\n  return list.joinToString("").trim();\n}\n\nfun main(args: Array<String>) {\n  println(SwapCase(readLine()))\n}\n')))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Case-Swap.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-case-swap-md-acaf534730caea7908d1.js.map