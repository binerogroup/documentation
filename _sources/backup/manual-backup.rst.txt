========================
Setting up manual backup
========================

When doing a manual backup, you would copy a single volume (in its entirety) and send
the data to the backup system.

We recommend first reading through our :doc:`general information <index>` on backups to
get more information about the backup system.

You are able to use one of the following methods to take a backup.

.. note::

   It will take some time to take a backup as it involves moving all data of the server to
   the backup storage.

Cloud management portal
-----------------------

To create a backup of a volume by using the
:doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Storage** and then **Backups** in the sidebar menu.

- Press the **+** icon in the lower right corner.

- Select a volume from the dropdown menu. If you are unsure about which volume (ID) you
  can check the instance to see which volumes is currently attached to it: 

  - Press **Compute** and then **Instances**. 

  - Press the instance you want to backup.

  - Press the **Volumes** tab. 

  - Note the name of the attached volumes (there might be many).

- Give your backup a name. 

- Press **Force** if the volume is currently attached to an instance or else the backup
  will give an error.

- Optionally, give your backup a description. 

- Press **Create backup**

.. note::

   An option for doing incremental backups exists but the platform will not keep track of the full backups.

OpenStack Horizon
-----------------

To create a backup of a volume by using
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Volumes** and then **Volumes** in the sidebar menu.

- Click **Create backup** in the dropdown menu to the far right on the row of the volume that you
  want to backup. You are able to see which instance the volume is currently attached to in the
  **Attached to** column.

- Give your backup a name and optionally a description.

- Optionally select a snapshot if you want to backup based on a snapshot and not the entire disk.

- Press the **Create volume backup** button.

OpenStack Terminal Client
-------------------------

To create a volume by using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack volume list``, save the ID of the volume you want to backup. Its visible
  which instance the volumes is currently attached to in the **Attached to** column. 

- Run this command: ``openstack volume backup create --force --name [BACKUP_NAME] [VOLUME_ID]``, replacing
  with the name of the backup and the ID from the previous step.

- If you want to backup a snapshot, you could instead first list the snapshots by running ``openstack volume snapshot list``
  and then backup using ``openstack volume backup create --force --name [BACKUP_NAME] --snapshot [SNAPSHOT_ID] [VOLUME_ID]``

.. note:: 

   The ``--force`` is only required if the volume is attached to an instance.

..  seealso::

    - :doc:`restore-volume`
