(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./manual/Angular/Angular2-Basics.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),l={},r="wrapper";function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(r,Object.assign({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"angular-2-basics"},"Angular 2 Basics"),Object(o.b)("p",null,"You can not just use Angular for web apps, but also iOS and Java using Native kit."),Object(o.b)("h2",{id:"why-angular"},"Why Angular?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"it's Modular\n- in previous versions, you needed the entire Angular framework loaded"),Object(o.b)("li",{parentName:"ul"},"uses TypeScript, it uses static typing"),Object(o.b)("li",{parentName:"ul"},"Google has hundreds of internal applications using Angular "),Object(o.b)("li",{parentName:"ul"},"large community of developers ")),Object(o.b)("p",null,"Angular JS refers to version 1, whereas Angular refers to version 2."),Object(o.b)("h2",{id:"the-parts-and-pieces-of-an-angular-application"},"The Parts and Pieces of an Angular Application"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"How does it work?")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"App requires one ",Object(o.b)("inlineCode",{parentName:"p"},"root")," component")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The app requires services, components and 3rd party modules\n- Services can be internal or part of 3rd party modules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Services"),": used to perform things like long running calcs or running web requests.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Components"),": Broken down components/elements ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"NgModule"),": This is like a container for the application\n- ",Object(o.b)("inlineCode",{parentName:"p"},"Ng")," is the namespace Angular adopted"))),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"Typescript"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Javascript")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Dart")," with Angular2."),Object(o.b)("h2",{id:"typescript"},"Typescript"),Object(o.b)("p",null,"Angular is the first large framework to adopt ",Object(o.b)("inlineCode",{parentName:"p"},"Typescript"),". The idea is to keep you in the editor."),Object(o.b)("p",null,"We can use Typescript to help enforce static typing."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Intellisense")," is also used as helping autocompletion intelligence when coding and certain styles of coding allow for this."),Object(o.b)("p",null,"Eg. code:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// example 1 \n\nclass Greeter{\n    greet(name: string) {\n        console.log(name);\n    }\n}\n\nconst greeter = new Greeter();\n\ngreeter.greet('Jim');\n\n// example 2\n\nfunction rollCall(students: any[], max?: number) {\n    max = max || students.length;\n    const attendance = students.slice(undefined, max);\n    console.log(attendence);\n}\n")),Object(o.b)("h2",{id:"the-first-angular-application"},"The First Angular Application"),Object(o.b)("p",null,"As you build out your ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file you set a ",Object(o.b)("inlineCode",{parentName:"p"},"<app-root>")," component as the target for Angular2 entry point."),Object(o.b)("p",null,"Within ",Object(o.b)("inlineCode",{parentName:"p"},"src/app")," create ",Object(o.b)("inlineCode",{parentName:"p"},"app.module.ts")," as the root module."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"/* in app.modules.ts */\n\n// note the @ is to do with npm supporting namespace modules\n// this allows code to be shared between packages \nimport { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { AppComponent } from './app.component';\n\n// create the AppModule \n// export for use in main.ts \n// add the decorator to post-process it\n// the decorator is used by angular to compose the app \n// in the most efficient way possible\n@NgModule({\n    // using BrowserModule lets Angular know this is \n    // for web use\n    imports: [BrowserModule],\n    // for the target component \n    // before using it the first time - declare we are using it\n    // if not there will be a definition error\n    declarations: [AppComponent],\n    bootstrap: [AppComponent]\n})\nexport class AppModule {\n    \n}\n\n/* in main.ts */\nimport './styles/main.css';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\nimport { AppModule } from './app/app.module';\n\nplatformBrowserDynamic().bootstrapModule(AppModule);\n")),Object(o.b)("p",null," In order for this to work, we need to create a component!"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"/* in app.component.ts */\n\nimport { Component } from '@angular/core';\n\n@Component({\n    // we should target app-root in the component \n    // best practise to prefix components with something related to app eg app or another namespace convention\n    selector: 'app-root',\n    template: `<h2>Hello World!</h2>`,\n    style: [\n        `\n        h2 {\n            color: blue;\n        }\n        `\n    ]\n})\nexport class AppComponent {\n    \n}\n")),Object(o.b)("h2",{id:"the-anatomy-of-the-component"},"The Anatomy of the Component"),Object(o.b)("p",null,"In Angular, a Component = Template + Class + Decorator."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Template: View or user interface for a component"),Object(o.b)("li",{parentName:"ul"},"Class: Code that brings template to life "),Object(o.b)("li",{parentName:"ul"},"Decorator: Metadata that wires up the class to the template, completing the component ")),Object(o.b)("p",null,"This will cover each section."),Object(o.b)("h2",{id:"the-component-decorator"},"The @Component decorator"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"selector"),": name for the component HTML tag"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"template"),": Base html "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"styles"),": you can also do this with a file")),Object(o.b)("p",null,"General all files (including the styling) will be placed in the same place as the component."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// example component file \n\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'app-root',\n    templateUrl: 'app.component.html',\n    styleUrls: ['app.component.css']\n})\nexport class AppComponent {\n    example: string[];\n\n    constructor() {\n        this.example = [\"Hi\", \"ho\"];\n    }\n}\n")),Object(o.b)("h2",{id:"data-binding"},"Data Binding"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Class to Template "),Object(o.b)("li",{parentName:"ol"},"Template to Class"),Object(o.b)("li",{parentName:"ol"},"(Two-way) Between Class and Template")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<h1>{{ exp }}</h1>")," view will update to changes to the expression.\n",Object(o.b)("inlineCode",{parentName:"p"},'<input [target]="expression" />')," is another form of binding"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2"),"\n",Object(o.b)("inlineCode",{parentName:"p"},'<button (event)="expression"></button>')," for event listening"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3"),"\n",Object(o.b)("inlineCode",{parentName:"p"},'<input [(target)]="expression" />')," - takes input and sends output"),Object(o.b)("p",null,"Given the example of 2 above..."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// for the event handler \n\n...\nexport class AppComponent {\n    emojis = ['', '', ''];  // array of emojis\n    activeEmoji: string;\n\n    changeEmoji() {\n        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)]\n    }\n}   \n")),Object(o.b)("h2",{id:"nesting-components"},"Nesting Components"),Object(o.b)("p",null,"Two new components: A list and a component with that list. ",Object(o.b)("inlineCode",{parentName:"p"},"Entry")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Entry-list"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"entry-list")),Object(o.b)("p",null,"After creation of this component, it should be imported to ",Object(o.b)("inlineCode",{parentName:"p"},"app.module.ts")," and added to the declarations property."),Object(o.b)("p",null,"Because there will probably be many components, we will create a barrel to work as the middle man."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// index.ts\n\nexport * from './entry-list/entry-list.component'\n")),Object(o.b)("p",null,"Now this entire folder can just be imported to the ",Object(o.b)("inlineCode",{parentName:"p"},"app.module.ts")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// entry-list ts \nimport { Components } from '@angular/core';\n\n@Component({\n    selector: 'app-entry-list',\n    templateUrl: 'entry-list.component.html',\n    styleUrls: ['entry-list.component.css'] \n})\n\nexport class EntryListComponent {\n    \n}\n\n// in app.component.html \n<app-entry-list></app-entry-list>\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"entry")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"create the usual files"),Object(o.b)("li",{parentName:"ul"},"add in the import from the barrel"),Object(o.b)("li",{parentName:"ul"},"ALWAYS ADD CHILD COMPONENTS FIRST")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// entry-list ts \nimport { Components } from '@angular/core';\n\n@Component({\n    selector: 'app-entry',\n    templateUrl: 'entry.component.html',\n    styleUrls: ['entry.component.css']  \n})\n\nexport class EntryComponent {\n    \n}\n")),Object(o.b)("p",null,"What we can now do in the ",Object(o.b)("inlineCode",{parentName:"p"},"entry-list.component.html"),", we can now add in the children."),Object(o.b)("h2",{id:"structural-directives"},"Structural Directives"),Object(o.b)("p",null,"Directives let you..."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Control Visibility "),Object(o.b)("li",{parentName:"ul"},"Apply Styling"),Object(o.b)("li",{parentName:"ul"},"Loop over items"),Object(o.b)("li",{parentName:"ul"},"Extend app with custom scripts")),Object(o.b)("p",null,"There are things such as ",Object(o.b)("inlineCode",{parentName:"p"},"structural directives"),", ",Object(o.b)("inlineCode",{parentName:"p"},"attribute directives"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'// example for a click action\n// here we can add styles for liked give toggled class (attribute)\n<div class="actions">\n    <button type="button" (event)="isLiked = !isLiked" [ngClass]="{liked: isLiked}">Show if true</button>\n    <button type="button" (event)="showComments = !showComments">Comments ({{comments.length}})</button>\n</div>\n\n// *ngFor to iterate (structural)\n// using Angulars template engine\n<div class="comments">\n    <div class="comment" *ngFor="let comment of comments">\n        <p>{{comment.comment}}<strong>{{comment.name}}</strong></p>\n    </div>\n</div>\n')))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Angular/Angular2-Basics.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-angular-angular2-basics.101a1afd2417ec7a4a77.js.map