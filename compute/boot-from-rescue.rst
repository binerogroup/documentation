======================
Boot from rescue image
======================

Sometimes you need to boot your instance from an ISO image because the mounted
filesystem on the boot :doc:`volume </storage/persistent-block-storage/index>`
prevents you from fixing certain issues.

You can use a rescue image in these scenarios to boot an alternate operating
system, which can then fix problems with the volume.

The :doc:`/getting-started/managing-your-cloud/cloud-management-portal` includes
a rescue function, but it only lets you mount a rescue image on instances that
**don't** boot from a volume.

You need to use :doc:`/getting-started/managing-your-cloud/openstack-horizon` or
the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

We provide a public `SystemRescue <https://www.system-rescue.org>`_ image that you
can use.

You can use a custom rescue image or use our guide :doc:`here </images/create-rescue-image>`
to create one.

.. caution::

   This operation stops the instance, boots it from the rescue image, and makes it available
   only through the :doc:`console <console>`

.. tip::

   If you've created a custom rescue image remember to delete the image or you will
   pay an hourly fee per GB for the image, see our price list.

OpenStack Horizon
-----------------

- Under **Project**, click **Compute** and then **Instances** in the sidebar menu

- Open the actions dropdown to the right of the instance you want to resize and
  click **Rescue Instance**

- Select a rescue image and click **Confirm**

- It will take a few minutes for the instance to start with the rescue image. Use
  the :doc:`console <console>` to manage the instance when in rescue mode.

- When you're done with rescue click the actions dropdown again and click **Unrescue
  Instance**

OpenStack Terminal Client
-------------------------

- Run the rescue action for the instance using the image UUID or image name

::

    openstack --os-compute-api-version 2.87 server rescue --image <image> <instance>

- It will take a few minutes for the instance to start with the rescue image. Use
  the :doc:`console <console>` to manage the instance when in rescue mode.

- When you're done with rescue remove the rescue image from the instance

::

    openstack server unrescue <instance>

..  seealso::

    - :doc:`/images/create-rescue-image`
    - :doc:`index`
