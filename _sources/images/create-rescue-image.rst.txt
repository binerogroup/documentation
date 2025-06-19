===================
Create rescue image
===================

To :doc:`boot your instance from a rescue image </compute/boot-from-rescue>` you will
need to first have a rescue image available.

A rescue image can be an operating system installation media, Live-CD that boots an
entire operating system from an ISO file or any other rescue media

Because you need to set custom properties on the rescue image you can only
the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client` or
:doc:`/getting-started/managing-your-cloud/openstack-horizon`.

OpenStack Terminal Client
-------------------------

This will guide you through creating a rescue image by using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Download the rescue media ISO to your computer

- Upload it as a new image

.. note::

   Replace name and file with the correct information in below command.

::

    openstack image create [NAME] --property hw_rescue_device=cdrom --property hw_rescue_bus=scsi --disk-format iso --file [FILENAME] --private --progress

Your can now use your rescue image, make a note of the image name.

.. note::

   You're charged per hour for the uploaded image, make sure to delete
   the image when you're done to save on the hourly cost for the image.

..  seealso::

    - :doc:`index`
