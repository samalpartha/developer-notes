(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{bzLd:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return o})),t.d(e,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),s=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Elm/Elm-Guide.md"}});var l={_frontmatter:o},r=s.a;function c(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,s={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,["components"]);return Object(a.b)(r,i({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"elm-guide"},"Elm Guide"),Object(a.b)("p",null,"This is a basic Elm guide that follows on from the ",Object(a.b)("a",i({parentName:"p"},{href:"https://guide.elm-lang.org/core_language.html"}),"core language tour"),"."),Object(a.b)("h2",{id:"values"},"Values"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),'-- Boolean\nTrue  : Bool\nFalse : Bool\n\n42    : number  -- Int or Float depending on usage\n3.14  : Float\n\n\'a\'   : Char\n"abc" : String\n\n-- multi-line String\n"""\nThis is useful for holding JSON or other\ncontent that has "quotation marks".\n"""\n')),Object(a.b)("h2",{id:"comments"},"Comments"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),"-- a single line comment\n\n{- a multiline comment\n   {- can be nested -}\n-}\n\n-- remove the } below to toggle on/off\n{--}\nadd x y = x + y\n--}\n")),Object(a.b)("h2",{id:"lists"},"Lists"),Object(a.b)("p",null,"The following are equivocal:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),"[1,2,3,4]\n1 :: [2,3,4]\n1 :: 2 :: 3 :: 4 :: []\n")),Object(a.b)("h2",{id:"conditionals"},"Conditionals"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),'if powerLevel > 9000 then "Over 9000!" else "dbz joke not applicable"\n\n-- multiple conditions\nif key == 40 then\n  n + 1\nelse if key == 38 then\n  n - 1\nelse\n  n\n\n-- conditionals based on structure of algebraic data types and literals\ncase maybeList of\n  Just xs -> xs\n  Nothing -> []\n\ncase xs of\n  [] ->\n    Nothing\n  first :: rest ->\n    Just (first, rest)\n\ncase n of\n  0 -> 1\n  1 -> 1\n  _ -> fib (n-1) + fib (n-2)\n')),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),"square n =\n  n^2\n")),Object(a.b)("h2",{id:"records"},"Records"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),"-- create records\norigin = { x = 0, y = 0 }\npoint = { x = 3, y = 4 }\n\n-- access fields\norigin.x == 0\npoint.x == 3\n\n-- field access function\nList.map .x [ origin, point ] == [ 0, 3 ]\n\n-- update a field\n{ point | x = 6 } == { x = 6, y = 4 }\n\n-- update many fields\n{ point | x = point.x + 1, y = point.y + 1 }\n")),Object(a.b)("h2",{id:"pipes"},"Pipes"),Object(a.b)("p",null,'Note: "Pipes" is not the technical term in Elm.'),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),'viewNames1 names =\n  String.join ", " (List.sort names)\n\nviewNames2 names =\n  names\n    |> List.sort\n    |> String.join ", "\n\n-- (arg |> func) is the same as (func arg)\n-- Just keep repeating that transformation!\n')),Object(a.b)("h2",{id:"let-expressions"},"Let Expressions"),Object(a.b)("p",null,"This is useful once expressions get too big."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),'let\n  twentyFour =\n    3 * 8\n\n  sixteen =\n    4 ^ 2\nin\ntwentyFour + sixteen\n\n-- application with a hypotenuse function\nlet\n  ( three, four ) =\n    ( 3, 4 )\n\n  hypotenuse a b =\n    sqrt (a^2 + b^2)\nin\nhypotenuse three four\n\n-- type annotations in "let" expressions\nlet\n  name : String\n  name =\n    "Hermann"\n\n  increment : Int -> Int\n  increment n =\n    n + 1\nin\nincrement 10\n')),Object(a.b)("h2",{id:"applying-functions"},"Applying Functions"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),"-- alias for appending lists and two lists\nappend xs ys = xs ++ ys\nxs = [1,2,3]\nys = [4,5,6]\n\n-- All of the following expressions are equivalent:\na1 = append xs ys\na2 = xs ++ ys\n\nb2 = (++) xs ys\n\nc1 = (append xs) ys\nc2 = ((++) xs) ys\n")),Object(a.b)("h2",{id:"elm-modules"},"Elm Modules"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Qualified imports are preferred. Module names must match their file name, so module Parser.Utils needs to be in file Parser/Utils.elm.")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),"module MyModule exposing (..)\n\n-- qualified imports\nimport List                            -- List.map, List.foldl\nimport List as L                       -- L.map, L.foldl\n\n-- open imports\nimport List exposing (..)              -- map, foldl, concat, ...\nimport List exposing ( map, foldl )    -- map, foldl\n\nimport Maybe exposing ( Maybe )        -- Maybe\nimport Maybe exposing ( Maybe(..) )    -- Maybe, Just, Nothing\n")),Object(a.b)("h2",{id:"type-annotations--aliases"},"Type Annotations + Aliases"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),'-- annotations\nanswer : Int\nanswer =\n  42\n\nfactorial : Int -> Int\nfactorial n =\n  List.product (List.range 1 n)\n\ndistance : { x : Float, y : Float } -> Float\ndistance {x,y} =\n  sqrt (x^2 + y^2)\n\n-- aliases\ntype alias Name = String\ntype alias Age = Int\n\ninfo : (Name,Age)\ninfo =\n  ("Steve", 28)\n\ntype alias Point = { x:Float, y:Float }\n\norigin : Point\norigin =\n  { x = 0, y = 0 }\n')),Object(a.b)("h2",{id:"custom-types"},"Custom Types"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),"type User\n  = Regular String Int\n  | Visitor String\n")),Object(a.b)("h2",{id:"interoperability-with-js-and-porting"},"Interoperability with JS and Porting"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-elm"}),"-- incoming values\nport prices : (Float -> msg) -> Sub msg\n\n-- outgoing values\nport time : Float -> Cmd msg\n")),Object(a.b)("p",null,"To use this port from JS, you use this:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"var app = Elm.Example.init();\n\napp.ports.prices.send(42);\napp.ports.prices.send(13);\n\napp.ports.time.subscribe(callback);\napp.ports.time.unsubscribe(callback);\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Elm/Elm-Guide.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-elm-elm-guide-md-460edceb6a428a5c4789.js.map