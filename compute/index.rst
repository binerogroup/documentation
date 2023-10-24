=======
Compute
=======

Compute is one of the core services in Binero.cloud. Compute is comprised of instances (virtual servers) of a certain :doc:`flavor <flavors>` (performance) running an :doc:`image <../images/index>` (operating system). Instances normally utilise :doc:`/storage/persistent-block-storage/index` to save files and folders on a filesystem and are reachable via either :doc:`/networking/floating-ips` or :doc:`/networking/directly-attached-ips`.

You are able to :doc:`launch <launching-an-instance/index>`, :doc:`resize <resizing-an-instance/index>`, :doc:`shelf <shelving-an-instance>` (offline store) and delete instances via one of the following methods:

- :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
- :doc:`/getting-started/managing-your-cloud/openstack-horizon`
- :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`
- :doc:`/openstack-api`

More information on the various ways to manage your cloud is available in the :doc:`/getting-started/managing-your-cloud/index` article.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  ssh-keys
  flavors
  launching-an-instance/index
  resizing-an-instance/index
  assign-ip
  console
  hard-reboot
  shelving-an-instance
  windows-instances
  gpu-instances
  regions-and-availability-zones
  compute-api
