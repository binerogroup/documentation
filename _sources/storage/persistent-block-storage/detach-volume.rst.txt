===============
Detach a volume
===============

If you want to save a volume (when deleting the instance) for later or just remove it
from an instance, you must first detach it.

A volume used as boot disk (that is, the disk that stores the instances operating system)
*cannot be detached*. If you want to save such a volume, the workflow would be:

- :doc:`Snapshot <../snapshots/index>` the volume.

- :doc:`Create a new volume from the snapshot <../snapshots/create-volume-from-snapshot>`.

- (optional) Delete the original instance with its volume.

Because of this, volumes that are non-detachable (for being boot drives) will not give that
option in the cloud management portal - and will produce an error when trying to detach in
OpenStack Horizon or via the OpenStack terminal client.  

.. important::

   While its possible, we don't recommend detaching a volume on a running instance as it could
   impact the data integrity if its not properly unmounted in the operating system.

Cloud management portal
-----------------------

To detach a volume using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Compute** and then **Instances** in the sidebar menu.

- Press the instance that you want to resize.

- Press the **Volumes** tab.

- Press the small chain-link icon with a line over to the right next to the volume you want
  to remove. If there isn't such an icon, then the volume cannot be removed.  

OpenStack Horizon
-----------------

To detach a volume using :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Compute** and then **Instances** in the sidebar menu.

- Press the name of the instance from which you want to remove a volume.

- At the bottom, under the **Volumes attached** section, press the volume you want
  to detach.

- At the top right, press the dropdown and select **Manage Attachments**

- Press **Detach volume** on the row of the instance. 

- If you get an error, most likely the volume is a boot volume and cannot be
  detached (see above).

OpenStack Terminal Client
-------------------------

To detach a volume using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack server list``, save the name of the instance to which
  the volume you want to extend is connected.

- Run this command: ``openstack server volume list [NAME_OF_INSTANCE]``, replacing the
  name with that from previous step.

- Run this command: ``openstack server remove volume [INSTANCE_ID] [VOLUME_ID]``, replacing
  the items in angle brackets with the "Server ID" and "Volume ID" from the output of the
  previous command.

- If you get an error, most likely the volume is a boot volume and cannot be
  detached (see above).

..  seealso::

    - :doc:`create-volume`
