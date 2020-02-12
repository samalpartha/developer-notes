(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{"./manual/JavaScript/Nightmare.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return a});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i={},u="wrapper";function a(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)(u,Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"using-nightmarejs"},"Using Nightmare.js"),Object(r.b)("p",null,"Nightmare.js with Mocha, Chai and Nightmare.js "),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"var path = require('path');\nvar Nightmare = require('nightmare');\nvar should = require('chai').should();\n\ndescribe('Nightmare demo', function () {\n    this.timeout(15000); // Set timeout to 15 seconds, instead of the original 2 seconds\n\n    var url = 'http://localhost:3000';\n\n    describe('Start page', function () {\n        it('should show form when loaded', function (done) {\n            new Nightmare()\n                .goto(url)\n                .evaluate(function () {\n                    return document.querySelectorAll('form').length;\n                }, function (result) {\n                    result.should.equal(1);\n                    done();\n                })\n                .run();\n        });\n    });\n\n    describe('Send form', function () {\n        it('should print the posted string on submit', function (done) {\n            var expected = 'Hello, world!';\n\n            new Nightmare()\n                .goto(url)\n                .type('input[name=\"sometext\"]', expected)\n                .click('input[type=\"submit\"]')\n                .wait()\n                .evaluate(function () {\n                    return document.querySelector('#result');\n                }, function (element) {\n                    element.innerText.should.equal(expected);\n                    done();\n                })\n                .run();\n        });\n\n        it('should print \"nothing\" on submit if no string were provided', function (done) {\n            var expected = 'nothing';\n\n            new Nightmare()\n                .goto(url)\n                .click('input[type=\"submit\"]')\n                .wait()\n                .evaluate(function () {\n                    return document.querySelector('#result');\n                }, function (element) {\n                    element.innerText.should.equal(expected);\n                    done();\n                })\n                .run();\n        });\n    });\n});\n")))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/Nightmare.md"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-java-script-nightmare.101a1afd2417ec7a4a77.js.map