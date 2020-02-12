(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{u0hm:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Chef/Chef-Udemy.md"}});var l={_frontmatter:i},r=o.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(r,c({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"chef---udemy-course"},"Chef - Udemy Course"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#chef---udemy-course"}),"Chef - Udemy Course"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#configuration-management"}),"Configuration Management")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#infrastructure-as-code"}),"Infrastructure as Code")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#your-first-chef-recipe"}),"Your First Chef Recipe")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#chef-resources"}),"Chef Resources")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#exploring-system-resources"}),"Exploring system resources")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#convergence-and-desired-state"}),"Convergence and Desired State")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#creating-an-exercise-work-station"}),'Creating an "Exercise Work Station"')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#organising-resources-with-ruby"}),"Organising Resources with Ruby")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#cookbooks"}),"Cookbooks"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#how-do-you-keep-track-of-changes-to-the-recipes"}),"How do you keep track of changes to the recipes?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#cookbook-components"}),"Cookbook Components")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#tracking-changes-to-the-cookbooks"}),"Tracking changes to the Cookbooks")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#setting-up-an-apache-cookbook"}),"Setting up an Apache Cookbook")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#chef-client"}),"Chef Client"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#include_recipe"}),"include_recipe")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#defaultrb-example"}),"default.rb example")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#ohai"}),"Ohai"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"#an-object-called-node"}),"An object called 'node'"))))))),Object(a.b)("h2",{id:"configuration-management"},"Configuration Management"),Object(a.b)("p",null,"Maintaining consistency for server integrity."),Object(a.b)("p",null,"The process of configuration can be automated by some extent. When you reach scale, this automation is at the heart of configuration management (IT orchetration)."),Object(a.b)("p",null,"Imagine we are deploying a web server. If we have a config management solution, this could take minutes instead of hours."),Object(a.b)("p",null,"System auditing will also be a hassle for disaster recovery too."),Object(a.b)("p",null,"Revision control systems can also be version controlled with ",Object(a.b)("inlineCode",{parentName:"p"},"infrastructure as code")," by having these environments scripted."),Object(a.b)("h2",{id:"infrastructure-as-code"},"Infrastructure as Code"),Object(a.b)("p",null,"Examples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"version control"),Object(a.b)("li",{parentName:"ul"},"testing")),Object(a.b)("p",null,"These all helps to validate infrastructure code."),Object(a.b)("p",null,"You can manage multiple cloud platforms etc."),Object(a.b)("p",null,"The three things covered:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"chef development kit"),Object(a.b)("li",{parentName:"ul"},"chef client"),Object(a.b)("li",{parentName:"ul"},"chef server")),Object(a.b)("p",null,"The Chef DK allows you to run local tools to write code and then upload it to a chef server. A node will be a server or machine managed by Chef."),Object(a.b)("p",null,"You will get the desired state from the ",Object(a.b)("inlineCode",{parentName:"p"},"cookbooks")," or ",Object(a.b)("inlineCode",{parentName:"p"},"recipes"),"."),Object(a.b)("h2",{id:"your-first-chef-recipe"},"Your First Chef Recipe"),Object(a.b)("p",null,"Create a new file ",Object(a.b)("inlineCode",{parentName:"p"},"hello.rb")," and add ",Object(a.b)("inlineCode",{parentName:"p"},"hello.txt")," with Hello World."),Object(a.b)("p",null,"First, give Chef a file."),Object(a.b)("p",null,"Inside of the file:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ruby"}),"file '/hello.txt' do\n    content 'Hello world!'\nend\n")),Object(a.b)("p",null,"Running ",Object(a.b)("inlineCode",{parentName:"p"},"sudo chef-client --client-mode hello.rb")," will then build that file and update the content."),Object(a.b)("h2",{id:"chef-resources"},"Chef Resources"),Object(a.b)("p",null,"Chef Resources are the fundamental building blocks of working with Chef."),Object(a.b)("p",null,"The aim is to build the load balancer."),Object(a.b)("p",null,"Resources describe the smallest piece we can configure in the system."),Object(a.b)("h2",{id:"exploring-system-resources"},"Exploring system resources"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example 1: Package Resource")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{}),"## Install the http package\npackage 'httd' do\n    action :install\nend\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example 2: Service Resource")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{}),"## Run the ntp service\nservice 'ntp' do\n    action [ :enable, :start ]\nend\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example 3: File Resource")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{}),"## Create the /etc/motd file\nfile 'etc/motd' do\n    content 'This computer is the property ...'\nend\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example 4: File Resource")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{}),"## Remove a file\nfile 'etc/php.ini.default' do\n    action :delete\nend\n")),Object(a.b)("p",null,"Looking back at the definition of a recipe. ",Object(a.b)("inlineCode",{parentName:"p"},"hello.rb")," was an example of a recipe file."),Object(a.b)("p",null,'The "type" (eg file, service, package) and "name" (filename, filepath) should be action\'d with "properties" (eg content \'Hello World!\'). When we list a resource, we take ',Object(a.b)("inlineCode",{parentName:"p"},"action")," on that resource (eg ",Object(a.b)("inlineCode",{parentName:"p"},"action :create"),", ",Object(a.b)("inlineCode",{parentName:"p"},"action :delete"),", ",Object(a.b)("inlineCode",{parentName:"p"},"action :enable"),"). The default action is taken if you do not list the action. The default is more of a ",Object(a.b)("inlineCode",{parentName:"p"},"create")," or ",Object(a.b)("inlineCode",{parentName:"p"},"install")," - it is important to know about what it is as you are writing out recipes."),Object(a.b)("h2",{id:"convergence-and-desired-state"},"Convergence and Desired State"),Object(a.b)("p",null,"With the command ",Object(a.b)("inlineCode",{parentName:"p"},"sudo chef-client --local-mode hello.rb"),", when we run ",Object(a.b)("inlineCode",{parentName:"p"},"--local-mode")," we did it because the default mode is to talk to a ",Object(a.b)("inlineCode",{parentName:"p"},"chef server"),". Once we have a Chef server to work with, we can not use this mode."),Object(a.b)("p",null,"What happens if you modify the content of the file that we create directly, what happens when Chef runs again?"),Object(a.b)("p",null,"Chef will then attempt to ",Object(a.b)("inlineCode",{parentName:"p"},"repair")," the file changes."),Object(a.b)("p",null,'If we change the ownership for a file, Chef will only take action when it needs to. It will only take action if something is "out of policy".'),Object(a.b)("h2",{id:"creating-an-exercise-work-station"},'Creating an "Exercise Work Station"'),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ruby"}),"# creating tree and ntp\npackage 'tree' do\n    action :install\nend\n\npackage 'ntp'\n\n# /etc/motd - content ownership\nfile '/etc/motd' do\n    content 'This is the property of me'\n    action :create\n    owner 'root'\n    group 'root'\nend\n")),Object(a.b)("p",null,"You can also build an array and pass it into a package resource, but if we do that we won't have access to things like versions etc."),Object(a.b)("p",null,"Then we can just run ",Object(a.b)("inlineCode",{parentName:"p"},"sudo chef-client -z setup.rb"),"."),Object(a.b)("p",null,"If we re-run the script, no actions will be taken if nothing needs to be modified."),Object(a.b)("h2",{id:"organising-resources-with-ruby"},"Organising Resources with Ruby"),Object(a.b)("p",null,"You can also call recipes from other recipes."),Object(a.b)("p",null,"Chef also runs the Ruby files synchronously."),Object(a.b)("h2",{id:"cookbooks"},"Cookbooks"),Object(a.b)("p",null,"Ways to group recipes and put them into useful configurations."),Object(a.b)("p",null,"Instead of a single recipe being sent to a server, we send a ",Object(a.b)("inlineCode",{parentName:"p"},"cookbook"),"."),Object(a.b)("h3",{id:"how-do-you-keep-track-of-changes-to-the-recipes"},"How do you keep track of changes to the recipes?"),Object(a.b)("p",null,"Cookbooks allow a way to package up the recipes and give it a version number and track changes."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"A fundamental unit of configuration and policy distribution")),Object(a.b)("p",null,"When creating the cookbook, is describes a config for a particular scenario."),Object(a.b)("p",null,"What to use cookbooks for:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Specifiy resources to use and in which order they are applied"),Object(a.b)("li",{parentName:"ul"},"Attribute values"),Object(a.b)("li",{parentName:"ul"},"File distributions"),Object(a.b)("li",{parentName:"ul"},"Templates"),Object(a.b)("li",{parentName:"ul"},"Extensions to Chef (lib, definitions and custom resources)"),Object(a.b)("li",{parentName:"ul"},"Version Control")),Object(a.b)("p",null,"Cookbook components:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"README"),Object(a.b)("li",{parentName:"ul"},"metadata"),Object(a.b)("li",{parentName:"ul"},"recipes"),Object(a.b)("li",{parentName:"ul"},"testing directories (spec + test)")),Object(a.b)("h3",{id:"cookbook-components"},"Cookbook Components"),Object(a.b)("p",null,"We can create cookbooks by using ",Object(a.b)("inlineCode",{parentName:"p"},"chef generate [cookbook|other]"),"."),Object(a.b)("p",null,"When we generate a cookbook, we should give the cookbook a relevant name. Example ",Object(a.b)("inlineCode",{parentName:"p"},"chef generate cookbooks/workstation")," to create a ",Object(a.b)("inlineCode",{parentName:"p"},"workstation")," book in the ",Object(a.b)("inlineCode",{parentName:"p"},"cookbooks")," folder."),Object(a.b)("h3",{id:"tracking-changes-to-the-cookbooks"},"Tracking changes to the Cookbooks"),Object(a.b)("p",null,"Inside of a single repository, changes are generally tracked for a single cook book."),Object(a.b)("h3",{id:"setting-up-an-apache-cookbook"},"Setting up an Apache Cookbook"),Object(a.b)("p",null,"First, create a new cookbook in the cookbooks foler using ",Object(a.b)("inlineCode",{parentName:"p"},"chef generate cookbook cookbooks/apache")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ruby"}),"# Server\n\n# 1. http package install (redhat)\npackage 'httpd' do\n    action :install\nend\n\n# 2. configure default apache server file /var/www/html\nfile '/var/www/html/index.html' do\n    content '<h1>Hello from Apache</h1>'\nend\n\n# 3. download apache, enable and start the apache service\npackage 'apache' do\n    action :install\nend\n\nservice 'httpd' do\n    action [ :enable, :start ]\nend\n")),Object(a.b)("h2",{id:"chef-client"},"Chef Client"),Object(a.b)("p",null,"How do we apply the recipes from the cookbooks from the Chef client? How do we call multiple recipes at once?"),Object(a.b)("p",null,"We can use a cook book to define the scenarios here."),Object(a.b)("p",null,"Say we want to call a cookbook from a particular recipe."),Object(a.b)("p",null,"We can also do ",Object(a.b)("inlineCode",{parentName:"p"},'sudo chef-client -z --runlist "recipe[cookbook::recipe]"')," to run a particular recipe."),Object(a.b)("p",null,"For running multiple cookbook recipes, we could do ",Object(a.b)("inlineCode",{parentName:"p"},'sudo chef-client -z --runlist "recipe[cookbook::recipe],recipe[another-cookbook::recipe]"'),". This will do a ",Object(a.b)("inlineCode",{parentName:"p"},"chef-client")," run in order."),Object(a.b)("p",null,"The runlist DOES NOT HAVE A SPACE between recipe declarations."),Object(a.b)("h3",{id:"include_recipe"},"include_recipe"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"include_recipe")," method allows you to include a recipe from either the online cookbook stores or from one of our own cookbooks."),Object(a.b)("p",null,"This is a great way to ",Object(a.b)("inlineCode",{parentName:"p"},"wrap")," cookbooks."),Object(a.b)("p",null,"Each of the cookbooks that we generate come with a ",Object(a.b)("inlineCode",{parentName:"p"},"default.rb")," recipe. This default recipe can help us call other recipes."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ruby"}),"# in the default.rb file for a recipe\n\n# example 'cookbook::recipe'\ninclude_recipe 'workstation::setup'\n")),Object(a.b)("p",null,"If we now run ",Object(a.b)("inlineCode",{parentName:"p"},'sudo chef-client -z -r "recipe[workstation]"')," and omit the specific recipe, then the ",Object(a.b)("inlineCode",{parentName:"p"},"default.rb")," recipe will be used."),Object(a.b)("h3",{id:"defaultrb-example"},"default.rb example"),Object(a.b)("p",null,"Including the server recipe from the apache cookbook."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ruby"}),"include_recipe 'apache::server'\n")),Object(a.b)("p",null,'Now we can call sudo chef-client -z -r "recipe',"[apache]",'"`.'),Object(a.b)("h2",{id:"ohai"},"Ohai"),Object(a.b)("p",null,"We need to think about distribution of the cookbooks to many different nodes."),Object(a.b)("p",null,"We may need to know a bit of information about that ",Object(a.b)("inlineCode",{parentName:"p"},"node"),". That's where ",Object(a.b)("inlineCode",{parentName:"p"},"ohai")," comes in."),Object(a.b)("h3",{id:"an-object-called-node"},"An object called 'node'"),Object(a.b)("p",null,"We can now begin to start thinking of scale - how to deal with 100s or 1000s or similar servers."),Object(a.b)("p",null,"This webserver code that we have could be distributed to thousands of nodes, but the config might need to be different on each of these nodes."),Object(a.b)("p",null,"What happens if a host specific config needs to be different? Eg. hostname, memory available, IP address etc. These things may very from system to system."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Ohai")," is a system discovery tool. It's a command line tool that is required by ",Object(a.b)("inlineCode",{parentName:"p"},"chef-client"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ohai")," gives back all the node system data in JSON. Everytime ",Object(a.b)("inlineCode",{parentName:"p"},"chef-client")," is run, it automatically executes an ",Object(a.b)("inlineCode",{parentName:"p"},"ohai")," and allows this object (known as the node object) to be accessed. We call these attributes available as ",Object(a.b)("inlineCode",{parentName:"p"},"node attributes"),". Each ",Object(a.b)("inlineCode",{parentName:"p"},"attribute")," also has ",Object(a.b)("inlineCode",{parentName:"p"},"sub-attributes"),"."))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Chef/Chef-Udemy.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-chef-chef-udemy-md-5af6c473e8cfc361c169.js.map