===================================================
Managing networks using the cloud management portal
===================================================

Create a network
----------------

To create a :doc:`network <index>` from the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Networking** and then **Networks** in the sidebar menu.

- Press the **+** (plus) icon in the lower right corner.

- Under region, *europe-se-1* should be pre-selected.

- Name your network and optionally provide a description.

- Under **Availability zone (hints)**, select the :doc:`availability zone </networking/regions-and-availability-zones>` that
  your router or instance to which you want to connect the network to.

- Under **Select external network**, choose the network that corresponds to the availability zone you selected. 

- You should set **Admin state** to up.

- Press **Create** in the lower right corner.

.. note::

   To connect an instance or router to the network, you will also need to create a :doc:`subnet <../subnet/index>`
   which you can then attach to an interface on a router or an instance.

..  seealso::

    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`../index`
