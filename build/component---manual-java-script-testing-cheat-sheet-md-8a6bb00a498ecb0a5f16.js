(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{A19i:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),s=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/Testing-Cheat-Sheet.md"}});var l={_frontmatter:o},i=s.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(a.b)(i,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"testing"},"Testing"),Object(a.b)("p",null,"The test files are stored in the test folders and require the dev dependencies ",Object(a.b)("inlineCode",{parentName:"p"},"sinonjs, jsdom, mocha, chai"),"."),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"npm test")," to view the tests files that are written in that folder."),Object(a.b)("p",null,"Testing is still primitive and should be BDD (behaviour driven). Tests that are too specific will cause issues."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"mocha and chai")),Object(a.b)("p",null,"These two are used in tandem to assert/expect values. Check out the Chai documentation for relative examples."),Object(a.b)("p",null,"Tests consist of test suites and test specs. In order to recreate DOM elements if you are looking to test values etc. from functionality, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"jsdom")," library and import ",Object(a.b)("inlineCode",{parentName:"p"},"jquery"),"."),Object(a.b)("p",null,"Below is a small example of a test set up."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import jsdom from 'jsdom-global';\nimport jQuery from '../bower_components/jquery/dist/jquery.min.js';\n\nimport ModuleToTest from 'path/to/module'l\n\n// require sinon/chai\nconst sinon = require('sinon');\nconst expect = require('chai').expect;\n\n// Test suite\ndescribe('These tests are supposed to test some functionality', () => {\n\n    let $;\n    let ageGateFilters;\n    jsdom();\n\n    // this function will run before every Test Spec\n    before(function () {\n        $ = jQuery;\n        const params = ['param1', 'param2', 'param3']\n\n        // create instance\n        const moduleToTest = new ModuleToTest(...params);\n    });\n\n    // Test Spec (unit test)\n    it('This test should return ok', () => {\n        expect(true).to.be.ok;  // returns ok\n    });\n\n    // Test Spec (unit test)\n    it('This test should return true for the ModuleToTest function', () => {\n        expect(moduleToTest.func()).to.equal(true); // returns ok if result is true\n    });\n\n});\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"sinon.js")),Object(a.b)("p",null,"This library is used to essentially stub data for functions that require things like ajax etc. No tests currently use this effectively. Examples will be added later if used."),Object(a.b)("p",null,"For now, I will show an example of a ",Object(a.b)("inlineCode",{parentName:"p"},"spy")," and a ",Object(a.b)("inlineCode",{parentName:"p"},"stub")," (as this may the most relevant): "),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"For the Spy")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"// in module Example\n\nexport default class Example {\n    \n    callout() {\n        let a = 1;\n        let b = 2;\n\n        return target(a,b);\n    }\n\n}\n\n// in a test file\n\nimport Example from 'Example';\n\n// Test suite\ndescribe('A test suite using sinon', () => {\n\n    // this function will run before every Test Spec\n    before(function () {\n        $ = jQuery;\n        const params = ['param1', 'param2', 'param3']\n\n        // create instance\n        const example = new Example(...params);\n    });\n\n    // Test spec (unit test)\n    it('Should return that the async func was called', () => {\n        \n        let targetSpy = sinon.spy(example, 'target');\n\n        // Now, any time we call the function, the spy logs information about it\n        example.callout();\n\n        assert(targetSpy.calledOnce); // returns true\n    });\n});\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"For the Stub")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"// in module Example\n\nexport default class Example {\n    \n    callout(param, callback) {\n        $.ajax({\n            // whatever it normally is\n        }, callback);\n    }\n\n}\n\n// in a test file\n\nimport Example from 'Example';\n\n// Test suite\ndescribe('A test suite using sinon', () => {\n\n    // this function will run before every Test Spec\n    before(function () {\n        $ = jQuery;\n        const params = ['param1', 'param2', 'param3']\n\n        // create instance\n        const example = new Example(...params);\n    });\n\n    // Test spec (unit test)\n    it('Should call callback after saving', () => {\n        \n        //We'll stub $.post so a request is not sent\n        const post = sinon.stub($, 'ajax');\n        post.yields();\n\n        //We can use a spy as the callback so it's easy to verify\n        var callback = sinon.spy();\n\n        example.callout(param, callback);\n\n        post.restore();\n        sinon.assert.calledOnce(callback); // returns true\n    });\n});\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"jsdom")),Object(a.b)("p",null,"jsdom is a library that allows you to write a ",Object(a.b)("inlineCode",{parentName:"p"},"innerHTML")," var for the test to use if you want to test out the jQuery values for a test."),Object(a.b)("p",null,"For an example, checkout yt ",Object(a.b)("inlineCode",{parentName:"p"},"test/agegate_test.js"),"."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/Testing-Cheat-Sheet.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-testing-cheat-sheet-md-8a6bb00a498ecb0a5f16.js.map