===============
Retype a volume
===============

If you created a volume with the wrong :doc:`storage type <storage-types>` you are able
to retype it.

Perhaps you've noticed that a disk was to heavily utilised causing IO-wait on your instances
because it was placed on HDD storage and want to change it to SSD. The other scenario might
be a volume has grown and is to expensive to host on SSD. 

.. note::

   NVMe volumes are different, they are a local resource on the hypervisors and cannot be
   retyped. If you need to move to NVMe, you would need to setup a new instance based with
   NVMe, attach your volume, move the data to the local disk, then detach and delete the
   volume. 

The following two requirements *must be met* to re-type volumes that are attached to instances:

- The instance must be running.

- There must not be :doc:`snapshots <snapshots/index>` on the volume.

Any deviations will cause a silent fail. A volume that is not attached also cant have any snapshots
but will otherwise be possible to just retype at convenience. A retype may take several hours, the
instance is available during this time but may have reduced IO during the swap-over.

We recommend doing this procedure during the night time (when IO is likely less).

.. important::

   As retyping involves copying *all* the data of the instance, we **strongly** recommend
   first :doc:`backing </backup/index>` it up before proceeding.

Cloud management portal
-----------------------

Its currently not possible to retype volumes using the cloud management portal.

OpenStack Horizon
-----------------

To retype a volume using :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps:

- Under **Project**, click **Compute** and then **Instances** in the sidebar menu.

- Press the name of the instance from which you want to remove a volume.

- At the bottom, under the **Volumes attached** section, press the volume you want to retype.

- Select **Change volume type** in the dropdown in the top right corner.

- Select the new type.

- In migration policy dropdown, select **On-demand**.

- Press **Change volume type**

- A progress bar will show during the retype procedure (which may take several hours).

OpenStack Terminal Client
-------------------------

To retype a volume using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- Run this command: ``openstack server list``, save the name of the instance to which the volume
  you want to extend is connected.

- Run this command: ``openstack server volume list [NAME_OF_INSTANCE]``, replacing the name with
  that from previous step.

- Run this command: ``openstack volume type list``, save the name of the new volume type you want
  to use (ssd or hdd).

- Run this command: ``openstack volume set --type [TYPE_NAME] [VOLUME_ID] --retype-policy on-demand``, replacing
  the items in angle brackets with the type name (hdd/ssd) and the ID of the volume from previous steps.

- Run this command to verify: ``openstack volume show [VOLUME_ID] -c status``, when the status changes
  from "retyping", the retype is done.

..  seealso::
    - :doc:`persistent-block-storage/create-volume`
