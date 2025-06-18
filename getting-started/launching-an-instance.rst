=====================
Launching an instance
=====================

This guide provides a step-by-step guide to get started and launch your first instance
on Binero cloud. The available methods to launch an instance are:

- `The cloud management portal </compute/launching-an-instance/cloud-management-portal>`_

- `OpenStack Horizon </compute/launching-an-instance/openstack-horizon>`_

- `OpenStack CLI </compute/launching-an-instance/openstack-terminal-client>`_

- `API </compute/compute-api>`_

For users starting out, we recommend using our cloud management portal as this provides
an better experience to get to know the cloud platform and will take you from 0-100 in
the shortest time possible with little prior understanding of working with public clouds.

More information on using the other methods are available under the sections for each
service in this documentation.

.. note::

   More information on how to access the portals is
   available :doc:`here </getting-started/managing-your-cloud/index>`.

General first steps
-------------------

When starting out in the platform there are some tasks that you normally only need to
perform once.

While there are many ways for you to perform these one time tasks, we will use the cloud
management portal in the following examples. 

The two main ways to connect your infrastructure (and in this case, your first instance)
to the internet:

- Setup an instances to use a public IP directly (see `directly attached IP addresses </networking/directly-attached-ips>`_,
  which is not the same as floating IP addresses).

- Setup a :doc:`/networking/router/index` and use :doc:`/networking/floating-ips` with
  the router. 

We will cover the second option (router + floating IP) in this quick start guide as it will
provide a more versatile option when growing your infrastructure and add an extra layer of
security.

.. note::

   Some features of the platform, for example load balancing, will **require** a router.

   From a security perspective its also preferable to use floating IP addresses as your instances
   will be less exposed to the internet than with a directly attached IP.

   Finally, when using a router with many instances, doing backend connections (for example from
   a web server to a database) can (and should) on the local network rather than on the public
   IP addresses.

   For this reason, we recommend using a router in all use cases except when using only a single
   instance with a strong local firewall in place. 

We recommend the following tasks to complete before launching your first instance:

- Add your SSH-key to the platform (if provisioning Linux-based instances). 

- Create a network.

- Add a subnet to your network.

- Create a router.

- Connect the router to the subnet by adding a router interface.

Add an SSH-key
^^^^^^^^^^^^^^

Please see `this section </compute/ssh-keys>`_ for information on how to add an SSH key.

Create a network
^^^^^^^^^^^^^^^^

To create a network:

- Press the **+** (plus) icon in the lower right corner.

- Press **Networking** and then **Network** in the sidebar menu.

- Name the network and optionally add a description. 

- **europe-se-1** is pre-selected as region. 

- Under **Availability zone**, select a zone, we recommend **europe-se-1a**

- Press **Create**

Add a subnet
^^^^^^^^^^^^

To add a :doc:`subnet </networking/subnet/index>` to the :doc:`network </networking/network/index>`
you created above.

- Press **Networking** and then **Network** in the sidebar menu. Select the network you created
  in the previous step.

- In the top right corner, select **Create subnet** icon.

- Name the subnet.

- Type a network address in CIDR notation. This is the network your servers will run
  on. It needs to be in one of the RFC1918 ranges (``10.0.0.0/8``, ``172.16.0.0/12``
  or ``192.168.0.0/16``). If you are unsure what range to use we suggest ``192.168.0.0/24``.

- Under **Gateway IP**, select **Set standard gateway IP**, this will select the first
  address in the range for your default route.

- While you don't have to use DHCP, we strongly recommend it for an easier workflow. It
  should be pre-selected.

- Under **Add pool**, select what pool you want in the range you choose in previous step. You
  add a start and stop, for example in the above ``192.168.0.0/24`` example a start might be
  ``192.168.0.100`` and stop ``192.168.0.200`` giving you 101 addresses in the pool. As the
  first address (``192.168.0.1``) is the gateway, you cant include that but can otherwise
  choose as you see your need.

- Under **Add DNS name server**, add the name servers you want your network to use. Binero
  provides DNS name servers on ``83.168.225.225`` and ``83.168.226.226`` and we recommend
  those but you can use any DNS servers.

- Press **Create subnet**

Create a router
^^^^^^^^^^^^^^^

To create a :doc:`router </networking/router/index>`.

- Press **Networking** and then **Routers** in the sidebar menu.

- Press the **+** (plus) icon in the lower right corner.

- **europe-se-1** is the pre-selected as region.

- Name the router and optionally add a description.

- Under **Availability zone**, select the same availability zone as the
  network you setup in the previous step.

- Under **Choose external network**, select the network with same name as
  the availability zone you choose.

- Press **Create**

Connect router to subnet
^^^^^^^^^^^^^^^^^^^^^^^^

To connect your :doc:`router </networking/router/index>` on your :doc:`subnet </networking/subnet/index>`
(to enable networking for the subnet through the router).

- Press **Networking** and then **Routers** in the sidebar menu. Select the router
  you created in the previous step.

- In the top right corner, select **Create interface** icon. 

- The subnet you just created should be pre-selected, if not select it.

- In the IP for, enter the first IP in the subnet you just created. If you
  choose ``192.168.0.0/24``, the first usable address is ``192.168.0.1``

- Press **Create**

At this point you are ready to provision your first compute instance!

You have the option between the following methods: 

- `The cloud management portal </compute/launching-an-instance/cloud-management-portal>`_

- `OpenStack Horizon </compute/launching-an-instance/openstack-horizon>`_

- `OpenStack CLI </compute/launching-an-instance/openstack-terminal-client>`_

- `API </compute/compute-api>`_

For users starting out in the platform or users that are not used to working with
public clouds, we recommend our cloud management portal.

..  seealso::

  - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
  - :doc:`/networking/router/index`
