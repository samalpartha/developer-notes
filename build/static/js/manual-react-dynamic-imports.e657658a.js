(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{"./manual/React/dynamic-imports.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return s});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),m={},p="wrapper";function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)(p,Object.assign({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"dynamic-imports-for-a-component"},"Dynamic Imports for a Component"),Object(a.b)("h2",{id:"example-code"},"Example Code"),Object(a.b)("p",null,"The key action happens by using ",Object(a.b)("inlineCode",{parentName:"p"},"componentDidMount")," and knowledge of ",Object(a.b)("inlineCode",{parentName:"p"},"state"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"componentDidMount() {\n    import('components/ComponentB').then((module) =>\n        this.setState({ module: module.default })\n    );\n}\n")),Object(a.b)("p",null,"Here is the full code example:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\n\n/**\n * Dynamically load ComponentB.\n *\n * @class ComponentA\n * @extends {Component}\n */\nclass ComponentA extends Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      module: null\n    };\n  }\n\n  /**\n   * On mount, dynamically fetch ComponentB.\n   *\n   * @memberof ComponentA\n   */\n  componentDidMount() {\n    import('components/ComponentFilePond').then((module) =>\n      this.setState({ module: module.default })\n    );\n  }\n\n  /**\n   * Render ComponentA component.\n   *\n   * @memberof ComponentA\n   * @returns {ComponentA} component Basic div with dynamically loaded child\n   */\n  render() {\n    const { module: ComponentB } = this.state;\n    return (\n      <div className=\"component-image-upload\">\n        {ComponentB && <ComponentB {...this.props} />}\n      </div>\n    );\n  }\n}\n\nexport default ComponentA;\n")),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Build")," is a series that is about short, sharp examples.")))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/React/dynamic-imports.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-react-dynamic-imports.101a1afd2417ec7a4a77.js.map