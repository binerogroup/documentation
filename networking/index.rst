==========
Networking
==========
Networking is a core function in the In Binero.cloud platform. It features a complete suite of virtualised networking functions ranging from routing, firewalling and high speed internet access to VPNs (Virtual Private Networks) and load balancers.

The two main methods to connect to the internet is to either assign a :doc:`directly attached IP <directly-attached-ips>` to your instance or setup a :doc:`virtual router <virtual-router/index>` and connect a :doc:`private subnet <virtual-router/private-subnet/index>` to the router and your instance, then use a :doc:`floating ip <floating-ips>` to your instance (which is the recommended approach).

The general design of networking in the platform is that :doc:`instances </compute/index>` use :doc:`ports <ports>` to connect to :doc:`networks <virtual-router/private-network/index>`. Networks in turn, have :doc:`private subnets <virtual-router/private-subnet/index>` that assign IPs to instances. :doc:`Floating ip <floating-ips>` are publicly routed IPs that can be mapped (1:1) to a private IP to either publish services on the internet or provide servers with access to the internet. 

Please see the various subsections to this article in order to get a good understanding of the networking possibilities in the platform. If you are looking to **get started** with networking, we recommend our :doc:`getting started guide <../getting-started/launching-an-instance>` that will guide you through setting up a versatile solution using a single subnet behind a virtual router. 

.. toctree::
  :caption: Available services
  :maxdepth: 2

  virtual-router/index
  floating-ips
  directly-attached-ips
  ports
  mtu
  load-balancing/index
  reaching-your-instances
  client-vpn/index
  site-to-site-vpn/index
  custom-firewall-router
  reverse-dns-ptr
  regions-and-availability-zones
  network-api
