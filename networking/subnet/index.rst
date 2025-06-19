=======
Subnets
=======

General concept
---------------

A subnet in Binero cloud is a :doc:`IP subnet <subnet-format>` on a :doc:`network <../network/index>`
that is local to you and isolated on a network and only reachable through a :doc:`router <../router/index>`
with the exception if you are using :doc:`directly attached IP addresses <../directly-attached-ips>`.

When creating a new instance, it's connected to a :doc:`network <../network/index>` and receives a IP address
from a subnet on that network.

When you create a subnet, you add it to a :doc:`network <../network/index>`.

This will allow you to:

- Use addresses from the subnet when creating instances, either by using :doc:`dhcp`
  (which we recommended) or by manually assigning a fixed IP address from the subnet.

- Use the subnet as a :doc:`gateway <connect-subnet-to-router>` for the network, by assigning
  it to a router.

You are also able to :doc:`route between networks <../router/routing-between-networks>`. This is useful
for creating security zones or for segmenting your infrastructure into different networks and subnets (for
example when having separated production and staging system).

Managing subnets
----------------

You are able to manage subnets by using either of the below tools.

- :doc:`The cloud management portal <cloud-management-portal>` is a good start and recommended to get a
  user with limited prior knowledge from A to B quickly. The tradeoff is that advanced features are not
  always available.

- :doc:`OpenStack Horizon <openstack-horizon>` is the web interface included in OpenStack. Some
  advanced features might only have a GUI implementation here.

- :doc:`OpenStack terminal client <openstack-terminal-client>` is a command line implementation
  giving terminal oriented users a quick way to access the cloud. The learning curve is steeper
  than the GUI implementation but the workflow will be efficient.

Choosing an IP range
--------------------

When IP addressing your network you would typically choose some IP range that's reserved for internal use
(presumably something from the `RFC1918 <https://en.wikipedia.org/wiki/Private_network>`__ range).

In Binero cloud you are able to select whichever range you prefer for your networking but we recommend
sticking to the ranges that's intended for internal use (according to above link) as you might otherwise
experience issues with your connectivity.

More information on defining an IP range for use in the cloud in the :doc:`subnet-format` article.

In the subsections to this article we show some ways to work with subnets by using the different portals.

.. tip::

   When selecting what IP-range to use, remember that you might want (at some point) to connect your
   infrastructure to some other network by using a site-to-site tunnel.

   We recommend that you choose a range that is less likely to be overlapping other subnets.

   The best way to do this, in our opinion, is to use a range from somewhere in the middle of
   172.16.0.0/12 (for example 172.29.45.0/24). 

.. tip::

   Take care to choose a subnet size (or mask) that has enough IP-space for your need.

   We recommend envisioning the largest amount of IP addresses you think you'll ever need and then
   at least doubling the amount of addresses.

   If you, for example, think you might have 20 servers then a single /24 (C-class) network with 255 addresses
   might be enough.

   If you think you might need to have 100 servers at some point (keeping in mind some servers will have
   more than one address) then aim for a subnet with a /23 mas that would give you 510 usable addresses.

.. toctree::
  :caption: Available services
  :maxdepth: 2

  cloud-management-portal
  openstack-horizon
  openstack-terminal-client
  subnet-format
  connect-subnet-to-router
  dhcp
