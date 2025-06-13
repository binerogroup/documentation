==============
Static routing
==============

General concept
---------------

Routing is (normally, exclusively in the context of Binero clouds implementation) done based
on destination.

The two key parameters when talking about routing is:

- The destination IP

- The gateway IP used as the next hop

When routing packets, a router will consult a routing table that will have various network ranges
available, each matched to a next hop (or gateway) which is the next device the packet should be
sent to in order to reach its destination.

When routing, an IP packets destination IP will be identified as belonging to a network in the routing
table and the router will forward the packet to the next-hop (or gateway) of that network. 

Should the router be directly connected to the network in question (local to the network), it will
instead use Address Resolution Protocol (ARP) to map the destination IP to a hardware (MAC) address
and forward the packet to its final destination.

Static routing is the process of manually defining what subnets (network ranges) there are and
behind what routers they are connected so that the routers are able to forward the packets.

It is only needed if there is *more then a single router in the network* (as a single router would be
expected to be connected to all networks directly and then would manage all the routing based on that).

If a routing entry is missing and the routers are not able to match a destination IP to a network in
their tables, one of two things will happen:

- The routers will use their **default route** (if present). This would normally point upstream to the
  internet so effectively the packet would get lost in an upstream router that does not route private
  networks and would drop the packet.

- If there is no default route, the packet would get dropped.

.. note::

   The next-hop of a routing entry will need to be reachable *and on a common network* (that is a network
   to which both the sending and receiving router are connected).

   Routing cannot rely on routing to reach a gateway, all gateways need to be directly accessible. A link-network
   is commonly use for this (but any subnet will suffice when the routers are both connected to it), see
   our :doc:`routing-between-networks` for more information.

Working with static routes
--------------------------

Below is shown how to add static routes to a :doc:`router <index>` using the various tools.

Since you route based on destination (but also need to account for return traffic, that is the traffic that
a requests reply would generate), you would want to add the routes to both (or several) sides with the distinction
that the networks defined on each router are the ones **not local** to that router.

The routing entries are therefore *not the same* on any two (ore more) routers.

.. important::

   If you (mistakenly) add a route to a router that is already local to it (that is connected to it by an interface), the
   affected subnet would stop working. Only add routing entries to *remote* networks. Local networks are already routed
   by being directly connected.

Static routing is currently only supported using :doc:`OpenStack Horizon </getting-started/managing-your-cloud/openstack-horizon>`
or the :doc:`OpenStack terminal client </getting-started/managing-your-cloud/openstack-terminal-client>`.

OpenStack Horizon
^^^^^^^^^^^^^^^^^

- Under **Project**, click **Network** and then **Routers** in the sidebar menu.

- Press the name of the router you want to connect the subnet to.

- Press the **Static Routes** tab on the top.

- Press **Add static route**

- In the **Destination CIDR** field, type the *destination IP range* (that is, the network behind the neighbour router that you
  want to reach) in :doc:`CIDR format <../subnet/subnet-format>`. 

- In the **Next Hop** field, type the gateway address, that is the address that the neighbour router has on the network which
  it shares with the router you are adding the static route to - and to where you want to forward traffic.

- Press **Submit**. 

OpenStack terminal client
^^^^^^^^^^^^^^^^^^^^^^^^^

- Run: ``openstack router list`` to get the list of your available routers. Save the name of the router you want to
  connect the subnet to.

- Run: ``openstack router add route --route destination=[DESTINATION_RANGE],gateway=[GATEWAY IP] [ROUTER NAME]``, replacing
  the items in brackets to *destination IP range* (the network behind the neighbour router that you want to reach)
  in :doc:`CIDR format <../subnet/subnet-format>`, the gateway address (the address that the neighbour router has on
  the network which it shares with the router you are adding the static route to - and to where you want to forward traffic)
  and the router name (from previous step).

..  seealso::

    - :doc:`../subnet/subnet-format`
    - :doc:`routing-between-networks`
    - :doc:`index`
