(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{zTde:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),i=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/COMP3306-AI/2-Problem-Solving-And-Search.md"}});var b={_frontmatter:l},o=i.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(o,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"problem-solving-and-search"},"Problem Solving and Search"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#problem-solving-and-search"}),"Problem Solving and Search"),"\n- ",Object(n.b)("a",r({parentName:"li"},{href:"#search-problem-formulation"}),"Search Problem Formulation"),"\n- ",Object(n.b)("a",r({parentName:"li"},{href:"#searching-for-solutions"}),"Searching for solutions"),"\n- ",Object(n.b)("a",r({parentName:"li"},{href:"#tree-search-algorithm---pseudo-code"}),"Tree search algorithm - pseudo code"),"\n- ",Object(n.b)("a",r({parentName:"li"},{href:"#nodes-vs-states"}),"Nodes vs States"),"\n- ",Object(n.b)("a",r({parentName:"li"},{href:"#search-strategies"}),"Search Strategies"),"\n- ",Object(n.b)("a",r({parentName:"li"},{href:"#uninformed-blind-search-strategies"}),"Uninformed (Blind) Search Strategies"),"\n- ",Object(n.b)("a",r({parentName:"li"},{href:"#bfs---breadth-first-search"}),"BFS - Breadth First Search"),"\n- ",Object(n.b)("a",r({parentName:"li"},{href:"#ucs---uniform-cost-search"}),"UCS - Uniform Cost Search"),"\n- ",Object(n.b)("a",r({parentName:"li"},{href:"#dfs---depth-firth-search"}),"DFS - Depth-Firth Search"),"\n- ",Object(n.b)("a",r({parentName:"li"},{href:"#ids---iterative-deepening-searh-ids"}),"IDS - Iterative Deepening Searh (IDS)"),"\n- ",Object(n.b)("a",r({parentName:"li"},{href:"#informed-vs-uninformed-search"}),"Informed vs Uninformed Search")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#best-first-search"}),"Best First Search"),"\n- ",Object(n.b)("a",r({parentName:"li"},{href:"#greedy-search-gs"}),"Greedy Search (GS)"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Learning Aims")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Uninformed Search: BFS, DFS, UCS and IDS"),Object(n.b)("li",{parentName:"ol"},"Informed Search: Greedy Best-First")),Object(n.b)("h2",{id:"search-problem-formulation"},"Search Problem Formulation"),Object(n.b)("p",null,"Defined by 4 items:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Initial state"),Object(n.b)("li",{parentName:"ol"},"Goal state"),Object(n.b)("li",{parentName:"ol"},"Operators = actions"),Object(n.b)("li",{parentName:"ol"},"Path cost function")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Choosing States and Actions")),Object(n.b)("p",null,"Real problems are too complex, to solve them we need to ",Object(n.b)("em",{parentName:"p"},"abstract")," them! Simplify them by removing unnecessary details."),Object(n.b)("p",null,"Eg. If we need to find the path somewhere, we can ignore things such as weather, road conditions, scenary."),Object(n.b)("p",null,'Actions need to be suitable specified eg not "turn the steering wheel left by 5 degrees".'),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"level of abstraction")," must be appropriate."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"State = set of real states"),Object(n.b)("li",{parentName:"ul"},"Action = complex combination of real actions"),Object(n.b)("li",{parentName:"ul"},"Solution = set of real paths that are solutions in the real world")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"8-Queens Problem")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Incremental - stat with empty space, add 1 queen at a time"),Object(n.b)("li",{parentName:"ol"},"Complete-state - start with all 8 queens and move them around")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"For 1:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"States? Any arrangement of 0 to 8 queens"),Object(n.b)("li",{parentName:"ul"},"Initial state? No queens on the board"),Object(n.b)("li",{parentName:"ul"},"Operators? Add any queen to any square"),Object(n.b)("li",{parentName:"ul"},"State space? 1.8 ",Object(n.b)("em",{parentName:"li"}," 10^14 states (= 64 ")," 63 ",Object(n.b)("em",{parentName:"li"}," ... ")," 57)")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"For 2:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"States? Any arrangement of 0 to 8 queens, 1 in each column with no queen attacking each other"),Object(n.b)("li",{parentName:"ul"},"Initial state? No queens on the board"),Object(n.b)("li",{parentName:"ul"},"Operators? Place a queen in the left-most-empty column such that it is not attacked by any other queen"),Object(n.b)("li",{parentName:"ul"},"State space? 2057 states")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"For 100-queens:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"1: 10^400 states"),Object(n.b)("li",{parentName:"ul"},"2: 10^52 states (hugh improvement but problem still not tractable)")),Object(n.b)("h2",{id:"searching-for-solutions"},"Searching for solutions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Searching the state space"),Object(n.b)("li",{parentName:"ul"},"Generate a search tree starting from the initial state and applying the operators"),Object(n.b)("li",{parentName:"ul"},"We can generate a search graph - in a graph the same state can be reached rom multiple paths")),Object(n.b)("h2",{id:"tree-search-algorithm---pseudo-code"},"Tree search algorithm - pseudo code"),Object(n.b)("p",null,"Basic idea: offline exploration of the state space by generating successors of the explored states (i.e. exapnding states)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"We keep two lists:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Expanded - for nodes that have been expanded"),Object(n.b)("li",{parentName:"ul"},"Fringe - for nodes that bae been generated but not expanded yet")),Object(n.b)("h2",{id:"nodes-vs-states"},"Nodes vs States"),Object(n.b)("p",null,"A ",Object(n.b)("inlineCode",{parentName:"p"},"node")," is different than a ",Object(n.b)("inlineCode",{parentName:"p"},"state"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"A node:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"represents a state"),Object(n.b)("li",{parentName:"ul"},"is a data structure used in the search tree"),Object(n.b)("li",{parentName:"ul"},"includes ",Object(n.b)("inlineCode",{parentName:"li"},"parent"),", ",Object(n.b)("inlineCode",{parentName:"li"},"children"),", and other relevant information e.g. ",Object(n.b)("inlineCode",{parentName:"li"},"depth")," and ",Object(n.b)("inlineCode",{parentName:"li"},"path cost g"))),Object(n.b)("h2",{id:"search-strategies"},"Search Strategies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A ",Object(n.b)("inlineCode",{parentName:"li"},"search strategy")," defines which node from the fringe is most promising and should be expanded next"),Object(n.b)("li",{parentName:"ul"},"We always keep the nodes in the fringe orded based on the search strategy and always expand the first one")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Evaluation Critera")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Term"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Definition"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Completeness"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"is it guaranteed to find a solution if one exists?")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Optimality"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"is it guaranteed to find an ",Object(n.b)("inlineCode",{parentName:"td"},"optimal (least cost path)")," solution?")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Time complexity"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"How long does it take to find the solution? (measured as no. of generated nodes)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Space complexity"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"what is the max number of nodes in memory?")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Time and space complexity")),Object(n.b)("p",null,"Measured in terms of:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"b: max branching factor of the search tree (we can assume that it is finite)"),Object(n.b)("li",{parentName:"ul"},"d: depth of the optimal (least cost) solution"),Object(n.b)("li",{parentName:"ul"},"m: maximum depth of the state space (can be finite or not finite)")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"There are two types of search methods:")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Uninformed (blind)"),Object(n.b)("li",{parentName:"ol"},"Informed (heuristic)")),Object(n.b)("h2",{id:"uninformed-blind-search-strategies"},"Uninformed (Blind) Search Strategies"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Uninformed strategies:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Generate children in a systematic way eg level by level, from left to right"),Object(n.b)("li",{parentName:"ul"},"Know if a child node is a goal or non-goal node"),Object(n.b)("li",{parentName:"ul"},"Do not know if one non-goal child is better (more promising) than another one. By contrast, informed (heuristic) search strategies know this")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"5 uninformed search strategies:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Breadth first"),Object(n.b)("li",{parentName:"ul"},"Uniform-cost"),Object(n.b)("li",{parentName:"ul"},"Depth-first"),Object(n.b)("li",{parentName:"ul"},"Depth-limited"),Object(n.b)("li",{parentName:"ul"},"Iterative deepening")),Object(n.b)("h2",{id:"bfs---breadth-first-search"},"BFS - Breadth First Search"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"Is the first node in the fringe a goal node?\n    Yes => stop and return solution\n    No => expand it:\n        - Move it to the expanded list\n        - Generate its children and put them in the fringe in a order defined by the search strategy\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Properties")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Complete? Yes"),Object(n.b)("li",{parentName:"ul"},"Optimal? Not optimal in general; Yes, if step cost is the same, e.g. =1"),Object(n.b)("li",{parentName:"ul"},"Time? generated nodes = ",Object(n.b)("inlineCode",{parentName:"li"},"1+b+b^2+ ... + b^d = O(b^d)"),", exponential"),Object(n.b)("li",{parentName:"ul"},"Space? O(b^d) (keeps every node in memory)"),Object(n.b)("li",{parentName:"ul"},"Both time and space are problems as they grow exponentially with depth but space is the bigger problem!")),Object(n.b)("h2",{id:"ucs---uniform-cost-search"},"UCS - Uniform Cost Search"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Complete? Yes ( if step cost>0 )"),Object(n.b)("li",{parentName:"ul"},"Optimal? Yes"),Object(n.b)("li",{parentName:"ul"},"Time? # nodes with g  cost of optimal solution O(bd)"),Object(n.b)("li",{parentName:"ul"},"Space? # nodes with g  cost of optimal solution O(bd)")),Object(n.b)("p",null,"UCS is equivalent to BFS if the step cost is 1 or the same"),Object(n.b)("h2",{id:"dfs---depth-firth-search"},"DFS - Depth-Firth Search"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Expands deepest unexpanded node"),Object(n.b)("li",{parentName:"ul"},"Implementation: insert children at the front of the fringe Fringe: A\nExpanded: none")),Object(n.b)("h2",{id:"ids---iterative-deepening-searh-ids"},"IDS - Iterative Deepening Searh (IDS)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Sidesteps issue o choosing the best depth limit by trying all possible depth limits in turn (0, 1, 2, etc.) and applying DFS.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Depth-limited search = DFS with depth limit l - i.e. it imposes a cutoff on the maximum depth")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Properties - similar to DFS - Complete? Yes (as the search depth is always finite) - Optimal? No - Time? 1+b^2+b^3+b^4 + ... +b^l = O(b^l) - Space? O(bl)"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Overhead of multiple expansion")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"May seem wasteful as many nodes are expanded multiple times"),Object(n.b)("li",{parentName:"ul"},"But for most problems the overhead of this multiple expansion is small!")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Common properties of IDS")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"b - branching factor\nd - depth of least cost solution\nm - max depth\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Combines the benefits of DFS and BFS"),Object(n.b)("li",{parentName:"ul"},"Complete? As BFS: - Yes ","[DFS: yes, if m is finite; no otherwise]","*"),Object(n.b)("li",{parentName:"ul"},"Optimal? As BFS: - No in general; Yes if step cost=1 ","[DFS: not optimal, even if step cost=1]"," ","*"),Object(n.b)("li",{parentName:"ul"},"Time? As BFS: - ",Object(n.b)("inlineCode",{parentName:"li"},"(d+1)b^0+db^1+(d-1)b^2+ ... +bd = O(b^d) [DFS: O(bm)] *")),Object(n.b)("li",{parentName:"ul"},"Space? As DFS: O(bd), linear"),Object(n.b)("li",{parentName:"ul"},"Where are the improvements of IDS in comparison to DFS? - in completeness, optimality and time (shown with ","*",")"),Object(n.b)("li",{parentName:"ul"},"Can be modified to explore uniform-cost tree")),Object(n.b)("h2",{id:"informed-vs-uninformed-search"},"Informed vs Uninformed Search"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A search strategy defines the order of node expansion")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Uniformed")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Uninformed search strategies do not use problem specific knowledge beyond the definition of the problem, i.e. they do not use heuristic knowledge. - expand nodes systematically - know if node is goal or non-goal - cannot compare two non-goal nodes (do not know if one goal node is better than another) - typically inefficient")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Informed")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Informed search strategies use problem-specific heuristic knowledge to select the order of node expansion. They: - can compare non-goal nodes – they know if one non-goal node is better than another one - are typically more efficient")),Object(n.b)("hr",null),Object(n.b)("h1",{id:"best-first-search"},"Best First Search"),Object(n.b)("p",null,"How can informed strategies compare non-goal nodes?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"By using domain specific knowledge to devise an evaluation function which estimates how good each node is"),Object(n.b)("li",{parentName:"ul"},"The evaluation function assigns a value to each node"),Object(n.b)("li",{parentName:"ul"},"At each step, the best node is expanded (the one with the best\nvalue)"),Object(n.b)("li",{parentName:"ul"},"This is called best-first search - Note that we don’t really know which is the best node as we use an estimate based on the evaluation function. So best-first search expands the node that appears to be the best."),Object(n.b)("li",{parentName:"ul"},"Fringe: insert children in decreasing order of desirability"),Object(n.b)("li",{parentName:"ul"},"We will study 2 best-first search algorithms: greedy and A","*")),Object(n.b)("hr",null),Object(n.b)("h2",{id:"greedy-search-gs"},"Greedy Search (GS)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Uses ",Object(n.b)("inlineCode",{parentName:"li"},"h")," value as an evaluation function (h - heuristic)"),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"h(n)")," for node ",Object(n.b)("inlineCode",{parentName:"li"},"n")," is the estimated cost from ",Object(n.b)("inlineCode",{parentName:"li"},"n")," to a ",Object(n.b)("inlineCode",{parentName:"li"},"goal")," node"),Object(n.b)("li",{parentName:"ul"},"Eg for the Romania example we can use ",Object(n.b)("inlineCode",{parentName:"li"},"h(n)=SLD(n, Bucharest)")," = straight-line distance from ",Object(n.b)("inlineCode",{parentName:"li"},"n")," to Bucharest"),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"h")," value of a goal node is 0, i.e. ",Object(n.b)("inlineCode",{parentName:"li"},"h(goal)=0"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Properties")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Complete? As DFS - Yes in finite spaces (if ",Object(n.b)("inlineCode",{parentName:"li"},"m")," is finite) - No - fails in infinite spaces (can get stuck in a loop)"),Object(n.b)("li",{parentName:"ul"},"Optimal? No"),Object(n.b)("li",{parentName:"ul"},"Time? O(b^m) but good heauristic can give dramatic improvement"),Object(n.b)("li",{parentName:"ul"},"Space? O(b^m), keeps every node in memory")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/COMP3306-AI/2-Problem-Solving-And-Search.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-comp-3306-ai-2-problem-solving-and-search-md-b9c7d3c77d02aa2599e3.js.map