======
Router
======

A router is the recommended approach for setting up networking in Binero.cloud. The opposite of a router are `directly connected internet access </networking/directly-attached-ips>`__. To a router you connect `private networks </networking/router/private-network/index>`__ on which you define `private subnets </networking/router/private-subnet/index>`_ that your instances connect to. Using a router enables (among other things):
  - :doc:`private-subnet/index`
  - :doc:`routing-between-networks`
  - :doc:`Security groups (firewalling) <security-groups/index>`
  - :doc:`../floating-ips`
  - :doc:`../load-balancing/index`

The typical workflow for starting out in the platform would be to do the following tasks;
  - :doc:`Create a router <launching-a-router/index>`
  - :doc:`Create a network <private-network/index>`
  - :doc:`Create a subnet and attach it to the router <private-subnet/index>`

After completing these steps (a guide is available :doc:`here </getting-started/launching-an-instance>`), you would have a versatile networking setup that will enable you to scale out your infrastructure.

.. Tip::
	We recommend reading through the :doc:`availability zone concepts for networking <../regions-and-availability-zones>` before creating your first router. 

.. toctree::
  :caption: Available services
  :maxdepth: 4

  launching-a-router/index
  private-network/index
  private-subnet/index
  routing-between-networks
  security-groups/index
  nat
  static-routing
