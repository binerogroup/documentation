=====
Ports
=====

A port is a virtual representation of a network port.

A network port is a connection between a :doc:`network <network/index>`
and a device, a device can be a instance, router or load balancer.

You secure ports by assigning one or more :doc:`security groups (firewall) <security-groups/index>`
to the port to allow traffic. You can disable port security on a port to
disable security groups entirely.

.. important::

   It's strongly advised to **not** disable port security on a port as you are
   disabling all security groups and allowed address pairs (IP + MAC) filtering.

Ports are generally created on-demand when creating an instance and
selecting a network.

If you for some reason need to create a port manually, you can perform that
as shown below. If you do, you also need to assign the port (explicitly)
to the instance you want to connect to a network.

Remember that a manually created port might not be automatically removed when
you delete an instance.

.. note::

   Certain use-cases might exist where you would want to manually create a port.

   One use-case is if you want to assign many ports on the same network when creating
   an instance. Its only possible to add a network once, but you can assign many ports
   that each connect to the same network. 

We recommend sticking to a single port on an instance as its generally easier to understand
the network flow and plan security that way. You should instead use :doc:`routing <router/routing-between-networks>`.

If using this network design then you should rarely need to add ports manually as an
instance will have a port created when launched.

Below we will show how to create ports.

.. note::

   Should you opt not to use :doc:`subnet/dhcp` to assign IP configuration to a new
   port, remember that the :doc:`mtu` is also set via DHCP and you need to set it
   manually.

Create a port using the cloud management portal
-----------------------------------------------

To create a port by using the
:doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Networking** and then **Ports** in the sidebar menu.

- Press the **+** (plus) icon in the lower right corner.

- Name your port.

- Select the :doc:`network <network/index>` you want to connect to under **Network**.

- Select **Subnet** under **IP address or subnet**. If you would rather manage your IP-configuration
  on your instance manually (not recommended), you would instead leave **unspecified**.

- Select the :doc:`subnet <subnet/index>` you want to use.

- Press **Create**

Create a port using OpenStack Horizon
-------------------------------------

To create a port by using the
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Network** and then **Networks** in the sidebar menu.

- Click the name of the network to which you want to add the port. 

- Press the **Ports** tab on the top.

- Press **Create port**

- Name your port. 

- Choose **Subnet** under **Specify IP address or subnet**. If you would rather manage your
  IP-configuration on your instance manually (not recommended), you would instead leave **unspecified**.

- Select the :doc:`subnet <subnet/index>` you want to use.

- Press **Create**

Create a port using OpenStack terminal client
---------------------------------------------

- Run this command: ``openstack network list``. Save the name of the network you want
  to connect to.

- Run this command: ``openstack subnet list``. Save the name of the subnet you want to
  use (assuming you want to let the platform configure an IP on the port.

- Run this command: ``openstack port create --network [NETWORK NAME] --fixed-ip subnet=[SUBNET NAME] [PORT NAME]``, replacing
  the items in angle brackets with the information from the previous steps and the name of the port. If you want to know more
  options, use ``-h`` at the end of the command.

.. note::

   Your port is now available for use but remember that it also need to be
   :doc:`assigned to an instance </compute/assign-ip>` before you can use it.
