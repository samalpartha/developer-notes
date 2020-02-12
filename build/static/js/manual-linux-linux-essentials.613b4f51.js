(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{"./manual/Linux/Linux-Essentials.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l={},s="wrapper";function r(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"linux-essentials"},"Linux Essentials"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-essentials"}),"Linux Essentials"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-2-finding-your-way-on-a-linux-systems"}),"LINUX-2: Finding Your Way on a Linux Systems")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-21-command-line-basics"}),"LINUX-2.1: Command Line Basics"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#uname"}),"uname")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#history-and-completion"}),"History and completion")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#cd-and-pwd"}),"cd and pwd")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#shell-config-files"}),"Shell config files")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#variables-envsys-variables"}),"Variables: Env/Sys Variables")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#variables-user-defined-vars"}),"Variables: User Defined vars")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#globbing"}),"Globbing")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#quoting"}),"Quoting")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#formatting-commands"}),"Formatting Commands")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#working-with-options"}),"Working with Options")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-22-using-the-command-line-to-get-help"}),"LINUX-2.2: Using the Command Line to Get Help"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#man"}),"Man")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-23-using-directories-and-listing-files"}),"LINUX-2.3: Using Directories and Listing Files"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#the-linux-file-system"}),"The Linux File System")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-24-creating-moving-and-deleting-files"}),"LINUX-2.4: Creating, Moving and Deleting Files"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#files-and-directories"}),"Files and Directories")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-3-the-power-of-the-command-line"}),"LINUX-3: The Power of the Command Line")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-31-archiving-files-on-the-command-line"}),"LINUX-3.1: Archiving Files on the Command Line"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#files-directories"}),"Files, Directories")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-5-the-linux-operating-system"}),"LINUX-5: The Linux Operating System")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-53-where-data-is-stored"}),"LINUX-5.3: Where Data is Stored"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-531-kernel"}),"LINUX-5.3.1: Kernel")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-532-processes"}),"LINUX-5.3.2: Processes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-533-syslog-klog-dmesg"}),"LINUX-5.3.3: syslog, klog, dmesg")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-534-lib-usrlib-etc-varlog"}),"LINUX-5.3.4: /lib, /usr/lib, /etc, /var/log")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-54-your-computer-on-the-network"}),"LINUX-5.4: Your Computer on the Network")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#linux-531-internet-network-routers"}),"LINUX-5.3.1: Internet, Network, Routers"))))))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"linux-2-finding-your-way-on-a-linux-systems"},"LINUX-2: Finding Your Way on a Linux Systems"),Object(a.b)("h2",{id:"linux-21-command-line-basics"},"LINUX-2.1: Command Line Basics"),Object(a.b)("h3",{id:"uname"},"uname"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"okeeffe_d@dok ~$ uname\nDarwin\n\nokeeffe_d@dok ~$ uname -n\ndok.gateway\n\nokeeffe_d@dok ~$ uname -r\n15.6.0\n\nokeeffe_d@dok ~$ uname -m\nx86_64\n\nokeeffe_d@dok ~$ uname -p\ni386\n\nokeeffe_d@dok ~$ uname -a                                    1 \u21b5\nDarwin dok.gateway 15.6.0 Darwin Kernel Version 15.6.0: Thu Jun 23 18:25:34 PDT 2016; root:xnu-3248.60.10~1/RELEASE_X86_64 x86_64\n")),Object(a.b)("h3",{id:"history-and-completion"},"History and completion"),Object(a.b)("p",null,"All commands are kept in the history file eg. ",Object(a.b)("inlineCode",{parentName:"p"},".bash_history")),Object(a.b)("p",null,"You can cycle through with the arrows."),Object(a.b)("p",null,"ENV variables can allow us to control history. We can also change the history file length (default 500) by we could go ",Object(a.b)("inlineCode",{parentName:"p"},"export HISTFILESIZE=99999")," to make our History file far longer."),Object(a.b)("p",null,"We can also ",Object(a.b)("inlineCode",{parentName:"p"},"tab")," to autocomplete things."),Object(a.b)("h3",{id:"cd-and-pwd"},"cd and pwd"),Object(a.b)("p",null,"cd - change directory\npwd - print working directory"),Object(a.b)("h3",{id:"shell-config-files"},"Shell config files"),Object(a.b)("p",null,"This will vary depending on what kind of shell we are using eg. login or not login."),Object(a.b)("p",null,"We can configure it to boot automatically (run level 5)."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/etc/.bash_rc")," is set up to run different commands and ENV vars for our enviornment."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/etc/.bash_profile")," and other hidden ",Object(a.b)("inlineCode",{parentName:"p"},".bash_name")," run at certain times etc. which can be used for login shells etc."),Object(a.b)("p",null,"If you run a login shell, ",Object(a.b)("inlineCode",{parentName:"p"},".bash_profile")," will be the first to run. No distribution will use all of these files."),Object(a.b)("p",null,"There is also a certain order to how these files are called upon. Call order is also dependent on the OS."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"// dependent on non login shells or login shells - eg booting into a machine\n.bash_profile\n.bash_login || .bash_rc // it will use the first that it finds and use that\n")),Object(a.b)("p",null,"Every file is also user specific. If you can change ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/profile")," you can change the settings for every single user."),Object(a.b)("h3",{id:"variables-envsys-variables"},"Variables: Env/Sys Variables"),Object(a.b)("p",null,"There are user defined and system defined variables. It is stored in the systems RAM that is reserved for this sort of operation."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Environment Variables")),Object(a.b)("p",null,"These are named and defined by the OS. This is generally run from our shell prompt. Eg. the tilda key will always move us to our Home directory."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"User Variables")),Object(a.b)("p",null,"These can be defined by the user themselves."),Object(a.b)("p",null,"Adding a PATH for a new application."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"PATH=$PATH:/var/opt/")," - this will append the folder to a new env variable. Now we can add new scripts that we want to run here!"),Object(a.b)("p",null,"To make it apply to all of our login shells, we then go ",Object(a.b)("inlineCode",{parentName:"p"},"export PATH"),"."),Object(a.b)("p",null,"To keep it automatically when we start our system, we will need to edit our ",Object(a.b)("inlineCode",{parentName:"p"},".bash_profile")," and adjust the path var."),Object(a.b)("p",null,"Note: Interactive shells are ones that you can interact with."),Object(a.b)("h3",{id:"variables-user-defined-vars"},"Variables: User Defined vars"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"var=value")),Object(a.b)("p",null,"So how do we create this?"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'awesome="dennis"\necho $awesome\n')),Object(a.b)("p",null,"To use this in other shells, again, we need to export the variable."),Object(a.b)("p",null,"Variable names can container letters and numbers but cannot start with numbers."),Object(a.b)("h3",{id:"globbing"},"Globbing"),Object(a.b)("p",null,"Globbing is the process of expanding a non-specific file name using a wildcard variable."),Object(a.b)("p",null,"Globbing - Global Command. Historically, it came from the /etc/glob program."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Commands")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"// find all .txt files\nls *.txt\n\n// list files that start with test\nls test*\n\n// replace the ? with an char\nls ????.txt\n\n// find file based on something you know with the ? wildcard\nls Monday-file?.txt\n\n// find files that begin with F\nls [F]*.txt\n\n// specify letter you think might come one way or another\nls f[igh][lfz]*\n")),Object(a.b)("h3",{id:"quoting"},"Quoting"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Double quotes allow us to still use the value of variables and commands"),Object(a.b)("li",{parentName:"ul"},"Single quotes preserve the literaly meaning of each character of a given string"),Object(a.b)("li",{parentName:"ul"},"Backslash is an escape character")),Object(a.b)("h3",{id:"formatting-commands"},"Formatting Commands"),Object(a.b)("p",null,"We can use the backslash so that we can continue writing the command on the new line."),Object(a.b)("h3",{id:"working-with-options"},"Working with Options"),Object(a.b)("p",null,"The commands parameters can be roughly divided in parameters starting with a dash (",Object(a.b)("em",{parentName:"p"},"options"),") and no dashes (",Object(a.b)("em",{parentName:"p"},"arguments"),")"),Object(a.b)("h2",{id:"linux-22-using-the-command-line-to-get-help"},"LINUX-2.2: Using the Command Line to Get Help"),Object(a.b)("h3",{id:"man"},"Man"),Object(a.b)("h2",{id:"linux-23-using-directories-and-listing-files"},"LINUX-2.3: Using Directories and Listing Files"),Object(a.b)("h3",{id:"the-linux-file-system"},"The Linux File System"),Object(a.b)("h2",{id:"linux-24-creating-moving-and-deleting-files"},"LINUX-2.4: Creating, Moving and Deleting Files"),Object(a.b)("h3",{id:"files-and-directories"},"Files and Directories"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"linux-3-the-power-of-the-command-line"},"LINUX-3: The Power of the Command Line"),Object(a.b)("h2",{id:"linux-31-archiving-files-on-the-command-line"},"LINUX-3.1: Archiving Files on the Command Line"),Object(a.b)("h3",{id:"files-directories"},"Files, Directories"),Object(a.b)("p",null,"We can archive multiple files into a single file and then compress them."),Object(a.b)("p",null,"We can use ",Object(a.b)("inlineCode",{parentName:"p"},"Tar")," to compress and ",Object(a.b)("inlineCode",{parentName:"p"},"zip")," which is generally for windows. ",Object(a.b)("inlineCode",{parentName:"p"},"tar")," is a Linux utility that archives things. It does not compress or compact files. It just sticks them together."),Object(a.b)("p",null,"It was originally used to create tape backups. Tar stands for ",Object(a.b)("inlineCode",{parentName:"p"},"Tape Archive"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"# inside of a folder that contains a folder with three files\n# if we want to archive this folder\n# tar -cf creates the file name.tar\n# tar -xf extracts the file name.tar\n\ntar -cf folder1tar.tar folder1\n\n# this would archive folder1\n\ntar -xf folder1tar.tar\n\n# extracting this, we will have folder1 back\n\n# tar multiple archive files at once\n# ls\n# file1.txt file2.txt file3.txt\n\ntar -cf files.tar file1.txt file3.txt\n\n# now we will have files.tar with those two files\n\ntar -xf files.tar\n\n# extracts those two files\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"linux-5-the-linux-operating-system"},"LINUX-5: The Linux Operating System"),Object(a.b)("h2",{id:"linux-53-where-data-is-stored"},"LINUX-5.3: Where Data is Stored"),Object(a.b)("h3",{id:"linux-531-kernel"},"LINUX-5.3.1: Kernel"),Object(a.b)("p",null,"The Linux Kernel is a Unix-like OS."),Object(a.b)("p",null,"The Linux is the core of any Linux installation."),Object(a.b)("p",null,"The Linux kernel is responsible for managing every other piece of software on a running Linux computer."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"It is responsibile for all of the interfacing of all the applications down to hardware between the interprocess communication system."),Object(a.b)("li",{parentName:"ul"},"Provides critical low level tasks."),Object(a.b)("li",{parentName:"ul"},"Loaded very early on in the boot process.")),Object(a.b)("p",null,"We could change the program that runs as the first process by adding it to the boot loader option command line."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"# run bash first after boot\ninit=/bin/bash\n")),Object(a.b)("p",null,"First program is the ",Object(a.b)("inlineCode",{parentName:"p"},"sbininit")," process. This will run programs as child processes for things such as login etc."),Object(a.b)("p",null,"Processes can leave behind children process that will be adopted. It's a tree like Hierarchy of processes."),Object(a.b)("p",null,"There could be dozens to hundreds of processes. The kernel is at the top. We can then use commands like ",Object(a.b)("inlineCode",{parentName:"p"},"ps")," and ",Object(a.b)("inlineCode",{parentName:"p"},"top")," to directly see and manipulate these processes."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"linux-532-processes"},"LINUX-5.3.2: Processes"),Object(a.b)("p",null,"All processes have a PID."),Object(a.b)("p",null,"Each process has an id which starts with one. There is also a PPID associated for the parents ID. We can identify these with utilities like ",Object(a.b)("inlineCode",{parentName:"p"},"ps")),Object(a.b)("p",null,"The following command will allow you to see the processes with flags -a for all users, -u for showing users that are running the process, and -x for displaying processes which do not have a controlling terminal."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"ps aux | grep <name>\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"top")," is an interactive version of ",Object(a.b)("inlineCode",{parentName:"p"},"ps"),". It shows a live visual. You can use options like ",Object(a.b)("inlineCode",{parentName:"p"},"top -o CPU")," to order usage by things like CPU etc."),Object(a.b)("p",null,"Top can also provide a load average. A load average of 0 is a system that no programs are demanding CPU time. An average of 1 is a system with one program running a CPU intensive task."),Object(a.b)("p",null,"Load averages can reach a number of cores. Eg. a load average of 4.0 would be a quad core system where a program requires all cores."),Object(a.b)("p",null,"The term ",Object(a.b)("inlineCode",{parentName:"p"},"hung")," refers to an unresponsive program."),Object(a.b)("p",null,"You cannot say a process is consuming too much memory just because it is at the top of the list. Sometimes, this could actually be a result of things such as a memory leak. This could be due to a bug, but at least you can kill a program in the mean time."),Object(a.b)("p",null,"The kernel also grants program access to sets of memory address. Once the program is done, it should give that memory back."),Object(a.b)("p",null,"There is also a ",Object(a.b)("inlineCode",{parentName:"p"},"free")," command in some linux systems where you can see how much memory is used."),Object(a.b)("p",null,"Swap space is used for when the system runs out of RAM. It is generally low. If it rises too much, you'll suffer from performance loss."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"linux-533-syslog-klog-dmesg"},"LINUX-5.3.3: syslog, klog, dmesg"),Object(a.b)("p",null,"Most background programs (daemon) write log files for being to show info about Linux Administration."),Object(a.b)("p",null,"You can even tell these programs to log even more verbose message if you're looking for an issue."),Object(a.b)("p",null,"Linux normally stores it in the ",Object(a.b)("inlineCode",{parentName:"p"},"/var/log")," directory."),Object(a.b)("p",null,"We can see some interesting programs here."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cron")," is a linux scheduling service."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"syslog")," (mailbox) is the general purpose log files."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"secure")," log is here when something requires root privilege.")),Object(a.b)("p",null,"Most of the log files are easy to reading using things is ",Object(a.b)("inlineCode",{parentName:"p"},"tail")," and ",Object(a.b)("inlineCode",{parentName:"p"},"less"),"."),Object(a.b)("p",null,"If we use commands like ",Object(a.b)("inlineCode",{parentName:"p"},"grep sshd /var/log/*")," to actually look through all the log files!"),Object(a.b)("p",null,"Files in ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/sys")," will show us some config files. This changes with each different Linux Distributions."),Object(a.b)("p",null,"Once the log daemon is running, it will push messages towards a specific log file. The ring buffer is a log file for the kernel, which is stored on memory as opposed to a disk."),Object(a.b)("p",null,"We can use ",Object(a.b)("inlineCode",{parentName:"p"},"dmesg")," tool! Instead, if we pipe it to ",Object(a.b)("inlineCode",{parentName:"p"},"tail")," or ",Object(a.b)("inlineCode",{parentName:"p"},"less"),", we can check out the dynamic log."),Object(a.b)("p",null,"If there issues that you don't understand, you can still check this out and find answers through a search engine."),Object(a.b)("p",null,"If we jump to ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/rc.d/rc.local")," file, we can set up dmesg > /var/log/dmesg, we can start logging the dmesg file to this file on reboot."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"linux-534-lib-usrlib-etc-varlog"},"LINUX-5.3.4: /lib, /usr/lib, /etc, /var/log"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Data Locations")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"/lib")," : Linked library files used by binaries in /bin and /usr/bin - Dynamic libraries and files used for the boot process. - Kernel modules also live here."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"/usr/lib")," : Linked library files used by binaries in /bin and /usr/bin - Dynamic libraries and support static files for executables. - You can create your own helper files by creating more subdirectories here for things such as plugins and extensions.")),Object(a.b)("p",null,"These two folders are similar to Windows .dll - the binaries or executables on the Mac are store in the above folders."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"/etc")," : Configuration files for our Linux OS")),Object(a.b)("p",null,"This stores things for our Configuration. Things like mySql, Apache etc are stored here. For different daemons on the program, they will have a subdirectory in the etc folder directory."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"/var/log")," : Log files for our Linux OS")),Object(a.b)("p",null,"This is used for the log files from the different daemons which we can use for trouble shooting down the track."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"linux-54-your-computer-on-the-network"},"LINUX-5.4: Your Computer on the Network"),Object(a.b)("h3",{id:"linux-531-internet-network-routers"},"LINUX-5.3.1: Internet, Network, Routers"))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Linux/Linux-Essentials.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-linux-linux-essentials.101a1afd2417ec7a4a77.js.map