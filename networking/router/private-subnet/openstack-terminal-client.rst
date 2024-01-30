================================================
Managing subnets using OpenStack terminal client
================================================

Create a subnet
---------------
To create a :doc:`private subnet <index>` from the from the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps: 

- Run: ``$ openstack network list --internal``, this will give you a list of available networks to add a subnet to. Note the name of the network.
- Decide what subnet range to use. More information in the :doc:`subnet-format` article.
- Decide on using DHCP (recommended) and what pool to use. More information in the :doc:`dhcp` article.
- Decide if you want to use a gateway or not. More information in the :doc:`connect-subnet-to-router` article. 
- Run: ``$ openstack subnet create --subnet-range=[RANGE] --gateway=auto --network=[NETWORK NAME] --dns-nameserver=83.168.225.225 --dns-nameserver=83.168.226.226 --allocation-pool start=[POOL START IP],end=[POOL END IP] [SUBNET NAME]``, replacing the items in brackets to the values identified in previous steps.

Assign subnet to router
-----------------------
To :doc:`connect to a router <connect-subnet-to-router>`, follow these steps:

- Run: ``$ openstack router list`` to get the list of your available routers. Save the name of the router you want to connect the subnet to.
- Run: ``$ openstack subnet list`` to get the list of your available subnets. Save the name of the subnet you want to connect to the router.
- Run: ``openstack router add subnet [ROUTER NAME] [SUBNET NAME]``

.. Note::
	In the above example, the router will for instance use the default gateway IP. To have more granular control, try to add "-?" to the commands, you will then get the help function that will show you more options to work with. 

..  seealso::
    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/router/index`

