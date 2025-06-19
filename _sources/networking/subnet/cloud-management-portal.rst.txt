===============================================
Managing subnets in the cloud management portal
===============================================

Create a subnet
---------------

To create a :doc:`subnet <index>` from the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Networking** and then **Networks** in the sidebar menu.

- On the network to which you want to add the subnet, press the **Create subnet** icon (rows of text with a small
  **+** plus sign).

- Name your subnet.

- Under **Network address** you need to input the address in CIDR notation (see the :doc:`/networking/subnet/subnet-format`
  article for more information). For example ``192.168.0.0/24``.

- Under **Gateway-IP** you have the option to either :doc:`set an IP as gateway <connect-subnet-to-router>` or
  not. If you want a gateway, select **Use standard gateway-IP**. If you don't, select **don't use a gateway**. The
  last option **enter gateway manually** will enable you to choose a specific IP as your gateway. If you are unsure, we
  recommend **Use standard gateway**.

- Select IPv4.

- If you want to use IPv4, we recommend using DHCP to assign IP addresses to hosts.

- Under **Add pool**, add the :doc:`DHCP scope <dhcp>`. That is, the starting and end addresses you want to auto-assign
  to hosts using DHCP. Press the **+** (plus) sign above **Add pool** and enter start and end addresses. For example
  ``192.168.0.10`` and ``192.168.0.254`` if your range is ``192.169.0.0/24``.

- Under **DNS name servers** we recommend adding our servers which are ``83.168.225.225`` and ``83.168.226.226``. You can
  press the **+** (plus) sign repeatedly to add more servers.

- Under **Add route**, you would add static routes (see: `../router/routing-between-subnets`). 

- Press **Create subnet**

Assign subnet to router
-----------------------

To :doc:`connect the subnet to a router <connect-subnet-to-router>`

- Press **Networking** and then **Networks** in the sidebar menu.

- Press the network you want to connect to your router.

- Under **Subnet** section, check what **Gateway-IP** you have set on the subnet you want
  to add to the router . This would normally be the first IP in the range. If there is not
  gateway IP, you need to set one first, using the **Edit** (small pencil icon) next to the
  subnets row. Save the Gateway-IP for upcoming steps.

- Press **Networking** and then **Routers** in the sidebar menu.

- Press the **Create interface** on the router you want to connect the subnet to. Its a small
  icon that looks like rows of text with a **+** (plus) sign.

- Select the subnet that you want to connect in the **Subnet** dropdown.

- Input the Gateway-IP from above step under **IP** field.

- Press **Create interface**

..  seealso::

    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/router/index`
