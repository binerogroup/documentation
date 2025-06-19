===============
Delete snapshot
===============

If you took a snapshot of an instance there will be two parts to delete, the *volume snapshot(s)*
and the *created image*.

Deleting a snapshot is not the same as removing the data as you only remove the ability to revert
to that snapshot as it's permanently deleted.

.. note::

   If your intent was to revert to a snapshot to bring the instance or volume back to the state of
   taking the snapshot, see the :doc:`/images/launch-instance-from-image` guide.

We recommend only having snapshots for limited periods of time and that you regularly delete
old snapshots.

In the below example, we will delete both the image and the volume snapshots. If you only took a
snapshot of a volume, then the image will not be available and you should skip the first two steps.

Cloud management portal
-----------------------

To delete a snapshot by using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Compute** and then **Images** in the sidebar menu.

- Press the delete button (trashcan icon) of the image/snapshot you want to delete.

- Press **Storage** and then **Snapshots** in the sidebar menu.

- Press the delete button (trashcan icon) of the image/snapshot you want to delete.

.. note::

   If you are unsure of which volume snapshot to delete, its possible to press it and then press
   its related volumes and in turn, the volumes related instances.

   The image is metadata and has no ties the actual instance it's modeled from.

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

   The image is metadata and has no ties the actual instance it's modeled from.

OpenStack Terminal Client
-------------------------

To delete a snapshot by using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

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
   volume it's created from.

   Based on the volume ID, you could then run ``openstack volume show [VOLUME_ID] -c attachements``
   to get information on the attachments of the volume (i.e. which instance its attached to).

   Finally, using the server ID, you can get the instance of the volume as
   such ``openstack server show [SERVER_ID] -c name``.

   The image is metadata and has no ties the actual instance it's modeled from.

..  seealso::

    - :doc:`index`
    - :doc:`../persistent-block-storage/index`
