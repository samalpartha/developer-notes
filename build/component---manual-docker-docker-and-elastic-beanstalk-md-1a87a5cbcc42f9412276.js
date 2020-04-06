(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{GUcp:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Docker/Docker-And-Elastic-Beanstalk.md"}});var l={_frontmatter:r},c=o.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"docker-and-elastic-beanstalk"},"Docker and Elastic Beanstalk"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#docker-and-elastic-beanstalk"}),"Docker and Elastic Beanstalk"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#docked-1-introduction"}),"DOCKED-1: Introduction"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#-----docked-11-syllabus"}),"---- DOCKED-1.1: Syllabus")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#-----docked-12-container-discussion"}),"---- DOCKED-1.2: Container Discussion")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#-----docked-13-container-architecture"}),"---- DOCKED-1.3: Container Architecture")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#-----docked-14-introduction-to-docker"}),"---- DOCKED-1.4: Introduction to Docker")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#-----docked-15-introduction-to-elastic-beanstalk"}),"---- DOCKED-1.5: Introduction to Elastic Beanstalk")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#docked-2-setup-and-config"}),"DOCKED-2: Setup and Config"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#-----docked-21-install-and-configure"}),"---- DOCKED-2.1: Install and Configure")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#-----docked-22-docker-command-line-basics"}),"---- DOCKED-2.2: Docker Command Line Basics")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#-----docked-23-installing-aws-cli-and-eb-cli-tools"}),"---- DOCKED-2.3: Installing AWS CLI and EB CLI Tools")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#-----docked-24-elastic-beanstalk-accounts-and-groups"}),"---- DOCKED-2.4: Elastic Beanstalk Accounts and Groups")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#docked-3-components-and-usage"}),"DOCKED-3: Components and Usage"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#-----docked-31-the-first-app-using-the-eb-wizard"}),"---- DOCKED-3.1: The First App Using the EB Wizard"))))))),Object(a.b)("h2",{id:"docked-1-introduction"},"DOCKED-1: Introduction"),Object(a.b)("h2",{id:"docked-11-syllabus"},"DOCKED-1.1: Syllabus"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"What is Elastic Beanstalk?"),Object(a.b)("li",{parentName:"ul"},"What is a container?"),Object(a.b)("li",{parentName:"ul"},"Container Architecture"),Object(a.b)("li",{parentName:"ul"},"Introduction to Docker")),Object(a.b)("p",null,"Docker itself is a wrapper around containers."),Object(a.b)("p",null,"It has managed to get containers to a point where it is reusable and consistent."),Object(a.b)("p",null,"We'll also..."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Install and configure Docker"),Object(a.b)("li",{parentName:"ul"},"The Docker Hub"),Object(a.b)("li",{parentName:"ul"},"Install the AWS CLI and EB CLI"),Object(a.b)("li",{parentName:"ul"},"Create an account and assign privileges"),Object(a.b)("li",{parentName:"ul"},"Configure the EB CLI"),Object(a.b)("li",{parentName:"ul"},"Verify the EB CLI")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Components and Usage")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Managing applications"),Object(a.b)("li",{parentName:"ul"},"Configure and Manage the Environment"),Object(a.b)("li",{parentName:"ul"},"Monitoring"),Object(a.b)("li",{parentName:"ul"},"AWS Integration"),Object(a.b)("li",{parentName:"ul"},"The Local Development Environment"),Object(a.b)("li",{parentName:"ul"},"Deploying with Docker")),Object(a.b)("h2",{id:"docked-12-container-discussion"},"DOCKED-1.2: Container Discussion"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"What is a container?")),Object(a.b)("p",null,"What is a virtual machine? A virtual machine is an emulation of a specific computer system type. They operate based on the architecture and functions of that real computer."),Object(a.b)("p",null,"The VM has to emulate the instruction of the machine that it is trying to support. There is a Hypervisor that sits between the hardware and the virtual machine. It handles the communication."),Object(a.b)("p",null,"So what is a container? It's an entirely isolated set of packages, libraries and applications that are completely separate from it's environment. Think of a lunch container on the table. What is the environment? How are they related? The container simply uses the table."),Object(a.b)("p",null,"Virtualization has become more granular that are virtual servers that are heavy on system requirements since they require the memory, CPU etc of a full OS."),Object(a.b)("p",null,"Containers are far more light weight. They used shared OS and the container only contains enough in it for the application to run and then relies on the OS hosting it for the rest of the hardware accessibility. This does mean that containers are essentially limited to Linux (at this time of writing)."),Object(a.b)("p",null,"While differences may seem suttle, you'll see the many differences between them throughout this article."),Object(a.b)("h2",{id:"docked-13-container-architecture"},"DOCKED-1.3: Container Architecture"),Object(a.b)("p",null,"How does Container Architecture relate to Docker? Docker and container are used synonymously, however they have been around far longer. Remember, Docker is a wrapper to how we use containers."),Object(a.b)("p",null,"Docker is a client/server application where both the daemon and the client can be run on the same system. You can have them split, but less usually."),Object(a.b)("p",null,"Docker clients and daemons communicate via sockets or through a RESTful API (xml file that has details for it)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Docker Main Components")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Daemon"),Object(a.b)("li",{parentName:"ul"},"Client"),Object(a.b)("li",{parentName:"ul"},"Docker io registery - local and remote (Docker Hub)")),Object(a.b)("p",null,"The container architecture is generic - nothing itself is related to Docker specifically. The Docker engine is not necessarily unique itself."),Object(a.b)("p",null,"You only need disk and CPU appropriate to the application and its libraries and binaries."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Containers vs VMs")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"VM")),Object(a.b)("p",null,"App A App A' App B\n| | |\n| | |\nBins/libs Bins/libs Bins/libs\n| | |\nGuest OS Guest OS Guest OS\n| | |\n| | |\n<--Hypervisor (type 2)--\x3e\n|\n|\n<--------Host OS--------\x3e\n|\n|\n<---------Server--------\x3e"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Container")),Object(a.b)("p",null,"Not separation between in the above image. Containers are isolated, but share OS (no guest OS) and where appropriate, share the bins/libs. Docker Engine replaces Hypervisor in that set up also."),Object(a.b)("p",null,"Containers do not virtualize hardware. They rest on top of a single Linux instance. This allows Docker (or generic LXC) to leave behind a lot of the bloat associated with a full hardware hypervisor."),Object(a.b)("p",null,"Don't mistake the Docker Engine (or the LXC process) as the equivalent of a hypervisor. It is simply the encapsulating process on the underlying system. It's a process, not a full blown hypervisor and does not have the overhead. Has this already been done? Yes, containers are not new in technology. Docker has made the most of it. It's also very similar to git in it's command line and config set up. Other examples as were Jails, Zones, LMCTFY, OpenVZ etc."),Object(a.b)("p",null,"Well, for VMs, do we need the guest OS? Depends on the architecture you are trying to run. For the containers, we have this lightweight Docker engine to help the communication between the app and the Host OS. We no longer have to do it through a guest OS."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Summary")),Object(a.b)("p",null,"The architecture of Docker and the containers that it relies on are not new concepts, having been around since the early part of this century. However, hardware virtualization performance has now become almost indistinguishable from bare metal so that further virtualization on the technology stack can be realized."),Object(a.b)("h2",{id:"docked-14-introduction-to-docker"},"DOCKED-1.4: Introduction to Docker"),Object(a.b)("p",null,"Now that we know what containers are, let's focus more on Docker."),Object(a.b)("p",null,'It\'s a tool that packages up an application and its dependencies in a "virtual container" so that it can be run on any Linux system or distribution.'),Object(a.b)("p",null,"To run it on Windows/OSX, you need a lightweight VM like Vagrant."),Object(a.b)("p",null,"For Docker, you will build an instance of an OS container. You can then distribute that system on anything that runs on a Linux kernel."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Why Docker?")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Configuration Simplification"),Object(a.b)("li",{parentName:"ul"},"Enhance Developer Productivity"),Object(a.b)("li",{parentName:"ul"},"Server Consolidation and management"),Object(a.b)("li",{parentName:"ul"},"Application isolation"),Object(a.b)("li",{parentName:"ul"},"Rapid Deployment"),Object(a.b)("li",{parentName:"ul"},"Build Management")),Object(a.b)("p",null,"You no longer have to worry about translating or re-compiling. You just have it run on that container on top of the OS."),Object(a.b)("p",null,"If you deploy this as just one image, and if there are any issues, you just take it off and deploy another."),Object(a.b)("p",null,"Build management therefore becomes easy."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Summary")),Object(a.b)("p",null,"Isolate applications, standardize the build and deployment process."),Object(a.b)("h2",{id:"docked-15-introduction-to-elastic-beanstalk"},"DOCKED-1.5: Introduction to Elastic Beanstalk"),Object(a.b)("p",null,"What is it? It's a service that allows the quick deployment and easy deployment of applications without getting bogged down with the infrastructure details."),Object(a.b)("p",null,"What is EBs workflow."),Object(a.b)("p",null,"Create Application\n|\n|\nUpload Version <-----\n| |\n| |\nLaunch Environment |\n| |\n| |\nManage Environment <-"),Object(a.b)("p",null,"It helps us automatically look after all of our AWS resources."),Object(a.b)("p",null,"Once an app is deployed, you get info about it. The app can be configured to use persistent storage etc or databases services or as part of another container."),Object(a.b)("p",null,"One of the best parts of it is, there are no additional charges for EB services. It simply uses other parts of the AWS resources and it is that which you pay for."),Object(a.b)("p",null,"Amazon has put a lot of emphasis on containers - especially with the wide adoption of Docker."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"docked-2-setup-and-config"},"DOCKED-2: Setup and Config"),Object(a.b)("h2",{id:"docked-21-install-and-configure"},"DOCKED-2.1: Install and Configure"),Object(a.b)("p",null,"Installing onto Ubuntu"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-shell"}),"# to search for results\nsudo apt-cache search dock\n\n# to download\nsudo apt-get install docker.io\n\n# to check status\nsudo service docker status\n\n# to find the docker.sock\nls -al var run\n\n# to add test user to the /etc group\nsudo usermod -a -G docker test\n\n#logout and log back in\nsu - test\n\n# hopefully this should work now - on Ubuntu, it creates the c group and docker groups and then ensure the file is owned by the docker group\n# we just have to run the usermod to add the users to the group\ndocker images\n")),Object(a.b)("p",null,"This will be all we need on the Ubuntu system installation for this course's purposes. Alternatively, check the ",Object(a.b)("inlineCode",{parentName:"p"},"Docker Deep Dive")," for more info."),Object(a.b)("h2",{id:"docked-22-docker-command-line-basics"},"DOCKED-2.2: Docker Command Line Basics"),Object(a.b)("p",null,"Docker is getting ready for Docker 2.0, however we are running 1.12.0 at the time of writing."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker images")," shows us the base images in our local repository that we can instantiate containers from. The image is a fully inclusive list of what is in the container."),Object(a.b)("p",null,"Everything is contained in the snapshots that can be committed to other images. Easier to see in action."),Object(a.b)("p",null,"To pull down latest copy of CentOS from as an example from with Ubuntu."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"docker pull centos:latest\n")),Object(a.b)("p",null,"We can also search through the Docker hub to check out what we can pull in."),Object(a.b)("p",null,"The image from a container stand point is what we need for the container to run. That will be why things like centos will be so small size compared to expectation."),Object(a.b)("p",null,"How do I create an instance from it?"),Object(a.b)("p",null,"This below will open up centos in the terminal running running a bash script"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"# -i interactive, -t terminal\ndocker run -it centos:latest /bin/bash\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"hint:")," ",Object(a.b)("inlineCode",{parentName:"p"},"docker ps")," will show you docker processes."),Object(a.b)("p",null,"When you actually within the container, you can start installing things and it runs it separately to your computer... It's running within the container!"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"exit")," will stop the container if we run it from the process."),Object(a.b)("p",null,"To see previous run containers, we can use ",Object(a.b)("inlineCode",{parentName:"p"},"docker ps -a")),Object(a.b)("p",null,"Another way to stop it from outside the container"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"docker stop [name]\n")),Object(a.b)("p",null,"You can also start, but it will start the process and not auto log you in. If you know the name you can log in using ",Object(a.b)("inlineCode",{parentName:"p"},"docker attach high_brattain")),Object(a.b)("p",null,"If you run the centos version again, it will start the image WITHOUT the installs, but we can create a new image from this!"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker commit high_brattain mylynx:centos")),Object(a.b)("p",null,"It will now take the container ID it gives back, and it will create a new image from this!"),Object(a.b)("p",null,"Now we can ",Object(a.b)("inlineCode",{parentName:"p"},"docker run -it mylynx:centos /bin/bash")),Object(a.b)("p",null,"To remove images:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"docker rmi mylynx:centos\n")),Object(a.b)("p",null,"If this image is required by others, it won't allow you to delete."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"rmi")," - remove image, ",Object(a.b)("inlineCode",{parentName:"p"},"rm")," - remove container."),Object(a.b)("p",null,"Once the dependent containers are gone, you can remove the images."),Object(a.b)("h2",{id:"docked-23-installing-aws-cli-and-eb-cli-tools"},"DOCKED-2.3: Installing AWS CLI and EB CLI Tools"),Object(a.b)("p",null,"Before we can start deploying, we need to set up the command line interfaces for AWS and EB."),Object(a.b)("p",null,"You need pip (Python package service) in order to have AWS CLI run."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"which pip")," to ensure things are installed."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sudo pip install awscli")," to install AWS."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sudo pip install awsebcli")," to install EB."),Object(a.b)("p",null,"For Mac, ",Object(a.b)("inlineCode",{parentName:"p"},"brew install"),"."),Object(a.b)("h2",{id:"docked-24-elastic-beanstalk-accounts-and-groups"},"DOCKED-2.4: Elastic Beanstalk Accounts and Groups"),Object(a.b)("p",null,"We need to now create a security group associated with beanstalk. We can do this from the AWS console using IAM."),Object(a.b)("p",null,"From an enterprise perspective, ensure that you aren't installing using root. Ensure you set the alias and create a user. In this case, it's probably more important to create a role. Give ",Object(a.b)("inlineCode",{parentName:"p"},"administrator access")," for this role."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"docked-3-components-and-usage"},"DOCKED-3: Components and Usage"),Object(a.b)("h2",{id:"docked-31-the-first-app-using-the-eb-wizard"},"DOCKED-3.1: The First App Using the EB Wizard"),Object(a.b)("p",null,"It will launch EC2, ELBs etc and can take up to 5-10 minutes to launch a full environment."),Object(a.b)("p",null,"In the console under Elastic Beanstalk, you will select Docker."),Object(a.b)("p",null,"This will deploy a sample application."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Docker/Docker-And-Elastic-Beanstalk.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-docker-docker-and-elastic-beanstalk-md-1a87a5cbcc42f9412276.js.map