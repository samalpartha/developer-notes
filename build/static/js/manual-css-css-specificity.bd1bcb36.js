(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"./manual/CSS/CSS-Specificity.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),i={},c="wrapper";function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)(c,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"css-specificity"},"CSS Specificity"),Object(b.b)("p",null,"Resources:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://dev.to/emmawedekind/css-specificity-1kca"}),"https://dev.to/emmawedekind/css-specificity-1kca")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://specificity.keegan.st/"}),"https://specificity.keegan.st/")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://specifishity.com/"}),"https://specifishity.com/"))),Object(b.b)("h2",{id:"how-to-calculate"},"How to calculate"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"Inline Style"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"(1,0,0,0)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"ID"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"(0,1,0,0)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"Class, Pseudo-Class, Attribute"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"(0,0,1,0)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"Elements"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"(0,0,0,1)")))),Object(b.b)("h2",{id:"example-a"},"Example A"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"ul > li {\n  ...;\n}\n\n.list > .list-item {\n  ...;\n}\n")),Object(b.b)("p",null,"Here we have ",Object(b.b)("inlineCode",{parentName:"p"},"ul > li")," with (0,0,0,2) and ",Object(b.b)("inlineCode",{parentName:"p"},".list > .list-item")," with (0,0,2,0), so the latter is prioritised."),Object(b.b)("h2",{id:"example-two"},"Example Two"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"div#div > a:hover {\n  ...;\n}\n\na:nth-child(2):hover {\n  ...;\n}\n")),Object(b.b)("p",null,"Here ",Object(b.b)("inlineCode",{parentName:"p"},"div#div > a:hover")," has (0,1,1,2) and ",Object(b.b)("inlineCode",{parentName:"p"},"a:nth-child(2):hover")," with (0,0,2,1) and so the first selector would be used."),Object(b.b)("h2",{id:"final-example"},"Final Example"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"body #content .data img:hover { ... }")," = (0,0,0,1) + (0,1,0,0) + (0,0,1,0) + (0,0,0,1) + (0,0,1,0) = (0,1,2,2)"))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/CSS/CSS-Specificity.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-css-css-specificity.101a1afd2417ec7a4a77.js.map