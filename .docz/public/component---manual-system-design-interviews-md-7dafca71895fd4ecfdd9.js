(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{Mk3y:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),i=a("TjRS");a("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/System-Design/Interviews.md"}});var r={_frontmatter:o},s=i.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(s,l({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"interviews"},"Interviews"),Object(n.b)("h2",{id:"steps"},"Steps"),Object(n.b)("p",null,"Acronym: CASM HDR"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Clarify requirements"),Object(n.b)("li",{parentName:"ol"},"API Definition"),Object(n.b)("li",{parentName:"ol"},"Scale Estimatation"),Object(n.b)("li",{parentName:"ol"},"Modelling Data"),Object(n.b)("li",{parentName:"ol"},"High-Level Design"),Object(n.b)("li",{parentName:"ol"},"Detailed Design"),Object(n.b)("li",{parentName:"ol"},"Reduce Bottlenecks")),Object(n.b)("h2",{id:"1-clarify-requirements"},"1. Clarify Requirements"),Object(n.b)("p",null,"It is always a good idea to ask questions about the exact scope of the problem we are solving."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Design questions are mostly open-ended, and they don’t have ONE correct answer, that’s why clarifying ambiguities early in the interview becomes critical."),Object(n.b)("li",{parentName:"ul"},"Candidates who spend enough time to define the end goals of the system always have a better chance to be successful in the interview."),Object(n.b)("li",{parentName:"ul"},"Also, since we only have 35-40 minutes to design a (supposedly) large system, we should clarify what parts of the system we will be focusing on.")),Object(n.b)("h3",{id:"twitter-design-system-example"},"Twitter Design System Example"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Will users of our service be able to post tweets and follow other people?"),Object(n.b)("li",{parentName:"ul"},"Should we also design to create and display the user’s timeline?"),Object(n.b)("li",{parentName:"ul"},"Will tweets contain photos and videos?"),Object(n.b)("li",{parentName:"ul"},"Are we focusing on the backend only or are we developing the front-end too?"),Object(n.b)("li",{parentName:"ul"},"Will users be able to search tweets?"),Object(n.b)("li",{parentName:"ul"},"Do we need to display hot trending topics?"),Object(n.b)("li",{parentName:"ul"},"Will there be any push notification for new (or important) tweets?")),Object(n.b)("h2",{id:"2-api-definition"},"2. API Definition"),Object(n.b)("p",null,"Define the API for the system. This should help establish the exact contract expected."),Object(n.b)("p",null,"Examples:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"postTweet(user_id, tweet_data, tweet_location, user_location, timestamp, ...)\n\ngenerateTimeline(user_id, current_time, user_location, ...)\n\nmarkTweetFavorite(user_id, tweet_id, timestamp, ...)\n")),Object(n.b)("h2",{id:"3-scale-estimation"},"3. Scale Estimation"),Object(n.b)("p",null,"It is always a good idea to estimate the scale of the system we’re going to design. This will also help later when we will be focusing on scaling, partitioning, load balancing and caching."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"What scale is expected from the system (e.g., number of new tweets, number of tweet views, number of timeline generations per sec., etc.)?"),Object(n.b)("li",{parentName:"ol"},"How much storage will we need? We will have different numbers if users can have photos and videos in their tweets."),Object(n.b)("li",{parentName:"ol"},"What network bandwidth usage are we expecting? This will be crucial in deciding how we will manage traffic and balance load between servers.")),Object(n.b)("h2",{id:"4-modelling-data"},"4. Modelling Data"),Object(n.b)("p",null,"Defining the data model early will clarify how data will flow among different components of the system. Later, it will guide towards data partitioning and management. The candidate should be able to identify various entities of the system, how they will interact with each other, and different aspect of data management like storage, transportation, encryption, etc."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Entity"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Attributes"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"User"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"UserID, Name, Email, DoB, CreationData, LastLogin, etc.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Tweet"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"TweetID, Content, TweetLocation, NumberOfLikes, TimeStamp, etc.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"UserFollowing"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"UserdID1, UserID2")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"FavoriteTweets"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"UserID, TweetID, TimeStamp")))),Object(n.b)("p",null,"Which database system should we use? Will NoSQL like Cassandra best fit our needs, or should we use a MySQL-like solution? What kind of block storage should we use to store photos and videos?"),Object(n.b)("h2",{id:"5-high-level-design"},"5. High-Level Design"),Object(n.b)("p",null,"Draw a block diagram with 5-6 boxes representing the core components of our system. We should identify enough components that are needed to solve the actual problem from end-to-end."),Object(n.b)("p",null,"For Twitter, at a high-level, we will need multiple application servers to serve all the read/write requests with load balancers in front of them for traffic distributions. If we’re assuming that we will have a lot more read traffic (as compared to write), we can decide to have separate servers for handling these scenarios. On the backend, we need an efficient database that can store all the tweets and can support a huge number of reads. We will also need a distributed file storage system for storing photos and videos."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-shell"}),"# Twitter layout\nClients => Load Balancer => Server <=> Database\n                         => Server <=> File System\n                         => Server\n")),Object(n.b)("h2",{id:"6-detailed-design"},"6. Detailed Design"),Object(n.b)("p",null,"Dig deeper into two or three components; interviewer’s feedback should always guide us what parts of the system need further discussion. We should be able to present:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Different approaches"),Object(n.b)("li",{parentName:"ol"},"Their pros and cons"),Object(n.b)("li",{parentName:"ol"},"Explain why we will prefer one approach on the other.")),Object(n.b)("p",null,"Remember there is no single answer, the only important thing is to consider tradeoffs between different options while keeping system constraints in mind."),Object(n.b)("h3",{id:"example-questions-to-think-about"},"Example questions to think about"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Since we will be storing a massive amount of data, how should we partition our data to distribute it to multiple databases? Should we try to store all the data of a user on the same database? What issue could it cause?"),Object(n.b)("li",{parentName:"ul"},"How will we handle hot users who tweet a lot or follow lots of people?"),Object(n.b)("li",{parentName:"ul"},"Since users’ timeline will contain the most recent (and relevant) tweets, should we try to store our data in such a way that is optimized for scanning the latest tweets?"),Object(n.b)("li",{parentName:"ul"},"How much and at which layer should we introduce cache to speed things up?\nWhat components need better load balancing?")),Object(n.b)("h2",{id:"7-reduceresolveidentify-bottlenecks"},"7. Reduce/Resolve/Identify Bottlenecks"),Object(n.b)("p",null,"Try to discuss as many bottlenecks as possible and different approaches to mitigate them."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Is there any single point of failure in our system? What are we doing to mitigate it?"),Object(n.b)("li",{parentName:"ul"},"Do we have enough replicas of the data so that if we lose a few servers we can still serve our users?"),Object(n.b)("li",{parentName:"ul"},"Similarly, do we have enough copies of different services running such that a few failures will not cause total system shutdown?"),Object(n.b)("li",{parentName:"ul"},"How are we monitoring the performance of our service? Do we get alerts whenever critical components fail or their performance degrades?")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/System-Design/Interviews.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-system-design-interviews-md-7dafca71895fd4ecfdd9.js.map