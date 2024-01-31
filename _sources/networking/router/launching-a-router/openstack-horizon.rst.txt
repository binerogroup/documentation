=========================================
Launching routers using OpenStack Horizon
=========================================

To launch a :doc:`router <../index>` from the :doc:`OpenStack Horizon portal </getting-started/managing-your-cloud/openstack-horizon>`, follow these steps: 

- Under "project", click "Network" and then "Routers" in the sidebar menu.
- Click "Create Router" in the right upper corner.
- Name your router.
- The "enable admin state" should be selected. It controls whether the router can receive traffic (that is: that its provisioned in the platform and not just in the portal).

- Under "External Network", select the network that corresponds to the :doc:`availability zone </networking/regions-and-availability-zones>` to place the router in. If you are unsure, select "europe-se-1-1a-net[N]" here (where N is one of the available network numbers).
- Under "availability zone (hints)", choose the zone that corresponds to the network you selected in previous step. 
- Press "Create Router". 

.. note:: In order to connect instances to the router, it will also need a :doc:`network <../private-network/index>` and a :doc:`subnet <../private-subnet/index>` configured. 

..  seealso::
    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/router/index`


