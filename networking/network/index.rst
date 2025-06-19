========
Networks
========

General concept
---------------

A network in Binero cloud is a software-defined virtual network.

The network will connect to :doc:`ports </networking/ports>` on routers or
instances just as a physical server might connect to a port in a switch.

Networks are the carriers of traffic in your infrastructure and would normally
enter or leave through a :doc:`router </networking/router/index>` (for
routing to another network or the internet) or an :doc:`instance </compute/index>`. 

Networks are what connects the infrastructure together. Assuming you want to use
only manual IP assignments on your infrastructure, creating networks and ports would
be enough.

You add one or more :doc:`subnets <../subnet/index>` to a network to provide IP
addressing for ports.

.. note::

   While a network would be enough (provided you would want to manage your IP layer
   manually, its recommended to use the OpenStack approach to networking which is
   to use networks that in turn have subnets configured on them as it greatly improves
   the user experience and some services in the platform will rely on doing so.

Managing networks
-----------------

You are able to manage networks by using either of the below tools.

- :doc:`The cloud management portal <cloud-management-portal>` is what we recommended
  and will get a user with limited prior knowledge from A to B quickly. The tradeoff
  is that advanced features are not always available.

- :doc:`OpenStack Horizon <openstack-horizon>` is the web interface included in
  OpenStack. Some advanced features might only have a GUI implementation here.

- :doc:`OpenStack terminal client <openstack-terminal-client>` is a command line
  implementation giving terminal oriented users a quick way to access the cloud. The
  learning curve is steeper than the GUI implementation but the workflow will be
  efficient.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  cloud-management-portal
  openstack-horizon
  openstack-terminal-client
