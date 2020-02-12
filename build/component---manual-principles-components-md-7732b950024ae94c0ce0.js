(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{DTlY:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),o=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Principles/Components.md"}});var s={_frontmatter:i},l=o.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(l,r({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#components"}),"Components"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#web-checklist"}),"Web Checklist")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#web-testing"}),"Web Testing"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#functional-testing-template"}),"Functional Testing Template")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#regression-testing-template"}),"Regression Testing Template")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#ui-testing-template"}),"UI Testing Template")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#web-accessibility"}),"Web Accessibility")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#component-rules"}),"Component rules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#type-checking"}),"Type Checking"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#complex-example"}),"Complex example")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#using-decorators"}),"Using decorators"))))),Object(a.b)("h1",{id:"components"},"Components"),Object(a.b)("h2",{id:"web-checklist"},"Web Checklist"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Web testing"),Object(a.b)("li",{parentName:"ol"},"Web accessibility"),Object(a.b)("li",{parentName:"ol"},"Component rules")),Object(a.b)("h2",{id:"web-testing"},"Web Testing"),Object(a.b)("p",null,"For the web, we want to ensure that we can run UI tests, regression tests and functional tests."),Object(a.b)("h3",{id:"functional-testing-template"},"Functional Testing Template"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// Example function to test\nfunction add(x, y) {\n  return x + y;\n}\n\n// Test suite\ndescribe('JavaScript functionality for a file', () => {\n  // Test spec\n  it('expects true to be true', () => {\n    expect(true).to.be.true; // evaluates to true - test passes\n  });\n\n  // Test spec\n  it('expects 1 + 2 to equal 3', () => {\n    const result = add(1, 2);\n    expect(result).to.equal(3); // evaluates to true - test passes\n  });\n});\n")),Object(a.b)("p",null,"For UI Tests, reference ",Object(a.b)("inlineCode",{parentName:"p"},"manual/Testing/mocha-and-chai.md")," for more information. It is best to run this using ",Object(a.b)("inlineCode",{parentName:"p"},"mochacinno")," and in watch mode. These are best use for anything found under the ",Object(a.b)("inlineCode",{parentName:"p"},"js")," controller module banner."),Object(a.b)("h3",{id:"regression-testing-template"},"Regression Testing Template"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"/**\n * Regression tests\n * @author Dennis O'Keeffe\n */\nrequire('babel-polyfill');\nconst expect = require('chai').expect;\nconst cwd = process.cwd();\nconst PixelDiff = require('controllers/pixeldiff');\nconst puppeteer = require('puppeteer');\n\nconsole.log(PixelDiff);\nconsole.log(cwd);\n\nconst screenshot = async (selector, savePath, location = '/') => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n\n  console.log('Opening browser');\n  await page.goto('http://localhost:3000');\n\n  const el = await page.$('.homeSplashFade');\n  await el.screenshot({ path: savePath });\n\n  console.log('Closing browser');\n  await browser.close();\n};\n\ndescribe('It works functionality', () => {\n  it('Expects true to be true', () => {\n    expect(true).to.be.true;\n  });\n});\n\ndescribe('Image regression testing', () => {\n  it('has no pixel difference', async () => {\n    console.log('Comparing images');\n    await screenshot('.homeSplashFade', cwd + '/regression/temp/test.png');\n\n    const res = await PixelDiff.diff({\n      imgOnePath: cwd + '/regression/src/test.png',\n      imgTwoPath: cwd + '/regression/temp/test.png',\n      dest: cwd + '/regression/diff/test.png',\n      output: true\n    });\n    expect(res).to.equal(0);\n  });\n});\n")),Object(a.b)("p",null,"For more information, reference ",Object(a.b)("inlineCode",{parentName:"p"},"manual/Testing/Regression-Testing.md"),"."),Object(a.b)("h3",{id:"ui-testing-template"},"UI Testing Template"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const puppeteer = require('puppeteer');\n\n// Test suite\ndescribe('PageHome functionality', () => {\n  // Test suite within another test suite - useful for subsectioning tests within a component/page\n  describe('Simple Puppeteer UI test for form elements', () => {\n    it('firstName and lastName from Puppeteer deep equal expected schema', async () => {\n      const expected = {\n        firstName: 'Hello',\n        lastName: 'World'\n      };\n\n      const browser = await puppeteer.launch({ headless: false });\n      const page = await browser.newPage();\n      await page.goto('http://localhost:3000');\n      await page.screenshot({ path: 'example.png' }); // create an example screenshot of current UI state\n      await page.type('input[name=\"firstName\"]', 'Hello');\n      const firstName = await page.$eval(\n        'input[name=\"firstName\"]',\n        (el) => el.value\n      );\n\n      await page.waitFor(500);\n      await page.click('#next');\n      await page.waitForSelector('input[name=\"lastName\"]');\n      await page.type('input[name=\"lastName\"]', 'World');\n      const lastName = await page.$eval(\n        'input[name=\"lastName\"]',\n        (el) => el.value\n      );\n\n      await page.waitFor(500);\n      const formData = {\n        firstName: firstName,\n        lastName: lastName\n      };\n\n      await browser.close();\n\n      expect(formData).to.deep.equal(expected); // evauates to true if form fields hold correct value\n    });\n  });\n});\n")),Object(a.b)("p",null,"For more information, reference ",Object(a.b)("inlineCode",{parentName:"p"},"manual/Testing/puppeteer.md"),"."),Object(a.b)("h2",{id:"web-accessibility"},"Web Accessibility"),Object(a.b)("p",null,"Run the site through the accessibility checker and ensure that there are no errors."),Object(a.b)("p",null,"Useful links:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://design-patterns.tink.uk/"}),"Tink Design Patterns"))),Object(a.b)("h2",{id:"component-rules"},"Component rules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"We want reusability where possible"),Object(a.b)("li",{parentName:"ul"},"UI elements should have no hardcoded text"),Object(a.b)("li",{parentName:"ul"},"Where possible, use ",Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/reduxjs/reselect"}),"Reselect")," when using Redux and having elements that require a change to only specific state elements"),Object(a.b)("li",{parentName:"ul"},"Use a decorator over all objects"),Object(a.b)("li",{parentName:"ul"},"Write all files in TypeScript")),Object(a.b)("h2",{id:"type-checking"},"Type Checking"),Object(a.b)("p",null,"Type checking is an integral part of the process to ensure that what we are providing is the correct type."),Object(a.b)("p",null,"TypeScript with VSCode offers a great to do this from our doc blocks."),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76"}),"This Medium article has a great into into it.")),Object(a.b)("p",null,'To get started on VSCode for .js files, head to settings and update the "Check JS" box.'),Object(a.b)("p",null,Object(a.b)("img",{alt:"Check JS",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1539053998/Screen_Shot_2018-10-09_at_1.36.08_pm.png"})),Object(a.b)("p",null,"Now we can get into type setting simply by using our doc blocks with the ",Object(a.b)("inlineCode",{parentName:"p"},"@type")," attribute!"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Basic example",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1539053998/Screen_Shot_2018-10-09_at_1.43.22_pm.png"})),Object(a.b)("p",null,"The deep you delve into the type, the deeper the error outlines go."),Object(a.b)("p",null,Object(a.b)("img",{alt:"More complex example",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1539053998/Screen_Shot_2018-10-09_at_1.47.28_pm.png"})),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/basic-types.html"}),"Checkout the Typescript page")," to get more of an idea about what you can do."),Object(a.b)("h3",{id:"complex-example"},"Complex example"),Object(a.b)("p",null,"Here is an example using @typedefs."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\nimport Config from 'src/app.json';\nimport Emitter from 'common/Emitter';\n/* user imports */\n\n/**\n * Render the ComponentALFooterOne component\n *\n * @class ComponentALFooterOne\n * @extends {Component}\n */\nclass ComponentALFooterOne extends Component {\n  /**\n   * @typedef {Object} Link Defines the main links\n   * @property {String} copy Copy string\n   * @property {String} link Link URL\n   */\n  /**\n   * @typedef {Object} Social Social links\n   * @property {String} type Type of social linke\n   * @property {String} link Link URL\n   */\n  /**\n   * @typedef {Object} State The state object\n   * @property {Link[]} linksTop Links that go on the top\n   * @property {Social[]} linksSocial Social links\n   * @property {Link[]} linksBottom Links that go to the bottom\n   */\n\n  /**\n   * @type {State} state\n   */\n  state = {\n    linksTop: [\n      {\n        copy: 'Link',\n        link: '/'\n      },\n      {\n        copy: 'Link',\n        link: '/'\n      },\n      {\n        copy: 'Link',\n        link: '/'\n      },\n      {\n        copy: 'Link',\n        link: '/'\n      }\n    ],\n    linksSocial: [\n      {\n        type: 'Link',\n        link: '/'\n      },\n      {\n        type: 'Link',\n        link: '/'\n      },\n      {\n        type: 'Link',\n        link: '/'\n      },\n      {\n        type: 'Link',\n        link: '/'\n      }\n    ],\n    linksBottom: [\n      {\n        copy: 'Link',\n        link: '/'\n      },\n      {\n        copy: 'Link',\n        link: '/'\n      },\n      {\n        copy: 'Link',\n        link: '/'\n      }\n    ]\n  };\n\n  handleLink(e, d) {\n    Emitter.emit('event', {\n      event: 'ComponentALFooterOne.handleLink',\n      e: e.target\n    });\n\n    if (d.href[0] === '/') {\n      e.preventDefault();\n      const { router } = this.props;\n      router.push(Config.baseUrl + d.href);\n    }\n  }\n\n  renderLinksTopLeft = () => {\n    const { linksTopLeft } = this.props.copy;\n    if (!linksTopLeft) {\n      return;\n    }\n\n    return linksTopLeft.map((d, i) => (\n      <a\n        key={i}\n        onClick={(e) => this.handleLink(e, d)}\n        href={d.href}\n        className=\"text f-primary link margin opaque animate\"\n      >\n        {d.name}\n      </a>\n    ));\n  };\n\n  renderLinksBottomLeft = () => {\n    const { linksBottomLeft } = this.props.copy;\n    if (!linksBottomLeft) {\n      return;\n    }\n\n    return linksBottomLeft.map((d, i) => (\n      <a\n        key={i}\n        onClick={(e) => this.handleLink(e, d)}\n        href={d.href}\n        className=\"text f-primary link social margin opaque animate\"\n      >\n        {d.name}\n      </a>\n    ));\n  };\n\n  renderLinksBottomRight = () => {\n    const { linksBottomRight } = this.props.copy;\n    if (!linksBottomRight) {\n      return;\n    }\n\n    return linksBottomRight.map((d, i) => (\n      <a\n        key={i}\n        onClick={(e) => this.handleLink(e, d)}\n        href={d.href}\n        className=\"text f-primary link social margin opaque animate\"\n      >\n        {d.name}\n      </a>\n    ));\n  };\n\n  /**\n   * Render ComponentALFooterOne component\n   * @memberof ComponentALFooterOne\n   * @var {function} render Render ComponentALFooterOne component\n   * @returns {Object} component\n   */\n  render() {\n    return (\n      <div className=\"component-al-footer-one\">\n        <div className=\"container content\">\n          <nav className=\"nav footer\">\n            <div className=\"block-main links\">{this.renderLinksTopLeft()}</div>\n            <div className=\"block-lower\">\n              <div className=\"block-social\">{this.renderLinksBottomLeft()}</div>\n\n              <div className=\"block-footer links\">\n                {this.renderLinksBottomRight()}\n              </div>\n            </div>\n          </nav>\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default ComponentALFooterOne;\n")),Object(a.b)("h2",{id:"using-decorators"},"Using decorators"),Object(a.b)("p",null,"Decorators are a useful way to cut code and wrap classes. A good example is the usage with redux. Take note though: decorators are deprecated and may be removed."),Object(a.b)("p",null,"The example of a decorator used for Redux:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { connect } from 'react-redux';\n\nconst DecoratorRedux = (component) => {\n  const mapStateToProps = (state) => {\n    return {\n      routing: state.routing,\n      copy: state.copy,\n      current: state.routing.locationBeforeTransitions.pathname\n    };\n  };\n\n  return connect(mapStateToProps)(component);\n};\n\nexport default DecoratorRedux;\n")),Object(a.b)("p",null,"In use:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"@DecoratorRedux\nclass PageBlog extends Component {\n    /**\n     * Render PageBlog component\n     * @memberof PageBlog\n     * @var {function} render Render PageBlog component\n     * @returns {PageBlog} component\n     */\n    render() {\n      return (<div><p>Hello!</p></div>);\n    }\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Principles/Components.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-principles-components-md-7732b950024ae94c0ce0.js.map