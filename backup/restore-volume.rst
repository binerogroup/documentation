==========================
Restore volume from backup
==========================

When restoring from backup, you would restore an entire volume.

Restoring single files is not possible and requires creating a
new :doc:`instance </compute/index>` created you can then collect
the files from the instance. 

To restore, you would first create a volume, restore to it and then
:doc:`create and instance from the volume </storage/persistent-block-storage/creating-an-instance-from-a-volume>`.

Cloud management portal
-----------------------

To restore a backup to a volume by using the
:doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Storage** and then **Backups** in the sidebar menu.

- Note the size of the backup you want to restore. 

- Follow the steps in our :doc:`/storage/persistent-block-storage/create-volume` guide to
  create an empty volume of the same size as the backup. Note the name.

- Press **Storage** and then **Backups** in the sidebar menu.

- Press the small rounded arrow **Restore backup** on the backup that you want to restore.

- Select the volume you just created in the dropdown **Volume**

- Press **Restore backup**

.. note::

   While there is an option to create a new volume when restoring a backup, this does not work due to
   not taking availability zones into consideration, you need to first create a new empty volume that
   you can restore to.

OpenStack Horizon
-----------------

To restore a backup of a volume by using
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Volumes** and then **Backups** in the sidebar menu.

- Note the size of the backup you want to restore.

- Follow the steps in our :doc:`/storage/persistent-block-storage/create-volume` guide to create an
  empty volume of the same size as the backup. Note the name.

- Under **Project**, click **Volumes** and then **Backups** in the sidebar menu.

- Press **Restore backup** to the far right on the line of the backup that you want
  to restore.

- Select the volume you just created in the dropdown **Select Volume**

- Press **Restore backup to volume**

OpenStack Terminal Client
-------------------------

To restore a volume by using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack volume backup list``, note the size of the backup that you want to
  restore and the backup ID.

- Follow the steps in our :doc:`/storage/persistent-block-storage/create-volume` guide to create a
  new empty volume of the same size as the backup. Note the new volume ID, of find the volume with
  command ``openstack volume list``.

- Run this command: ``openstack volume backup restore --force [BACKUP_ID] [VOLUME_ID]``

.. note::

   As of writing this, the restore via CLI is not working as intended on all versions of the
   client. If you get issues from above command, try a newer version of the client or restore
   via one of the other options. 

..  seealso::

    - :doc:`index`
    - :doc:`manual-backup`
    - :doc:`automatic-backup`
