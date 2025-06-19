=============
Subnet Format
=============

A subnet is generally formatted in what we known as `CIDR notation <https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing>`__.

A CIDR notation might for example look like this: ``192.168.0.0/24``

This is a way to describe both the network ip-number (which is the part before the ``/`` symbol) and the subnet size (which is
the part after the ``/`` symbol).

The network chosen in the above example would mean that the amount of IP-addresses available are between 192.168.0.1 and
192.168.0.255 (the first and last host address are typically reserved for network and broadcast). 

Below we outline how to select your subnet.

.. tip::

   If the below is something you do not want to understand but just want to know what subnet to choose, we recommend
   using /24 as mask size.

   Your first subnet then, might be for example 172.29.45.0/24, your next might be 172.29.46.0/24, and so on).

Explanation
-----------

After the ``/`` sign, the numeric value we refer to as subnet mask.

You could select anything between (or at least you would need to already understand subnet math if you
wanted anything larger or smaller) 18 to 27 as value for the mask.

If you chose 18 (``192.168.0.0/18``, according to above example), you will get 16382 IP addresses in the subnet. If you select 27
(``192.168.0.0/27``, according to above example), you would get 30 addresses.

This is because when the mask increments by one, the network size halves (which is why when we get to 27, counting down
from 18, we only have 30 addresses left to use from the original 16382 at ``/18``, bearing in mind reserved addresses). 

A standard size is ``/24``, this mask size yields 255 usable IP addresses and would give the subnet mask setting (in the operating
system, this is really the same as the prefix length, or mask, but in another format) ``255.255.255.0``.

In Binero cloud, the platform will calculate the subnet mask for you and is normally assigned using :doc:`dhcp`, so there is no need
to understand what subnet mask a certain CIDR prefix will have.

You just need to choose one that yields the right amount of usable IP addresses to suit your use-case. 

.. tip::

   When selecting the size, don't choose something that you might outgrow. Its a complicated task to re-number a network. Choose a subnet
   that will be large enough (and our recommendation is, double it, just to be sure).

.. tip::

   If you are still unsure after reading above, go with /24 as the subnet.

Advanced explanation
--------------------

Early IP address allocations given to providers in on of 3 address classes; **A**, **B** and **C**. An A-class
network (equal to a CIDR notation of ``/8``) has 16.777.214 usable addresses.

A B-class network has 65534 usable addresses. A C-class network has 255 usable addresses. This meant that
addresses where most often not optimally assigned.

An organisation that needed to have for example 75.000 IP addresses would instead get 16777214 (as a B-class network
would have been to small).

An organisation that needed 300 IP addresses would instead get 65534. This was not considered an issue in the early
days as the total IPv4 pool of 4,294,967,296 addresses seemed large at the time.

When the internet grew, it became clear that the total pool would get depleted fast.

To solve this, we introduced Classless Inter Domain Routing or `CIDR <https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing>`__, enabling
the use of a subnet *mask* that would make it possible to decide the size of a given network more granularly than in 3 stages.

The subnet mask showed how many addresses were available in the subnet based on a number that stated how big a
part of the **IP address** was the network bits compared to how big a part was the host bits.

An IPv4 address is a 32 bit number divided into 4 octets to make it easier to read. In the example ``192.168.0.0/24``,
the *mask* (``/24`` in this case) states that the 24 first bits (which is ``192.168.0``) is the network address.

This address is just used for describing the network and is unusable when addressing hosts in the network. Explained as
``32 / 4 = 8``, so 8 bits per octet, 24 bits then making the first 3 octets the network address (so ``192.168.0`` being
the first 3 octets).

The remaining (up to 32) bits are the hosts addresses so for example in the example ``192.168.0.5``, the last octet
(which is 5) is assignable to a host. 

When configuring an IP address in an operating system, some systems will want the IP-address in CIDR notation
(so ``192.168.0.5/24`` for example), some want the subnet mask specified separately, so ``192.168.0.5`` and ``255.255.255.0``

The function is the same, the subnet mask is just another way to tell that the first 24 bits (as shown by the fact
that 255 is the max size, so all 1s when writing in binary, of an 8 bit number is 255) are the network address and
the last 8 bits are the host address (the mask then is not the IP address, it just describes *what part* of the IP
address is the network bits what part is the host bits.

The previous network sizes (A, B and C) corresponds to /8, /16 and /24 in CIDR notation that uses even octets, if we
want to use an smaller subnet it's a bit more complicated.

For example, where one might want to have 3578 IP addresses , consulting a CIDR chart or using ``ipcalc`` software would
show that the closest network size that has more addresses then 3578 would be a /20 network that has 4094 addresses.

The principle is the same, the CIDR notation becomes ``192.168.0.0/20`` instead. The subnet mask would be ``255.255.240.0``
(because only the first 20 bits are the network address, giving some extra bits available for hosts).

In conclusion, if you have more advanced requirements with regards to wanting to use a specific subnet or needing a
specific subnet size, Binero cloud will be able to cater to your need.

.. tip::

   Included in most Linux distributions is the terminal based software ``ipcalc``. This will help you calculate subnets
   as is visible in the below example.

::

	$ ipcalc 192.168.0.0/20
	Address:   192.168.0.0          11000000.10101000.0000 0000.00000000
	Netmask:   255.255.240.0 = 20   11111111.11111111.1111 0000.00000000
	Wildcard:  0.0.15.255           00000000.00000000.0000 1111.11111111
	=>
	Network:   192.168.0.0/20       11000000.10101000.0000 0000.00000000
	HostMin:   192.168.0.1          11000000.10101000.0000 0000.00000001
	HostMax:   192.168.15.254       11000000.10101000.0000 1111.11111110
	Broadcast: 192.168.15.255       11000000.10101000.0000 1111.11111111
	Hosts/Net: 4094                  Class C, Private Internet
