======================================
Reaching cloud networks via client VPN
======================================

General concept
---------------

When connecting to a VPN, the VPN server will push routes for the networks configured
to the client. The client will install these routes into the clients routing table so
that traffic for the networks get sent over the VPN tunnel.

Exactly how the client handles routes will vary between clients and operating
systems. The default behaviour of the VPN service is to push a route for the
network that you've chosen during the :doc:`setup process <setting-up>`.

Adding more networks
--------------------

If your cloud infrastructure contains more than a single :doc:`subnet <../subnet/index>`
that you want to reach over the VPN, you need to manually add that subnet to the VPN
servers configuration.

To add a network to the VPN server, using the WebUI.

- :doc:`Login <initial-configuration>` to the VPN management interface.

- Press **VPN** and then **OpenVPN** in the main menu.

- Click the small pen symbol (edit server) on the only row (assuming you have not added
  more servers) under **OpenVPN servers**. 

- Scroll down to the **Tunnel settings** section. 

- Change the value in the field **IPv4 Local network(s)** to include all networks comma-delimited
  and in :doc:`CIDR notation <../subnet/subnet-format>`. Your initial subnet should be in this
  field already.

- Press **Save** at the bottom. 

- When users login again, they can reach all the new networks assuming its correctly
  :doc:`routed <../router/routing-between-networks>` in the cloud.

.. important::

   Changing the VPN server configuration will **restart** the VPN service. This will in turn
   disconnect all active sessions. The procedure is quick but will be disruptive. 

VPN-server network design
-------------------------

The VPN server only has a single interface. This interface, in turn, has a floating IP connected
to it.

Ingress from the internet is via the floating IP which will :doc:`DNAT <../router/nat>` traffic
to the IP address on the subnet.

Egress from the VPN server to the internet will SNAT traffic to originate from the floating IP. 

For internal traffic within the network(s), the VPN server will use the same interface that it
uses for public traffic but it will not egress the platform.

The VPN server will SNAT all VPN traffic, which by default will originate from the ``10.0.8.0/24``
range that the VPN server uses for VPN clients, so that the source IP is the VPN servers own
IP address on the subnet.

This means that it will appear as if the traffic from the VPN clients originates from the VPN
servers IP on the subnet. 

.. note::

   This behaviour is changeable for users wanting to expose what VPN client IP the connection was
   from but we do not recommend it, as it will mean setting up routes for the ``10.0.8.0/24``
   network on all hosts and on the router. 

To reach other networks in the cloud, you use routing.

The VPN server will use its default route (which is the upstream router) for all traffic that is
outside of its own subnet.

The router will then route this traffic the same way it would any internal traffic in the
cloud, this is a good way to reach your entire cloud infrastructure over VPN.

.. note::

   Because the VPN server uses NAT some applications can work badly with NAT due to the
   design application or protocol itself, for example active mode FTP can have issues over
   the VPN. 
