(window.webpackJsonp=window.webpackJsonp||[]).push([[559],{vUBX:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),s=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Testing/Regression-Testing.md"}});var i={_frontmatter:o},l=s.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(r.b)(l,a({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"css-regression-testing"},"CSS Regression Testing"),Object(r.b)("p",null,"We can achieve CSS regression testing by using an assertion library in conjuction with Puppeteer and Pixel Diff."),Object(r.b)("h2",{id:"prequisites"},"Prequisites"),Object(r.b)("h3",{id:"using-yarn"},"Using yarn"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"yarn install --dev mocha chai puppeteer pixelmatch pngfs babel-polyfill babel-preset-env babel-plugin-module-resolver\n")),Object(r.b)("h3",{id:"using-kratos"},"Using kratos"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"kratos install js-controllers pixeldiff\nkratos install js-test regression\nshotgun run\n")),Object(r.b)("h3",{id:"folder-setup"},"Folder setup"),Object(r.b)("p",null,"Ensure that you have a ",Object(r.b)("inlineCode",{parentName:"p"},"regression")," folder to store all the images."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"# Example regression layout\nregression\n├── diff\n│   └── test.png\n├── src\n│   └── test.png\n└── temp\n    └── test.png\n\n3 directories, 3 files\n")),Object(r.b)("h2",{id:"using-regression-cli"},"Using Regression CLI"),Object(r.b)("h3",{id:"preparation"},"Preparation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Set the imports for the router file."),Object(r.b)("li",{parentName:"ol"},"Set the dev router."),Object(r.b)("li",{parentName:"ol"},"Set the array in the .puppeteer file."),Object(r.b)("li",{parentName:"ol"},"Ensure the devRouter is being used."),Object(r.b)("li",{parentName:"ol"},"Ensure app is running."),Object(r.b)("li",{parentName:"ol"},"Run source to set the base image."),Object(r.b)("li",{parentName:"ol"},"Run compare to compare source to current.")),Object(r.b)("h2",{id:"application"},"Application"),Object(r.b)("h3",{id:"1-create-a-babelrc-file"},"1. Create a babelrc file"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "presets": ["env"],\n  "plugins": [\n    [\n      "module-resolver",\n      {\n        "alias": {\n          "controllers": "./controllers"\n        }\n      }\n    ]\n  ]\n}\n')),Object(r.b)("h3",{id:"2-saving-a-screenshot"},"2. Saving a screenshot"),Object(r.b)("p",null,"This is not the test itself but a simple node script to get the initial base working:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"const PixelDiff = require('./controllers/pixeldiff');\nconst puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n\n  console.log('Opening browser');\n  await page.goto('http://localhost:3000');\n\n  const el = await page.$('.homeSplashFade');\n  await el.screenshot({ path: 'regression/src/test.png' });\n\n  console.log('Closing browser');\n  await browser.close();\n\n  /*\n    console.log('Comparing images');\n    const res = await PixelDiff.diff({imgOnePath: 'test.png', imgTwoPath: 'test2.png', dest: 'dest.png', output: true});\n    console.log(res);\n    */\n})();\n")),Object(r.b)("h3",{id:"3-writing-the-test-file"},"3. Writing the test file"),Object(r.b)("p",null,"Create your test file. Any example test file looks like the following:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"/**\n * Regression tests\n * @author Dennis O'Keeffe\n */\nrequire('babel-polyfill');\nconst expect = require('chai').expect;\nconst cwd = process.cwd();\nconst PixelDiff = require('controllers/pixeldiff');\nconst puppeteer = require('puppeteer');\n\nconsole.log(PixelDiff);\nconsole.log(cwd);\n\nconst screenshot = async (selector, savePath, location = '/') => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n\n  console.log('Opening browser');\n  await page.goto('http://localhost:3000');\n\n  const el = await page.$('#root');\n  await el.screenshot({ path: savePath });\n\n  console.log('Closing browser');\n  await browser.close();\n};\n\ndescribe('It works functionality', () => {\n  it('Expects true to be true', () => {\n    expect(true).to.be.true;\n  });\n});\n\ndescribe('Image regression testing', () => {\n  it('has no pixel difference', async () => {\n    console.log('Comparing images');\n    await screenshot('.homeSplashFade', cwd + '/regression/temp/test.png');\n\n    const res = await PixelDiff.diff({\n      imgOnePath: cwd + '/regression/src/test.png',\n      imgTwoPath: cwd + '/regression/temp/test.png',\n      dest: cwd + '/regression/diff/test.png',\n      output: true\n    });\n    expect(res).to.equal(0);\n  });\n});\n")),Object(r.b)("h3",{id:"4-running-the-test-from-the-cli"},"4. Running the test from the CLI"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"mocha --compilers js:babel-core/register --timeout 0 ./test/regression/regression.mocha.js\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Testing/Regression-Testing.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-testing-regression-testing-md-1dde9295fcd2a93bab12.js.map