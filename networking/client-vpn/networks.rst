======================================
Reaching cloud networks via client VPN
======================================

General concept
---------------
When connecting to a VPN, the VPN server will push routes for the networks that it is configured to reach to the client, which in turn will inject them into the clients routing table so that traffic to them will be routed into the tunnel instead of its default route. Exactly how the client handles routes will vary between clients and operating systems. Its therefore hard to guarantee a particular behaviour. The default behaviour of the VPN service, however, will push a route for the network that is chosen during the :doc:`setup process <setting-up>`.

Additional networks
-------------------
If your cloud infrastructure contains more than a single :doc:`private subnet <../virtual-router/private-subnet/index>` that you want to reach over the VPN, you need to manually add that subnet to the VPN servers configuration. To add a network to the VPN server, using the WebUI, follow these steps: 

- :doc:`Login <initial-configuration>` to the VPN management interface.
- Press "VPN" and then "OpenVPN" in the main menu.
- Click the small pen symbol (edit server) on the only row (assuming you have not added more servers) under "OpenVPN servers". 
- Scroll down to the "Tunnel settings" section. 
- Change the value in the field "IPv4 Local network(s)" to also include your additional network(s) in :doc:`CIDR notation <../virtual-router/private-subnet/subnet-format>`. The networks are delimited by a comma. Your initial private subnet should be in this field already.
- Press "Save" at the bottom. 
- When users login again, they can reach the additional private subnet(s) assuming its correctly :doc:`routed <../virtual-router/routing-between-networks>` in the cloud.

.. Important:: 
	Changing the VPN server configuration will **restart** the VPN service. This will in turn disconnect all active sessions. The procedure is quick but will be disruptive. 

VPN-server network design
-------------------------
The VPN server only has a single interface. This interface, in turn, has a floating IP connected to it. Ingress from the internet is managed via the floating IP which will :doc:`DNAT <../virtual-router/nat>` traffic to the private IP on the private subnet. Egress from the VPN server to the internet will SNAT traffic to originate from the floating IP. 

For internal traffic within the network(s), the VPN server will use the same interface that it uses for public traffic but it will not egress the platform. The VPN server will SNAT all VPN traffic (which by default will originate from the 10.0.8.0/24 range - which the VPN server uses for VPN clients) so as to originate from its own IP on the private subnet that it was setup on. This means that it will appear as if the traffic from the VPN clients originates from the VPN servers IP on the private subnet. 

.. Note::
	This behaviour is changeable for users wanting to expose what VPN client IP the connection was from but we do not recommend it, as it will mean setting up routes for the 10.0.8.0/24 net on all hosts as well as on the virtual router. 

When reaching other networks in the cloud, routing is used. The VPN server will use its default route (which is the upstream virtual router) for all traffic that is located outside of its own private subnet. The virtual router will then route this traffic the same way it would any internal traffic in the cloud, it will even use the default security group. This means its very easy to reach your entire cloud infrastructure over VPN as well as to add additional networks. 

.. Note::
	Because the VPN server uses a lot of NAT, applications working badly with NAT (for instance active mode FTP) may have issues over the VPN. 

