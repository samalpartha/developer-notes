(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{"4iwc":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),a=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React-Notes/React-With-Redux.md"}});var i={_frontmatter:c},s=a.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(s,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"react-with-redux"},"React with Redux"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#react-with-redux"}),"React with Redux"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#redux-0-crash-course"}),"REDUX-0: Crash Course")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#redux-1-modelling-application-state"}),"REDUX-1: Modelling Application State")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#redux-2-reducers"}),"REDUX-2: Reducers")," - ",Object(o.b)("a",r({parentName:"li"},{href:"#-----redux-21-what-is-a-reducer"}),"---- REDUX-2.1: What is a Reducer?")," - ",Object(o.b)("a",r({parentName:"li"},{href:"#-----redux-22-containers---connecting-redux-to-react"}),"---- REDUX-2.2: Containers - Connecting Redux to React")," - ",Object(o.b)("a",r({parentName:"li"},{href:"#-----redux-23-implementation-of-a-container-class"}),"---- REDUX-2.3: Implementation of a container class")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#redux-3-actions-and-action-containers"}),"REDUX-3: Actions and Action Containers")," - ",Object(o.b)("a",r({parentName:"li"},{href:"#-----redux-31-binding-action-creators"}),"---- REDUX-3.1: Binding Action Creators")," - ",Object(o.b)("a",r({parentName:"li"},{href:"#-----redux-32-creating-an-action"}),"---- REDUX-3.2: Creating an Action")," - ",Object(o.b)("a",r({parentName:"li"},{href:"#-----redux-33-consuming-actions-in-reducers"}),"---- REDUX-3.3: Consuming Actions in Reducers")," - ",Object(o.b)("a",r({parentName:"li"},{href:"#-----redux-34-conditional-rendering"}),"---- REDUX-3.4: Conditional Rendering")," - ",Object(o.b)("a",r({parentName:"li"},{href:"#-----redux-35-redux-intro-review"}),"---- REDUX-3.5: Redux intro review"))))),Object(o.b)("h2",{id:"redux-0-crash-course"},"REDUX-0: Crash Course"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Key Imports")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// used to extend the react Component class\nimport React, { Component } from 'react';\n\n// used to connect the container/component class, mapStateToProps and\n// the mapDispatchToProps functions\nimport { connect } from 'react-redux';\n\n// used to pass the result to all the reducers\nimport { bindActionCreators } from 'redux';\n\n// used to import the combineReducers function in reducers/index.js\nimport { combineReducers } from 'redux';\n")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The flow of how the Application Reacts in Redux")),Object(o.b)("img",{src:"https://d1din05d4116wx.cloudfront.net/react-with-redux/react-diagram-1.png"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"An interaction calls the ",Object(o.b)("inlineCode",{parentName:"li"},"Action Creator")),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"Action Creator")," returns an ",Object(o.b)("inlineCode",{parentName:"li"},"Action")," that is a plain JS Object"),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"Action")," is automatically sent to all Reducers (through the combineReducers function)"),Object(o.b)("li",{parentName:"ol"},"If the property contains a case for that ",Object(o.b)("inlineCode",{parentName:"li"},"Action"),", the relevant property on ",Object(o.b)("inlineCode",{parentName:"li"},"State")," set to the value returned by from the ",Object(o.b)("inlineCode",{parentName:"li"},"Reducer")),Object(o.b)("li",{parentName:"ol"},"All ",Object(o.b)("inlineCode",{parentName:"li"},"Reducers")," process the ",Object(o.b)("inlineCode",{parentName:"li"},"Action")," and return the new ",Object(o.b)("inlineCode",{parentName:"li"},"State"),". The new ",Object(o.b)("inlineCode",{parentName:"li"},"State")," has been assembled. The ",Object(o.b)("inlineCode",{parentName:"li"},"Containers")," are notified of any changes to ",Object(o.b)("inlineCode",{parentName:"li"},"State"),". On notification, ",Object(o.b)("inlineCode",{parentName:"li"},"Containers")," will re-render with new props.")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"src folders")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actions")),Object(o.b)("p",null,"Contains ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," which is about exporting functions that are used to update the state."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Example: actions/index.js"))),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"export function selectBook(book) {\n    return {\n        type: 'BOOK_SELECTED',\n        payload: book\n    };\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"components")),Object(o.b)("p",null,'Contains all the "children" components that do not deal with ',Object(o.b)("inlineCode",{parentName:"p"},"Application State"),"."),Object(o.b)("p",null,"Also contains the main ",Object(o.b)("inlineCode",{parentName:"p"},"app.js")," file that renders the ",Object(o.b)("inlineCode",{parentName:"p"},"containers")," and ",Object(o.b)("inlineCode",{parentName:"p"},"components"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Example: components/app.js"))),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\n\nimport BookList from '../containers/book-list';\nimport BookDetail from '../containers/book-detail';\n\nexport default class App extends Component {\n    render() {\n        return (\n            <div>\n                <BookList />\n                <BookDetail />\n            </div>\n        );\n    }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"containers")),Object(o.b)("p",null,'These are the "parent" components that are most significant to changing ',Object(o.b)("inlineCode",{parentName:"p"},"Application State"),"."),Object(o.b)("p",null,"In this example, we return a view that shows all the book titles and has an onClick action associated with it."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Example: containers/book-list.js"))),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\nimport { connect } from 'react-redux';\n\n// let's import the action creator\nimport { selectBook } from '../actions/index';\nimport { bindActionCreators } from 'redux';\n\nclass BookList extends Component {\n    renderList() {\n        return this.props.books.map((book) => {\n            return (\n                <li\n                    key={book.title}\n                    onClick={() => this.props.selectBook(book)}\n                    className=\"list-group-item\"\n                >\n                    {book.title}\n                </li>\n            );\n        });\n    }\n\n    render() {\n        return <ul className=\"list-group col-sm-4\">{this.renderList()}</ul>;\n    }\n}\n\nfunction mapStateToProps(state) {\n    // What is returned will show up as props\n    // inside of BookList\n    return {\n        books: state.books\n    };\n}\n\n// define our dispatch to props\n// anything returned from this function will end up as props\n// on the BookList container\nfunction mapDispatchToProps(dispatch) {\n    // Whenever selectBook is called, the result should be passed\n    // to all of our reducers\n    return bindActionCreators({ selectBook: selectBook }, dispatch);\n}\n\n// add the dispatch as the second argument!\n// Promote bookList from component to container, so it needs to know\n// about this new dispatch method, selectBook. Make it available\n// as a prop\nexport default connect(mapStateToProps, mapDispatchToProps)(BookList);\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"reducers")),Object(o.b)("p",null,"Deal with the data and how the state is handled."),Object(o.b)("p",null,"Contains index.js that combines all the reducers and the other reducer files."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Example: reducers/index.js"))),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { combineReducers } from 'redux';\nimport BooksReducer from './reducer_books.js';\nimport ActiveBook from './reducer_active_book.js';\n\nconst rootReducer = combineReducers({\n    books: BooksReducer,\n    activeBook: ActiveBook\n});\n\nexport default rootReducer;\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Example: reducers/reducer_active_books.js"))),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"export default function(state = null, action) {\n    switch (action.type) {\n        case 'BOOK_SELECTED':\n            return action.payload;\n    }\n\n    return state;\n}\n")),Object(o.b)("h2",{id:"redux-1-modelling-application-state"},"REDUX-1: Modelling Application State"),Object(o.b)("p",null,"Inherently difficult in terms of the concept."),Object(o.b)("p",null,"Redux is just the start of a bunch of different technologies. You need to understand the core concepts of it."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"What is Redux?")),Object(o.b)("p",null,"Consider the structure of an application on the view layer and the data layer."),Object(o.b)("p",null,"Where does Redux come into this? Redux is like the data, while React is the views. A state container is essentially the data."),Object(o.b)("p",null,'This doesn\'t look too different to the others, but here we put all the data into a single collection. This is different to other Frameworks. Redux centralises all the data in the "state". Redux state is Application state as opposed to Component state.'),Object(o.b)("p",null,"Think of a +/- button state that displays the current count."),Object(o.b)("p",null,"If we think about this, the data contained is the current count, while the views are the current count value and the +/- buttons."),Object(o.b)("p",null,"Redux is going to keep track of the counter. It tells the components how and what they should render."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Modelling an App")),Object(o.b)("p",null,"Designing the state is the critical part of Redux."),Object(o.b)("p",null,"Let's model Tinder!"),Object(o.b)("p",null,"In data, we need to model a few things."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The swiping screen. The list of the users not reviewed, and the view of the current user."),Object(o.b)("li",{parentName:"ol"},"The conversation screen. List of all current convos."),Object(o.b)("li",{parentName:"ol"},"The actual conversation screen itself."),Object(o.b)("li",{parentName:"ol"},"List of all the users in general.")),Object(o.b)("p",null,"Controller Views"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Image Card"),Object(o.b)("li",{parentName:"ol"},"Like/Dislike buttons"),Object(o.b)("li",{parentName:"ol"},"ConversationList"),Object(o.b)("li",{parentName:"ol"},"TextItem (individual message)"),Object(o.b)("li",{parentName:"ol"},"TextList (list of chat messages)")),Object(o.b)("h2",{id:"redux-2-reducers"},"REDUX-2: Reducers"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npm start")," from the ReduxSimpleStarter"),Object(o.b)("h3",{id:"redux-21-what-is-a-reducer"},"REDUX-2.1: What is a Reducer?"),Object(o.b)("p",null,"A function that returns the state."),Object(o.b)("p",null,"One reducer would be responsible for each function that returns an Application State."),Object(o.b)("p",null,"For example, if we're looking at a list of books where one is currently selected, we are then looking to have two reducers."),Object(o.b)("p",null,"The important thing is the value of the state."),Object(o.b)("p",null,"Key of state, value of state. That's the pairing."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"{\n    // Books Reducer\n    books: [\n        {\n            title: 'Harry Potter'\n        },\n        {\n            title: 'JavaScript'\n        }\n    ],\n\n    // ActiveBook Reducer\n    activeBook: {\n        title: 'JavaScript: The Good Parts'\n    }\n}\n")),Object(o.b)("p",null,"We want a function to produce these types of states."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In src/reducers/"),', we\'ll create a reducer file "reducer_books.js"'),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"export default function() {\n    return [\n        { title: 'Book 1' },\n        { title: 'Book 2' },\n        { title: 'Book 3' },\n        { title: 'Book 4' }\n    ];\n}\n")),Object(o.b)("p",null,"Step 1 - Create the reducer is now done. Now, Step 2 - we want to re-wire the reducer."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"reducers/index.js")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { combineReducers } from 'redux';\n\n//import in the file\nimport BooksReducer from './reducer_books.js';\n\nconst rootReducer = combineReducers({\n    // wire BooksReducer to books\n    books: BooksReducer\n});\n\nexport default rootReducer;\n")),Object(o.b)("h3",{id:"redux-22-containers---connecting-redux-to-react"},"REDUX-2.2: Containers - Connecting Redux to React"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In components/book-list.js")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import React, { Component } from \'react\';\n\nexport default class BookList extends Component {\n    renderList() {\n        return this.props.books.map((book) => {\n            return (\n                <li key={book.title} className="list-group-item">\n                    {book.title}\n                </li>\n            );\n        });\n    }\n\n    render() {\n        return <ul className="list-group col-sm-4">{this.renderList()}</ul>;\n    }\n}\n')),Object(o.b)("p",null,"Combining React and Redux is done with a library called react-redux"),Object(o.b)("p",null,"To make use of that library, we define one of our components as a ",Object(o.b)("strong",{parentName:"p"},"container"),"."),Object(o.b)("p",null,"To separate components and containers, we create a container directory."),Object(o.b)("p",null,"Cut and move the file into the containers folder!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Now in containers/book-list.js")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import React, { Component } from \'react\';\n\nexport default class BookList extends Component {\n    renderList() {\n        return this.props.books.map((book) => {\n            return (\n                <li key={book.title} className="list-group-item">\n                    {book.title}\n                </li>\n            );\n        });\n    }\n\n    render() {\n        return <ul className="list-group col-sm-4">{this.renderList()}</ul>;\n    }\n}\n')),Object(o.b)("p",null,"How do we decide what becomes a container and what stays as a component? It varies. The most parent component that cares about a particular state should become a container."),Object(o.b)("p",null,'The app component should be a "dumb component".'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Remember: Only the most parent component should become the container")),Object(o.b)("h3",{id:"redux-23-implementation-of-a-container-class"},"REDUX-2.3: Implementation of a container class"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"in app.js")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\n\nimport BookList from '../containers/book-list';\n\nexport default class App extends Component {\n    render() {\n        return (\n            <div>\n                <BookList />\n            </div>\n        );\n    }\n}\n")),Object(o.b)("p",null,"Back in containers/book-list, ensure that you have imported react-redux."),Object(o.b)("p",null,"The function mapStateToProps(state) {} will use the function map the state to the props."),Object(o.b)("p",null,"The connect function is what will be used to connect all of this."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"connect(arg)(state)")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\n\n// importing connect\nimport { connect } from 'react-redux';\n\nclass BookList extends Component {\n    renderList() {\n        return this.props.books.map((book) => {\n            return (\n                <li key={book.title} className=\"list-group-item\">\n                    {book.title}\n                </li>\n            );\n        });\n    }\n\n    render() {\n        return <ul className=\"list-group col-sm-4\">{this.renderList()}</ul>;\n    }\n}\n\n// mapping the state to props\nfunction mapStateToProps(state) {\n    // What is returned will show up as props\n    // inside of BookList\n    return {\n        books: state.books\n    };\n}\n\nexport default connect(mapStateToProps)(BookList);\n")),Object(o.b)("p",null,"Whenever the app state changes, our container will automatically re-render. The object in the state function will assigned as the prop."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Containers and Reducers Review")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"We promoted a component to a container"),Object(o.b)("li",{parentName:"ol"},"Redux serves to produce the state, React shows the state"),Object(o.b)("li",{parentName:"ol"},"App state is produced by reducer functions")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"redux-3-actions-and-action-containers"},"REDUX-3: Actions and Action Containers"),Object(o.b)("p",null,'Currently, the books reducer ALWAYS brings back the same books. We don\'t want this. We want an "active" book.'),Object(o.b)("p",null,"Actions and Action Creators solve this."),Object(o.b)("p",null,"Example: A user clicks on the Book List at Book #2"),Object(o.b)("p",null,'The event starts with an "action" eg. AJAX, clicks, hovers etc. This creates the action creator.'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The click calls the action creator")),Object(o.b)("p",null,"The function will return an object."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"function(\n    return {\n        type: BOOK_SELECTED\n        // the book here is the payload\n        book: { title: 'Book 2' }\n    }\n)\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Action creator returns an action")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    type: BOOK_SELECTED;\n    book: {\n        title: 'Book 2';\n    }\n}\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Action automatically send to all reducers")),Object(o.b)("p",null,"This is sent to all of our reducers."),Object(o.b)("p",null,"Reducers don't have to react, so it just returns the currentState and there are no changes."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// in the ActionBook Reducer\n\nswitch (action.type) {\n    case BOOK_SELECTED\n        return actionBook\n    default\n        // do nothing\n        return currentState\n}\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"activeBook property on the state set to the value returned fom the active book reducer")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    activeBook: {\n        title: 'JS ';\n    }\n    books: [\n        {\n            title: 'dark'\n        },\n        {\n            title: 'JS'\n        }\n    ];\n}\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"All reducers processed the action and returned new state. New state has been assembled. Notify containers of the changes to state. On notification, containers will re-render with new props.")),Object(o.b)("h3",{id:"redux-31-binding-action-creators"},"REDUX-3.1: Binding Action Creators"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In actions/index.js")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Export the function to make use of the action creator in other parts of the function.")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"export function selectBook(book) {\n    console.log('A book has been selected: ', book.title);\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In containers/book-list.js")),Object(o.b)("p",null,"We are going to bind this action to the component."),Object(o.b)("p",null,"We call the function mapDispatchToProps with the return bindActionCreators() to say that we know we're going to call this at some stage and we want the result to flow through the ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch")," function which will pass it to all of our Reducers."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\nimport { connect } from 'react-redux';\n\n// let's import the action creator\nimport { selectBook } from '../actions/index';\nimport { bindActionCreators } from 'redux';\n\nclass BookList extends Component {\n    renderList() {\n        return this.props.books.map((book) => {\n            return (\n                <li key={book.title} className=\"list-group-item\">\n                    {book.title}\n                </li>\n            );\n        });\n    }\n\n    render() {\n        return <ul className=\"list-group col-sm-4\">{this.renderList()}</ul>;\n    }\n}\n\nfunction mapStateToProps(state) {\n    // What is returned will show up as props\n    // inside of BookList\n    return {\n        books: state.books\n    };\n}\n\n// define our dispatch to props\n// anything returned from this function will end up as props\n// on the BookList container\nfunction mapDispatchToProps(dispatch) {\n    // Whenever selectBook is called, the result should be passed\n    // to all of our reducers\n    return bindActionCreators({ selectBook: selectBook }, dispatch);\n}\n\n// add the dispatch as the second argument!\n// Promote bookList from component to container, so it needs to know\n// about this new dispatch method, selectBook. Make it available\n// as a prop\nexport default connect(mapStateToProps, mapDispatchToProps)(BookList);\n")),Object(o.b)("h3",{id:"redux-32-creating-an-action"},"REDUX-3.2: Creating an Action"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In containers/book-list.js")),Object(o.b)("p",null,"Whenever a user clicks on a line item for a particular book, we want an action."),Object(o.b)("p",null,"If we add a click handler, we can create this."),Object(o.b)("p",null,"Use the console log to see the results from this!"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\nimport { connect } from 'react-redux';\n\n// let's import the action creator\nimport { selectBook } from '../actions/index';\nimport { bindActionCreators } from 'redux';\n\nclass BookList extends Component {\n    renderList() {\n        return this.props.books.map((book) => {\n            // ACTION - add in the onClick function\n            return (\n                <li\n                    key={book.title}\n                    onClick={() => this.props.selectBook(book)}\n                    className=\"list-group-item\"\n                >\n                    {book.title}\n                </li>\n            );\n        });\n    }\n\n    render() {\n        return <ul className=\"list-group col-sm-4\">{this.renderList()}</ul>;\n    }\n}\n\nfunction mapStateToProps(state) {\n    // What is returned will show up as props\n    // inside of BookList\n    return {\n        books: state.books\n    };\n}\n\n// define our dispatch to props\n// anything returned from this function will end up as props\n// on the BookList container\nfunction mapDispatchToProps(dispatch) {\n    // Whenever selectBook is called, the result should be passed\n    // to all of our reducers\n    return bindActionCreators({ selectBook: selectBook }, dispatch);\n}\n\n// add the dispatch as the second argument!\n// Promote bookList from component to container, so it needs to know\n// about this new dispatch method, selectBook. Make it available\n// as a prop\nexport default connect(mapStateToProps, mapDispatchToProps)(BookList);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"in actions/index.js")),Object(o.b)("p",null,"Change the result from console.log to whatever you want!"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"export function selectBook(book) {\n    // selectBook is an action creator! Return an action.\n    // this is an object with a property type\n    return {\n        type: 'BOOK_SELECTED',\n        payload: book\n    };\n}\n")),Object(o.b)("h3",{id:"redux-33-consuming-actions-in-reducers"},"REDUX-3.3: Consuming Actions in Reducers"),Object(o.b)("p",null,"The result of the action container is automatically being sent to our reducers because of the dispatch."),Object(o.b)("p",null,"Let's now create a new reducer to show our active book!"),Object(o.b)("p",null,"For the switch case, you must ALWAYS return a value. Set state = null for if the state is undefined."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"after creating reducers/reducer_active_book.js")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// State argument is not application state, just the state\n// that this reducer is responsible for\nexport default function(state = null, action) {\n    switch (action.type) {\n        case 'BOOK_SELECTED':\n            return action.payload;\n    }\n\n    return state;\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"in reducers/index.js")),Object(o.b)("p",null,"Let's now import the new reducer."),Object(o.b)("p",null,"Remember, any key we pass into this comes back as a key to a global state."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { combineReducers } from 'redux';\nimport BooksReducer from './reducer_books.js';\n\n// new reducer\nimport ActiveBook from './reducer_active_book';\n\nconst rootReducer = combineReducers({\n    books: BooksReducer,\n    activeBook: ActiveBook\n});\n\nexport default rootReducer;\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Let's see how this now works")),Object(o.b)("p",null,"Do we want a component or a container? The app doesn't really care about the active book. So, this book detail view/component should be a container."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"create containers/book-detail.js")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\n\nexport default class BookDetail extends Component {\n    render() {\n        return <div>Book Details!</div>;\n    }\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"import this into components/app.js")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\n\nimport BookList from '../containers/book-list';\nimport BookDetail from '../container/book-detail';\n\nexport default class App extends Component {\n    render() {\n        return (\n            <div>\n                <BookList />\n                <BookDetail />\n            </div>\n        );\n    }\n}\n")),Object(o.b)("p",null,"Now we start connecting everything up!"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\nimport { connect } from 'react-redux';\n\nclass BookDetail extends Component {\n    render() {\n        return (\n            <div>Book Details!</div>\n        );\n    }\n}\n\nfunction mapStateToProps(state) {\n    return {\n        // activeBook from our activeBook pierce of state\n        // in reducers/index.js in the combineReducers\n        book: state.activeBook;\n    };\n}\n\nexport default connect(mapStateToProps)(BookDetail);\n")),Object(o.b)("h3",{id:"redux-34-conditional-rendering"},"REDUX-3.4: Conditional Rendering"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"in containers/book-detail.js")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\nimport { connect } from 'react-redux';\n\nclass BookDetail extends Component {\n    render() {\n        if (!this.props.book) {\n            return <div>Select a book to begin</div>\n        }\n\n        return (\n            <div>\n                <h3>Details for:</h3>\n                <div>{this.props.book.titile}</div>\n            </div>\n        );\n    }\n}\n\nfunction mapStateToProps(state) {\n    return {\n        // activeBook from our activeBook pierce of state\n        // in reducers/index.js in the combineReducers\n        book: state.activeBook;\n    };\n}\n\nexport default connect(mapStateToProps)(BookDetail);\n")),Object(o.b)("p",null,"An action comes through, but we don't know what that is yet. So when the app first boots up, it will always currently be ",Object(o.b)("inlineCode",{parentName:"p"},"null"),"."),Object(o.b)("p",null,"What we will do, is add an initial check in the BookDetail class. We can run a conditional check with ",Object(o.b)("inlineCode",{parentName:"p"},"if (!this.props.book)")," Then, we can render an initial view!"),Object(o.b)("p",null,"The idea is that the application is now malleable enough to start adding things like extra book details etc."),Object(o.b)("h3",{id:"redux-35-redux-intro-review"},"REDUX-3.5: Redux intro review"),Object(o.b)("p",null,"Things to take away:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Redux is entirely responsible for the Application State - Component State is still separate from our Application state, so you could still use setState in the components. - Reducers form the application state. Everything gets combined together in the combineReducers function. - Reducers are in charge of changing the Application State over time using actions. All actions flow through all the reducers and they react depending on what has been set for them to react to.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Actions and action creators - Action creators are just functions that return an action - An action is just a plain JS object - Must have a type defined. Normally has payload as convention for what it is passing along."))))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React-Notes/React-With-Redux.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-notes-react-with-redux-md-c3e6e50b738d9c1f319e.js.map