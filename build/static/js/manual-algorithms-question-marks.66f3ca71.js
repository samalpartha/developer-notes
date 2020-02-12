(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./manual/Algorithms/Question-Marks.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a={},i="wrapper";function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)(i,Object.assign({},a,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"question-marks"},"Question Marks"),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://www.coderbyte.com/editor/Questions%20Marks:JavaScript"}),"CoderByte challenge"))),Object(r.b)("h2",{id:"question"},"Question"),Object(r.b)("p",null,"Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well."),Object(r.b)("p",null,'For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.'),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'Input: "aa6?9"\nOutput: false\n')),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'Input: "acc?7??sss?3rr1??????5"\nOutput: true\n')),Object(r.b)("h2",{id:"answer"},"Answer"),Object(r.b)("p",null,"Correct:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"function QuestionsMarks(str) {\n  // expect string format\n  const sum = (a, b) => parseInt(a) + parseInt(b);\n  let flag = false;\n  // check for number indexes\n  const numIndexes = [];\n  for (let i = 0; i < str.length; i++) {\n    if (/[0-9]/gi.test(str[i])) numIndexes.push(i);\n  }\n\n  if (numIndexes.length < 2) return false;\n  for (let i = 1; i < numIndexes.length; i++) {\n    if (sum(str[numIndexes[i - 1]], str[numIndexes[i]]) === 10) {\n      flag = true;\n      const matches = str.slice(numIndexes[i - 1], numIndexes[i]).match(/\\?/gi);\n      if (!matches || matches.length !== 3) return false;\n    }\n  }\n\n  return flag;\n}\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Question-Marks.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-algorithms-question-marks.101a1afd2417ec7a4a77.js.map