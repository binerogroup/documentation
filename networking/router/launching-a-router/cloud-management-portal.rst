===================================================
Launching routers using the Cloud management portal
===================================================

To launch a :doc:`router <../index>` from the
:doc:`cloud management portal </getting-started/managing-your-cloud/cloud-management-portal>`

- Press **Networking** and then **Routers** in the sidebar menu.

- Press the **+** (plus) icon in the lower right corner.

- Under region, *europe-se-1* should be pre-selected.

- Name your router and optionally provide a description.

- Under **Availability zone (hints)**, select the :doc:`availability zone <../../regions-and-availability-zones>`
  to place the router in. If you are unsure, select *europe-se-1a* here.

- Under **Select external network**, choose the network that corresponds to the availability zone
  you selected. 

- Set **Admin state** to up.

- Press **Create** in the lower right corner.

.. note::

   To connect instances to the router, it will also need a :doc:`network <../../network/index>`
   and a :doc:`subnet <../../subnet/index>` configured.

..  seealso::

    - :doc:`../../regions-and-availability-zones`
    - :doc:`../index`
