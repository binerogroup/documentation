=========================================
Networking regions and availability zones
=========================================
Networking is a core service and is available in all Binero.Clouds regions and availability zones. Below we outline the region and availability zone concepts for networking. If you are looking to roll out a geo redundant network, understanding the base design principles will help you create a *very* resilient and highly available system with no dependencies between the availability zones. This is key to retaining connectivity (and overall system functionality) in the event of a hypothetical availability zone outage scenario.

Networks and subnets
--------------------
:doc:`virtual-router/private-network/index` (and therefore :doc:`virtual-router/private-subnet/index`) stretch between availability zones (but not between regions). This enables you to connect instances in different availability zones directly to each other on the same private subnet (same layer 2 broadcast domain). We do however recommend the routed approach to inter availability zone communication (more information in section about virtual routers below). 

.. Tip::
	A valid use case for using the same subnet in more then one availability zone would be a non routed back network. This might be used for backups, database connections, access from bounce server, etc. So long as its only used for traffic within the platform and not for ingress/egress to or from the platform, it will not introduce dependencies on a specific zone. This is a simple solution but usually implies multi homing instances (adding more than one port/nic) which would negate the gain by having to maintain more firewall rules, separate IP-networks, etc. Our recommendation therefore, is to use routing to communicate between availability zones. More on this below.

Virtual routers
---------------
Virtual routers are always local to an availability zone even though its possible to provision multi-zone routers using the terminal or horizon. The reason for this is that Binero.cloud does not currently incorporate anycast public ip-space, see section on :doc:`floating-ips` below for more information on this subject. 

.. Note::
	Provisioning a router in multiple availability zones will, silently, still provision in just the first zone of the region.

Therefore when using multiple availability zones, take care to have at least one virtual router per zone and always connect your instances or services to the router that is local to them. While its possible to connect a port on an instance to a router in a different availability zone via a network (as outline above), the router is not provisioned with high availability between zones (meaning the router would go offline should the zone its placed in go offline). All traffic ingressing and egressing a router will flow through the same availability zone (regardless of where the instances behind the router are located).

When setting up systems with geo-redundancy using more then one availability zone, its therefore recommended to setup a virtual router in each availability zone and :doc:`route traffic between them <virtual-router/routing-between-networks>` as this (in a scenario in which an availability zone would fail) would just bring down the one availability zone.

Floating IPs
------------
Because Binero.cloud is currently not using anycasted public IP-space, floating IPs are still local to a single availability zone. While its possible to connect a floating IP to an instance in another availability zone using a private network (that stretch across zones), should the availability zone that hosts the floating IP for some reason fail, the floating IP will fail with it also in the second availability zone. 

When working with public access, it is therefore recommended to connect floating IPs that are local to the instances or services they connect to, through a virtual router that is also hosted in the same availability zone. To send access to both (or several) sites, a `global load balancer </regions-and-availability-zones.html#global-load-balancing>`__ would be used to route traffic to all floating IPs.

Load balancing
--------------
The same way as with floating IPs and virtual routers, :doc:`load-balancing/index` will be able reach instances in availability zones that is not local to the load balancer (because the private networks stretches across availability zones). The actual load balancers, however, is still only local to a single zone and will fail in the even the zone should fail. That would leave the load balancer unreachable and the service down.

Summary
-------
When working with networking in multiple availability zones, care must be taken to not introduce dependencies between the zones. A dependency would bring down networking across multiple zones should the wrong zone fail. This would negate your efforts to setup a geo-redundant network when they matter the most - at the time of an actual outage.


..  seealso::
    - :doc:`/networking/virtual-router/index`
    - :doc:`/networking/floating-ips`
    - :doc:`/networking/load-balancing/index`
    - :doc:`/regions-and-availability-zones`