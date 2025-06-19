=========================================
Networking regions and availability zones
=========================================

Networking is a core service and is available in all Binero clouds regions and
availability zones.

Below we outline the region and availability zone concepts for networking.

If you are looking to deploy a geographically redundant network, understanding the base
design principles will help you create a resilient and highly available system with no
dependencies between the availability zones.

This is key to retaining connectivity (and system functionality) in case of a hypothetical
availability zone outage scenario.

Networks and subnets
--------------------

:doc:`network/index` (and :doc:`subnet/index`) is available in all availability zones in the
region, but **not** between regions.

This enables you to connect instances in different availability zones directly to each other
on the same network (same layer 2 broadcast domain).

We do recommend the routed approach to inter availability zone communication (more
information in section about routers below). 

.. tip::

   A valid use case for using the same subnet in more then one availability zone would be a non
   routed back network.

   You could use this for backups, database connections, access from bounce server, and so on.

   If its only used for traffic within the platform and not for ingress or egress to the
   platform, it will not introduce dependencies on a specific zone.

   This is a solution but implies multi homing instances (adding more than one port) which would
   negate the gain by having to maintain more firewall rules, separate IP networks and more
   complex to troubleshoot.

   Our recommendation is to use routing to communicate between availability
   zones. More on this below.

Routers
-------

Routers are always local to an availability zone even though its possible to provision multi-zone
routers by using the OpenStack terminal client or OpenStack Horizon.

The reason for this is that Binero cloud does not provide anycast public IP addresses, see section
on :doc:`floating-ips` below for more information on this subject. 

.. note::

   Selecting more than one Availability Zone Hint when provisioning a router will, silently, still
   provision in just the first zone of the region.

When using many availability zones, take care to have at least one router per zone and
always connect your instances or services to the router that is local to them.

While its possible to connect a port on an instance to a router in a different availability zone via
a network (as outline above), the router is not provisioned with high availability between zones (meaning
the router would go offline should the zone its placed in go offline).

All traffic flowing through a router will go through the same availability zone (regardless of the
location of the instances behind the router).

When setting up systems with geographic redundancy by using more then one availability zone, its recommended
to setup a router in each availability zone and :doc:`route traffic between them <router/routing-between-networks>`
as this (in a scenario in which an availability zone becomes unavailable) would just bring down the one availability
zone.

Floating IP addresses
---------------------

Because Binero cloud is does not provide anycast public IP addresses, floating IP addresses are still
local to a single availability zone.

While its possible to connect a floating IP to an instance in another availability zone by using a network (that
stretch across zones), should the availability zone that hosts the floating IP for some reason fail, the floating
IP will fail with it also in the second availability zone. 

When working with public access, it's recommended to connect floating IP addresses that are local to the instances
or services they connect to, through a router that is also hosted in the same availability zone.

To send traffic to one or more availability zones, a `global load balancer </regions-and-availability-zones.html#global-load-balancing>`__
would route traffic to all floating IP addresses.

Load balancer
-------------

The same way as with floating IP addresses and routers, :doc:`load-balancer/index` will be able reach instances
in availability zones that is not local to the load balancer (because the networks stretches across availability
zones).

The actual load balancers, are still only local to a single zone and will fail in the even the zone
should fail. That would leave the load balancer unreachable and the service down.

Summary
-------

When working with networking in many availability zones, you should take care to not introduce dependencies
between the zones.

A dependency would bring down networking across availability zones should the availability zone with being
dependent on become unavailable. This would negate your efforts to setup a geographically redundant network
when it matter the most.

..  seealso::

    - :doc:`/networking/router/index`
    - :doc:`/networking/floating-ips`
    - :doc:`/networking/load-balancer/index`
    - :doc:`/regions-and-availability-zones`
