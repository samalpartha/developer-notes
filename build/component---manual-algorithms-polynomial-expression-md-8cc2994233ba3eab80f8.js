(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"JF+j":function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return a})),t.d(e,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),i=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Polynomial-Expression.md"}});var l={_frontmatter:a},s=i.a;function c(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,["components"]);return Object(o.b)(s,r({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"polynomial-expression"},"Polynomial Expression"),Object(o.b)("h2",{id:"answer"},"Answer"),Object(o.b)("p",null,"Not the answer:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"function PolynomialExpansion(str) {\n  // multiply to polynomial expressions\n  const multiply = (a, b) => {\n    const variableA = a.match(/[a-zA-Z]\\^/i);\n    const [coefficientA, exponentA] = a.split(/[a-zA-Z]\\^/i);\n    const [coefficientB, exponentB] = b.split(/[a-zA-Z]\\^/i);\n\n    let newCoefficient;\n    if (coefficientA !== '' && coefficientB !== '') {\n      newCoefficient = parseInt(coefficientA) * parseInt(coefficientB);\n    } else if (coefficientA !== '') {\n      newCoefficient = parseInt(coefficientA);\n    } else {\n      newCoefficient = parseInt(coefficientB);\n    }\n\n    let newExponent;\n    if (exponentA !== '' && exponentB !== '') {\n      newExponent = parseInt(exponentA) + parseInt(exponentB);\n    } else if (exponentA !== '') {\n      newExponent = parseInt(exponentA);\n    } else {\n      newExponent = parseInt(exponentB);\n    }\n\n    return `${newCoefficient}${variableA ? variableA[0] : ''}${newExponent}`;\n  };\n\n  const matches = str.match(/\\(.*?\\)/gi);\n  if (!matches) {\n    return;\n  }\n\n  const [a, b] = matches.map(el => el.replace('(', '').replace(')', ''));\n  let firstEl = a.split(/[+-]/gi);\n  let secondEl = b.split(/[+-]/gi);\n\n  let resArr = [];\n  for (let i = 0; i < firstEl.length; i++) {\n    for (let j = 0; j < secondEl.length; j++) {\n      resArr.push(multiply(firstEl[i], secondEl[j]));\n    }\n  }\n\n  console.log(resArr);\n  // code goes here\n  return str;\n}\n\n// keep this function call here d\nconsole.log(PolynomialExpansion(readline()));\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Polynomial-Expression.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-polynomial-expression-md-8cc2994233ba3eab80f8.js.map