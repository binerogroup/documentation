===============================================
Managing subnets in the cloud management portal
===============================================

Create a subnet
---------------
To create a :doc:`subnet <index>` from the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

- Press "Networking" and then "Networks" in the sidebar menu.
- On the network to which you want to add the subnet, press the "create subnet" icon (looking like multiple rows of text with a small "+" sign).
- Name your subnet.
- Under "network address" you need to input the address in CIDR notation (see the :doc:`/networking/virtual-router/private-subnet/subnet-format` article for more information). For example "192.168.0.0/24.
- Under "Gateway-IP" you have the option to either :doc:`set an IP as gateway <connect-subnet-to-router>` or not. If you want a gateway, select "Use standard gateway-IP". If you don't, select "don't use a gateway". The last option "enter gateway manually" will enable you to choose a specific IP as your gateway. If you are unsure, we recommend "Use standard gateway".
- IPv4 should be selected. 
- If you want to use IPv4, we recommend using DHCP to assign addresses to hosts (as you wont have to login to a host via terminal to set them up). The checkbox should be checked. 
- Under "Add pool", add the :doc:`DHCP scope <dhcp>`. That is, the starting and end addresses you want to auto-assign to hosts using DHCP. Press the "+" sign above "add pool" and enter start and end addresses. For instance 192.168.0.10 and 192.168.0.254 if your range were 192.169.0.0/24.
- Under "dns name servers" we recommend adding our servers which are "83.168.225.225" and "83.168.226.226". You can press the "+" sign multiple times. You can use any dns servers you want though. 
- Under "add route", you would add static routes (see: `../routing-between-subnets`). 
- Press "create subnet".

Assign subnet to router
-----------------------
To :doc:`connect the subnet to a virtual router <connect-subnet-to-router>`, follow these steps:

- Press "Networking" and then "Networks" in the sidebar menu.
- Press the network you want to connect to your router.
- Under "subnet" section, check what "Gateway-IP" is assigned to the subnet you want to connect. Usually, this would be the first IP in the range. If there is not gateway IP, this will need to be set first, using the "edit" (small pencil icon) next to the subnets row. Save the Gateway-IP for upcoming steps.
- Press "Networking" and then "Routers" in the sidebar menu.
- Press the "create interface" on the router you want to connect the subnet to. Its a small icon that looks like rows of text with a "+".
- Select the subnet that you want to connect in the "Subnet" dropdown.
- Input the Gateway-IP from above step under "Ip" field.
- Press "create interface".

..  seealso::
    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/virtual-router/index`