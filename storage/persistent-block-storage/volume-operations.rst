=================
Volume operations
=================
On a volume, you can: 

- :doc:`Extend the size <extend-volume>`
- :doc:`Create and work with snapshots <../snapshots/index>`
- :doc:`Change the type (for ssd and hdd volumes) <../retype-a-volume>`

You are also able to :doc:`backup </backup/index>` your volumes as well as re-use them as :doc:`images </images/index>`. 

A volume can be saved irrespectively from the instance it was created with but the standard behaviour is to delete a volume when the instance is deleted. There are som ways to get around this:

- Backup the volume.
- Copy the volume to an image.
- Snapshot the volume and create a new volume from the snapshot

.. Important::
	Standard behaviour is that a volume gets deleted with its instance. Don't delete an instance that you want to keep data from without performing one of the above actions first. 