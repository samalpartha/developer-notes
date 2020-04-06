(window.webpackJsonp=window.webpackJsonp||[]).push([[575],{"+7Zv":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Terraform/Terraform.md"}});var i={_frontmatter:l},b=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,o({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"terraform"},"Terraform"),Object(n.b)("h2",{id:"course-content"},"Course Content"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"# Use this to get the content\n$ git clone https://github.com/wardviaene/terraform-course\n")),Object(n.b)("h2",{id:"useful-terraform-commands"},"Useful Terraform Commands"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ terraform plan # plan\n$ terraform apply # shortcut for plan and apply - avoid in production\n$ terraform plan -out out.terraform # terraform and write the plan to out file\n$ terraform apply out.terraform # apply terraform plan using out file\n$ terraform show # show current state\n$ cat terraform.tfstate\n")),Object(n.b)("h2",{id:"what-is-terraform"},"What is Terraform?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Infrastructure as ",Object(n.b)("strong",{parentName:"li"},"code")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Automation")," of infrastructure"),Object(n.b)("li",{parentName:"ul"},"Keep our infrastructure in a certain state (compliant)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"e.g. 2 web instances with 2 volumes + 1 load balancer"))),Object(n.b)("li",{parentName:"ul"},"Make infrastructure ",Object(n.b)("strong",{parentName:"li"},"auditable"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"You can keep your infrastructure change history in a ",Object(n.b)("strong",{parentName:"li"},"version control")," system like GIT"))),Object(n.b)("li",{parentName:"ul"},"Terraform can automate provisioning of the ",Object(n.b)("strong",{parentName:"li"},"infrastructure itself"),". ")),Object(n.b)("h2",{id:"installation-of-terraform"},"Installation of Terraform"),Object(n.b)("p",null,"Head onto the Terraform website, download the .zip file and then move the binary after unzipping into your path to access it from the CLI."),Object(n.b)("h2",{id:"hello-terraform"},"Hello Terraform!"),Object(n.b)("p",null,"Example hello using Terraform to spin up an EC2 micro instance."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),'provider "aws" {\n  access_key = "ACCESS_KEY_HERE"\n  secret_key = "SECRET_KEY_HERE"\n  region     = "ap-southeast-1"\n}\n\nresource "aws_instance" "example" {\n  ami           = "ami-0d729a60"\n  instance_type = "t2.micro"\n}\n')),Object(n.b)("p",null,"To initialise and spin up the instance, run the following:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ terraform init\n$ terraform plan -out file.terraform\n$ terraform apply file.terraform\n$ terraform destory # tear down the instance\n")),Object(n.b)("h2",{id:"variables"},"Variables"),Object(n.b)("p",null,"To create variables, we create two files ",Object(n.b)("inlineCode",{parentName:"p"},"provider.tf")," and ",Object(n.b)("inlineCode",{parentName:"p"},"vars.tf")," that we can commit and one git ignored file ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," to store these private variables in."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),'# provider.tf\nprovider "aws" {\n    access_key="${var.AWS_ACCESS_KEY}"\n    secret_key="${var.AWS_SECRET_KEY}"\n    region="${var.AWS_REGION}"\n}\n\n# vars.tf\nvariable "AWS_ACCESS_KEY" {}\nvariable "AWS_SECRET_KEY" {}\nvariable "AWS_REGION" {\n    default = "ap-southeast-2"\n}\n\n# terraform.tfvars\nAWS_ACCESS_KEY=""\nAWS_SECRET_KEY=""\nAWS_REGION=""\n')),Object(n.b)("p",null,"For env vars: Terraform will read environment variables in the form of ",Object(n.b)("inlineCode",{parentName:"p"},"TF_VAR_name")," to find the value for a variable. For example, the ",Object(n.b)("inlineCode",{parentName:"p"},"TF_VAR_access_key")," variable can be set to set the ",Object(n.b)("inlineCode",{parentName:"p"},"access_key")," variable."),Object(n.b)("h3",{id:"lookup-examples"},"Lookup examples"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),'# instance.tf\nresource "aws_instance" "example" {\n  ami           = "${lookup(var.AMIS, var.AWS_REGION)}"\n  instance_type = "t2.micro"\n}\n\n# provider.tf\nprovider "aws" {\n    access_key = "${var.AWS_ACCESS_KEY}"\n    secret_key = "${var.AWS_SECRET_KEY}"\n    region = "${var.AWS_REGION}"\n}\n\n# vars.tf\nvariable "AWS_ACCESS_KEY" {}\nvariable "AWS_SECRET_KEY" {}\nvariable "AWS_REGION" {\n  default = "eu-west-1"\n}\nvariable "AMIS" {\n  type = "map"\n  default = {\n    us-east-1 = "ami-13be557e"\n    us-west-2 = "ami-06b94666"\n    eu-west-1 = "ami-0d729a60"\n  }\n}\n\n# terraform.tfvars\nAWS_ACCESS_KEY=""\nAWS_SECRET_KEY=""\nAWS_REGION=""\n')),Object(n.b)("p",null,"For info on which ami results from where, checkout ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud-images.ubuntu.com/locator/ec2/"}),"https://cloud-images.ubuntu.com/locator/ec2/"),"."),Object(n.b)("h2",{id:"software-provisioning"},"Software Provisioning"),Object(n.b)("p",null,"There are 2 ways to provision software:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Build your own custom AMI (ie Packer).")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Another way is to be standardized AMIs and then install the software you need on it: "),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use file uploads")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use remote exec")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use automation tools like chef, puppet, ansible"))))),Object(n.b)("h3",{id:"file-uploads"},"File Uploads"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),'# instance.tf\nresource "aws_instance" "example" {\n    ami           = "${lookup(var.AMIS, var.AWS_REGION)}"\n    instance_type = "t2.micro"\n    \n    provisioner "file" {\n        source = "app.conf"\n        destination = "/etc/myapp.conf"\n    }\n}\n')),Object(n.b)("p",null,"The provisioner will have to use SSH etc."),Object(n.b)("p",null,"Another example with the connection:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),'# instance.tf\nresource "aws_instance" "example" {\n    ami           = "${lookup(var.AMIS, var.AWS_REGION)}"\n    instance_type = "t2.micro"\n    # IF SSH\n    key_name = "${aws_key_pem.mykey.key_name}"\n    # ENDIF\n    \n    provisioner "file" {\n        source = "app.conf"\n        destination = "/etc/myapp.conf"\n        # ! FOR PASSWORD\n        connection {\n            user = "${var.instance_username}"\n            password = "${var.instance_password}"\n        }\n        \n        connection {\n            user = "${var.instance_username}"\n            private_key = "${file(${var.path_to_private_key})}"\n        }\n    }\n    \n    # IF YOU UPLOAD A .sh FILE AND WANT TO RUN IT\n    provisioner "remote-exec" {\n        inline = [\n            "chmod +x /path/to/script.sh",\n            "/path/to/script.sh arguments"\n        ]\n    }\n}\n')),Object(n.b)("h2",{id:"attributes"},"Attributes"),Object(n.b)("h2",{id:"state"},"State"),Object(n.b)("p",null,"Terraform keeps state in ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfstate"),"."),Object(n.b)("p",null,"To configure, you add a file ",Object(n.b)("inlineCode",{parentName:"p"},"backend.tf"),":"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),'terraform {\n    # IF Consul\n    backend "consul" {\n        address = "demo.consul.io" # host name of consul cluster\n        path = "terraform/myproject"\n    }\n    \n    # ELSEIF S3\n    backend "s3" {\n        bucket = "bucket"\n        key = "terraform/myproject"\n        region = "ap-southeast-2"\n    }\n    \n    #ENDIF\n}\n')),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"$ terraform init")," will do what you require for it all to work."),Object(n.b)("h2",{id:"data-sources"},"Data Sources"),Object(n.b)("p",null,"Provide you with dynamic information."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A lot of data is available by AWS in a structured format using their API"),Object(n.b)("li",{parentName:"ul"},"Terraform also exposes this info using data sources.")),Object(n.b)("p",null,"Examples include the list of AMIs, list of AZs etc."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),'# provider.tf\nprovider "aws" { \n    region = "${var.AWS_REGION}"\n}\n\n# securitygroup.tf\ndata "aws_ip_ranges" "european_ec2" {\n  regions = [ "eu-west-1", "eu-central-1" ]\n  services = [ "ec2" ]\n}\n\nresource "aws_security_group" "from_europe" {\n name = "from_europe"\n\n  ingress {\n    from_port = "443"\n    to_port = "443"\n    protocol = "tcp"\n    cidr_blocks = [ "${data.aws_ip_ranges.european_ec2.cidr_blocks}" ]\n  }\n  tags {\n    CreateDate = "${data.aws_ip_ranges.european_ec2.create_date}"\n    SyncToken = "${data.aws_ip_ranges.european_ec2.sync_token}"\n  }\n\n}\n\n# vars.tf\nvariable "AWS_REGION" {\n  default = "eu-west-1"\n}\nvariable "AMIS" {\n  type = "map"\n  default = {\n    us-east-1 = "ami-13be557e"\n    us-west-2 = "ami-06b94666"\n    eu-west-1 = "ami-844e0bf7"\n  }\n}\n')),Object(n.b)("h2",{id:"templates"},"Templates"),Object(n.b)("p",null,"Can help create ",Object(n.b)("strong",{parentName:"p"},"customized configuration files"),"."),Object(n.b)("h2",{id:"modules"},"Modules"),Object(n.b)("p",null,"Help to make your terraform more organised. "),Object(n.b)("p",null,"You can also use third party modules (like modules from Github)."),Object(n.b)("p",null,"It also helps to ",Object(n.b)("strong",{parentName:"p"},"reuse")," parts of your code (eg set up network in AWS - VPC)."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),'# Install form git\nmodule "module-example" {\n    source = "github.com/wardviaene/terraform-module-example"\n}\n\n# Use module from local folder\nmodule "module-example" {\n    source = "./module-example"\n}\n\n# A module passing arguments \nmodule "module-example" {\n    source = "./module-example"\n    region = "us-west-1"\n    ip-range = "10.0.0.0/8"\n    cluster-size = "3"\n}\n')),Object(n.b)("p",null,"Inside of the module folder, you can also have Terraform files:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),'# module-example/vars.tf\nvariable "region" {}\nvariable "ip-range" {}\nvariable "cluster-size" {}\n\n# module-example/cluster.tf\nresource "aws_instance" "instance-1" { ... }\nresource "aws_instance" "instance-2" { ... }\nresource "aws_instance" "instance-3" { ... }\n\n# module-example/output.tf\noutput "aws-cluster" {\n    value = "${aws_instance.instance-1.publicip}"\n}\n')),Object(n.b)("p",null,"You use the output from the module in the main part of your code!"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),'output "some-output" {\n    value = "${module.module-example.aws-cluster}"\n}\n')),Object(n.b)("h3",{id:"downloading-a-module"},"Downloading a module"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),"terraform get # this will fetch the modules and store it in .terraform/modules/\n")),Object(n.b)("h2",{id:"terraform-command-overview"},"Terraform Command Overview"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"terraform apply"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Applies state.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"destroy"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Destroys all Terraform managed state.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"fmt"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Rewrite terraform config files to canonical format and style.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"get"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Download and update modules.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"graph"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Create a visual representation of a configuration or execution plan.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"import <options> <ADDRESS> <ID>")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Find infrastructure resource identified with ID and import the state into terraform.tfstate with resource id ADDRESS.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"output <options> <NAME>")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Output any of your resources.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"plan"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Show changes made to infrastructure.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"refresh"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Refresh the remote state. Can identify differences between state file and remote state.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"remote"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Configure remote state storage.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"show"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Show human readable output from a state or a plan.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"state"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Used for advanced state management eg rename resource")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"taint"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Destroy and recreate resource.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"validate"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Validate terraform syntax.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"untaint"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Undo a taint.")))),Object(n.b)("h2",{id:""}))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Terraform/Terraform.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-terraform-terraform-md-8562b38915471428a420.js.map