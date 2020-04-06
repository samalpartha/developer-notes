(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{QLoQ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),r=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Abstract-Factory-Pattern.md"}});var s={_frontmatter:c},i=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(i,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"abstract-factory"},"Abstract Factory"),Object(o.b)("p",null,"Here we will cover the ",Object(o.b)("inlineCode",{parentName:"p"},"creational")," design pattern ",Object(o.b)("inlineCode",{parentName:"p"},"Abstract Factory"),"."),Object(o.b)("p",null,"Another creational pattern, the ",Object(o.b)("inlineCode",{parentName:"p"},"Factory")," design pattern, differs from Abstract Factory in that the factory method is a single method, whereas an abstract factory is an object."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"... the Factory Method pattern uses inheritance and relies on a subclass to handle the desired object instantiation.")),Object(o.b)("p",null,"This quote assumes the object is calling its own factory method, therefore the only thing that could change the return value would be a subclass."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"... with the Abstract Factory pattern, a class delegates the responsibility of object instantiation to another object via composition ...")),Object(o.b)("p",null,"Here there is an object A who wants to make a Foo object. Instead of making the Foo object itself (like in the factory method), it's going to get a different object (the abstract factory) to create the Foo object."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"// defining our abstract products\ninterface Processor {\n    performOperation(): void;\n}\n\ninterface HardDisk {\n    storeData(): void;\n}\n\ninterface Monitor {\n    displayPicture(): void;\n}\n\n// defining our concrete products\nclass ExpensiveProcessor implements Processor {\n    performOperation() {\n        console.log('Operation will perform quickly!');\n    }\n}\n\nclass CheapProcessor implements Processor {\n    performOperation() {\n        console.log('Operation will perform slowly!');\n    }\n}\n\nclass ExpensiveHDD implements HardDisk {\n    storeData() {\n        console.log('Data will take less time to store');\n    }\n}\n\nclass CheapHDD implements HardDisk {\n    storeData() {\n        console.log('Data will take more time to store');\n    }\n}\n\nclass HighResMonitor implements Monitor {\n    displayPicture() {\n        console.log('High picture quality');\n    }\n}\n\nclass LowResMonitor implements Monitor {\n    displayPicture() {\n        console.log('Low picture quality');\n    }\n}\n\n// defining the abstract factory\ninterface MachineAbstractFactory {\n    // each factory needs to implement these methods\n    getProcessor(): Processor;\n    getHardDisk(): HardDisk;\n    getMonitor(): Monitor;\n}\n\n// defining our concrete factories\nclass HighBudgetMachineFactory implements MachineAbstractFactory {\n    getProcessor(): Processor {\n        return new ExpensiveProcessor();\n    }\n\n    getHardDisk(): HardDisk {\n        return new ExpensiveHDD();\n    }\n\n    getMonitor(): Monitor {\n        return new HighResMonitor();\n    }\n}\n\nclass LowBudgetMachineFactory implements MachineAbstractFactory {\n    getProcessor(): Processor {\n        return new CheapProcessor();\n    }\n\n    getHardDisk(): HardDisk {\n        return new CheapHDD();\n    }\n\n    getMonitor(): Monitor {\n        return new LowResMonitor();\n    }\n}\n\n// defining our client and final product\ninterface Machine {\n    processor: Processor;\n    hdd: HardDisk;\n    monitor: Monitor;\n}\n\nclass ComputerShop {\n    // change access modifiers as suits\n    public category: MachineAbstractFactory;\n\n    // we'll pass a factory as category during instantiation\n    constructor(category: MachineAbstractFactory) {\n        this.category = category;\n    }\n\n    assembleMachine(): Machine {\n        const processor = this.category.getProcessor();\n        const hdd = this.category.getHardDisk();\n        const monitor = this.category.getMonitor();\n\n        // to be explicit\n        const machine: Machine = {\n            processor,\n            hdd,\n            monitor\n        }\n        return machine;\n    }\n}\n\n// running the code in action!\nconst cheapFactory = new LowBudgetMachineFactory();\nconst expensiveFactory = new HighBudgetMachineFactory();\n\n// ensure to pass the factory in during instantiation\n// using let to show variability, in code these\n// would likely be functions that take a factory\n// arg and constants for shop/machine\nlet shop;\nlet machine;\n\nshop = new ComputerShop(cheapFactory);\nmachine = shop.assembleMachine();\nmachine.hdd.storeData();\nmachine.processor.performOperation();\nmachine.monitor.displayPicture();\n\nshop = new ComputerShop(expensiveFactory);\nmachine = shop.assembleMachine();\nmachine.hdd.storeData();\nmachine.processor.performOperation();\nmachine.monitor.displayPicture();\n")),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",a({parentName:"li"},{href:"https://stackoverflow.com/questions/5739611/what-are-the-differences-between-abstract-factory-and-factory-design-patterns"}),"Difference between factory and abstract factory")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",a({parentName:"li"},{href:"https://www.codeproject.com/Articles/716413/Factory-Method-Pattern-vs-Abstract-Factory-Pattern"}),"ASP.NET Abstract Factory vs Factory"))))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Abstract-Factory-Pattern.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-abstract-factory-pattern-md-9afaccda8dece3cfdaed.js.map