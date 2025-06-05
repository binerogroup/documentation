========================================
Managing subnets using OpenStack Horizon
========================================

Create a subnet
---------------

To create a :doc:`subnet <index>` from the
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Network** and then **Networks** in the sidebar menu.

- Press the name of the network to which you want to add the subnet.

- Press the small dropdown next to **Edit network** in the top right corner. Select **Create subnet**

- Name your subnet.

- Under "Network Address" you need to input the address in CIDR notation, more
  information about this in the :doc:`subnet-format`. For example "192.168.0.0/24".

- Under "IP Version", keep "IPv4".

- Under "Gateway-IP" you have the option to either :doc:`set an IP as gateway <connect-subnet-to-router>`
  or not. 

- If you want a gateway, choose a gateway IP and enter it in the form (we recommend the
  first IP in the range, if its available) or just leave it blank to select the first
  available IP. 

  - If you don't, leave the field blank and select **Disable gateway** below.

- Press **Next**

- Under **Allocation pool**, add the :doc:`DHCP scope <dhcp>`. That is, the starting and end
  addresses you want to auto-assign to hosts using DHCP. Add each pool (we recommend just
  one pool per subnet) by adding the first address, (comma) last address (with no spaces), for
  example (if you would use the 192.168.0.0/24 range) "192.168.0.20,192.168.0.254".

- Under **DNS name servers** we recommend adding our servers which are "83.168.225.225" and "83.168.226.226",
  one per line, in the form. You can use any DNS servers you want though.

- Under **Host routes**, you would add static routes (more information in
  the :doc:`../routing-between-networks` article. 

- Press **Create**

Assign subnet to router
-----------------------

To :doc:`connect-subnet-to-router`, follow these steps:

- Under **Project**, click **Network** and then **Routers** in the sidebar menu.

- Press the name of the router you want to connect the subnet to.

- Press the **Interfaces** tab on the top.

- Press **Add interface**

- Select the subnet in the "subnet" drop down.

- Leave the "IP address (optional)" field blank. This assumes the gateway address
  on the subnet is not in use somewhere (perhaps by some instance that is running
  as gateway). Otherwise, the IP address will have to be chosen. 

- Press **Submit**

..  seealso::

    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/router/index`
