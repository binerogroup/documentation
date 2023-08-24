=====================
Directly attached IPs
=====================
There are two main ways to use public IP-space (globally accessible IP-space) in Binero.cloud, directly attached IPs and :doc:`floating-ips`. Directly attached IPs are assigned directly on the :doc:`instances </compute/index>` network interface (port). This means that when you run for instance ``$ ip address show`` or ``$ ip config /all`` inside an instance operating system, you would (with a directly attached IP) see the public IP assigned on the interface. When using a floating IP, the result would instead be the ip from the :doc:`private subnet <virtual-router/private-subnet/index>` that you assigned to the instance. The floating IP is then redirected (by using DNAT or SNAT) to and from the instance using the virtual router.

Another key difference is that a directly attached IP is the only way to consume a public IPv4 *without* using a :doc:`virtual router <virtual-router/index>`. A virtual router, in fact, cannot be connected to a directly attached IP or route traffic for one. Its possible to connect a virtual router to an instance that has a directly attached IP but since they will both provide a default route, it will require configuration of the instance to use a manual IP and also use static routes on the instance facing the virtual router. This is not a recommended approach.

.. Note::
	Directly attached IPs are not designed to work well with virtual routers. They are intended for single instances that just want an internet connection and nothing else. 

Key differences to floating IPs
-------------------------------

- Since a directly attached IP is setup on the instance, nothing is "in front" of the IP. No NAT or firewall (unless using security groups). This might be an upside for some applications that does not work well through NAT or admins that want to manage their entire network stack on the instance. 
- Directly attached IPs have a slight performance improvement over virtual routers because of no NAT and no virtualised network. This performance will be negligible in most use-cases.
- Directly attached IPs does not combine with the majority of the networking functions in the platform which will rely on a virtual router to work. For instance :doc:`load balancing <load-balancing/index>` or :doc:`security groups <virtual-router/security-groups/index>`.

.. Note::
	For a more versatile approach to networking, we recommend using :doc:`floating-ips`. The primary use-case for directly attached IPs would be single instances as its a less complicated method to reach the internet as well as publish services from an instance to be available on the internet.

Setting up a directly attached IP
---------------------------------
The process for setting up a directly attached IP on an instance is not differing from any other :doc:`method of setting up an IP </compute/assign-ip>` in the platform except you would chose an IP from one of our exernal ranges instead of selecting one from a :doc:`private subnet <virtual-router/private-subnet/index>`. Which range to choose would depend on in which :doc:`availability zone <regions-and-availability-zones>` your instance is located:

- europe-se-1-1a-net0 for instances placed in availability zone 1A
- europe-se-1-1b-net0 for instances placed in availability zone 1B

Doing so, would place a public IP directly on the interface (NIC) of the instance and you would be able to see it by running for instance ``$ ip a s`` in linux. 


..  seealso::
    - :doc:`floating-ips`
    - :doc:`regions-and-availability-zones`
    - :doc:`virtual-router/index`
