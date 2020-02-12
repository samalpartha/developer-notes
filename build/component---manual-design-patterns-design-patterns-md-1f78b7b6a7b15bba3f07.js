(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{Qluj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Design-Patterns.md"}});var s={_frontmatter:i},l=r.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"design-patterns---gang-of-four"},"Design Patterns - Gang Of Four"),Object(n.b)("p",null,'If you\'ve written any Object-Orieted Programming (OOP), chances are you have stumbled upon the term "design patterns" or heard of the "gang of four".'),Object(n.b)("p",null,"Design patterns provide solutions to common OOP problems. The patterns themselves are generalised solutions that can be applied (when appropriate) to real-world scenarios."),Object(n.b)("p",null,'The term "Gang Of Four" (GOF) refers to Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides. These four co-authored the software classic, "Design Patterns: Elements of Reusable Object-Oriented Software", a book that describes twenty-three design patterns and their application to software (most notably OOP).'),Object(n.b)("p",null,"The patterns within the book are separated into ",Object(n.b)("inlineCode",{parentName:"p"},"purpose")," (creational, structural, behavioural) and ",Object(n.b)("inlineCode",{parentName:"p"},"scope")," (class, object)."),Object(n.b)("h2",{id:"class-vs-object-scope"},"Class vs Object Scope"),Object(n.b)("p",null,"The base definition for scope:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Object patterns deal with object relationships, which can be changed at run-time and are more dynamic. Class scope is defined at design time and is built in the structure and relationship of classes where as object scope is defined at runtime and is based on the relationship of objects.")),Object(n.b)("p",null,"Within all three GOF design pattern ",Object(n.b)("inlineCode",{parentName:"p"},"purposes"),", you will see that the scope will help with understanding the objectives of the individual patterns."),Object(n.b)("h2",{id:"creational-patterns"},"Creational Patterns"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Creational design patterns abstract the instantiation process. They help make a system independent of how its object are created, composed and represented. A class creational pattern will delegate instantiation to another object.")),Object(n.b)("p",null,"These patterns particularly help when systems become more complex. The patterns adhere to the principle of prefering composition over inheritance."),Object(n.b)("p",null,"There are two recurring themes with these patterns:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"They encapsulate all knowledge about which concrete classes the system uses."),Object(n.b)("li",{parentName:"ol"},"They hide how instances of these classes are created and put together.")),Object(n.b)("h2",{id:"structural-patterns"},"Structural Patterns"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Structural design patterns ease the design by identifying a simple way to realise relationships among entities.")),Object(n.b)("p",null,"As you'll see fleshed out in future posts, structural patterns help decouple, shape and add functionality between entities to enable more malleable relationships."),Object(n.b)("h2",{id:"behavioural-patterns"},"Behavioural Patterns"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Behavioural design patterns identify common communication patterns among objects and realise these patterns. By doing so, these patterns increase flexibility in carrying out the communication.")),Object(n.b)("p",null,"As stated, behavioural design patterns are all about flexible communication."),Object(n.b)("h2",{id:"design-pattern-breakdown"},"Design Pattern Breakdown"),Object(n.b)("p",null,"The table below breaks down the list of GOF design patterns using purpose and scope. This table can be a reference and overview for all the design patterns that will be covered in the coming posts on design patterns."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Purpose"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Object"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Creational"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Factory Method"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Abstract Factory, Builder, Prototype, Singleton")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Structural"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Adapter (class)"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Adapter (object), Bridge, Composite, Decorator, Facade, Flyweight, Proxy")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Behavioural"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Interpreter, Template Method"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor")))),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Software_design_pattern#Classification_and_list"}),"Good old Wikipedia"))))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Design-Patterns.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-design-patterns-md-1f78b7b6a7b15bba3f07.js.map