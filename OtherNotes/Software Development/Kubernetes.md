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

[Setting up local Kubernetes Cluster with Kind](https://cloudyuga.guru/hands_on_lab/kind-k8s)

<https://cwhu.medium.com/7431c5f96c3e>

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

## node related

### show nodes


```
# show ip
kubectl get nodes -o wide
# show labels
kubectl get nodes --show-labels
```

### assign pod to node

<https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/>

label your node -> specify `nodeSelector` in your yaml

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

more info (like ip)

```
kubectl get pods -o wide
```

## deployment

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

go to `http://<node_id>:<nodePort>` to see your app

## kind

It's an alternative to minikube. Kind uses Docker container while minikube uses VM. See [the official page](https://kubernetes.io/docs/tasks/tools/) and [the comparison](https://shipit.dev/posts/minikube-vs-kind-vs-k3s.html).

### install kind

Install Docker if you haven't.

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

```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: test
nodes:
- role: control-plane
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