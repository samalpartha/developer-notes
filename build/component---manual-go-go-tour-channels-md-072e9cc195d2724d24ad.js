(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{MSkx:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),c=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Go/Go-Tour-Channels.md"}});var r={_frontmatter:i},o=c.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,c={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,["components"]);return Object(a.b)(o,l({},r,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"go-tour-channels"},"Go Tour Channels"),Object(a.b)("p",null,"Channels are a typed conduit through which you can send and receive values with the channel operator, <-."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),"ch <- v    // Send v to channel ch.\nv := <-ch  // Receive from ch, and\n           // assign value to v.\n")),Object(a.b)("p",null,"(The data flows in the direction of the arrow.)"),Object(a.b)("p",null,"Like maps and slices, channels must be created before use:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),"ch := make(chan int)\n")),Object(a.b)("p",null,"By default, sends and receives block until the other side is ready. This allows goroutines to synchronize without explicit locks or condition variables."),Object(a.b)("p",null,"The example code sums the numbers in a slice, distributing the work between two goroutines. Once both goroutines have completed their computation, it calculates the final result."),Object(a.b)("h2",{id:"basic-example"},"Basic Example"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport "fmt"\n\nfunc sum(s []int, c chan int) {\n    fmt.Println("%v", s)\n    sum := 0\n    for _, v := range s {\n        sum += v\n    }\n    c <- sum // send sum to c\n}\n\nfunc main() {\n    s := []int{7, 2, 8, -9, 4, 0}\n\n    c := make(chan int)\n    go sum(s[:len(s)/2], c)\n    go sum(s[len(s)/2:], c)\n    x, y := <-c, <-c // receive from c\n\n    fmt.Println(x, y, x+y)\n}\n')),Object(a.b)("p",null,"Prints:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"%v [-9 4 0]\n%v [7 2 8]\n-5 17 12\n")),Object(a.b)("h2",{id:"buffered-channels"},"Buffered Channels"),Object(a.b)("p",null,"Channels can be buffered. Provide the buffer length as the second argument to make to initialize a buffered channel:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),"ch := make(chan int, 100)\n")),Object(a.b)("p",null,"Sends to a buffered channel block only when the buffer is full. Receives block when the buffer is empty."),Object(a.b)("p",null,"If you overflow the buffer, you'll be hit with a ",Object(a.b)("inlineCode",{parentName:"p"},"deadlock")," error."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport "fmt"\n\nfunc main() {\n    ch := make(chan int, 2)\n    ch <- 1\n    ch <- 2\n    fmt.Println(<-ch)\n    fmt.Println(<-ch)\n}\n')),Object(a.b)("h2",{id:"range-and-close"},"Range and Close"),Object(a.b)("p",null,"A sender can close a channel to indicate that no more values will be sent. Receivers can test whether a channel has been closed by assigning a second parameter to the receive expression: after"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),"v, ok := <-ch\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ok")," is false if there are no more values to receive and the channel is closed."),Object(a.b)("p",null,"The loop for ",Object(a.b)("inlineCode",{parentName:"p"},"i := range c")," receives values from the channel repeatedly until it is closed."),Object(a.b)("p",null,"Note: Only the sender should close a channel, never the receiver. Sending on a closed channel will cause a panic."),Object(a.b)("p",null,"Another note: Channels aren't like files; you don't usually need to close them. Closing is only necessary when the receiver must be told there are no more values coming, such as to terminate a range loop."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport (\n    "fmt"\n)\n\nfunc fibonacci(n int, c chan int) {\n    x, y := 0, 1\n    for i := 0; i < n; i++ {\n        c <- x\n        x, y = y, x+y\n    }\n    close(c)\n}\n\nfunc main() {\n    c := make(chan int, 10)\n    go fibonacci(cap(c), c)\n    for i := range c {\n        fmt.Println(i)\n    }\n}\n')),Object(a.b)("p",null,"This prints:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"0\n1\n1\n2\n3\n5\n8\n13\n21\n34\n")),Object(a.b)("h2",{id:"select"},"Select"),Object(a.b)("p",null,"The select statement lets a goroutine wait on multiple communication operations."),Object(a.b)("p",null,"A select blocks until one of its cases can run, then it executes that case. It chooses one at random if multiple are ready."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport "fmt"\n\nfunc fibonacci(c, quit chan int) {\n    x, y := 0, 1\n    for {\n        select {\n        case c <- x:\n            x, y = y, x+y\n        case <-quit:\n            fmt.Println("quit")\n            return\n        }\n    }\n}\n\nfunc main() {\n    c := make(chan int)\n    quit := make(chan int)\n    go func() {\n        for i := 0; i < 10; i++ {\n            fmt.Println(<-c)\n        }\n        quit <- 0\n    }()\n    fibonacci(c, quit)\n}\n')),Object(a.b)("p",null,"After looping through in the IIFE ",Object(a.b)("inlineCode",{parentName:"p"},"go func"),", it will send a 0 to the ",Object(a.b)("inlineCode",{parentName:"p"},"quit")," channel and ",Object(a.b)("inlineCode",{parentName:"p"},"select"),' will handle by printing "quit" and returning from the infinite ',Object(a.b)("inlineCode",{parentName:"p"},"for")," loop."),Object(a.b)("h2",{id:"default-selection"},"Default Selection"),Object(a.b)("p",null,"The default case in a select is run if no other case is ready."),Object(a.b)("p",null,"Use a default case to try a send or receive without blocking:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),"select {\ncase i := <-c:\n    // use i\ndefault:\n    // receiving from c would block\n}\n")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc main() {\n    tick := time.Tick(100 * time.Millisecond)\n    boom := time.After(500 * time.Millisecond)\n    for {\n        select {\n        case <-tick:\n            fmt.Println("tick.")\n        case <-boom:\n            fmt.Println("BOOM!")\n            return\n        default:\n            fmt.Println("    .")\n            time.Sleep(50 * time.Millisecond)\n        }\n    }\n}\n')),Object(a.b)("h2",{id:"example-equivalent-binary-trees"},"Example: Equivalent Binary Trees"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport (\n  "golang.org/x/tour/tree"\n  "fmt"\n)\n\n// Walk walks the tree t sending all values\n// from the tree to the channel ch.\nfunc Walk(t *tree.Tree, ch chan int) {\n    defer close(ch) // <- closes the channel when this function returns\n  var walk func(t *tree.Tree)\n  walk = func(t *tree.Tree) {\n      if t == nil {\n          return\n      }\n      walk(t.Left)\n      ch <- t.Value\n      walk(t.Right)\n  }\n  walk(t)\n}\n\n// Same determines whether the trees\n// t1 and t2 contain the same values.\nfunc Same(t1, t2 *tree.Tree) bool {\n    done := make (chan bool)\n    defer close(done)\n\n    ch1 := make(chan int)\n    ch2 := make(chan int)\n    go Walk(t1, ch1)\n    go Walk(t2, ch2)\n\n    go func() {\n        for i := range ch1 {\n            j := <-ch2\n            fmt.Println("i: %v", i)\n            fmt.Println("j: %v", j)\n\n            if i != j {\n                done <- false\n            }\n        }\n        done <- true\n    }()\n    return <-done\n}\n\nfunc main() {\n    ch := make(chan int)\n    go Walk(tree.New(1), ch)\n\n    for i := 1; i <= 10; i++ {\n        fmt.Println(<-ch)\n    }\n\n    t1 := tree.New(1)\n    t2 := tree.New(2)\n\n    res1 := Same(t1, t1)\n    fmt.Println("Res 1: %v", res1)\n\n    res2 := Same(t1, t2)\n    fmt.Println("Res 2: %v", res2)\n}\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Go/Go-Tour-Channels.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-go-go-tour-channels-md-072e9cc195d2724d24ad.js.map