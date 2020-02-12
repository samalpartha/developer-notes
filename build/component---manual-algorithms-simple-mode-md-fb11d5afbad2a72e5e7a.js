(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{fouF:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return f}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Simple-Mode.md"}});var m={_frontmatter:l},i=a.a;function f(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(i,o({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"simple-mode"},"Simple Mode"),Object(r.b)("h2",{id:"answer"},"Answer"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"function SimpleMode(arr) {\n  let map = {};\n\n  for (let el of arr) {\n    if (map[el]) map[el]++;\n    else map[el] = 1;\n  }\n\n  let max = 1;\n  let maxRes = -1;\n  for (let [k, v] of Object.entries(map)) {\n    if (v > max) {\n      maxRes = k;\n      max = v;\n    }\n  }\n\n  if (max === 1) return -1;\n\n  for (let el of arr) {\n    if (map[el] === max) {\n      maxRes = el;\n      break;\n    }\n  }\n\n  // code goes here\n  return maxRes;\n}\n")))}f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Simple-Mode.md"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-simple-mode-md-fb11d5afbad2a72e5e7a.js.map