(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{AZCE:function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return a})),o.d(n,"default",(function(){return l}));o("1c7q"),o("abGl"),o("gZHo"),o("Fdmb"),o("Ir+3"),o("2mQt"),o("mXGw");var t=o("/FXl"),r=o("TjRS");o("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Storybook/storybook-sass.md"}});var i={_frontmatter:a},c=r.a;function l(e){var n=e.components,o=function(e,n){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,["components"]);return Object(t.b)(c,s({},i,o,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"adding-sass-to-storybook"},"Adding Sass to Storybook"),Object(t.b)("p",null,"Create a custom ",Object(t.b)("inlineCode",{parentName:"p"},".storybook/webpack.config.js")," file. The following works for the ",Object(t.b)("inlineCode",{parentName:"p"},"create-react-app")," setup:"),Object(t.b)("pre",null,Object(t.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const path = require('path');\nconst magicImporter = require('node-sass-magic-importer');\n// if you need theming\nconst config = require('../config.json');\nconst autoprefixer = require('autoprefixer');\n\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.s?css$/,\n        use: [\n          require.resolve('style-loader'),\n          {\n            loader: require.resolve('css-loader'),\n            options: {\n              importLoaders: 1,\n              sourceMap: true\n            }\n          },\n          {\n            loader: require.resolve('postcss-loader'),\n            options: {\n              // Necessary for external CSS imports to work\n              // https://github.com/facebookincubator/create-react-app/issues/2677\n              ident: 'postcss',\n              plugins: () => [\n                require('postcss-flexbugs-fixes'),\n                autoprefixer({\n                  browsers: [\n                    '>1%',\n                    'last 4 versions',\n                    'Firefox ESR',\n                    'not ie < 9' // React doesn't support IE8 anyway\n                  ],\n                  flexbox: 'no-2009'\n                })\n              ],\n              sourceMap: true\n            }\n          },\n          require.resolve('resolve-url-loader'),\n          {\n            loader: 'sass-loader',\n            options: {\n              importer: magicImporter(),\n              sourceMap: true,\n              // if you need theming\n              data: `$theme: '${config.theme}';`\n            }\n          }\n        ]\n      },\n      {\n        test: /\\.(woff|woff2)$/,\n        use: {\n          loader: 'url-loader',\n          options: {\n            name: 'fonts/[hash].[ext]',\n            limit: 5000,\n            mimetype: 'application/font-woff'\n          }\n        }\n      },\n      {\n        test: /\\.(ttf|eot|svg|png)$/,\n        use: {\n          loader: 'file-loader',\n          options: {\n            name: 'fonts/[hash].[ext]'\n          }\n        }\n      }\n    ]\n  }\n};\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Storybook/storybook-sass.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-storybook-storybook-sass-md-c0ff9b7d7c974fdfe066.js.map