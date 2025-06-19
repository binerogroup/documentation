=========================
Custom firewall or router
=========================

Sometimes its preferred to use a network stack that is familiar to an admin or that provides
a function that's needed not available in a :doc:`router <router/index>`.

You have many options both open source and proprietary that can run as a router or firewall
with good performance and with rich feature-sets. These systems are normally installed as
instances in a cloud and Binero cloud supports this approach.

.. tip::

   We do not recommend mixing a custom router or firewall with :doc:`router <router/index>`. While
   its possible to do so, this will cause to make the network more difficult to understand.

   As such, rather give the instance running as your own router a port to each of the
   subnets that you want to reach and manage everything within the your router.

Concepts
--------

When working with a custom router, the main difference from the platform perspective is the
:doc:`port <ports>` configuration, particularly the port security setting.

Since the platform is (normally) aware of what IP addresses are existing behind each port, it
filters traffic based on what it knows.

This enables it to protect from spoofing attempts and its also a prerequisite for
using :doc:`security groups <security-groups/index>`. 

When using a custom firewall or router, the port security feature does not work as destination
traffic is no longer meant for the instance (a router receives traffic and forwards it - the
destination is something other than the router itself). 

Aside from the above its important to note that the usual manner of handling IP address in the
platform is :doc:`DHCP <subnet/dhcp>` on a :doc:`network <network/index>`.

It might be tempting to run a DHCP server on the custom router instead of using manual
networking. While this works, this will remove cloud-init support, resulting in instances
no longer being correctly provisioned. 

Setting up a custom router or firewall
--------------------------------------

Below is a guide on how to setup a router with a public (internet facing) outside network and a
subnet (which will work the same as with a router) for hosting instances on the inside
of the router. 

.. note::

   Since some features below are only available using :doc:`/getting-started/managing-your-cloud/openstack-horizon`
   (or :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`), we will use
   OpenStack Horizon below.

- Create your :doc:`networks <network/index>` and :doc:`subnet <subnet/index>`
  for the internal network(s) unless you have already done so. 

- Create a network :doc:`port <ports>` on the subnet. 

  - Select fixed IP and add input the same IP as you selected as default route on the
    subnet in the previous step.

  - Under :doc:`security groups <security-groups/index>`, add the ``all-open`` group (as the
    traffic will not be destined to the instance because of routing). A firewall to the
    router/firewall-instance will have to be setup on the instance itself.

  - Edit the new port and select the **Allowed address pairs** tab

  - Add ``0.0.0.0/0`` under the **IP Address or CIDR** field.

- Launch the instance using an image or install it via console. 

  - Add a :doc:`directly attached IP <directly-attached-ips>` as the outside network.

  - Connect to the port(s). Do not connect to the inside subnet, just the port(s) that
    you already created. 

  - Select the ``all-open`` security group unless you want to filter traffic to the router in
    the platform (its recommended to use this feature in the router/firewall as that will
    simplify working with it.

When you have launched the instance:

- The outside (external) interface should use DHCP and get a statically directly assigned IP-address.

- The internal interface could use either a static address (use the fixed IP on the port) or a
  DHCP provided address, we recommend using a static address here.

- Setup SNAT (see :doc:`router/nat` for more info) on the instance. This depends on your solution
  and is out of scope for this article.

Your instances located behind this instance, and that use an IP on this instance as default route, should
now be able to access the internet through it and you should be able to redirect (DNAT) traffic into the
instances.

If its not working, the following are some tips to check connectivity:

- Verify that the router can reach the instances directly and vice versa. 

- Verify the security groups on all instances. The firewall/router instance should have ``all-open`` on
  all ports and ``default`` on the internal ports). If the firewall does not have ``default``, other instances
  will not accept traffic from it and if it does not have the ``all-open`` group, it will not access traffic
  from the other instances. 

.. note::

   The platform uses a smaller MTU (1450) than is standard. You might need to change this, see
   the :doc:`mtu` documentation.
