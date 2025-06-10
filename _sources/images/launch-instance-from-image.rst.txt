==========================
Launch instance from image
==========================

When :doc:`snapshotting </storage/snapshots/index>` and entire instance, the end result is
an :doc:`image <index>`. Restoring from a snapshot (assuming the entire instance was restored) is
then the same as creating an instance from a private image.

When restoring an entire instance from a snapshot, which might be the case if for example an
upgrade failed post snapshot and you want to revert to the previous state, you would create a
new instance from the image that was generated.

This is a good method because it allows you to safely ensure that your new instance is up and
running before deleting the old one (and not doing major changes to the only copy of the image).

.. note:: While there is a feature in the cloud management portal to do an in place restore to
          the current instance, we *do not recommend it*, but rather that you follow below guide
          to create a new instance from the image. 

Please follow our below guide from creating an instance from a private image using our various tools.

Cloud management portal
-----------------------

To create a snapshot using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Click **Compute** and then **Images** in the sidebar menu

- On the image that you want to use as base, press the small arrow **Create from image**

- Enter a name

- Select a :doc:`flavor </compute/flavors>` in the **Configuration** field

- Choose a :doc:`availability zone </compute/regions-and-availability-zones>`

- If applicable choose a :doc:`SSH key </compute/ssh-keys>`

- Choose a :doc:`subnet </networking/subnet/index>`

- Click **Create**

OpenStack Horizon
-----------------

To create a snapshot using :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Compute** and then **Images** in the sidebar menu

- Press **Launch** to the right on the row of the image

- Follow the instructions in our :doc:`/compute/launching-an-instance/openstack-horizon` guide

OpenStack Terminal Client
-------------------------

To create a snapshot using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- List the images and save the name of the image you want to create a new
  instance from

::

    openstack image list --private

- Follow the instructions in our :doc:`/compute/launching-an-instance/openstack-terminal-client` guide
  replacing the ``--image`` value from the public image in the example to your private image

..  seealso::
    - :doc:`index`
