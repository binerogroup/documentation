========================
Routing between networks
========================

General concept
---------------
Routing in Binero.cloud is managed using a :doc:`virtual router <index>`. The router will connect to different :doc:`subnets<private-subnet/index>` using an interfaces that connects to a :doc:`network <private-network/index>`. A standard router typically routes automatically between all its connected subnets (that is, subnets on which the router has an IP-address). A virtual router in Binero.cloud works the same way, traffic received by a router destined to a connected network on that router will be forwarded through the router. If the destination network is unknown to the router, it will use its *default route* (which is usually facing the internet). 

.. Note::
	If you for some reason want to use an instance as a router (perhaps you prefer some software based routing suite) instead of a virtual router, this is a viable use case. Just create an instance with the correct interfaces setup on the various subnets. We recommend using a virtual router as some features in the platform depends on having one setup.

Instance configuration
----------------------
A compute instance will also use routing to decide on what interface to egress traffic. It will do this based on destination and its routing table. Three main scenarios exist:

- Traffic destined for networks on which the instance itself has an IP-address (locally connected networks) will take precedence and the instance will instead use ARP to lookup the MAC address of the receiving instance and send traffic directly to it. 

- Traffic that is destined to a subnet that is in the instances routing table will be sent to the next hop (or gateway) of that subnet as stated in the routing table. The next hop would typically be a virtual router. 

- Finally, traffic that is destined to somewhere that is completely unknown to the instance (not in its routing table). This traffic is (provided one is setup) sent to the instances default route (the route that should be used when no more specific route exists). When creating a subnet in Binero.cloud, a default gateway is usually define for that subnet. The IP that is the default gateway is usually connected to a virtual router.

.. Tip::
	While its possible to connect an instance to multiple virtual routers, this will require you to maintain static routes on the instances themselves (as per the middle option above). This can be done via DHCP but is still cumbersome and will add complexity in maintaining the firewall when traffic ingress and egress through multiple interfaces. An easier approach is to use just a single interface facing a single virtual router which becomes responsible for handling the upstream routing. In this scenario, only the first and third examples as per above is used.

Single virtual router
---------------------

::

  ┌─────────────────────────────────────┐
  │               Router1               │
  └─────────────────────────────────────┘
       ▲             ▲             ▲
       │             │             │
       │             │             │
  ┌────┴────┐   ┌────┴────┐   ┌────┴────┐
  │ Subnet1 │   │ Subnet2 │   │ Subnet3 │
  └─────────┘   └─────────┘   └─────────┘


The easiest routing setup (which is the one we recommend, if not using more then one :doc:`availability zone <../regions-and-availability-zones>`) is using a single router with as many subnets connected as is needed. Reasons for wanting to route between multiple subnets might be: 

- Wanting to have different security zones where you force traffic through the router (that also does firewalling).
- Wanting to split different sub-projects (or end users) in their own networks. 
- Wanting to keep a staging system and production system separated.
- Etc.

If you use a single router, make sure its the default route for your VMs (see :doc:`private-subnet/index`), routing between the networks would then work out of the box. The typical caveat (if traffic is not flowing as expected) would be :doc:`security-groups/index` that (if not setup properly) blocks traffic.

Multiple virtual routers
------------------------
::

                                             link
  ┌─────────────────────────────────────┐   network   ┌─────────────────────────────────────┐
  │               Router1               │◄───────────►│               Router2               │
  └─────────────────────────────────────┘             └─────────────────────────────────────┘
       ▲             ▲             ▲                       ▲             ▲             ▲
       │             │             │                       │             │             │
       │             │             │                       │             │             │
  ┌────┴────┐   ┌────┴────┐   ┌────┴────┐             ┌────┴────┐   ┌────┴────┐   ┌────┴────┐
  │ Subnet1 │   │ Subnet2 │   │ Subnet3 │             │ Subnet4 │   │ Subnet5 │   │ Subnet6 │
  └─────────┘   └─────────┘   └─────────┘             └─────────┘   └─────────┘   └─────────┘

The typical use case for having multiple virtual routers is to run a multi availability zone setup for geo redundancy (but there may be other use cases). If you are considering implementing multiple availability zones, we strongly recommend you to read our article ":doc:`../regions-and-availability-zones`" which explains the concepts before proceeding.

When routing between routers, its recommended to first setup the individual virtual routers so that they work as intended on their own (potentially in several availability zones) before proceeding to route between them.

When setting up routing between routers, a so called *link network* will be used. This is a standard private subnet that will not connect to instances, just the various routers in the setup. We recommend :doc:`choosing an IP-range <private-subnet/index>` for this subnet that is easy to differentiate from your production subnets. 

Follow the below steps to setup routing between two (individually functioning) routers:

- :doc:`Create a new private network <private-network/index>` (with a corresponding private subnet) to use as link network. 
- :doc:`Connect the new link-network to the routers <private-subnet/connect-subnet-to-router>`. 
- :doc:`Setup static routing <static-routing>` for your destination networks to use the new link-network. This should be done on all routers. 
- Depending on your settings, change or add :doc:`security groups <security-groups/index>` to the router interfaces to allow traffic.

Once the above steps are taken, you will be able to forward traffic between routers from all instances behind the routers. 

Dynamic routing
---------------
For wanting to use a dynamic routing protocol (most commonly BGP), you would need to use instances as routers. Binero.cloud only supports static routing in the virtual routers. 

..  seealso::
    - :doc:`static-routing`
    - :doc:`security-groups/index`
    - :doc:`../regions-and-availability-zones`



