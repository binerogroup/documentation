=======================
Reaching your instances
=======================
To manage the instances in your cloud you have four main options:

- :doc:`Using a floating IP per instance <floating-ips>`
- :doc:`Using a client VPN <client-vpn/index>`
- :doc:`Using a site-to-site VPN <site-to-site-vpn/index>`
- Using a bounce server

The different methods are discussed below. 

Floating IP
-----------
A floating IP is a public, globally routed, IP address that maps 1:1 with an instance. It will use DNAT (destination NAT) in combination with :doc:`security groups <router/security-groups/index>` to allow traffic through the router from the internet. It is normally used for enabling services to be internet facing (reachable from the internet) but could just as well be used for managing instances (by simply enabling access to for instance SSH over the floating IP).

The downside is that a floating IP will have to be assigned to all instances which will incur a monthly cost. Another downside is that while you are able to lock a floating IP down using security groups, if security groups are misconfigured, access might be granted to servers that would otherwise not need a floating IP (because they are not needed to expose their services to the internet). It will also require you to make sure your management traffic is encrypted (which for instance SSH is) as there is no tunneling.

.. Important::
	Using a floating IP with wide open access to for instance SSH is strongly discouraged. 

Client VPN
----------
A client VPN is a VPN that connects from a single client (normally a laptop or a workstation computer) and that sets up a tunnel for a single user to a remote network. Using a client VPN is an effective way to get access to the entire inside network using routing through a tunnel. When able to reach the inside, it becomes possible to connect directly to the various instances, without the need for a floating IP for anything but the VPN server. Since a client VPN is installed on the client computer, it can also be used from anywhere where you have your client computer available (as well as an internet connection). This works well for working from multiple places.

The downside is that you need to have an application installed on your computer with a secure configuration (which will need to be provided to you in a secure manner). To reach the infrastructure, you first need to logon to the VPN separately. You also need to maintain the VPN server and the users on it. Binero.cloud provides a :doc:`client VPN service <client-vpn/index>` that would enable you to get going with a secure tunnel to your infrastructure very quickly with minimal effort. 

Site-to-site-VPN
----------------
Using a site-to-site tunnel, you would setup a tunnel between your cloud and your router. This could be the office router or a (more advanced) router based in your home. Once the tunnel is up, users that sit connected to the (home or office) router would have their traffic automatically (and transparently) routed into the tunnel. This would negate the need to login, the cloud network(s) and the office networks would be seamlessly connected using the tunnel and the end user experience is equally seamless - the cloud becomes "local" to the end user.

The downside is that a site-to-site vpn is difficult to setup (while only having to be setup once) and only works from behind the router that connects to the cloud. So if you set it up in your office and have users working from home, they still need an alternate solution. 

Bounce server
-------------
The concept of a bounce server is very simple - you create an instance with a floating IP to which you have your users connect using for instance SSH (or RDP if running Windows). This way, only the bounce server needs a floating IP. Once the users are connected to the server (preferably securely, for instance using SSH keys and with their own account that has not got SUDO permissions), they are then able to connect down stream to other instances from the bounce server as the bounce server is also connected to the internal network(s) and is able to reach them when originating traffic from itself (there is no routing happening, users would work "locally" from the bounce server). An upside to *not having network access directly*, but rather proxying through the bounce server (and using its authentication), is that automated hacks (viruses and trojans) that might originate from your workstation will not be able to connect to the internal systems directly (as there is no network path available). 

The downside is that its cumbersome to for instance copy a file to the cloud instances (as it will need to first be copied to the bounce server and then copied again from there downstream). The end user experience is further lessened by having to use another computer than your personal workstation (the bounce server instance) to to 99% of your tasks. Aside from this, the bounce servers own security becomes paramount. Updating the bounce server regularly (as well as locking it down using security groups) is highly recommended. 

.. Tip::
	While it might sound appealing to mix-match the above alternatives, we strongly recommend implementing a single strategy for cloud access and instead making sure its locked down. With multiple ways to access your cloud infrastructure, the risk that security might be compromised increases drastically. A well rounded solution is the client VPN. This will provide a good tradeoff between security and usability for management of cloud infrastructure. 

..  seealso::
    - :doc:`/networking/router/index`
    - :doc:`/networking/floating-ips`
    - :doc:`/networking/client-vpn/index`
    - :doc:`/networking/site-to-site-vpn/index`
