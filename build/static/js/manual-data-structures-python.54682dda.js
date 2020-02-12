(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"./manual/Data-Structures/Python.md":function(e,n,r){"use strict";r.r(n),r.d(n,"default",function(){return o});var t=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),s={},i="wrapper";function o(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(a.b)(i,Object.assign({},s,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"python-data-structures"},"Python Data Structures"),Object(a.b)("h2",{id:"array-chunks"},"Array Chunks"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-python"}),"def arrayChunk(arr, size):\n    print(arr)\n    if (size == 0):\n        return []\n    if (len(arr) < size):\n        return [arr]\n    tmp = []\n    chunkedArr = []\n    for i, d in enumerate(arr):\n        tmp.append(d)\n        if (i % size == size - 1 or i == len(arr) - 1):\n            chunkedArr.append(tmp)\n            tmp = []\n    return chunkedArr\n")),Object(a.b)("h2",{id:"palindromes"},"Palindromes"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-python"}),'import re\n\ndef isPalindrome(string):\n    reStr = re.sub("[^a-zA-Z]", "", string).strip().lower()\n    return reStr[::-1] == reStr\n')))}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Data-Structures/Python.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-data-structures-python.101a1afd2417ec7a4a77.js.map