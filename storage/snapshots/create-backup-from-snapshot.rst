===========================
Create backup from snapshot
===========================

A snapshot is a good base for creating a backup as its guaranteed to be static data. That is, once the snapshot has been completed (which is a fast procedure), no more writes will occur to the data in the snapshot. This means that assuming the snapshot was taken in a manner guaranteeing data integrity (for instance when the instance was switched off - or when writes where quiesced), the backup will (even though it takes much longer due to copying data to secondary storage) also guarantee data integrity. More information on backups (which we recommend you to read) is available in our :doc:`/backup/index` article.

.. note:: Backups are just for volumes. You are not able to backup an image. The image, however, is just meta-data about how your instance was configured and is easily replaced by just mimicking the same settings when :doc:`creating an instance from a volume <../persistent-block-storage/creating-an-instance-from-a-volume>`.

Cloud management portal
-----------------------

Its not possible to create a backup from a snapshot manually using the cloud management portal.

OpenStack Horizon
-----------------

To create a backup from a snapshot using :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

- Under "project", click "Volumes" and then "Snapshots" in the sidebar menu.
- Locate the snapshot in the list and press "Create backup" from its drop down menu to the right.
- Input a name for your backup and an optional description.
- Leave the container field empty. 
- The snapshot you chose should be pre-selected, if not select it.
- Press "Create Volume Backup".

OpenStack Terminal Client
-------------------------

To create a backup from a snapshot using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- Run this command: ``openstack volume snapshot list``, save the ID of the snapshot you want to backup.
- Run this command: ``openstack volume snapshot show [SNAPSHOT_ID] -c volume_id``, replace the SNAPSHOT_ID with the id from previous command. Save the volume ID of the snapshot.
- Run this command: ``openstack volume backup create --snapshot [SNAPSHOT_ID] --name [BACKUP_NAME] [VOLUME_ID]``, replacing the items in angle brackets with the values from previous two commands as well as a name for the backup-job.
- Run this command to verify: ``openstack volume backup list``, the backup will have the "Status" change from "creating" to "available" when done.

..  seealso::
    - :doc:`index`
    - :doc:`../persistent-block-storage/index`
