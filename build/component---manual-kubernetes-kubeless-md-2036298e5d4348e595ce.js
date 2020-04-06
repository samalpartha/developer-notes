(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{NW58:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return i}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var s=t("/FXl"),a=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/Kubeless.md"}});var r={_frontmatter:l},u=a.a;function i(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(s.b)(u,o({},r,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"6-serverless-on-kubernetes"},"6. Serverless on Kubernetes"),Object(s.b)("p",null,"With the serverless products, you don't need to manage the underlying functions. It can also greatly reduce costs."),Object(s.b)("p",null,"Great for not worrying about many operational aspects."),Object(s.b)("p",null,"You can also use functions to start applications on Kubernetes instead of containers. You can install and use any of the projects to let developers launch functions on your Kubernetes cluster."),Object(s.b)("h2",{id:"61-intro-to-kubeless"},"6.1 Intro to Kubeless"),Object(s.b)("p",null,"This is a Kubernetes-native framework. It leverages Kubernetes resource to provide auto-scaling, API routing, monitoring and more."),Object(s.b)("p",null,"It uses ",Object(s.b)("strong",{parentName:"p"},"Customer Resource Definitions")," to be able to create functions."),Object(s.b)("p",null,"You deploy a function with your preferred language. Once you deploy, you need to determine how it will be triggered."),Object(s.b)("h2",{id:"62-creating-functions-on-kubeless"},"6.2 Creating functions on Kubeless"),Object(s.b)("h3",{id:"installing-the-cli"},"Installing the CLI"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ wget https://github.com/kubeless/kubeless/releases/download/v1.0.0-alpha.8/kubeless_linux-amd64.zip\n$ sudo apt-get install unzip # if you need to unzip\n$ unzip kubeless_linux-amd64.zip\n$ sudo mv bundles/kubeless_linux-amd64/kubeless /usr/local/bin\n$ rm -r bundles/\n")),Object(s.b)("h3",{id:"deploy-kubeless"},"Deploy kubeless"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ kubectl create ns kubeless\n$ kubectl create -f https://github.com/kubeless/kubeless/releases/download/v1.0.0-alpha.8/kubeless-v1.0.0-alpha.8.yaml\n")),Object(s.b)("h3",{id:"deploy-function-on-kubernetes"},"Deploy function on Kubernetes"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{className:"language-bash"}),"kubeless function deploy myfunc --runtime nodejs6 --dependencies node-example/package.json --handler test.myfunction --from-file node-example/example.js\n")),Object(s.b)("h4",{id:"useful-functions"},"Useful functions"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{className:"language-bash"}),"# List function\n$ kubeless function ls\n# Call function\n$ kubeless function call myfunction --data 'this is some data'\n# Expose function\n$ kubectl create -f nginx-ingress-controller-with-elb.yml\n# Linking the function to the ingress controller\n$ kubeless trigger http create myfunction --function-name myfunction --hostname myfunction.domain.name\n")),Object(s.b)("h3",{id:"usage-with-kafka"},"Usage with Kafka"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{className:"language-bash"}),'# Kafka installation\nexport RELEASE=$(curl -s https://api.github.com/repos/kubeless/kafka-trigger/releases/latest | grep tag_name | cut -d \'"\' -f 4)\nkubectl create -f https://github.com/kubeless/kafka-trigger/releases/download/$RELEASE/kafka-zookeeper-$RELEASE.yaml\n\n# Trigger and publish\nkubeless trigger kafka create test --function-selector created-by=kubeless,function=uppercase --trigger-topic uppercase\nkubeless topic publish --topic uppercase --data "this message will be converted to uppercase"\n')))}i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/Kubeless.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-kubeless-md-2036298e5d4348e595ce.js.map