(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{HZrP:function(e,r,n){"use strict";n.r(r),n.d(r,"_frontmatter",(function(){return l})),n.d(r,"default",(function(){return u}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),t=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Array-Manipulation.md"}});var o={_frontmatter:l},c=t.a;function u(e){var r=e.components,n=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,["components"]);return Object(a.b)(c,i({},o,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"array-manipulation"},"Array Manipulation"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// Complete the arrayManipulation function below.\nfunction arrayManipulation(n, queries) {\n  let arr = new Array(n).fill(0);\n  for (let [a, b, k] of queries) {\n    let arrSlice = arr.slice(a - 1, b);\n    let updatedArrSlice = arrSlice.map(el => el + k);\n    arr = [...arr.slice(0, a - 1), ...updatedArrSlice, ...arr.slice(b + 1)];\n  }\n  return Math.max.apply(Math, arr);\n}\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Array-Manipulation.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-array-manipulation-md-c693cb121207b954a676.js.map