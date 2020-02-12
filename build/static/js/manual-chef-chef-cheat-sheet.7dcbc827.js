(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"./manual/Chef/chef-cheat-sheet.md":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return i});var a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),r={},l="wrapper";function i(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)(l,Object.assign({},r,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"chef-cheat-sheet"},"Chef Cheat Sheet"),Object(n.b)("h2",{id:"chef-terms"},"Chef Terms"),Object(n.b)("p",null,"action :periodic\naction :delete\naction :create \t\t// default\naction :install\t\t// also default\naction ","[:enable, :start]","\naction ","[:stop, :disable]"),Object(n.b)("p",null,"Verify apache is running:\ncurl -I localhost"),Object(n.b)("h2",{id:"online-learnchefio"},"Online learn.chef.io"),Object(n.b)("p",null,"Chef helps you express your infrastructure policy \u2013 how your software is delivered and maintained on your servers \u2013 as code. When infrastructure is code, it becomes more maintainable, versionable, testable, and collaborative."),Object(n.b)("p",null,"A great way to get started with Chef is to log in to a server, or node, and configure it directly."),Object(n.b)("p",null,"What the following should provide us:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"describe what happens when Chef runs."),Object(n.b)("li",{parentName:"ul"},"write Chef code that defines a basic policy."),Object(n.b)("li",{parentName:"ul"},"apply that policy to a server.")),Object(n.b)("p",null,"In the next step, you'll install the Chef tools and a text editor on your own machine, or use a virtual machine in the cloud that we provide that already has everything set up. You'll use that machine in the lessons that follow."),Object(n.b)("p",null,"The normal Chef workflow involves managing servers remotely from your workstation. But in this tutorial, you'll log in to a server and manage it directly to get a feel for how Chef works."),Object(n.b)("p",null,"The easiest way to get started is to use a free trial Ubuntu 14.04 virtual machine that we provide. The virtual machine runs in your browser and has the set of Chef tools, called the Chef DK, and several popular text editors pre-installed. You can also set up your own server to use with this tutorial."),Object(n.b)("p",null,Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://learn.chef.io/learn-the-basics/ubuntu/set-up-your-own-server/"}),"link")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Set up a work directory after this is set up")),Object(n.b)("p",null,"mkdir ~/chef-repo\ncd ~/chef-repo"),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Create the MOTD file")),Object(n.b)("p",null,"In this step, you'll first create the file and set the initial MOTD. To keep things basic, you'll configure the file in the /tmp directory."),Object(n.b)("p",null,"Next, you'll write what's called a recipe to describe the desired state of the MOTD file. Then you'll run chef-client, the program that applies your Chef code to place your system in the desired state. Typically, chef-client downloads and runs the latest Chef code from the Chef server, but in this lesson, you'll run chef-client in what's called local mode to apply Chef code that exists locally on your virtual machine."),Object(n.b)("p",null,"From your ~/chef-repo directory, create a file named hello.rb, add these contents, and then save the file."),Object(n.b)("p",null,"// in hello.rb"),Object(n.b)("p",null,"file '/tmp/motd' do\ncontent 'hello world'\nend"),Object(n.b)("p",null,"// from the terminal window, run the chef-client command to apply what you have written"),Object(n.b)("p",null,"chef-client --local-mode hello.rb"),Object(n.b)("p",null,"The output will tell us that a new file /tmp/motd was created\n(The warnings will relate to concepts we haven't covered just yet)"),Object(n.b)("p",null,"Now verify that the file was written. Run the more command, which prints a file to the console."),Object(n.b)("p",null,"more /tmp/motd"),Object(n.b)("p",null,"What happens if you run the command a second time?"),Object(n.b)("p",null,"chef-client --local-mode hello.rb"),Object(n.b)("p",null,"It gives a different response, letting us know that the file is already up to date.\nThis is beause Chef applies the configuration only when it needs to."),Object(n.b)("p",null,"Chef looks at the current configuration state and applies the action only if the current state doesn't match the desired state. Here, Chef doesn't create or modify /tmp/motd because it already exists and its contents didn't change.\nWe call this approach \"test and repair\"."),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"MODIFY THE MOTD FILE'S CONTENTS")),Object(n.b)("p",null,"// in hello.rb"),Object(n.b)("p",null,"file '/tmp/motd' do\ncontent 'hello chef'\nend"),Object(n.b)("p",null,"chef-client --local-mode hello.rb"),Object(n.b)("p",null,"This time Chef applies the action and shows the difference because you've changed the desired state of the file"),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},"Ensure the MOTD file's contents are not changed by anyone else")),Object(n.b)("p",null,"echo 'hello robots' > /tmp/motd"),Object(n.b)("p",null,"chef-client --local-mode hello.rb"),Object(n.b)("p",null,"// the chef client ensures that the changes aren't kept and the original configuration is restored"),Object(n.b)("p",null,"In practice, it's common to configure chef-client to act as a service that runs periodically or in response to an event, such as a commit to source control. Running Chef through automation helps to ensure that your servers remain configured as you expect and also enables them to be reconfigured when you need them to be."),Object(n.b)("ol",{start:5},Object(n.b)("li",{parentName:"ol"},"Delete the MOTD file")),Object(n.b)("p",null,"in the ~/chef-repo directory, create a new file named goodbye.rb and save the following..."),Object(n.b)("p",null,"// goodbye.rb"),Object(n.b)("p",null,"file 'tmp/motd' do\naction :delete\nend"),Object(n.b)("p",null,"chef-client --local-mode goodbye.rb"),Object(n.b)("p",null,"more /tmp/motd // gives No such file or directory"),Object(n.b)("p",null,"Summary"),Object(n.b)("p",null,"You ran a few basic Chef commands and got a flavor of what Chef can do. You learned that a resource describes one part of the system and its desired state. You worked with a file, which is one kind of resource."),Object(n.b)("p",null,"** Resources describe the what, not the how"),Object(n.b)("p",null,"A recipe is a file that holds one or more resources. Each resource declares what state a part of the system should be in, but not how to get there. Chef handles these complexities for you."),Object(n.b)("p",null,"In this lesson, you declared that the file /tmp/motd must exist and what its contents are, but you didn't specify how to create or write to the file. This layer of abstraction can not only make you more productive, but it can also make your work more portable across platforms."),Object(n.b)("p",null,"** Resources have actions"),Object(n.b)("p",null,"When you deleted the file, you saw the :delete action."),Object(n.b)("p",null,"Think of an action as the process that achieves the desired configuration state. Every resource in Chef has a default action, and it's often the most common affirmative one \u2013 for example, create a file, install a package, and start a service."),Object(n.b)("p",null,"When we created the file we didn't specify the :create action because :create is the default. But of course you can specify it if you want."),Object(n.b)("p",null,"The documentation for each resource type, file for example, explains the type's default action."),Object(n.b)("p",null,"** Recipes organize resources"),Object(n.b)("p",null,"In Chef, hello.rb is an example of a recipe, or an ordered series of configuration states. A recipe typically contains related states, such as everything needed to configure a web server, database server, or a load balancer."),Object(n.b)("p",null,"Our recipe states everything we need to manage the MOTD file. You used chef-client in local mode to apply that recipe from the command line."),Object(n.b)("h1",{id:"configure-a-package-or-service"},"Configure a package or service"),Object(n.b)("p",null,"Let's extend what you learned about file management in the previous lesson to manage the Apache HTTP Server package and its service."),Object(n.b)("p",null,"Of course, you can set up one web server manually. But with Chef it'll be easier to manage your infrastructure as you scale, add complexity, and roll out new configuration policies."),Object(n.b)("h2",{id:"1-ensure-the-apt-cache-is-up-to-date"},"1. Ensure the apt cache is up to date"),Object(n.b)("p",null,"In this part you'll configure Apache. Because we want to install the latest version of Apache, it's important to ensure that your system's package index contains the latest list of what packages are available."),Object(n.b)("p",null,"You could run the apt-get update command manually when you bring up your instance. But over time, you would need to remember to periodically update the apt cache to get the latest updates. Chef provides the apt_update resource to automate the process."),Object(n.b)("p",null,"From your ~/chef-repo directory, add this code to a file named webserver.rb"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," webserver.rb ")),Object(n.b)("p",null,"apt_update 'Update the apt cache daily' do\nfrequency 86_400\naction :periodic\nend"),Object(n.b)("p",null,"In a production environment, you might run Chef periodically to ensure your systems are kept up to date. As an example, you might run Chef multiple times in a day. However, you likely don't need to update the apt cache every time you run Chef. The frequency property specifies how often to update the apt cache (in seconds.) Here, we specify 86,400 seconds to update the cache once every 24 hours. (The _ notation is a Ruby convention that helps make numeric values more readable.)"),Object(n.b)("p",null,"The :periodic action means that the update occurs periodically. Another option would be to use the :update action to update the apt cache each time Chef runs."),Object(n.b)("h2",{id:"2-install-the-apache-package"},"2. Install the Apache package"),Object(n.b)("p",null,"Now let's install the Apache package, apache2. Modify webserver.rb to look like this."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," webserver.rb ")),Object(n.b)("p",null,"apt_update 'Update the apt cache daily' do\nfrequency 86_400\naction :periodic\nend"),Object(n.b)("p",null,"package 'apache2'"),Object(n.b)("p",null,"To apply the recipe..."),Object(n.b)("p",null,"sudo chef-client --local-mode webserver.rb"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"if you run it a second time it will know it is not time to update etc")),Object(n.b)("h2",{id:"3-start-and-enable-the-apache-service"},"3. Start and enable the Apache service"),Object(n.b)("p",null,"Now let's first enable the Apache service when the server boots and then start the service. Modify webserver.rb to look like this."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," webserver.rb ")),Object(n.b)("p",null,"apt_update 'Update the apt cache daily' do\nfrequency 86_400\naction :periodic\nend"),Object(n.b)("p",null,"package 'apache2'"),Object(n.b)("p",null,"service 'apache2' do\nsupports :status => true\naction ","[:enable, :start]","\nend"),Object(n.b)("p",null,"Ubuntu 14.04 provides two init systems. The supports :status => true part tells Chef that the apache2 init script supports the status message. This information helps Chef use the appropriate strategy to determine if the apache2 service is running. If you're interested, read ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://blog.chef.io/2014/09/18/chef-where-is-my-ubuntu-14-04-service-support/"}),"this blog post")," for more information."),Object(n.b)("p",null,"Apply it with main command."),Object(n.b)("p",null,"The package will already be installed, so there will be nothing to do."),Object(n.b)("h2",{id:"4-add-a-home-page"},"4. Add a home page"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," webserver.rb ")),Object(n.b)("p",null,"apt_update 'Update the apt cache daily' do\nfrequency 86_400\naction :periodic\nend"),Object(n.b)("p",null,"package 'apache2'"),Object(n.b)("p",null,"service 'apache2' do\nsupports :status => true\naction ","[:enable, :start]","\nend"),Object(n.b)("p",null,"file '/var/www/html/index.html' do\ncontent '<html"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),"<body>\n    <h1>hello world</h1>\n</body>\n")),Object(n.b)("p",null,"end"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"from here, the website should be running")),Object(n.b)("h2",{id:"5-confirm-your-web-site-is-running"},"5. Confirm your web site is running"),Object(n.b)("p",null,"curl localhost\n// shows the data back"),Object(n.b)("h3",{id:"summary"},"Summary"),Object(n.b)("p",null,"You saw how to work with the package and service resources. You now know how to work with four types of resources: file, apt_update, package, and service."),Object(n.b)("p",null,"You also saw how to apply multiple actions. But how does Chef know what order to apply resources and actions?"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Chef works in the order you specify")),Object(n.b)("h1",{id:"make-your-recipe-more-manageable"},"Make your recipe more manageable"),Object(n.b)("p",null,"A cookbook provides structure to your recipes and enables you to more easily reference external files, such as our web server's home page. In essence, a cookbook helps you stay organized."),Object(n.b)("p",null,"Let's create a cookbook to make our web server recipe easier to manage."),Object(n.b)("h2",{id:"1-create-a-cookbook"},"1. Create a cookbook"),Object(n.b)("p",null,"First, from ~/chef-repo"),Object(n.b)("p",null,"mkdir cookbooks\ncd cookbooks"),Object(n.b)("p",null,"chef generate cookbook learn_chef_apache2"),Object(n.b)("p",null,"Note the default recipe, named default.rb. This is where we'll move our Apache recipe in a moment."),Object(n.b)("h2",{id:"2-create-a-template"},"2. Create a template"),Object(n.b)("p",null,"chef generate template learn_chef_apache2 index.html"),Object(n.b)("p",null,"The file index.html.erb get created under learn_chef_apache2/templates/default"),Object(n.b)("p",null,"We can now move our html files to here"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"}," NOTE "))," Here, you're adding the web site content directly to your cookbook for learning purposes. In practice, your web site content would more likely be some build artifact, for example a .zip file on your build server. With Chef, you could pull updated web content from your build server and deploy it to your web server."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Write our default.rb ")),Object(n.b)("p",null,"apt_update 'Update the apt cache daily' do\nfrequency 86_400\naction :periodic\nend"),Object(n.b)("p",null,"package 'apache2'"),Object(n.b)("p",null,"service 'apache2' do\nsupports :status => true\naction ","[:enable, :start]","\nend"),Object(n.b)("p",null,"template '/var/www/html/index.html' do\nsource 'index.html.erb'\nend"),Object(n.b)("h2",{id:"4-run-the-cookbook"},"4. Run the cookbook"),Object(n.b)("p",null,"sudo chef-client --local-mode --runlist 'recipe","[learn_chef_apache2]","'"),Object(n.b)("p",null,"in this example, recipe","[learn_chef_apache2]"," is the same as specifying recipe","[learn_chef_apache2::default]",", meaning we want to run the learn_chef_apache2 cookbook's default recipe, default.rb"),Object(n.b)("p",null,"curl localhost"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"again this will confirm our website")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Summary ")),Object(n.b)("p",null,"Your web server is shaping up! With a cookbook you're now better organized. A cookbook adds structure to your work. You can now author your HTML code in its own file and use a template resource to reference it from your recipe."),Object(n.b)("p",null,"You also saw the run-list. The run-list lets you specify which recipes to run, and the order in which to run them. This is handy once you have lots of cookbooks, and the order in which they run is important."),Object(n.b)("p",null,"Keep in mind that the web server cookbook you wrote in this lesson likely won't be the one you'd use in production. Only you know the specific needs for your infrastructure. You bring your requirements and Chef provides the tools that help you meet them."),Object(n.b)("h1",{id:"managing-a-node"},"Managing a node"),Object(n.b)("h2",{id:"manage-a-ubuntu-node"},"Manage a Ubuntu node"),Object(n.b)("p",null,"Chef is comprised of 3 elements:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Your Workstation"),Object(n.b)("li",{parentName:"ol"},"A Chef server"),Object(n.b)("li",{parentName:"ol"},"Nodes")),Object(n.b)("p",null,"Chef server acts as a central repository for your cookbooks as well as for information about every node it manages. For example, the Chef server knows a node's fully qualified domain name (FQDN) and its platform."),Object(n.b)("p",null,"A node is any computer that is managed by a Chef server. Every node has the Chef client installed on it. The Chef client talks to the Chef server. A node can be any physical or virtual machine in your network"),Object(n.b)("h2",{id:"set-up-your-chef-server"},"Set up your Chef Server"),Object(n.b)("p",null,"Chef server acts as a central repository for your cookbooks as well as for information about every node it manages.\nThe knife command enables you to communicate with the Chef server from your workstation."),Object(n.b)("p",null,"There are two ways to work with a Chef server."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Install an instance on your own infrastructure."),Object(n.b)("li",{parentName:"ol"},"Sign up for hosted Chef and let us host it for you")),Object(n.b)("p",null,"In production, the decision to use hosted Chef or manage your own Chef server depends on your organization's requirements and preferences. If you're interested in setting up your own Chef server, we recommend that you first complete this tutorial using hosted Chef. Then you can follow the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://learn.chef.io/install-and-manage-your-own-chef-server/linux/"}),"Install and manage your own Chef server")," tutorial to set up a Chef server in your environment.."),Object(n.b)("h2",{id:"configure-your-workstation-to-communicate-with-the-chef-server"},"Configure your workstation to communicate with the Chef server"),Object(n.b)("p",null,"knife is the command-line tool that provides an interface between your workstation and the Chef server. knife enables you to upload your cookbooks to the Chef server and work with nodes, the servers that you manage."),Object(n.b)("p",null,"knife requires two files to communicate with the Chef server \u2013 an RSA private key and a configuration file."),Object(n.b)("p",null,"The configuration file is typically named knife.rb. It contains information such as the Chef server's URL, the location of your RSA private key, and the default location of your cookbooks."),Object(n.b)("p",null,"Both of these files are typically located in a directory named .chef. Every time knife runs, it looks in the current working directory for the .chef directory. If the .chef directory does not exist, knife searches up the directory tree for a .chef directory. This process is similar to how tools such as Git work."),Object(n.b)("p",null,"The next step is to create the ~/learn-chef/.chef directory and add your RSA private key and knife configuration files."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Generate your knife configuration file ")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Sign in to ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://manage.chef.io/"}),"https://manage.chef.io/"),"."),Object(n.b)("li",{parentName:"ol"},"From the Administration tab, select your organization."),Object(n.b)("li",{parentName:"ol"},"From the menu on the left, select Generate Knife Config and save the file.")),Object(n.b)("h2",{id:"future-wrapper-cookbooks"},"(Future) Wrapper Cookbooks"),Object(n.b)("p",null,'That is essentially "forking" an upstream cookbook eg one from the supermarket. If we add the upstream recipe to the ',Object(n.b)("inlineCode",{parentName:"p"},"metadata.rb")," we can add ",Object(n.b)("inlineCode",{parentName:"p"},"depends 'haproxy'")," to install the latest version of that dependency eg the supermarket here. We can all define the versions."),Object(n.b)("p",null,"What we can now do is add an attribute to our cookbook."),Object(n.b)("p",null,"We can then override the recipe in ",Object(n.b)("inlineCode",{parentName:"p"},"default.rb")," using the following:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-ruby"}),"node.default['haproxy']['member'] = [{\n    \"this_is_a_var_from_the_video\"\n}]\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Chef/chef-cheat-sheet.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-chef-chef-cheat-sheet.101a1afd2417ec7a4a77.js.map