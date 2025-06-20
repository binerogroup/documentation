===========================
Create backup from snapshot
===========================

A snapshot is a good base for creating a backup as its guaranteed to be
static data. That is, once the snapshot is available (which is a fast
procedure), no more writes will occur to the data in the snapshot, this
assumes the integrity of the data stored, see :doc:`/storage/snapshots/create-snapshot`.

More information on backups (which we recommend you to read) is available in
our :doc:`/backup/index` article.

.. note::

   Backups are just for volumes. You are not able to backup an image.

Cloud management portal
-----------------------

Its not possible to create a backup from a snapshot manually using the cloud
management portal.

OpenStack Horizon
-----------------

To create a backup from a snapshot by using
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Volumes** and then **Snapshots** in the sidebar menu.

- Locate the snapshot in the list and click **Create backup** from its dropdown menu to the right.

- Input a name for your backup and an optional description.

- Leave the container field empty. 

- The snapshot you chose should be pre-selected, if not select it.

- Click **Create Volume Backup**

OpenStack Terminal Client
-------------------------

To create a backup from a snapshot by using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack volume snapshot list``, save the ID of the snapshot you want to backup.

- Run this command: ``openstack volume snapshot show [SNAPSHOT_ID] -c volume_id``, replace the SNAPSHOT_ID
  with the id from previous command. Save the volume ID of the snapshot.

- Run this command: ``openstack volume backup create --snapshot [SNAPSHOT_ID] --name [BACKUP_NAME] [VOLUME_ID]``, replacing
  the items in angle brackets with the values from previous two commands as well as a name for the backup-job.

- Run this command to verify: ``openstack volume backup list``, the status field on the backup will
  change from creating to available when done.

..  seealso::
    - :doc:`index`
    - :doc:`../persistent-block-storage/index`
