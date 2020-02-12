(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{"./manual/Webpack/Building-A-Webpack-Plugin.md":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return a});var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),i={},s="wrapper";function a(e){var n=e.components,o=Object(t.a)(e,["components"]);return Object(l.b)(s,Object.assign({},i,o,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"building-a-webpack-plugin"},"Building A Webpack Plugin"),Object(l.b)("h2",{id:"resources"},"Resources"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://dev.to/royal_bhati/write-your-first-webpack-plugin-20fh"}),"This DEV.to article on removing logs using a plugin"))),Object(l.b)("h2",{id:"building-a-plugin-to-compile-tokens"},"Building A Plugin To Compile Tokens"),Object(l.b)("p",null,"This project enables us to look for ",Object(l.b)("inlineCode",{parentName:"p"},".tokens.json")," files and compile the file tokens that we want."),Object(l.b)("h2",{id:"hello-world"},"Hello, World!"),Object(l.b)("p",null,"Touch a new file to use for the plugin. Below is an example taken from resource (1)."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"//logRemover.ts\n\nmodule.exports = class RemoveLogs {\n  // not needed but can be used for params taken by plugin\n  constructor(options) {\n    this.options = options;\n  }\n\n  apply(compiler) {\n    console.log('Hello from the new plugin');\n  }\n};\n")),Object(l.b)("p",null,"In our example, we just need the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"module.exports = class CompileDesignTokens {\n  apply(compiler) {\n    console.log('Hello from the new plugin');\n  }\n};\n")),Object(l.b)("p",null,"[TODO: Finish example (Jan 8th 2020)]"))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Webpack/Building-A-Webpack-Plugin.md"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-webpack-building-a-webpack-plugin.101a1afd2417ec7a4a77.js.map