==============================
Directly attached IP addresses
==============================

Binero cloud provides two main ways to use public IP addresses, directly attached IP
addresses and :doc:`floating-ips`.

Directly attached IP addresses are assigned directly on the :doc:`instances </compute/index>`
network interface (port).

This means that when you run for instance ``ip addr show`` or ``ipconfig /all`` inside your instance
operating system, you would (with a directly attached IP) see the public IP assigned on the interface.

When using a floating IP, the result would instead be the IP address from the :doc:`private subnet <router/private-subnet/index>`
that you assigned to the instance. The floating IP is then redirected using NAT to and from the instance in
the router.

Another key difference is that a directly attached IP is the only way to consume a public IPv4 *without* using
a :doc:`router <router/index>`. A router, in fact, cannot be connected to a directly attached IP or route traffic
for one.

Its possible to connect a router to an instance that has a directly attached IP but since they will both provide a
default route, it will require configuration of the instance to use a manual IP and also use static routes on the
instance facing the router. This is not a recommended approach.

.. note::

   Directly attached IP addresses are not designed to work well with routers. They are intended for single
   instances that just want an internet connection and nothing else. 

Key differences to floating IP addresses
----------------------------------------

- Since a directly attached IP is setup on the instance, nothing is in front of the IP. No NAT or firewall (unless
  using security groups). This might be an upside for some applications that does not work well through NAT or admins
  that want to manage their entire network stack on the instance. 

- Directly attached IP addresses have a slight performance improvement over routers because of no NAT and no virtual
  network. This performance will be negligible in most use-cases.

- Directly attached IP addresses does not combine with the majority of the networking functions in the platform which
  will rely on a router to work. For instance :doc:`load-balancer/index` or :doc:`router/security-groups/index`.

.. note::

   For a more versatile approach to networking, we recommend using :doc:`floating-ips`. The primary use-case for
   directly attached IP addresses would be single instances as its a less complicated method to reach the internet
   as well as publish services from an instance to be available on the internet.

Setting up a directly attached IP
---------------------------------

The process for setting up a directly attached IP on an instance is not differing from any other
:doc:`method of setting up an IP </compute/assign-ip>` in the platform except you would chose an
IP from one of our external ranges instead of selecting one from a :doc:`private subnet <router/private-subnet/index>`.

Which range to choose would depend on in which :doc:`availability zone <regions-and-availability-zones>` your
instance is located:

- ``europe-se-1-1a-net0`` for instances placed in *europe-se-1a* availability zone

- ``europe-se-1-1b-net0`` for instances placed in *europe-se-1b* availability zone

Doing so, would place a public IP directly on the interface (NIC) of the instance and you would be able to see it by
running for instance ``ip addr show`` in Linux.

..  seealso::

    - :doc:`floating-ips`
    - :doc:`regions-and-availability-zones`
    - :doc:`router/index`
