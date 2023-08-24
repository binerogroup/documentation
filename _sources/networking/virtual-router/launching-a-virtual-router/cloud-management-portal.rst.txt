===========================================================
Launching virtual routers using the Cloud management portal
===========================================================
To launch a :doc:`virtual-router <../index>` from the :doc:`cloud management portal </getting-started/managing-your-cloud/cloud-management-portal>`, follow these steps: 

- Press "Networking" and then "Routers" in the sidebar menu.
- Press the "+" icon in the bottom right corner.
- Under region, "europe-se-1" should be pre-selected.
- Name your router and optionally provide a description.
- Under "availability zone (hints)", select the :doc:`availability zone <../../regions-and-availability-zones>` to place the router in. If you are unsure, select "europe-se-1a" here.
- Under "select external network", choose the network that corresponds to the availability zone you selected. 
- The "admin state up" should be selected. It controls whether the router can receive traffic (that is: that its provisioned in the platform and not just in the portal).
- Press "create" in the lower right corner.

.. Note::
	In order to connect instances to the router, it will also need a `network <../private-network/index>` and a `subnet <../private-subnet/index>` configured. 

..  seealso::
    - :doc:`../../regions-and-availability-zones`
    - :doc:`../index`