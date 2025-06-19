==============
Static routing
==============

General concept
---------------

Routing is, in the context of Binero clouds implementation, done based
on destination.

The two key parameters when talking about routing is:

- The destination IP

- The gateway IP used as the next hop

When routing packets, a router will consult a routing table that will have different routes to networks
available, each matched to a next hop (or gateway) which is the next device the packet gets sent to
reach its destination.

When routing an IP packets, the destination IP belongs to a network of which we match against the
routing table, the router will then forward the packet to the next hop (or gateway) to reach that
network.

Should the router be directly connected to the network in question (local to the network), it will
instead use Address Resolution Protocol (ARP) to map the destination IP to a hardware (MAC) address
and forward the packet to its final destination.

Static routing is the process of manually defining what networks exists and what next hop to use when
forwarding packets to reach that destination.

It's only needed if there is *more then a single router in the network* as a single router normally
connects to all networks directly and already knows how to reach all networks.

If a routing entry is missing and the routers are not able to match a destination IP to a network in
their tables, one of two things will happen:

- The routers will use their **default route** (if present). This would normally point upstream to the
  internet so effectively the packet would get lost in an upstream router that does not route private
  networks and would drop the packet.

- If there is no default route, the packet would get dropped.

.. note::

   The next hop of a routing entry will need to be reachable *and on a common network* (that is a network
   to which both the sending and receiving router has).

   Routing cannot rely on routing to reach a gateway, all gateways need to be directly accessible. A link-network
   is commonly use for this (but any subnet will suffice when the routers are both connected to it), see
   our :doc:`routing-between-networks` for more information.

Working with static routes
--------------------------

Below is how to add static routes to a :doc:`router <index>`.

Since you route based on destination (but also need to account for return traffic, that is the traffic that
a reply sends), you would want to add the routes for both sides with the distinction that the networks defined
on each router are the ones **not local** to that router.

The routing entries are *not the same* on any two (or more) routers.

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
