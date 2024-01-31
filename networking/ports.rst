=====
Ports
=====

A port is a virtual representation of a physical switch-port. That is, a connection between a :doc:`network <router/private-network/index>` (does not have to be a private) and an instance or a router. Ports are generally created on demand by connecting an instance to a subnet (via a network). If you for some reason need to create a port manually, that can also be done (see below). If you do, you also need to assign the port (explicitly) to the instance you want to connect to a network. Remember that a manually created port may not be removed when you remove an instance.

.. note:: There are only certain special use-cases where you would want to manually create a port. One use case is if you want to assign multiple interfaces to the same network when creating an instance. Its only possible to add a network once, but many ports can be assigned that each connect to the same network. 

We recommend sticking to a single port (or interface) on an instance as its generally easier to understand the network flow and plan security that way. :doc:`Routing <router/routing-between-networks>` should instead be used. If using this network design then adding ports  manually should rarely be needed as an instance will have a port created when launched.

Below we will however show how to create ports in the various tools.

.. note:: Should you opt not to use :doc:`router/private-subnet/dhcp` to assign IP configuration to a new port (interface), keep in mind that the :doc:`mtu` is also set via DHCP and needs to be set manually in these cases. 

Create a port using the cloud management portal
-----------------------------------------------

To create a port using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

- Press "Networking" and then "Ports" in the sidebar menu.
- Press the "+" icon in the bottom right corner.
- Name your port. 
- Select the :doc:`private network <router/private-network/index>` you want to connect to under "Network".
- Select "Subnet" under "Ip address or subnet". If you would rather manage your IP-configuration on your instance manually (not recommended), you would instead leave "unspecified".
- Select the :doc:`private subnet <router/private-subnet/index>` you want to use. 
- Press "create".

Create a port using OpenStack Horizon
-------------------------------------

To create a port using the :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

- Under "project", click "Network" and then "Networks" in the sidebar menu.
- Click the name of the network to which you want to add the port. 
- Press the "Ports" tab on the top.
- Press "Create port".
- Name your port. 
- Choose "Subnet" under "Specify IP address or subnet". If you would rather manage your IP-configuration on your instance manually (not recommended), you would instead leave "unspecified".
- Select the :doc:`private subnet <router/private-subnet/index>` you want to use.
- Press "Create".

Create a port using OpenStack terminal client
---------------------------------------------

- Run this command: ``openstack network list``. Save the name of the network you want to connect to.
- Run this command: ``openstack subnet list``. Save the name of the subnet you want to use (assuming you want to let the platform configure an IP on the port.
- Run this command: ``openstack port create --network [NETWORK NAME] --fixed-ip subnet=[SUBNET NAME] [PORT NAME]``, replacing the items in angle brackets with the information from the previous steps and the name of the port. If you want to know more options, use "-h" at the end of the command.

.. note:: Your port is now available for use but remember it will also need to be :doc:`assigned to an instance </compute/assign-ip>` before it can be used.
