(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{"./manual/Elm/Rendering-Examples.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return r});var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),o={},l="wrapper";function r(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)(l,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"elm-rendering-examples"},"Elm Rendering Examples"),Object(a.b)("h2",{id:"rendering-via-anonymous-function"},"Rendering via anonymous function"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-elm"}),'view model =\n    div [ class "content" ]\n        [ h1 [] [ text "Photo Groove" ]\n        , div [ id "thumbnails" ]\n            -- anonymous function mapping photos\n            (List.map (\\photo -> viewThumbnail model.selectedUrl photo)\n                model.photos\n            )\n        , img                 #A\n            [ class "large"   #A\n            , src (urlPrefix ++ "large/" ++ model.selectedUrl)\n            ]\n            []\n        ]\n')),Object(a.b)("h3",{id:"anon-function-with-partial-application"},"Anon function with partial application"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"Before: List.map (\\photo -> viewThumbnail model.selectedUrl photo) model.photos \n# Partial application is known as curried in Elm\nAfter: List.map (viewThumbnail model.selectedUrl) model.photos\n")),Object(a.b)("p",null,"All Elm functions are curried."),Object(a.b)("h2",{id:"update-function"},"Update function"),Object(a.b)("p",null,"To update the model, we need to have the appropriate ",Object(a.b)("inlineCode",{parentName:"p"},"update")," function and expose the correct ",Object(a.b)("inlineCode",{parentName:"p"},"Html.Events"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-elm"}),'import Html exposing (..)\nimport Html.Attributes exposing (..)\nimport Html.Events exposing (onClick)\n\nupdate msg model =\n    if msg.description == "ClickedPhoto" then\n        { model | selectedUrl = msg.data }\n    else model\n\nviewThumbnail selectedUrl thumb =\n    img\n        [ src (urlPrefix ++ thumb.url)\n        , classList [ ( "selected", selectedUrl == thumbnail.url ) ]\n        , onClick { description = "ClickedPhoto", data = thumb.url } ]\n        []\n')),Object(a.b)("h2",{id:"implementing-the-model-view-update-loop"},"Implementing the Model-View-Update Loop"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-elm"}),"import Browser\n\nmain =\n    Browser.sandbox\n        { init = initialModel\n        , view = view\n        , update = update\n        }\n")),Object(a.b)("h2",{id:"multi-argument-function-annotations"},"Multi-Argument Function Annotations"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"> String.padLeft\n<function:padLeft> : Int -> Char -> String -> String\n> String.padLeft 9\n<function> : Char -> String -> String\n> String.padLeft 9 '.' <function> : String -> String\n> String.padLeft 9 '.' \"not!\" \".....not!\" : String\n")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Elm/Rendering-Examples.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-elm-rendering-examples.101a1afd2417ec7a4a77.js.map