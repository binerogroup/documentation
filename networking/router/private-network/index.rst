================
Private networks
================

General concept
---------------

A private network in Binero cloud is a software-defined virtualized network. The network will connect to :doc:`ports </networking/ports>` on routers or instances just as a physical server might connect to a port in a switch. Networks, therefore, are the carriers of network traffic in your infrastructure and would normally terminate in a router (for routing to another network or the internet) or an :doc:`instance </compute/index>`. 

Networks are what connects the infrastructure together. Assuming you want to use only manual IP assignments on your infrastructure, creating networks and ports would be enough. The :doc:`private subnets <../private-subnet/index>` will however enable lost of automation and additional features in the platform and is the recommended approach for setting up IP configuration on networks. When referring to the standard OSI model for networking, a private network is equal to layer 2, a private subnet is (allowing for automatic configuration of) layer 3.

.. note:: While a network would be enough (provided you would want to manage your IP layer manually, its recommended to use the OpenStack approach to networking which is to use private networks that in turn have private subnets configured on them as it greatly improves the user experience and some services in the platform will rely on doing so.

Managing private networks
-------------------------

You are able to manage private networks using either of the below tools.

- :doc:`The cloud management portal <cloud-management-portal>` is very easy to use and will get a user with limited prior knowledge from A to B quickly. The tradeoff is that advanced features are not always available.
- :doc:`OpenStack Horizon <openstack-horizon>` is the web interface included in OpenStack. Some advanced features might only have a GUI implementation here.
- :doc:`OpenStack terminal client <openstack-terminal-client>` is a command line implementation giving terminal oriented users a (very) quick way to access the cloud. The learning curve is steeper than the GUI implementation but the workflow will be very efficient.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  cloud-management-portal
  openstack-horizon
  openstack-terminal-client
