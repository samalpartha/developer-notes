(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"./manual/CSS/Flexbox-Help-Sheet.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return i});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),l={},s="wrapper";function i(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)(s,Object.assign({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"flexbox-help-sheet"},"Flexbox Help Sheet"),Object(r.b)("p",null,"Sources:"),Object(r.b)("p",null,Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"}),"CSS Tricks")),Object(r.b)("h2",{id:"terminology"},"Terminology"),Object(r.b)("h4",{id:"flex-container-parent"},"Flex Container (parent)"),Object(r.b)("p",null,"Properties of the parent:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".container {\n  display: flex; /* or inline-flex */\n  flex-direction: row | row-reverse | column | column-reverse;\n  flex-wrap: nowrap | wrap | wrap-reverse;\n  flex-flow: <\u2018flex-direction\u2019> || <\u2018flex-wrap\u2019>; //shorthand code\n  justify-content: flex-start | flex-end | center | space-between | space-around;\n  align-items: flex-start | flex-end | center | baseline | stretch;\n  align-content: flex-start | flex-end | center | space-between | space-around | stretch;\n}\n")),Object(r.b)("h4",{id:"flex-items-child"},"Flex Items (child)"),Object(r.b)("p",null,"Properties of the child:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".item {\n    order: <integer>;\n    flex-grow: <number>; /* default 0 */\n    flex-shrink: <number>; /* default 1 */\n    flex-basis: <length> | auto; /* default auto */\n    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ];\n    align-self: auto | flex-start | flex-end | center | baseline | stretch;\n}\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".parent {\n  display: flex;\n  height: 300px; /* Or whatever */\n}\n\n.child {\n  width: 100px;  /* Or whatever */\n  height: 100px; /* Or whatever */\n  margin: auto;  /* Magic! */\n}\n\n.flex-container {\n  /* We first create a flex layout context */\n  display: flex;\n\n  /* Then we define the flow direction and if we allow the items to wrap\n   * Remember this is the same as:\n   * flex-direction: row;\n   * flex-wrap: wrap;\n   */\n  flex-flow: row wrap;\n\n  /* Then we define how is distributed the remaining space */\n  justify-content: space-around;\n}\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/CSS/Flexbox-Help-Sheet.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-css-flexbox-help-sheet.101a1afd2417ec7a4a77.js.map