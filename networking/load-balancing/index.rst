==============
Load balancing
==============
When wanting to `scale </compute/resizing-an-instance/index.html#scaling-methods>`__ an application beyond that with which a single instance is suited for, using several instances that share the load (by answering alternating requests) is a good solution. This concept is called *load balancing*. Another benefit of load balancing is that load balanced applications are inherently more resilient (highly available), because several servers are more reliable than a single one - provided the faulty ones are detected and removed from service. Its the load balancers job to make sure that the instances behind it (the so called "members") are working and if not, remove them from rotation.

In Binero.cloud, we provide a complete load balancing suite that requires very little effort to setup as well as maintain. The system is in itself highly available (two load balancers are setup, one active and one passive) and is based on acclaimed open source project HA-proxy. You are able to manage the load balancer using either the cloud management portal, OpenStack Horizon or the OpenStack terminal client. 

Load balancers require a :doc:`virtual router <../virtual-router/index>` and members on a :doc:`private subnet <../virtual-router/private-subnet/index>` to work. 

.. Note::
	Currently, load balancing is only available as a service in EU-SE-1A availability zone. We are working on making it available in other zones as well.

.. toctree::
  :caption: Available services
  :maxdepth: 2

  general-concept/index  
  recommendations 
  launching-a-loadbalancer/index
  ssl-termination
  layer7-policies/index