=======================
Reaching your instances
=======================

To manage the instances in your cloud you have four main options:

- :doc:`Using a floating IP per instance <floating-ips>`

- :doc:`Using a client VPN <client-vpn/index>`

- :doc:`Using a site-to-site VPN <site-to-site-vpn/index>`

- Using a bounce server

We outline the different methods below. 

Floating IP
-----------

A floating IP is a public, globally routed, IP address that maps 1:1 with an instance.

It will use DNAT (destination NAT) to allow traffic through the router from the internet.

It's normally used for enabling services to be internet facing (reachable from the internet)
but also works for managing instances (by enabling access to for example SSH to the floating
IP).

The downside with assigning a floating IP for access to the instance is that it doesn't scale
if you have many instances and the cost for floating IP addresses will increase when adding
new instances, another downside is that, while you are able to secure the instance by using
security groups it's not recommended to expose your instance to the internet.

.. warning::

   Using a floating IP with wide open access to the instance is strongly discouraged and will
   likely lead to a compromised system used for malicious activity.

Client VPN
----------

A client VPN is a VPN that connects from a single client (normally a laptop or a workstation
computer) and that sets up a tunnel for a single user to a remote network.

Using a client VPN is an effective way to get access to the entire inside network by using
routing through a tunnel.

When able to reach the inside, it becomes possible to connect directly to the instances, without
the need for a floating IP for anything but the VPN server.

Since you install a client VPN on the client computer, you can also use it from anywhere where
you have your client computer available, given that you have a internet connection. This works
well for connecting from remote locations.

The downside is that you need to have an application installed on your computer with a secure
configuration which you will need to provision to you in a secure manner.

To reach the infrastructure, you first need to logon to the VPN separately. You also need to
maintain the VPN server and the users on it.

Binero cloud provides a :doc:`client VPN service <client-vpn/index>` that would enable you to
get going with a secure tunnel to your infrastructure quickly with minimal effort. 

Site-to-site-VPN
----------------

Using a site-to-site tunnel, you would setup a tunnel between your cloud and your router.

This could be the office router or a (more advanced) router based in your home. Once the tunnel is up, users
that sit connected to the (home or office) router would have their traffic automatically (and transparently)
routed into the tunnel.

This would negate the need to login, the cloud network(s) and the office networks would be seamlessly
connected using the tunnel and the user experience is equally seamless - the cloud becomes local to the
user.

The downside is that a site-to-site VPN is difficult to setup (while only having to be setup once) and only
works from behind the router that connects to the cloud, so if you set it up in your office and have users
working from home, they still need an alternate solution. 

Bounce server
-------------

The concept of a bounce server is that you create an instance with a floating IP to which you have your users
connect using for example SSH (or RDP if running Windows).

This way, only the bounce server needs a floating IP. Once you've connected your users to the server (preferably
securely, for example by using SSH keys and with their own account that has not got elevated permissions), they are
then able to connect to other instances from the bounce server as the bounce server is also connected to the internal
network(s) and is able to reach them when originating traffic from itself (there is no routing happening, users would
work through the bounce server).

An upside to *not having network access directly*, but rather sending traffic through the bounce server (and using its
authentication), is that malicious software that originate from your workstation will not be able to connect to the internal
systems directly (as there is no network path available). 

The downside is that its cumbersome to for example copy a file to the instances (as you will first need to copy it to
the bounce server and then copied again from there to the instance). The user experience is further lessened by having
to use another computer than your personal workstation (the bounce server instance) to 99% of your tasks.

Aside from this, the bounce servers own security becomes paramount. Updating the bounce server regularly (as well
as locking it down using security groups) is highly recommended. 

.. tip::

   While it might sound appealing to mix-match the above alternatives, we strongly recommend implementing a single
   strategy for cloud access and making sure its locked down.

   With many ways to access your cloud infrastructure, the risk of compromise increases drastically which
   decreases your security.

   A well rounded solution is the client VPN. This will provide a good tradeoff between security and usability
   for management of cloud infrastructure. 

..  seealso::

    - :doc:`/networking/router/index`
    - :doc:`/networking/floating-ips`
    - :doc:`/networking/client-vpn/index`
    - :doc:`/networking/site-to-site-vpn/index`
