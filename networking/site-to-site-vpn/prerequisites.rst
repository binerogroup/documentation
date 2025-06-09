=================================
Prerequisites for site-2-site VPN
=================================

Site-to-site VPN can only be provisioned from the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`.

If you normally work via either OpenStack Horizon or the OpenStack API, its
possible to execute a :doc:`HEAT template manually </orchestration/index>` but
we recommend the cloud management portal.

Remember that there may be discrepancies (for example on SSH keys and logins) between
it and the other management options.

Please see :doc:`/getting-started/managing-your-cloud/index` for more information.

.. note::

   For the purposes of this guide, the local location is the Binero cloud data center
   and the remote locations is the site to which you want to connect.

Checklist to get started
------------------------

You will need the following information to get started:

- An existing :doc:`private subnet <../router/private-subnet/index>` already setup in the
  platform which will be the local subnet (in :doc:`CIDR notation </networking/router/private-subnet/subnet-format>`)
  that is routed over IPsec to the remote subnet (which would be your office or secondary
  data center, for example).

- The IP address of the remote gateway (your public IP that would normally be provided
  to you by your ISP) for the tunnel.

- The remote subnet (in CIDR notation) that will be tunneled (meaning the network on which
  the computers or servers that should be able to connect to resources in the cloud using
  the tunnel, are situated on). 

- A management IP which will be allowed access to managing the VPN over the internet.

  - If you have another means of accessing the internal network (where the VPN server will
    be running), for example our :doc:`client VPN </networking/client-vpn/index>`, this is
    not needed and once the tunnel is up, you can connect to its remote IP. Normally the
    management IP is the same as the local gateway.

Sizing guidelines
-----------------

Our tests show that CPU time and CPU clock-speed are the two main factors in getting a high
throughput from the VPN.

Using ``iperf3`` we've measured 1+ Gbit/s through the service using a standard hp.2x4
:doc:`flavor </compute/flavors>` which we believe is a good choice (and is the default option). 

If cost is your main concern, scaling down to a gp.1x2 will still run the VPN with no issues
but expect throughput around 100 Mbit/s (which is enough for many use-cases).

Scaling up further to more than two CPU cores, speed gain will be minimum. Prioritize the high
performance flavors to get greater CPU clock speeds. 

If you want your tunnel 100% consistent, we also recommend our gp.4x8-pinned flavor which will
grant all the capacity of the four cores to the VPN.

.. note::

   Performance is equally based on the other end of the tunnel as well as your remote bandwidth. Take care
   when measuring the capacity of your bandwidth, if you don't get the throughput you expect, consult the
   manufacturer of your IPsec equipment to ascertain what its rated for.

Remote equipment
----------------

In order to run a site-2-site tunnel to Binero cloud, you will need a remote router/firewall that is
capable of IPsec.

This standard is well supported in hardware (and software) from a wide variety of manufacturers. 

We recommend using the central firewall/router as remote endpoint as that will greatly simplify
routing, however its possible to also forward the correct ports to a server (virtual or physical)
on the inside of the firewall as Binero cloud support the ``NAT-T`` extension of the IPSec protocol.

This will however make the routing more difficult as, depending on architecture, you may need to add
routes to the various computers/servers directly. 

If investing in a new router, Binero has good experience from the `pfSense solution <https://www.pfsense.org>`__
which is available in both hardware and software versions.

..  seealso::

    - :doc:`index`
    - :doc:`setting-up`
