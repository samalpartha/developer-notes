(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{"./manual/React/Lead-Debouncing-With-Hooks.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a={},o="wrapper";function d(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(i.b)(o,Object.assign({},a,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"lead-debouncing-with-hooks"},"Lead Debouncing with Hooks"),Object(i.b)("p",null,"Example using ",Object(i.b)("inlineCode",{parentName:"p"},"Lodash"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),'import * as React from "react"\nimport { useState, useEffect, useRef } from "react"\nimport { debounce } from "lodash"\n\nconst ExampleComponent = ({initTeam}) => {\n  const [selectedTeam, setSelectedTeam] = useState<Option | undefined>(initTeam)\n  \n  // this is to be used to set a default value\n  const updateSelect = (value: Option) => {\n    setSelectedTeam(value)\n    setFields(fields => ({\n      ...fields,\n      // @ts-ignore\n      teamId: value.value,\n      owners: initOwners\n    }))\n  }\n\n  // Fire immediate use of useEffect for initTeam\n  // but then push off any other effects for the next 5s.\n  // This prevents the deletion of an owner being overriden\n  // when initTeam fires again during inital component mounting.\n  const throttleSelectedTeam = useRef(\n    debounce(\n      (initTeam: Option) => {\n        updateSelect(initTeam)\n      },\n      5000,\n      { leading: true, trailing: false }\n    )\n  )\n\n  // the throttle will debounce changes through useEffect\n  useEffect(() => {\n    if (!disabled && initTeam) {\n      throttleSelectedTeam.current(initTeam)\n    }\n  }, [initTeam])\n\n  // the example component is really here to display what the end usecase was\n  return (<>\n    <UserSearchField\n      owners={owners}\n      disabled={selectedTeam === null ? true : false}\n      teamId={selectedTeam ? selectedTeam.value : ""}\n      setFields={(user: User) => {\n        setFields(fields => ({\n          ...fields,\n          owners: [...fields.owners, user]\n        }))\n      }}\n    />\n    <div>\n      {owners.map(user => (\n        <UserCard\n          key={user.id}\n          disabled={disabled}\n          user={user}\n          onRemove={evt => {\n            setFields(fields => ({\n              ...fields,\n              owners: fields.owners.filter(o => o.id !== user.id)\n            }))\n          }}\n        />\n      ))}\n    </div>\n  </>)\n}\n')))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/React/Lead-Debouncing-With-Hooks.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-react-lead-debouncing-with-hooks.101a1afd2417ec7a4a77.js.map