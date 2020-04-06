(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{jplg:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),s=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Jest/JS-Testing-Practices-And-Principles.md"}});var i={_frontmatter:r},l=s.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(a.b)(l,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"js-testing-practices-and-principles"},"JS-Testing-Practices-And-Principles"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://frontendmasters.com/courses/testing-practices-principles/jest-testing-framework/"}),"Online Course")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://jestjs.io/docs/en/cli"}),"Jest CLI docs")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/atlassian/jest-in-case"}),"Jest-in-case library")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://kentcdodds.com/blog/pure-modules/"}),"Why Pure Modules"))),Object(a.b)("h2",{id:"jest-intro"},"Jest Intro"),Object(a.b)("h3",{id:"cli"},"CLI"),Object(a.b)("p",null,"Running ",Object(a.b)("inlineCode",{parentName:"p"},"jest -o")," will look for related files since last commit. When running, you can use shortcuts to run certain tests. Read the watch usage for more info."),Object(a.b)("h3",{id:"commands"},"Commands"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"toBe")," will compare memory allocation"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"toEqual")," will deep equal object values etc"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"toMatchObject")," checks if all expected object matches what is in the actual object"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"toHaveBeenCalled")," is used to help with mock functons"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"toHaveBeenCalledTimes")," is mock called how many times"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"toHaveBeenCalledWith")," to check what argument is passed")),Object(a.b)("p",null,"With ",Object(a.b)("inlineCode",{parentName:"p"},"toEqual"),", ",Object(a.b)("inlineCode",{parentName:"p"},"toMatchObject")," and ",Object(a.b)("inlineCode",{parentName:"p"},"toHaveBeenCalledWith")," you can match a schema. Eg:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"test('example', () => {\n  const bday = {\n    day: 22,\n    month: 4,\n    year: 1992,\n    meta: { display: '22nd April 1992' },\n  };\n\n  const schema = {\n    day: expect.any(Number),\n    month: expect.any(Number),\n    year: expect.any(Number),\n    meta: {\n      display: expect.stringContaining('1992'),\n    },\n    // there's also expect.arrayContaining or expect.objectContaining\n  };\n  expect(birthday).toEqual(schema);\n});\n")),Object(a.b)("p",null,"This is useful for generated data."),Object(a.b)("h2",{id:"test-factories-and-colocating-tests-qa"},"Test Factories and Colocating Tests Q&A"),Object(a.b)("p",null,"Creating a test factory is a good approach to testing a pure function."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"describe('isPasswordAllowed', () => {\n  const allowedPasswords = ['allowed'];\n  const disallowedPasswords = ['disallowed'];\n\n  allowedPasswords.forEach(pwd => {\n    test(`\"${pwd}\" should be allowed`, () => {\n      expect(isPasswordAllowed(pwd)).toBe(true);\n    });\n  });\n\n  disallowedPasswords.forEach(pwd => {\n    test(`\"${pwd}\" should be allowed`, () => {\n      expect(isPasswordAllowed(pwd)).toBe(false);\n    });\n  });\n});\n")),Object(a.b)("p",null,"There was a reference here to Atlassian's ",Object(a.b)("inlineCode",{parentName:"p"},"jest-in-case")," library that you can see ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/atlassian/jest-in-case"}),"here"),"."),Object(a.b)("p",null,'"Colocating" your tests essentially is the idea of putting your test in the same folder as where the source code is. Its a more relevant position for updates etc.'),Object(a.b)("h2",{id:"code-coverage"},"Code coverage"),Object(a.b)("p",null,"Istanbul is a standard coverage tool for JS testing."),Object(a.b)("p",null,"The code coverage report helps you identify lines of code that haven't been covered during testing."),Object(a.b)("h2",{id:"monkey-patch-a-mock"},"Monkey Patch a mock"),Object(a.b)("p",null,"Monkey patching is updating 3rd party software to fit our needs - in this case, changing a func."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import thumbWar from '../thumb-war';\nimport * as utils from '../utils';\n\ntest('returns winner', () => {\n  utils.getWinner = (p1, p2) => p2;\n\n  const winner = thumbWar('Ken Wheeler', 'Kent C Dodds');\n  expect(winner).toBe('Kent C Dodds');\n});\n")),Object(a.b)("h2",{id:"assert-calling-a-mock"},"Assert calling a mock"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import thumbWar from '../thumb-war';\nimport * as utils from '../utils';\n\ntest('returns winner', () => {\n  const originalGetWinner = utils.getWinner;\n  utils.getWinner = (...args) => {\n    util.getWinner.mock.calls.push(args);\n    return args[1];\n  };\n  utils.getWinner.mock = { calls: [] };\n\n  const winner = thumbWar('Ken Wheeler', 'Kent C Dodds');\n  expect(winner).toBe('Kent C Dodds');\n  expect(utils.getWinner.mock.calls).toEqual([\n    ['Ken Wheeler', 'Kent C Dodds'],\n    ['Ken Wheeler', 'Kent C Dodds'],\n  ]);\n\n  utils.getWinner = originalGetWinner;\n});\n")),Object(a.b)("h2",{id:"jest-spyon"},"Jest spyOn"),Object(a.b)("p",null,"When calling ",Object(a.b)("inlineCode",{parentName:"p"},"spyOn"),', it just wraps the function and "spies" on it with a mock function to allow it to keep running.'),Object(a.b)("p",null,"Once you do that, we can mock the implementation to enable the test to run our fake one:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import thumbWar from '../thumb-war';\nimport * as utils from '../utils';\n\ntest('returns winner', () => {\n  jest.spyOn(utils, 'getWinner');\n  utils.getWinner.mockImplementation((p1, p2) => p2);\n\n  const winner = thumbWar('Ken Wheeler', 'Kent C Dodds');\n  expect(winner).toBe('Kent C Dodds');\n  expect(utils.getWinner.mock.calls).toEqual([\n    ['Ken Wheeler', 'Kent C Dodds'],\n    ['Ken Wheeler', 'Kent C Dodds'],\n  ]);\n\n  util.getWinner.mockRestore();\n});\n")),Object(a.b)("h2",{id:"jest-mock"},"Jest Mock"),Object(a.b)("p",null,"Jest Mock prevents us running into the namespace issues that ",Object(a.b)("inlineCode",{parentName:"p"},"spyOn")," can give us which stops us from busting ES6 modules."),Object(a.b)("p",null,"Jest will swap out whatever is in that file with a mock."),Object(a.b)("p",null,"The callback allows you to mock specific functions."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import thumbWar from '../thumb-war';\nimport * as utils from '../utils';\n\njest.mock('../utils', () => {\n  // to mock the actual file\n  const actualUtils = require.requireActual('../utils');\n\n  return {\n    // if we want to keep base utils\n    ...actualUtils,\n    getWinner: jest.fn((p1, p2) => p2),\n  };\n});\n\nbeforeEach(() => {\n  // ensure mocks are cleared before each test\n  utils.getWinner.mockClear();\n});\n\ntest('returns winner', () => {\n  const winner = thumbWar('Ken Wheeler', 'Kent C Dodds');\n  expect(winner).toBe('Kent C Dodds');\n  expect(utils.getWinner.mock.calls).toEqual([\n    ['Ken Wheeler', 'Kent C Dodds'],\n    ['Ken Wheeler', 'Kent C Dodds'],\n  ]);\n\n  util.getWinner.mockRestore();\n});\n")),Object(a.b)("p",null,"There is a convention by Jest to store mocks in a ",Object(a.b)("inlineCode",{parentName:"p"},"__mocks__")," folder which is also colocated with the file to mock."),Object(a.b)("p",null,"If we don't provide a mock, it will go to the ",Object(a.b)("inlineCode",{parentName:"p"},"__mocks__")," folder to check if there is an implementation there."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import thumbWar from '../thumb-war';\nimport * as utils from '../utils';\n\n// no implementation - go check '../__mocks__/utils'\njest.mock('../utils');\n\nbeforeEach(() => {\n  // ensure mocks are cleared before each test\n  utils.getWinner.mockClear();\n});\n\ntest('returns winner', () => {\n  const winner = thumbWar('Ken Wheeler', 'Kent C Dodds');\n  expect(winner).toBe('Kent C Dodds');\n  expect(utils.getWinner.mock.calls).toEqual([\n    ['Ken Wheeler', 'Kent C Dodds'],\n    ['Ken Wheeler', 'Kent C Dodds'],\n  ]);\n\n  util.getWinner.mockRestore();\n});\n")),Object(a.b)("p",null,"To mock modules, you put a mock at the root dir (example has ",Object(a.b)("inlineCode",{parentName:"p"},"src/__mocks__"),") and Jest will pick those up automatically."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// checks for `src/__mocks__/axios.js`\nimport axiosMock from 'axios';\n\n// if we don't want to mock module\njest.unmock('axios');\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"An interesting point here on pure modules is that Jest has a ",Object(a.b)("inlineCode",{parentName:"p"},"resetModules")," method that you can run after each test if there is impurity (ie variables declared at the top-level of the file).")),Object(a.b)("h2",{id:"using-a-__mocks__-directory"},"Using a ",Object(a.b)("inlineCode",{parentName:"h2"},"__mocks__")," directory"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import * as usersController from '../users';\nimport { db, initDb } from 'db-utils';\n\nbeforeEach(() => {\n  // an example just initialising the db here\n  initDb();\n});\n\ntest('getUsers returns all users in the database', async () => {\n  const req = {};\n  const res = {\n    json: jest.fn(),\n  };\n\n  await usersController.getUsers(req, res);\n  expect(res.json).toHaveBeenCalledTimes(1);\n  console.log(res.json.mock.calls[0]); // passes back array called in func [{users:[]}]\n\n  // for testing\n  const actualUsers = await db.getUsers();\n  expect(users).toEqual(actualUsers.map(safeUser));\n});\n")),Object(a.b)("p",null,"The example that Kent C Dodds users here is a util to generate random users."),Object(a.b)("h2",{id:"test-factories"},"Test Factories"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Something to note throughout the tests is that Kent uses a ",Object(a.b)("inlineCode",{parentName:"p"},"setup")," top-level function to get the data required during test runtime instead of initialising at the top-level.")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"function setup() {\n  const req = {};\n  const res = {};\n  Object.assign(res, {\n    status: jest.fn(\n      function status() {\n        return this;\n      }.bind(res),\n    ),\n    json: jest.fn(\n      function status() {\n        return this;\n      }.bind(res),\n    ),\n    send: jest.fn(\n      function status() {\n        return this;\n      }.bind(res),\n    ),\n  });\n  return { req, res };\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Doing cleanup ahead of tests can be useful instead of after. This helps inspect the database at the time of failure to help debug.")),Object(a.b)("h2",{id:"conclusion"},"Conclusion"),Object(a.b)("p",null,"Kent mentions that you should use the ",Object(a.b)("inlineCode",{parentName:"p"},"testing trophy"),". He mentions that generally he focuses mainly on integration test over unit and e2e as they are more expensive time and money wise."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Jest/JS-Testing-Practices-And-Principles.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-jest-js-testing-practices-and-principles-md-60908c9dbc7d96ca101d.js.map