(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{SndN:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return b}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),o=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/EKS-In-Depth.md"}});var i={_frontmatter:l},c=o.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(c,r({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"eks-in-depth"},"EKS in Depth"),Object(n.b)("p",null,"This is more of a basic theory section to understand how EKS works."),Object(n.b)("h2",{id:"pricing"},"Pricing"),Object(n.b)("p",null,"USD$0.20 per hours for each EKS cluster you make. That's ~USD$144/month."),Object(n.b)("p",null,"You pay normally for all the other resources related to running your apps:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Worker nodes (EC2)"),Object(n.b)("li",{parentName:"ul"},"EBS volumes"),Object(n.b)("li",{parentName:"ul"},"Network traffic"),Object(n.b)("li",{parentName:"ul"},"Load balancers")),Object(n.b)("p",null,"Check online for if pricing ever changes."),Object(n.b)("h2",{id:"eks-control-place"},"EKS Control Place"),Object(n.b)("p",null,"The control plane sets up the cluster to be highly available (in 3 availability zones)."),Object(n.b)("p",null,"Each AZ will have a master node and etcd that is AWS managed. The workers nodes are what we supply."),Object(n.b)("p",null,"Our local ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl")," will talk directly to EKS."),Object(n.b)("h3",{id:"under-the-hood"},"Under the hood"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Under the hood",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548213794/eks-course/Screen_Shot_2019-01-23_at_2.22.40_pm.png"})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Single tenant (you do not share it with other customers)"),Object(n.b)("li",{parentName:"ul"},"Made of native AWS component (EC2, ELB, ASG, NLB, VPC)")),Object(n.b)("h2",{id:"eks-networking"},"EKS Networking"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Network",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548213958/eks-course/Screen_Shot_2019-01-23_at_2.25.49_pm.png"})),Object(n.b)("p",null,"Recommended to have:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Private subnets: containers all the worker nodes to have application deployed. Must be large CIDR."),Object(n.b)("li",{parentName:"ol"},"Public subnets: Will contain any internet-facing load balancer to expose the applications."),Object(n.b)("li",{parentName:"ol"},"The VPC must have DNS hostname and DNS resolution support, otherwise nodes can't register.")),Object(n.b)("h3",{id:"security-groups"},"Security groups"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Security groups explored",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548214249/eks-course/Screen_Shot_2019-01-23_at_2.30.35_pm.png"})),Object(n.b)("p",null,"You have 2 security groups: ",Object(n.b)("inlineCode",{parentName:"p"},"Control Plane")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Worker Nodes"),"."),Object(n.b)("p",null,"Read up on ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/freach/kubernetes-security-best-practice"}),"https://github.com/freach/kubernetes-security-best-practice"),"."),Object(n.b)("h3",{id:"eks-pod-networking"},"EKS Pod Networking"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Amazon VPC CNI plugin: each pod receivers 1 IP address (=ENI => Elastic Network Interface) in VPC."),Object(n.b)("li",{parentName:"ul"},"Pods have the same IP address inside the EKS cluster and outside of it."),Object(n.b)("li",{parentName:"ul"},"Subnet limitations: CIRD /24 is 254 IP, not enough to run a lot of pods. You'll need a way bigger CIDR. Recommended is a CIDR /18."),Object(n.b)("li",{parentName:"ul"},"EC2 limitations: limited to amount of ENI/IP addresses it can have. Based on the network types, AWS has documentation on EC2 limits for ENIs, IPv4s and IPv6s.")),Object(n.b)("p",null,"See ",Object(n.b)("a",r({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html"}),"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html")," for more information on ENI limits."),Object(n.b)("h3",{id:"network-security-with-calico"},"Network security with Calico"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Security groups allow all worker nodes to communicate to each other on any ports."),Object(n.b)("li",{parentName:"ul"},"This may be a problem if you want to segement applications, tenants or environments."),Object(n.b)("li",{parentName:"ul"},"You can use the Calico project instead of AWS Security Groups in this case."),Object(n.b)("li",{parentName:"ul"},"Network policies are directly assigned to pods (instead of worker nodes)."),Object(n.b)("li",{parentName:"ul"},"More granular.")),Object(n.b)("h3",{id:"iam-and-rbac-integration"},"IAM and RBAC Integration"),Object(n.b)("p",null,Object(n.b)("img",{alt:"IAM and RBAC in action",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548215421/eks-course/Screen_Shot_2019-01-23_at_2.50.02_pm.png"})),Object(n.b)("p",null,'Note: RBAC means "Role-Based-Access-Control".'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"When you talk to Kubernetes, authentication is held by IAM."),Object(n.b)("li",{parentName:"ul"},"Authorization is done by Kubernetes RBAC (native auth for K8s)."),Object(n.b)("li",{parentName:"ul"},"Done through collaboration between AWS and Heptio."),Object(n.b)("li",{parentName:"ul"},"You can assign RBAC directly through IAM entities."),Object(n.b)("li",{parentName:"ul"},"By default, the role you assign to your K8s cluster has system:master permissions.")),Object(n.b)("h3",{id:"k8s-worker-nodes"},"K8s Worker Nodes"),Object(n.b)("p",null,Object(n.b)("img",{alt:"K8s Worker Nodes",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548216415/eks-course/Screen_Shot_2019-01-23_at_3.06.44_pm.png"})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"When the join the cluster, they are assigned an IAM role and authorized in RBAC to join ",Object(n.b)("inlineCode",{parentName:"li"},"system:bootstrappers")," and ",Object(n.b)("inlineCode",{parentName:"li"},"system: nodes")," in your ConfigMap.")),Object(n.b)("p",null,"You can write your own rules in the ConfigMap."),Object(n.b)("h3",{id:"eks-load-balancers"},"EKS Load Balancers"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"EKS support ",Object(n.b)("inlineCode",{parentName:"li"},"Classic Load Balancer"),", ",Object(n.b)("inlineCode",{parentName:"li"},"Application Load Balancer")," and ",Object(n.b)("inlineCode",{parentName:"li"},"Network Load Balancer"),"."),Object(n.b)("li",{parentName:"ul"},"Classic and Network Load Balancer is for Service of type ",Object(n.b)("inlineCode",{parentName:"li"},"LoadBalancer"),"."),Object(n.b)("li",{parentName:"ul"},"Application Load Balancer is for Ingress Controller.")),Object(n.b)("h3",{id:"loadbalancer"},"LoadBalancer"),Object(n.b)("p",null,"Through the service of type ",Object(n.b)("inlineCode",{parentName:"p"},"LoadBalancer"),", EKS will create a:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Classic Load Balancer by default."),Object(n.b)("li",{parentName:"ul"},"Netword Load Balancer if this is specified: ",Object(n.b)("inlineCode",{parentName:"li"},"service.beta.kubernetes.io/aws-load-balancer-type:nlb"),"."),Object(n.b)("li",{parentName:"ul"},"There is also support for internal load balancers: ",Object(n.b)("inlineCode",{parentName:"li"},"service.beta.kubernetes.io//aws-load-balancer-internal:0.0.0.0/0"),"."),Object(n.b)("li",{parentName:"ul"},"You can control the configuration of LBs using annotations in your manifest."),Object(n.b)("li",{parentName:"ul"},"All documentation for ",Object(n.b)("inlineCode",{parentName:"li"},"LoadBalancer")," on AWS is diretly on the Kubernetes project."),Object(n.b)("li",{parentName:"ul"},"ALB Ingress is open source and found on GitHub."),Object(n.b)("li",{parentName:"ul"},"Supports target group of instance mode (hooked into NodePort)."),Object(n.b)("li",{parentName:"ul"},"Supports target group of IP mode (directly communicating with the pod)."),Object(n.b)("li",{parentName:"ul"},"Supports Application Load Balancer listener rules.")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/EKS-In-Depth.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-eks-in-depth-md-1eb5a83f3b0d40ad6a4b.js.map