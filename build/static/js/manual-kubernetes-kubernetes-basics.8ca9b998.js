(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{"./manual/Kubernetes/Kubernetes-Basics.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o={},s="wrapper";function r(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(s,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"kubernetes-basics"},"Kubernetes Basics"),Object(l.b)("h3",{id:"node-architecture"},"Node Architecture"),Object(l.b)("p",null,"Within each node can be a collection of pods routed by iptables and within each pod are the Docker containers."),Object(l.b)("p",null,"These containers can talk easily to each other using localhost and ports."),Object(l.b)("p",null,"Each node also has a ",Object(l.b)("inlineCode",{parentName:"p"},"kubelet")," and ",Object(l.b)("inlineCode",{parentName:"p"},"kube-proxy"),". The ",Object(l.b)("inlineCode",{parentName:"p"},"kubelet")," talks to the master node and ",Object(l.b)("inlineCode",{parentName:"p"},"kube-proxy")," talks to the iptables."),Object(l.b)("p",null,"A service itself can be like the load balancer. The service will be publicly available."),Object(l.b)("p",null,"When we look deeper at a pod yaml file, we have the containers called as the specs."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"# pod-helloworld.yml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nodehelloworld.example.com\n  labels:\n  app: helloworld\nspec:\n  # The containers are listed here\n  containers:\n  - name: k8s-demo\n    image: okeeffed/docker-demo\n    ports:\n    - containerPort: 3000\n")),Object(l.b)("h3",{id:"replication-controller"},"Replication Controller"),Object(l.b)("h4",{id:"scaling"},"Scaling"),Object(l.b)("p",null,"If your application is ",Object(l.b)("inlineCode",{parentName:"p"},"stateless")," you can horizontally scale it."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Stateless = your appllication doesn't have a ",Object(l.b)("inlineCode",{parentName:"li"},"state"),", it doesn't write any local files / keeps local sessions. This prevents pods from falling out of sync."),Object(l.b)("li",{parentName:"ul"},"All traditional databases are ",Object(l.b)("inlineCode",{parentName:"li"},"stateful")),Object(l.b)("li",{parentName:"ul"},"Most ",Object(l.b)("inlineCode",{parentName:"li"},"web applications")," can be made stateless",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Session management needs to be done outside the container"),Object(l.b)("li",{parentName:"ul"},"Any file to be saved cannot be saved locally")))),Object(l.b)("p",null,"If needed, you can use ",Object(l.b)("inlineCode",{parentName:"p"},"volumes")," to still run stateful apps."),Object(l.b)("p",null,"Those stateful apps can't horizontally scale, but you can run them in a single container and vertically scale (allocate more CPU/Mem/Disk)."),Object(l.b)("p",null,"Scaling in Kubernetes can be done using the ",Object(l.b)("inlineCode",{parentName:"p"},"Replication Controller"),"."),Object(l.b)("p",null,"The replication controller will ensure a specified number of pod replicas will run at all times."),Object(l.b)("p",null,"A pod created with the replica controller will automatically be replaced if they fail, get deleted or are terminated."),Object(l.b)("p",null,"Using the replication controller is also recommended if you just want to make sure 1 pod is always running, even after reboots."),Object(l.b)("p",null,"You can then run a replication controller with just 1 replica to ensure that it is always running."),Object(l.b)("p",null,"To create a replication controller:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"# rc-helloworld.yml\napiVersion: v1\nkind: ReplicationController # Changed from Pod\nmetadata:\n  name: helloworld-container\nspec: # Replation controller also has a spec\n  replicas: 2 # set two pod replicas\n  selector:  # select the app\n  app: helloworld\n  template:\n  # stand Pod metadata and spec\n  metadata:\n    name: nodehelloworld.example.com\n    labels:\n    app: helloworld\n  spec:\n    # The containers are listed here\n    containers:\n    - name: k8s-demo\n      image: okeeffed/docker-demo\n      ports:\n      - containerPort: 3000\n")),Object(l.b)("p",null,"When this controller is created with ",Object(l.b)("inlineCode",{parentName:"p"},"kubectl"),", you will see that the two pods are created with a differing suffix."),Object(l.b)("p",null,"Now we have horizontally scaled this pod."),Object(l.b)("p",null,"If one of these pods is now deleted, the master node will automatically schedule a new one."),Object(l.b)("p",null,"We can also scale this by using ",Object(l.b)("inlineCode",{parentName:"p"},"kubectl scale --replicas=4 -f <replication-controller-name.yml>"),"."),Object(l.b)("p",null,"We can also use it with the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"kubectl get rc # get replication controllers\n# assume helloworld-controller shows up\nkubectl scale --replicas=1 rc/helloworld-container\nkubectl get pods # will show only one pod remaining\n")),Object(l.b)("h2",{id:"deployments"},"Deployments"),Object(l.b)("p",null,"Replication Set is the next gen Replication Controller:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'It supports new selector that can do selection based on filtering according a set of values eg environment either "dev" or "qa"'),Object(l.b)("li",{parentName:"ul"},"It's not only based on equality. You can do more complex things."),Object(l.b)("li",{parentName:"ul"},"This RS is used by the Deployment.")),Object(l.b)("p",null,"A deployment is a declaration that allows you to do app ",Object(l.b)("inlineCode",{parentName:"p"},"deployments")," and ",Object(l.b)("inlineCode",{parentName:"p"},"updates"),"."),Object(l.b)("p",null,"When using the deployment object, you definte the ",Object(l.b)("inlineCode",{parentName:"p"},"state")," of your application. Kubernetes will then make sure the clusters matches your desired state."),Object(l.b)("p",null,"Just using the replication controller or replication set might be cumbersome to deploy apps."),Object(l.b)("p",null,"With a deployment object you can:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create a deployment (e.g. deploying an app)"),Object(l.b)("li",{parentName:"ol"},"Update a deployment (e.g. new version)"),Object(l.b)("li",{parentName:"ol"},"Do rolling updates (zero downtime deployments)"),Object(l.b)("li",{parentName:"ol"},"Roll back"),Object(l.b)("li",{parentName:"ol"},"Pause/resume a deployment (ie rollout to only certain percentage of pods)")),Object(l.b)("p",null,"An example of a deployment:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"# deployment-helloworld.yml\napiVersion: extensions/v1beta1\nkind: Deployment # Changed from Pod\nmetadata:\n  name: helloworld-deployment\nspec: # Replation controller also has a spec\n  replicas: 3 # set two pod replicas\n  template:\n  # stand Pod metadata and spec\n  metadata:\n    labels:\n    app: helloworld\n  spec:\n    # The containers are listed here\n    containers:\n    - name: k8s-demo\n      image: okeeffed/docker-demo\n      ports:\n      - containerPort: 3000\n")),Object(l.b)("h3",{id:"useful-commands"},"Useful commands"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"Command"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"kubectl get deployments"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Get info on current deployments")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"kubectl get rs"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Get info about the replica set")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"kubectl get pods --show-labels"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Get pods + labels attached to pods")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"kubectl rollout status deployment/helloworld-deployment"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Get deployment status")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"kubectl set image deployment/helloworld-deployment k8s-demo=k8s-demo:2"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Run k8s-demo with the image label version 2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"kubectl edit deployment/helloworld-deployment"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Edit the deployment object")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"kubectl rollout status deployment/helloworld-deployment"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Get the status of the rollout")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"kubectl rollout history ","[deployment]"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Get the rollout history")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"kubectl rollout undo ","[deployment]"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Rollback to previous version")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"kubectl rollout undo ","[deployment]"," --to-revision=n"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Rollback to previous version")))),Object(l.b)("h3",{id:"demo-deployment-notes"},"Demo: Deployment notes"),Object(l.b)("p",null,"Again, get pods will sho the pods with appended suffixes auto-determined by Kubernetes."),Object(l.b)("p",null,"You can verify rollout status using the commands above."),Object(l.b)("h2",{id:"services"},"Services"),Object(l.b)("p",null,"Pods themselves are very dynamic, they come and go on the Kubernetes cluster."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When using a ",Object(l.b)("inlineCode",{parentName:"li"},"Replication Controller"),", pods are termined and created during scaling operations."),Object(l.b)("li",{parentName:"ul"},"Wehn using ",Object(l.b)("inlineCode",{parentName:"li"},"Deployments"),", when updating the image version, pods are terminated and new pods take the place of older pods.")),Object(l.b)("p",null,"That's why Pods should never be accessed directly, but always through a Service."),Object(l.b)("p",null,"A service is the ",Object(l.b)("inlineCode",{parentName:"p"},"logical bridge"),' between the "mortal" pods and other services or end-users.'),Object(l.b)("p",null,"When using the ",Object(l.b)("inlineCode",{parentName:"p"},"kubectl expose")," command, you create a service for you pod to be accessed externally."),Object(l.b)("p",null,"Creating a service will create an endpoint for your pod(s):"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"A ClusterIP: a virtual IP address only reachable from within the cluster (this is default)"),Object(l.b)("li",{parentName:"ol"},"A NodePort: a port that is the same on each node that is also reachable externally."),Object(l.b)("li",{parentName:"ol"},"A LoadBalancer: created by the Cloud provider that will route external traffic on every node on the NodePort")),Object(l.b)("p",null,"The options shown only allow virtual IPs and ports."),Object(l.b)("p",null,"There is also a possibility to use ",Object(l.b)("inlineCode",{parentName:"p"},"DNS Names")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"ExternalName")," can provide a DNS name for the service e.g. for service discovery using DNS."),Object(l.b)("p",null,"This ",Object(l.b)("strong",{parentName:"p"},"only")," works when the DNS add-on is enabled."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"# helloworld-service.yml\napiVersion: v1\nkind: Service\nmetadata:\n  name: helloworld-service\nspec:\n  ports: # specify the ports the service uses\n  - port: 31001\n    nodePort: 31001\n    # name below defined from pod\n    targetPort: nodejs-port\n    protocol: TCP\n  selector:\n  # service for this app\n  app: helloworld\n  type: NodePort\n")),Object(l.b)("h2",{id:"tags"},"Tags"),Object(l.b)("p",null,"Similar to Labels for AWS"),Object(l.b)("p",null,"For example, you can label your objects."),Object(l.b)("p",null,"For instance: Key could be ",Object(l.b)("inlineCode",{parentName:"p"},"environment"),", and the value could be ",Object(l.b)("inlineCode",{parentName:"p"},"dev"),"/",Object(l.b)("inlineCode",{parentName:"p"},"staging"),"/",Object(l.b)("inlineCode",{parentName:"p"},"qa"),"/",Object(l.b)("inlineCode",{parentName:"p"},"prod"),"."),Object(l.b)("p",null,"Maybe you could also tag the department that is comes from etc."),Object(l.b)("p",null,"Labels are not unique. You can then use ",Object(l.b)("inlineCode",{parentName:"p"},"label selectors")," to match labels."),Object(l.b)("p",null,'Eg. a particular pod can only run on a node label with "evironment" equals "development".'),Object(l.b)("p",null,'More complex matching: "environment" in "development" or "qa".'),Object(l.b)("p",null,"You can also use labels to tag nodes. Once tagged, you can use labels selectors to let pods only run on specific nodes."),Object(l.b)("p",null,"There are two steps required to run a pod on a specific set of nodes:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"First you tag the node"),Object(l.b)("li",{parentName:"ol"},"Then you add a ",Object(l.b)("inlineCode",{parentName:"li"},"nodeSelector")," to your pod configuration")),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),"kubectl label nodes node1 hardware=high-spec\nkubectl label nodes node1 hardware=low-spec\n")),Object(l.b)("p",null,"Secondly, add a pod that uses those labels:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"# pod-helloworld.yml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nodehelloworld.example.com\n  labels:\n  app: helloworld\nspec:\n  # The containers are listed here\n  containers:\n  - name: k8s-demo\n    image: okeeffed/docker-demo\n    ports:\n    - containerPort: 3000\n  nodeSelector:\n  hardware: high-spec\n")),Object(l.b)("h3",{id:"demo-using-tags"},"Demo: Using tags"),Object(l.b)("p",null,"It only really makes sense if you have multiple nodes (doesn't really make sense on minikube)."),Object(l.b)("h2",{id:"healthchecks"},"Healthchecks"),Object(l.b)("p",null,"If the application malfunctions, the pod and container may still be running but the application may no longer be running. This is where health checks come in."),Object(l.b)("p",null,"Two types:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Running a command in the container periodically"),Object(l.b)("li",{parentName:"ol"},"Periodic checks on a URL")),Object(l.b)("p",null,"The typical prod application behind a load balancer should always have health checks implemented in some way to ensure availability and resiliency."),Object(l.b)("p",null,"Below you can see where the healthcheck is. You can check the port or container port name."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"# pod-helloworld.yml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nodehelloworld.example.com\n  labels:\n  app: helloworld\nspec:\n  # The containers are listed here\n  containers:\n  - name: k8s-demo\n    image: okeeffed/docker-demo\n    ports:\n    - containerPort: 3000\n    # ! This is the health check\n    livenessProbe:\n    httpGet:\n      path: /\n      port: 3000\n    initialDelaySeconds: 15\n    timeoutSeconds: 30\n")),Object(l.b)("h2",{id:"secrets"},"Secrets"),Object(l.b)("p",null,"A way to distribute credentials, keys, passwords or secret data to the pods."),Object(l.b)("p",null,"Kubernetes itself uses this Secrets mechanism to provide the credentials to access the internal API."),Object(l.b)("p",null,"You can use the same mechanism to provide secrets to your application."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"secrets")," is just one way to provide secrets that is native to Kubernetes. There are still other ways to do this."),Object(l.b)("h3",{id:"how-to-use-them"},"How to use them"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Use as env vars"),Object(l.b)("li",{parentName:"ul"},"Use as a file in a pod",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"This requires volumes to be mounted"),Object(l.b)("li",{parentName:"ul"},"In this volume you have files"),Object(l.b)("li",{parentName:"ul"},"This can be use for things like dotenv files"))),Object(l.b)("li",{parentName:"ul"},"You can use an external image to pull secrets (private image registry)")),Object(l.b)("p",null,"Generating:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),'echo -n "root" > ./username.txt\necho -n "password" > ./password.txt\nkubectl create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt\n# > secret "db-user-pass" created\n')),Object(l.b)("p",null,"A secret can also be a SSH key or SSL cert."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"kubectl create secret generic ssl-cert --from-file=ssh-privatekey=~/.ssh/id_rsa --ssl-cert-=ssl-cert=mysslcert.crt\n")),Object(l.b)("p",null,"To generate secrets using yaml defs:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Secret\nmetadata:\n  name: db-secret\ntype: Opaque\ndata:\n  password: pwd\n  username: usr\n")),Object(l.b)("p",null,"Then, you can generate it as base64 like so:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),'echo -n "password" | base64\n# > pwd\n\nkubectl create -f secrets-db-secret.yml\n# > secret "db-secret" created\n')),Object(l.b)("p",null,"To create a pod that uses secrets:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"# pod-helloworld.yml w/ secrets\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nodehelloworld.example.com\n  labels:\n  app: helloworld\nspec:\n  # The containers are listed here\n  containers:\n  - name: k8s-demo\n    image: okeeffed/docker-demo\n    ports:\n    - containerPort: 3000\n    # @@@ This are the envs\n    env:\n    - name: SECRET_USERNAME\n      valueFrom:\n      secretKeyRef:\n        name: db-secret\n        key: username\n    - name: SECRET_PASSWORD\n      [...]\n")),Object(l.b)("p",null,"Alternatively when providing in a file:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"# pod-helloworld.yml w/ secrets\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nodehelloworld.example.com\n  labels:\n  app: helloworld\nspec:\n  # The containers are listed here\n  containers:\n  - name: k8s-demo\n  image: okeeffed/docker-demo\n  ports:\n  - containerPort: 3000\n  # @@@ This are the envs in a volume mount\n  volumeMounts:\n  - name: credvolume\n    mountPath: /etc/creds\n    readOnly: true\n  volumes:\n  - name: credvolume\n  secret:\n    secretName: db-secrets\n")),Object(l.b)("h3",{id:"demo-wordpress-secrets"},"Demo: Wordpress Secrets"),Object(l.b)("p",null,"This demo ends up creating a secrets file, a pod definition and a service to expose the wordpress pod."),Object(l.b)("p",null,"However, note that deleting the current setup will result in a container restarting to maintain state, but when that happens the WordPress site has to be re-installed because the data was not saved. The solution for this will be in the volumes lab."),Object(l.b)("h2",{id:"web-ui"},"Web UI"),Object(l.b)("p",null,"Kubernetes comes with a ",Object(l.b)("inlineCode",{parentName:"p"},"Web UI")," you can use instead of kubectl commands."),Object(l.b)("p",null,"You can use it to:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Get an overview of running applications on your cluster"),Object(l.b)("li",{parentName:"ol"},"Creating and modifying individual Kubernetes resources and workloads (like kubectl create and delete)"),Object(l.b)("li",{parentName:"ol"},"Retrieve info on state or resources.")),Object(l.b)("p",null,"You can reach this UI at ",Object(l.b)("inlineCode",{parentName:"p"},"https://<kubernetes-master>/ui")),Object(l.b)("p",null,"If you cannot access it, you can install it manually:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"kubectl create -f https://rawgit.com/kubernetes/dashboard/master/src/deploy/kubernetes-dashboard.yaml\n# If the password is asked\nkubectl config view\n\n# If you're on minikube\nminikube dashboard # or --url for the url\n")),Object(l.b)("h3",{id:"demo-web-ui"},"Demo: Web UI"),Object(l.b)("p",null,"Using the web ui you can see some really interesting info and graphs on usage."))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/Kubernetes-Basics.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-kubernetes-kubernetes-basics.101a1afd2417ec7a4a77.js.map