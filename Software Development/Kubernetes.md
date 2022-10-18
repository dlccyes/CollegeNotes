---
layout: meth
parent: Software Development
alias: k8s
---

# Kubernetes
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## resources

- [Setting up local Kubernetes Cluster with Kind](https://cloudyuga.guru/hands_on_lab/kind-k8s)
- <https://cwhu.medium.com/7431c5f96c3e>
- <https://godleon.github.io/blog/Kubernetes/k8s-Deployment-Overview/>

## install kubectl

[doc](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)

install kubectl binary

```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```

install kubectl 

```
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

test

```
kubectl version --client
```

## apply config file

Write config files in yaml.

**operations**

- create
- apply
- replace
- patch

To create

```
kubectl create -f <config_file>.yaml
```

To create/update

```
kubectl apply -f <config_file>.yaml
```

[create vs. apply](https://stackoverflow.com/questions/47369351/)

## labels

Labels are key-value pair. You can assign labels via command line or define in yaml. See [the doc](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).

### roles

Role is just another label with key = `kubernetes.io/role` and value = `<your_role>`.

## commands

- get component status
	- `kubectl get cs` ([deprecated](https://github.com/kubernetes/kubernetes/issues/93342))
- show info about a pod
	- `kubectl get pod <pod_name>`
- show info about a node
	- `kubectl get node <node_name>`

## node related

### show nodes

```
# show ip
kubectl get nodes -o wide
# show labels
kubectl get nodes --show-labels
# show nodes with certain label
kubectl get nodes -l <key>=<value>
```

### assign pod to node

<https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/>

label your node -> specify `nodeSelector` in your yaml

Note that in Deployment, it should be in `template.spec`

## pod related

### pull image from private docker registry

[doc](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/)

login to docker if haven't

```
docker login
```

see your config.json

```
cat ~/.docker/config.json
```

create kubectl create

```
kubectl create secret generic <secret_name> \
    --from-file=.dockerconfigjson=<path/to/.docker/config.json> \
    --type=kubernetes.io/dockerconfigjson
```

supply secret in config file

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: private-reg
spec:
  containers:
  - name: private-reg-container
    image: <your-private-image>
  imagePullSecrets:
  - name: <secret_name>
```

### create pod

```
kubectl create -f <k8s_config_file>
```

force recreate pods

```
kubectl replace --force -f <k8s_config_file>
```

### delete pod

```
kubectl delete -f <k8s_config_file>
```

```
kubectl delete pods <pod_name>
```

### limit resources

cpu & memory

- <https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource>
- <https://kubernetes.io/docs/tasks/administer-cluster/manage-resources/quota-memory-cpu-namespace/>
- <https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#before-you-begin>

### port forwarding

```
kubectl port-forward <pod_name> <port>:<port>
```

### pod log

```
kubectl logs <pod_name>
```

### show pods

```
kubectl get pod
```

more info (like ip & node run on)

```
kubectl get pods -o wide
```

## Cronjob Related

See your cronjob

```
kubectl get cronjob
```

## deployment

`spec.template` is the definition of the pod

### update deployment

update image

```
kubectl set image deployment/<deployment_name> <pod_name>=<new_image> 
```

modify directly

```
kubectl edit deployment/<deployment_name>
```

## service

handle port forwarding

- targetPort
	- the port inside the pod
- nodePort
	- the port of the kubernetes node

go to `http://<node_ip>:<nodePort>` to see your app

## kind

It's an alternative to minikube. Kind uses Docker container while minikube uses VM. See [the official page](https://kubernetes.io/docs/tasks/tools/) and [the comparison](https://shipit.dev/posts/minikube-vs-kind-vs-k3s.html).

### Install

Install Docker if you haven't.

### Mac

```
brew install kind
```

### Install with binary

install binary

```
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.11.1/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
```

check

```
kind version
```

### create a cluster

```
kind create cluster
```

check if it's running

```
docker ps
```

```
kind get clusters
```

```
kubectl get nodes
```

### kind commands

- create cluster
	- `kind create cluster`
	- params
		- `--name`
			- name of the cluster
			- default name = `kind`
		- `--config`
			- create with config yaml
- delete cluster
	- `kind delete cluster`
		- `--name`
			- name of the cluster
			- default name = `kind`
- list clusters
	- `kind get clusters`
- list nodes
	- `kind get nodes`
- cluster detals
	- `kubectl cluster-info --context kind-kind`

### config file

[doc](https://kind.sigs.k8s.io/docs/user/configuration/)

Use `InitConfiguration` to label 1st control plane node, `JoinConfiguration` for others. See [Kubeadm Config Patches](https://kind.sigs.k8s.io/docs/user/configuration/#kubeadm-config-patches) ([related Github issue](https://github.com/kubernetes-sigs/kind/issues/1722)).

```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: test
nodes:
- role: control-plane
  kubeadmConfigPatches:
  - |
    kind: InitConfiguration
    nodeRegistration:
      kubeletExtraArgs:
        node-labels: "name=edge1"
- role: worker
  kubeadmConfigPatches:
  - |
    kind: JoinConfiguration
    nodeRegistration:
      kubeletExtraArgs:
        node-labels: "name=edge1"
```

### create a local container registry

create a local docker registry and a kind cluster

<https://kind.sigs.k8s.io/docs/user/local-registry/>

### troubleshooting

#### error when creating a cluster with many nodes

If you can successfully create a cluster with less nodes, then the problem might be [Pod errors due to “too many open files”](https://kind.sigs.k8s.io/docs/user/known-issues/#pod-errors-due-to-too-many-open-files).

To solve it, go to `/etc/sysctl.conf` and add/update the following lines:

```
fs.inotify.max_user_watches = 524288
fs.inotify.max_user_instances = 512
```

In my case, my `fs.inotify.max_user_watches` is already `1048576`, so I only add the second line.

[related github issue](https://github.com/kubernetes-sigs/kind/issues/2744#issuecomment-1127808069)

## using webcam

```yaml
      containers:
        - name: <name>
          image: <image>
          volumeMounts:
          - mountPath: /dev/video0
            name: dev-video0
          securityContext:
            privileged: true
      volumes:
        - name: dev-video0
          hostPath:
            path: /dev/video0
```

<https://stackoverflow.com/a/59291859/15493213>

## Troubleshooting

use `describe` on the failing node/pod to see more info first

### 1 node(s) had taint {node-role.kubernetes.io/master:  }, that the pod didn't tolerate

Scenario: You make a pod run on a control plane / master node but it keeps pending. When you describe it, `1 node(s) had taint {node-role.kubernetes.io/master: }, that the pod didn't tolerate` is shown.

Solution: Remove the taint on the node

```
kubectl taint nodes --all node-role.kubernetes.io/master-
# or
kubectl taint nodes <node_name> node-role.kubernetes.io/master-
```

the `-` is for removing

ref:

- <https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/>
- <https://stackoverflow.com/q/59484509/>
- <https://stackoverflow.com/a/59491824/15493213>

### The connection to the server localhost:8080 was refused - did you specify the right host or port?

Happens when you run any `kubectl <xxx>` command. 

Easy fix: delete your cluster and start again

If you're in local and you use `kind`, `kind get clusters` and `kind delete cluster --name <cluster_name>`.

## no matches for kind "CronJob" in version "batch/v1beta1"

Your k8s version >= 1.21, so use this instead

```
apiVersion: batch/v1
```

See <https://cloud.google.com/kubernetes-engine/docs/how-to/cronjobs>