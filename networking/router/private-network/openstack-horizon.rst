=========================================
Managing networks using OpenStack Horizon
=========================================

Create a network
----------------
To create a :doc:`network <index>` from :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

- Under "project", click "Network" and then "Networks" in the sidebar menu.
- Click "Create Network" in the right upper corner.
- Name your network.
- The "enable admin state" should be selected. It controls whether the router can receive traffic (that is: that its provisioned in the platform and not just in the portal).
- If you want to create a :doc:`subnet <../private-subnet/index>`, you could do that from this view as well, if so leave the "Create subnet" checkbox checked, if you prefer to follow our documentation and do this separately, un-check the checkbox.
- Under "availability zone (hints)", select the availability zone that router or instance that you want to connect the network to, resides.
- Under MTU, enter the value 1450. Binero.cloud does not currently support jumbo frames.
- Press "create". If you've opted to create a subnet at once, this option will instead be "next".

.. Note::
	In order to connect an instance or router to the network, you will also need to create a :doc:`subnet <../private-subnet/index>` which you can then attach to an interface on a router or an instance.


..  seealso::
    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/router/index`

