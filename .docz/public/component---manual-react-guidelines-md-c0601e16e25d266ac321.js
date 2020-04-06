(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{A73K:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),o=t("TjRS");t("aD51");function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React/guidelines.md"}});var r={_frontmatter:s},i=o.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(i,p({},r,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("p",null,"Author: Dennis O'Keeffe"),Object(a.b)("h2",{id:"section-react"},"Section: React"),Object(a.b)("h1",{id:"guidelines-for-using-react"},"Guidelines for using React"),Object(a.b)("p",null,"These are by no means rules but ",Object(a.b)("strong",{parentName:"p"},"guidelines")," for how to decide on whether the component should connect directly Redux and making decisions on whether or not the component is required in multiple forms, readied for different platforms etc."),Object(a.b)("h2",{id:"sections"},"Sections"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"When to use Redux and connect a function?"),Object(a.b)("li",{parentName:"ol"},"When to decide to use a multicomponent?")),Object(a.b)("h2",{id:"1-when-to-use-redux-and-connect-a-function"},"1. When to use Redux and connect a function?"),Object(a.b)("p",null,'There are two types of components: stateful ("smart") components and stateless ("dumb") components.'),Object(a.b)("p",null,'The "dumb" stateless components have one job: ',Object(a.b)("inlineCode",{parentName:"p"},"Take data as input and display"),". In order to make components malleable and reusable, we aim to decouple them from state and ensure that they can then be reuseable and display differing information based on what is handed down to them."),Object(a.b)("p",null,"Take the following example:"),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-javascript"}),'// Stateless, "dumb" component\nconst ComponentNumberDisplay = props => (\n    <div className="component-number-display">\n        <p className="copy">{props.number}</p>\n    </div>\n);\n\n// Stateful, "smart" components\nconst PageOne = () => (\n    <section className="page-one">\n        <div className="container-content">\n            <ComponentNumberDisplay number={4} />\n        </div>\n    </section>\n);\n\nconst PageTwo = () => (\n    <section className="page-two">\n        <div className="container-content">\n            <ComponentNumberDisplay number={7} />\n            <ComponentNumberDisplay number={10} />\n        </div>\n    </section>\n);\n\nconst PageThree = () => {\n    const numbers = [1,2,3];\n    const mapComponentNumberDisplays = (numbers) => {\n        return numbers.map((number, index) => (<ComponentNumberDisplay key={index} number={number} />)\n    }\n\n    return (\n        <section className="page-two">\n            <div className="container-content">\n                {mapComponentNumberDisplays(numbers)}\n            </div>\n        </section>\n    );\n}\n')),Object(a.b)("p",null,"In this example, ",Object(a.b)("inlineCode",{parentName:"p"},"PageOne"),", ",Object(a.b)("inlineCode",{parentName:"p"},"PageTwo"),", ",Object(a.b)("inlineCode",{parentName:"p"},"PageThree"),' are all "smart", stateful components, although this means that they themselves are not very reusable given how rigid they are for what the display.'),Object(a.b)("p",null,"On the other hand, ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentNumberDisplay")," will just display whatever is passed down from the parent itself. The aim of the game is to pass down props from the ",Object(a.b)("strong",{parentName:"p"},"single")," parent that we connect up. In the case of the web and apps, we should make the stateful component the ",Object(a.b)("strong",{parentName:"p"},"page")," where possible and pass down the rest of the props."),Object(a.b)("p",null,"To illustrate this, we will now introduce a Redux connected component and how data will be passed down the chain."),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-javascript"}),'// Stateless, "dumb" component\nconst ComponentNumberDisplay = (props) => (\n    <div className="component-number-display">\n        <p className="copy">{props.number}</p>\n    </div>\n);\n\n// Stateless, "dumb" component\nconst ComponentTextDisplay = (props) => (\n    <div className="component-number-display">\n        <p className="copy">{props.copy}</p>\n    </div>\n);\n\n// Stateless, "dumb" component\nconst ComponentDataDisplay = (props) => (\n    <React.Fragment>\n        <ComponentNumberDisplay {...props} />\n        <ComponentTextDisplay {...props} />\n    </React.Fragment>\n);\n\n// In another file, PageOne\nimport React, { Component } from \'react\';\nimport { connect } from \'react-redux\';\n\n/* user imports */\nimport ComponentDataDisplay from \'app/components/ComponentDataDisplay\';\n\nclass PageOne extends Component {\n    /**\n     * Render <%= name %> component\n     * @memberof <%= name %>\n     * @var {function} render Render <%= name %> component\n     * @returns {<%= name %>} component\n     */\n    render() {\n        const { number, copy } = this.props;\n        return (\n            <div className="page-one">\n                <ComponentDataDisplay {...props} />\n                {/* Alternative to be specific */}\n                <ComponentDataDisplay number={number} copy={copy} />\n            </div>\n        );\n    }\n}\n\n// Map reducer state to a props object\nconst mapStateToProps = (state) => ({\n    number: state.SomeReducer.number,\n    copy: state.AnotherReducer.copy\n});\n\n// Connect those props to the component\nexport default connect(mapStateToProps, {})(PageOne);\n')),Object(a.b)("p",null,"In this example, ",Object(a.b)("inlineCode",{parentName:"p"},"PageOne")," is connected to Redux and gets ",Object(a.b)("inlineCode",{parentName:"p"},"number")," and ",Object(a.b)("inlineCode",{parentName:"p"},"copy")," added to ",Object(a.b)("inlineCode",{parentName:"p"},"props"),". From here, we can either destructure those variables or just pass down all the props to ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentDataDisplay"),". Within the ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentDataDisplay"),", we've just again passed down all the props from ",Object(a.b)("inlineCode",{parentName:"p"},"PageOne")," and in the case of ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentNumberDisplay")," this means there is a ",Object(a.b)("inlineCode",{parentName:"p"},"props.number")," variable and for ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentTextDisplay")," a ",Object(a.b)("inlineCode",{parentName:"p"},"props.copy")," variable."),Object(a.b)("p",null,"Use your best decision making when deciding whether to pass down specific props or just all props."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React/guidelines.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-guidelines-md-c0601e16e25d266ac321.js.map