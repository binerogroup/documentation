==================================
Adding routes for site-to-site VPN
==================================

Because the remote subnet(s) is unknown to the instances in the cloud, any traffic originating
from the cloud that should traverse the tunnel needs help finding its way to the instance running
the tunnel.

The instance running the tunnel will know about the remote subnet because this is part of the IPsec
protocol to inject routes into the routing table or handled by flows before ever reaching the routing
table.

The two ways to resolve this using routing, which one to use depends on whether you have one or
many :doc:`subnets <../subnet/index>` in your platform.

- The instances that are on the same subnet as the instance running the VPN would need routes
  in their own routing table (normally distributed by DHCP, see below).

- The instances that are on a different network would use their default route to reach the router and
  the router itself then needs a route to the instance to know where to send the traffic.

To summarize: 

- If you only have a single subnet, you just need to add routes via DHCP.

- If you have many subnets, you need to add routes via both DHCP and on the router. 

See below for more information.

.. note::

   Both actions will require a gateway, that is the IP address to send traffic to (also known as next hop).

   This is the local address of the instance running the VPN. Its visible in the GUI for the instance as
   well as in the output of the creation, named ``local_gw_ip``. You will need this IP address below.

Routing via DHCP
----------------

Please see our section about DHCP settings, which is available :doc:`here <../subnet/dhcp>`. 

Routing in router
-----------------

Please see our section on static routing available :doc:`here <../router/static-routing>`.

The **Destination CIDR** field is in this case the remote subnet (the network on the other side of the
tunnel). **Next Hop** is the local IP of the instance running the VPN (``local_gw_ip`` in the output when
you created the VPN).

.. note::

   A third option, in cases where only a few instances should have access and that is managing the routing
   manually on the instances by using whichever method is available in your operating system.

   We don't recommend this approach as it doesn't provide a clear benefit and makes it more difficult
   to maintain.
