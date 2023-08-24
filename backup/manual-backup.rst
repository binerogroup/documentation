========================
Setting up manual backup
========================
When doing a manual backup, you would copy a single volume (in its entirety) and send the data to the backup system. We recommend first reading through our :doc:`general information <index>` on backups to get more information about the backup system. You are able to use one of the following methods to take a backup.

.. Note::
	It will take some time to take a backup as it involves moving all data of the server to the 

Cloud management portal
-----------------------
To create a backup of a volume using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

- Press "Storage" and then "Backups" in the sidebar menu.
- Press the "+" icon in the bottom right corner.
- Select a volume from the drop-down menu. If you are unsure about which volume (due to IDs being used) you can check the instance to see which volumes are attached to it: 

  - Press "Compute" and then "Instances". 
  - Press the instance you want to backup.
  - Press the "Volumes" tab. 
  - Note the name of the attached volumes (there may be several).

- Give your backup a name. 
- Press "Force" if your instance is running (or else the backup will fail). 
- Optionally, give your backup a description. 
- Press "Create backup".

.. Note::
	There is the option of doing incremental backups but the platform will not keep track of the full-dump. Our recommendation is therefore that you only do full backups as deleting the full dump would invalidate the incremental backups that are tied to it.


OpenStack Horizon
-----------------
To create a backup of a volume using :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

- Under "project", click "Volumes" and then "Volumes" in the sidebar menu.
- Click "Create backup" in the drop down menu to the far right on the row of the volume that you want to backup. You are able to see which instance the volume is attached to in the "Attached to" column. 
- Give your backup a name and optionally a description.
- Optionally select a snapshot if you want to backup based on a snapshot and not the entire disk.
- Press the "Create volume backup" button.


OpenStack Terminal Client
-------------------------
To create a volume using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- Run this command: ``$ openstack volume list``, save the ID of the volume you want to backup. Its visible which instance the volumes are attached to in the "Attached to" column. 
- Run this command: ``$ openstack volume backup create --force --name [BACKUP_NAME] [VOLUME_ID]``, replacing with the name of the backup and the ID from the previous step.
- If you want to backup a snapshot, you could instead first list the snapshots by running ``$ openstack volume snapshot list`` and then backup using ``$ openstack volume backup create --force --name [BACKUP_NAME] --snapshot [SNAPSHOT_ID] [VOLUME_ID]``

.. Note:: 
	``--force`` is only needed if the instance is running. 

..  seealso::
    - :doc:`restore-volume`