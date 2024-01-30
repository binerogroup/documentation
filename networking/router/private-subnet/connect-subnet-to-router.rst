========================
Connect subnet to router
========================
For most situations, you would want to connect your subnet to your router so that you can for instance reach the internet (or your other networks) through it. This means giving your router an interface on the network on which the subnet is defined as well as an IP-address on the subnet, thereby enabling traffic to be routed to and from the subnet.

For instructions on how to connect a subnet to a router, a step-by-step guide is available based on your choice of management platform:

- :doc:`cloud-management-portal`
- :doc:`openstack-horizon`
- :doc:`openstack-terminal-client`

.. Tip::
	If the communication on the subnet is only local to the hosts that connect to it (and does not need to be routed, that is reach other networks), there is no need (and indeed its not advised) to connect the subnet to a router. An example use-case where this might be true is a back-net on which for instance database connections or backups run. We generally recommend keeping it simple and not multi-homing (that is: connecting an instance to more then a single subnet). A network is easier to maintain if its obvious which route it takes. The reason for multi-homing is historically related to either capacity (which is normally not an issue in a public cloud) or security (which might actually be worsened by badly maintained firewall rules). 

..  seealso::
    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/router/index`
