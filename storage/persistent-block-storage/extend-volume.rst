==========================
Extend a persistent volume
==========================

You are able to extend volumes to create more space available on your compute instances.

This is good because you do not have to pay for space that you are not sure if you are
going to need or not, from when setting up the instance and can start small.

.. caution::

   While you can extent a volume, you cannot revert an extension because a volume cannot
   be shrunk. If you need a smaller volume, create a new volume and migrate the data.

.. important::

   Manipulating the partition table of disks is always a dangerous process. We **strongly**
   recommend first :doc:`backing up </backup/index>` your instances disks before proceeding.

Cloud management portal
-----------------------

To extend a volume using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Compute** and then **instances**.

- Press the instance to which the volume you want to extend is connected.

- Press the **Volumes** tab. It might require scrolling the tabs to the right.

- Press the name of the volume that you want to extend.

- Press the **Extend volume** button (to the top right, looks like a dotted square). 

- Enter the new size in GB and press **Extend**.

OpenStack Horizon
-----------------

To extend a volume using :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, press **Compute** and then **Instances** in the sidebar menu.

- Press the instance to which the volume you want to extend is connected.

- Press the name of the volume under the **Volumes Attached** section.

- Press the dropdown next to **Edit volume** on the top right and select **Extend volume**

- Enter the new size in GB and press **Extend Volume**

OpenStack Terminal Client
-------------------------

To extend a volume using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack server list``, save the name of the instance to which the
  volume you want to extend is connected.

- Run this command: ``openstack server volume list [NAME_OF_INSTANCE]``, replacing the name
  with that from previous step.

- Find the volume you want to extend and copy the volume ID.

.. note::

   The 3.42 microversion or newer needs to be used for the Cinder API as that introduced
   support for extending an in-use volume.

- Run this command: ``openstack --os-volume-api-version 3.42 volume set [VOLUME_ID] --size [SIZE]``, replacing
  the values in angle brackets with the volume ID from the previous step and the size in GB.

- To verify, run this command: ``openstack volume show [VOLUME_ID] -c size``, replacing value
  with the volume ID. 

Operation inside operating system
---------------------------------

Above we demonstrate the process for growing a volume in the platform but there is also a need to grow
the disk logged into the instance. Depending on what operating system you are running and how your disks
are laid out, this process will vary and below are just suggestions that we have found to be useful.

For a complete reference, please see your operating systems documentation.

.. important::

   Manipulating the partition table of disks is always a dangerous process. We **strongly** recommend
   first :doc:`backing up </backup/index>` your instances disks before proceeding.

Linux
^^^^^

- Run this command: ``lsblk``, verify that the new disk size is visible on the device. If its not, reboot
  your machine and try again. 

- Run this command: ``growpart -u auto /dev/sda 1``, use the correct device (``/dev/sda`` in the example) from
  previous commands output. This may not work on all images, if not then we recommend reading the documentation
  of your Linux distribution.

- Run this command: ``resize2fs /dev/sda1``.

- To verify, run this command: ``df -h /dev/sda1``.

Windows
^^^^^^^

- Type Computer Management in the search box on the taskbar, select and hold (or right-click) Computer Management, and
  then select Run as administrator > Yes. After Computer Management opens, go to Storage > Disk Management.

- Select and hold (or right-click) the volume that you want to extend, and then select Extend Volume.

..  seealso::

    - :doc:`create-volume`
