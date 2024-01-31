===============
Create snapshot
===============

Snapshots are pretty much instantly created. Its possible to take snapshots of single volumes, this is done via the "volume" menus. We will here focus on snapshotting the entire instance, which will snapshot all volumes that are assigned to the instance as well as save the instances meta data in an image. This enables you to start a brand new instance that is identical to the current one, as well as manipulate the disks individual snapshots. 

.. important:: For data integrity reasons, we recommend shutting of an instance before snapshotting its volumes. Incomplete writes might otherwise impact data-integrity (of the snapshot, not the volume). It is however possible to snapshot instances that are running.

We recommend only having snapshots for limited periods of time. The more writes that are added to a snapshot, the longer it will take to consolidate when deleting. Because of this, snapshots should be regularly :doc:`deleted <delete-snapshot>`.

Cloud management portal
-----------------------

To create a snapshot using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

- Press "Compute" and then "Instances" in the sidebar menu.
- Press the instance that you want to resize.
- Press the "Snapshots" tab. 
- Press "Create snapshot" button.
- Name your snapshot. 
- Press "Create".

Your snapshot is available in the "Snapshot" tab of the instance as well as if you press "Storage" and then "Snapshots" in the main menu. In the latter case, there will be one snapshot per volume of the instance you created the snapshots from (only one if the instance only had a single volume).

OpenStack Horizon
-----------------

To create a snapshot using :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

- Under "project", click "compute" and then "instances" in the sidebar menu.
- In the drop-down menu to the far right of the line corresponding to the instance you want to snapshot, press "create snapshot (which is either the default option if the instance is running, of in the drop-down if its not)".
- Name your snapshot. 
- Press "Create Snapshot".

Your snapshot is available in the "Images" menu (under main menu "Compute") as well as if you press "Volumes" and then "Snapshots" in the main menu. In the latter case, there will be one snapshot per volume of the instance you created the snapshots from (only one if the instance only had a single volume).

OpenStack Terminal Client
-------------------------

To create a snapshot using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- Run this command: ``openstack server list``, note the name of the instance you want to snapshot.
- Run this command: ``openstack server image create --name [SNAPSHOT_NAME] [INSTANCE_NAME]``, replacing the items in angle brackets with a descriptive name (this is optional, if omitted the instance name will be used) and and the name of the instance you want to snapshot.
- Run this command to verify: ``openstack image list --private``

..  seealso::
    - :doc:`index`
    - :doc:`../persistent-block-storage/index`
