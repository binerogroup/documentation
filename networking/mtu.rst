===
MTU
===

MTU or Maximum Transmission Unit, is a measure of how large individual packets (or frames) can be. The concept of "jumbo frames" essentially means supporting an MTU on an interface
that is larger than 1500 bytes which is the normal standard size of a network interface if left unconfigured in most operating systems. 

Fragmentation
-------------

Since the standard MTU size is 1500 bytes, using a larger MTU could have some impact for packages that have a destination that is outside the scope of the local
network (where the MTU is possible to control). For these scenarios, **fragmentation** is the normal solution.

Fragmentation means that an intermediate router might split a package into several packages, should it need to egress onto a network with a smaller MTU as next hop.

The receiving server will later on have to reassemble the packet. This process happens in the background and is not something that needs to be actively managed by an administrator, however some
applications does not work well with fragmentation so there is an option to disallow it by setting the "DF" bit on a frame. 

DF stands for Donot Fragment and essentially tells every router involved to avoid fragmentation. The alternative to fragmentation, when using a larger MTU than 1500, is that the package is
dropped and an ICMP message with code "need to frag" is returned. Because of this, its important to understand the concept of MTU, especially when using an MTU different from 1500 bytes.

Here is an example of an ICMP reply to a package that was to big, as captured using ``tcpdump``: 

``17:54:49.979998 IP 1.2.3.4 > 5.6.7.8: ICMP 1.2.3.4 unreachable - need to frag (mtu 1450), length 556``. 

Here is an example of of a package that has the DF bit set: 

``6:30:17.621056 IP (tos 0x0, ttl 61, id 39062, offset 0, flags [DF], proto TCP (6), length 4148) 4.5.6.7.443 > 1.2.3.4.34862: Flags [P.], cksum 0x0bdb (incorrect -> 0x3f5f), seq 1:4097, ack 321, win 227, options [nop,nop,TS val 955793242 ecr 3076045005], length 4096``. 

Notice the "DF" flag - this indicates that the package should not be fragmented. Also notice the "length" indicating that the package is 4096 bits long and as such, will not pass a standard 1500 MTU interface (since it cannot be fragmented).

MTU discovery
-------------

There is a standard for discovering the smallest MTU on a link called `Path MTU Discovery <https://en.wikipedia.org/wiki/Path_MTU_Discovery>`_ or PMTUD. This enables servers to discover the smallest MTU by setting the DF flag and sending packages until they are forwarded correctly. It relies on ICMP which not all service providers and network operators honour so its not 100% certain to always work.

MTU in Binero cloud
-------------------

Since Binero cloud uses virtualized networking, the MTU size given when using :doc:`router/private-subnet/dhcp` on your :doc:`private subnet <router/private-subnet/index>` to assign addresses is 1450 bytes. This is because the VXLAN encapsulation needs 50 bytes of the frames available 1500 bytes. The underlying interface on the physical servers managing compute and networking in the platform uses the standard of 1500 bytes and so the instances need to have a smaller MTU set in order to also provide enough room for the host to encapsulate the frame before sending it onto the network.

.. note:: Its possible to set whichever MTU you'd like on your interface however using something larger than 1450 will cause issues of packages being dropped. See below.

MTU caveats
-----------

When using a different than standard MTU (as is the case in Binero cloud), it becomes important to understand the possible effects of that. As long as you only have your compute instances and they use 1450 MTU, generally everything will work well. If you for instance use **bridge interfaces** on your instances to connect to local containers (or some other use-case), which in turn use the default 1500 MTU then this might have adverse effects. 

.. important:: Use only 1450 MTU on all interfaces that are setup on your instances. 

Larger MTU
^^^^^^^^^^

Larger than 1500 MTU is normally used in scenarios where lots of data needs to be sent quickly. It causes less overhead when using a large MTU because less packages needs to be sent to transfer the same amount of data. For instance ISCSI or NFS (so datatransfers) would benefit from larger MTU. Larger MTU than 1450 is however not possible to use in the cloud platform.

Smaller MTU
^^^^^^^^^^^

The only real reason to use a smaller MTU would be because your traffic was encapsulated by some protocol that needed room for its header. Below are some examples:

- GRE (IP Protocol 47) (RFC 2784) adds 24 bytes (20 byte IPv4 header, 4 byte GRE header)
- 6in4 encapsulation (IP Protocol 41, RFC 4213) adds 20 bytes
- 4in6 encapsulation (e.g. DS-Lite RFC 6333) adds 40 bytes
- IPsec encryption performed by the DMVPN adds 73 bytes for ESP-AES-256 and ESP-SHA-HMAC overhead
- MPLS adds 4 bytes for each label in the stack
- IEEE 802.1Q tag adds 4 bytes (Q-in-Q would add 8 bytes)
- VXLAN adds 50 bytes
- OTV adds 42 bytes
- LISP adds 36 bytes for IPv4 and 56 bytes for IPv6 encapsulation
- NVGRE adds 42 bytes
- STT adds 54 bytes

Taking into account the overhead from the encapsulation, less space remains to send traffic and therefore the max size of the payload must be decreased to fit the extra header.

General recommendations
-----------------------

There are mechanisms in TCP to overcome MTU differences as well as PMTUD (which cannot be trusted though). That said, generally you would want to ensure that you **do not use more than 1450 MTU in total** on the platform. If you need to use encapsulation, take this into account. A good way to test is using ping with the DF flag set and by manually specifying the size of the ping package. This is done as following in Linux:

``ping -M do 1.2.3.4 -s 1500``

And on Windows:

``ping 1.2.3.4 -l 1500 –f``

Above example would ping with 1500 bytes with DF set and would return a fail if that did not work. Keep in mind that ping uses both ICMP and IP which both add to the size of the packets (20 and 8 bytes respectively) so even sending 1450 bytes with DF set to an IP in Binero cloud will not work, however 1450 - 28 = 1422 bytes will.

In conclusion, keeping MTU consistent to 1450 across all interfaces will ensure functionality.
