(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{"z/NF":function(o,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var e=n("/FXl"),r=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(o[e]=n[e])}return o}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Storybook/adding-docs.md"}});var d={_frontmatter:i},c=r.a;function s(o){var t=o.components,n=function(o,t){if(null==o)return{};var n,e,r={},a=Object.keys(o);for(e=0;e<a.length;e++)n=a[e],t.indexOf(n)>=0||(r[n]=o[n]);return r}(o,["components"]);return Object(e.b)(c,a({},d,n,{components:t,mdxType:"MDXLayout"}),Object(e.b)("hr",null),Object(e.b)("p",null,"Author: Dennis O'Keeffe"),Object(e.b)("h2",{id:"section-storybook"},"Section: Storybook"),Object(e.b)("h1",{id:"adding-docs"},"Adding docs"),Object(e.b)("p",null,"The storybook add on for READMEs and docs is incredibly useful and is powering this Storybook."),Object(e.b)("h2",{id:"example-of-just-showing-documentation"},"Example of just showing documentation"),Object(e.b)("pre",null,Object(e.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { doc } from 'storybook-readme';\n\nimport StorybookIntro from './intro.md';\nimport StorybookDocs from './adding-docs.md';\nimport StorybookKnobs from './adding-knobs.md';\nimport StorybookRedux from './integrating-redux.md';\n\nconst story = () =>\n    storiesOf('Using Storybook')\n        .add('Intro', doc(StorybookIntro))\n        .add('Adding Docs', doc(StorybookDocs))\n        .add('Adding Knobs', doc(StorybookKnobs))\n        .add('Integrating Redux', doc(StorybookRedux));\n\nexport default story;\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Storybook/adding-docs.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-storybook-adding-docs-md-adfebed6412c301598b1.js.map