====================
Shelving an instance
====================
Shelving an instance is a way to leave an instance permanently shut down for a period of time, either because its temporarily not needed or because as part of an decommissioning process, its to be saved in an offline state for some time. 

.. Note:: 
	In Binero.Cloud, instances that are not running are only billed at a 20% rate. This is due to the resource allocation that is still happening in the background. It makes no difference if an instance is shelved or just turned off from a billing perspective, however shelving an instance does make it clear that the instance is not just switched off in error as well as prevents it from being booted by accident.

Currently, shelving is only possible via :doc:`/getting-started/managing-your-cloud/openstack-horizon` or :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`. 

OpenStack Horizon
-----------------
To shelve an `instance <index>`_ using the Horizon portal follow these steps: 

- Under "project", click "compute" and then "instances" in the sidebar menu.
- In the drop-down menu to the far right of the line corresponding to the instance you want to resize, press "Shelve instance".

The instance will be shutdown (if its running) and the shelving process will run. To un-shelve repeat the process but instead choose "Un shelve instance". 

OpenStack terminal client
-------------------------
To shelve an `instance <index>`_ using the OpenStack terminal client, follow these steps: 

- Identify the instance you want to shelve. This can be done by running the following command: ``$ openstack server list``.
- To shelve the instance ``$ openstack server shelve [NAME]``. Replace the values within brackets with the name of the instance from the previous step.

The instance will be shutdown (if its running) and the shelving process will run. To un-shelve repeat the process but instead run the following command: ``$ openstack server unshelve [NAME]``.

..  seealso::
    - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
    - :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`