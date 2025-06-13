===============
Delete snapshot
===============

If you took a snapshot of an instance (and created and :doc:`image </images/index>`, there will be
two parts to delete, the *volume snapshot(s)* and the *created image*.

Each can (and should) be deleted irrespectively from each other. Deleting a snapshot
is not the same as removing data.

When you delete a snapshot you remove the ability to revert to that snapshot, i.e. you
consolidate the *current* state of the disk in the base image (or most recent snapshot). 

.. note::

   If your intent was to revert to a snapshot so as to bring the instance or volume back
   to the state of taking the snapshot, please see our :doc:`/images/launch-instance-from-image`
   guide which does this.

We recommend only having snapshots for limited periods of time. The more writes that are added to a
snapshot, the longer it will take to consolidate. Because of this, snapshots should be regularly deleted.

In the below example, we will delete both the image and the volume snapshots. If you only took a snapshot
of a volume, then the image will not be available and the first two steps can be skipped. 

Cloud management portal
-----------------------

To delete a snapshot using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Compute** and then **Images** in the sidebar menu.

- Press the delete button (looking like a trashcan) of the image/snapshot you want to delete.

- Press **Storage** and then **Snapshots** in the sidebar menu.

- Press the delete button (looking like a trashcan) of the image/snapshot you want to delete.

.. note::

   If you are unsure of which volume snapshot to delete, its possible to press it and then press
   its related volumes and in turn, the volumes related instances.

   The image is metadata and has no ties the actual instance it was modeled from.

OpenStack Horizon
-----------------

To delete a snapshot using :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Compute** and then **Images** in the sidebar menu.

- Locate the image in the list and press **Delete image** from its dropdown menu to the right. 

- Under **Project**, click **Volumes** and then **Snapshots** in the sidebar menu.

- Locate the snapshot in the list and press **Delete snapshot** from its dropdown menu to the right. 

.. note::

   If you are unsure of which volume snapshot to delete, its possible to press the ID of the Volume
   to see which instance its attached to.

   The image is metadata and has no ties the actual instance it was modeled from.

OpenStack Terminal Client
-------------------------

To delete a snapshot using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack image list --private``, save the ID of the image/snapshot that
  you want to delete.

- Run this command: ``openstack image delete [ID_OF_IMAGE]``, specifying the ID of the image.

- Run this command: ``openstack volume snapshot list``, save the ID of the snapshot that you
  want to delete.

- Run this command: ``openstack volume snapshot delete [SNAPSHOT_ID]``, specifying the ID of
  the snapshot to delete.

.. note::

   If you are unsure of which volume snapshot to delete, its possible to run
   ``openstack volume snapshot show [SNAPSHOT_ID]`` to get information on what
   volume it was created from.

   Based on the volume ID, you could then run ``openstack volume show [VOLUME_ID] -c attachements``
   to get information on the attachments of the volume (i.e. which instance its attached to).

   Finally, using the server ID, you can get the instance of the volume as
   such ``openstack server show [SERVER_ID] -c name``.

   The image is metadata and has no ties the actual instance it was modeled from.

..  seealso::

    - :doc:`index`
    - :doc:`../persistent-block-storage/index`
