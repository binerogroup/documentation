======
Router
======

A router is the recommended approach for setting up networking in Binero cloud. The opposite of a
router are `directly attached IP addresses </networking/directly-attached-ips>`__.

To a router you connect `networks </networking/network/index>`__ on which you define
`subnets </networking/subnet/index>`_ that your instances connect to. Using a router
enables (among other things):

- :doc:`../subnet/index`

- :doc:`routing-between-networks`

- :doc:`../floating-ips`

- :doc:`../load-balancer/index`

The typical workflow for starting out in the platform would be to do the following tasks:

- :doc:`Create a router <launching-a-router/index>`

- Create a :doc:`network <../network/index>` and :doc:`subnet <../subnet/index>`

- :doc:`Add the subnet as a router interface <../subnet/connect-subnet-to-router>`

After completing these steps (a guide is available :doc:`here </getting-started/launching-an-instance>`), you
would have a versatile networking setup that will enable you to scale out your infrastructure.

.. tip::

   We recommend reading through the :doc:`availability zone concepts for networking <../regions-and-availability-zones>`
   before creating your first router. 

.. seealso::

  - :doc:`../network/index`
  - :doc:`../subnet/index`
  - :doc:`../security-groups/index`

.. toctree::
  :caption: Available services
  :maxdepth: 4

  launching-a-router/index
  routing-between-networks
  nat
  static-routing
