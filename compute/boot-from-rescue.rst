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
don't boot from a volume. We'll focus on how to use the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`
instead to workaround this limitation.

OpenStack Terminal Client
-------------------------

To boot your instance from a rescue image by using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- We provide a public `SystemRescue <https://www.system-rescue.org>`_ image that you can use.

- You can use a custom rescue image or use our guide :doc:`here </images/create-rescue-image>`
  to create one.

- To connect the image to the instance run the command ``openstack --os-compute-api-version 2.87 server rescue --image <ISO_NAME> <INSTANCE_NAME>``, replacing
  ``<ISO_NAME>`` with the name from previous step and ``<INSTANCE_NAME>`` with the name of the
  instance that should mount the image.

  - It will take up to a few minutes to add the rescue image and for the instance to start. Use
    the :doc:`console <console>` to manage the instance when it's done.

- When you're done with the rescue remove the rescue image from the instance by running the
  command ``openstack server unrescue <INSTANCE_NAME>``.

.. note::

   If you've created a custom image and have issued ``unrescue`` on the instance remember to
   remove the image or you will pay an hourly fee per GB for the image, see our price list.

..  seealso::

    - :doc:`/images/create-rescue-image`
    - :doc:`index`
