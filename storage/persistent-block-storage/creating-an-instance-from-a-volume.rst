============================================
Creating an instance from an existing volume
============================================

If you have a bootable volume available you can launch a new instance
using the volume.

Cloud management portal
-----------------------

To launch a new instance from an existing volume by using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Follow our guide :doc:`/compute/launching-an-instance/cloud-management-portal`, but:

  - When selecting boot source, press the **Volumes** tab.

  - Select your volume.

  - Proceed according to the guide.

OpenStack Horizon
-----------------

To launch a new instance from an existing volume by using :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Follow our guide :doc:`/compute/launching-an-instance/openstack-horizon`, but:

  - On the second tab **Source**, in the **Select boot source** dropdown, select **Volume**

  - Press the small arrow next to the volume you want to base the instance on (available below).

  - Proceed according to the guide.

OpenStack Terminal Client
-------------------------

To launch a new instance from an existing volume by using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Follow our guide :doc:`/compute/launching-an-instance/openstack-horizon`, but:

  - Run this command: ``openstack volume list --status available``, save the ID of the volume to use.

  - Replace the server create command in the guide with the below, the **Volume ID** you get from previous
    command. You can also skip the steps about which image to use as when using an existing volume, an
    image is not used.

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
