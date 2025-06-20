============================
Creating a persistent volume
============================

If you just want a single disk attached to your instance, this will get created with the instance
and does not need to be separately created. If you want more disks, then you need to create and
attach more volumes to the instance. 

New volumes can either be empty or based on:

- A previous :doc:`image </images/index>`, public or private.

- A current volume (only in the cloud management portal).

- :doc:`A snapshot <../snapshots/create-volume-from-snapshot>` (only in OpenStack Horizon or via
  OpenStack terminal client).

If your intention was to create an instance from a previous volume, follow the steps in our
guide :doc:`creating-an-instance-from-a-volume`.

.. note::

   New volumes created and attached to an instance might not get deleted with the
   instance.

.. note::

   Volumes cost according to our price list even when they are not attached to
   an instance.

Cloud management portal
-----------------------

To create a volume by using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Storage** and then **Volumes** in the sidebar menu.

- Press the **+** (plus) icon in the lower right corner.

- Region should be *europe-se-1*.

- :doc:`availability zone <../regions-and-availability-zones>` should be the same as the one your
  instance is running in. Choosing default means *europe-se-1a*.

- Name your volume and optionally give it a description.

- Choose what to use as base for your volume (see above).

- Choose the size of the volume in GB.

- Choose which :doc:`volume type <../storage-types>` you want for your volume.	

- Press **Create**

To attach your volume:

- Press **Compute** and then **Instances**

- Press the instance you want to connect the volume to.

- Press the **Volumes** tab. It might require scrolling the tabs to the right.

- Press **Connect volume**

- Select your volume in the list and press **Attach**

OpenStack Horizon
-----------------

To create a volume by using :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Volumes** and then **Volumes** in the sidebar menu.

- Click **+ Create volume** in the right upper corner.

- Name your volume and optionally give it a description.

- Choose what to use as source for your volume (see above).

- Choose which :doc:`volume type <../storage-types>` you want for your volume.

- Choose the size of the volume in GB.

- Choose :doc:`availability zone <../regions-and-availability-zones>`, it should be the same
  as the one the instance you want to connect the volume to is running in. Choosing default
  means *europe-se-1a*.

- Press **Create volume**

To attach your volume:

- Under **Project**, click **Compute** and then **Instances** in the sidebar menu.

- Click the name of the instance to which you want to attach the volume.

- Press the small dropdown to the far right on the row of the instance you want to add the
  volume to and choose **Attach volume**

- Select the volume you created and press **Attach volume**

OpenStack Terminal Client
-------------------------

To create a volume by using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack volume type list``. Save the name of the volume type you
  want to use. 

- Run this command: ``openstack availability zone list --volume``. Save the name of the
  availability zone you want to use.

- Run this command: ``openstack volume create --type [VOLUME_TYPE_NAME] --size [SIZE_IN_GB] --availability-zone [AVAILABILITY_ZONE] [VOLUME_NAME]``, replacing
  the values in angle brackets with values from previous steps and your selections.

To attach your volume:

- Run this command: ``openstack volume list``, save the ID (not name) of the volume you
  want to attach.

- Run this command: ``openstack server list``, save the ID (not name) of the instance to
  which you want to attach the volume.

- Run this command: ``openstack server add volume [INSTANCE_ID] [VOLUME_ID]``
