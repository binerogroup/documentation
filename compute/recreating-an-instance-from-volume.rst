==================================
Recreating an instance from volume
==================================

.. note::

   This assumes that you have booted your instance from a volume and
   not using local storage such as with the NVMe :doc:`flavors <flavors>`.

You can re-create an instance that's spawned from a volume by creating a snapshot
on the volume, creating a new volume from that snapshot and then create a new
instance from that volume.

.. caution::

   Do not delete anything before first verifying that it works.

.. note::

   The below instructions walk-through using
   :doc:`/getting-started/managing-your-cloud/openstack-horizon`.

.. note::

   The new instance will have a new IP address, you need to update any internal DNS or
   configuration where this you might reference this address.

- Shutdown the instance, preferably by logging into the instance and doing a clean shutdown
  from the operating system.

- Create a :doc:`snapshot </storage/snapshots/create-snapshot>` of the volume the instance
  boots from (also called root volume).

- Create a new :doc:`volume from the snapshot </storage/snapshots/create-volume-from-snapshot>`.

- Create a :doc:`new instance </storage/persistent-block-storage/creating-an-instance-from-a-volume>`
  from the new volume.

- :doc:`Detach </storage/persistent-block-storage/detach-volume>` any extra volumes from the
  original instance and attach them to the new instance, refer to the documentation 
  :doc:`here </storage/persistent-block-storage/create-volume>`.

- If you have a floating IP assigned to the original instance move it to the new instance.

  - Under **Project**, click **Compute** and then **Instances** in the sidebar menu.

  - In the dropdown menu next to the old instance, press the small arrow and select ``Disassociate floating IP``.

  - Select the floating IP (if you have many, repeat these steps for all).

  - **Do not** check **Release Floating IP** as this will release the floating IP from your project.

  - Click ``Disassociate``.

  - Add the floating IP(s) to the new instance by following the instructions :doc:`here </networking/floating-ips>`.

- You are now ready to start your new instance.

.. caution::

   When deleting the old instance, first verify that it has no extra volumes
   attached (only the root volume).

- When you have verified that it works you can proceed to delete the old instance.
