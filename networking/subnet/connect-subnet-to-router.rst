========================
Connect subnet to router
========================

For most situations, you would want to connect your subnet to your router so that you can
for example reach the internet (or your other networks) through it.

This means giving your router an interface on the network on which the subnet exists
and an IP address on the subnet, thereby enabling traffic routing to and from the subnet.

For instructions on how to connect a subnet to a router, a step-by-step guide is available
based on your choice of management platform:

- :doc:`cloud-management-portal`

- :doc:`openstack-horizon`

- :doc:`openstack-terminal-client`

.. tip::

   If the communication on the subnet is only local to hosts that connect to it (and does
   not need routing) there is no need (and indeed its not advised) to connect the subnet to
   a router.

   An example use-case where this might be true is an isolated backend network on which for
   example database connections or backups run.

   We generally recommend keeping your setup clean and consistent and not use multi-homing,
   that is connecting an instance to more than one subnet as troubleshooting your network
   is easier with a clean and structured network design.

   The reason for multi-homing is historically related to either capacity or security, none
   of which is a problem in a modern cloud platform.

..  seealso::

    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/router/index`
