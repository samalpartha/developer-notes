(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{"./manual/Principles/Structures.md":function(s,n,e){"use strict";e.r(n),e.d(n,"default",function(){return o});var t=e("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(e("./node_modules/react/index.js"),e("./node_modules/@mdx-js/react/dist/index.es.js")),c={},i="wrapper";function o(s){var n=s.components,e=Object(t.a)(s,["components"]);return Object(a.b)(i,Object.assign({},c,e,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#structures-and-layouts-for-styles-in-different-projects"}),"Structures and Layouts for styles in different projects"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#static-sites"}),"Static sites")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#react-sites"}),"React sites"))))),Object(a.b)("h1",{id:"structures-and-layouts-for-styles-in-different-projects"},"Structures and Layouts for styles in different projects"),Object(a.b)("h2",{id:"static-sites"},"Static sites"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),".\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u251c\u2500\u2500 __mixins.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _animations.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _breakpoints.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _colours.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _elevation.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _icons.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _layout.scss\n\u2502\xa0\xa0 \u2514\u2500\u2500 _typography.scss\n\u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u251c\u2500\u2500 _app-promo.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _button.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _common-info-box.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _grid.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _home_overview.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _input.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _list-row.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _loading.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _loyalty-cards.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _modal.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _progress-bar.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _row-tiles.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _single-tile.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _skiplinks.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 _slick.scss\n\u2502\xa0\xa0 \u2514\u2500\u2500 _third-nav.scss\n\u251c\u2500\u2500 fonts\n\u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-Bold.ttf\n\u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-BoldItalic.ttf\n\u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-ExtraBold.ttf\n\u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-ExtraBoldItalic.ttf\n\u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-Italic.ttf\n\u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-Light.ttf\n\u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-LightItalic.ttf\n\u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-Regular.ttf\n\u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-SemiBold.ttf\n\u2502\xa0\xa0 \u2514\u2500\u2500 OpenSans-SemiBoldItalic.ttf\n\u251c\u2500\u2500 main.scss\n\u2514\u2500\u2500 sections\n    \u251c\u2500\u2500 _account-settings.scss\n    \u251c\u2500\u2500 _addcard.scss\n    \u251c\u2500\u2500 _edit-password.scss\n    \u251c\u2500\u2500 _grid-view.scss\n    \u251c\u2500\u2500 _help.scss\n    \u251c\u2500\u2500 _home-divider.scss\n    \u251c\u2500\u2500 _home.scss\n    \u251c\u2500\u2500 _login.scss\n    \u251c\u2500\u2500 _loyalty-info.scss\n    \u251c\u2500\u2500 _modal.scss\n    \u251c\u2500\u2500 _nav-qr.scss\n    \u251c\u2500\u2500 _nav-user.scss\n    \u251c\u2500\u2500 _optus.scss\n    \u251c\u2500\u2500 _profile-details.scss\n    \u251c\u2500\u2500 _profile.scss\n    \u251c\u2500\u2500 _signup.scss\n    \u251c\u2500\u2500 _tile-details.scss\n    \u2514\u2500\u2500 _transactions.scss\n")),Object(a.b)("h2",{id:"react-sites"},"React sites"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),".\n\u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u2514\u2500\u2500 addcardpathway\n\u2502\xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 AddCardPathway.js\n\u2502\xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 AddCardPathwayView.js\n\u2502\xa0      \u251c\u2500\u2500 styles.js\n\u2502\xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 AddCardScreens.js\n\u251c\u2500\u2500 styles\n\u2502\xa0\xa0 \u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 __mixins.scss\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _animations.scss\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _breakpoints.scss\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _colours.scss\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _elevation.scss\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _icons.scss\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _layout.scss\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 _typography.scss\n\u2502\xa0\xa0 \u251c\u2500\u2500 fonts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-Bold.ttf\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-BoldItalic.ttf\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-ExtraBold.ttf\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-ExtraBoldItalic.ttf\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-Italic.ttf\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-Light.ttf\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-LightItalic.ttf\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-Regular.ttf\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 OpenSans-SemiBold.ttf\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 OpenSans-SemiBoldItalic.ttf\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.scss\n\u2502\xa0\xa0 \u2514\u2500\u2500 sections\n\u2502\xa0\xa0     \u251c\u2500\u2500 _account-settings.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _addcard.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _edit-password.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _grid-view.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _help.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _home-divider.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _home.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _login.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _loyalty-info.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _modal.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _nav-qr.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _nav-user.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _optus.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _profile-details.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _profile.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _signup.scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 _tile-details.scss\n\u2502\xa0\xa0     \u2514\u2500\u2500 _transactions.scss\n")))}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Principles/Structures.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-principles-structures.101a1afd2417ec7a4a77.js.map