=====================
Launching an instance
=====================

To launch a new compute instance in Binero cloud, you have four main options
as outlined in the links below. Each option have its pros and cons:

- :doc:`The cloud management portal <cloud-management-portal>` is very easy to
  use and will get a user with limited prior knowledge from A to B quickly. The
  tradeoff is that advanced features are not always available.

- :doc:`OpenStack Horizon <openstack-horizon>` is the web interface included in
  OpenStack. Some advanced features might only have a GUI implementation here.

- :doc:`OpenStack terminal client <openstack-terminal-client>` is a command line
  implementation giving terminal oriented users a (very) quick way to access the
  cloud. The learning curve is steeper than the GUI implementation but the workflow
  will be very efficient.

- :doc:`The API </compute/compute-api>` is the full OpenStack REST API. Its intended
  for users that are either writing infrastructure as code or using a third party
  application (for instance Terraform) that needs to reach the cloud provisioning
  layer directly.

.. note::

   In order to create an instance, you will first need to know what :doc:`flavor <../flavors>`
   you want as well as what :doc:`image </images/index>` to boot from. If you have not configured
   SSH-keys (for Linux) or nerworking yet, you may want to do :doc:`some initial configuration first </getting-started/launching-an-instance>`.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  cloud-management-portal
  openstack-horizon
  openstack-terminal-client
