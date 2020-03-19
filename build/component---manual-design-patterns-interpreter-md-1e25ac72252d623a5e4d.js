(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{R161:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Interpreter.md"}});var o={_frontmatter:s},l=a.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(l,i({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"interpreter-design-pattern"},"Interpreter Design Pattern"),Object(r.b)("p",null,"Purpose: Behavioural\nType: Class"),Object(r.b)("p",null,"The Interpreter Design Pattern specifies how to evaluate sentences in a string."),Object(r.b)("p",null,"The idea is to have a class for each symbol. The syntax tree of a sentence in the language is an instance of the composite pattern and is used to evaluate (intrepret) the sentence for a client."),Object(r.b)("h2",{id:"participants"},"Participants"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"AbstractExpression (declares interpret method common to all nodes)"),Object(r.b)("li",{parentName:"ul"},"TerminalExpression (interpret terminal symbols in the grammar)"),Object(r.b)("li",{parentName:"ul"},"NonTerminalExpression (maintains instance variables of type AbstractExpression for nonterminal symbols in grammar)"),Object(r.b)("li",{parentName:"ul"},"Context (info global to interpreter)"),Object(r.b)("li",{parentName:"ul"},"Client (builds abstract syntax tree representing a particular sentence in the language that the grammar defines)")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"class Context {\n  private _input;\n\n  constructor(input) {\n    this._input = input;\n  }\n\n  public set input(value) {\n    this._input = value;\n  }\n}\n\ninterface Expression {\n  interpret(context: Context): void;\n}\n\nclass TerminalExpression implements Expression {\n  interpret(context: Context): void {\n    // process comma\n    console.log('interpret terminal');\n  }\n}\n\nclass NoneTerminalExpression implements Expression {\n  interpret(context: Context): void {\n    // process variable\n    console.log('interpret nonterminal');\n  }\n}\n\n(function main() {\n  const context: Context = new Context('1 bird can fly');\n  const list = [];\n  list.push(new TerminalExpression());\n  list.push(new NoneTerminalExpression());\n\n  list.map((exp: Expression) => {\n    exp.interpret(context);\n  });\n})();\n")),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"https://ruslanspivak.com/lsbasi-part7/"}),"AST in action")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"https://www.baeldung.com/java-interpreter-pattern"}),"Java Interpreter for SQL"))))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Interpreter.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-interpreter-md-1e25ac72252d623a5e4d.js.map