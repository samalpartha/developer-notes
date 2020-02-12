(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{"./manual/Redux/ReduxPersist.md":function(e,r,s){"use strict";s.r(r),s.d(r,"default",function(){return a});var n=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=(s("./node_modules/react/index.js"),s("./node_modules/@mdx-js/react/dist/index.es.js")),o={},i="wrapper";function a(e){var r=e.components,s=Object(n.a)(e,["components"]);return Object(t.b)(i,Object.assign({},o,s,{components:r,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"redux-persist-usage-with-react-native"},"Redux Persist usage with React Native"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn add redux-persist redux-persist-sensitive-storage\n")),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import { persistStore, persistReducer } from 'redux-persist';\nimport storage from 'redux-persist/lib/storage';\nimport { PersistGate } from 'redux-persist/es/integration/react';\n// if you need to persist\nimport createSensitiveStorage from 'redux-persist-sensitive-storage';\n\nAmplify.configure(config);\n\nconst sagaMiddleware = createSagaMiddleware();\nconst enhancers = [];\nconst reducers = combineReducers({\n  copy: CopyReducer,\n  auth: AuthReducer,\n  navigation: NavReducer\n});\nenhancers.push(applyMiddleware(logger, reduxNavMiddleware, sagaMiddleware));\n\n// persist updates\nconst persistConfig = {\n  key: 'primary',\n  storage,\n  whitelist: __DEV__\n    ? ['CopyReducer', 'OffersReducer', 'StoresReducer']\n    : [\n        'CopyReducer',\n        'ProfileReducer',\n        'OffersReducer',\n        'StoresReducer',\n        'LoyaltyCardReducer'\n      ]\n};\nconst configuredReducers = persistReducer(persistConfig, reducers);\nconst store = createStore(configuredReducers, composeEnhancers(...enhancers));\n\n/* if you need sensitive storage */\nconst persistor = persistStore(store, createSensitiveStorage(), () =>\n  console.info('Persist configured')\n);\n/* else */\n// const persistor = persistStore(store);\n\nexport default class App extends Component {\n  render() {\n    return (\n      <Provider store={store}>\n        <PersistGate persistor={persistor}>\n          <ReduxNavigation />\n        </PersistGate>\n      </Provider>\n    );\n  }\n}\n")))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Redux/ReduxPersist.md"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-redux-redux-persist.101a1afd2417ec7a4a77.js.map