============================================
Creating an instance from an existing volume
============================================

If you have a bootable volume available, maybe you've created it from a snapshot or you've previously decommissioned an instance (but saved the volume in order to be able to re-launch it), you can launch a new instance using the volume. 

Cloud management portal
-----------------------

To launch a new instance from an existing volume using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

- Follow our guide :doc:`/compute/launching-an-instance/cloud-management-portal`, however:
- When selecting boot source, press the "volumes" tab.
- Select your volume.
- Proceed as per the guide.

OpenStack Horizon
-----------------

To launch a new instance from an existing volume using :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

- Follow our guide :doc:`/compute/launching-an-instance/openstack-horizon`, however:
- On the second tab "Source", in the "Select boot source" drop down, select "Volume".
- Press the small arrow next to the volume you want to base the instance on (available below).
- Proceed as per the guide.

OpenStack Terminal Client
-------------------------

To launch a new instance from an existing volume using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- Follow our guide :doc:`/compute/launching-an-instance/openstack-horizon`, however:
- Run this command: ``openstack volume list --status available``, save the ID of the volume to use.
- Replace the server create command in the guide with the below, the "VOLUME_ID" you get from previous command. You may also skip the steps about which image to use as when using an existing volume, an image is not used.

::

     openstack server create \
     --flavor [FLAVOR NAME] \
     --availability-zone europe-se-1a \
     --volume [VOLUME_ID] \
     --network [NETWORK NAME] \
     --security-group default \
     --key-name [KEY NAME] \
     [NAME OF SERVER]

..  seealso::
    - :doc:`create-volume`
