=================================
Kubernetes on OpenStack using RKE
=================================

RKE is a CNCF-certified Kubernetes distribution that runs entirely in Docker containers. RKE solves the problem of installation complexity, a common problem in the Kubernetes community. As long as you are able to run a supported version of Docker, you can deploy and run Kubernetes with RKE. RKE supports management on different cloud providers using provider plugins. The OpenStack plugin is used to interact with the many resources supported by OpenStack and deploy Kubernetes on OpenStack instances. the plugin must be configured with the correct credentials before it can be used.

Installing RKE
--------------

We recommend following the `the official installation-guide <https://rancher.com/docs/rke/latest/en/installation/#download-the-rke-binary>`__ to install RKE on your workstation.

Preparing the nodes
-------------------

Create the virtual instances that should run as Kubernetes nodes. It is a prerequisite that Docker is installed on all virtual machines. For a full list of prerequisites and node preparations, follow the steps in the `official requirements guide <https://rke.docs.rancher.com/os#operating-system>`__. In this example two virtual machines are created where rancher-node-1 will be used as control & etcd host and rancher-node-2 will be used as worker host.

Run the following commands to install docker on both instances:

* ``curl https://releases.rancher.com/install-docker/20.10.sh > install.sh``
* ``sh install.sh``
* ``sudo usermod -aG docker $USER``

After re-logging into the instances, that is closing the ssh session and opening it again (to enable the environment), you should now be able to run ``docker ps`` which would tell you that docker was installed.

Configure the OpenStack plugin
------------------------------

Follow these instructions to prepare the plugin on your workstation:

* Create a catalog called "demo" and an empty file called "cluster.yml" in the same catalog.
* Run the command ``rke config -name cluster.yml`` and follow the instructions. When you get to the step "override hostname" enter the names of the instances you created in the previous steps.
* Edit the "cluster.yml" file. Under the section "cloud provider" enter the correct parameters (more info `here <https://rke.docs.rancher.com/config-options/cloud-providers/openstack>`__. IDs and names are available in the platform using any of the management tools. The finished file might look something like this:

::
	
  # Configure the OpenStack Provider
   cloud_provider:
     name: "openstack"
     openstackCloudProvider:
       global:
         username: 'demo-user'
         password: 'demopass'
         auth-url: https://auth.binero.cloud:5000/v3
         tenant-name: 'demo-project'
         domain-name: 'Default'
  region: 'europe-se-1'
       load_balancer:
         use-octavia: true
         subnet-id: demo-subnet-id
         # Floating network: europe-se-1-1a-net0
         floating-network-id: 35164b56-13a1-4b06-b0e7-94c9a67fef7e
       block_storage:
         ignore-volume-az: false
       route:
         router-id: demo-router-id

* When done, run the command ``rke up`` which will install the cluster. 
* Two new files will be in the demo directory after we run this command, cluster.rkestate and kube_config_cluster.yml.
* Use the file "kube_config_cluster.yml" with kubectl to check cluster health and perform actions for instance like this: ``kubectl --cubeconfig=kube_config_cluster.yml get pods -A``.

Create a Persistent Volume Claim with Cinder Service
----------------------------------------------------

Follow these instructions to create a persistent volume claim via the OpenStack Cinder API. 

* Export kube_config_cluster.yml to a KUBECONFIG environment variable like this ``export KUBECONFIG=kube_config_cluster.yml``. 
* Create a StorageClass YAML file storageclass.yaml based on an SSD volume in availability zone europe-se-1a with the following content: 

::

   kind: PersistentVolumeClaim
   apiVersion: v1
   metadata:
     name: cinder-claim
     annotations:
       volume.beta.kubernetes.io/storage-class: "ssd-demo"
   spec:
     accessModes:
       - ReadWriteOnce
     resources:
       requests:
         storage: 1Gi

* Run the command: ``kubectl create -f pvc.yaml`` to create.
* You can get information about your PersistentVolumeClaim by running the command ``kubectl get pvc``.
