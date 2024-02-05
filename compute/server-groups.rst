=============
Server groups
=============

By creating groups of instances, its possible to assign various functions from the platform onto the members of the group. The most common feature is "affinity" (or "anti affinity") wherein you can force instances to be on the same underlying hardware ("hypervisor") - or vice versa (to force instances onto separate hypervisors). 

Affinity types
--------------
In Binero Cloud, we support four versions of affinity:

- **affinity** will force instances in the same group to be hosted on the same hardware. It is useful to achieve the quickest possible network speed between them (traffic will never enter the networking but remain in the hypervisor CPU) but will bring down all instances in the group in the event of the hypervisor crashing.
- **anti-affinity** does the reverse of affinity, it will provision instance on different hypervisors and therefore guarantee that two grouped instances will never be affected by a single hypervisor crash. 
- **soft-affinity** does the same as affinity but will only attempt to place on same hardware. If it fails for some reason (the hypervisor is oversubscribed or not available) the provisioning finds an alternative hypervisor according to best effort.
- **soft-anti-affinity** does the same as anti-affinity but will only attempt to place on different hypervisors. If it fails for some reason (there is not enough hypervisors available for the type of resource, for instance) the provisioning finds an alternative hypervisor according to best effort.

.. Important::
	We **strongly** recommend using the "soft" versions. This is because we from time to time move instance around in the platform during maintenance and if an instance cannot meet the requirement (due to affinity), it will be powered off. The soft version will always be able to be migrated.

Anti affinity
-------------
While your instances are running in the cloud, they are being powered by hardware (so called "hypervisors"). Hardware can fail and if you have a redundant solution setup with failover between instances, it makes sense to guarantee that they are hosted on different hypervisors. Should a hypervisor crash, only one instance is affected and your application will continue to function. 

.. Note::
	Anti Affinity in and of itself does not provide high availability but makes aware of how your high availability is setup. You still need a highly available system with more than a single instance doing the same thing, to benefit from Anti Affinity.

Creating a server group
-----------------------
Server groups can only be create using OpenStack Horizon or OpenStack terminal client. Please see below for the steps involved.

.. Note::
	Please note that an instance cannot be added to a security group after it has been created. This is because the server group is needed at provisioning time. In order to add an instance that already exists to a server group, please follow our :doc:`guide here <re-create-instance-from-volume>` to re-create it.

OpenStack Horizon
^^^^^^^^^^^^^^^^^
To create a server group through :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps:

- Under "project", click "compute" and then "server groups" in the sidebar menu.
- Press "create server group" in the top right corner.
- Choose a name.
- Choose an affinity policy according to your needs (see above).
- Press "submit".

Once you have a security group, its available when :doc:`creating an instance </compute/launching-an-instance/openstack-horizon>`. 

OpenStack terminal client
^^^^^^^^^^^^^^^^^^^^^^^^^
To create a server group through :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps:

- Run this command: ``$ openstack server group create --policy <AFFINITY_NAME> <NAME>``, selecting an affinity type from the alternatives above (for instance ``soft-anti-affinity``) and a name.
- The server groups are listable by running: ``$ openstack server group list``, this will also show the ID which is needed when creating an instance with a server group.

Once you have a security group, its available when :doc:`creating an instance </compute/launching-an-instance/openstack-terminal-client>` using the ``--hint group="<UUID>"``.
