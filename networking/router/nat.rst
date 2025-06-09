===
NAT
===

General concept
---------------

NAT (Network Address Translation) is used to provide instances with internet access
when located behind a :doc:`router <index>`.

By default, a router will have a source NAT setup when launching it. This means that
the router will be assigned a :doc:`floating IP <../floating-ips>` on its external
interface and when instances on the internal network wants to access the internet, the
router will change the source IP of the request to its own floating IP. 

The reason for this is that :doc:`private subnets </networking/router/private-subnet/index>`
are normally assigned from the pool of IP addresses that are reserved for internal
usage, according to IETF RFC1918.

The router is able to mask requests as coming from itself and by doing so, all instances are
able to share the routers single public IP.

Incoming requests to an instance can't use the routers IP address but rather a
:doc:`floating IP </networking/floating-ips>`.

If an instance has a floating IP configured, it will instead use its floating IP as source
address when connecting to the internet.

This works the same way but instead of sending inbound and outbound requests from different
IP addresses, the floating IP takes precedence. 

Verify NAT address of router
----------------------------

Below are some ways to verify which IP address your router will use for outbound internet
connections (SNAT):

- In the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, press **Network** and
  then **Routers**. Press the router you want to verify. under **External network** you will see the
  outbound SNAT IP.

- In :doc:`/getting-started/managing-your-cloud/openstack-horizon` portal under **Project**, press
  **Network** and then **Routers**. Press the router you want to verify. under **External gateway** you
  will see ``External fixed IPs``. These are the outbound SNAT IP.

- Using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, run this
  command: ``openstack router list`` to get a list of your routers

  - Followed by ``openstack router show [ROUTER NAME] -c external_gateway_info -f yaml`` which
    will give you a yaml formatted list of the outbound SNAT IP.

..  seealso::

    - :doc:`/networking/router/index`
    - :doc:`/networking/floating-ips`
