========================
Assigning IP to instance
========================

General concept
---------------

An IP address is normally assigned the instance upon :doc:`creation <launching-an-instance/index>`.

This is the recommended approach to assigning an IP address (and thus, access to a network)
as it will run cloud-init and (provided you've assigned a :doc:`subnet </networking/subnet/index>`)
setup your ip-configuration for you.

*This is only done on instance provisioning so any extra* :doc:`ports </networking/ports>`
*you assign, will have to be manually configured in the operating system*.

Aside from the single IP that is normally setup during provisioning, two main use-cases for
connecting extra IP addresses to an instance exists:

- If your instances needs connect to different networks, this is possible to do when
  provisioning a new instance as you can add one or more ports.

- If your instance needs to have extra IP addresses from the same network, this is possible when
  launching an instance using OpenStack Horizon or the OpenStack terminal client by first manually
  creating one or more :doc:`ports </networking/ports>` and assigning them.

More information on the concepts of networking in our :doc:`networking section </networking/index>`.

.. tip::

   Adding an extra IP address by using the platform is analogous to adding a :doc:`port </networking/ports>` and
   connecting it to the instance.

   You need to add more ports to your instance to access more then one network, if the network is
   already connected through an existing port you can use that.

Assigning an IP after instance creation
---------------------------------------

To add an IP after creating your instance, the process consists of either creating a :doc:`port </networking/ports>`
and then assigning it to an instance or, as the below guide will detail, connecting an instance to a network (and
by doing so, creating a port in the process).

.. important::

   When adding more ports to your instances, its possible that your instance might loose its network connectivity
   when taking the IP configuration live in the operating system.

   Its also possible that floating IP addresses might need to be re-assigned to the new port depending on if the
   default route on the instance changes. We recommend doing changes to interfaces network configuration during a
   maintenance window. 

.. note::

   Below is an example on how to add networks which will add a port automatically. If you prefer to create the ports
   yourself (more information in the :doc:`/networking/ports` article), another option is to assign an already created
   port. 

Assigning a port using the cloud management portal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To assign a port to an instance by using the
:doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Compute** and then **Instances** in the sidebar menu.

- Press the instance you want to assign the port to.

- Press the **Network** tab.

- Press the **Add port** button.

- Choose the network and subnet you want to connect to.

- Press **Add port**

Your port might not be active in your operating system until it's configured there.

Assigning a port using the OpenStack Horizon portal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To assign a port to an instance by using
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Compute** and then **Instances** in the sidebar menu.

- In the dropdown menu to the far right of the line corresponding to the instance you want to resize,
  press **Attach Interface**

- Under **Network**, select the network (it will also show subnets) you want to connect to.

- Press **Attach interface**

Your port might not be active in your operating system until it's configured there.

Assigning a port using the OpenStack terminal client
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To assign a port to an instance by using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack server list``. Save the name of the instance you want to assign
  the port to.

- Run this command: ``openstack network list``. Save the name of the network you want to connect
  to the instance. 

- Run this command: ``openstack server add fixed ip [SERVER NAME] [NETWORK NAME]``, replacing the
  values in angle brackets by the information from the previous steps.

Your port might not be active in your operating system until it's configured there.

.. note::

   If you remove an existing port and add a new one, you might have problems with udev persistent
   rules because of new MAC address depending on the operating system.

   We would recommend making sure that you have :doc:`console access </compute/console>` to your instance
   and a password to login with when changing networking.

..  seealso::

    - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
    - :doc:`/getting-started/managing-your-cloud/openstack-horizon`
    - :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`
    - :doc:`/networking/ports`
    - :doc:`index`
