(window.webpackJsonp=window.webpackJsonp||[]).push([[521],{"./manual/Webpack/Webpack-2.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i={},b="wrapper";function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(b,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"webpack-2"},"Webpack-2"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#webpack-2"}),"Webpack-2"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#10-webpack-in-action"}),"1.0: Webpack in Action")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#11-webpack-configuration"}),"1.1 Webpack Configuration")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#20-module-loaders"}),"2.0 Module Loaders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#21-css-loaders"}),"2.1 CSS Loaders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#22-image-loaders"}),"2.2 Image Loaders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#30-code-splitting"}),"3.0 Code Splitting")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#44-code-splitting-in-the-real-world"}),"4.4: Code Splitting in the real world"))))),Object(l.b)("p",null,"The concept is to have many js files that are small and specific."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Webpack bundles JS"),Object(l.b)("li",{parentName:"ul"},"CSS and Babelifying is just a side effect we can do")),Object(l.b)("h2",{id:"10-webpack-in-action"},"1.0: Webpack in Action"),Object(l.b)("p",null,"Module Systems and their Common Syntax:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"Module System"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"Common Syntax"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"CommonJS"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"require, module.exports")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"AMD"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"require, define")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"ES2015"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"import, export")))),Object(l.b)("h2",{id:"11-webpack-configuration"},"1.1 Webpack Configuration"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"Command"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"What it does"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"entry"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Specify entry")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"output"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Specify where the file is saved too")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"output > path"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Specify the file path (must be absolute)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"output > filename"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Output file name")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"webpack"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"allows you to install globally (instead, opt for npm script)")))),Object(l.b)("p",null,"For defining paths, we can use ",Object(l.b)("inlineCode",{parentName:"p"},"path")," from NodeJS."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),"const path = require('path');\n\nconst config = {\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'build'),\n        filename: 'bundle.js'\n    }\n};\n\nmodule.exports = config;\n")),Object(l.b)("p",null,"However, you'll notice if you have two small files that combining them into an output looks far larger than those two files - so what is happening?"),Object(l.b)("p",null,"Behind the scenes, Webpack is doing similar to the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"new array has been created"),Object(l.b)("li",{parentName:"ul"},"two functions within contain code from the two files"),Object(l.b)("li",{parentName:"ul"},"entry point index is defined which points to the index of the array that was given as the entry point"),Object(l.b)("li",{parentName:"ul"},"if it needs other functions, it calls them from the array")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"20-module-loaders"},"2.0 Module Loaders"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Designed to do some preprocessing before they are put into the final file eg dealing with Babel etc. - The example with Babel requires ",Object(l.b)("inlineCode",{parentName:"li"},"babel-loader"),", ",Object(l.b)("inlineCode",{parentName:"li"},"babel-core")," and ",Object(l.b)("inlineCode",{parentName:"li"},"babel-preset-env")," (the env being the preset)."),Object(l.b)("li",{parentName:"ul"},"so how do we add this to Webpack?"),Object(l.b)("li",{parentName:"ul"},"previously, we referred to loaders as opposed to rules and modules, but this is how it is in Webpack 2. - rules are to do with configuration - rules have a ",Object(l.b)("inlineCode",{parentName:"li"},"use")," and ",Object(l.b)("inlineCode",{parentName:"li"},"test")," - ",Object(l.b)("inlineCode",{parentName:"li"},"test")," is a regex to select which file to apply too")),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const config = {\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'build'),\n        filename: 'bundle.js'\n    },\n    module: {\n        rules: [\n            {\n                use: 'babel-loader',\n                test: /\\.js$/\n            }\n        ]\n    }\n};\n")),Object(l.b)("h2",{id:"21-css-loaders"},"2.1 CSS Loaders"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"There are basically the ",Object(l.b)("inlineCode",{parentName:"li"},"CSS")," and ",Object(l.b)("inlineCode",{parentName:"li"},"Style")," loaders - style loader takes CSS imports and adds them to the HTML Document - CSS loader knows how to deal with CSS imports - Adding in more rules will allow us to make use of these loaders"),Object(l.b)("li",{parentName:"ul"},"Once you've compiled Webpack, what is it that these loaders are doing? - By default, it actually injects the CSS into a head tag, but how? - There is actually Javascript where the Style module actually takes that CSS and manually injects that into the CSS"),Object(l.b)("li",{parentName:"ul"},"We use another library ",Object(l.b)("inlineCode",{parentName:"li"},"Extract Text Plugin")," to ensure that these CSS files get output into their own file - Instead of ",Object(l.b)("inlineCode",{parentName:"li"},"use"),", we use ",Object(l.b)("inlineCode",{parentName:"li"},"loader")," (even though they are similar) but since the plugin is used in a way, we need to define ",Object(l.b)("inlineCode",{parentName:"li"},"loader")," - ",Object(l.b)("inlineCode",{parentName:"li"},"plugins")," are different to ",Object(l.b)("inlineCode",{parentName:"li"},"loaders")," and have the ability to stop files from ending up in the final ",Object(l.b)("inlineCode",{parentName:"li"},"bundle.js")," file - the ",Object(l.b)("inlineCode",{parentName:"li"},"plugin")," that we have will now create a ",Object(l.b)("inlineCode",{parentName:"li"},"style.css")," file")),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const config = {\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'build'),\n        filename: 'bundle.js'\n    },\n    module: {\n        rules: [\n            {\n                use: 'babel-loader',\n                test: /\\.js$/\n            },\n            {\n                loader: ExtractTextPlugin.extract({\n                    loader: 'css-loader'\n                }),\n                test: /\\.css$/\n            }\n        ]\n    },\n    plugins: [new ExtractTextPlugin('style.css')]\n};\n")),Object(l.b)("h2",{id:"22-image-loaders"},"2.2 Image Loaders"),Object(l.b)("p",null,"We can use ",Object(l.b)("inlineCode",{parentName:"p"},"image-webpack-loader")," and ",Object(l.b)("inlineCode",{parentName:"p"},"url-loader"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"image-webpack-loader")," will compact down the file size automatically"),Object(l.b)("li",{parentName:"ul"},"The result of a compact image is then taken and ",Object(l.b)("inlineCode",{parentName:"li"},"url-loader")," will behave differently depending on the size of the image. - options, if larger than 40000, save it as a different file, else keep it as part of the js file")),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const config = {\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'build'),\n        filename: 'bundle.js',\n        // publicPath for files not saved to bundle\n        publicPath: 'build/'\n    },\n    module: {\n        rules: [\n            {\n                use: 'babel-loader',\n                test: /\\.js$/\n            },\n            {\n                loader: ExtractTextPlugin.extract({\n                    loader: 'css-loader'\n                }),\n                test: /\\.css$/\n            },\n            {\n                test: /\\.(jpe?g|png|gif|svg)$/,\n                use: [\n                    {\n                        loader: 'url-loader',\n                        options: { limit: 40000 }\n                    },\n                    'image-webpack-loader'\n                ]\n            }\n        ]\n    },\n    plugins: [new ExtractTextPlugin('style.css')]\n};\n")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"30-code-splitting"},"3.0 Code Splitting"),Object(l.b)("p",null,"Code splitting is one of the big wins with using Webpack."),Object(l.b)("p",null,"Code spltting is the art of creating a single ",Object(l.b)("inlineCode",{parentName:"p"},".js")," file and then being able to split that code into several individual files and know when to load up these different modules."),Object(l.b)("p",null,"To import a module only after an event:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const button = document.createElement('button');\nbutton.innerText = 'Click me';\nbutton.onclick = () => {\n    // if this below has import statements of it's own\n    // it will also bring in this code\n    System.import('./image_view');\n};\n\ndocument.body.appendChild(button);\n")),Object(l.b)("p",null,"The above example was to see what happens, but really we can just use the ",Object(l.b)("inlineCode",{parentName:"p"},"import")," statement to do this for us."),Object(l.b)("p",null,"You can see this on the ",Object(l.b)("inlineCode",{parentName:"p"},"network")," tab on Google Dev Tools to see this all in action."),Object(l.b)("p",null,"Anything that uses ",Object(l.b)("inlineCode",{parentName:"p"},"System.import()")," it will split up our call for different modules to import."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"44-code-splitting-in-the-real-world"},"4.4: Code Splitting in the real world"),Object(l.b)("p",null,"The CommonChunksPlugin will look for common code in the bundles and split them into seperate files depending on the value you pass in for ",Object(l.b)("inlineCode",{parentName:"p"},"name"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"...\n\nplugins: [\n    new webpack.optimize.CommonsChunkPlugin({\n        name: 'vendor'\n    });\n];\n\n...\n")))}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Webpack/Webpack-2.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-webpack-webpack-2.101a1afd2417ec7a4a77.js.map