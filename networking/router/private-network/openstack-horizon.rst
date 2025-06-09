=========================================
Managing networks using OpenStack Horizon
=========================================

Create a network
----------------

To create a :doc:`network <index>` from :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Network** and then **Networks** in the sidebar menu.

- Click **Create Network** in the right upper corner.

- Name your network.

- Check the **Enable admin state** box.

- If you want to create a :doc:`subnet <../private-subnet/index>`, you could do that from this view as
  well, if so leave the **Create subnet** checkbox checked, if you prefer to follow our documentation and
  do this separately, you can clear the checkbox.

- Under **Availability zone (hints)**, select the availability zone that router or instance that you want
  to connect the network to, resides.

- Under MTU, enter the value 1450. See :doc:`MTU </networking/mtu>` for more information.

- Press **Create**. If you've opted to create a subnet at once, this option will instead be **Next**.

.. note::

   In order to connect an instance or router to the network, you will also need to create
   a :doc:`subnet <../private-subnet/index>` which you can then attach to an interface on
   a router or an instance.

..  seealso::

    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/router/index`
