===================================================
Managing networks using the cloud management portal
===================================================

Create a network
----------------

To create a :doc:`network <index>` from the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

- Press "Networking" and then "Networks" in the sidebar menu.
- Press the "+" icon in the bottom right corner.
- Under region, "europe-se-1" should be pre-selected.
- Name your network and optionally provide a description.
- Under "availability zone (hints)", select the :doc:`availability zone </networking/regions-and-availability-zones>` that your router or instance to which you want to connect the network is placed in.
- Under "select external network", choose the network that corresponds to the availability zone you selected. 
- The "admin state up" should be selected. It controls whether the network can receive traffic (that is: that its provisioned in the platform and not just in the portal).
- Press "create" in the lower right corner.

.. note:: In order to connect an instance or router to the network, you will also need to create a :doc:`subnet <../private-subnet/index>` which you can then attach to an interface on a router or an instance.


..  seealso::
    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`../index`
