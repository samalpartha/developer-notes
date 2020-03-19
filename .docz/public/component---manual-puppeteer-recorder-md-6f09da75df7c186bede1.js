(window.webpackJsonp=window.webpackJsonp||[]).push([[427],{pUCR:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),a=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Puppeteer/Recorder.md"}});var s={_frontmatter:i},l=a.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(l,o({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"puppeteer-recorder"},"Puppeteer Recorder"),Object(r.b)("p",null,"Use this to convert a db.json events file into someting usable with puppeteer."),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)("p",null,"Currently this is a lib file that needs to be installed using kratos."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"Emitter")," common JS class to handle this. Ensure you sub to the event ",Object(r.b)("inlineCode",{parentName:"p"},"action"),"."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// Example of emission with type inferred\nhandlePrimaryClick = (e) => {\n    Emitter.emit('action', {\n        event: 'ComponentALLandingOne.handlePrimaryClick',\n        e: e.target\n    });\n\n    const { router } = this.props;\n    router.push('/testTwo');\n};\n\n// Example of emission with type manually specified\nhandleLink = (e) => {\n    e.preventDefault();\n    Emitter.emit('action', {\n        event: 'ComponentALLandingOne.handleLink',\n        type: 'link',\n        e: e.target\n    });\n\n    const { router } = this.props;\n    router.push('/testTwo');\n};\n")),Object(r.b)("h2",{id:"generating-the-tests"},"Generating the tests"),Object(r.b)("p",null,"The recorder relies on JSON DB and using the ",Object(r.b)("inlineCode",{parentName:"p"},"events")," endpoint."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"# usage\nnode path/to/recorder\n")),Object(r.b)("p",null,"The console log output for this guy can then be transferred to a test file to use with Puppeteer."))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Puppeteer/Recorder.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-puppeteer-recorder-md-6f09da75df7c186bede1.js.map