(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{rG8G:function(e,r,n){"use strict";n.r(r),n.d(r,"_frontmatter",(function(){return a})),n.d(r,"default",(function(){return u}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var t=n("/FXl"),s=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Redux/ReduxPersist.md"}});var i={_frontmatter:a},c=s.a;function u(e){var r=e.components,n=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(t.b)(c,o({},i,n,{components:r,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"redux-persist-usage-with-react-native"},"Redux Persist usage with React Native"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-bash"}),"yarn add redux-persist redux-persist-sensitive-storage\n")),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import { persistStore, persistReducer } from 'redux-persist';\nimport storage from 'redux-persist/lib/storage';\nimport { PersistGate } from 'redux-persist/es/integration/react';\n// if you need to persist\nimport createSensitiveStorage from 'redux-persist-sensitive-storage';\n\nAmplify.configure(config);\n\nconst sagaMiddleware = createSagaMiddleware();\nconst enhancers = [];\nconst reducers = combineReducers({\n  copy: CopyReducer,\n  auth: AuthReducer,\n  navigation: NavReducer\n});\nenhancers.push(applyMiddleware(logger, reduxNavMiddleware, sagaMiddleware));\n\n// persist updates\nconst persistConfig = {\n  key: 'primary',\n  storage,\n  whitelist: __DEV__\n    ? ['CopyReducer', 'OffersReducer', 'StoresReducer']\n    : [\n        'CopyReducer',\n        'ProfileReducer',\n        'OffersReducer',\n        'StoresReducer',\n        'LoyaltyCardReducer'\n      ]\n};\nconst configuredReducers = persistReducer(persistConfig, reducers);\nconst store = createStore(configuredReducers, composeEnhancers(...enhancers));\n\n/* if you need sensitive storage */\nconst persistor = persistStore(store, createSensitiveStorage(), () =>\n  console.info('Persist configured')\n);\n/* else */\n// const persistor = persistStore(store);\n\nexport default class App extends Component {\n  render() {\n    return (\n      <Provider store={store}>\n        <PersistGate persistor={persistor}>\n          <ReduxNavigation />\n        </PersistGate>\n      </Provider>\n    );\n  }\n}\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Redux/ReduxPersist.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-redux-redux-persist-md-87fc9b08e5aa0e9cebb4.js.map