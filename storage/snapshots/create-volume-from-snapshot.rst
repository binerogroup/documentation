===============================
Create a volume from a snapshot
===============================

If you want to access the data of a snapshot (without provisioning a entirely new
identical instance :doc:`from an image </images/launch-instance-from-image>`), you
would first need to create a new volume based on the data in the snapshot (the actual
snapshot cannot be manipulated as there are dependencies to it within the volume that
houses it). 

When doing this, the new volume will be separate from the original volume and will
forthwith provide its data in its own right.

The version of the data would be from the time of when the snapshot was taken.

The new volume could be attached (see subsection of our guide :doc:`../persistent-block-storage/create-volume`
for more info on attaching a volume) to any instance or used as base to create an entirely
new instance (if it was a boot volume).

.. note::

   If your intent is to create a new instance based on a volume, using OpenStack Horizon there is
   an option in the dropdown on the row of each snapshot to use it as base for a new instance, this
   would be the easiest and fastest approach.

Cloud management portal
-----------------------

The cloud management portal cannot create a volume based on a snapshot but can create it
based on a current volume. See :doc:`../persistent-block-storage/create-volume` for more
information.

OpenStack Horizon
-----------------

To create a volume from a snapshot using :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Volumes** and then **Snapshots** in the sidebar menu.

- In the dropdown menu to the far right of the line corresponding to the snapshot you want to
  use as base, press **Create volume** (which is either the default option or in the dropdown list).

- Name your new volume and optionally give it a description.

- If you want to increase the size, enter the new size in the **Size** field.

- Press **Create volume**

OpenStack Terminal Client
-------------------------

To create a volume from a snapshot using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack volume snapshot list``, save the ID of the snapshot you want
  to backup.

- Run this command: ``openstack volume create --snapshot [SNAPSHOT_ID] [VOLUME_NAME]``, replacing
  the items in angle brackets with the ID from previous step and a descriptive name for the new volume. 

- Run this command to verify: ``openstack volume list``, the new volume will have a **Status** of
  **available** when done.

..  seealso::

    - :doc:`index`
    - :doc:`../persistent-block-storage/index`
