==================
Launching a router
==================
To create a router in Binero.cloud, you have four main options as outlined in the links below. Each option have its pros and cons:

- :doc:`The cloud management portal <cloud-management-portal>` is very easy to use and will get a user with limited prior knowledge from A to B quickly. The tradeoff is that advanced features are not always available.
- :doc:`OpenStack Horizon <openstack-horizon>` is the web interface included in OpenStack. Some advanced features might only have a GUI implementation here.
- :doc:`The OpenStack terminal client <openstack-terminal-client>` is a command line implementation of OpenStack Horizon giving terminal oriented users a (very) quick way to access the cloud. The learning curve is steeper than the GUI implementation but the workflow will be very efficient.
- :doc:`The API </networking/network-api>` is the full OpenStack REST API. Its intended for users that are either writing infrastructure as code or using a third party application (for instance Terraform) that needs to reach the cloud provisioning layer directly.

.. Note::
	In order to create your router, you will first need to know in what :doc:`availability zone  </networking/regions-and-availability-zones>` to create it.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  cloud-management-portal
  openstack-horizon
  openstack-terminal-client
