=========================
Launching a load balancer
=========================

.. note::

   Before launching your first load balancer, we strongly recommend reading
   our :doc:`concepts <../general-concept/index>` guide so as to understand
   the various parts.

We also suggest our :doc:`recommendations for load balancing <../recommendations>` article
for some general tips that might improve your load balancing implementation.

To create a load balancer in Binero cloud, you have three main options as outlined in
the links below. Each option have its pros and cons:

- :doc:`The cloud management portal <cloud-management-portal>` is recommend and will get
  a user with limited prior knowledge from A to B quickly. The trade-off is that
  advanced features are not always available.

- :doc:`OpenStack Horizon <openstack-horizon>` is the web interface included in
  OpenStack. Some advanced features might only have a GUI implementation here.

- :doc:`The OpenStack terminal client <openstack-terminal-client>` is a command line
  giving terminal oriented users a quick way to access the cloud. The learning curve
  is steeper than the GUI implementation but the workflow will be efficient.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  cloud-management-portal
  openstack-horizon
  openstack-terminal-client
