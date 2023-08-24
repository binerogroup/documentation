===============
Private subnets
===============

General concept
---------------
A private subnet in Binero.cloud is an :doc:`IP-range <subnet-format>` that is local to your project on the platform and therefore not reachable from outside your virtual router (with :doc:`exception for routing between routers <../routing-between-networks>`). A private subnet should not be confused with a shared, :doc:`external subnet <../../floating-ips>` which is used by many customers for external access to the internet. When provisioning a new instance, it would typically bet connect to a private subnet (if using a :doc:`virtual router <../index>` networking model).

When you create a private subnet, you assign it to a :doc:`network <../private-network/index>`. It will enable you to: 
  - Use addresses from the subnet when creating instances, either by using :doc:`dhcp` (which is recommended) or by manually assigning addresses from the subnet.
  - Assign an individual IP-address as the :doc:`gateway IP-address <connect-subnet-to-router>` for the network, by assigning it to a virtual router.

You are also able to :doc:`route between networks <../routing-between-networks>`. This is useful for creating security zones or for segmenting your infrastructure in multiple subnets (for instance when having a production and staging system).

Managing private subnets
------------------------
You are able to manage private subnets using either of the below tools.

- :doc:`The cloud management portal <cloud-management-portal>` is very easy to use and will get a user with limited prior knowledge from A to B quickly. The tradeoff is that advanced features are not always available.
- :doc:`OpenStack Horizon <openstack-horizon>` is the web interface included in OpenStack. Some advanced features might only have a GUI implementation here.
- :doc:`OpenStack terminal client <openstack-terminal-client>` is a command line implementation of OpenStack Horizon giving terminal oriented users a (very) quick way to access the cloud. The learning curve is steeper than the GUI implementation but the workflow will be very efficient.

Choosing an IP-range
--------------------
When ip-addressing your network you would typically choose some IP-range that is reserved for internal use (presumably something from the `RFC1918 range <https://en.wikipedia.org/wiki/Private_network>`__). In Binero.cloud you are able to select whichever range you prefer for your networking but we recommend sticking to the ranges that are intended for internal use (as per above link) as you may otherwise experience issues with your connectivity. More information on defining an IP-range for use in the cloud in the :doc:`subnet-format` article.

In the subsections to this article we show some ways to work with subnets using the various portals.

.. Tip::
	When selecting what IP-range to use, keep in mind that you might want (at some point) to connect your infrastructure to some other network by using a site-to-site tunnel. We recommend, therefore, to choose a range that is less likely to be overlapping other subnets. The best way to do this, in our opinion, is to use a range from somewhere in the middle of 172.16.0.0/12 (for instance 172.29.45.0/24). 

.. Tip:: 
	Take care to choose a subnet size (or mask) that has enough IP-space for your need. We recommend envisioning the largest amount of IPs you think you'll ever need and then at least doubling the amount of addresses. If you, for instance, think you might have 20 servers then a single /24 (C-class) network with 255 addresses might be enough. If you think you might need to have 100 servers at some point (keeping in mind some servers will have multiple addresses) then maybe aim for a subnet with a /23 mas that would give you 510 usable addresses.


.. toctree::
  :caption: Available services
  :maxdepth: 2

  cloud-management-portal
  openstack-horizon
  openstack-terminal-client
  subnet-format
  connect-subnet-to-router
  dhcp
