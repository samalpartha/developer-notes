(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"7S4S":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/AWS/AWS-Guide.md"}});var r={_frontmatter:s},c=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,i({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"aws-guide"},"AWS Guide"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#aws-guide"}),"AWS Guide"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#aws-1-connecting-to-your-instance"}),"AWS-1: Connecting to your instance")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#aws-2-transferring-files-to-linux-instances-from-linux-using-scp"}),"AWS-2: Transferring Files to Linux Instances from Linux Using SCP")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#aws-3-changing-the-hostname-of-your-linux-system"}),"AWS-3: Changing the Hostname of Your Linux System")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#aws-4-to-change-the-system-hostname-to-a-public-dns-name"}),"AWS-4: To change the system hostname to a public DNS name")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#aws-5-to-change-the-system-hostname-without-a-public-dns-name"}),"AWS-5: To change the system hostname without a public DNS name")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#aws-6-changing-the-shell-prompt-without-affecting-the-hostname"}),"AWS-6: Changing the Shell Prompt without affecting the Hostname")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#aws-7-how-do-i-assign-a-static-hostname-to-a-private-amazon-ec2-instance-running-ubuntu-linux"}),"AWS-7: How do I assign a static hostname to a private Amazon EC2 instance running Ubuntu Linux?"))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Sources")),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html"}),"Connecting to your Linux Instance")),Object(a.b)("h2",{id:"aws-1-connecting-to-your-instance"},"AWS-1: Connecting to your instance"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Prerequisites")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install an SSH client")),Object(a.b)("p",null,"The instance likely already has one. Head to OpenSSH otherwise. Check with ",Object(a.b)("inlineCode",{parentName:"p"},"ssh"),"."),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Install the AWS CLI Tools")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Get the ID of the instance")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Get the public DNS of the instance")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Locate the private key")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Enable inbound SSH traffic from your IP address to your instance"))),Object(a.b)("p",null,"Your default security group does not allows SSH by default."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"To Connect")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"aws ec2 get-console-output --instance-id <instance_id>")),Object(a.b)("p",null,"Ensure that the instance is in the running state and change directories to your pem key file."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"chmod")," to make sure that your private key file isn't publicly viewable."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"chmod 400 /path/my-key-pair.pem\n")),Object(a.b)("p",null,"For Ubuntu, the user name is unbuntu - connect to this instance using"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"ssh -i /path/my-key-pair.pem ec2-user@ec2-198-51-100-1.compute-1.amazonaws.com\n")),Object(a.b)("p",null,"Refer to SSH-Intro.md SSH-7 in order to understand how to copy your computer's auth and add the host to ~/.ssh/config in order to be able to access the server without continually having to add in the key and move the file every time."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"aws-2-transferring-files-to-linux-instances-from-linux-using-scp"},"AWS-2: Transferring Files to Linux Instances from Linux Using SCP"),Object(a.b)("p",null,"In order to use a GUI, I recommend using a SFTP Client like FileZilla or Cyberduck. I'll add links these guides another time... Just Google it!"),Object(a.b)("p",null,"One way to transfer files between your local computer and a Linux instance is to use Secure Copy (SCP). This section describes how to transfer files with SCP. The procedure is very similar to the procedure for connecting to an instance with SSH."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Prerequisites")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Similar to AWS-1")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install a SCP client"),Object(a.b)("li",{parentName:"ol"},"Get the ID of the instance"),Object(a.b)("li",{parentName:"ol"},"Get the public DNS name of the instance"),Object(a.b)("li",{parentName:"ol"},"Locate the private key"),Object(a.b)("li",{parentName:"ol"},"Enable inbound SSH traffic from your IP address to your instance")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"To use SCP to transfer a file")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"scp -i /path/my-key-pair.pem /path/SampleFile.txt ec2-user@ec2-198-51-100-1.compute-1.amazonaws.com:~\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"aws-3-changing-the-hostname-of-your-linux-system"},"AWS-3: Changing the Hostname of Your Linux System"),Object(a.b)("p",null,"When you launch an instance, it is assigned a hostname that is a form of the private, internal IP address."),Object(a.b)("p",null,"A typical Amazon EC2 private DNS name looks something like this: ip-12-34-56-78.us-west-2.compute.internal, where the name consists of the internal domain, the service (in this case, compute), the region, and a form of the private IP address. Part of this hostname is displayed at the shell prompt when you log into your instance (for example, ip-12-34-56-78)."),Object(a.b)("p",null,"Each time you stop and restart your Amazon EC2 instance (unless you are using an Elastic IP address), the public IP address changes, and so does your public DNS name, system hostname, and shell prompt. Instances launched into EC2-Classic also receive a new private IP address, private DNS hostname, and system hostname when they're stopped and restarted; instances launched into a VPC don't."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"! Important"),"\nThese procedures are intended for use with Amazon Linux. For more information about other distributions, see their specific documentation."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Changing the System Hostname")),Object(a.b)("p",null,"If you have a public DNS name registered for the IP address of your instance (such as webserver.mydomain.com), you can set the system hostname so your instance identifies itself as a part of that domain. This also changes the shell prompt so that it displays the first portion of this name instead of the hostname supplied by AWS (for example, ip-12-34-56-78). If you do not have a public DNS name registered, you can still change the hostname, but the process is a little different."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"aws-4-to-change-the-system-hostname-to-a-public-dns-name"},"AWS-4: To change the system hostname to a public DNS name"),Object(a.b)("p",null,"Follow this procedure if you already have a public DNS name registered."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"On your instance, open the /etc/sysconfig/network configuration file in your favorite text editor and change the HOSTNAME entry to reflect the fully qualified domain name (such as webserver.mydomain.com).")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"HOSTNAME=<webserver.mydomain.com>\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Reboot the instance to pick up the new hostname.")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"[ed2-user ~]$ sudo reboot\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},'Log into your instance and verify that the hostname has been updated. Your prompt should show the new hostname (up to the first ".")')),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"$ hostname\nwebserver.mydomain.com\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"aws-5-to-change-the-system-hostname-without-a-public-dns-name"},"AWS-5: To change the system hostname without a public DNS name"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open the /etc/sysconfig/network configuration file in your favorite text editor and change the HOSTNAME entry to reflect the desired system hostname (such as webserver).")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"HOSTNAME=<webserver.mydomain.com>\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Open the ",Object(a.b)("inlineCode",{parentName:"li"},"/etc/hosts")," file in your favorite text editor and change the entry beginning with 127.0.0.1 to match the example below, substituting your own hostname.")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"127.0.0.1 webserver.localdomain webserver localhost localhost.localdomain\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Reboot the instance to pick up the new hostname.")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"[ec2-user ~]$ sudo reboot\n")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},'Log into your instance and verify that the hostname has been updated. Your prompt should show the new hostname (up to the first ".")')),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"$ hostname\nwebserver.mydomain.com\n")),Object(a.b)("h2",{id:"aws-6-changing-the-shell-prompt-without-affecting-the-hostname"},"AWS-6: Changing the Shell Prompt without affecting the Hostname"),Object(a.b)("p",null,"If you do not want to modify the hostname for your instance, but you would like to have a more useful system name (such as webserver) displayed than the private name supplied by AWS (for example, ip-12-34-56-78), you can edit the shell prompt configuration files to display your system nickname instead of the hostname."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"To change the shell prompt to a host nickname")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a file in /etc/profile.d that sets the environment variable called NICKNAME to the value you want in the shell prompt. For example, to set the system nickname to webserver, execute the following command.")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"[ec2-user ~]$ sudo sh -c 'echo \"export NICKNAME=webserver\" > /etc/profile.d/prompt.sh'\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Open the ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/bashrc")," file in your favorite text editor (such as vim or nano). You need to use sudo with the editor command because ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/bashrc")," is owned by root.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Edit the file and change the shell prompt variable (PS1) to display your nickname instead of the hostname. Find the following line that sets the shell prompt in /etc/bashrc (several surrounding lines are shown below for context; look for the line that starts with [ "$PS1"):'))),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'# Turn on checkwinsize\nshopt -s checkwinsize\n[ "$PS1" = "\\\\s-\\\\v\\\\$ " ] && PS1="[\\\\u@\\h \\\\W]\\$ "\n# You might want to have e.g. tty in prompt (e.g. more virtual machines)\n# and console windows\n')),Object(a.b)("p",null,"And change the \\h (the symbol for hostname) in that line to the value of the NICKNAME variable."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'# Turn on checkwinsize\nshopt -s checkwinsize\n[ "$PS1" = "\\\\s-\\\\v\\\\$ " ] && PS1="[\\\\u@$NICKNAME \\\\W]\\$ "\n# You might want to have e.g. tty in prompt (e.g. more virtual machines)\n# and console windows\n')),Object(a.b)("p",null,"(Optional) To set the title on shell windows to the new nickname, complete the following steps."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'a. Create a file called /etc/sysconfig/bash-prompt-xterm.\n\n```\n[ec2-user ~]$ sudo touch /etc/sysconfig/bash-prompt-xterm\n```\n\nb. Make the file executable with the following command.\n\n```\n[ec2-user ~]$ sudo chmod +x /etc/sysconfig/bash-prompt-xterm\n```\n\nc. Open the /etc/sysconfig/bash-prompt-xterm file in your favorite text editor (such as vim or nano). You need to use sudo with the editor command because /etc/sysconfig/bash-prompt-xterm is owned by root.\n\nd. Add the following line to the file.\n```\necho -ne "\\\\033]0;${USER}@${NICKNAME}:${PWD/#$HOME/~}\\\\007"\n```\n')),Object(a.b)("p",null,"Log out and then log back in to pick up the new nickname value."),Object(a.b)("h2",{id:"aws-7-how-do-i-assign-a-static-hostname-to-a-private-amazon-ec2-instance-running-ubuntu-linux"},"AWS-7: How do I assign a static hostname to a private Amazon EC2 instance running Ubuntu Linux?"),Object(a.b)("p",null,"The Linux hostname command can be used by administrators to change the hostname of an EC2 Linux instance. If you want the new hostname to persist between instance stops/starts and reboots, you must add the new hostname to the appropriate configuration files on your EC2 Linux instance."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Update the /etc/hosts file on your Ubuntu Linux instance with the new hostname, and add IPv6 configuration data if your instance is using IPv6.\nsudo vim /etc/hosts\nChange the name associated with the IP address 127.0.0.1 to the hostname that you want the instance to use even after a restart or reboot. Typically this involves changing localhost to the new hostname.\n127.0.0.1 persistent_host_name\nAdd the following configuration information to the hosts file if the instance uses IPv6.\n::1 ip6-localhost ip6-loopback\nfe00::0 ip6-localnet\nff00::0 ip6-mcastprefix\nff02::1 ip6-allnodes\nff02::2 ip6-allrouters\nff02::3 ip6-allhosts\nSave and exit the vim editor.\nNote\nAfter making this change, press SHIFT + : ","[colon]"," to open a new command entry box in the vim editor. Type wq, and then press Enter to save changes and exit vim.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Update the /etc/hostname file on your Ubuntu Linux instance with the new hostname."))),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"sudo vim /etc/hostname\n")),Object(a.b)("p",null,"Save and exit the vim editor. You can also use nano."),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If you have not already done so, run the Linux hostname command and specify the new hostname if you want to begin using the new hostname without restarting."),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"sudo hostname persistent_host_name"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The next time that you restart or reboot the EC2 instance, run the Linux hostname command again without any parameters to verify that the hostname change persisted."),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"hostname")))),Object(a.b)("p",null,"The command should return the new hostname."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{})," `persistent_host_name`\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/AWS/AWS-Guide.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-aws-aws-guide-md-24219be8b08a5443a105.js.map