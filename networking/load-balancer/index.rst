=============
Load Balancer
=============

Binero cloud provides a managed load balancer service that you can
use when `scaling </compute/resizing-an-instance/index.html#scaling-methods>`_
and making your application more resilient and highly available with
little effort for you.

The service handles the ingress traffic and requests to your application
with support for healthchecks. See the :doc:`general-concept/index` for more
details on how the service works.

The load balancer service builds on the well-established open source projects
`HAProxy <https://www.haproxy.org>`_ and `Keepalived <https://www.keepalived.org>`_
and all load balancers created is highly available and redundant.

Binero handles security and patching of your load balancer infrastructure at
no extra cost and it's included in the price.

You can manage your load balancers by using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`,
:doc:`/getting-started/managing-your-cloud/openstack-horizon`,
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client` or the API.

The load balancer service is available in all our
:doc:`availability zones </regions-and-availability-zones>`.

.. note::

   If availability zone is not selected it will always default to the
   **europe-se-1a** availability zone.

.. note::

   The load balancer service requires a :doc:`router <../router/index>`
   and members on a :doc:`subnet <../subnet/index>` to use.

.. caution::

   The availability zone on a :doc:`index` only selects where to place your load
   balancer, incoming traffic from the internet will still go through the availability
   zone of the :doc:`/networking/router/index`.

.. toctree::
  :maxdepth: 2

  general-concept/index  
  recommendations 
  launching-a-loadbalancer/index
  ssl-termination
  layer7-policies/index
