(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"./manual/Data-Structures/Go.md":function(n,e,r){"use strict";r.r(e),r.d(e,"default",function(){return u});var t=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),a={},s="wrapper";function u(n){var e=n.components,r=Object(t.a)(n,["components"]);return Object(i.b)(s,Object.assign({},a,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"go-data-structures"},"Go Data Structures"),Object(i.b)("h2",{id:"fizzbuzz"},"Fizzbuzz"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'func fizzBuzz(i int) string {\n  switch true {\n    case i%3 == 0 && i%5 == 0:\n        return "fizzbuzz"\n    case i%3 == 0:\n        return "fizz"\n    case i%5 == 0:\n        return "buzz"\n    default:\n        return strconv.Itoa(i)\n  }\n}\n')),Object(i.b)("h2",{id:"chunked-arrays"},"Chunked Arrays"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'func arrayChunk(arr []int, size int) [][]int {\n    if len(arr) <= 0 {\n        return nil\n    }\n\n    var tmp []int\n    var chunkedArr [][]int\n    for i, item := range arr {\n        tmp = append(tmp, item)\n\n        isFinal := len(arr)-1 == i\n        if i%size == size-1 || isFinal {\n            fmt.Printf("%v", tmp)\n            chunkedArr = append(chunkedArr, tmp)\n            tmp = nil\n        }\n    }\n\n    return chunkedArr\n}\n')),Object(i.b)("h2",{id:"palindromes"},"Palindromes"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),"package main\n\n// return whether it is a palindrome or not\nfunc main() {\n    return\n}\n\n// String converts string struct expecting palindromes\ntype String struct {\n    str string\n}\n\nfunc newPalindrome(s string) String {\n    return String{s}\n}\n\nfunc (s String) isPalindrome() bool {\n    r := []rune(s.str)\n    for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {\n        if r[i] != r[j] {\n            return false\n        }\n    }\n\n    return true\n}\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Data-Structures/Go.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-data-structures-go.101a1afd2417ec7a4a77.js.map