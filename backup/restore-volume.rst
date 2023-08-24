==========================
Restore volume from backup
==========================
When restoring from backup, you would restore an entire volume. Restoring single files is not possible but would require an :doc:`instance </compute/index>` be setup, launched and then the files could be collected from the instance. 

To restore, you would first create a volume, restore to it and then :doc:`create and instance from the volume </storage/persistent-block-storage/creating-an-instance-from-a-volume>`. Below follows instructions on how to do restores from various platforms:

Cloud management portal
-----------------------
To restore a backup to a volume using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

- Press "Storage" and then "Backups" in the sidebar menu.
- Note the size of the backup you would like to restore. 
- Follow the steps in our :doc:`/storage/persistent-block-storage/create-volume` guide to create an empty volume of the same size as the backup. Note the name.
- Press "Storage" and then "Backups" in the sidebar menu.
- Press the small rounded arrow "Restore backup" on the backup that you want to restore.
- Select the volume you just created in the dropdown "Volume". 
- Press "restore backup". 

.. Note::
	While there is an option to create a new volume when restoring a backup, this does not work due to not taking availability zones into consideration. Therefore you need to first create a volume. 

OpenStack Horizon
-----------------
To restore a backup of a volume using :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

- Under "project", click "Volumes" and then "Backups" in the sidebar menu.
- Note the size of the backup you would like to restore. 
- Follow the steps in our :doc:`/storage/persistent-block-storage/create-volume` guide to create an empty volume of the same size as the backup. Note the name.
- Under "project", click "Volumes" and then "Backups" in the sidebar menu.
- Press "Restore backup" to the far right on the line of the backup that you want to restore.
- Select the volume you just created in the dropdown "Select Volume". 
- Press "Restore backup to volume". 

OpenStack Terminal Client
-------------------------
To restore a volume using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- Run this command: ``$ openstack volume backup list``, note the size of the backup that you want to restore as well as the ID.
- Follow the steps in our :doc:`/storage/persistent-block-storage/create-volume` guide to create an empty volume of the same size as the backup. Note the ID it gets. Can also be gotten by running ``$ openstack volume list``.
- Run this command: ``$ openstack volume backup restore --force [BACKUP_ID] [VOLUME_ID]``

.. Note:: 
	As of writing this, the restore via CLI is not working as intended on all versions of the client. If you get issues from above command, please try a restore via one of the other options. 

..  seealso::
    - :doc:`index`
    - :doc:`manual-backup`
    - :doc:`automatic-backup`