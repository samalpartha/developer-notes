(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{"0Ys8":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),s=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React-Notes/react-style-guide.md"}});var i={_frontmatter:o},c=s.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(a.b)(c,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"react-native-style-guide"},"React-Native Style Guide"),Object(a.b)("h3",{id:"react-native-style-guide-1"},"React Native Style Guide"),Object(a.b)("h4",{id:"general-guidelines"},"General Guidelines"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Every component should be treated as an API."),Object(a.b)("li",{parentName:"ul"},"When in doubt, break up a component or function into smaller useful parts.")),Object(a.b)("h4",{id:"es6-and-es7"},"ES6 and ES7"),Object(a.b)("p",null,"The flavor of JS we use is based on ES5 but with ES6 and ES7 transforms. This means, that a large part of the syntax is based on the current version of JS, but is flavored with capabilities that come with ES6 and ES7. For example:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Object destructing (ES6)"),Object(a.b)("li",{parentName:"ul"},"Object spread (ES7)"),Object(a.b)("li",{parentName:"ul"},"Rest and spread params (ES6)"),Object(a.b)("li",{parentName:"ul"},"Promises (ES6)"),Object(a.b)("li",{parentName:"ul"},"Arrow Functions (ES6)"),Object(a.b)("li",{parentName:"ul"},"Object concise method (ES6)"),Object(a.b)("li",{parentName:"ul"},"Object short notation (ES6)"),Object(a.b)("li",{parentName:"ul"},"Classes (ES6)")),Object(a.b)("p",null,"For more information see ",Object(a.b)("a",r({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/javascript-environment.html#content"}),"React Native JavaScript Environment")),Object(a.b)("h4",{id:"component-creation"},"Component Creation"),Object(a.b)("p",null,"Components should be created using ES6 classes and Object Short Notation."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"\n// Bad\n\nvar ChatBox = React.createClass({\n\n  getInitialState: function(){\n    return {toggle: 'on'};\n  },\n\n  render: function(){\n    return (\n      <Text> Example </Text>\n    );\n  }\n\n})\n\n// Good\n\nclass ChatBox extends React.Component{\n\n  constructor(){\n    this.state = {toggle: 'on'}\n  }\n\n  render(){\n    return (\n      <Text> Example </Text>\n    );\n  }\n\n}\n\n")),Object(a.b)("p",null,"Component functions that are not life-cycle functions should be created with an underscore at the beginning of the function name."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"\n_fetchmessages(){\n  fetch(requestURL)\n    .then((response)=> response.json() )\n    .then((responseData)=> {\n      this.setState({messages: responseData})\n    })\n    .done();\n}\n\n_turnEditOn(){\n  this.setState({edit: true});\n}\n\n")),Object(a.b)("p",null,"Keep life-cycle functions at the top of the object constructor in logical order."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"constructor")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"componentWillMount")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"componentDidMount")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"componentWillReceiveProps")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"render"))),Object(a.b)("p",null,"For more information see ",Object(a.b)("a",r({parentName:"p"},{href:"https://facebook.github.io/react/docs/component-specs.html"}),"Component Specs and Lifecycle")),Object(a.b)("p",null,"Every component function should be as parsimonious as possible. If you find yourself creating a function that is doing more than two things at once, then break up the function into smaller functions."),Object(a.b)("h4",{id:"using-bind"},"Using Bind"),Object(a.b)("p",null,"When passing a function as prop to a child component, the use of bind is not necessary. React Native automatically binds ",Object(a.b)("inlineCode",{parentName:"p"},"this")," to that function."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"\n// Bad\n\nrender(){\n  return(\n    <CameraButton\n      selectImage={this.selectImage.bind(this)}\n    />\n  );\n}\n\n// Good\n\nrender(){\n  return(\n    <CameraButton\n      selectImage={this.selectImage}\n    />\n  );\n}\n\n")),Object(a.b)("p",null,"It necessary however to use bind, when passing a component function to an event prop. For example:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"\n<ListView\n  renderRow={this.renderMessage.bind(this)}\n/>\n\n...\n\nrenderMessage(message) {\n  return (\n    <Message\n      message={message}\n      navigator={this.props.navigator}\n      fetchMessages={this.fetchMessages.bind}\n    />\n  );\n}\n\n")),Object(a.b)("h4",{id:"passing-props"},"Passing Props"),Object(a.b)("p",null,"Explicitly pass props if the number of props is small or if the prop is important enough that you want to be explicit about it."),Object(a.b)("p",null,"If there are a large number of props, pass in the whole thing or use destructuring to break it apart and pass them correctly."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"\n//Bad\n\n<MessageBody\n  content=this.props.message.content\n/>\n<MessageFooter\n  replies=this.props.message.replies\n  upvotes=this.props.message.upvotes\n  timestamp=this.props.message.timestamp\n  distance=this.props.message.distance\n/>\n\n// Good\n\nvar {content, ...footer} = this.props.message\n\n<MessageBody {content} />\n<MessageFooter {..footer} />\n\n")),Object(a.b)("p",null,"Sometimes you want to combine objects and pass them as props. In that case use ",Object(a.b)("inlineCode",{parentName:"p"},"Object.assign"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"\n_onPressMessage() {\n\n  var {message, ...props} = this.props;\n  var {votes, ...message} = this.props.message;\n  var fetchMessages = this._updateHearts;\n\n  this.props.navigator({\n    component: Comments,\n    passProps: Object.assign(\n      {..props},\n      {..message},\n      {fetchMessages}\n    ),\n  })\n}\n\n")),Object(a.b)("p",null,"For more information on passing props, see React Native ",Object(a.b)("a",r({parentName:"p"},{href:"https://facebook.github.io/react/docs/transferring-props.html"}),"Transferring Props")),Object(a.b)("h4",{id:"state-and-props"},"State and Props"),Object(a.b)("p",null,"Props are immutable. Do not mutate them."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// Bad\n\nvar component = <Component />;\ncomponent.props.foo = x;\ncomponent.props.bar = y;\n\n")),Object(a.b)("p",null,"State is mutable."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"\nconstructor(){\n  this.state = {messages:[]};\n}\n\n...\n\n_addMessages(data){\n  var messages = data.messages;\n  this.setState({\n    messages: this.state.messages.push(messages)\n  })\n}\n\n")),Object(a.b)("p",null,"Props can be passed into state, but be explicit that they are only 'initial values'"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"\nconstructor(props){\n  var initialNum = this.props.numHearts;\n  this.state = {numHearts: initialNum};\n}\n\n...\n\n_handleClick(){\n  this.setState({numHearts: this.state.numHearts + 1});\n}\n\n")),Object(a.b)("p",null,"Be sure to  make use of ",Object(a.b)("inlineCode",{parentName:"p"},"componentWillReceiveProps")," to sync state and props, if props are passed to state."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"\ncomponentWillReceiveProps(props){\n  this.setState({numHearts: props.numHearts});\n}\n")),Object(a.b)("h1",{id:"react-style-guide-cheet-sheet"},"React Style Guide Cheet Sheet"),Object(a.b)("h2",{id:"custom-classes"},"Custom Classes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"place custom functions above the render function.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"React.createClass({\n  displayName : '',\n  propTypes: {},\n  mixins : [],\n  getInitialState : function() {},\n  componentWillMount : function() {},\n  componentWillUnmount : function() {},\n  _onChange : function() {},\n  _onCreate : function() {},\n  render : function() {}\n});\n")),Object(a.b)("h2",{id:"conditional-html"},"Conditional html"),Object(a.b)("p",null,"In JSX, anything in {} will be evaluated in JavaScript"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{this.state.show && 'This is Shown'}\n{this.state.on ? ‘On’ : ‘Off’}\n")),Object(a.b)("p",null,"For anything more complicated, I have typically been creating a variable inside the render method, suffixed with ‘Html’:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"var dinosaurHtml = '';\nif (this.state.showDinosaurs) {\n  dinosaurHtml = (\n    <section>\n      <DinosaurTable />\n      <DinosaurPager />\n    </section>\n  );\n}\n\nreturn (\n  <div>\n    ...\n    {dinosaurHtml}\n    ...\n  </div>\n);\n")),Object(a.b)("h2",{id:"jsx-as-variable-or-return-value"},"JSX as variable or return value"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"var multilineJsx = (\n  <header>\n    <Logo />\n    <Nav />\n  </header>\n);\n\nvar singleLineJsx = <h1>Simple JSX</h1>;\n")),Object(a.b)("h2",{id:"self-closing-tags"},"Self-closing tags"),Object(a.b)("p",null,"Components without children should simply close themselves"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," correct ")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"<Logo />\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," bad practise ")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"<Logo></Logo>\n")),Object(a.b)("h2",{id:"list-iterations"},"List Iterations"),Object(a.b)("p",null,"List iterations are better done inline, especially if each list item will be rendered as a component. You may even be able to reduce to one line with fat arrows."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Note ")," This does require the harmony flag on JSX to be included, which will toggle certain ES6 features (fat arrows, template strings, destructuring, and rest parameters)"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"render : function() {\n  return (\n    <ul>\n      {this.state.dinosaursList.map(dinosaur => <DinosaurItem item={dinosaur} />)}\n    </ul>\n  );\n}\n")),Object(a.b)("h2",{id:"forms"},"Forms"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'<form onChange={this.inputHandler}>\n  ...\n    <input type="text" name="newDinosaurName" value={this.state.newDinosaurName} />\n  ...\n</form>\n\n// input handler\n\nfunction(event) {\n  actions.propagateValue({\n    field : event.target.name,\n    value : event.target.value\n  });\n}\n')),Object(a.b)("h2",{id:"formatting-attributes"},"Formatting Attributes"),Object(a.b)("p",null,"Preferable"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"<input\n  type=\"text\"\n  value={this.state.newDinosaurName}\n  onChange={this.inputHandler.bind(this, 'newDinosaurName')} />\n")),Object(a.b)("p",null,"Alternative"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"<input type=\"text\"\n       value={this.state.newDinosaurName}\n       onChange={this.inputHandler.bind(this, 'newDinosaurName')} />\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React-Notes/react-style-guide.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-notes-react-style-guide-md-ecfc389d9f856add6e77.js.map