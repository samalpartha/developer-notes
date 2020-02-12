(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"./manual/AWS/AWS-Certified-SysOps-Administrator.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),o={},r="wrapper";function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)(r,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"aws-certified-sysops-administrator"},"AWS Certified SysOps Administrator"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"#aws-certified-sysops-administrator"}),"AWS Certified SysOps Administrator"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"#awssys-1-monitoring-metrics-and-analysis"}),"AWSSYS-1: Monitoring, Metrics and Analysis"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"#-----awssys-11-cloudwatch-intro"}),"---- AWSSYS-1.1: CloudWatch Intro")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"#-----awssys-12-ec2-status-troubleshooting"}),"---- AWSSYS-1.2: EC2 Status Troubleshooting")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"#awssys-5-opsworks"}),"AWSSYS-5: Opsworks"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"#-----awssys-51-opsworks-overview"}),"---- AWSSYS-5.1: Opsworks Overview")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"#-----awssys-52-setting-up-opsworks"}),"---- AWSSYS-5.2: Setting up Opsworks"))))))),Object(s.b)("h2",{id:"awssys-1-monitoring-metrics-and-analysis"},"AWSSYS-1: Monitoring, Metrics and Analysis"),Object(s.b)("h2",{id:"awssys-11-cloudwatch-intro"},"AWSSYS-1.1: CloudWatch Intro"),Object(s.b)("p",null,"It's a monitoring service to monitor the resources and what you run on AWS."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"EC2"),Object(s.b)("li",{parentName:"ul"},"DynamoDB"),Object(s.b)("li",{parentName:"ul"},"RDS DB instances etc"),Object(s.b)("li",{parentName:"ul"},"Log files")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Host Level metrics")),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"CPU"),Object(s.b)("li",{parentName:"ol"},"Network"),Object(s.b)("li",{parentName:"ol"},"Disk"),Object(s.b)("li",{parentName:"ol"},"Status Check")),Object(s.b)("p",null,"RAM utilisation is a custom metric. You need to write Perl script for this."),Object(s.b)("p",null,"By default, monitoring is 5 minutes. Detailed monitoring is 1 minute."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"How long are metrics stored?")),Object(s.b)("p",null,"By default, for 2 weeks. You can use the ",Object(s.b)("inlineCode",{parentName:"p"},"GetMetricsStatistics API")," or third party tools to have access to data for longer."),Object(s.b)("p",null,"You can retrieve data on terminated ELBs or instances for up to 2 weeks after it's termination."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Metric Granularity")),Object(s.b)("p",null,"Many default metrics are 1 minute, but it can be 3 or 5 too. The minimum that you can have it 1 minute."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Alarms")),Object(s.b)("p",null,"You can use this to monitor any metric. You can even use it for something like bills etc too."),Object(s.b)("p",null,"You can also set the appropriate action and thresholds."),Object(s.b)("h2",{id:"awssys-12-ec2-status-troubleshooting"},"AWSSYS-1.2: EC2 Status Troubleshooting"),Object(s.b)("p",null,"On the console, you can see the status check from the EC2 panel."),Object(s.b)("p",null,"There is a ",Object(s.b)("inlineCode",{parentName:"p"},"System Status Check")," or ",Object(s.b)("inlineCode",{parentName:"p"},"Instance Status Check"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"What is the difference?")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"System = physical host (the actual physical machine)"),Object(s.b)("li",{parentName:"ul"},"Instance = VM itself")),Object(s.b)("p",null,"Difference troubleshooting for the different status checks."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"System status checks")),Object(s.b)("p",null,"It will come up as an error if you have:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Loss of network connectivity"),Object(s.b)("li",{parentName:"ol"},"Loss of system power"),Object(s.b)("li",{parentName:"ol"},"Software issues on the physical host"),Object(s.b)("li",{parentName:"ol"},"Hardware issues on the physical host"),Object(s.b)("li",{parentName:"ol"},"Best way to resolve issues is to stop and then start the VM again")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Instance status checks")),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Failed system status checks"),Object(s.b)("li",{parentName:"ol"},"Exhausted memory"),Object(s.b)("li",{parentName:"ol"},"Misconfigured networking or startup configuration"),Object(s.b)("li",{parentName:"ol"},"Exhausted memory"),Object(s.b)("li",{parentName:"ol"},"Corrupted file system"),Object(s.b)("li",{parentName:"ol"},"Incompatible kernel"),Object(s.b)("li",{parentName:"ol"},"Best way to trouble shoot is by ",Object(s.b)("inlineCode",{parentName:"li"},"rebooting the instance")," or by making modifications in your operating system")),Object(s.b)("hr",null),Object(s.b)("h2",{id:"awssys-5-opsworks"},"AWSSYS-5: Opsworks"),Object(s.b)("h2",{id:"awssys-51-opsworks-overview"},"AWSSYS-5.1: Opsworks Overview"),Object(s.b)("p",null,"All these groups of related resources are known as a stack."),Object(s.b)("p",null,"A stack could be like a Route53 pointing to a load balancer that points to EC2 instances which all point to a DB server."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Amazon Definition")),Object(s.b)("p",null,"An app management service that helps you automate operational tasks using Chef. It gives you the flexibility to define the application architecture."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Layman Definition")),Object(s.b)("p",null,"Chef turns infrastructure into code. You can automate how you build, deploy and manage your infrastructure. Chef server stores all the recipes and the nodes will periodically polls Chef server to bring everything up to date."),Object(s.b)("p",null,"OpsWorks is a GUI to deploy and configure your infrastructure quickly. It consists of Stacks and Layers."),Object(s.b)("p",null,"A stack is a container (or group) of resources. A layer exists within a stack. When you create a layer, you use OpsWorks to configure that layer for you."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Layers")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"1 or more layers in a stack"),Object(s.b)("li",{parentName:"ul"},"An instance must be assigned to at least 1 layer"),Object(s.b)("li",{parentName:"ul"},"Which chef layers run are determined by the layer the instance belongs to"),Object(s.b)("li",{parentName:"ul"},"Preconfigured Layers include: - Applications - Databases - Load Balancers - Caching")),Object(s.b)("h2",{id:"awssys-52-setting-up-opsworks"},"AWSSYS-5.2: Setting up Opsworks"),Object(s.b)("p",null,"From the AWS dashboard, we're going to create a stack and bring up a webpage without having to SSH."),Object(s.b)("p",null,"Jump onto OpsWorks and add a stack. We can choose things like whether or not we want SSH access etc."),Object(s.b)("p",null,"After creating a stack, we will be brought back to the main screen. Now, let's create some layers!"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Layers")),Object(s.b)("p",null,"We can choose our types! We'll select PHP App Server for now. From here, you can add an instance."),Object(s.b)("p",null,"When adding, you can use existing OpsWorks to see how everything looks and use existing EC2 instances etc."),Object(s.b)("p",null,"Then you can select to start the instance and go from there."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Apps")),Object(s.b)("p",null,"In the apps section, set up a new app! You need to select the application source (eg git etc) and go from there."),Object(s.b)("p",null,"Once the app is live, we will push the app out to the instance."),Object(s.b)("p",null,"We can then click deploy and let the app deploy."),Object(s.b)("p",null,"Once it has been deployed, you can then see the app running in the browser."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Deleting")),Object(s.b)("p",null,"To teardown the stack, you need to stop the instance and apps first and then remove things like the layers from there."),Object(s.b)("p",null,"Also note, you also need to delete all of the security groups after and do it all manually (in the update, you can now do it by selecting the entire security group.)"),Object(s.b)("hr",null))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/AWS/AWS-Certified-SysOps-Administrator.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-aws-aws-certified-sys-ops-administrator.101a1afd2417ec7a4a77.js.map