===============
Retype a volume
===============

If you created a volume with the wrong :doc:`storage type <storage-types>` you are able
to retype it.

Perhaps you've noticed that a disk was to heavily utilised causing IO-wait on your instance
because it's using HDD storage and want to change it to SSD. The other scenario might be a
volume has grown and is to expensive to host on SSD. 

.. note::

   NVMe volumes are different, they are a local resource on the hypervisors and cannot be
   retyped. If you need to move to NVMe, you would need to setup a new instance based with
   NVMe, attach your volume, move the data to the local disk, then detach and delete the
   volume. 

The following two requirements **must be true** to re-type a volume attached to an instance:

- The instance must be running.

- There must not be :doc:`snapshots <snapshots/index>` on the volume.

Any deviations will cause a silent fail. A volume that is not attached also cant have any snapshots
but will otherwise be possible to just retype at convenience.

A retype can take hours to complete depending on the size of the volume, the instance is available
during this time but can have reduced IO during the swap-over.

We recommend doing this procedure during the night time (when IO is likely less).

.. important::

   As retyping involves copying *all* the data of the instance, we **strongly** recommend
   first :doc:`backing </backup/index>` it up before proceeding.

Cloud management portal
-----------------------

Its currently not possible to retype volumes by using the cloud management portal.

OpenStack Horizon
-----------------

To retype a volume by using :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Compute** and then **Instances** in the sidebar menu.

- Press the name of the instance from which you want to remove a volume.

- At the bottom, under the **Volumes attached** section, press the volume you want to retype.

- Select **Change volume type** in the dropdown in the top right corner.

- Select the new type.

- In migration policy dropdown, select **On-demand**.

- Press **Change volume type**

- A progress bar will show during the retype operation (which can take hours depending on size).

OpenStack Terminal Client
-------------------------

To retype a volume by using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack volume list``, save the ID of the volume you want to retype.

- Run this command: ``openstack volume type list``, save the name of the new volume type you want
  to use (for example ``ssd`` or ``hdd``).

- Run this command: ``openstack volume set --type [TYPE_NAME] [VOLUME_ID] --retype-policy on-demand``, replacing
  the items in angle brackets with the volume type name and the ID of the volume.

- Run this command to verify: ``openstack volume show [VOLUME_ID] -c status``, when the status changes
  from retyping, the retype is done.

..  seealso::

    - :doc:`persistent-block-storage/create-volume`
