=====================
Floating IP addresses
=====================

Binero cloud provides two ways to use public IP addresses , using
:doc:`directly attached IP addresses <directly-attached-ips>` or
Floating IP addresses.

Directly attached IP addresses is a public IP addresses assigned directly on
the :doc:`port </networking/ports>` of an :doc:`instances </compute/index>`. This
means that when list the IP address in your operating system you would see the
public IP address assigned to the network interface.

When using a floating IP, the result would instead be the IP from the
:doc:`subnet <subnet/index>` that you assigned to the instance.

The floating IP is then diverted to and from the instance through the
router that performs :doc:`router/nat`.

Floating IP addresses are, as the name implies, not tied to a single instance but mapped to
a port (which has an IP from a :doc:`subnet <subnet/index>`).

They are floating in the sense that you can move them between instances with zero
configuration required on the instance.

A floating IP is local to and owned by the project, even if its not actively used on
any instance it's still allocated to you.

Using a floating IP makes the IP address portable within the platform and if you have
third party dependencies such as using the IP address in remote firewall configurations
it's the preferred way to use public IP addressing as you keep the floating IP until you
delete the allocation.

Floating IP addresses require a :doc:`router <router/index>` as its the router that does
the mapping. On a technical level the router uses :doc:`router/nat` in both directions:

- Incoming traffic from the internet would be a destination NAT (DNAT) to the
  subnet IP from the floating. 

- Outgoing traffic to the internet would be a source NAT (SNAT) to appear as
  if originating from the floating IP. 

Key differences to directly attached IP addresses
-------------------------------------------------

- A floating IP is not visible (or indeed configured) on an instance. This means any application
  that use a floating IP, will have to work with NAT (which the majority of applications do).

- A floating IP uses a :doc:`router <router/index>` where directly attached IP addresses does not
  giving a small performance penalty that is negligible and insignificant.

- Some features in the platform require floating IP addresses and will not work with directly attached
  IP addresses such as the :doc:`load balancer </networking/load-balancer/index>` service.

Setting up a floating IP
------------------------

You assign floating IP addresses to instances (and in particular, to a subnet IP on an instance). Depending
on what tool used, you might need to add floating IP addresses to the project first.

.. important::

   When assigning a new floating IP, make sure you assign one from the same :doc:`availability zone <regions-and-availability-zones>`
   that the instance or service you want to use it on.

.. note::

   A floating IP is a service and a incurs a cost per IP address allocated to your project. If you have floating
   IP addresses no longer used, make sure to remove them to release the IP back to the pool. 

.. note::

   If you have many internal IP addresses on an instance, you need to assign the floating IP to the internal IP of
   the port that is the default route for the instance. If you are unsure, assign the floating IP and if it does not
   work, remove it and try another internal IP.

Adding floating IP addresses using the cloud management portal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To assign a floating IP to an instance by using the
:doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Network** and then ``Floating IPs`` in the sidebar menu.

- Verify that you have a free floating IP. It should say **Down** under the IP.

- If not, assign a new IP by clicking the **+** (plus) symbol in the lower right corner.

  - Under **Choice of network**, select a network from the same availability zone as the instance you want to assign the IP to. 

  - Optionally give the IP a description.

  - Press **Create**.

  - Press **Compute** and then **Instances** in the sidebar menu.

- Press the instance that you want to add a floating IP to.

- Press the **more** icon (looks like three small dots) in the top right.

- Press **Add floating IP**.

- Select your new (or old, if you had one already) IP under ``fixed IPs``.

- Under **Available ports**, select the internal IP to map the floating IP to. 

- Press **Associate IP**.

- Your IP should now be visible under the **Networking** tab. Remember that you might need
  to add :doc:`security groups <security-groups/index>` to the instance if you cannot
  reach it.

Adding floating IP addresses using OpenStack Horizon
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To assign a floating IP to an instance by using the
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Network** and then ``Floating IPs`` in the sidebar menu.

- Verify that you have a free floating IP. It should say ``-`` under the column **mapped fixed IP address**.

- If not, assign a new IP by clicking the **+** (plus) symbol in the lower right corner.

  - Press ``Allocate IP to project`` in the top right corner.

  - Under **Pool**, select a network from the same availability zone as the instance you want to assign the IP to. 

  - Optionally give the IP a description.

  - Press ``Allocate IP``.

- Under **Project**, click **Compute** and then **Instances** in the sidebar menu.

- In the dropdown menu to the far right of the line corresponding to the instance you want to add the floating
  IP to, press **Associate floating IP**.

- Select your new (or old, if you had one already) IP under **IP Address**.

- Under ``Ports to be associated``, select the internal IP to map the floating IP to. 

- Press **Associate**

- Your IP should now be visible under the **IP address** column. Remember that you might need
  to add :doc:`security groups <security-groups/index>` to the instance if you cannot reach it.

Adding a floating IP using OpenStack terminal client
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To assign a floating IP to an instance by using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack floating ip list``

- If there is an IP that says ``none`` under the **fixed IP address** column then that's available.

  - We recommend also figuring out if the floating IP is from the right availability zone, you can do
    this by running ``openstack network show [ID]`` where ID is the UUID from the **Floating Network**
    column in the previous command. Its important that you use a floating IP from the same availability zone. 

- If there was no available IP, assign one to the project: 

  - Run this command: ``openstack network list --external``. Note the name of the network that is in the
    availability zone that you want to use the floating IP (for example *europe-se-1-1a-net0*). 

  - Run this command: ``openstack floating ip create [NETWORK NAME]``, replacing [NETWORK NAME] with the
    name of the network from the previous step.

- Run this command: ``openstack floating ip list``, note the new IP address.

- Run this command: ``openstack server list``, note the name of the instance you want to
  assign the floating IP to. 

- Run this command: ``openstack server show [NAME]``, replacing [NAME] with the name of the server from
  previous step. Note which address from the **addresses** field you want to connect the floating IP to. 

- Run this command: ``openstack server add floating ip --fixed-ip-address [INTERNAL IP] [INSTANCE NAME] [FLOATING IP]``, replacing
  [INTERNAL IP] with the instances IP from the previous step, [INSTANCE NAME] with the name of the instance and [FLOATING IP] with
  whichever floating IP you added as per earlier step.

- Your IP should now be visible under the **addresses** field when running the command ``openstack server show [NAME]``. Remember
  that you might need to add :doc:`security groups <security-groups/index>` to the instance if you cannot reach it.

..  seealso::

    - :doc:`directly-attached-ips`
    - :doc:`regions-and-availability-zones`
    - :doc:`router/index`
