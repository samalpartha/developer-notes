(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{WoiP:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Terminal/Tips-and-Tricks.md"}});var b={_frontmatter:o},c=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,i({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"tips-and-tricks"},"Tips and Tricks"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#tips-and-tricks"}),"Tips and Tricks"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#dealing-with-records"}),"Dealing with records")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#load-balancing"}),"Load balancing")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#ports"}),"Ports"))))),Object(a.b)("h2",{id:"dealing-with-records"},"Dealing with records"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"curl -I <domain>")),Object(a.b)("p",null,"Example response:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"HTTP/1.1 301 Moved Permanently\nx-amz-id-2: GhbglnY4TMT7NQy4HEFfBbrYo1L6OgepT1130/R80lZm6yDUCH8Ok\nx-amz-request-id: C72E7BA4D7A6DEB8\nDate: Thu, 31 Aug 2017 22:51:42 GMT\nLocation: https://www.domain.com/\nContent-Length: 0\nServer: AmazonS3\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"dig afxr gitgood.club")," - gives back record data."),Object(a.b)("h2",{id:"load-balancing"},"Load balancing"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'ab -n 1000 -c 50 "https://staging.aemc.prescoapps.co/"')," - test Load Balance with reqs\n."),Object(a.b)("h2",{id:"ports"},"Ports"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sudo lsof -i :3090")," - what's using port 3090."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"telnet redrooster.com.au 22")," - Does the server at redrooster.com.au listen on port 22 (standard ssh port)?"))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Terminal/Tips-and-Tricks.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-terminal-tips-and-tricks-md-b5c2e7f0d92abfbeab4a.js.map