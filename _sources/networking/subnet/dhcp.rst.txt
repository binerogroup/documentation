====
DHCP
====

For assigning addresses to instances, Binero cloud uses the DHCP protocol. While its possible to do
static IP addresses in the platform, we highly recommend using it because it greatly simplifies adding
new instances (they will become available with zero configuration needed).

Instance IP allocations are saved so there is no risk that an instance (as is the case traditionally with
DHCP - which was typically used for client computers) would suddenly get another IP address.

A DHCP scope (or pool) is part of a network range that is reserved for the DHCP server do deliver to its
clients. The scope is setup on a :doc:`subnet <index>` when creating it, instructions are provided under
each management tool.

DHCP, other than assigning addresses, also assigns the correct :doc:`/networking/mtu` to instances. This is
important for networking functionality in general so if opting to not use DHCP, we recommend reading the
MTU article carefully to understand the MTU concept. 

.. tip::

   When assigning a DHCP scope (or pool), leave some room for potential statically assigned addresses as well as
   the gateway address.

   A typical recommendation would be to reserve the first 10-20 addresses in a subnet, depending on the subnet
   size. The remaining addresses would ideally go into the pool.

Routing via DHCP
----------------

Since DHCP provisions IP-configuration to instances, if there is a need to add :doc:static routes <../static-routing>` to
instances (so called "Host routes") for whatever reason, DHCP is a good way to accomplish this as any routes that are added
to the DHCP subnet will get pushed to all instances on that subnet (existing as well as any new ones added).

DHCP will only add routes on instances, which is only usable to route to other instances on the same subnet. To route to a
destination outside the same subnet, the default route is normally used but a good use case for routing via DHCP is when a
VPN is setup on the same subnet that does not do :doc:`../router/nat`. See below for how to add routing to a DHCP pool.

Add a route using the cloud management portal
---------------------------------------------

To add a route using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Networking** and then **Networks** in the sidebar menu.

- Press the network for which you want to add the route.

- Press the edit icon (a small pencil) next to the subnet for which you want to add the route.

- Press the "+" sign above "add host route".

- Under **Destination CIDR**, enter the destination network in
  :doc:`CIDR notation </networking/subnet/subnet-format>`.

- Under ``Nexthop (IP)`` add the gateway address. This address needs to be in the subnet you are editing.

- Press **Save subnet**.

Add a route using OpenStack Horizon
------------------------------------

To add a route using the :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Network** and then **Networks** in the sidebar menu.

- Press the name of the network for which you want to add the route.

- Press the **Subnets** tab and then **Edit subnet** button on the row of the subnet for which you
  want to add the route.

- Press the **Subnet details** button.

- Enter the route as ``destination subnet in `CIDR notation </networking/subnet/subnet-format>`,nexthop (gateway)``,
  for example ``192.168.10.0/24,192.168.1.5``. A single route entry on a single row.

- Press **Save**

Add a route using OpenStack terminal client
--------------------------------------------

To add a route using the using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack subnet list``. Save the name of the subnet you want to add the route to.

- Run this command: ``openstack subnet set --host-route destination=[DESTINATION_SUBNET],gateway=[GATEWAY] [NAME_OF_SUBNET]``, replacing
  the items in angle brackets with the information from the previous steps and the destination network and gateway/nexthop. If you want
  to know more options, use ``-h`` at the end of the command.

..  seealso::

    - :doc:`../index`
