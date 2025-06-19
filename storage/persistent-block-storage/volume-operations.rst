=================
Volume operations
=================

On a volume, you can: 

- :doc:`Extend the size <extend-volume>`

- :doc:`Create and work with snapshots <../snapshots/index>`

- :doc:`Change the type (for SSD and HDD volumes) <../retype-a-volume>`

You are also able to :doc:`backup </backup/index>` your volumes and re-use
them as :doc:`images </images/index>`. 

A volume created at the same time as an instance can have the **Delete on termination**
set which means the volume is **permanently deleted** when deleting the instance.

If you want to keep a volume you can always perform any of the below actions
to save or clone a volume.

- Backup the volume.

- Copy the volume to an image.

- Snapshot the volume and create a new volume from the snapshot

.. important::

   Standard behaviour is that a volume gets deleted with its instance. Don't delete an instance
   that you want to keep data from without performing one of the above actions first. 
