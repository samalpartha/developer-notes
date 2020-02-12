(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{"./manual/JavaScript/Sinon-JS.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return r});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),o={},i="wrapper";function r(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)(i,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"sinon-js"},"Sinon JS"),Object(s.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"#sinon-js"}),"Sinon JS"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"#table-of-contents"}),"Table of contents")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"#basic-example"}),"Basic example"))))),Object(s.b)("h2",{id:"basic-example"},"Basic example"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// form/index.js\nimport { create } from 'apisauce';\n\nexport const api =\n    process.env.NODE_ENV === 'production'\n        ? create({\n              baseURL: 'http://',\n              headers: {\n                  Accept: 'application/vnd.github.v3+json'\n              }\n          })\n        : create({\n              baseURL: 'http://localhost:4444',\n              headers: {\n                  'Content-Type': 'application/json'\n              }\n          });\n\nexport default class Form {\n    static submit = async (values) => {\n        // ! This is what I am targeting\n        const res = await api.post('/form', values);\n        return res;\n    };\n}\n\n// form/form.mocha.js\nimport form, { api } from './index';\nimport sinon from 'sinon';\n\ndescribe('#submit()', function() {\n    it('should return 201', (done) => {\n        (async () => {\n            // ! We'll stub api.post so a request is not sent\n            var post = sinon.stub(api, 'post');\n            post.onCall(0).returns({ ok: true, status: 201 });\n\n            const res = await form.submit({ test: true });\n            post.restore();\n            expect(res.status).to.equal(201);\n            done();\n        })();\n    });\n});\n")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/Sinon-JS.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-java-script-sinon-js.101a1afd2417ec7a4a77.js.map