=============================
Recreate instance from volume
=============================

Sometimes its necessary to re-create an Openstack instance from a current volume. The process looks like this:

#. Shutdown the instance.
#. Create a snapshot of the volume.
#. Create a volume from the snapshot.
#. Create an instance from the volume.
#. If applicable, detach any other volumes from the source and re-attach them to the new instance.
#. Detach any floating IPs from the old instance and assign to the new one.
#. Update your connections to the new instances IP.
#. Delete the old instance (after verifying its not used).

The below instructions will only detail how to proceed in :doc:`/getting-started/managing-your-cloud/openstack-horizon` as its a volatile process.

.. Important::
	Do not delete anything before first verifying that it works.

Follow these steps:

- Shutdown the instance by logging into it and issuing poweroff (or similar).
- Create a :doc:`snapshot </storage/snapshots/create-snapshot>` of the root volume.
- Create a :doc:`volume from the snapshot </storage/snapshots/create-volume-from-snapshot>` and note its name.
- Create a :doc:`new instance </storage/persistent-block-storage/creating-an-instance-from-a-volume>` from the volume.
- :doc:`Detach </storage/persistent-block-storage/detach-volume>` any additional volumes from the original instance.
- To attach the volume(s) to the new instance, follow relevant instructions :doc:`here </storage/persistent-block-storage/create-volume>`.
- If you have a floating IP assigned to the original instance, remove it:

  - Under "project", click "compute" and then "instances" in the sidebar menu. 
  - On the drop down menu next to the old instance, press the small arrow.
  - Select "dissociate floating ip". 
  - Select the floating IP (if you have several, the repeat these steps for all).
  - Do not check "Release Floating IP" (as this will un-reserve the IP as well).
  - Press "Disassociate". 

  - Add the floating ip(s) to the new instance by following the instructions in :doc:`/networking/floating-ips`.
- You are now ready to start your instance. Once you have verified that it works you can proceed to delete the old instance. 

.. Important::
	When deleting the old instance, please first verify that it has no extra volumes attached (only the boot volume).

.. Note::
	The new instance will have gotten a new IP. While its possible to maintain the old one by using a static IP on the new instance, we recommend using the new one and updating your DNS and/or connection strings (etc). 
