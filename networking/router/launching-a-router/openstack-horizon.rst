=========================================
Launching routers using OpenStack Horizon
=========================================

To launch a :doc:`router <../index>` from the
:doc:`OpenStack Horizon portal </getting-started/managing-your-cloud/openstack-horizon>`

- Under **Project**, click **Network** and then **Routers** in the sidebar menu.

- Click **Create Router** in the right upper corner.

- Name your router.

- Check the **Enable admin state** box.

- Under **External Network**, select the network that corresponds to the
  :doc:`availability zone </networking/regions-and-availability-zones>` that
  you placed the router in.

  - If you are unsure, select **europe-se-1-1a-net[N]** here, where N is one of
    the available network numbers.

- Under **Availability zone (hints)**, choose the availability zone that corresponds
  to the network you selected in previous step.

- Press **Create Router**

.. note::

   In order to connect instances to the router, it will also need a :doc:`network </networking/network/index>`
   and a :doc:`subnet </networking/subnet/index>` configured on a network.

..  seealso::

    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/router/index`
