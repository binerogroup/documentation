=====================
Launching an instance
=====================

This guide provides a step-by-step guide to easily launch your first instance on Binero cloud. The available methods to launch an instance are:

- `The cloud management portal </compute/launching-an-instance/cloud-management-portal>`_
- `OpenStack Horizon </compute/launching-an-instance/openstack-horizon>`_
- `OpenStack CLI </compute/launching-an-instance/openstack-terminal-client>`_
- `API </compute/compute-api>`_

For users starting out, we recommend using our cloud management portal as this provides an easy-to-use format that will take you from 0-100 in the shortest time possible with very little prior understanding of working with public clouds. More information on working using the other methods are available under the respective subsections for each service in this documentation.

.. note:: More information on how to access the various portals is available `here </getting-started/managing-your-cloud>`_

General first steps
-------------------
When starting out in the platform there are some tasks that normally only need to be completed once. While there are multiple ways for you to accomplish these one time tasks, we will use the cloud management portal in the following examples. 

There are two main ways to connect your infrastructure (and in this case, your first instance) to the internet:

- Setup an instances to use a public IP directly (see `directly attached IPs </networking/directly-attached-ips>`_, which is not to be confused with floating IPs.
- Setup a :doc:`/networking/router/index` and use :doc:`/networking/floating-ips` through the router. 

We will cover the second option (router + floating ips) in this quick start guide as it will provide a more versatile option when growing your infrastructure as well as an additional layer of security.

.. note:: Some features of the platform, for instance load balancing, will **require** a router. From a security perspective its also preferable to use floating IPs as your instances will be less exposed to the internet than with a directly attached IP. Finally, when using a router with several instances, doing backend connections (for instance from a web server to a database) can (and should) be done on the private network setup rather than on the public IPs. For this reason, we recommend using a router in all use cases except when using only a single server with a strong local firewall in place. 

The following tasks are recommended to complete before launching your first instance:

- Add your SSH-key to the platform (if provisioning Linux-based instances). 
- Create a network.
- Add a subnet to your network.
- Create a router.
- Connect the router to the subnet using an inteface.

Add an SSH-key
^^^^^^^^^^^^^^
Please see `this section </compute/ssh-keys>`_ for information on how to add an SSH key.

Create a network
^^^^^^^^^^^^^^^^
To create a network, follow these steps:
  - Press the "+" icon in the bottom right corner.
  - Press "Networking" and then "Network" in the sidebar menu.
  - Name the network and optionally add a description. 
  - "europe-se-1" should be pre-selected as region. 
  - Under "availability zone", select a zone - we recommend "europe-se-1a".
  - Press "create".

Add a subnet
^^^^^^^^^^^^^^^
To add a subnet (an ip-range) to the network you created above, follow these steps:
  - Press "Networking" and then "Network" in the sidebar menu. Select the network you created in the previous step.
  - In the top right corner, select "Create subnet" icon.
  - Name the subnet.
  - Type a network address in CIDR notation. This is the network your servers will run on. It needs to be in one of the RFC1918 ranges (10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16). If you are unsure what range to use we suggest "192.168.0.0/24".
  - Under "Gateway-ip", select "set standard gateway ip", this will select the first address in the range for your default route.
  - While you don't have to use DHCP, we strongly recommend it for an easier workflow. It should be pre-selected.
  - Under "add pool", select what pool you want in the range you choose in previous step. You add a start and stop, for example in the above 192.168.0.0/24 example a start might be "192.168.0.100" and stop "192.168.0.200" giving you 101 addresses in the poole. As the first adress (i.e. 192.168.0.1) is reserved for the gateway, you cant include that but can otherwise choose as you see your need.
  - Under "Add dns name server", add the name servers you want your network to use. Bineros name servers are 83.168.225.225 and 83.168.226.226 and we recommend those but you can use whichever you like.
  - press "create subnet" 


Create a router
^^^^^^^^^^^^^^^^^^^^^^^
To add a router, follow these steps: 
  - Press "Networking" and then "Routers" in the sidebar menu. 
  - Press the "+" icon in the bottom right corner.
  - "europe-se-1" should be pre-selected as region. 
  - Name the router and optionally add a description. 
  - Under "availability zone", select the same zone as the network you previously setup.
  - Under "choose external network", select the network with same name as the availability zone you choose.
  - Press create.

Connect router to subnet
^^^^^^^^^^^^^^^^^^^^^^^^
To connect your router to your subnet (to enable networking for the subnet through the router), follow these steps:
  - Press "Networking" and then "Routers" in the sidebar menu. Select the router you created in the previous step.
  - In the top right corner, select "Create interface" icon. 
  - The subnet you previously created should be pre-selected, if not select it.
  - In the "ip" for, enter the first IP in the subnet you previously created. If you choose 192.168.0.0/24, the first usable adress is 192.168.0.1.
  - Press "create".

At this point you are ready to provision your first compute instance! You have the option between the following methods: 

- `The cloud management portal </compute/launching-an-instance/cloud-management-portal>`_
- `OpenStack Horizon </compute/launching-an-instance/openstack-horizon>`_
- `OpenStack CLI </compute/launching-an-instance/openstack-terminal-client>`_
- `API </compute/compute-api>`_

For users starting out in the platform and/or users that are not used to working with public clouds, we recommend our cloud management portal.

..  seealso::
  - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
  - :doc:`/networking/router/index`
