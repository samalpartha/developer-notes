(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{HSqo:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Flyweight-Pattern.md"}});var l={_frontmatter:i},s=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(s,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"flyweight-pattern"},"Flyweight Pattern"),Object(a.b)("p",null,"The Flyweight Pattern falls under the structural design patterns from the Gang Of Four."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"flyweight")," is an object that minimizes memory usage by sharing as much data as possible with similar objects - a way to use objects in large numbers when a simple representation would use an unacceptable amount of memory."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Use when:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"many same objects are used and storage cost is high."),Object(a.b)("li",{parentName:"ul"},"you can externalise a majority of each object's state."),Object(a.b)("li",{parentName:"ul"},"few shared objects can replace many unshared ones."),Object(a.b)("li",{parentName:"ul"},"identity of an object not relevant.")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Here we will create a 1000 combatants that"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"interface Action {\n  move(location: [number, number]): void;\n  hit?(target: string, location: [number, number]): void;\n}\n\nclass Combatant implements Action {\n  private equipmentSet: string;\n  number: number;\n\n  constructor(set: string, number: number) {\n    // initialization consumes time\n    this.equipmentSet = set;\n    this.number = number;\n    console.log(`new Combatant ${number}`);\n  }\n\n  move(location: [number, number]): void {\n    console.log(`move to ${location}`);\n  }\n\n  hit?(target: string, location: [number, number]): void {\n    console.log(`damage ${target} at ${location}`);\n  }\n}\n\nclass CombatantAcademy {\n  private static groups: { [set: string]: Combatant } = {};\n\n  public static getCombatant(set: string, num: number) {\n    let combatant = CombatantAcademy.groups[set];\n\n    if (!combatant) {\n      combatant = new Combatant(set, num);\n      CombatantAcademy.groups[set] = combatant;\n    } else {\n      combatant.number = num;\n      console.log(`shared Combatant ${combatant.number}`);\n    }\n\n    return combatant;\n  }\n}\n\n(function main() {\n  let start, end;\n\n  // the larger you change the threshold, the bigger the difference\n  const threshold = 50000;\n\n  // inefficient creating without flyweight\n  start = Math.floor(Date.now());\n  for (let i = 0; i < threshold; i++) {\n    new Combatant('normal-set', i); // creating fifty thousand real Combatants\n  }\n  end = Math.floor(Date.now());\n  const withoutFlyweight = end - start;\n\n  // efficient create with flyweight\n  start = Math.floor(Date.now());\n  for (let i = 0; i < threshold; i++) {\n    CombatantAcademy.getCombatant('normal-set', i); // create 1 Combatant\n  }\n  end = Math.floor(Date.now());\n  const withFlyweight = end - start;\n\n  console.log('Without Flyweight', withoutFlyweight);\n  console.log('With Flyweight', withFlyweight);\n})();\n")),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://circle.visual-paradigm.com/flyweight/"}),"Flyweight Example")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Flyweight_pattern"}),"Flyweight Wikipedia"))))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Flyweight-Pattern.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-flyweight-pattern-md-9602201566145d2c8fe0.js.map