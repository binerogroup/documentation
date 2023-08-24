==========================
Extend a persistent volume
==========================
You are able to extend volumes to create more space available on your compute instances. This is good because you do not have to pay for space that you are not sure if you are going to need or not, from when setting up the instance and can start small.

.. Note::
	While its easy to extent the volume, you cannot revert and extension because a volume cannot be shrunk (the platform cannot guarantee the space it removes is not in use on the volume - as well as the filesystem would break). Therefore, take care to only extend volumes that you will not want to shrink again. Setting up a new, smaller volume and moving the data is a possible workaround for this.

.. Important::
	Manipulating the partition table of disks is always a dangerous process. We **strongly** recommend first :doc:`backing up </backup/index>` your instances disks before proceeding.

Cloud management portal
-----------------------
To extend a volume using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

- Press "Compute" and then "instances".
- Press the instance to which the volume you want to extend is connected.
- Press the "Volumes" tab. It might require scrolling the tabs to the right.
- Press the name of the volume that you want to extend.
- Press the "Extend volume" button (to the top right, looks like a dotted square). 
- Enter the new size in GB and press "Extend".

OpenStack Horizon
-----------------
To extend a volume using :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

- Under "project", press "Compute" and then "Instances" in the sidebar menu.
- Press the instance to which the volume you want to extend is connected.
- Press the name of the volume under the "Volumes Attached" section.
- Press the drop down next to "edit volume" on the top right and select "Extend volume". 
- Enter the new size in GB and press "Extend Volume".

OpenStack Terminal Client
-------------------------
To extend a volume using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- Run this command: ``$ openstack server list``, save the name of the instance to which the volume you want to extend is connected.
- Run this command: ``$ openstack server volume list [NAME_OF_INSTANCE]``, replacing the name with that from previous step.
- Notice the "Device" column that shows you what device is referenced. If the instance only has a single device then only one row is shown, however if the instance has several, the device name should correlate with the volume name in Linux (although "vda" might be "sda"), or the device order in Windows. Save the "Volume ID" of the volume you want to extend.
- Run this command: ``$ openstack --os-volume-api-version 3.42 volume set [VOLUME_ID] --size [SIZE]``, replacing the values in angle brackets with the volume ID from the previous step and the size in GB. Note the ``--os-volume-api-version 3.42`` which is currently needed due to limitation in the standard API.
- To verify, run this command: ``$ openstack volume show [VOLUME_ID] -c size``, replacing value with the volume ID. 

Operation inside OS
-------------------
Above we demonstrate the process for growing a volume in the platform but there is also a need to grow the disk logged into the instance. Depending on what operating system you are running and how your disks are laid out, this process will will vary and below are just suggestions that we have found to be useful. For a complete reference, please see your operating systems documentation.

.. Important::
	Manipulating the partition table of disks is always a dangerous process. We **strongly** recommend first :doc:`backing up </backup/index>` your instances disks before proceeding.

Linux
^^^^^

- Run this command: ``$ lsblk``, verify that the new disk size is visible on the device. If its not, reboot your machine and try again. 
- Run this command: ``$ growpart -u auto /dev/sda 1``, use the correct device ("/dev/sda" in the example) from previous commands output. This may not work on all images, if not then we recommend reading the documentation of the Linux release. 
- Run this command: ``$ resize2fs /dev/sda1``.
- To verify, run this command: ``$ df -h /dev/sda1``.

Windows
^^^^^^^

- Type Computer Management in the search box on the taskbar, select and hold (or right-click) Computer Management, and then select Run as administrator > Yes. After Computer Management opens, go to Storage > Disk Management.
- Select and hold (or right-click) the volume that you want to extend, and then select Extend Volume.

..  seealso::
    - :doc:`create-volume`