(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{mmHE:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return i})),n.d(a,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var t=n("/FXl"),r=n("TjRS");n("aD51");function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Elm/Advanced-Elm.md"}});var o={_frontmatter:i},m=r.a;function c(e){var a=e.components,n=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(t.b)(m,l({},o,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"advanced-elm"},"Advanced Elm"),Object(t.b)("h2",{id:"opaque-types"},"Opaque Types"),Object(t.b)("pre",null,Object(t.b)("code",l({parentName:"pre"},{className:"language-elm"}),"module Email exposing (Email)\n\ntype Email =\n  Email\n")),Object(t.b)("h3",{id:"validating-data-example"},"Validating Data example"),Object(t.b)("pre",null,Object(t.b)("code",l({parentName:"pre"},{className:"language-elm"}),"module Validate exposing (Validator, Valid)\n\n-- the useful purpose of Valid by exposing the variant\ntype Valid a =\n  Valid a\n\nfromValid : Valid a -> a\n\nvalidate :\n  Validator error subject\n  -> subject\n  -> Result (List error) (Valid subject)\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Elm/Advanced-Elm.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-elm-advanced-elm-md-421fc9df4fecc783f523.js.map