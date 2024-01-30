========================================
Managing subnets using OpenStack Horizon
========================================

Create a subnet
---------------

To create a :doc:`subnet <index>` from the :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

- Under "project", click "Network" and then "Networks" in the sidebar menu.
- Press the name of the network to wich you want to add the subnet.
- Press the small drowdown next to "edit networ" in the top right corner. Select "create subnet".
- Name your subnet.
- Under "Network Address" you need to input the address in CIDR notation, more information about this in the :doc:`subnet-format`. For example "192.168.0.0/24".
- Under "IP Version", keep "IPv4".
- Under "Gateway-IP" you have the option to either :doc:`set an IP as gateway <connect-subnet-to-router>` or not. 
- If you want a gateway, choose a gateway IP and enter it in the form (we recommend the first IP in the range, if its available) or just leave it blank to select the first available IP. 
- If you don't, leave the field blank and select "Disable gateway" below.
- Press "next".
- Under "Allocation pool", add the :doc:`DHCP scope <dhcp>`. That is, the starting and end addresses you want to auto-assign to hosts using DHCP. Input each pool (we recommend just one pool per subnet) by inputing the first address, (comma) last address (with no spaces). So for instance (if you would use the 192.168.0.0/24 range) "192.168.0.20,192.168.0.254".
- Under "dns name servers" we recommend adding our servers which are "83.168.225.225" and "83.168.226.226", one per line, in the form. You can use any dns servers you want though. 
- Under "host routes", you would add static routes (more information in the :doc:`../routing-between-networks` article. 
- press "Create".

Assign subnet to router
-----------------------

To :doc:`connect-subnet-to-router`, follow these steps:

- Under "project", click "Network" and then "Routers" in the sidebar menu.
- Press the name of the router you want to connect the subnet to.
- Press the "interfaces" tab on the top.
- Press "add interface".
- Select the subnet in the "subnet" drop down.
- Leave the "IP address (optional)" field blank. This assumes the gateway address on the subnet is not in use somewhere (perhaps by some instance that is running as gateway). Otherwise, the IP-address will have to be chosen. 
- Press "submit".

..  seealso::
    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/router/index`
